package creators.world.block;

import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Fill;
import arc.graphics.g2d.Lines;
import arc.math.Mathf;
import arc.util.io.Reads;
import arc.util.io.Writes;
import mindustry.Vars;
import mindustry.game.Team;
import mindustry.gen.Building;
import mindustry.graphics.Drawf;
import mindustry.graphics.Layer;
import mindustry.graphics.Pal;
import mindustry.world.Tile;
import mindustry.world.blocks.power.PowerNode;
import mindustry.world.consumers.ConsumePower;
import mindustry.world.meta.BlockStatus;
import mindustry.world.meta.Stat;

import static mindustry.Vars.tilesize;
import static mindustry.Vars.world;

public class CreatorsPowerField extends PowerNode {
    public Color drawColor = Team.sharded.color;
    public float drawAlphaA = 0.09f;
    public float drawAlphaB = 1f;

    public CreatorsPowerField(String name) {
        super(name);

        consumesPower = true;
        update = true;
        configurable = false;

        maxNodes = Integer.MAX_VALUE;

        buildType = CreatorsPowerFieldBuild::new;

        consPower = new ConsumePowerField();
    }

    public static class ConsumePowerField extends ConsumePower{
        @Override
        public float requestedPower(Building entity){
            if(entity instanceof CreatorsPowerFieldBuild){
                var b = (CreatorsPowerFieldBuild)entity;

                if(b.power.links.size > 0){
                    return capacity;
                }else{
                    return 0f;
                }
            }
            return 0;
        }
    }

    @Override
    public void drawPlace(int x, int y, int rotation, boolean valid){
        Tile tile = world.tile(x, y);
        if(tile == null) return;

        Lines.stroke(1f);
        Draw.color(Pal.placing);
        Drawf.circles(x * tilesize + offset, y * tilesize + offset, laserRange * tilesize);

        Draw.reset();
    }

    @Override
    public void setStats(){
        super.setStats();

        stats.remove(Stat.powerConnections);
    }

    @Override
    public void setBars(){
        super.setBars();

        removeBar("connections");
    }

    public class CreatorsPowerFieldBuild extends PowerNode.PowerNodeBuild {
        public int lastChange = -2;
        public float Radius = 0;

        @Override
        public void updateTile() {
            super.updateTile();

            Radius = Mathf.lerpDelta(Radius, laserRange * 8, 0.01f);

            if (lastChange != world.tileChanges) {
                lastChange = world.tileChanges;

                setBlock();
            }
        }

        public float linksRange(){
            return Radius;
        }

        @Override
        public void placed(){
            setBlock();
        }

        @Override
        public void drawConfigure(){
        }

        @Override
        public void drawSelect(){
        }

        @Override
        public void draw() {
            if (this.block.variants != 0 && this.block.variantRegions != null) {
                Draw.rect(this.block.variantRegions[Mathf.randomSeed(this.tile.pos(), 0, Math.max(0, this.block.variantRegions.length - 1))], this.x, this.y, this.drawrot());
            } else {
                Draw.rect(this.block.region, this.x, this.y, this.drawrot());
            }

            this.drawTeamTop();

            Draw.z(Layer.flyingUnit);

            Draw.color(drawColor);

            Lines.stroke(1.5f);
            Draw.alpha(drawAlphaA);
            Fill.circle(this.x, this.y, linksRange());
            Draw.alpha(drawAlphaB);
            Lines.circle(this.x, this.y, linksRange());
        }

        /*public void setBlock(){
            Vars.indexer.eachBlock(team, x, y, laserRange * 8, building -> building.team == team && building.block.hasPower, building -> {
                if(!power.links.contains(building.pos()) && building.dst(this) <= linksRange()) {
                    configure(building.pos());
                }else if(power.links.contains(building.pos()) && building.dst(this) > linksRange()){
                    configure(building.pos());
                }
            });
        }*/
        public void setBlock(){
            Vars.indexer.eachBlock(team, x, y, laserRange * 8, building -> building.team == team && building.block.hasPower, building -> {
                if(!power.links.contains(building.pos()) && building.dst(this) <= linksRange()) {
                    configurations.get(Integer.class).get(this, building.pos());
                }else if(power.links.contains(building.pos()) && building.dst(this) > linksRange()){
                    configurations.get(Integer.class).get(this, building.pos());
                }
            });
        }
        public BlockStatus status() {
            if(power.status == 0.0f){
                return BlockStatus.noOutput;
            }else if(power.status < 0f){
                return BlockStatus.noInput;
            }else if(power.status > 0f){
                return BlockStatus.active;
            }
            return BlockStatus.logicDisable;
        }

        @Override
        public void write(Writes write) {
            super.write(write);

            write.f(Radius);
        }

        @Override
        public void read(Reads read, byte revision) {
            super.read(read, revision);

            Radius = read.f();
        }
    }
}

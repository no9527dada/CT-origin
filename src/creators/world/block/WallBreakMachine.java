package creators.world.block;

import arc.Core;
import arc.audio.Sound;
import arc.func.Cons;
import arc.func.Intc2;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.TextureRegion;
import arc.math.Mathf;
import arc.math.geom.Geometry;
import arc.util.Nullable;
import arc.util.Tmp;
import mindustry.Vars;
import mindustry.content.Fx;
import mindustry.entities.Effect;
import mindustry.game.Team;
import mindustry.gen.Building;
import mindustry.gen.Sounds;
import mindustry.graphics.Drawf;
import mindustry.graphics.Layer;
import mindustry.graphics.Pal;
import mindustry.ui.Bar;
import mindustry.world.Block;
import mindustry.world.Tile;
import mindustry.world.blocks.environment.StaticWall;
import mindustry.world.meta.BlockGroup;
import mindustry.world.meta.Stat;

import static mindustry.Vars.tilesize;
import static mindustry.Vars.world;

/**
 * @author mfxiao xiaoyuyu
 * @date 2022/10/06
 * <br>
 * 用于破除墙壁
 * <br>
 * 只授权创世神模组使用其余不可使用
 */
public class WallBreakMachine extends Block {
    static int idx = 0;
    public int _range = 1;
   /* //一个面的一个墙所需时间*/
    public float drillTime = 60;
    public Effect updateEffect = Fx.mineWallSmall;
    public Effect ClearEffect = Fx.mineWallSmall;
    public Sound ClearSound = Sounds.none;
    public float updateEffectChance = 0.02f;
    public float rotateSpeed = 2f;
    //1.不可挖掘/无方块/不工作  2.可挖掘 3.正在挖掘
    public Color[] colors = {Pal.health, Pal.lancerLaser, Pal.heal};

    public TextureRegion topRegion;
    public TextureRegion rotatorBottomRegion;
    public TextureRegion rotatorRegion;

    public float optionalBoostIntensity = 2.5f;

    public WallBreakMachine(String name) {
        super(name);
        consumesPower = true;
        update = true;
        hasItems = false;
        hasLiquids = true;
        group = BlockGroup.drills;
        buildType = WallBreakMachineBuild::new;
    }

    public void init() {
        super.init();
        updateClipRadius((_range + 1) * tilesize);
    }

    public void setBars() {
        super.setBars();

        addBar("pro", (WallBreakMachineBuild e) ->
                new Bar(() -> Core.bundle.format("bar.speed", String.format("%.1f", e.time / 60), String.format("%.1f", e.alldrillTime / 60)), () -> Pal.ammo, () -> e.warmup));
    }

    @Override
    public void setStats(){
        super.setStats();
        stats.add(Stat.drillSpeed, table -> {
            table.add(drillTime / 60 + "s" + " * " + "一行的数量");
        });
    }

    @Override
    public void load() {
        super.load();
        topRegion = Core.atlas.find(this.name + "-" + "top");
        rotatorBottomRegion = Core.atlas.find(this.name + "-" + "rotator-bottom");
        rotatorRegion = Core.atlas.find(this.name + "-" + "rotator");
    }

    public boolean rotatedOutput(int x, int y) {
        return false;
    }

    public void drawPlace(int x, int y, int rotation, boolean valid) {
        float Time = 0;
        for (int i = 0; i < size; i++) {
            nearbySide(x, y, rotation, i, Tmp.p1);
            int j = 0;
            Tile other;
            for (; j < Math.max(world.width(), world.height()); j++) {
                Tile other2 = world.tile(Tmp.p1.x + Geometry.d4x(rotation) * j, Tmp.p1.y + Geometry.d4y(rotation) * j);
                if (other2 == null || !other2.solid()) break;
                Drawf.square(other2.drawx(), other2.drawy(), 4, 0, Pal.engine);
                Time += drillTime;
            }
            other = world.tile(Tmp.p1.x, Tmp.p1.y);
            Drawf.square(Tmp.p1.x * 8, Tmp.p1.y * 8, (other != null && other.solid()) ? other.overlay().size * 4 : 4, 0, (other != null && other.block() instanceof StaticWall) ? colors[1] : colors[0]);
            drawPlaceText(i + "." + "预计挖掘速度:" + Time / 60, x, y + i, valid);
        }
    }

    public boolean canPlaceOn(Tile tile, Team team, int rotation) {
        return getEfficiency(tile.x, tile.y, rotation, null) > 0;
    }

    public int getEfficiency(int tx, int ty, int rotation, @Nullable Cons<Tile> ctile) {
        int cornerX = tx - (size - 1) / 2, cornerY = ty - (size - 1) / 2, s = size;

        for (int i = 0; i < size; i++) {
            int rx = 0, ry = 0;

            switch (rotation) {
                case 0:
                    rx = cornerX + s;
                    ry = cornerY + i;
                    break;
                case 1:
                    rx = cornerX + i;
                    ry = cornerY + s;
                    break;
                case 2:
                    rx = cornerX - 1;
                    ry = cornerY + i;
                    break;
                case 3:
                    rx = cornerX + i;
                    ry = cornerY - 1;
                    break;
            }
            Tile other = world.tile(rx, ry);
            if (other != null && other.solid()) {
                if (ctile != null) {
                    ctile.get(other);
                }
                return 1;
            }
        }
        return 0;
    }

    public void getEfficiency(int tx, int ty, int rotation, @Nullable Cons<Tile> ctile, @Nullable Intc2 cpos) {
        int cornerX = tx - (size - 1) / 2, cornerY = ty - (size - 1) / 2, s = size;

        for (int i = 0; i < size; i++) {
            int rx = 0, ry = 0;

            switch (rotation) {
                case 0:
                    rx = cornerX + s;
                    ry = cornerY + i;
                    break;
                case 1:
                    rx = cornerX + i;
                    ry = cornerY + s;
                    break;
                case 2:
                    rx = cornerX - 1;
                    ry = cornerY + i;
                    break;
                case 3:
                    rx = cornerX + i;
                    ry = cornerY - 1;
                    break;
            }

            if (cpos != null) {
                cpos.get(rx, ry);
            }

            Tile other = world.tile(rx, ry);
            if (other != null && other.solid()) {
                if (ctile != null) {
                    ctile.get(other);
                }
                return;
            }
        }
    }


    public class WallBreakMachineBuild extends Building {
        public float time = 0;
        public float warmup = 0, boostWarmup = 0;
        public float lastDrillSpeed = 0;
        public float alldrillTime = 0;
        public boolean times = false;

        @Override
        public void updateTile() {
            super.updateTile();
            boolean cons = shouldConsume();
            if (!times) {
                getEfficiency(tile.x, tile.y, rotation, dest -> {
                    int j = 0;
                    for (; j < Math.max(world.width(), world.height()); j++) {
                        Tile other2 = world.tile(dest.x + Geometry.d4x(rotation) * j, dest.y + Geometry.d4y(rotation) * j);
                        if (other2 == null || !other2.solid()) break;
                        Drawf.square(other2.drawx(), other2.drawy(), 4, 0, Pal.engine);
                        alldrillTime += drillTime;
                    }
                    times = true;
                });
            }

            warmup = Mathf.approachDelta(warmup, Mathf.num(efficiency > 0), 1f / 40f);
            float dx = Geometry.d4x(rotation) * 0.5f, dy = Geometry.d4y(rotation) * 0.5f;

            float eff = getEfficiency(tile.x, tile.y, rotation, dest -> {
                if (wasVisible && cons && Mathf.chanceDelta(updateEffectChance * warmup)) {
                    updateEffect.at(
                            dest.worldx() + Mathf.range(3f) - dx * tilesize,
                            dest.worldy() + Mathf.range(3f) - dy * tilesize,
                            dest.block().mapColor
                    );
                }
            });

            float multiplier = Mathf.lerp(1f, optionalBoostIntensity, optionalEfficiency);
            boostWarmup = Mathf.lerpDelta(boostWarmup, optionalEfficiency, 0.1f);
            lastDrillSpeed = (multiplier * timeScale) / drillTime;
            time += edelta() * multiplier;
            if (cons && time >= alldrillTime) {
                getEfficiency(tile.x, tile.y, rotation, dest -> {
                    dest.setAir();
                    ClearEffect.at(
                            dest.worldx() + Mathf.range(3f) - dx * tilesize,
                            dest.worldy() + Mathf.range(3f) - dy * tilesize);
                    ClearSound.at(
                            dest.worldx() + Mathf.range(3f) - dx * tilesize,
                            dest.worldy() + Mathf.range(3f) - dy * tilesize);
                });
                time %= alldrillTime;
                times = false;
            }


            if (timer(timerDump, dumpTime)) {
                dump();
            }
        }

        @Override
        public void draw() {
            super.draw();
            getEfficiency(tile.x, tile.y, rotation, dest -> {
                Drawf.square(dest.drawx(), dest.drawy(), 4, 0, efficiency > 0 ? colors[2] : colors[0]);
                for (int i = 0; i < size; i++) {
                    Vars.ui.showLabel("所需挖掘时间:" + alldrillTime / 60 + "S", 0.01F, x, y);
                }
            });
            Draw.rect(block.region, x, y);
            Draw.rect(topRegion, x, y, rotdeg());
            float ds = 0.6f, dx = Geometry.d4x(rotation) * ds, dy = Geometry.d4y(rotation) * ds;

            int bs = (rotation == 0 || rotation == 3) ? 1 : -1;
            idx = 0;
            getEfficiency(tile.x, tile.y, rotation, null, (cx, cy) -> {
                if (alldrillTime > 0) {
                    int sign = idx++ >= size / 2 && size % 2 == 0 ? -1 : 1;
                    float vx = (cx - dx) * tilesize, vy = (cy - dy) * tilesize;
                    Draw.z(Layer.blockOver);
                    Draw.rect(rotatorBottomRegion, vx, vy, time * rotateSpeed * sign * bs);
                    Draw.rect(rotatorRegion, vx, vy);
                }
            });
        }
    }
}

package creators.world.block;

import arc.Core;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Lines;
import arc.math.Mathf;
import arc.math.geom.Geometry;
import arc.math.geom.Point2;
import arc.struct.IntSeq;
import arc.util.Time;
import arc.util.io.Reads;
import arc.util.io.Writes;
import mindustry.gen.Building;
import mindustry.graphics.Drawf;
import mindustry.graphics.Pal;
import mindustry.ui.Bar;
import mindustry.world.Block;
import mindustry.world.Tile;
import mindustry.world.meta.BlockGroup;
import mindustry.world.meta.Env;
import mindustry.world.meta.Stat;
import mindustry.world.meta.StatUnit;

import static mindustry.Vars.*;

/**
 * 可自定义链接建筑超速
 * 作者: mfxiao,xiaoyuyu,高科技作者
 */
public class LinkAccelerator extends Block {
    public final int timerUse = timers++;
    public float reload = 60f;
    public float speedBoost = 1.5f;
    public float speedBoostPhase = 0.75f;
    public float useTime = 400f;
    public boolean hasBoost = true;
    public Color baseColor = Color.valueOf("feb380");
    public Color phaseColor = Color.valueOf("ffd59e");
    public int maxlink = 2;
    //是否根据链接的建筑来计算超速
    public boolean addpower = false;

    public float range = 80;

    public LinkAccelerator(String name) {
        super(name);
        solid = true;
        update = true;
        group = BlockGroup.projectors;
        hasPower = true;
        hasItems = true;
        canOverdrive = false;
        emitLight = true;
        lightRadius = 50f;
        envEnabled |= Env.space;
        configurable = true;
        config(Point2.class, (LinkAcceleratorBuilid tile, Point2 i) -> {
            tile.link(Point2.pack(i.x + tile.tileX(), i.y + tile.tileY()));
        });
        config(Integer.class, LinkAcceleratorBuilid::link);
    }

    @Override
    public boolean outputsItems() {
        return false;
    }

    @Override
    public void drawPlace(int x, int y, int rotation, boolean valid) {
        super.drawPlace(x, y, rotation, valid);

        Tile tile = world.tile(x, y);

        if(tile == null) return;

        Lines.stroke(1f);
        Draw.color(Pal.placing);
        Drawf.circles(x * tilesize + offset, y * tilesize + offset, range);
        Draw.reset();
    }

    @Override
    public void setStats() {
        stats.timePeriod = useTime;
        super.setStats();
        stats.add(Stat.speedIncrease, "+" + (int) (speedBoost * 100f - 100) + "%");
        stats.add(Stat.productionTime, useTime / 60f, StatUnit.seconds);
        if (hasBoost) {
            stats.add(Stat.boostEffect, "+" + (int) ((speedBoost + speedBoostPhase) * 100f - 100) + "%");
        }

        stats.add(Stat.powerRange, range / 8f, StatUnit.blocks);
    }

    @Override
    public void setBars() {
        super.setBars();
        addBar("boost", (LinkAcceleratorBuilid entity) -> new Bar(() -> Core.bundle.format("bar.boost", Mathf.round(Math.max((entity.realBoost() * 100 - 100), 0))), () -> Pal.accent, () -> entity.realBoost() / (hasBoost ? speedBoost + speedBoostPhase : speedBoost)));
    }

    public class LinkAcceleratorBuilid extends Building {
        public float heat, charge = Mathf.random(reload), phaseHeat, smoothEfficiency;
        public IntSeq links = new IntSeq();

        public boolean linkvalid(Tile tile, Tile other) {
            return tile != null && other != null && tile != other && other.team() == tile.team() && other.block().canOverdrive;
        }

        @Override
        public boolean onConfigureBuildTapped(Building other) {
            if (linkvalid(tile(), other.tile()) && otherXYR(other, x, y, range)) {
                this.configure(other.pos());
            }
            return links.size > maxlink;
        }

        public boolean otherXYR(Building Target, float x, float y, float r){
            boolean[] XYR = {false};

            indexer.eachBlock(this.team, x, y, r, building -> true, building -> {
                if(building == Target){
                    XYR[0] = true;
                }
            });

            return XYR[0];
        }

        @Override
        public void drawLight() {
            Drawf.light(x, y, lightRadius * smoothEfficiency, baseColor, 0.7f * smoothEfficiency);
        }

        @Override
        public void updateTile() {
            smoothEfficiency = Mathf.lerpDelta(smoothEfficiency, efficiency, 0.08f);
            heat = Mathf.lerpDelta(heat, efficiency > 0 ? 1f : 0f, 0.08f);
            charge += heat * Time.delta;
            if (hasBoost) {
                phaseHeat = Mathf.lerpDelta(phaseHeat, optionalEfficiency, 0.1f);
            }
            if (charge >= reload) {
                charge = 0f;
                for (int i = 0; i < links.size; i++) {
                    int link = links.get(i);
                    Tile tile = world.tile(link);
                    if (tile != null && tile.build != null && link != -1) {
                        tile.build.applyBoost(realBoost(), reload + 1f);
                    } else {
                        removelinks();
                    }
                }
            }
            if (timer(timerUse, useTime) && efficiency > 0) {
                consume();
                if (addpower) {
                    this.power.status = getconpower();
                }
            }
        }

        public float getconpower() {
            //存在共同的电力统计问题
            //公式:自身的电力+建筑的电力*0.5
            float conpower = 0f;
            for (int i = 0; i < links.size; i++) {
                int link = links.get(i);
                Tile tile = world.tile(link);
                if (tile.build != null && tile.block().consumesPower && tile.block().consPower.usage > 0) {
                    conpower += tile.block().consPower.usage;
                }
            }
            return conpower * links.size;
        }

        public void removelinks() {
            for (int i = 0; i < links.size; i++) {
                if (world.tile(links.get(i)).build == null) {
                    links.removeValue(links.get(i));
                }
            }
        }

        public float realBoost() {
            return (speedBoost + phaseHeat * speedBoostPhase) * efficiency;
        }

        @Override
        public void drawSelect() {
            for (int i = 0; i < links.size; i++) {
                int link = links.get(i);
                Drawf.square(world.tile(link).drawx(), world.tile(link).drawy(), tilesize, Pal.place);
            }

            Lines.stroke(1.0F);

            Lines.stroke(3.0F, Pal.gray);
            Lines.circle(x, y, range);
            Lines.stroke(1.0F, Pal.accent);
            Lines.circle(x, y, range);
            Draw.reset();

            Draw.reset();
        }

        @Override
        public void drawConfigure() {
            super.drawConfigure();
            for (int i = 0; i < links.size; i++) {
                int link = links.get(i);
                Drawf.square(world.tile(link).drawx(), world.tile(link).drawy(), tilesize, Pal.place);
            }
        }

        @Override
        public void draw() {
            super.draw();
            float f = 1f - (Time.time / 100f) % 1f;
            Draw.color(baseColor, phaseColor, phaseHeat);
            Draw.alpha(heat * Mathf.absin(Time.time, 50f / Mathf.PI2, 1f) * 0.5f);
            Draw.alpha(1f);
            Lines.stroke((2f * f + 0.1f) * heat);
            float r = Math.max(0f, Mathf.clamp(2f - f * 2f) * size * tilesize / 2f - f - 0.2f), w = Mathf.clamp(0.5f - f) * size * tilesize;
            Lines.beginLine();
            for (int i = 0; i < 4; i++) {
                Lines.linePoint(x + Geometry.d4(i).x * r + Geometry.d4(i).y * w, y + Geometry.d4(i).y * r - Geometry.d4(i).x * w);
                if (f < 0.5f) Lines.linePoint(x + Geometry.d4(i).x * r - Geometry.d4(i).y * w, y + Geometry.d4(i).y * r + Geometry.d4(i).x * w);
            }
            Lines.endLine(true);

            Draw.reset();
        }

        public void link(int index) {
            if (links.contains(index)) {
                links.removeValue(index);
                return;
            }
            if (links.size >= maxlink) return;
            links.add(index);
        }


        @Override
        public void write(Writes write) {
            super.write(write);
            write.f(heat);
            write.f(phaseHeat);
            write.s(links.size);
            for (int i = 0; i < links.size; i++) {
                write.i(links.get(i));
            }
        }

        @Override
        public void read(Reads read, byte revision) {
            super.read(read, revision);
            heat = read.f();
            phaseHeat = read.f();
            short size = read.s();
            for (int i = 0; i < size; i++) {
                links.add(read.i());
            }
        }
    }
}
//作者: mfxiao,xiaoyuyu,高科技作者
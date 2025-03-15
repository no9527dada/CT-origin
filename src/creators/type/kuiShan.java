package creators.type;

import arc.graphics.g2d.Lines;
import arc.math.Angles;
import arc.struct.Seq;
import mindustry.Vars;
import mindustry.entities.Units;
import mindustry.entities.bullet.BulletType;
import mindustry.gen.Bullet;
import mindustry.gen.Healthc;
import mindustry.world.blocks.defense.turrets.Turret;

import static CtCoreSystem.CoreSystem.type.CTColor.C;
import static mindustry.content.Fx.none;
//在CT2游戏中反馈不出来，但塔防中的炮却可以 很奇怪   目前未使用  有空在修修试试
public class kuiShan {
   // public static BulletType kuiShan1;

    public static class kuiShan1 extends BulletType {

       // float 速度=40f;
        float cont = 360 / 2f;//扩散角度，1/2值，60 = 120
        float bRange = range;//范围
        {
            damage = 15;
            lifetime = 140;
            speed = 0;
            keepVelocity = false;
            despawnEffect = hitEffect = none;
            hittable = absorbable = reflectable = false;
        }
        @Override
        public void update(Bullet b) {
            //super.update(b);
            Seq<Healthc> seq = new Seq<>();
            // float r = bRange * (1 - b.foutpow());
            float r = bRange * (b.fin());
            Vars.indexer.allBuildings(b.x, b.y, r, bd -> {
                if (bd.team != b.team && Angles.within(b.rotation(), b.angleTo(bd), cont)) seq.addUnique(bd);
            });
            Units.nearbyEnemies(b.team, b.x - r, b.y - r, r * 2, r * 2, u -> {
                if (u.type != null && u.type.targetable && b.within(u, r) && Angles.within(b.rotation(), b.angleTo(u), cont))
                    seq.addUnique(u);
            });
            for (int i = 0; i < seq.size; i++) {
                Healthc hc = seq.get(i);
                if (hc != null && !hc.dead()) {
                    if (!b.hasCollided(hc.id())) {
                        //伤害的方式在这里改

                        //普攻
                        hc.damage(damage);

                        //穿甲
                        //hc.damagePierce(damage);

                        //真伤
                        //if(hc.health() <= damage) hc.kill();
                        //else hc.health(hc.health() - damage);
                        b.collided.add(hc.id());
                    }
                }
            }
        }
        float dx(float px, float r, float angel) {
            return px + r * (float) Math.cos(angel * Math.PI / 180);
        }
        float dy(float py, float r, float angel) {
            return py + r * (float) Math.sin(angel * Math.PI / 180);
        }
        @Override
        public void draw(Bullet b) {
            super.draw(b);
            float pin = (b.fin());
            Lines.stroke(3, C("ffd34b"));
            for (float i = b.rotation() - cont; i < b.rotation() + cont; i++) {
                float lx = dx(b.x, bRange * pin, i);
                float ly = dy(b.y, bRange * pin, i);
                Lines.lineAngle(lx, ly, i - 90, bRange / (cont * 2) * pin);
                Lines.lineAngle(lx, ly, i + 90, bRange / (cont * 2) * pin);

            }
        }
    }
    public static class kuiShan2 extends BulletType {

        float 速度=20f;
        float cont = 360 / 2f;//扩散角度，1/2值，60 = 120
        float bRange = range;//范围
        {
            damage = 3;
            lifetime = 速度;
            speed = 0;
            keepVelocity = false;
            despawnEffect = hitEffect = none;
            hittable = absorbable = reflectable = false;
        }
        @Override
        public void update(Bullet b) {
            //super.update(b);
            Seq<Healthc> seq = new Seq<>();
            // float r = bRange * (1 - b.foutpow());
            float r = bRange * (b.fin());
            Vars.indexer.allBuildings(b.x, b.y, r, bd -> {
                if (bd.team != b.team && Angles.within(b.rotation(), b.angleTo(bd), cont)) seq.addUnique(bd);
            });
            Units.nearbyEnemies(b.team, b.x - r, b.y - r, r * 2, r * 2, u -> {
                if (u.type != null && u.type.targetable && b.within(u, r) && Angles.within(b.rotation(), b.angleTo(u), cont))
                    seq.addUnique(u);
            });
            for (int i = 0; i < seq.size; i++) {
                Healthc hc = seq.get(i);
                if (hc != null && !hc.dead()) {
                    if (!b.hasCollided(hc.id())) {
                        //伤害的方式在这里改

                        //普攻
                        hc.damage(damage);

                        //穿甲
                        //hc.damagePierce(damage);

                        //真伤
                        //if(hc.health() <= damage) hc.kill();
                        //else hc.health(hc.health() - damage);
                        b.collided.add(hc.id());
                    }
                }
            }
        }
        float dx(float px, float r, float angel) {
            return px + r * (float) Math.cos(angel * Math.PI / 180);
        }
        float dy(float py, float r, float angel) {
            return py + r * (float) Math.sin(angel * Math.PI / 180);
        }
        @Override
        public void draw(Bullet b) {
            super.draw(b);
            float pin = (b.fin());
            Lines.stroke(3, C("ffd34b"));
            for (float i = b.rotation() - cont; i < b.rotation() + cont; i++) {
                float lx = dx(b.x, bRange * pin, i);
                float ly = dy(b.y, bRange * pin, i);
                Lines.lineAngle(lx, ly, i - 90, bRange / (cont * 2) * pin);
                Lines.lineAngle(lx, ly, i + 90, bRange / (cont * 2) * pin);

            }
        }
    }
}

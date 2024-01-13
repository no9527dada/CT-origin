package creators.world.block;


import arc.graphics.Color;
import arc.graphics.g2d.Lines;
import arc.math.Angles;
import arc.struct.Seq;
import mindustry.Vars;
import mindustry.content.Fx;
import mindustry.entities.Units;
import mindustry.entities.bullet.BulletType;
import mindustry.entities.bullet.FlakBulletType;
import mindustry.entities.bullet.LaserBulletType;
import mindustry.gen.Bullet;
import mindustry.gen.Healthc;


import static mindustry.content.Fx.none;

public class CTBullet {
        public static BulletType
                mieshishenBo,bawanglizi;
        public static void load() {
            float cont = 180/2f;//扩散角度，1/2值，60 = 120
            float bRange = 80*8f;//范围
            mieshishenBo = new BulletType(){{
                damage = 100;
                lifetime = 120;
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
                                //hc.damage(damage);

                                //穿甲
                                hc.damagePierce(damage);

                                //真伤
                                //if(hc.health() <= damage) hc.kill();
                                //else hc.health(hc.health() - damage);
                                b.collided.add(hc.id());
                            }
                        }
                    }
                }
                float dx(float px, float r, float angel){
                    return px + r * (float) Math.cos(angel * Math.PI/180);
                }

                float dy(float py, float r, float angel){
                    return py + r * (float) Math.sin(angel * Math.PI/180);
                }
                @Override
                public void draw(Bullet b) {

                    super.draw(b);
                    //float pin = (1 - b.foutpow());
                    float pin = (b.fin());
                    Lines.stroke(3 , Color.valueOf("ff3232ff"));

                    for(float i = b.rotation() - cont; i < b.rotation() + cont; i++){
                        float lx = dx(b.x, bRange * pin, i);
                        float ly = dy(b.y, bRange * pin, i);
                        // Lines.lineAngle(lx, ly, i, bRange/cont*pin);
                        Lines.lineAngle(lx, ly, i-90, bRange/(cont*2)*pin);
                        Lines.lineAngle(lx, ly, i+90, bRange/(cont*2)*pin);

                    }
                }
            };
        bawanglizi = new FlakBulletType(8f, 1400f) {{
            var circleColor = Color.valueOf("e8ab19");
            sprite = "missile-large";
            reloadMultiplier=1;
            lifetime = 60f;
            width = 12f;
            height = 22f;

            hitSize = 7f;
            shootEffect = Fx.shootSmokeSquareBig;
            smokeEffect = Fx.shootSmokeDisperse;
            ammoMultiplier = 1;
            hitColor = backColor = trailColor = lightningColor = circleColor;
            frontColor = Color.white;
            trailWidth = 3f;
            trailLength = 12;
            hitEffect = despawnEffect = Fx.hitBulletColor;
            //buildingDamageMultiplier = 0.3f;

            trailEffect = Fx.colorSpark;
            trailRotation = true;
            trailInterval = 3f;
            lightning = 1;
            lightningCone = 15f;
            lightningLength = 20;
            lightningLengthRand = 30;
            lightningDamage = 800f;

            homingPower = 0.17f;
            homingDelay = 19f;
            homingRange = 160f;

            explodeRange = 160f;
            explodeDelay = 0f;

            flakInterval = 20f;
            despawnShake = 3f;
            fragBullets = 1;
            fragBullet = new LaserBulletType(7500f) {{
                colors = new Color[]{circleColor.cpy().a(0.4f), circleColor, Color.white};
                //buildingDamageMultiplier = 0.25f;
                width = 40f;
                hitEffect = Fx.hitLancer;
                sideAngle = 175f;
                sideWidth = 1f;
                sideLength = 40f;
                lifetime = 22f;
                drawSize = 400f;
                length = 180f*2;
                pierce= true;
               // pierceCap = 2;
            }};

            fragSpread = fragRandomSpread = 0f;

            splashDamage = 0f;
            hitEffect = Fx.hitSquaresColor;
            collidesGround = true;
        }};
    }
}

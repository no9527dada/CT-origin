const status = require("Status");
const F = require("all/kuangjiAI");
const lib = require('lib');
const wupin = CTItem
/************************************************/
//裂光
const liC = F.c("bf92f9");
const dec = F.c("ffffff");
const dec2 = F.c("ffffff");
const hur = new JavaAdapter(BasicBulletType, {
    update(b) {
        if (b.timer.get(6)) {
            for (var i = 0; i < 10; i++) {
                var len = Mathf.random(1, 7);
                var a = b.rotation() + Mathf.range(this.fragCone / 2) + this.fragAngle;
                Lightning.create(b.team, liC, 5, b.x - Angles.trnsx(a, len), b.y - Angles.trnsy(a, len), a, Mathf.random(2, 10));

            }
        }
    }

});
hur.width = 1;
hur.height = 1;
hur.damage = 145;
hur.lifetime = 60;
hur.speed = 3;
hur.status = StatusEffects.shocked;
hur.despawnEffect = lib.newEffectt(20, (e) => {
    Draw.color(dec, dec2, e.fin());
    Lines.stroke(e.fout() * 3);
    Lines.circle(e.x, e.y, e.fin() * 60);
    Lines.stroke(e.fout() * 1.75);
    Lines.circle(e.x, e.y, e.fin() * 45);
    Draw.color(dec);
    Fill.circle(e.x, e.y, e.fout() * 20);
    Draw.color(dec, dec2, e.fin());
    Fill.circle(e.x, e.y, e.fout() * 14);
});
hur.pierceCap = 2
hur.pierceBuilding = true
hur.homingPower = 1 //追踪
//-------------------------------
const guang3 = (
    (() => {
        const v = new BasicBulletType();
        //  v.shoot.mag =1 
        //v.shoot.scl =5
        v.width = 30;
        v.height = 22;
        v.pierceCap = 2
        v.pierceBuilding = true
        v.shootEffect = Fx.shootTitan;
        v.smokeEffect = Fx.shootSmokeTitan;
        v.hitColor = Pal.sapBullet;
        v.sprite = "creators-large-orb";
        // v.trailEffect = Fx.missileTrail;
        // v.trailInterval = 3;
        // v.trailColor = Pal.sapBulletBack;
        // v.trailLength = 12;
        // v.trailWidth = 2.2;
        // v.trailParam = 4;
        v.speed = 3;
        v.homingPower = 1 //追踪
        v.damage = 145;
        v.lifetime = 75;
        v.width = height = 15;
        v.backColor = Pal.sapBulletBack;
        v.frontColor = Pal.sapBullet;
        v.shrinkX = 0
        v.shrinkY = 0;

        v.despawnEffect = (
            (() => {
                const b = new ExplosionEffect();
                b.waveColor = Pal.sapBullet;
                b.smokeColor = Color.gray;
                b.sparkColor = Pal.sap;
                b.waveStroke = 4;
                b.waveRad = 40;
                return b;
            })());
        v.hitEffect = (
            (() => {
                const b = new ExplosionEffect();
                b.waveColor = Pal.sapBullet;
                b.smokeColor = Color.gray;
                b.sparkColor = Pal.sap;
                b.waveStroke = 4;
                b.waveRad = 40;
                return b;
            })());
        v.intervalBullet = (
            (() => {
                const b = new LightningBulletType();
                b.damage = 18;
                b.collidesAir = false;
                b.ammoMultiplier = 1;
                b.lightningColor = Pal.sapBullet;
                b.lightningLength = 3;
                b.lightningLengthRand = 6;

                //for visual stats only.
                b.buildingDamageMultiplier = 0.25;
                b.lightningType = (
                    (() => {
                        const c = new BulletType(0.0001, 0);
                        c.lifetime = Fx.lightning.lifetime;
                        c.hitEffect = Fx.hitLancer;
                        c.despawnEffect = Fx.none;
                        c.status = StatusEffects.shocked;
                        c.statusDuration = 10;
                        c.hittable = false;
                        c.lightColor = Color.white;
                        c.buildingDamageMultiplier = 0.25;
                        return c;
                    })()
                );
                return b;
            })()
        );
        v.bulletInterval = 4;
        v.lightningColor = Pal.sapBullet;
        v.lightningDamage = 21;
        v.lightning = 8;
        v.lightningLength = 2;
        v.lightningLengthRand = 8;

        return v;
    })());

var guang2 = new JavaAdapter(FlakBulletType, {});
guang2.collidesTiles = false
guang2.collides = false;
guang2.collidesAir = false;
guang2.damage = 30;
guang2.splashDamageRadius = 24;
guang2.splashDamage = 70;
guang2.width = 100;
guang2.height = 100;
guang2.speed = 0;
guang2.lifetime = 50;
guang2.hitEffect = Fx.plasticExplosion;
guang2.backColor = F.c("bf92f9");
guang2.frontColor = F.c("bf92f9");
guang2.reloadMultiplier = 3;
guang2.ammoMultiplier = 1;
guang2.collidesGround = true;
guang2.fragBullets = 5;
guang2.status = status.zhenhan
guang2.statusDuration = 50;
guang2.fragBullet = guang3;
var guang1 = new JavaAdapter(BasicBulletType, {});
guang1.collidesTiles = false
guang1.collides = false;
guang1.collidesAir = false;
guang1.scaleVelocity = true;//开启指哪打哪
guang1.speed = 6;
guang1.lifetime = 40;
guang1.scaleLife = true;//开启指哪打哪
guang1.damage = 80;
guang1.height = 40;
guang1.width = 40;
guang1.hitEffect = Fx.hitLaser;
guang1.despawnEffect = Fx.hitLaser;
guang1.status = StatusEffects.shocked;
guang1.pierce = true;
guang1.frontColor = F.c("d0c2e9");
guang1.backColor = F.c("d0c2e9");
guang1.fragBullets = 1;
guang1.fragBullet = guang2;
exports.guang1 = guang1













var Bullet_taihejinEffect = new Effect(30, e => {
    Draw.color(F.c("FFFFFF"));
    e.scaled(6, i => {
        Lines.stroke(3 * i.fout());
        Lines.circle(e.x, e.y, 3 + i.fin() * 25);
    });
    Draw.color(Color.gray);
    Angles.randLenVectors(e.id, 6, 2 + 23 * e.finpow(), (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fout() * 4 + 0.5);
    });
    Draw.color(F.c("F3E979"));
    Lines.stroke(e.fout());
    Angles.randLenVectors(e.id + 1, 4, 1 + 23 * e.finpow(), (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
    });
    Drawf.light(e.x, e.y, 60, F.c("FFFFFF"), 0.7 * e.fout());
});

exports.Bullet_surgeAlloy = (
    (() => {
        const v = new BasicBulletType(9, 110 * 0.8, "bullet");
        //子弹拖尾4连
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        v.trailColor = F.c("F3E979FF");
        v.trailEffect = Fx.none
        v.frontColor = F.c("F3E979");
        v.backColor = F.c("FFFFFF");
        v.hitSize = 7;
        v.width = 16;
        v.height = 30;
        v.shootEffect = new Effect(10, e => {
            Draw.color(Pal.bulletYellowBack);
            Lines.stroke(e.fout() * 2);
            Lines.circle(e.x, e.y, 4 + e.finpow() * 10);
        });;
        v.hitEffect = Bullet_taihejinEffect;
        v.ammoMultiplier = 3;//装弹倍率
        v.lifetime = 40;
        v.pierceBuilding = false;
        v.reloadMultiplier = 1.5; //装弹速度
        v.lightning = 3; //闪电根数
        v.lightningLength = 8; //闪电长度
        v.lightningDamage = 15;//闪电伤害
        v.lightningColor = F.c("#B8DCAA");//闪电颜色
        v.knockback = 1.6;
        return v;
    })());
exports.Bullet_monengjing = (
    (() => {
        const v = new BasicBulletType(9, 140 * 0.8, "bullet");
        v.frontColor = F.c("3d3d3d");
        v.backColor = F.c("8c8c8c");
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        v.trailColor = F.c("8c8c8cFF");
        v.hitSize = 7;
        v.width = 25
        v.height = 44;
        v.ammoMultiplier = 3;
        v.shootEffect = Fx.shootBig;
        v.pierceCap = 4;
        v.shootEffect = new Effect(15, 100, e => {
            Draw.color(F.c("3d3d3d"));
            for (var i = 0; i < 4; i++) {
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i * 90 + 45);
            }
            Drawf.light(e.x, e.y, 150, F.c("3d3d3d"), 0.9 * e.fout());
        });
        v.despawnEffect = Bullet_taihejinEffect;
        v.ammoMultiplier = 2;//装弹倍率
        v.lifetime = 40;
        v.pierceBuilding = true;
        v.reloadMultiplier = 1.2; //装弹速度
        v.knockback = 1;
        return v;
    })());
exports.Bullet_hejinboli = (
    (() => {
        const v = new BasicBulletType(9, 150 * 0.8, "bullet");
        v.frontColor = F.c("F3E979");
        v.backColor = F.c("FFFFFF");
        v.trailColor = F.c("F3E979FF");
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        v.hitSize = 7;
        v.width = 16;
        v.height = 23;
        v.shootEffect = new Effect(15, 100, e => {
            Draw.color(Pal.bulletYellowBack);
            for (var i = 0; i < 4; i++) {
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i * 90 + 45);
            }
            Drawf.light(e.x, e.y, 150, Pal.bulletYellowBack, 0.9 * e.fout());
        });
        v.hitEffect = Bullet_taihejinEffect
        v.ammoMultiplier = 1;//装弹倍率
        v.lifetime = 40;
        v.pierceBuilding = false;
        v.reloadMultiplier = 1.5; //装弹速度
        v.lightning = 3; //闪电根数
        v.lightningLength = 10; //闪电长度
        v.lightningDamage = 18;//闪电伤害
        v.lightningColor = F.c("#B8DCAA");//闪电颜色
        v.knockback = 1.6;
        return v;
    })());
exports.Bullet_taihejin = (
    (() => {
        const v = new BasicBulletType(9, 130 * 0.8, "bullet");
        v.frontColor = F.c("a2efed");
        v.backColor = F.c("FFFFFF");
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        v.trailColor = F.c("a2efedFF");
        v.hitSize = 7;
        v.width = 16;
        v.height = 23;
        v.shootEffect = new Effect(15, 100, e => {
            Draw.color(F.c("a2efed"));
            for (var i = 0; i < 4; i++) {
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i * 90 + 45);
            }
            Drawf.light(e.x, e.y, 150, F.c("a2efed"), 0.9 * e.fout());
        });
        v.pierceCap = 10;
        v.ammoMultiplier = 3;//装弹倍率
        v.lifetime = 40;
        v.despawnEffect = Bullet_taihejinEffect;
        v.pierceBuilding = true;
        v.splashDamage = 10;
        v.splashDamageRadius = 40;
        v.status = status.zhenhan
        v.statusDuration = 10;
        v.knockback = 0.4;
        return v;
    })());
exports.Bullet_weijing3 = (
    (() => {
        const v = new BasicBulletType(9, 280 * 0.8, "bullet");
        v.frontColor = F.c("fa74ec");
        v.backColor = F.c("feb9ffFF");
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        v.trailColor = F.c("feb9ffFF");
        v.hitSize = 7;
        v.width = 23;
        v.height = 44;
        v.ammoMultiplier = 1;
        v.shootEffect = v.shootEffect = new Effect(15, 100, e => {
            Draw.color(F.c("fa74ec"));
            for (var i = 0; i < 4; i++) {
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i * 90 + 45);
            }
            Drawf.light(e.x, e.y, 150, F.c("fa74ec"), 0.9 * e.fout());
        });
        v.pierceCap = 20;
        v.hitEffect = Fx.flakExplosionBig;
        v.despawnEffect = Bullet_taihejinEffect;
        v.lifetime = 40;
        v.pierceBuilding = true;
        v.reloadMultiplier = 1.2; //装弹速度
        v.knockback = 1;
        return v;
    })());
exports.Bullet_weijing4 = (
    (() => {
        const v = new BasicBulletType(2, 125 * 0.8, "creators-qiege-1");
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        //v.trailColor = F.c("feb9ffFF");
        v.splashDamageRadius = 5.5 * 8; //分裂范围
        v.splashDamage = 230 * 0.8; //分裂的伤害
        v.width = 25;
        v.height = 25;
        v.shrinkY = 0;
        v.shrinkX = 0;
        v.spin = 18;//子弹旋转
        v.shootEffect = v.shootEffect = new Effect(15, 100, e => {
            Draw.color(F.c("fe9e9e"));
            for (var i = 0; i < 4; i++) {
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i * 90 + 45);
            }
            Drawf.light(e.x, e.y, 150, F.c("fe9e9e"), 0.9 * e.fout());
        });
        v.ammoMultiplier = 1;//装弹倍率
        v.lifetime = 240;
        v.pierceBuilding = false;
        v.reloadMultiplier = 0.5; //装弹速度
        v.knockback = 1;
        v.fragBullets = 1;
        v.trailChance = 1;
        v.trailEffect = (
            (() => {
                const b = new ParticleEffect();
                b.region = "creators-mingwangB1";
                b.colorFrom = F.c("fe9e9e");
                b.colorTo = F.c("fe9e9e");
                return b;
            })()
        );
        v.fragBullet = (
            (() => {
                const v = new BasicBulletType(0, 320 * 0.8, "creators-qiege-1");
                v.hitSize = 7;
                v.width = 55;
                v.height = 55;
                v.shrinkY = 0;
                v.shrinkX = 0;
                v.spin = 25;
                v.pierceCap = 4;
                v.lifetime = 180;
                v.pierceBuilding = false;
                v.fragBullets = 3;
                v.splashDamageRadius = 5.5 * 8; //分裂范围
                v.splashDamage = 230 * 0.8; //分裂的伤害
                v.status = status.qiege;
                v.statusDuration = 300;
                v.fragBullet = (
                    (() => {
                        const v = new BasicBulletType(3, 150 * 0.8, "creators-qiege-1");
                        v.hitSize = 7;
                        v.width = 12;
                        v.height = 12;
                        v.shrinkY = 0;
                        v.shrinkX = 0;
                        v.spin = 10;
                        v.pierceCap = 8;
                        v.lifetime = 90;
                        v.trailChance = 0.3;
                        v.trailEffect = (
                            (() => {
                                const b = new ParticleEffect();
                                b.region = "creators-mingwangB1";
                                b.colorFrom = F.c("fe9e9e");
                                b.colorTo = F.c("fe9e9e");
                                return b;
                            })()
                        );
                        v.pierceBuilding = true;
                        v.knockback = 0.8;
                        return v;
                    })());
                return v;
            })());
        return v;
    })());
exports.Bullet_JHhejin = (
    (() => {
        const v = new BasicBulletType(9, 450 * 0.8, "bullet");
        v.frontColor = F.c("fbe031");
        v.backColor = F.c("f8eb99");
        v.trailParam = 4
        v.trailLength = 8
        v.trailWidth = 2
        v.trailColor = F.c("f8eb99ff");
        v.hitSize = 7;
        v.width = 16;
        v.height = 23;
        v.shootEffect = new Effect(15, 100, e => {
            Draw.color(Pal.bulletYellowBack);
            for (var i = 0; i < 4; i++) {
                Drawf.tri(e.x, e.y, 3, 30 * e.fout(), i * 90 + 45);
            }
            Drawf.light(e.x, e.y, 150, Pal.bulletYellowBack, 0.9 * e.fout());
        });
        v.pierceCap = 4;
        v.hitEffect = Fx.flakExplosionBig;
        v.ammoMultiplier = 6;//装弹倍率
        v.lifetime = 40;
        v.pierceBuilding = false;
        v.reloadMultiplier = 1.8; //装弹速度
        v.lightning = 5; //闪电根数
        v.lightningLength = 18; //闪电长度
        v.lightningDamage = 25;//闪电伤害
        v.lightningColor = F.c("B8DCAA");//闪电颜色
        v.knockback = 0.8;
        return v;
    })());


exports.yunyukuangzha = (() => {
    const v = new PointLaserBulletType();
    v.damage = 65;
    v.color = Color.white;
    //v.sprite="point-laser"
    v.beamEffect = Fx.none;
    v.buildingDamageMultiplier = 0.1//对建筑的伤害 10%
    v.ammoMultiplier = 1;//装填倍率
    v.status = StatusEffects.burning
    v.statusDuration = 180;
    return v;
})();
exports.yunyuleng = (() => {
    const v = new PointLaserBulletType();
    v.damage = 45;
    v.color = Color.white;
    v.sprite = "creators-yunyu2-laser"
    v.beamEffect = Fx.none;
    v.buildingDamageMultiplier = 0.1//对建筑的伤害 10%
    v.ammoMultiplier = 2;//装填倍率
    v.status = StatusEffects.freezing
    v.statusDuration = 120;
    return v;
})();
exports.yunyuyan = (() => {
    const v = new PointLaserBulletType();
    v.damage = 280;
    v.color = Color.white;
    v.sprite = "creators-yunyu3-laser"
    v.beamEffect = Fx.none;
    v.buildingDamageMultiplier = 0.1//对建筑的伤害 10%
    v.ammoMultiplier = 1;//装填倍率
    v.status = StatusEffects.melting
    v.statusDuration = 120;
    return v;
})();

exports.yunyulizi = (() => {
    const v = new PointLaserBulletType();
    v.damage = 350;
    v.color = Color.white;
    v.sprite = "creators-yunyu3-laser"
    v.beamEffect = Fx.none;
    v.buildingDamageMultiplier = 0.1//对建筑的伤害 10%
    v.ammoMultiplier = 2;//装填倍率
    v.status = status.ionBurningEffect1;
    v.damageInterval = 20
    v.statusDuration = 30;
    return v;
})();
exports.yunyuyedan = (() => {
    const v = new PointLaserBulletType();
    v.damage = 750;
    v.color = Color.white;
    v.sprite = "creators-yunyu4-laser"
    v.beamEffect = Fx.none;
    v.buildingDamageMultiplier = 0.1//对建筑的伤害 10%
    v.ammoMultiplier = 3;//装填倍率
    v.status = status.effectX;
    v.statusDuration = 60;
    return v;
})();



exports.mingwang =//冥王
    ((() => {
        const b = new JavaAdapter(BasicBulletType, {});
        b.trailColor = F.c("66B1FFFF");;
        b.trailParam = 5;
        b.trailLength = 18;
        b.trailWidth = 5;
        b.trailInterval = 10;
        b.trailChance = 1;
        b.trailRotation = true;

        b.recoil = 0; //反冲
        b.width = 22;
        b.height = 30;
        b.speed = 4;
        b.damage = 1300;
        b.ammoMultiplier = 3;
        b.hitSize = 8;
        b.lifetime = 120;
        b.pierce = false;
        b.lightning = 50;//根数
        b.lightningLength = 16; //闪电长度
        b.lightningDamage = 20; //闪电伤害
        b.status = StatusEffects.electrified;
        b.keepVelocity = false;
        b.hittable = false
        b.shrinkY = 0;
        b.shrinkX = 0;
        b.spin = 18;
        b.height = 46
        b.width = 46
        b.sprite = "creators-mingwangB1"
        b.frontColor = F.c("96fbe1");
        b.backColor = F.c("96fbe1");

        b.chargeEffect = (
            (() => {
                const b = new MultiEffect();
                b.effects = [
                    (() => {
                        const b = new ParticleEffect();
                        b.line = true;
                        b.particles = 15;
                        b.lifetime = 15;
                        b.length = 45;
                        b.offset = 4;
                        b.baseLength = -45;
                        b.cone = -360;
                        b.lenFrom = 20;
                        b.lenTo = 0;
                        b.colorFrom = F.c("96fbe1");
                        b.colorTo = F.c("96fbe1");
                        b.cone = 360
                        return b;
                    })(),
                    (() => {
                        const b = new WaveEffect();
                        b.lifetime = 20;
                        b.sizeFrom = 65;
                        b.sizeTo = 0;
                        b.strokeFrom = 0;
                        b.strokeTo = 7;
                        b.colorFrom = F.c("96fbe1");
                        b.colorTo = F.c("96fbe1");
                        return b;
                    })(),
                    (() => {
                        const b = new ParticleEffect();
                        b.particles = 1;
                        b.sizeFrom = 10;
                        b.sizeTo = 1;
                        b.interp = Interp.bounceOut;
                        b.length = 0;
                        b.lifetime = 80;
                        b.colorFrom = F.c("96fbe1");;
                        b.colorTo = F.c("96fbe1");;
                        b.cone = 360
                        return b;
                    })()
                ];
                return b;
            })()
        );
        b.trailEffect = (
            (() => {
                const b = new ParticleEffect();
                b.region = "creators-mingwangB1";
                b.colorFrom = F.c("96fbe1");
                b.colorTo = F.c("96fbe1");
                return b;
            })()
        );
        b.hitEffect = (
            (() => {
                const b = new MultiEffect();
                b.effects = [
                    (() => {
                        const b = new ParticleEffect();
                        b.lightOpacity = 0.5;
                        b.particles = 5;
                        b.length = 50;
                        b.baseLength = 30;
                        b.lifetime = 50;
                        b.interp = Interp.exp5;
                        b.lightColor = F.c("96fbe1ff");
                        b.sizeFrom = 60;
                        b.sizeTo = 8;
                        b.colorFrom = F.c("96fbe13c");
                        b.colorTo = F.c("57D9933c");
                        return b;
                    })(),
                    (() => {
                        const b = new ParticleEffect();
                        b.lightOpacity = 0.5;
                        b.particles = 5;
                        b.length = 50;
                        b.baseLength = 30;
                        b.lifetime = 30;
                        b.interp = Interp.exp5;
                        b.lightColor = F.c("96fbe1ff");
                        b.sizeFrom = 30;
                        b.sizeTo = 7;
                        b.colorFrom = F.c("96fbe13c");
                        b.colorTo = F.c("57D9933c");
                        return b;
                    })(),
                ]
                return b;
            })()
        );
        return b;
    })());
exports.tianqian = (//天谴
    (() => {
        const b = new JavaAdapter(LaserBulletType, {});
        b.hitEffect = Fx.hitMeltdown
        b.status = status.effectX;
        b.statusDuration = 140;
        b.hittable = false;//被激光点防击中
        b.despawnEffect = Fx.none;
        b.hitShake = 1;
        b.hitSize = 70;
        b.length = 78 * 8
        b.width = 240;
        b.lifetime = 60;
        b.drawSize = 130;
        b.collidesAir = true;
        b.sideAngle = 30;
        b.sideLength = 30;
        b.sideWidth = 1;
        b.damage = 120000
        b.lightningSpacing = 22;
        b.lightningLength = 17;
        b.lightningDelay = 1;
        b.lightningLengthRand = 23;
        b.lightningDamage = 240;
        b.lightningAngleRand = 42;
        b.largeHit = true;
        b.lightColor = F.c("d7afffff");;
        b.lightningColor = F.c("d7afffff");;
        b.shootEffect = Fx.none;
        b.collidesTeam = true;
        b.colors = [F.c("B15BFF01"), F.c("6F00D2B4"), F.c("F0FFFF"), Color.white]
        b.chargeEffect = (
            (() => {
                const f = new MultiEffect();
                f.effects = [
                    (() => {
                        const c = new ParticleEffect();
                        c.particles = 1;
                        c.sizeFrom = 0;
                        c.sizeTo = 30;
                        c.length = 0;
                        c.lifetime = 110;
                        c.colorFrom = F.c("9d45ffFF");
                        c.colorTo = F.c("d7bbffFF");
                        c.cone = 360
                        return c;
                    })(),
                    (() => {
                        const c = new ParticleEffect();
                        c.line = true;
                        c.particles = 15;
                        c.offset = 20;
                        c.lifetime = 30;
                        c.length = 45;
                        c.baseLength = -45;
                        c.cone = -360;
                        c.lenFrom = 9;
                        c.lenTo = 0;
                        c.colorFrom = F.c("9d45ffFF");
                        c.colorTo = F.c("d7bbffFF");
                        return c;
                    })(),
                    (() => {
                        const c = new ParticleEffect();
                        c.line = true;
                        c.particles = 15;
                        c.lifetime = 50;
                        c.length = 45;
                        c.offset = 4;
                        c.baseLength = -45;
                        c.cone = -360;
                        c.lenFrom = 20;
                        c.lenTo = 0;
                        c.colorFrom = F.c("9d45ffFF");
                        c.colorTo = F.c("9d45ffFF");
                        c.cone = 360
                        return c;
                    })(),
                    (() => {
                        const c = new WaveEffect();
                        c.lifetime = 50;
                        c.sizeFrom = 65;
                        c.sizeTo = 0;
                        c.strokeFrom = 0;
                        c.strokeTo = 7;
                        c.colorFrom = F.c("9d45ffFF");
                        c.colorTo = F.c("9d45ffFF");
                        return c;
                    })()
                ];
                return f;
            })()
        );
        return b;
    })()
);

exports.tiansha = (//天煞
    () => {
        const SPEED = 4;

        const laser1 = new JavaAdapter(ContinuousLaserBulletType, {
        }, 70);
        laser1.colors = [F.c("ec555555"), F.c("ec8888aa"), F.c("ff6c6a"), Color.white];
        laser1.width = 10;
        laser1.largeHit = true;
        laser1.length = 110
        laser1.hitEffect = Fx.hitMeltdown
        laser1.hitColor = Pal.meltdownHit
        laser1.drawSize = 420
        laser1.incendChance = 0.4
        laser1.incendSpread = 5
        laser1.incendAmount = 1

        const laser2 = new JavaAdapter(ContinuousLaserBulletType, {
        }, 40);
        laser2.colors = [F.c("ec745855"), F.c("ec7458aa"), F.c("ff9c5a"), Color.white];
        laser2.width = 10;
        laser2.largeHit = true;
        laser2.length = 110
        laser2.hitEffect = Fx.hitMeltdown
        laser2.hitColor = Pal.meltdownHit
        laser2.drawSize = 420
        laser2.incendChance = 0.4
        laser2.incendSpread = 5
        laser2.incendAmount = 1

        const bt = new JavaAdapter(BasicBulletType, {
            init(b) {
                if (!b) { return; }
                if (!b.data) { b.data = {}; }
                b.data.bullet1 = laser1.create(b, b.x, b.y, 0);
                b.data.bullet2 = laser1.create(b, b.x, b.y, 120);
                b.data.bullet3 = laser1.create(b, b.x, b.y, 240);
                b.data.bullet4 = laser2.create(b, b.x, b.y, 0);
                b.data.bullet5 = laser2.create(b, b.x, b.y, 120);
                b.data.bullet6 = laser2.create(b, b.x, b.y, 240);
                b.data.bulletRot = 0;
                b.data.direction = b.id % 2 == 0;
            },
            update(b) {
                this.super$update(b);
                b.data.bulletRot += SPEED;
                b.data.bullet1.time = 0;
                b.data.bullet2.time = 0;
                b.data.bullet3.time = 0;
                b.data.bullet4.time = 0;
                b.data.bullet5.time = 0;
                b.data.bullet6.time = 0;
                b.data.bullet1.set(b.x, b.y);
                b.data.bullet2.set(b.x, b.y);
                b.data.bullet3.set(b.x, b.y);
                b.data.bullet4.set(b.x, b.y);
                b.data.bullet5.set(b.x, b.y);
                b.data.bullet6.set(b.x, b.y);
                if (b.data.direction) {
                    b.data.bullet1.rotation(b.rotation() + b.data.bulletRot);
                    b.data.bullet2.rotation(b.rotation() + b.data.bulletRot + 120);
                    b.data.bullet3.rotation(b.rotation() + b.data.bulletRot + 240);
                    b.data.bullet4.rotation(b.rotation() + b.data.bulletRot + 60);
                    b.data.bullet5.rotation(b.rotation() + b.data.bulletRot + 180);
                    b.data.bullet6.rotation(b.rotation() + b.data.bulletRot + 300);
                } else {
                    b.data.bullet1.rotation(b.rotation() - b.data.bulletRot);
                    b.data.bullet2.rotation(b.rotation() - b.data.bulletRot + 120);
                    b.data.bullet3.rotation(b.rotation() - b.data.bulletRot + 240);
                    b.data.bullet4.rotation(b.rotation() - b.data.bulletRot + 60);
                    b.data.bullet5.rotation(b.rotation() - b.data.bulletRot + 180);
                    b.data.bullet6.rotation(b.rotation() - b.data.bulletRot + 300);
                }
            },
        });
        bt.laserAbsorb = true;//塑钢墙吸收
        // bt.sprite = "";
        bt.reloadMultiplier = 1
        bt.ammoMultiplier = 1;
        bt.damage = 1800 + 1800 * 0.7;
        bt.width = 6;
        bt.height = 6;
        bt.shrinkY = 0;
        bt.shrinkX = 0;
        bt.spin = 0;
        bt.lifetime = 500;
        bt.homingRange = 3 * 8
        bt.homingPower = 0.3 //追踪
        bt.homingDelay = 0;
        bt.backColor = F.c("ffffff00");
        bt.frontColor = Pal.meltdownHit;
        bt.despawnEffect = Fx.none;
        bt.speed = 1;
        bt.collides = false;
        bt.reflectable = false;
        // bt.absorbable = true;
        bt.chargeEffect = (
            (() => {
                const b = new MultiEffect();
                b.lifetime = 60;
                b.effects = [
                    (() => {
                        const b = new ParticleEffect();//实心圈膨胀
                        b.particles = 1;//粒子数量
                        b.sizeFrom = 0;//粒子出现时有多大
                        b.sizeTo = 20;//粒子结束时有多大
                        b.length = 0;//粒子长度
                        b.lifetime = 98;//粒子持续时间
                        b.colorFrom = F.c("ffd37fff");//粒子出现时颜色
                        b.colorTo = F.c("ffd37fff");//粒子结束时颜色
                        b.cone = 360
                        return b;
                    })(),
                    (() => {
                        const b = new ParticleEffect();
                        b.particles = 10;
                        b.sizeFrom = 5;
                        b.sizeTo = 0;
                        b.length = 45;
                        b.baseLength = -45;
                        b.lifetime = 60;
                        b.colorFrom = F.c("ffd37fff");;
                        b.colorTo = F.c("ffd37fff");;
                        b.cone = 360
                        return b;
                    })(),
                    (() => {
                        const b = new ParticleEffect();
                        b.line = true;
                        b.particles = 15;
                        b.lifetime = 50;
                        b.length = 45;
                        b.offset = 4;
                        b.baseLength = -45;
                        b.cone = -360;
                        b.lenFrom = 20;
                        b.lenTo = 0;
                        b.colorFrom = F.c("ffd37fff");
                        b.colorTo = F.c("ffd37fff");
                        b.cone = 360
                        return b;
                    })(),
                    (() => {
                        const b = new WaveEffect();
                        b.lifetime = 50;
                        b.sizeFrom = 65;
                        b.sizeTo = 0;
                        b.strokeFrom = 0;
                        b.strokeTo = 7;
                        b.colorFrom = F.c("ffd37fff");
                        b.colorTo = F.c("ffd37fff");
                        return b;
                    })()
                ];
                return b;
            })()
        );
        return bt;
    })();

//浪潮
exports.artilleryDense = (
    (() => {
        const v = new ArtilleryBulletType(3, 20,);
       v. knockback = 0.8;
       v. lifetime = 80;
       v. width = height = 11;
       //v. collidesTiles = false;
       v. splashDamageRadius = 25*0.75;
       v. splashDamage = 33;
        return v;
    })());
    
exports.artilleryHoming = (
    (() => {
        const v = new ArtilleryBulletType(3, 20,);
        v.knockback = 0.8;
        v.lifetime = 80;
        v.width = height = 11;
        //v.collidesTiles = false;
        v.splashDamageRadius = 25 * 0.75;
        v.splashDamage = 33;
        v.reloadMultiplier = 1.2;
        v.ammoMultiplier = 3;
        v.homingPower = 0.08;
        v.homingRange = 50;
        return v;
    })());
exports.artilleryIncendiary = (
    (() => {
        const v = new ArtilleryBulletType(3., 24,);
        v.hitEffect = Fx.blastExplosion;
        v.knockback = 0.8;
        v.lifetime = 80;
        v.width = height = 13;
        //v.collidesTiles = false;
        v.splashDamageRadius = 25*0.75;
        v.splashDamage = 45;
        v.status = StatusEffects.burning;
        v.statusDuration = 60*12;
        v.frontColor = Pal.lightishOrange;
        v.backColor = Pal.lightOrange;
        v.makeFire = true;
        v.trailEffect = Fx.incendTrail;
        v.ammoMultiplier = 4;
        return v;
    })());
    

exports.artilleryExplosive = (

    (() => {
        const v = new ArtilleryBulletType(3, 20, "shell");

       v.hitEffect = Fx.blastExplosion;
       v.knockback = 0.8;
       v.lifetime = 80;
       v.width = height = 14;
       //v.collidesTiles = false;
       v.ammoMultiplier = 4;
       v.splashDamageRadius = 45*0.75;
       v.splashDamage = 55;
       v.backColor = Pal.missileYellowBack;
       v.frontColor = Pal.missileYellow;
       v. status = StatusEffects.blasted;
        return v;
    })());
    
exports.artilleryPlastic = (
    (() => {
        const v = new ArtilleryBulletType(3.4, 20, "shell");
       v. hitEffect = Fx.plasticExplosion;
       v. knockback = 1;
       v. lifetime = 80;
       v. width = height = 13;
       v. collidesTiles = false;
       v. splashDamageRadius = 35*0.75;
       v. splashDamage = 45;
       v. fragBullets = 10;
       v. fragBullet =((()=> { 
        const v2 =  new BasicBulletType(2.5, 10, "bullet");
           v2.width = 10;
           v2.height = 12;
           v2.shrinkY = 1;
           v2.lifetime = 15;
           v2.backColor = Pal.plastaniumBack;
           v2.frontColor = Pal.plastaniumFront;
           v2.despawnEffect = Fx.none;
           //v2.collidesAir = false;
           return v2;
        })());
       v. backColor = Pal.plastaniumBack;
       v. frontColor = Pal.plastaniumFront;
        return v;
    })());
exports.langyong2Bullet_taihejin = (
    (() => {
        const v = new ArtilleryBulletType(3.7, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;

        v.statusDuration = 10;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 4;
        v.collidesTiles = false;
        v.splashDamageRadius = 3 * 8;
        v.splashDamage = 70;
        v.backColor = F.c("#8393C6");
        v.frontColor = F.c("#DCE4FF");
        v.reloadMultiplier = 1.6; //装弹速
        v.status = status.zhenhan
        v.statusDuration = 10;
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());
exports.langyong2Bullet_zuanjing = (
    (() => {
        const v = new ArtilleryBulletType(3.5, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.collidesTiles = false;
        v.splashDamageRadius = 6.2 * 8;
        v.splashDamage = 45;
        v.ammoMultiplier = 1;
        v.backColor = F.c("#209581");
        v.frontColor = F.c("#A2F6E7");
        v.knockback = 0.8;
        v.reloadMultiplier = 2; //装弹速
        v.fragBullets = 12; //分裂数量
        v.fragBullet = (
            (() => {
                const a = extend(BasicBulletType, {});
                a.damage = 90; //伤害
                a.speed = 2.5;
                a.width = 15;
                a.height = 20;
                a.shrinkY = 1;
                a.lifetime = 22;
                a.backColor = Pal.plastaniumBack;
                a.frontColor = Pal.plastaniumFront;
                a.despawnEffect = Fx.none;
                a.collidesGround = false
                return a;
            })());
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());
exports.langyong2Bullet_zhayao = (
    (() => {
        const v = new ArtilleryBulletType(4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 1;
        v.collidesTiles = false;
        v.splashDamageRadius = 6.2 * 8;
        v.splashDamage = 170;
        v.backColor = F.c("#DC2E09");
        v.frontColor = F.c("#FFDFDF");
        v.status = StatusEffects.blasted
        v.statusDuration = 30;
        v.reloadMultiplier = 1.8; //装弹速
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());
exports.langyong2Bullet_juhebaozhawu = (
    (() => {
        const v = new ArtilleryBulletType(3.2, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 2;
        v.collidesTiles = false;
        v.splashDamageRadius = 4 * 8;
        v.splashDamage = 240;
        v.backColor = F.c("#FF51C3");
        v.frontColor = F.c("#FEB1DF");
        v.status = status.ionBurningEffect1
        v.statusDuration = 30;
        v.reloadMultiplier = 1.3; //装弹速
        v.fragBullet = (
            (() => {
                const c = new FireBulletType(1, 15);
                return c;
            })());
        // CreatorsBullets.artilleryPlasticFrag;
        v.fragBullets = 10;
        v.fragLifeMin = 0.2;
        v.fragLifeMax = 1.5;
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());
exports.langyong2Bullet_JHhejin = (
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 4;
        v.collidesTiles = false;
        v.splashDamageRadius = 6 * 8;
        v.splashDamage = 180;
        v.backColor = F.c("#D99F1F");
        v.frontColor = F.c("#F3E925");
        v.lightning = 3; //闪电根数
        v.lightningLength = 10; //闪电长度
        v.lightningDamage = 45;//闪电伤害
        v.lightningColor = F.c("#E8D122");//闪电颜色
        v.reloadMultiplier = 1.5; //装弹速
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());

exports.langyong2Bullet_jinhuiboli = (
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 6;
        v.collidesTiles = false;
        v.splashDamageRadius = 6 * 8;
        v.splashDamage = 750;
        v.backColor = F.c("#F3E925");
        v.frontColor = F.c("#FAF6DD");
        v.lightning = 5; //闪电根数
        v.lightningLength = 19; //闪电长度
        v.lightningDamage = 145;//闪电伤害
        v.lightningColor = F.c("#E8D122");//闪电颜色
        v.reloadMultiplier = 1.3; //装弹速
        v.fragBullets = 1;
        v.fragBullet = hur;
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());
exports.langyong2Bullet_monengjing1 = (
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 2;
        v.collidesTiles = false;
        v.splashDamageRadius = 6 * 8;
        v.splashDamage = 140;
        v.backColor = F.c("#282828");
        v.frontColor = F.c("#9F9F9F");
        v.knockback = 1.8;
        v.reloadMultiplier = 1.5; //装弹速
        v.fragBullets = 8
        v.fragBullet = (
            (() => {
                const c = new ArtilleryBulletType(3, 20, "shell");
                c.width = 20
                c.height = 20
                c.splashDamage = 40
                c.splashDamageRadius = 80
                c.despawnEffect = Fx.plasticExplosionFlak
                c.backColor = F.c("#282828");
                c.frontColor = F.c("9F9F9F");
                return c;
            })());
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());
exports.langyong2Bullet_monengjing2 = (
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 6;
        v.collidesTiles = false;
        v.splashDamageRadius = 8.4 * 8;
        v.splashDamage = 520;
        v.backColor = F.c("#9C6CD3");
        v.frontColor = F.c("#9C6CD3");
        v.knockback = 3;
        v.reloadMultiplier = 1.2; //装弹速
        v.fragBullets = 4
        v.fragBullet = (
            (() => {
                const c = new ArtilleryBulletType(3, 20, "shell");
                c.width = 20
                c.height = 20
                c.splashDamage = 40
                c.splashDamageRadius = 6 * 8;
                c.despawnEffect = Fx.plasticExplosionFlak
                c.backColor = F.c("#D198FF");
                c.frontColor = F.c("#FBB4E0");
                c.fragBullets = 2
                c.fragBullet = (
                    (() => {
                        const b = new ArtilleryBulletType(3, 20, "shell");
                        b.width = 20
                        b.height = 20
                        b.splashDamage = 180
                        b.splashDamageRadius = 4 * 8
                        b.despawnEffect = Fx.plasticExplosionFlak
                        b.backColor = F.c("#D198FF");
                        b.frontColor = F.c("#FBB4E0");
                        return b;
                    })());
                return c;
            })());

        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })());


const Bullet_water = extend(LiquidBulletType, {});
Bullet_water.liquid = Liquids.water;
Bullet_water.status = StatusEffects.wet;
Bullet_water.lightColor = Pal.sap;
Bullet_water.lightOpacity = Pal.sap;
Bullet_water.damage = 1;
Bullet_water.puddleSize = 9;
Bullet_water.orbSize = 5;
Bullet_water.lifetime = 45;
Bullet_water.speed = 3.5;
Bullet_water.shootEffect = Fx.shootLiquid;

exports.langyong2Bullet_dabaoshui = (
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 2;
        v.collidesTiles = false;
        v.splashDamageRadius = 6 * 8;
        v.splashDamage = 20;
        v.backColor = F.c("#0029CF");
        v.frontColor = F.c("#667DD6");
        v.reloadMultiplier = 0.5; //装弹速
        v.fragBullets = 5
        v.fragBullet = Bullet_water
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })()
);

const Bullet_yedan = extend(LiquidBulletType, {});
Bullet_yedan.liquid = wupin.qiangxiaolengqueye;
Bullet_yedan.status = status.effectX
Bullet_yedan.statusDuration = 60;
Bullet_yedan.lightColor = F.c("#ffffff");
Bullet_yedan.lightOpacity = F.c("#ffffff");
Bullet_yedan.damage = 1;
Bullet_yedan.puddleSize = 9;
Bullet_yedan.orbSize = 5;
Bullet_yedan.lifetime = 45;
Bullet_yedan.speed = 3.5;
Bullet_yedan.shootEffect = Fx.shootLiquid;
exports.langyong2Bullet_dabaoyedan = (
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 40;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 6;
        v.collidesTiles = false;
        v.splashDamageRadius = 6 * 8;
        v.splashDamage = 20;
        v.backColor = F.c("#6A6A6A");
        v.frontColor = F.c("#D3D3D3");
        v.reloadMultiplier = 0.5; //装弹速
        v.fragBullets = 5
        v.fragBullet = Bullet_yedan
        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = true;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })()
);
//T2齐射
exports.qishe_yuanzuan = (//原钻
    (() => {
        const v = new BasicBulletType(5, 50 * 2.5, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("006030")
        v.trailColor = F.c("006030")
        v.hitColor = F.c("006030")
        v.trailChance = 0.44;
        v.ammoMultiplier = 1;
        v.lifetime = 75;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.spin = 20;//子弹旋转
        return v;
    })()
);
exports.qishe_zuanjing = (//钻晶
    (() => {
        const v = new BasicBulletType(5, 50 * 2.5, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("8cf4e2")
        v.trailColor = F.c("8cf4e2")
        v.hitColor = F.c("8cf4e2")
        v.trailChance = 0.44;
        v.ammoMultiplier = 1;
        v.lifetime = 75;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.splashDamageRadius = 4 * 8; //分裂范围
        v.splashDamage = 35; //分裂的伤害
        v.weaveMag = 2.5;
        v.weaveScale = 4;
        v.spin = 20;//子弹旋转
        return v;
    })()
);
exports.qishe_taihejin = (//钛合金
    (() => {
        const v = new BasicBulletType(8, 100 * 2.5, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("B8C9FF")
        v.trailColor = F.c("B8C9FF")
        v.hitColor = F.c("B8C9FF")
        v.trailChance = 0.44;
        v.ammoMultiplier = 3;
        v.lifetime = 60;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.status = status.zhenhan
        v.statusDuration = 2 * 60;
        v.reloadMultiplier = 1.2
        v.weaveMag = 2.5;//曲线，拐弯
        v.weaveScale = 4;
        v.spin = 20;//子弹旋转
        return v;
    })()
)
exports.qishe_molishi = (//魔力石
    (() => {
        const v = new BasicBulletType(7, 74 * 2.5, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("272727")
        v.trailColor = F.c("272727")
        v.hitColor = F.c("272727")
        v.trailChance = 0.44;
        v.ammoMultiplier = 4;
        v.lifetime = 65;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.reloadMultiplier = 1.5
        v.weaveMag = 3;
        v.weaveScale = 4;
        v.spin = 20;//子弹旋转
        return v;
    })()
)
exports.qishe_hejin = (//合金玻璃
    (() => {
        const v = new BasicBulletType(6, 84 * 2.5, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("F3D272")
        v.trailColor = F.c("F3D272")
        v.hitColor = F.c("F3D272")
        v.trailChance = 0.44;
        v.ammoMultiplier = 2;
        v.lifetime = 70;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.reloadMultiplier = 1.5
        v.weaveMag = 2.5;
        v.weaveScale = 4;
        v.spin = 20;//子弹旋转
        v.lightning = 3; //闪电根数
        v.lightningLength = 10; //闪电长度
        v.lightningDamage = 10;//闪电伤害
        v.lightningColor = Color.valueOf("f3be24");//闪电颜色
        return v;
    })()
)
exports.qishe_jin = (//金
    (() => {
        const v = new BasicBulletType(9, 60, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("f3be24")
        v.trailColor = F.c("f3be24")
        v.hitColor = F.c("f3be24")
        v.trailChance = 0.44;
        v.ammoMultiplier = 1;
        v.lifetime = 60;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.reloadMultiplier = 2.2
        v.weaveMag = 2.5;
        v.weaveScale = 4;
        v.knockback = 3
        v.spin = 20;//子弹旋转
        return v;
    })()
)
exports.qishe_jingliantai = (//钛精
    (() => {
        const v = new BasicBulletType(8, 75, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("CECEFF")
        v.trailColor = F.c("CECEFF")
        v.hitColor = F.c("CECEFF")
        v.trailChance = 0.44;
        v.ammoMultiplier = 1;
        v.lifetime = 60;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.reloadMultiplier = 1.8
        v.weaveMag = 2;
        v.weaveScale = 4;
        v.spin = 20;//子弹旋转
        return v;
    })()
)
exports.qishe_gutaiwanqin = (//固态晚轻
    (() => {
        const v = extend(BasicBulletType, 4, 160, "mine-bullet", {});
        //const v = new BasicBulletType(4, 90, "mine-bullet");
        v.width = 22
        v.height = 22;
        v.shrinkY = 0.3;
        v.backSprite = "large-bomb-back";
        v.shootEffect = Fx.shootBig2;
        v.smokeEffect = Fx.shootSmokeDisperse;
        v.frontColor = Color.white;
        v.backColor = F.c("E598EE")
        v.trailColor = F.c("E598EE")
        v.hitColor = F.c("E598EE")
        v.trailChance = 0.44;
        v.ammoMultiplier = 1;
        v.lifetime = 100;
        v.rotationOffset = 90;
        v.trailRotation = true;
        v.trailEffect = Fx.disperseTrail;
        v.hitEffect = Fx.hitBulletColor;
        v.despawnEffect = Fx.hitBulletColor;
        v.reloadMultiplier = 1.3
        v.weaveMag = 3;
        v.weaveScale = 5;
        v.spin = 20;//子弹旋转
        v.status = StatusEffects.blasted;//StatusEffects.freezing,
        return v;
    })()
)
//霸王

var dafengche = (() => {
    const SPEEF = 4;
    const laser01 = new JavaAdapter(ContinuousLaserBulletType, {
    }, 70);
    laser01.colors = [F.c("ec555555"), F.c("ec8888aa"), F.c("ff6c6a"), Color.white];
    laser01.width = 5;//宽
    laser01.length = 70//长
    laser01.largeHit = true;
    laser01.hitEffect = Fx.hitMeltdown
    laser01.hitColor = Pal.meltdownHit
    laser01.drawSize = 420
    laser01.incendChance = 0.4
    laser01.incendSpread = 5
    laser01.incendAmount = 1
    const laser02 = new JavaAdapter(ContinuousLaserBulletType, {
    }, 40);
    laser02.colors = [F.c("dc91ff"), F.c("973af5"), F.c("e8d1ff"), Color.white];
    laser02.width = 5;//宽
    laser02.length = 70//长
    laser02.largeHit = true;
    laser02.hitEffect = Fx.hitMeltdown
    laser02.hitColor = Pal.meltdownHit
    laser02.drawSize = 420
    laser02.incendChance = 0.4
    laser02.incendSpread = 5
    laser02.incendAmount = 1

    const bt = new JavaAdapter(BasicBulletType, {
        init(b) {
            if (!b) { return; }
            if (!b.data) { b.data = {}; }
            b.data.bullet1 = laser01.create(b, b.x, b.y, 0);
            b.data.bullet2 = laser01.create(b, b.x, b.y, 120);
            b.data.bullet3 = laser01.create(b, b.x, b.y, 240);
            b.data.bullet4 = laser02.create(b, b.x, b.y, 0);
            b.data.bullet5 = laser02.create(b, b.x, b.y, 120);
            b.data.bullet6 = laser02.create(b, b.x, b.y, 240);
            b.data.bulletRot = 0;
            b.data.direction = b.id % 2 == 0;
        },
        update(b) {
            this.super$update(b);
            b.data.bulletRot += 4;
            b.data.bullet1.time = 0;
            b.data.bullet2.time = 0;
            b.data.bullet3.time = 0;
            b.data.bullet4.time = 0;
            b.data.bullet5.time = 0;
            b.data.bullet6.time = 0;
            b.data.bullet1.set(b.x, b.y);
            b.data.bullet2.set(b.x, b.y);
            b.data.bullet3.set(b.x, b.y);
            b.data.bullet4.set(b.x, b.y);
            b.data.bullet5.set(b.x, b.y);
            b.data.bullet6.set(b.x, b.y);
            if (b.data.direction) {
                b.data.bullet1.rotation(b.rotation() + b.data.bulletRot);
                b.data.bullet2.rotation(b.rotation() + b.data.bulletRot + 120);
                b.data.bullet3.rotation(b.rotation() + b.data.bulletRot + 240);
                b.data.bullet4.rotation(b.rotation() + b.data.bulletRot + 60);
                b.data.bullet5.rotation(b.rotation() + b.data.bulletRot + 180);
                b.data.bullet6.rotation(b.rotation() + b.data.bulletRot + 300);
            } else {
                b.data.bullet1.rotation(b.rotation() - b.data.bulletRot);
                b.data.bullet2.rotation(b.rotation() - b.data.bulletRot + 120);
                b.data.bullet3.rotation(b.rotation() - b.data.bulletRot + 240);
                b.data.bullet4.rotation(b.rotation() - b.data.bulletRot + 60);
                b.data.bullet5.rotation(b.rotation() - b.data.bulletRot + 180);
                b.data.bullet6.rotation(b.rotation() - b.data.bulletRot + 300);
            }
        },
    });
    bt.sprite = "duo";
    bt.reloadMultiplier = 2;
    bt.damage = 200;
    bt.width = 6;
    bt.height = 6;
    bt.shrinkY = 0;
    bt.shrinkX = 0;
    bt.spin = 0;
    bt.lifetime = 250;
    bt.backColor = F.c("ffffff00");
    bt.frontColor = Pal.meltdownHit;
    bt.despawnEffect = Fx.none;
    bt.speed = 6;
    bt.collides = false;
    bt.reflectable = false;
    bt.absorbable = false;
    bt.homingRange = 40 * 8;
    bt.homingPower = 1; //追踪; 
    return bt;
})()
/* var Wweijing2 = new JavaAdapter(BasicBulletType, {});
Wweijing2.damage = 150; //伤害
Wweijing2.width = 25; //宽
Wweijing2.height = 30; //高
Wweijing2.speed = 6;
Wweijing2.lifetime = 80; //子弹最远距离
Wweijing2.splashDamageRadius = 16; //分裂范围
Wweijing2.splashDamage = 140; //分裂的伤害
Wweijing2.hitEffect = Fx.plasticExplosion;
Wweijing2.backColor = F.c("ffffff"); //背景颜色
Wweijing2.frontColor = F.c("bbffbb"); //前面颜色
Wweijing2.reloadMultiplier = 3.3; //装弹速度
Wweijing2.ammoMultiplier = 2; //装弹数量
Wweijing2.status = StatusEffects.slow
exports.Wweijing2 = Wweijing2
 */

var CO = F.c("9af379")
var FBullet = (
    (() => {
        const b = new BasicBulletType(3, 80, "creators-shoot6");
        b.width = 9;
        b.hitSize = 5;
        b.height = 15;
        b.pierce = true;
        b.lifetime = 35;
        b.pierceBuilding = true;
        b.hitColor = CO
        b.backColor = CO
        b.trailColor = CO
        b.frontColor = Color.white;
        b.trailWidth = 2.1;
        b.trailLength = 5;
        b.buildingDamageMultiplier = 0.3;
        b.homingPower = 0.2;
        b.hitEffect = (() => {
            const c = new WaveEffect()
            c.colorFrom = CO
            c.colorTo = CO
            c.sizeTo = 20;
            c.strokeFrom = 8;
            c.lifetime = 120;
            c.strokeFrom = 4;
            c.strokeTo = 0;
            return c;
        })()
        b.despawnEffect = (() => {
            const c = new WaveEffect()
            c.colorFrom = CO
            c.colorTo = CO
            c.sizeTo = 7;
            c.strokeFrom = 4;
            c.lifetime = 30;
            return c;
        })()
        return b;
    })());
var hct = (() => {
    const c = new WaveEffect()
    c.colorFrom = CO
    c.colorTo = CO
    c.sizeTo = 30;
    c.strokeFrom = 8;
    c.lifetime = 120;
    c.strokeFrom = 7;
    c.strokeTo = 0;
    return c;
})();
var hct2 = (() => {
    const c = new WaveEffect()
    c.colorFrom = CO
    c.colorTo = CO
    c.sizeTo = 22;
    c.strokeFrom = 8;
    c.lifetime = 90;
    c.strokeFrom = 5;
    c.strokeTo = 0;
    return c;
})()
exports.Wweijing2 = (
    (() => {

        const v = new BasicBulletType(5, 170, "creators-shoot1");
        v.despawnEffect = (() => {
            const b = new ExplosionEffect()
            b.lifetime = 28;
            b.waveStroke = 6;
            b.waveLife = 10;
            b.waveRadBase = 7;
            b.waveRad = 30;
            b.smokes = 6;
            b.sparks = 6;
            b.sparkRad = 35;
            b.sparkStroke = 1.5;
            b.sparkLen = 4

            b.waveColor = CO
            b.smokeColor = Color.gray;
            b.sparkColor = Pal.sap;
            // b.waveStroke = 1;
            // b.waveRad = 40;
            // b.smokes = 15;
            // b.sparks = 10;
            return b;
        })()
        v.hitEffect = new MultiEffect(hct, hct2);
        v.smokeEffect = Fx.shootSmokeTitan;
        v.hitColor = CO
        v.trailEffect = Fx.missileTrail;
        v.trailInterval = 3;
        v.trailParam = 4;
        v.pierceCap = 2;
        v.fragOnHit = false;
        v.lifetime = 90;
        v.width = 22
        v.height = 26;
        v.backColor = CO
        v.frontColor = Color.white;
        v.shrinkX = shrinkY = 0;
        v.trailColor = CO
        v.trailLength = 25;
        v.trailWidth = 5;


        v.intervalBullet = FBullet
        v.fragBullet = FBullet
        v.fragBullets = 20;
        v.fragVelocityMin = 0.5;
        v.fragVelocityMax = 1.5;
        v.fragLifeMin = 2.5;


        v.bulletInterval = 3;
        v.intervalRandomSpread = 20;
        v.intervalBullets = 2;
        v.intervalAngle = 180;
        v.intervalSpread = 300;
        return v;
    })());


var Wweijing1 = new JavaAdapter(BasicBulletType, {});
Wweijing1.damage = 155; //伤害
Wweijing1.width = 20; //宽
Wweijing1.height = 30; //高
Wweijing1.homingPower = 0.9; //追踪; 
Wweijing1.lightning = 5;//闪电根数
Wweijing1.lightningLength = 12;//闪电长度
Wweijing1.lightningColor = F.c("fbca38");//闪电颜色
Wweijing1.lightningDamage = 20;//闪电伤害
Wweijing1.speed = 6;
Wweijing1.lifetime = 80; //子弹最远距离
Wweijing1.hitEffect = new MultiEffect(Fx.titanExplosion,);//Fx.plasticExplosion;
Wweijing1.hitColor = F.c("f8ff85");
Wweijing1.backColor = F.c("ffffff"); //背景颜色
Wweijing1.frontColor = F.c("f8ff85"); //前面颜色
Wweijing1.reloadMultiplier = 2; //装弹速度
Wweijing1.ammoMultiplier = 1; //装弹数量
Wweijing1.status = StatusEffects.sapped
Wweijing1.trailParam = 4
Wweijing1.trailLength = 8
Wweijing1.trailWidth = 2
Wweijing1.trailColor = F.c("f8ff85FF");
exports.Wweijing1 = Wweijing1












var WmonengjingA = new JavaAdapter(MissileBulletType, {});
WmonengjingA.splashDamageRadius = 25;
WmonengjingA.splashDamage = 100;
WmonengjingA.width = 7;
WmonengjingA.damage = 19;
WmonengjingA.height = 13;
WmonengjingA.trailEffect = Fx.none;
WmonengjingA.homingRange = 40000;
WmonengjingA.homingPower = 1;
WmonengjingA.lifetime = 1000;
WmonengjingA.speed = 1.7;
WmonengjingA.hitEffect = Fx.flakExplosion
WmonengjingA.status = StatusEffects.freezing

var Wmonengjing = new JavaAdapter(MissileBulletType, {});
Wmonengjing.damage = 80; //伤害
Wmonengjing.width = 20; //宽
Wmonengjing.height = 34; //高
Wmonengjing.homingRange = 320;
Wmonengjing.homingPower = 1; //追踪; 
Wmonengjing.speed = 3;
Wmonengjing.lifetime = 100; //子弹最远距离
Wmonengjing.hitEffect = Fx.plasticExplosion;
Wmonengjing.backColor = F.c("ff6c6c"); //背景颜色
Wmonengjing.frontColor = F.c("ffffff"); //前面颜色
Wmonengjing.reloadMultiplier = 1.3; //装弹速度
Wmonengjing.ammoMultiplier = 2; //装弹数量
//Wmonengjing.trailColor= B7B7B7;
Wmonengjing.trailEffect = Fx.smoke;
Wmonengjing.shootEffect = Fx.shootSmall;
Wmonengjing.fragBullets = 25;
Wmonengjing.fragBullet = WmonengjingA;
exports.Wmonengjing = Wmonengjing

var Wmonengjing2 = new JavaAdapter(MissileBulletType, {});
Wmonengjing2.damage = 2300; //伤害
Wmonengjing2.width = 20; //宽
Wmonengjing2.height = 35; //高
Wmonengjing2.homingRange = 320;
Wmonengjing2.homingPower = 1; //追踪; 
Wmonengjing2.speed = 5;
Wmonengjing2.lifetime = 60; //子弹最远距离
Wmonengjing2.hitEffect = Fx.plasticExplosion;
Wmonengjing2.backColor = F.c("b56cff"); //背景颜色
Wmonengjing2.frontColor = F.c("ffffff"); //前面颜色
Wmonengjing2.reloadMultiplier = 0.15; //装弹速度
Wmonengjing2.ammoMultiplier = 2; //装弹数量
Wmonengjing2.buildingDamageMultiplier = 0.2;//对建筑的伤害
Wmonengjing2.trailEffect = Fx.smoke;
Wmonengjing2.shootEffect = Fx.shootSmall;
Wmonengjing2.fragBullets = 3;
Wmonengjing2.fragBullet = dafengche;
exports.Wmonengjing2 = Wmonengjing2

//const shangdilizizidan = require('shangdilizizidan');
/* var FxL = new Effect(40, e => {
    Draw.color(F.c("a775f6"));
    Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fout() * 1.2);
    });
});
 */


var shangdilizi2 = new JavaAdapter(MissileBulletType, {});
shangdilizi2.width = 12;
shangdilizi2.damage = 3200;//15
shangdilizi2.height = 20;
shangdilizi2.trailEffect = Fx.none;
shangdilizi2.lifetime = 200;
shangdilizi2.speed = 6;
shangdilizi2.backColor = F.c("f6fe76"); //背景颜色
shangdilizi2.frontColor = F.c("7936f4"); //前面颜色
shangdilizi2.status = status.effectL; //效果
shangdilizi2.statusDuration = 480//效果时间8秒
shangdilizi2.hitEffect = Fx.flakExplosion
shangdilizi2.pierce = true;
shangdilizi2.pierceCap = 6;
shangdilizi2.trailChance = 1;
shangdilizi2.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-ss";
        b.colorFrom = F.c("b68effff");
        b.colorTo = F.c("b68effff");
        b.lifetime = 22;
        return b;
    })()
);

var shangdilizi1 = new JavaAdapter(BasicBulletType, {});
shangdilizi1.sprite = "creators-shoot31";
shangdilizi1.spin = 38;//子弹旋转
shangdilizi1.damage = 15000; //伤害300
shangdilizi1.width = 30; //宽
shangdilizi1.height = 30; //高
shangdilizi1.speed = 6;
shangdilizi1.homingRange = 2000;
shangdilizi1.homingPower = 5;
shangdilizi1.lifetime = 80; //子弹最远距离
shangdilizi1.hitEffect = (() => {
    const c = new WaveEffect()
    c.colorFrom = F.c("b099db");
    c.colorTo = F.c("b099db");
    c.sizeTo = 60;
    c.strokeFrom = 8;
    c.lifetime = 120;
    c.strokeFrom = 7;
    c.strokeTo = 0;
    return c;
})();//Fx.plasticExplosion;
shangdilizi1.backColor = F.c("ffffff"); //背景颜色
shangdilizi1.frontColor = F.c("b099db"); //前面颜色
shangdilizi1.reloadMultiplier = 0.02; //装弹速度0.15
shangdilizi1.ammoMultiplier = 30; //装弹数量
shangdilizi1.status = status.effectL; //效果:定身
shangdilizi1.statusDuration = 30
shangdilizi1.fragBullets = 50;
shangdilizi1.fragBullet = shangdilizi2;
shangdilizi1.trailWidth = 8;
shangdilizi1.trailLength = 30;
shangdilizi1.trailColor = F.c("b099dbFF");
shangdilizi1.trailEffect = new Effect(130, e => {
    Draw.color(F.c("ab83f6ff"), e.color, e.fin());
    Lines.stroke(e.fout() * 1.1 + 0.5);
    Angles.randLenVectors(e.id, 5, 270 * e.fin(), e.rotation, 9, (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 5 + 0.5);
    });
});
//Fx.colorSpark;
shangdilizi1.trailRotation = true;
shangdilizi1.trailInterval = 3;
shangdilizi1.despawnEffect = (
    () => {
        const b = new WaveEffect()
        b.lifetime = 90
        b.sizeFrom = 0
        b.sizeTo = 80
        b.strokeFrom = 8
        b.strokeTo = 0
        b.colorFrom = F.c("ab80ffff");
        b.colorTo = F.c("ab80ffff");
        return b;
    })()
exports.shangdilizi1 = shangdilizi1




 exports.lanseBU = (//蓝瑟2 飞逝
    (() => {
        const b = extend(ContinuousLaserBulletType, {})

        b.chargeEffect = new MultiEffect(
            (() => {
                const c = new Effect(38, e => {
                    Draw.color(Pal.lancerLaser);
                    Angles.randLenVectors(e.id, 50, 1 + 20 * e.fout(), e.rotation, 120, (x, y) => {
                        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 3 + 1);
                    });
                })
                return c;
            })(),
            (() => {
                const c = new Effect(60, e => {
                    var margin = 1 - Mathf.curve(e.fin(), 0.9);
                    var fin = Math.min(margin, e.fin());
                    Draw.color(Pal.lancerLaser);
                    Fill.circle(e.x, e.y, fin * 6);
                    Draw.color();
                    Fill.circle(e.x, e.y, fin * 2);
                })
                return c;
            })(),
        );
        b.pierceCap= 3, //穿透数量
        b.lightning = 3;
        b.lightningLength = 10;
        b.lightningColor = F.c("73dfff");//闪电颜色
        b.lightningDamage = 5;
        // b.trailWidth = 8;
        // b.trailLength = 30;
        // b.trailColor = F.c("73dfffFF");
        // b.trailEffect = new Effect(130, e => {
        //     Draw.color(F.c("73dfffff"), e.color, e.fin());
        //     Lines.stroke(e.fout() * 1.1 + 0.5);
        //     Angles.randLenVectors(e.id, 5, 270 * e.fin(), e.rotation, 9, (x, y) => {
        //         Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 5 + 0.5);
        //     });
        // });
        b.buildingDamageMultiplier = 0.4//对建筑的伤害
        b.speed = 5
        b.lifetime = 60
        // b.collidesTeam = true;
        // b.pierceCap=2;
        // b.pierceBuilding = false;
        b.damage = 600 / 12
        b.width = 4
        b.length = 300
        b.colors = [F.c("73dfff"), F.c("51c263"), F.c("ffffff"),]
        b.fragBullets = 4; //分裂数量
        b.fragBullet = (
            (() => {
                const b = extend(ContinuousLaserBulletType, {})
                b.speed = 0
                b.pierceCap= 3, //穿透数量
                b.lifetime = 20
                b.collidesTeam = true
                b.damage = 220 / 12
                b.width = 2
                b.length = 200
                b.colors = [F.c("73dfff"), F.c("51c263"), F.c("ffffff"),]
                return b;
            })()
        );
        return b;
    })()); 

//灭世神子弹



exports.langyong2Bullet_monengjing2_mieshishen = (//浪涌
    (() => {
        const v = new ArtilleryBulletType(4.4, 20, "shell");
        v.hitEffect = Fx.plasticExplosion;
        v.lifetime = 150;
        v.width = 23;
        v.height = 23;
        v.ammoMultiplier = 6;
        v.collidesTiles = false;
        v.splashDamageRadius = 8.4 * 8;
        v.splashDamage = 520;
        v.backColor = F.c("#d36c6c");
        v.frontColor = F.c("#d36c6c");
        v.knockback = 3;
        v.reloadMultiplier = 1.2; //装弹速
        v.fragBullets = 4
        v.fragBullet = (
            (() => {
                const c = new ArtilleryBulletType(3, 20, "shell");
                c.width = 20
                c.height = 20
                c.splashDamage = 40
                c.splashDamageRadius = 6 * 8;
                c.despawnEffect = Fx.plasticExplosionFlak
                c.backColor = F.c("#ff9898");
                c.frontColor = F.c("#fbb4b4");
                c.fragBullets = 2
                c.fragBullet = (
                    (() => {
                        const b = new ArtilleryBulletType(3, 20, "shell");
                        b.width = 20
                        b.height = 20
                        b.splashDamage = 180
                        b.splashDamageRadius = 4 * 8
                        b.despawnEffect = Fx.plasticExplosionFlak
                        b.backColor = F.c("#ff9898");
                        b.frontColor = F.c("#fbb4b4");
                        return b;
                    })());
                return c;
            })());

        //---
        v.collidesTiles = false;
        v.collides = false;
        v.collidesAir = false;
        v.scaleLife = true;
        v.hitShake = 1;
        v.hitSound = Sounds.explosion;
        v.shootEffect = Fx.shootBig;
        v.trailEffect = Fx.artilleryTrail;
        return v;
    })()
);

exports.tiansha_mieshishen = ( //天煞
    () => {
        const SPEED = 4;

        const laser1 = new JavaAdapter(ContinuousLaserBulletType, {
        }, 70);
        laser1.colors = [F.c("ec555555"), F.c("ec8888aa"), F.c("ff6c6a"), Color.white];
        laser1.width = 10;
        laser1.largeHit = true;
        laser1.length = 110
        laser1.hitEffect = Fx.hitMeltdown
        laser1.hitColor = Pal.meltdownHit
        laser1.drawSize = 420
        laser1.incendChance = 0.4
        laser1.incendSpread = 5
        laser1.incendAmount = 1

        const laser2 = new JavaAdapter(ContinuousLaserBulletType, {
        }, 40);
        laser2.colors = [F.c("ec745855"), F.c("ec7458aa"), F.c("ff9c5a"), Color.white];
        laser2.width = 10;
        laser2.largeHit = true;
        laser2.length = 110
        laser2.hitEffect = Fx.hitMeltdown
        laser2.hitColor = Pal.meltdownHit
        laser2.drawSize = 420
        laser2.incendChance = 0.4
        laser2.incendSpread = 5
        laser2.incendAmount = 1

        const bt = new JavaAdapter(BasicBulletType, {
            init(b) {
                if (!b) { return; }
                if (!b.data) { b.data = {}; }
                b.data.bullet1 = laser1.create(b, b.x, b.y, 0);
                b.data.bullet2 = laser1.create(b, b.x, b.y, 120);
                b.data.bullet3 = laser1.create(b, b.x, b.y, 240);
                b.data.bullet4 = laser2.create(b, b.x, b.y, 0);
                b.data.bullet5 = laser2.create(b, b.x, b.y, 120);
                b.data.bullet6 = laser2.create(b, b.x, b.y, 240);
                b.data.bulletRot = 0;
                b.data.direction = b.id % 2 == 0;
            },
            update(b) {
                this.super$update(b);
                b.data.bulletRot += SPEED;
                b.data.bullet1.time = 0;
                b.data.bullet2.time = 0;
                b.data.bullet3.time = 0;
                b.data.bullet4.time = 0;
                b.data.bullet5.time = 0;
                b.data.bullet6.time = 0;
                b.data.bullet1.set(b.x, b.y);
                b.data.bullet2.set(b.x, b.y);
                b.data.bullet3.set(b.x, b.y);
                b.data.bullet4.set(b.x, b.y);
                b.data.bullet5.set(b.x, b.y);
                b.data.bullet6.set(b.x, b.y);
                if (b.data.direction) {
                    b.data.bullet1.rotation(b.rotation() + b.data.bulletRot);
                    b.data.bullet2.rotation(b.rotation() + b.data.bulletRot + 120);
                    b.data.bullet3.rotation(b.rotation() + b.data.bulletRot + 240);
                    b.data.bullet4.rotation(b.rotation() + b.data.bulletRot + 60);
                    b.data.bullet5.rotation(b.rotation() + b.data.bulletRot + 180);
                    b.data.bullet6.rotation(b.rotation() + b.data.bulletRot + 300);
                } else {
                    b.data.bullet1.rotation(b.rotation() - b.data.bulletRot);
                    b.data.bullet2.rotation(b.rotation() - b.data.bulletRot + 120);
                    b.data.bullet3.rotation(b.rotation() - b.data.bulletRot + 240);
                    b.data.bullet4.rotation(b.rotation() - b.data.bulletRot + 60);
                    b.data.bullet5.rotation(b.rotation() - b.data.bulletRot + 180);
                    b.data.bullet6.rotation(b.rotation() - b.data.bulletRot + 300);
                }
            },
        });
        bt.sprite = "";
        bt.reloadMultiplier = 1
        bt.ammoMultiplier = 1;
        bt.damage = 1800;
        bt.width = 6;
        bt.height = 6;
        bt.shrinkY = 0;
        bt.shrinkX = 0;
        bt.spin = 0;
        bt.lifetime = 400;
        bt.backColor = F.c("ffffff00");
        bt.frontColor = Pal.meltdownHit;
        bt.despawnEffect = Fx.none;
        bt.speed = 2;
        bt.collides = false;
        bt.reflectable = false;
        bt.absorbable = true;
        return bt;
    })();

exports.mingwang_mieshishen = (//冥王
    (() => {
        const b = new JavaAdapter(BasicBulletType, {});
        b.trailColor = F.c("cd4238ff");;
        b.trailParam = 5;
        b.trailLength = 18;
        b.trailWidth = 5;
        b.trailInterval = 10;
        b.trailRotation = true;
        b.trailEffect = Fx.none;
        b.recoil = 0; //反冲
        b.width = 22;
        b.height = 30;
        b.speed = 4;
        b.damage = 1300;
        b.ammoMultiplier = 3;
        b.hitSize = 8;
        b.lifetime = 170;
        b.pierce = false;
        b.lightning = 50;//根数
        b.lightningLength = 16; //闪电长度
        b.lightningDamage = 20; //闪电伤害
        b.status = StatusEffects.electrified;
        b.keepVelocity = false;
        b.hittable = false
        b.shrinkY = 0;
        b.shrinkX = 0;
        b.spin = 18;
        b.height = 46
        b.width = 46
        b.sprite = "creators-mingwangB1"
        b.frontColor = F.c("ff7d6f");
        b.backColor = F.c("ff7d6f");
        b.trailChance = 1;
        b.trailEffect = (
            (() => {
                const b = new ParticleEffect();
                b.region = "creators-mingwangB1";
                b.colorFrom = F.c("ff7d6f");
                b.colorTo = F.c("ff7d6f");
                return b;
            })()
        );
        b.hitEffect = (
            (() => {
                const b = new MultiEffect();
                b.effects = [
                    (() => {
                        const b = new ParticleEffect();
                        b.lightOpacity = 0.5;
                        b.particles = 5;
                        b.length = 50;
                        b.baseLength = 30;
                        b.lifetime = 60;
                        b.interp = Interp.exp5;
                        b.lightColor = F.c("ff7d6fff");
                        b.sizeFrom = 15;
                        b.sizeTo = 8;
                        b.colorFrom = F.c("ff7d6fff");
                        b.colorTo = F.c("cd423810");
                        return b;
                    })(),
                    (() => {
                        const b = new ParticleEffect();
                        b.lightOpacity = 0.5;
                        b.particles = 5;
                        b.length = 50;
                        b.baseLength = 30;
                        b.lifetime = 30;
                        b.interp = Interp.exp5;
                        b.lightColor = F.c("ff7d6fff");
                        b.sizeFrom = 14;
                        b.sizeTo = 7;
                        b.colorFrom = F.c("ff7d6fff");
                        b.colorTo = F.c("cd423810");
                        return b;
                    })(),
                ]
                return b;
            })()
        );
        return b;
    })()
);

exports.beijixing_mieshishen = (//北极星
    (() => {
        const D = new JavaAdapter(PointBulletType, {});
        D.hitEffect = new Effect(300, e => {
            Draw.color(Color.valueOf("f33939ff"))
            Lines.stroke(e.fout() * 2)
            Lines.poly(e.x, e.y, 3, e.fin() * 100, e.fin() * 360)
            Lines.poly(e.x, e.y, 3, e.fin() * 100, e.fout() * 360)

            Draw.alpha(1)
            Fill.poly(e.x, e.y, 3, e.fslope() * 20, e.fout() * 720)
            Fill.poly(e.x, e.y, 3, e.fslope() * 20, e.fin() * 360)
        });//Fx.massiveExplosion;
        D.smokeEffect = new Effect(220, e => {
            Draw.color(Pal.remove);
            Draw.alpha(e.fout());
            Lines.stroke(25 * e.fout());
            Lines.circle(e.x, e.y, e.fin() * 300);
            Draw.alpha(1);
            Lines.stroke(50 * e.fout());
            Lines.circle(e.x, e.y, e.fin() * 100);
            Angles.randLenVectors(e.id, 50, e.fin() * 200, (x, y) => {
                Draw.color(Pal.remove, Color.black, e.finpow());
                Fill.circle(e.x + x, e.y + y, 25 * e.fout());
            });
            Angles.randLenVectors(e.id, 50, 200 * e.fin(), e.rotation, 360, (x, y) => {
                Draw.color(Pal.remove);
                Lines.stroke(1);
                Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fout() * 20);
            });
        });//Fx.smokeCloud;
        D.trailEffect = (() => {
            const c = new ParticleEffect()
            c.lifetime = 150;
            c.region = "creators-ss";
            c.particles = 5;
            c.length = 16;
            c.sizeFrom = 10;
            c.colorFrom = Color.valueOf("f33939FF");
            c.colorTo = Color.valueOf("ffb4b4FF");
            return c;
        })();//子弹的弹道效果（那条直线）
        D.despawnEffect = new Effect(330, e => {
            Angles.randLenVectors(e.id, 20, 50 * e.finpow(),
                e.rotation, 200, (x, y) => {
                    Draw.color(Pal.remove, Color.black, e.fin());
                    Fill.circle(e.x + x, e.y + y, e.fout() * 5);
                    Lines.lineAngle(e.x + x * 2, e.y + y * 2, Mathf.angle(x, y), e.fout() * 10);
                });

            Lines.stroke(5 - e.finpow() * 5);
            Lines.circle(e.x, e.y, e.finpow() * 100);
        });// Fx.greenBomb;//子弹打在目标点上的效果
        D.scaleLife = true;
        D.updateEffectSeg = 40;
        D.color = Color.valueOf("f87979FF");
        D.trailSpacing = 20;
        D.tileDamageMultiplier = 0.5;
        D.hitShake = 6;
        D.speed = 12;
        // D.damage = 800;
        D.shootEffect = new Effect(30, e => {
            e.scaled(10, b => {
                Draw.color(Color.white, Color.valueOf("f33939FF"), b.fin());
                Lines.stroke(b.fout() * 3 + 0.2);
                Lines.circle(b.x, b.y, b.fin() * 50);
            });
            Draw.color(Color.valueOf("f33939FF"));
            Drawf.light(e.x, e.y, 180, Color.valueOf("f33939FF"), 0.9 * e.fout());
        });
        D.splashDamageRadius = 5 * 8;
        D.splashDamage = 2800;
        D.buildingDamageMultiplier = 0.3;
        return D;
    })()
);
exports.tianqian_mieshishen = (//天谴
    (() => {
        const b = new JavaAdapter(LaserBulletType, {});
        b.hitEffect = Fx.hitMeltdown
        b.status = status.effectX;
        b.statusDuration = 140;
        b.hittable = false;//被激光点防击中
        b.despawnEffect = Fx.none;
        b.hitShake = 1;
        b.hitSize = 70;
        b.length = 78 * 8
        b.width = 240;
        b.lifetime = 120;
        b.drawSize = 130;
        b.collidesAir = true;
        b.sideAngle = 30;
        b.sideLength = 30;
        b.sideWidth = 1;
        b.damage = 120000
        b.lightningSpacing = 22;
        b.lightningLength = 17;
        b.lightningDelay = 1;
        b.lightningLengthRand = 23;
        b.lightningDamage = 240;
        b.lightningAngleRand = 42;
        b.largeHit = true;
        b.lightColor = F.c("ff3e3eff");;
        b.lightningColor = F.c("ff3e3eff");;
        b.shootEffect = Fx.none;
        b.collidesTeam = true;
        b.colors = [F.c("ff5b5b01"), F.c("d20000B4"), F.c("ff7171"), Color.white]
        return b;
    })()
);
exports.mieshishenAcker = (
    (() => {
        const a = new JavaAdapter(BasicBulletType, {});
        a.sprite = "bullet";
        a.collidesTiles = true;
        a.reflectable = false;
        a.hittable = false;
        a.absorbable = false;
        a.speed = 12;
        a.height = 8;
        a.width = 8;
        a.shrinkX = -25;
        a.shrinkY = 0;
        a.drawSize = 0;
        a.collidesTeam = true;
        a.healPercent = 100;
        a.hitSize = 36;
        a.pierce = true;
        a.pierceCap = 100;
        a.pierceBuilding = true;
        a.lifetime = 0.7 * 60;
        a.damage = 2000;
        a.frontColor = Color.valueOf("ff3232ff");
        a.backColor = Color.valueOf("ffa3a3ff");
        a.hitEffect = Fx.none;
        a.despawnEffect = Fx.none;
        a.shootEffect = Fx.none;
        a.smokeEffect = Fx.none;
        a.incendChance = 0;
        return a;
    })()
);
exports.mieshishen = (
    (() => {
        const bt2 = new JavaAdapter(ContinuousLaserBulletType, {});
        bt2.damage = 80000;
        bt2.hitEffect = Fx.hitMeltHeal;
        bt2.drawSize = 420;
        bt2.lifetime = 22 * 60;
        bt2.width = 60;//宽
        bt2.oscScl = 0.8;
        bt2.oscMag = 0;
        bt2.length = 156 * 8//长
        bt2.shake = 1;//屏幕震动
        bt2.despawnEffect = Fx.smokeCloud;
        bt2.smokeEffect = Fx.none;
        bt2.shootEffect = new Effect(400, 100, e => {
            Draw.color(Color.valueOf("f95240"));
            Lines.stroke(e.fin() * 2);
            Lines.circle(e.x, e.y, e.fout() * 50);
            Lines.circle(e.x, e.y, e.fout() * 100);
        });
        bt2.incendChance = 0.1;
        bt2.incendSpread = 5;
        bt2.incendAmount = 1;
        bt2.healPercent = 1;
        bt2.collidesTeam = true;
        bt2.colors = [Color.valueOf("661712"), Color.valueOf("dd5349"), Color.valueOf("ac2c23"), Color.valueOf("ff4445")]
        //bt2.colors = [Color.valueOf("ec745855"), Color.valueOf("ec7458aa"), Color.valueOf("ff9c5a"), Color.white];
        bt2.tscales = [0.8, 0.55, 0.3, 0.1];//4条线边缘的宽度
        bt2.strokes = [2, 1.5, 1, 0.5];//4条线的宽度
        bt2.lenscales = [1, 1.05, 1.08, 1.1];//4条线的长度
        bt2.fadeTime = 180//淡入淡出时间
        return bt2;
    })());
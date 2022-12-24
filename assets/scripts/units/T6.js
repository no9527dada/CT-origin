

const lib = require('lib');
const { ionBurningEffect1 } = require('Status');

const T6rishi = extend(UnitType, "T6rishi", {

    draw(unit) {
        this.super$draw(unit);
        Draw.rect(
            "creators-T6rishi-2",
            unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
            unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
            Time.time * -1);
        Draw.rect(
            "creators-T6rishi-4",
            unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
            unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
            Time.time * +1);
        Draw.rect(
            "creators-T6rishi-3",
            unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
            unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
            Time.time * -1);
    }

})
T6rishi.ammoType = new ItemAmmoType(Items.thorium, 3);
T6rishi.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
exports.T6rishi = T6rishi
//T6版死星
const sectors = 5;
const sectorRad = 0.14;
const blinkScl = 20;
const rotateSpeed = 0.5;
const effectRadius = 10;
const LightningFieldAbility = (damage, reload, range, color, maxFind) => {
    var x = 0;
    var y = 0;
    var timer = 0;
    var curStroke = 0;
    var find = false;
    var target = new Seq();
    //const maxFind = 18;
    const chargeTime = 20;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return Core.bundle.format("T6sixingg", damage, range / Vars.tilesize, maxFind);
        },
        draw(unit) {
            Draw.z(Layer.bullet - 0.001);
            Draw.color(color);
            Tmp.v1.trns(unit.rotation - 90, x, y).add(unit.x, unit.y);
            var rx = Tmp.v1.x;
            var ry = Tmp.v1.y;
            var orbRadius = effectRadius * (1 + Mathf.absin(blinkScl, 0.1));

            Fill.circle(rx, ry, orbRadius);
            Draw.color();
            Fill.circle(rx, ry, orbRadius / 2);

            Lines.stroke((0.7 + Mathf.absin(blinkScl, 0.7)), color);

            for (var i = 0; i < sectors; i++) {
                var rot = unit.rotation + i * 360 / sectors - Time.time * rotateSpeed;
                Lines.arc(rx, ry, orbRadius + 3, sectorRad, rot);
            }

            Lines.stroke(Lines.getStroke() * curStroke);

            if (curStroke > 0) {
                for (var i = 0; i < sectors; i++) {
                    var rot = unit.rotation + i * 360 / sectors + Time.time * rotateSpeed;
                    Lines.arc(rx, ry, range, sectorRad, rot);
                }
            }
            Drawf.light(rx, ry, range * 1.5, color, 0.8);
            Draw.reset();
        },
        update(unit) {
            timer = Math.min(timer + Time.delta, reload);
            curStroke = Mathf.lerpDelta(curStroke, find ? 1 : 0, 0.09);
            //Lock multiple (group friend selection)
            if (timer >= reload) {
                find = false;
                target.clear();
                Units.nearby(null, unit.x, unit.y, range, cons(other => {
                    if (other.team != unit.team) {
                        target.add(other);
                    }
                }));
                target.sort(floatf(u => u.dst2(unit.x, unit.y)));
                var max = Math.min(maxFind, target.size);
                for (var a = 0; a < max; a++) {
                    var other = target.get(a);
                    find = true;
                    new Effect(12, cons(e => {
                        Draw.color(color);
                        Lines.circle(e.x, e.y, e.fin() * range);
                        Draw.reset();
                    })).at(unit);
                    Fx.chainLightning.at(unit.x, unit.y, 0, color, other);
                    other.apply(StatusEffects.unmoving, 30);
                    for (var i = 0; i < 4; i++) {
                        Lightning.create(unit.team, color, damage / 4, other.x, other.y, Mathf.range(180), 10);
                    }
                    timer = 0
                }
            }
            if (Mathf.chance(0.05)) {
                var a = unit.rotation + Mathf.range(180) + 0;
                Lightning.create(unit.team, color, damage, unit.x, unit.y, a, 4);
            }
        },
        copy() {
            return LightningFieldAbility(damage, reload, range, color, maxFind);
        },
    });
    return ability;
};
var color = Color.valueOf("#FFA665");

const T6sixing = new UnitType('T6sixing',);
T6sixing.groundLayer = Layer.legUnit;
T6sixing.ammoType = new PowerAmmoType(24000);
T6sixing.constructor = prov(() => extend(UnitTypes.corvus.constructor.get().class, {}));
T6sixing.abilities.add(LightningFieldAbility(54, 90, 192, color, 22));
exports.T6sixing = T6sixing



//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//T6版天蝎
var xixue = (() => {
    const a = new JavaAdapter(SapBulletType, {});
    a.damage = 125;
    a.speed = 0;
    a.despawnEffect = Fx.none;
    a.pierce = true;
    a.collides = false;
    a.hitSize = 0;
    a.hittable = false;
    a.hitEffect = Fx.hitLiquid;
    a.status = StatusEffects.sapped;
    a.lightColor = Pal.sap;
    a.lightOpacity = 0.6;
    a.statusDuration = 60 * 3;
    a.impact = true;
    a.length = 100;
    a.sapStrength = 0.75;//吸血比
    a.color = Color.white.cpy();

    a.shootEffect = Fx.shootSmall;
    a.hitColor = Color.valueOf("bf92f9");
    a.color = Color.valueOf("bf92f9");
    a.width = 0.54;
    a.lifetime = 35;
    return a;
})()

var dafengche = (() => {
    const SPEEF = 4;
    const laser01 = new JavaAdapter(ContinuousLaserBulletType, {
    }, 70);
    laser01.colors = [Color.valueOf("8846f3"), Color.valueOf("caa1ff"), Color.valueOf("fa3b4c"), Color.valueOf("b68ef6")];
    laser01.width = 3;//宽
    laser01.length = 40//长
    laser01.largeHit = true;
    laser01.hitEffect = Fx.hitMeltdown
    laser01.hitColor = Pal.meltdownHit
    laser01.drawSize = 420
    laser01.incendChance = 0.4
    laser01.incendSpread = 5
    laser01.incendAmount = 1
    const laser02 = new JavaAdapter(ContinuousLaserBulletType, {
    }, 40);
    laser02.colors = [Color.valueOf("fa3b4c"), Color.valueOf("caa1ff"), Color.valueOf("f346e3"), Color.valueOf("b68ef6")];
    laser02.width = 3;//宽
    laser02.length = 40//长
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
            b.data.bulletRot += SPEEF;
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
    bt.reloadMultiplier = 2;
    bt.damage = 350;
    bt.width = 6;
    bt.height = 6;
    bt.shrinkY = 0;
    bt.shrinkX = 0;
    bt.collidesTeam = false; //能量子弹碰撞
    //bt.recoil = 3;
    bt.spin = 0;
    bt.lifetime = 200;
    bt.backColor = Color.valueOf("ffffff00");
    bt.frontColor = Pal.meltdownHit;
    bt.despawnEffect = Fx.none;
    bt.speed = 1.5;
    bt.collides = true;
    bt.reflectable = false;
    bt.absorbable = false;
    // bt.homingRange = 480;
    //bt.homingPower = 5; //追踪; 
    return bt;
})()
const T6tianxie = new UnitType("T6tianxie");
T6tianxie.ammoType = new PowerAmmoType(15000);
T6tianxie.itemCapacity = 230;
T6tianxie.groundLayer = Layer.legUnit;
T6tianxie.constructor = prov(() => extend(UnitTypes.toxopid.constructor.get().class, {}));

T6tianxie.weapons.add(
    (() => {
        const w = new Weapon("spiroct-weapon");
        w.shootY = 4;
        w.reload = 14;
        w.ejectEffect = Fx.none;
        w.recoil = 2;
        w.rotate = true;
        w.shootSound = Sounds.sap;
        w.bullet = xixue;
        w.x = 8.5;
        w.y = -1.5;

        return w;
    })()
);
T6tianxie.weapons.add(
    (() => {
        const w = new Weapon("spiroct-weapon");
        w.shootY = 4;
        w.reload = 14;
        w.ejectEffect = Fx.none;
        w.recoil = 2;
        w.rotate = true;
        w.shootSound = Sounds.sap;
        w.bullet = xixue;
        w.x = 4;
        w.y = 3;

        return w;
    })()
);
T6tianxie.weapons.add(
    (() => {
        const w = new Weapon("creators-T6tianxie1");
        w.x = 0;
        w.y = -25;
        w.inaccuracy = 25
        w.reload = 200;//射速
        w.rotate = false;//旋转
        w.bullet = dafengche;
        w.shoot = (() => {
            const c = new ShootAlternate()
            c.shots = 3;
            return c;
        })()
        w.recoil = 2;
        //w.shots = 5;
        //w.shotDelay = 10
        w.shootSound = Sounds.shootBig;
        return w;
    })()
);
const bt2 = new JavaAdapter(ContinuousLaserBulletType, {});
bt2.damage = 60;
bt2.length = 180;
bt2.hitEffect = Fx.hitMeltHeal;
bt2.drawSize = 420;
bt2.lifetime = 160;
bt2.width = 7;//宽
bt2.length = 250//长
bt2.shake = 1;
bt2.sapStrength = 0.45;//吸血比
bt2.despawnEffect = Fx.smokeCloud;
bt2.smokeEffect = Fx.none;
bt2.shootEffect = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("904cfd"));
    Lines.stroke(e.fin() * 2);
    Lines.circle(e.x, e.y, e.fout() * 50);
    Lines.circle(e.x, e.y, e.fout() * 100);
});
bt2.incendChance = 0.1;
bt2.incendSpread = 5;
bt2.incendAmount = 1;
//constant healing
bt2.healPercent = 1;
bt2.collidesTeam = true;
bt2.colors = [Color.valueOf("904cfd"), Color.valueOf("904cfd"), Color.valueOf("904cfd"), Color.valueOf("904cfd")];
bt2.shootStatus = StatusEffects.slow;
bt2.shootStatusDuration = 160;
T6tianxie.weapons.add(
    (() => {
        const w = new Weapon("creators-T6tianxie2");
        w.x = 20;
        w.y = 30;
        w.rotate = false;
        w.mirror = false;//镜像
        w.top = false;
        w.shake = 4;
        w.shootY = 5;
        //w.firstShotDelay = Fx.greenLaserChargeSmall.lifetime - 1;
        w.recoil = 5;//反冲
        w.chargeSound = Sounds.lasercharge2;
        w.shootSound = Sounds.beam;
        w.continuous = true;
        w.cooldownTime = 200;
        w.inaccuracy = 25
        w.reload = 150;//射速
        w.bullet = bt2;
        return w;
    })()
);
T6tianxie.weapons.add(
    (() => {
        const w = new Weapon("creators-T6tianxie3");
        w.x = -20;
        w.y = 30;
        w.rotateSpeed = 2
        w.rotate = false;
        w.mirror = false;//镜像
        w.top = false;
        w.shake = 4;
        w.shootY = 5;
        //w.firstShotDelay = Fx.greenLaserChargeSmall.lifetime - 1;
        w.recoil = 5;//反冲
        w.chargeSound = Sounds.lasercharge2;
        w.shootSound = Sounds.beam;
        w.continuous = true;
        w.cooldownTime = 200;
        w.inaccuracy = 25
        w.reload = 150;//射速
        w.bullet = bt2;
        return w;
    })()
);
exports.newEffectt = (lifetime, renderer) => new Effect(lifetime, cons(renderer));
const liC = Color.valueOf("bf92f9");
const dec = Color.valueOf("ffffff");
const dec2 = Color.valueOf("ffffff");
//闪电球子弹
const bt32 = new JavaAdapter(BasicBulletType, {
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
bt32.width = 1;
bt32.height = 1;
bt32.damage = 25;
bt32.lifetime = 40;
bt32.speed = 3;
bt32.status = StatusEffects.shocked;
bt32.despawnEffect = exports.newEffectt(20, (e) => {
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
bt32.pierceCap = 2;
bt32.pierceBuilding = true;
bt32.status = StatusEffects.blasted;
const bt31 = new JavaAdapter(ArtilleryBulletType, {});
bt31.damage = 80;
bt31.lifetime = 100;
bt31.speed = 3;
bt31.hitEffect = Fx.sapExplosion;
bt31.knockback = 0.8;
bt31.width = 25;
bt31.height = 25;
bt31.collidesTiles = true;
bt31.ollidess = true;
bt31.ammoMultiplier = 4;
bt31.splashDamageRadius = 80;
bt31.splashDamage = 75;
bt31.backColor = Pal.sapBulletBack;
bt31.frontColor = Pal.sapBullet;
bt31.lightningColor = Pal.sapBullet;
bt31.lightning = 5;
bt31.lightningLength = 20;
bt31.smokeEffect = Fx.shootBigSmoke2;
bt31.hitShake = 10;
bt31.lightRadius = 40;
bt31.lightColor = Pal.sap;
bt31.lightOpacity = 0.6;
bt31.status = StatusEffects.sapped;
bt31.statusDuration = 60 * 10;
bt31.fragBullet = bt32;////闪电球子弹  
bt31.fragBullets = 5;//破片分裂数量
bt31.homingRange = 320;//追踪范围
bt31.homingPower = 3;//追踪
const bt3 = new JavaAdapter(ShrapnelBulletType, {});
bt3.length = 90;
bt3.damage = 2300;
bt3.width = 75;
//bt3.height = 250;
bt3.serrationLenScl = 7;
bt3.serrationSpaceOffset = 60;
bt3.serrationFadeOffset = 0;
bt3.serrations = 10;
bt3.serrationWidth = 6;
bt3.status = StatusEffects.sapped;
bt3.fromColor = Pal.sapBullet;
bt3.toColor = Pal.sapBulletBack;
bt3.shootEffect = Fx.sparkShoot;
bt3.smokeEffect = Fx.sparkShoot;
bt3.fragRandomSpread = 60;//破片散布角度
bt3.fragAngle =0
bt3.fragBullets = 1
bt3.fragVelocityMin = 1, 
bt3.fragVelocityMax = 1;
bt3.fragLifeMin = 1,
bt3.fragLifeMax = 1;
bt3.fragBullet = bt31
T6tianxie.weapons.add(
    (() => {
        const w = new Weapon("creators-T6tianxie4");
        w.x = 0;
        w.y = 0;
        w.shoot = (() => {
            const c = new ShootAlternate()
          //  c.spread = 4.7;
            c.shots = 4;
           // c.barrels = 4
            c.shotDelay = 15;
            return c;
        })()
        w.rotate = true;
        w.mirror = false;//镜像
        w.top = false;
        w.shootY = 15;
        w.shake = 4;
        w.rotateSpeed = 4;//武器转速
        w.ejectEffect = Fx.casing1;
        w.shootSound = Sounds.shootBig;
        w.shadow = 12;
        w.recoil = 3;
        //w.shots = 1;
        //w.spacing = 17;
        w.reload = 100;//射速
        w.bullet = bt3;
        return w;
    })()
);

exports.T6tianxie = T6tianxie


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//T6王座

var Tdamage = 20;
var Tspeed = 3;
var hitEffectt = new JavaAdapter(ExplosionEffect, {});
hitEffectt.lifetime = 20;
hitEffectt.waveStroke = 2;
hitEffectt.waveColor = Color.valueOf("ff8d1b")
hitEffectt.waveRad = 12;
hitEffectt.smokeSize = 0;
hitEffectt.smokeSizeBase = 0;
hitEffectt.sparkColor = Color.valueOf("ff8d1b")
hitEffectt.sparks = 9;
hitEffectt.sparkRad = 35;
hitEffectt.sparkLen = 4;
hitEffectt.sparkStroke = 1.5;
const T6bullet21 = new JavaAdapter(MissileBulletType, {});
T6bullet21.speed = Tspeed
T6bullet21.damage = Tdamage
T6bullet21.length = 200;
T6bullet21.ammoMultiplier = 5;
T6bullet21.incendChance = 0.5;
T6bullet21.incendAmount = 3;
T6bullet21.homingPower = 0.2;
T6bullet21.weaveMag = 4;
T6bullet21.weaveScale = 4;
T6bullet21.lifetime = 60;
T6bullet21.shootEffect = Fx.shootHeal;
T6bullet21.smokeEffect = Fx.hitLaser;
T6bullet21.splashDamage = 13;
T6bullet21.splashDamageRadius = 20;
T6bullet21.frontColor = Color.white;
T6bullet21.hitSound = Sounds.none;
T6bullet21.lightColor = Color.valueOf("ff8d1b")
T6bullet21.lightRadius = 40;
T6bullet21.lightOpacity = 0.7;
T6bullet21.trailColor = Color.valueOf("ff8d1b")
T6bullet21.trailWidth = 2.5;
T6bullet21.trailLength = 20;
T6bullet21.trailChance = -1;
T6bullet21.healPercent = 2.8;
T6bullet21.collidesTeam = true;
T6bullet21.backColor = Color.valueOf("ff8d1b")
T6bullet21.despawnEffect = Fx.none;
T6bullet21.hitEffect = hitEffectt;

const T6bullet2 = new JavaAdapter(FlakBulletType, {});
T6bullet2.hittable = false;//无法被防御
T6bullet2.damage = 80; //伤害
T6bullet2.speed = 10;
T6bullet2.lifetime = 40; //子弹最远距离
T6bullet2.splashDamageRadius = 32; //分裂范围
T6bullet2.splashDamage = 150; //分裂的伤害
T6bullet2.width = 30; //宽
T6bullet2.height = 30; //高
T6bullet2.hitEffect = Fx.plasticExplosion;
T6bullet2.backColor = Color.valueOf("ff8d1b"); //背景颜色
T6bullet2.frontColor = Pal.bulletYellow//Color.valueOf("00E3E3"); //前面颜色
T6bullet2.reloadMultiplier = 1; //装弹速度
T6bullet2.ammoMultiplier = 3; //装弹数量
T6bullet2.knockback = 8; //击退; 
T6bullet2.pierce = false; //穿透
T6bullet2.lightning = 5; //闪电根数
T6bullet2.lightningLength = 8;//闪电长度
T6bullet2.lightningDamage = 20; //闪电伤害
T6bullet2.fragBullets = 12; //分裂数量
T6bullet2.fragBullet = T6bullet21;

const T6wangzuo = new UnitType("T6wangzuo");
T6wangzuo.ammoType = new ItemAmmoType(Items.pyratite);
T6wangzuo.constructor = prov(() => extend(UnitTypes.reign.constructor.get().class, {}));

function flameShoot(colorBegin, colorTo, colorEnd, length, cone, number, lifetime) {
    return new Effect(lifetime, 80, cons(e => {
        Draw.color(colorBegin, colorTo, colorEnd, e.fin());
        Angles.randLenVectors(e.id, number, e.finpow() * length, e.rotation, cone, (x, y) => {
            Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
        });
    }));
}
const flame2 = (() => {
    return (object) => {
        const options = Object.assign({
            //not in bullet
            flameLength: 190,//真实火焰范围
            flameCone: 10,//火焰角度
            particleNumber: 150,//粒子效果数量，原来是150
            //flameColors▼
            colorBegin: Pal.lightFlame,
            colorTo: Pal.darkFlame,
            colorEnd: Color.gray,
            //in bullet
            ammoMultiplier: 3,
            lifetime: 40,
            hitEffect: Fx.none,
            smokeEffect: Fx.none,
            trailEffect: Fx.none,
            despawnEffect: Fx.none,
            damage: 20,
            speed: 5,
            pierce: true,
            collidesAir: false,
            absorbable: true,
            hittable: false,
            keepVelocity: false,
            status: ionBurningEffect1,
            statusDuration: 60 * 4,
        }, object);
        options.shootEffect = flameShoot(options.colorBegin, options.colorTo, options.colorEnd, options.flameLength / 0.75, options.flameCone, options.particleNumber, options.lifetime + 10);
        //Define a bullet▼
        const f = extend(BulletType, {
            //draw hitsize
            hit(b) {
                if (this.absorbable && b.absorbed) return;
                //let's step by step
                //unit▼
                Units.nearbyEnemies(b.team, b.x, b.y, options.flameLength, cons(unit => {
                    if (Angles.within(b.rotation(), b.angleTo(unit), options.flameCone) && unit.checkTarget(this.collidesAir, this.collidesGround)) {
                        Fx.hitFlameSmall.at(unit);
                        unit.damage(this.damage * this.ammoMultiplier);
                        unit.apply(this.status, this.statusDuration);
                    }
                }));
                //block▼
                Vars.indexer.allBuildings(b.x, b.y, options.flameLength, cons(other => {
                    if (other.team != b.team && Angles.within(b.rotation(), b.angleTo(other), options.flameCone)) {
                        Fx.hitFlameSmall.at(other);
                        other.damage(this.damage * this.buildingDamageMultiplier * this.ammoMultiplier);
                    }
                }));
            },
        });
        f.ammoMultiplier = options.ammoMultiplier;
        f.lifetime = options.lifetime;
        f.shootEffect = options.shootEffect;
        f.hitEffect = options.hitEffect;
        f.smokeEffect = options.smokeEffect;
        f.trailEffect = options.trailEffect;
        f.despawnEffect = options.despawnEffect;
        f.damage = options.damage;
        f.speed = options.speed;
        f.pierce = options.pierce;
        f.collidesAir = options.collidesAir;
        f.absorbable = options.absorbable;
        f.hittable = options.hittable;
        f.keepVelocity = options.keepVelocity;
        f.status = options.status;
        f.statusDuration = options.statusDuration;
        f.despawnHit = true;
        return f;
    }
})();
T6wangzuo.weapons.add(
    (() => {
        const w = new Weapon("creators-T6wangzuo1");//喷火器
        w.x = 0;
        w.y = 27;
        w.shootCone= 20;
        // w.shots = 3;
        //w.spacing = 20;
        w.reload = 5;//射速
        w.mirror = false;//镜像
        w.rotate = false;
        w.bullet = flame2({
            flameLength: 220,//真实火焰范围
            flameCone: 12,//火焰角度
            particleNumber: 150,//粒子效果数量，原来是150
            damage: 85,
            colorBegin: Color.valueOf("e3d6c8"),
            colorTo: Color.valueOf("ff8d1b")
        });

        w.shootSound = Sounds.flame;
        return w;
    })()
);
T6wangzuo.weapons.add(
    (() => {
        const w = new Weapon("creators-T6wangzuo2");
        w.x = 14;
        w.y = -5;
        w.reload = 90;
        w.recoil = 8
        w.rotateSpeed = 2
        w.rotate = true;
        w.bullet = T6bullet2;
        w.shootSound = Sounds.bang;
        return w;
    })()
);
const T6bullet3 = new JavaAdapter(BasicBulletType, {});
T6bullet3.width = 11;
T6bullet3.height = 20;
T6bullet3.damage = 50;
T6bullet3.speed = 3;
T6bullet3.lifetime = 120;
T6bullet3.status = StatusEffects.burning
T6bullet3.shootEffect = Fx.shootBig;
T6bullet3.lightning = 2;
T6bullet3.lightningLength = 6;
T6bullet3.lightningColor = Pal.surge;
T6bullet3.trailSpacing=50
//standard bullet damage is far too much for lightning
T6bullet3.lightningDamage = 15;
T6wangzuo.weapons.add(
    (() => {
        const v   = new Weapon("reign-weapon");
        v.shoot = (() => {
            const c = new ShootAlternate()
            c.spread = 4.7;
            c.shots = 8;
            c.barrels = 4
            c.shotDelay = 2;
            return c;
        })()
        v.mirror = false;//镜像
       v. top = false;
       v.inaccuracy = 5;//精准
       v.y = -10;
       v.x = 35;
       v.shootY = 8;
       v. reload = 35;
       v. recoil = 5;
       v. shake = 2;
       v. ejectEffect = Fx.casing4;
       v. shootSound = Sounds.bang;
       v.bullet = (() => {
        const v   = new BasicBulletType(9, 150);
       v. pierce = true;
       v. pierceCap = 10;
       v. width = 14;
       v. height = 33;
       v. lifetime = 45;
       v. shootEffect = Fx.shootBig;
       v. fragVelocityMin = 0.4;
       v. hitEffect = Fx.blastExplosion;
       v. splashDamage = 18;
       v. splashDamageRadius = 13;
       v. fragBullets = 3;
       v. fragLifeMin = 0;
       v. fragRandomSpread = 30;
       v.fragBullet =   (() => {
        const v   = new BasicBulletType(9, 40);
       v.width = 10;
       v.height = 10;
       v.pierce = true;
       v.pierceBuilding = true;
       v.pierceCap = 3;
       v.lifetime = 20;
       v.hitEffect = Fx.flakExplosion;
       v.splashDamage = 15;
       v.splashDamageRadius = 10;
        return v;
         })()
        return v;
      })()
        return v;
      })()


)
T6wangzuo.weapons.add(
    (() => {
        const v   = new Weapon("reign-weapon");
        v.shoot = (() => {
            const c = new ShootAlternate()
            c.spread = 4.7;
            c.shots = 8;
            c.barrels = 4
            c.shotDelay = 2;
            return c;
        })()
        v.inaccuracy = 5;//精准
        v.mirror = false;//镜像
       v. top = false;
       v.y = -10;
       v.x = -35;
       v.shootY = 8;;
       v. reload = 35;
       v. recoil = 5;
       v. shake = 2;
       v. ejectEffect = Fx.casing4;
       v. shootSound = Sounds.bang;
       v.bullet = (() => {
        const v   = new BasicBulletType(9, 150);
       v. pierce = true;
       v. pierceCap = 10;
       v. width = 14;
       v. height = 33;
       v. lifetime = 45;
       v. shootEffect = Fx.shootBig;
       v. fragVelocityMin = 0.4;
       v. hitEffect = Fx.blastExplosion;
       v. splashDamage = 18;
       v. splashDamageRadius = 13;
       v. fragBullets = 3;
       v. fragLifeMin = 0;
       v. fragRandomSpread = 30;
       v.fragBullet =   (() => {
        const v   = new BasicBulletType(9, 40);
       v.width = 10;
       v.height = 10;
       v.pierce = true;
       v.pierceBuilding = true;
       v.pierceCap = 3;
       v.lifetime = 20;
       v.hitEffect = Fx.flakExplosion;
       v.splashDamage = 15;
       v.splashDamageRadius = 10;
        return v;
         })()
        return v;
      })()
        return v;
      })()


)
exports.T6wangzuo = T6wangzuo


/* 
var 值 = 3;
var t = 20;

const 实验 = extend(UnitType, "试验单位", {
    draw(unit) {
        this.super$draw(unit);
        if (t < 60) {
            t += Time.delta;
        } else {
            t = 0;
            if (值 < 3) {
                值 += 1
            } else {
                值 = 1
            };

        }
        Draw.rect(Core.atlas.find("creators-EEE" + 值), unit.x, unit.y,unit.rotation);
    }
})
实验.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {}));
实验.flying=true
 */
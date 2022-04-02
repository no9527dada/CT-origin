// Copyright (C) 2020 abomb4
//
// This file is part of Dimension Shard.
//
// Dimension Shard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Dimension Shard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Dimension Shard.  If not, see <http://www.gnu.org/licenses/>.
//          "sprite":"mod名-贴图"//子弹贴图，放在子弹类里
//          "hitTiles":true,//是否打方块(子弹)
// 			"collidesTiles":true,//是否碰撞方块(不论敌友)
// 			"collidesGround":true,
// 			"collidesTeam":false,//是否与同队单位碰撞
// 			"collidesAir":true,//是否空中碰撞
// 			"collides":true,//是否开启碰撞箱
//          极限值常用最大值：2147483647


//---------------------部分代码 @滞人 编写
const status = require("Status");
const dsGlobal =require('BlocksLibes/qianzhi');
const lib = require('lib'); 
const {
   // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    invalid, dabaosuan, molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = require('wupin');
const fangkongSound = lib.loadSound("fangkong");
const zhiliaoSound = lib.loadSound("zhiliao");
const { newIonBoltBulletType } = require('turrets/index');//离子液
const F = require("all/kuangjiAI");






//--------------------------------------------------------------------------//
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
    bt.sprite = "duo";
    bt.reloadMultiplier = 2;
    bt.damage = 400;
    bt.width = 6;
    bt.height = 6;
    bt.shrinkY = 0;
    bt.shrinkX = 0;
    bt.spin = 0;
    bt.lifetime = 450;
    bt.backColor = F.c("ffffff00");
    bt.frontColor = Pal.meltdownHit;
    bt.despawnEffect = Fx.none;
    bt.speed = 6;
    bt.collides = false;
    bt.reflectable = false;
    bt.absorbable = false;
    bt.homingRange = 40*8;
    bt.homingPower = 5; //追踪; 
    return bt;
})()
//-------------------------------------------------------------------------------------------    

const DianHu = extend(PowerTurret, 'dianhu', {})//"霹雳闪"
DianHu.shootType = (() => {
    const a = new JavaAdapter(LightningBulletType, {});


    a.collidesGround = false
    a.translation = -50
    a.damage = 10;
    a.lightningLength = 50;
    a.lightningLengthRand = 8;
    a.collidesAir = true;
    a.lightningColor = F.c("ef4018");
    return a;
})()
DianHu.canOverdrive = false;
DianHu.reloadTime = 35;
DianHu.shootCone = 40;
DianHu.rotateSpeed = 500;
DianHu.powerUse = 20;
//DianHu.localizedName = "霹雳闪"
DianHu.targetAir = true; //空
DianHu.targetGround = false; //地
DianHu.range = 320;
DianHu.shootEffect = Fx.lightningShoot;
DianHu.recoilAmount = 1;
DianHu.size = 3;
DianHu.health = 260;
DianHu.shootSound = Sounds.spark;
DianHu.hasLiquids = false;
DianHu.liquidCapacity = 0;
DianHu.shots = 100;
DianHu.xRand = 5;
DianHu.inaccuracy = 360;
DianHu.coolantUsage = 0;//液体加速
DianHu.requirements = ItemStack.with(
    Items.lead, 400,
    Items.copper, 350,
    guijingti, 120,
    zijing1, 35,
    shimoxi, 150,
);
DianHu.buildVisibility = BuildVisibility.shown;
DianHu.category = Category.turret;
exports.DianHu = DianHu;

const DianHu2 = extend(PowerTurret, 'dianhu2', {})//"霹雳闪2"
DianHu2.shootType = (() => {
    const a = new JavaAdapter(LightningBulletType, {});


    a.collidesGround = false
    a.translation = -50
    a.damage = 8;
    a.lightningLength = 20;
    a.lightningLengthRand = 8;
    a.collidesAir = true;
    a.status=status.pilishan
    a.statusDuration = 60
    a.lightningColor = F.c("ef4018");
    return a;
})()
DianHu2.canOverdrive = false;
DianHu2.reloadTime = 70;
DianHu2.shootCone = 40;
DianHu2.rotateSpeed = 500;
DianHu2.powerUse = 8;
DianHu2.targetAir = true; //空
DianHu2.targetGround = false; //地
DianHu2.range = 160;
DianHu2.shootEffect = Fx.lightningShoot;
DianHu2.recoilAmount = 1;
DianHu2.size = 2;
DianHu2.health = 210;
DianHu2.shootSound = Sounds.spark;
DianHu2.hasLiquids = false;
DianHu2.liquidCapacity = 0;
DianHu2.shots = 50;
DianHu2.xRand = 5;
DianHu2.inaccuracy = 360;
DianHu2.coolantUsage = 0;//液体加速
DianHu2.requirements = ItemStack.with(
    Items.lead, 400,
    Items.copper, 350,
    guijingti, 120,
    jin, 45,
    shimoxi, 70,
);
DianHu2.buildVisibility = BuildVisibility.shown;
DianHu2.category = Category.turret;
exports.DianHu2 = DianHu2;
//----------------------------------------------------------
const FangKong = new JavaAdapter(PowerTurret, {}, 'fangkong');//防空
FangKong.size = 2;
FangKong.health = 400;
FangKong.buildCostMultiplier = 1;
FangKong.heatColor = F.c("6ef6ff");
FangKong.shootEffect = Fx.none;
FangKong.smokeEffect = Fx.none;
FangKong.ammoUseEffect = Fx.none;
FangKong.ammoPerShot = 1;
FangKong.range = 144;
FangKong.reload = 4;
FangKong.inaccuracy = 1;
FangKong.shots = 1;
FangKong.spread = 6;
FangKong.recoil = 0.1;
FangKong.restitution = 0.02;
FangKong.cooldown = 0.02;
FangKong.rotatespeed = 8;
FangKong.shootShake = 0.2;
FangKong.collidesGround = false
FangKong.targetAir = true;
FangKong.targetGround = false;
FangKong.coolantMultiplier = 2;
FangKong.coolEffect = Fx.steam;
FangKong.powerUse = 0.5;
FangKong.shootType = (() => {
    const a = new JavaAdapter(BasicBulletType, {});
    a.bulletWidth = 5;
    a.bulletHeight = 50;
    a.bulletShrink = 0.5;
    a.lifetime = 30;
    a.speed = 8;
    a.damage = 10;
    a.collidesGround = false//子弹碰撞地面
    a.hitSize = 8;
    a.drawSize = 40;
    a.backColor = F.c("cff0f1"); //背景颜色
    a.frontColor = F.c("49d5f9"); //前面颜色
    a.drag = 0;
    a.pierce = true;
    a.hitEffect = Fx.melting;
    a.despawnEffect = Fx.despawn;
    a.hitSound = Sounds.none;
    a.status = StatusEffects.melting;
    a.statusDuration = 300
    return a;
})()
FangKong.requirements = ItemStack.with(
    Items.lead, 200,
    Items.graphite, 120,
    Items.silicon, 50,
);
FangKong.shootSound = fangkongSound
FangKong.buildVisibility = BuildVisibility.shown;
FangKong.category = Category.turret;

exports.FangKong = FangKong;
//------------------------------------------------

const healere = extend(PowerTurret, "zhiliaopao", {//治疗炮
})
healere.buildType = prov(() => new JavaAdapter(PowerTurret.PowerTurretBuild, {
    collide(other) { return other.owner != this },
    findTarget() {
        // 优先找己方被打的建筑，再寻找敌人
        var target = Units.findDamagedTile(this.team, this.x, this.y)
        if (target != null && target != this && this.dst(target) <= healere.range) {
            // 设置为己方方块
            this.target = target;
        } else {
            // 默认寻找方法
            this.super$findTarget();
        }
    },
    validateTarget() {
        // 修改了 team ，使得己方方块也视为有效目标
        return !Units.invalidateTarget(this.target, Team.derelict, this.x, this.y) || this.isControlled() || this.logicControlled();
    },
}, healere))
healere.health = 650;
healere.size = 2;
healere.targetAir = false;
healere.targetGround = true;
healere.rotateSpeed = 5;//转速
healere.reloadTime = 10;//装填时间
healere.maxAmmo = 10;//最大携弹数
healere.range = 200;
healere.shootSound = zhiliaoSound;
healere.knockback = 3;//击退
healere.inaccuracy = 3;//精准
healere.powerUse = 1.5;//耗电
healere.shootType = (() => {
    const a = new JavaAdapter(LaserBoltBulletType, {});
    a.speed = 6;//子弹速度
    a.lifetime = 40;
    a.healPercent = 2;
    a.damage = 14;//子弹伤
    a.backColor = F.c("00FF7F");
    a.collidesTeam = true;
    return a;
})()
healere.requirements = ItemStack.with(
    Items.lead, 55,
    Items.copper, 40,
    guijingti, 20,
);
healere.buildVisibility = BuildVisibility.shown;
healere.category = Category.turret;

exports.healere = healere;
//------------------------------------------
exports.huasha = (
    (() => {
        const a = extend(LiquidTurret, "huasha", {});
        a.size = 1;
        a.health = 500;
        a.buildCostMultiplier = 1;
        a.shootEffect = Fx.shootLiquid;
        a.range = 110;
        a.inaccuracy = 360;
        a.reloadTime = 5;
        a.shots = 20;
        a.targetAir = false;
        a.targetGround = false;
        a.velocityInaccuracy = 0.1;
        a.recoilAmount = 1;
        a.restitution = 0.04;
        a.shootCone = 45;
        a.liquidCapacity = 500;
        a.consumes.power(3);
        a.requirements = ItemStack.with(
            shimoxi, 260,
            Items.metaglass, 320,
            Items.lead, 150,
            guijingti, 30,
        );
        a.ammoTypes.put(
            Liquids.water,
            (() => {
                const b = new LiquidBulletType();
                b.liquid = Liquids.water;
                b.speed = 4;
                b.knockback = 0;
                b.puddleSize = 8;
                b.orbSize = 4;
                b.drag = 0.001;
                b.ammoMultiplier = 0.4;
                b.statusDuration = 240;
                //b. damage=0.2
                return b;
            })()
        );
        a.ammoTypes.put(
            Liquids.cryofluid,
            (() => {
                const b = new LiquidBulletType();
                b.liquid = Liquids.cryofluid;
                b.speed = 4;
                b.knockback = 0;
                b.puddleSize = 8;
                b.orbSize = 4;
                b.drag = 0.001;
                b.ammoMultiplier = 0.4;
                b.statusDuration = 240;
                return b;
            })()
        );

        a.buildType = prov(() => {
            return new JavaAdapter(LiquidTurret.LiquidTurretBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-huasha-1"), this.x, this.y, 90 - Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-huasha-1"), this.x, this.y, 30 - Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-huasha-1"), this.x, this.y, 60 - Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-huasha-4"), this.x, this.y);
                },
            }, a);
        });
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)
//-----------------------------------
var ml = new JavaAdapter(ShrapnelBulletType, {});
ml.damage = 74;
ml.length = 200;
ml.reloadMultiplier = 0.8;
ml.fromColor = F.c("DCDCDC");
ml.ammoMultiplier = 4;
var ti = new JavaAdapter(ShrapnelBulletType, {});
ti.damage = 33;
ti.length = 200;
ti.reloadMultiplier = 1.2;
ti.fromColor = F.c("87CEFA");
ti.ammoMultiplier = 4;
ti.duration = 1;
var pi = new JavaAdapter(ShrapnelBulletType, {});
pi.damage = 118;
pi.length = 200;
pi.fromColor = F.c("9ACD32");
pi.ammoMultiplier = 2;
var tim = new JavaAdapter(ShrapnelBulletType, {});
tim.damage = 137;
tim.length = 200;
tim.fromColor = F.c("B766AD");
tim.ammoMultiplier = 5;
tim.incendChance = 0.5;
tim.incendAmount = 3;
var sa = new JavaAdapter(ShrapnelBulletType, {});
sa.damage = 155;
sa.length = 200;
sa.fromColor = F.c("EEC900");
sa.ammoMultiplier = 2;
sa.lightining = 3;
sa.lightiningLength = 20;
const JueWang = extend(ItemTurret, 'q-juewang', {})//绝望
JueWang.ammoTypes.put(Items.metaglass, ml);
JueWang.ammoTypes.put(Items.titanium, ti);
JueWang.ammoTypes.put(Items.plastanium, pi);
JueWang.ammoTypes.put(Items.thorium, tim);
JueWang.ammoTypes.put(Items.surgeAlloy, sa);
JueWang.requirements = ItemStack.with(
    Items.plastanium, 125,
    Items.titanium, 225,
    Items.thorium, 175,
    Items.surgeAlloy, 75,
    guijingti, 110,
    jin, 150
);
JueWang.shootSound = Sounds.shotgun;
JueWang.health = 2700;
JueWang.reloadTime = 55;
JueWang.size = 4;
JueWang.spread = 20;
JueWang.shootCone = 30;
JueWang.recoilAmount = 4;
JueWang.rotatespeed = 5;
JueWang.ammoPerShot = 2;
JueWang.heatColor = Pal.turretHeat;
JueWang.shots = 7;
JueWang.range = 150;
JueWang.buildVisibility = BuildVisibility.shown;
JueWang.category = Category.turret;

exports.JueWang = JueWang;
//-------------------------------------------------------------
const shots = 6;//牵引数量
const force = 30;//拉力
const scaledForce = 8;//按比例缩小的力
const BuHuo = extend(TractorBeamTurret, 'r-buhuo', {//捕获
    setStats() {
        this.super$setStats();
        this.stats.add(Stat.shots, shots);
    },
})
BuHuo.buildType = prov(() => {
    var target = new Seq();
    return new JavaAdapter(TractorBeamTurret.TractorBeamBuild, {
        updateTile() {
            this.super$updateTile();
            target.clear();
            Units.nearbyEnemies(this.team, this.x, this.y, this.block.range, cons(unit => {
                if (unit.checkTarget(this.block.targetAir, this.block.targetGround) && Angles.within(this.rotation, this.angleTo(unit), this.block.shootCone) && this.efficiency() > 0.02) {
                    target.add(unit);
                }
            }));
            target.sort(floatf(u => u.dst(this.x, this.y)));
            var max = Math.min(shots, target.size);
            for (var a = 0; a < max; a++) {
                var unit = target.get(a);
                if (unit != null) {
                    if (this.block.damage > 0) {
                        unit.damageContinuous(this.block.damage * this.efficiency());
                    }
                    unit.impulseNet(Tmp.v1.set(this).sub(unit).limit((force + (1 - unit.dst(this) / this.block.range) * scaledForce) * this.edelta() * this.timeScale));
                }
            }
        },
        draw() {
            Draw.rect(this.block.baseRegion, this.x, this.y);
            Drawf.shadow(this.block.region, this.x - (this.block.size / 2), this.y - (this.block.size / 2), this.rotation - 90);
            Draw.rect(this.block.region, this.x, this.y, this.rotation - 90);
            Draw.z(Layer.bullet);
            var max = Math.min(shots, target.size);
            for (var a = 0; a < max; a++) {
                var unit = target.get(a);
                Draw.mixcol();
                Draw.mixcol(this.block.laserColor, Mathf.absin(4, 0.6));
                Tmp.v1.trns(this.rotation, this.block.shootLength).add(this.x, this.y);
                if (unit != null) {
                    Drawf.laser(
                        this.team,
                        Core.atlas.find("parallax-laser"),
                        Core.atlas.find("parallax-laser-end"),
                        Tmp.v1.x,
                        Tmp.v1.y,
                        unit.x,
                        unit.y,
                        this.efficiency() * this.block.laserWidth
                    );
                }
            }
        },
    }, BuHuo);
});
Object.assign(BuHuo, {
    hasPower: true,
    force: 30,
    scaledForce: 0,
    size: 3,
    damage: 0.6,
    range: 280,
    shootCone: 58,
    rotateSpeed: 8,
    laserWidth: 0.8,
    health: 160 * 3 * 3,
});
BuHuo.health = 980;
//BuHuo.size = 3;
//BuHuo.rotateSpeed = 20;//旋转速度
//BuHuo.range = 280;
//BuHuo.scaledForce = 20;//按比例缩小的力
//BuHuo.force = 20;//拉力
//BuHuo.hasPower = true
//BuHuo.damage = 0.7;//伤害比例 1=60伤害
BuHuo.consumes.power(4.8);
BuHuo.requirements = ItemStack.with(
    Items.titanium, 225,
    Items.plastanium, 60,
    zijing1, 45,
    guijingti, 150,
    shimoxi, 125
);
BuHuo.buildVisibility = BuildVisibility.shown;
BuHuo.category = Category.turret;

exports.BuHuo = BuHuo;
//-----------------------------------------------------
const LanJie = extend(PointDefenseTurret, 'r-lanjie', {})
LanJie.health = 1220;
LanJie.size = 3;
LanJie.rotateSpeed = 20;
LanJie.range = 250;
LanJie.reloadTime = 5;
LanJie.shootLength = 10;
//LanJie.inaccuracy = 5;//精度？
LanJie.bulletDamage = 35;//子弹的抵挡伤害
LanJie.consumes.power(13);
LanJie.requirements = ItemStack.with(
    Items.thorium, 225,
    Items.surgeAlloy, 60,
    Items.phaseFabric, 60,
    jin, 125,
    weijing1, 15,
    shimoxi, 150
);
LanJie.buildVisibility = BuildVisibility.shown;
LanJie.category = Category.turret;

exports.LanJie = LanJie;
//--------------------------------------------------------------------------
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
hur.damage = 25;
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
//hur.homingPower = 1 //追踪

var guang2 = new JavaAdapter(FlakBulletType, {});
guang2.collidesTiles = false
guang2.collides = false;
guang2.collidesAir = false;
guang2.damage = 30;
guang2.splashDamageRadius = 24;
guang2.splashDamage = 50;
guang2.width = 100;
guang2.height = 100;
guang2.speed = 0;
guang2.lifetime = 70;
guang2.hitEffect = Fx.plasticExplosion;
guang2.backColor = F.c("bf92f9");
guang2.frontColor = F.c("bf92f9");
guang2.reloadMultiplier = 3;
guang2.ammoMultiplier = 1;
guang2.collidesGround = true;
guang2.fragBullets = 5;
guang2.status = StatusEffects.shocked;
guang2.fragBullet = hur;
var guang1 = new JavaAdapter(BasicBulletType, {});
guang1.collidesTiles = false
guang1.collides = false;
guang1.collidesAir = false;
guang1.scaleVelocity = true;//开启指哪打哪
guang1.speed = 6;
guang1.lifetime = 40;
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

const lieguang = extend(PowerTurret, 'lieguang', {})//裂光
lieguang.health = 1800;
lieguang.inaccuracy = 0; //精准
lieguang.size = 3;
//lieguang.ammoPerShot=2;//每发消耗的资源
lieguang.targetAir = false; //空
lieguang.targetGround = true; //地
lieguang.coolantMultiplier = 0.7; //液体冷却倍率
//lieguang.itemCapacity = 50; //资源容量
lieguang.reloadTime = 200; //每秒发射数60:1;30:2
lieguang.range = 216;
lieguang.liquidCapacity = 10; //液体容量
lieguang.shootSound = Sounds.shootBig; //统一射击音效
//lieguang.consumes.power(3.2);
lieguang.shots = 1;
lieguang.shootCone = 2;
lieguang.shootType = guang1;
lieguang.spread = 4;
lieguang.recoilAmount = 1.5;
lieguang.restitution = 0.04;
lieguang.rotateSpeed = 80;
lieguang.shootSound = Sounds.lasershoot;
lieguang.powerUse = 50;
lieguang.hasPower = true;
lieguang.requirements = ItemStack.with(
    Items.lead, 560,
    Items.copper, 320,
    jin, 75,
    guijingti, 120,
    shimoxi, 140
);
lieguang.buildVisibility = BuildVisibility.shown;
lieguang.category = Category.turret;

exports.lieguang = lieguang;
//--------------------------------------------------------
const fragPlasticFrag0 = extend(BasicBulletType, {});
fragPlasticFrag0.damage = 10; //伤害
fragPlasticFrag0.speed = 2.5;
fragPlasticFrag0.width = 15;
fragPlasticFrag0.height = 20;
fragPlasticFrag0.shrinkY = 1;
fragPlasticFrag0.lifetime = 22;
fragPlasticFrag0.backColor = Pal.plastaniumBack;
fragPlasticFrag0.frontColor = Pal.plastaniumFront;
fragPlasticFrag0.despawnEffect = Fx.none;
fragPlasticFrag0.collidesGround = false
var Qzuanjing = new JavaAdapter(FlakBulletType, {});
Qzuanjing.damage = 30; //伤害
Qzuanjing.splashDamageRadius = 64; //分裂范围
Qzuanjing.splashDamage = 150; //分裂的伤害
Qzuanjing.width = 15; //宽
Qzuanjing.height = 20; //高
Qzuanjing.speed = 6;
Qzuanjing.lifetime = 60; //子弹最远距离
Qzuanjing.hitEffect = Fx.plasticExplosion;
Qzuanjing.backColor = F.c("FFFFAA"); //背景颜色
Qzuanjing.frontColor = F.c("00E3E3"); //前面颜色
Qzuanjing.reloadMultiplier = 1; //装弹速度
Qzuanjing.ammoMultiplier = 3; //装弹数量
Qzuanjing.knockback = 8; //击退; 
Qzuanjing.pierce = false; //穿透
Qzuanjing.fragBullets = 12; //分裂数量
Qzuanjing.fragBullet = fragPlasticFrag0;
var QsurgeAlloy = new JavaAdapter(FlakBulletType, {});
QsurgeAlloy.damage = 10; //伤害
QsurgeAlloy.splashDamageRadius = 48; //分裂范围
QsurgeAlloy.splashDamage = 90; //分裂的伤害
QsurgeAlloy.width = 11; //宽
QsurgeAlloy.height = 15; //高
QsurgeAlloy.speed = 6;
QsurgeAlloy.lifetime = 60; //子弹最远距离
QsurgeAlloy.hitEffect = Fx.plasticExplosion;
QsurgeAlloy.backColor = F.c("F9F900"); //背景颜
QsurgeAlloy.frontColor = F.c("F9F900"); //前面颜
QsurgeAlloy.reloadMultiplier = 2; //装弹速
QsurgeAlloy.ammoMultiplier = 4; //装弹数
QsurgeAlloy.lightning = 8; //闪电根数
QsurgeAlloy.lightningLength = 7; //闪电长度
QsurgeAlloy.lightningDamage = 10;//闪电伤害
var Qjin = new JavaAdapter(FlakBulletType, {});
Qjin.damage = 8; //伤害
Qjin.splashDamageRadius = 54; //分裂范围
Qjin.splashDamage = 75; //分裂的伤害
Qjin.width = 7; //宽
Qjin.height = 13; //高
Qjin.knockback = 3; //击退; 
Qjin.speed = 6;
Qjin.lifetime = 60; //子弹最远距离
Qjin.hitEffect = Fx.plasticExplosion;
Qjin.backColor = F.c("F9F900"); //背景颜色
Qjin.frontColor = F.c("F9F900"); //前面颜色
Qjin.reloadMultiplier = 5.3; //装弹速度
Qjin.ammoMultiplier = 2.5; //装弹数量
var Qthorium = new JavaAdapter(FlakBulletType, {});
Qthorium.damage = 15; //伤害
Qthorium.splashDamageRadius = 40; //分裂范围
Qthorium.splashDamage = 50; //分裂的伤害
Qthorium.width = 10; //宽
Qthorium.height = 15; //高
Qthorium.speed = 6;
Qthorium.lifetime = 60; //子弹最远距离
Qthorium.hitEffect = Fx.plasticExplosion;
Qthorium.backColor = F.c("DAB1D5"); //背景颜色
Qthorium.frontColor = F.c("6C3365"); //前面颜色
Qthorium.reloadMultiplier = 3; //装弹速度
Qthorium.ammoMultiplier = 2; //装弹数量
Qthorium.homingPower = 1;

var Qplastanium = new JavaAdapter(FlakBulletType, {});
const fragPlasticFrag1 = extend(BasicBulletType, {});
fragPlasticFrag1.damage = 10; //伤害
fragPlasticFrag1.speed = 2.5;
fragPlasticFrag1.width = 10;
fragPlasticFrag1.height = 12;
fragPlasticFrag1.shrinkY = 1;
fragPlasticFrag1.lifetime = 15;
fragPlasticFrag1.backColor = Pal.plastaniumBack;
fragPlasticFrag1.frontColor = Pal.plastaniumFront;
fragPlasticFrag1.despawnEffect = Fx.none;
fragPlasticFrag1.collidesGround = false
Qplastanium.damage = 6; //伤害
Qplastanium.splashDamageRadius = 40; //分裂范围
Qplastanium.splashDamage = 40; //分裂的伤害
Qplastanium.width = 5; //宽
Qplastanium.height = 10; //高
Qplastanium.speed = 6;
Qplastanium.lifetime = 60; //子弹最远距离         
Qplastanium.frontColor = F.c("00E3E3"); //前面颜色
Qplastanium.reloadMultiplier = 6; //装弹速度
Qplastanium.ammoMultiplier = 3; //装弹数量
Qplastanium.fragBullets = 10; //分裂数量
Qplastanium.fragBullet = fragPlasticFrag1;
//Qplastanium.fragBullet = Bullets.fragPlasticFrag; //分裂子弹

var Qbuding = new JavaAdapter(BasicBulletType, {});
Qbuding.damage = 8; //伤害
//Qbuding.splashDamageRadius= 40; //分裂范围
//Qbuding.splashDamage= 40; //分裂的伤害
Qbuding.width = 5; //宽
Qbuding.height = 10; //高
Qbuding.speed = 6;
Qbuding.lifetime = 60; //子弹最远距离         
//Qbuding.frontColor=F.c("00E3E3"); //前面颜色
Qbuding.reloadMultiplier = 2; //装弹速度
Qbuding.ammoMultiplier = 4; //装弹数量
Qbuding.homingPower = 1;
Qbuding.status = StatusEffects.freezing; //效果;冰冻
const ZhengFu = extend(ItemTurret, 's-zhengfu', {})//征服 对空
ZhengFu.ammoTypes.put(zuanjing, Qzuanjing);
ZhengFu.ammoTypes.put(buding, Qbuding);
ZhengFu.ammoTypes.put(jin, Qjin);
ZhengFu.ammoTypes.put(Items.thorium, Qthorium);
ZhengFu.ammoTypes.put(Items.plastanium, Qplastanium);
ZhengFu.ammoTypes.put(Items.surgeAlloy, QsurgeAlloy);
ZhengFu.health = 2100;
ZhengFu.inaccuracy = 8; //精准
ZhengFu.size = 3;
//ZhengFu.ammoPerShot=2;//每发消耗的资源
ZhengFu.targetAir = true; //空
ZhengFu.targetGround = false; //地
// ZhengFu.coolantMultiplier=0.8; //液体冷却倍率
ZhengFu.itemCapacity = 50; //资源容量
ZhengFu.reloadTime = 30; //每秒发射数60:1;30:2
ZhengFu.range = 360;
ZhengFu.liquidCapacity = 20; //液体容量
ZhengFu.shootSound = Sounds.shootBig; //统一射击音效
//ZhengFu.consumes.power(2.5);
ZhengFu.requirements = ItemStack.with(
    Items.lead, 1420,
    Items.copper, 1760,
    jin, 70,
    zijing1, 40,
    guijingti, 220
);
ZhengFu.buildVisibility = BuildVisibility.shown;
ZhengFu.category = Category.turret;
lib.addToResearch(ZhengFu, { parent: Blocks.ripple.name, });
exports.ZhengFu = ZhengFu;
//-----------------------------------------------------------------------------------------------------------
var Wzuanjing = new JavaAdapter(BasicBulletType, {});
const fragPlasticFrag2 = extend(BasicBulletType, {});
fragPlasticFrag2.damage = 10; //伤害
fragPlasticFrag2.speed = 2.5;
fragPlasticFrag2.width = 15;
fragPlasticFrag2.height = 20;
fragPlasticFrag2.shrinkY = 1;
fragPlasticFrag2.lifetime = 22;
fragPlasticFrag2.backColor = Pal.plastaniumBack;
fragPlasticFrag2.frontColor = Pal.plastaniumFront;
fragPlasticFrag2.despawnEffect = Fx.none;
fragPlasticFrag2.collidesTiles = true
fragPlasticFrag2.collides = true;
fragPlasticFrag2.collidesAir = false;
Wzuanjing.damage = 80; //伤害
Wzuanjing.splashDamageRadius = 64; //分裂范围
Wzuanjing.splashDamage = 180; //分裂的伤害
Wzuanjing.width = 15; //宽
Wzuanjing.height = 20; //高
Wzuanjing.speed = 2;
Wzuanjing.lifetime = 200; //子弹最远距离
Wzuanjing.hitEffect = Fx.plasticExplosion;
Wzuanjing.backColor = F.c("FFFFAA"); //背景颜色
Wzuanjing.frontColor = F.c("00E3E3"); //前面颜色
Wzuanjing.reloadMultiplier = 1.5; //装弹速度
//Wzuanjing.ammoMultiplier = 3; //装弹数量
Wzuanjing.collidesTiles = true
Wzuanjing.collides = true;
Wzuanjing.collidesAir = false;
Wzuanjing.scaleVelocity = true;//开启指哪打哪
Wzuanjing.knockback = 35; //击退; 
Wzuanjing.pierce = false; //穿透
Wzuanjing.fragBullets = 12; //分裂数量
Wzuanjing.fragBullet = fragPlasticFrag2;
var WsurgeAlloy = new JavaAdapter(BasicBulletType, {});
WsurgeAlloy.collidesTiles = true
WsurgeAlloy.collides = true;
WsurgeAlloy.collidesAir = false;
WsurgeAlloy.damage = 15; //伤害
WsurgeAlloy.splashDamageRadius = 48; //分裂范围
WsurgeAlloy.splashDamage = 50; //分裂的伤害
WsurgeAlloy.width = 11; //宽
WsurgeAlloy.height = 15; //高
WsurgeAlloy.speed = 6;
WsurgeAlloy.lifetime = 60; //子弹最远距离
WsurgeAlloy.hitEffect = Fx.plasticExplosion;
WsurgeAlloy.backColor = F.c("F9F900"); //背景颜
WsurgeAlloy.frontColor = F.c("F9F900"); //前面颜
WsurgeAlloy.reloadMultiplier = 2; //装弹速
WsurgeAlloy.ammoMultiplier = 4; //装弹数
WsurgeAlloy.lightning = 8; //闪电根数
WsurgeAlloy.lightningLength = 7; //闪电长度
WsurgeAlloy.lightningDamage = 10;//闪电伤害
var Wjin = new JavaAdapter(BasicBulletType, {});
Wjin.damage = 8; //伤害
Wjin.splashDamageRadius = 54; //分裂范围
Wjin.splashDamage = 50; //分裂的伤害
Wjin.width = 7; //宽
Wjin.collidesTiles = true
Wjin.collides = true;
Wjin.collidesAir = false;
Wjin.height = 13; //高
Wjin.knockback = 5; //击退; 
Wjin.speed = 6;
Wjin.lifetime = 60; //子弹最远距离
Wjin.hitEffect = Fx.plasticExplosion;
Wjin.backColor = F.c("F9F900"); //背景颜色
Wjin.frontColor = F.c("F9F900"); //前面颜色
Wjin.reloadMultiplier = 5.3; //装弹速度
Wjin.ammoMultiplier = 4; //装弹数量
var Wthorium = new JavaAdapter(BasicBulletType, {});
Wthorium.collidesTiles = true
Wthorium.collides = true;
Wthorium.collidesAir = false;
Wthorium.damage = 15; //伤害
Wthorium.splashDamageRadius = 40; //分裂范围
Wthorium.splashDamage = 40; //分裂的伤害
Wthorium.width = 10; //宽
Wthorium.height = 15; //高
Wthorium.speed = 6;
Wthorium.lifetime = 60; //子弹最远距离
Wthorium.hitEffect = Fx.plasticExplosion;
Wthorium.backColor = F.c("DAB1D5"); //背景颜色
Wthorium.frontColor = F.c("6C3365"); //前面颜色
Wthorium.reloadMultiplier = 3; //装弹速度
//Wthorium.ammoMultiplier = 2; //装弹数量
Wthorium.homingPower = 1;

const fragPlasticFrag3 = extend(BasicBulletType, {});
fragPlasticFrag3.damage = 10; //伤害
fragPlasticFrag3.speed = 2.5;
fragPlasticFrag3.width = 10;
fragPlasticFrag3.height = 12;
fragPlasticFrag3.shrinkY = 1;
fragPlasticFrag3.lifetime = 15;
fragPlasticFrag3.backColor = Pal.plastaniumBack;
fragPlasticFrag3.frontColor = Pal.plastaniumFront;
fragPlasticFrag3.despawnEffect = Fx.none;
fragPlasticFrag3.collidesTiles = true
fragPlasticFrag3.collides = true;
fragPlasticFrag3.collidesAir = false;
var Wplastanium = new JavaAdapter(BasicBulletType, {});
Wplastanium.collidesTiles = true
Wplastanium.collides = true;
Wplastanium.collidesAir = false;
Wplastanium.damage = 6; //伤害
Wplastanium.splashDamageRadius = 40; //分裂范围
Wplastanium.splashDamage = 40; //分裂的伤害
Wplastanium.width = 5; //宽
Wplastanium.height = 10; //高
Wplastanium.speed = 6;
Wplastanium.lifetime = 60; //子弹最远距离         
Wplastanium.frontColor = F.c("00E3E3"); //前面颜色
Wplastanium.reloadMultiplier = 6; //装弹速度
Wplastanium.ammoMultiplier = 3; //装弹数量
Wplastanium.fragBullets = 10; //分裂数量
Wplastanium.fragBullet = fragPlasticFrag3; //分裂子弹
//Wplastanium.fragBullet = Bullets.fragPlasticFrag; //分裂子弹
var Wbuding = new JavaAdapter(BasicBulletType, {});
Wbuding.collidesTiles = true
Wbuding.collides = true;
Wbuding.collidesAir = false;
Wbuding.damage = 8; //伤害
//Wbuding.splashDamageRadius= 40; //分裂范围
//Wbuding.splashDamage= 40; //分裂的伤害
Wbuding.width = 5; //宽
Wbuding.height = 10; //高
Wbuding.speed = 6;
Wbuding.lifetime = 60; //子弹最远距离         
//Wbuding.frontColor=F.c("00E3E3"); //前面颜色
Wbuding.reloadMultiplier = 2; //装弹速度
Wbuding.ammoMultiplier = 4; //装弹数量
Wbuding.homingPower = 1;
Wbuding.status = StatusEffects.freezing; //效果;冰冻
Wbuding.collidesGround = true;//地面碰撞

const ZhengYi = extend(ItemTurret, 's-zhengyi', {})
ZhengYi.ammoTypes.put(zuanjing, Wzuanjing);
ZhengYi.ammoTypes.put(buding, Wbuding);
ZhengYi.ammoTypes.put(jin, Wjin);
ZhengYi.ammoTypes.put(Items.thorium, Wthorium);
ZhengYi.ammoTypes.put(Items.surgeAlloy, WsurgeAlloy);
ZhengYi.ammoTypes.put(Items.plastanium, Wplastanium);
ZhengYi.health = 2100;
ZhengYi.inaccuracy = 8; //精准
ZhengYi.size = 3;
//ZhengYi.ammoPerShot=2;//每发消耗的资源
ZhengYi.targetAir = false; //空false
ZhengYi.targetGround = true; //地
// ZhengYi.coolantMultiplier=0.8; //液体冷却倍率
ZhengYi.itemCapacity = 50; //资源容量
ZhengYi.reloadTime = 30; //每秒发射数60:1;30:2
ZhengYi.range = 360;
ZhengYi.liquidCapacity = 20; //液体容量
ZhengYi.shootSound = Sounds.shootBig; //统一射击音效
//ZhengYi.consumes.power(3.2);
ZhengYi.requirements = ItemStack.with(
    Items.lead, 1420,
    Items.copper, 1760,
    jin, 150,
    weijing1, 75,
    guijingti, 220
);
ZhengYi.buildVisibility = BuildVisibility.shown;
ZhengYi.category = Category.turret;
lib.addToResearch(ZhengYi, { parent: Blocks.ripple.name, });
exports.ZhengYi = ZhengYi;


var Wweijing2 = new JavaAdapter(BasicBulletType, {});
Wweijing2.damage = 150; //伤害
Wweijing2.width = 25; //宽
Wweijing2.height = 30; //高
Wweijing2.speed = 6;
Wweijing2.lifetime = 80; //子弹最远距离
Wweijing2.splashDamageRadius = 16; //分裂范围
Wweijing2.splashDamage = 140; //分裂的伤害
Wweijing2.hitEffect = Fx.plasticExplosion;
Wweijing2.backColor = Color.valueOf("ffffff"); //背景颜色
Wweijing2.frontColor = Color.valueOf("bbffbb"); //前面颜色
Wweijing2.reloadMultiplier = 3.3; //装弹速度
Wweijing2.ammoMultiplier = 2; //装弹数量
Wweijing2.status = StatusEffects.slow

var Wweijing1 = new JavaAdapter(BasicBulletType, {});
Wweijing1.damage = 155; //伤害
Wweijing1.width = 20; //宽
Wweijing1.height = 30; //高
Wweijing1.homingPower = 3; //追踪; 
Wweijing1.lightning = 5;//闪电根数
Wweijing1.lightningLength = 12;//闪电长度
Wweijing1.lightningColor = Color.valueOf("ff6200");//闪电颜色
Wweijing1.lightningDamage = 20;//闪电伤害
Wweijing1.speed = 6;
Wweijing1.lifetime = 80; //子弹最远距离
Wweijing1.hitEffect = Fx.plasticExplosion;
Wweijing1.backColor = Color.valueOf("ffffff"); //背景颜色
Wweijing1.frontColor = Color.valueOf("f8ff85"); //前面颜色
Wweijing1.reloadMultiplier = 2; //装弹速度
Wweijing1.ammoMultiplier = 1; //装弹数量
Wweijing1.status = StatusEffects.sapped

var WmonengjingA = new JavaAdapter(MissileBulletType, {});
WmonengjingA.splashDamageRadius = 25;
WmonengjingA.splashDamage = 100;
WmonengjingA.width = 7;
WmonengjingA.damage = 19;
WmonengjingA.height = 13;
WmonengjingA.trailEffect = Fx.none;
WmonengjingA.homingRange = 40000;
WmonengjingA.homingPower = 2;
WmonengjingA.lifetime = 1000;
WmonengjingA.speed = 1.7;
WmonengjingA.hitEffect = Fx.flakExplosion
WmonengjingA.status = StatusEffects.freezing
//WmonengjingA.collidesTiles = false;
//WmonengjingA.collidesTeam = false;

var Wmonengjing = new JavaAdapter(MissileBulletType, {});
Wmonengjing.damage = 80; //伤害
Wmonengjing.width = 20; //宽
Wmonengjing.height = 34; //高
Wmonengjing.homingRange = 320;
Wmonengjing.homingPower = 3; //追踪; 
Wmonengjing.speed = 3;
Wmonengjing.lifetime = 100; //子弹最远距离
Wmonengjing.hitEffect = Fx.plasticExplosion;
Wmonengjing.backColor = Color.valueOf("ff6c6c"); //背景颜色
Wmonengjing.frontColor = Color.valueOf("ffffff"); //前面颜色
Wmonengjing.reloadMultiplier = 1.3; //装弹速度
Wmonengjing.ammoMultiplier = 2; //装弹数量
//Wmonengjing.trailColor= B7B7B7;
Wmonengjing.trailEffect = Fx.smoke;
Wmonengjing.shootEffect = Fx.shootSmall;
Wmonengjing.fragBullets = 25;
Wmonengjing.fragBullet = WmonengjingA;


var Wmonengjing2 = new JavaAdapter(MissileBulletType, {});
Wmonengjing2.damage = 500; //伤害
Wmonengjing2.width = 20; //宽
Wmonengjing2.height = 35; //高
Wmonengjing2.homingRange = 320;
Wmonengjing2.homingPower = 5; //追踪; 
Wmonengjing2.speed = 5;
Wmonengjing2.lifetime = 60; //子弹最远距离
Wmonengjing2.hitEffect = Fx.plasticExplosion;
Wmonengjing2.backColor = Color.valueOf("b56cff"); //背景颜色
Wmonengjing2.frontColor = Color.valueOf("ffffff"); //前面颜色
Wmonengjing2.reloadMultiplier = 0.15; //装弹速度
Wmonengjing2.ammoMultiplier = 3; //装弹数量
//Wmonengjing2.trailColor= B7B7B7;
Wmonengjing2.trailEffect = Fx.smoke;
Wmonengjing2.shootEffect = Fx.shootSmall;
Wmonengjing2.fragBullets = 3;
Wmonengjing2.fragBullet = dafengche;

//const shangdilizizidan = require('shangdilizizidan');
/* var FxL = new Effect(40, e => {
    Draw.color(Color.valueOf("a775f6"));
    Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fout() * 1.2);
    });
});
 */
var effectL = new StatusEffect("ZT3");
effectL.color = Color.valueOf("ffffff");
effectL.damage = 1.6666667
effectL.reloadMultiplier = 0;//射击速度
//effectL.effect = FxL;
effectL.effect = Fx.bubble;

var shangdilizi2 = new JavaAdapter(MissileBulletType, {});
//shangdilizi2.splashDamageRadius = 25;
//shangdilizi2.splashDamage = 15;
shangdilizi2.width = 12;
shangdilizi2.damage = 40;//15
shangdilizi2.height = 20;
shangdilizi2.trailEffect = Fx.none;
shangdilizi2.lifetime = 200;
shangdilizi2.speed = 6;
shangdilizi2.backColor = Color.valueOf("f6fe76"); //背景颜色
shangdilizi2.frontColor = Color.valueOf("7936f4"); //前面颜色
shangdilizi2.status = effectL; //效果
shangdilizi2.statusDuration = 480//效果时间8秒
shangdilizi2.hitEffect = Fx.flakExplosion
shangdilizi2.pierce = true;
shangdilizi2.pierceCap = 6;

var shangdilizi1 = new JavaAdapter(BasicBulletType, {});
shangdilizi1.damage = 900; //伤害300
shangdilizi1.width = 20; //宽
shangdilizi1.height = 30; //高
shangdilizi1.speed = 6;
shangdilizi1.homingRange = 2000;
shangdilizi1.homingPower = 5;
shangdilizi1.lifetime = 80; //子弹最远距离
shangdilizi1.hitEffect = Fx.plasticExplosion;
shangdilizi1.backColor = Color.valueOf("f6fe76"); //背景颜色
shangdilizi1.frontColor = Color.valueOf("7936f4"); //前面颜色
shangdilizi1.reloadMultiplier = 0.02; //装弹速度0.15
shangdilizi1.ammoMultiplier = 30; //装弹数量
shangdilizi1.status = effectL; //效果:定身
shangdilizi1.statusDuration = 30
shangdilizi1.fragBullets = 50;
shangdilizi1.fragBullet = shangdilizi2;

const PenHuo = require('turrets/PenHuo');//喷火器
//const PenHuo = guang2//喷火器

const bawang = extend(ItemTurret, 'bawang', {isHidden() { return !dsGlobal.H1(); },})//霸王
bawang.ammoTypes.put(weijing1, Wweijing1);
bawang.ammoTypes.put(weijing2, Wweijing2);
bawang.ammoTypes.put(monengjing1, Wmonengjing);
bawang.ammoTypes.put(monengjing2, Wmonengjing2);
bawang.ammoTypes.put(chuangshilizi, shangdilizi1);
//bawang.itemCapacity = 50;
bawang.health = 2100;
bawang.inaccuracy = 8; //精准
bawang.size = 4;
//bawang.ammoPerShot=2;//每发消耗的资源
bawang.targetAir = true; //空
bawang.targetGround = true; //地
bawang.coolantMultiplier = 0.3; //液体冷却倍率
bawang.itemCapacity = 50; //资源容量
bawang.reloadTime = 30; //每秒发射数60:1;30:2
bawang.range = 480;
bawang.liquidCapacity = 20; //液体容量
bawang.shootSound = Sounds.shootBig; //统一射击音效
//bawang.consumes.power(3.2);
bawang.requirements = ItemStack.with(
    Items.lead, 1120,
    Items.copper, 1260,
    jin, 330,
    weijing1, 130,
    weijing2, 60,
    guijingti, 450
);
bawang.buildVisibility = BuildVisibility.shown;
bawang.category = Category.turret;

exports.bawang = bawang;

//原版海啸
Blocks.tsunami.ammoTypes.put(suan, (() => {
    const v = new LiquidBulletType(suan);
    v.speed = 5;
    v.damage = 0.8;
    v.knockback = 1; //击退; 
    return v;
})());


Blocks.tsunami.ammoTypes.put(liziye, (() => {
    const v = newIonBoltBulletType(liziye);
    v.speed = 4;
    v.damage = 6.32;
    return v;
})());

Blocks.tsunami.ammoTypes.put(qiangxiaolengqueye, (() => {
    const v = new LiquidBulletType(qiangxiaolengqueye);
    v.speed = 6;
    v.damage = 0.2;
    v.lifetime = 30
    //v.status = StatusEffects.unmoving; //效果:定身
    //v.statusDuration = 30
    return v;
})());




exports.ronghui3 = (//审判
    (() => {
        const a = extend(LaserTurret, "ronghui3", {});
        a.canOverdrive = true;
        a.size = 4;
        a.health = 2600;
        a.buildCostMultiplier = 0.5;
        a.heatColor = F.c("71ffd5");
        a.loopSound = Sounds.beam;
        a.shootSound = Sounds.laserbig;
        a.range = 320;
        a.firingMoveFract = 0.5;
        a.inaccuracy = 0;
        a.recoilAmount = 7;
        a.rotateSpeed = 4;
        a.shootShake = 1;
        a.shootCone = 5;
        a.coolEffect = Fx.steam;
        a.cooldown = 1;
        a.powerUse = 75;
        a.reloadTime = 30;
        a.shootDuration = 300; //炮口停留时间
        a.consumes.liquid(zhiwujinghuaye, 15 / 60,).update = true;
        a.requirements = ItemStack.with(
            Items.lead, 3000,
            Items.copper, 2400,
            Items.surgeAlloy, 1200,
            guijingti, 1200,
            weijing1, 15,
            jin, 320,
            shimoxi, 100,
            jingliantai, 800,
        );
        a.shootType = (
            (() => {
                const b = new JavaAdapter(ContinuousLaserBulletType, {});
                b.hitEffect = Fx.hitMeltdown
                b.length = 320;
                b.damage = 80;
                b.incendChance = 0.8;
                b.incendSpread = 5;
                b.incendAmount = 1;
                b.colors = [F.c("bff28d"), F.c("bff28d"), F.c("FFFF37"), Color.white]
                return b;
            })()
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
);
var aassaas = (() => {
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
    bt.sprite = "duo";
    bt.reloadMultiplier = 1
    bt.ammoMultiplier = 1;
    bt.damage = 1400;
    bt.width = 6;
    bt.height = 6;
    bt.shrinkY = 0;
    bt.shrinkX = 0;
    bt.spin = 0;
    bt.lifetime = 500;
    bt.backColor = F.c("ffffff00");
    bt.frontColor = Pal.meltdownHit;
    bt.despawnEffect = Fx.none;
    bt.speed = 2;
    bt.collides = false;
    bt.reflectable = false;
    bt.absorbable = true;
    return bt;
})()
var ffffffaa = new JavaAdapter(LaserBulletType, {}, 70);
ffffffaa.hitEffect = Fx.hitLancer;
ffffffaa.despawnEffect = Fx.none;
ffffffaa.hitSize = 4;
ffffffaa.lifetime = 16;
ffffffaa.drawSize = 400;
ffffffaa.collidesAir = false;
ffffffaa.length = 173;
ffffffaa.fragBullet = aassaas;
ffffffaa.length = 1;
ffffffaa.width = 1;

exports.ronghui2 = (//天煞
    (() => {
        const a = extend(PowerTurret, "ronghui2", {isHidden() { return !dsGlobal.H1(); },});
        a.canOverdrive = true;
        a.size = 4;
        a.health = 2600;
        a.buildCostMultiplier = 0.4;
        a.shootSound = lib.loadSound("tiansha");
        a.range = 480;
        a.rotateSpeed = 1; //旋转速度
        a.chargeTime = 250;
        a.reloadTime = 1300;
        a.chargeMaxDelay = 300;
        a.coolantMultiplier = 120; //液体增强射速倍率
        a.recoilAmount = 2; //反冲数量
        a.cooldown = 0.03;
        a.powerUse = 390;
        a.shootShake = 2;
        a.consumes.liquid(Liquids.cryofluid, 12 / 60).update = false;
        a.requirements = ItemStack.with(
            shimoxi, 400,
            Items.copper, 3200,
            Items.lead, 4500,
            guijingti, 2500,
            zuanjing, 1800,
            weijing1, 450,
            weijing2, 40,
            molishi, 750,
            jin, 1760,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        a.shootType = aassaas
        return a;
    })()
)

exports.youling2 = (//冥王
    (() => {
        const a = extend(PowerTurret, "youling2", {
            isHidden() { return !dsGlobal.H1(); },
            load() {
                this.super$load();
                for (var i = 0; i < 9; i++) {
                    rainbowRegions[i] = Core.atlas.find("creators-youling22-" + (i + 1));
                }
            },
        });
        a.size = 5;
        a.shootSound = lib.loadSound("youling22");
        a.powerUse = 220;
        a.reloadTime = 150;//130
        a.canOverdrive = true;
        a.liquidCapacity = 10;
        a.health = 4200;
        a.buildCostMultiplier = 0.5;
        a.heatColor = F.c("d98686");
        a.shootEffect = Fx.shootBig;
        a.coolantMultiplier = 77; //液体增强射速倍率
        a.range = 320;
        a.inaccuracy = 0;
        a.rotateSpeed = 6; //旋转速度
        a.chargeTime = 30;
        a.chargeMaxDelay = 300;
        a.recoilAmount = 7;
        a.shootShake = 1;
        a.shootCone = 5;
        a.coolEffect = Fx.steam;
        a.cooldown = 1;
        a.consumes.liquid(zhiwujinghuaye, 6/60).update = false;
        a.requirements = ItemStack.with(
            Items.lead, 4500,
            Items.copper, 3200,
            zuanjing, 1800,
            guijingti, 2500,
            shimoxi, 180,
            weijing2, 15,
            molishi, 400,
            jin, 1300,
            weijing1, 150
        );
        a.shootType = (
            (() => {
                const b = new JavaAdapter(BasicBulletType, {});
                b.recoil = 0; //反冲
                b.width = 22;
                b.height = 30;
                b.speed = 4;
                b.damage = 1300;
                b.ammoMultiplier = 3;
                b.hitSize = 8;
                b.lifetime = 80;
                b.pierce = false;
                b.lightning = 50;//根数
                b.lightningLength = 16; //闪电长度
                b.lightningDamage = 20; //闪电伤害
                b.status = StatusEffects.electrified;
                b.keepVelocity = false;
                b.backColor = F.c("cbb0ff"); //背景颜色
                b.frontColor = F.c("cbb0ff"); //前面颜色
                b.hittable = false
                return b;
            })()
        );
        var rainbowRegions = [];
        a.buildType = prov(() => {
            const tif = 9;//贴图间的延迟变色速度，越大越不同
            const tid = 4;//贴图变色速度，越大越快
            const tr2 = new Vec2();
            return new JavaAdapter(PowerTurret.PowerTurretBuild, {
                draw() {
                    this.super$draw();
                    // tr2.trns(this.rotation, -this.recoil);
                    Draw.blend(Blending.additive);
                    for (var h = 0; h < tif; h++) {
                        Draw.color(F.c("ff0000").shiftHue((Time.time * tid) + (h * (360 / tif))));
                        Draw.rect(rainbowRegions[h], 
                            this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0),this.rotation - 90);
                    }
                    Draw.blend();
                    Draw.color();
                },
            }, a);
        });
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)


exports.ronghui4 = (//天谴
    (() => {
        const a = extend(LaserTurret, "ronghui4", {});
        a.canOverdrive = true;
        a.size = 6;
        a.health = 2600;
        a.buildCostMultiplier = 1.5;
        a.heatColor = F.c("6F00D2")
        a.shootEffect = Fx.shootBig
        a.shootSound = lib.loadSound("ronghui4");
        a.range = 600;
        a.firingMoveFract = 0.5;
        a.inaccuracy = 0;
        a.rotateSpeed = 2.5; //旋转速度
        a.chargeTime = 60;
        a.chargeMaxDelay = 300;
        a.recoilAmount = 7;
        a.shootShake = 1;
        a.shootCone = 5;
        a.coolEffect = Fx.steam;
        a.cooldown = 1;
        a.powerUse = 80000 / 60; //583.33333=3.5K
        a.reloadTime = 7;
        a.shootDuration = 20; //炮口停留时间
        a.consumes.liquid(qiangxiaolengqueye, 9 / 60,).update = false;
        a.requirements = ItemStack.with(
            Items.lead, 3000,
            Items.copper, 2400,
            guijingti, 4300,
            weijing5, 60,
            monengjing3, 20,
            jin, 1320,
            weijing4, 300,
        );
        a.shootType = (
            (() => {
                const b = new JavaAdapter(ContinuousLaserBulletType, {});
                b.hitEffect = Fx.hitMeltdown
                b.espawnEffect = Fx.hitMeltdown
                b.length = 600;
                b.damage = 120000/12;
                b.status = status.effectX;
                b.incendChance = 0.4;
                b.incendSpread = 5;
                b.incendAmount = 1;
                b.hittable = false;//被激光点防击中
                b.colors = [F.c("B15BFF"), F.c("6F00D2"), F.c("F0FFFF"), Color.white]
                return b;
            })()
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)



// const FangKong2 = new JavaAdapter(PowerTurret, {}, 'fangkong2');//防空
// FangKong2.size = 16;
// FangKong2.health = 400;
// FangKong2.buildCostMultiplier = 1;
// FangKong2.heatColor = F.c("6ef6ff");
// FangKong2.shootEffect = Fx.none;
// FangKong2.smokeEffect = Fx.none;
// FangKong2.ammoUseEffect = Fx.none;
// FangKong2.ammoPerShot = 1;
// FangKong2.range = 200;
// FangKong2.reload = 4;
// FangKong2.inaccuracy = 1;
// FangKong2.shots = 1;
// FangKong2.spread = 6;
// FangKong2.recoil = 0.1;
// FangKong2.restitution = 0.02;
// FangKong2.cooldown = 0.02;
// FangKong2.rotatespeed = 8;
// FangKong2.shootShake = 0.2;
// FangKong2.collidesGround = false
// FangKong2.targetAir = true;
// FangKong2.targetGround = false;
// FangKong2.coolantMultiplier = 2;
// FangKong2.coolEffect = Fx.steam;
// FangKong2.powerUse = 0.5;
// FangKong2.shootType = (() => {
//     const a = new JavaAdapter(BasicBulletType, {});
//     a.bulletWidth = 50;
//     a.bulletHeight = 50;
//     a.bulletShrink = 0.5;
//     a.lifetime = 130;
//     a.speed = 8;
//     a.damage = Infinity;
//     a.collidesGround = false//子弹碰撞地面
//     a.hitSize = 8;
//     a.drawSize = 40;
//     a.backColor= F.c("cff0f1"); //背景颜色
//     a.frontColor= F.c("49d5f9"); //前面颜色
//     a.drag = 0;
//     a.pierce = true;
//     a.hitEffect = Fx.melting;
//     a.despawnEffect = Fx.despawn;
//     a.hitSound = Sounds.none;
//     a.status = StatusEffects.melting;
//     a.statusDuration = 300
//     return a;
// })()
// FangKong2.requirements = ItemStack.with();
// FangKong2.shootSound = fangkongSound
// FangKong2.buildVisibility = BuildVisibility.sandboxOnly;
// FangKong2.category = Category.turret;

const z = require('turrets/zongjipao');
exports.zongjipao = z.xipao1;
const x = require('turrets/zongjipao2');
exports.zongjipao2 = x.xipao2;
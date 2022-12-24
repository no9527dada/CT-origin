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
//          "sprite="mod名-贴图"//子弹贴图，放在子弹类里
//          "hitTiles=true,//是否打方块(子弹)
// 			"collidesTiles=true,//是否碰撞方块(不论敌友)
// 			"collidesGround=true,
// 			"collidesTeam=false,//是否与同队单位碰撞
// 			"collidesAir=true,//是否空中碰撞
// 			"collides=true,//是否开启碰撞箱
//          极限值常用最大值：2147483647


//---------------------部分代码 @滞人 编写
const DrawS = require('BlocksLibes/DrawS');
const status = require("Status");
const dsGlobal = require('BlocksLibes/qianzhi');
const lib = require('lib');
const Bullet_s = require('turrets/Bullets');
const kuosanBullet = require('turrets/kuosanBullet');
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, jinhuiboli,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
      molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = CTItem
const fangkongSound = CreatorsSound.loadSound("fangkong");
const zhiliaoSound = CreatorsSound.loadSound("zhiliao");
const { newIonBoltBulletType } = require('turrets/index');//离子液
const F = require("all/kuangjiAI");


//--------------------------------------------------------------------------//
const yunyu = extend(ContinuousLiquidTurret, 'yunyu', {
    //微晶核心限制
    canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
    },
    drawPlace(x, y, rotation, valid) {
        let tile = Vars.world.tile(x, y);
        if (tile == null) return;
        if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
            let missingMsg = dsGlobal.duoQianZhi.getMissing()
                .toString(", ", block => block.localizedName + block.emoji());
            this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
        }
    },
})//
yunyu.health = 3250;
yunyu.ammo(
    Liquids.slag, Bullet_s.yunyukuangzha,
    Liquids.cryofluid, Bullet_s.yunyuleng,
    yuanwan0, Bullet_s.yunyuyan,
    liziye, Bullet_s.yunyulizi,
    qiangxiaolengqueye, Bullet_s.yunyuyedan,
);
yunyu.buildCostMultiplier = 5;//建造时间倍
yunyu.cooldownTime = 240;//炮口过热消退时间 
yunyu.heatColor = Color.valueOf("f9db82");
yunyu.drawer = ((() => {
    const b = new DrawTurret("") //炮塔底座    
    b.parts.addAll(
        (() => {
            const c = new RegionPart("-1");
            c.progress = DrawPart.PartProgress.warmup;
            c.mirror = true;
            c.moveRot = -40;
            c.moveY = 6 / 4;
            c.under = true;
            c.heatColor = Color.valueOf("f1f982");
            return c;
        })()
    )
    return b;
})());
yunyu.canOverdrive = false;//不可超速 禁止超速
yunyu.liquidCapacity = 300; //液体容量
yunyu.liquidConsumed = 60 / 60
yunyu.rotateSpeed = 0.9;
yunyu.size = 4;
yunyu.range = 50 * 8;
yunyu.consumePower(28000 / 60);
yunyu.requirements = ItemStack.with(
    Items.lead, 900,
    Items.copper, 1200,
    shimoxi, 70,
    weijing1, 200,
    jinhuiboli, 35,
    zuanjing, 1200,
    monengjing2, 45,
);
yunyu.buildVisibility = BuildVisibility.shown;
yunyu.category = Category.turret
exports.yunyu = yunyu;

//-------------------------------------------------------------------------------------------    

exports.qishe2 = (
    (() => {
        const a = extend(ItemTurret, "qishe2", {});//齐射2
        a.health = 2400;
        a.velocityRnd = 0.3;
        a.ammo(
            zuanshikuang, Bullet_s.qishe_yuanzuan,
            zuanjing, Bullet_s.qishe_zuanjing,
            taihejin, Bullet_s.qishe_taihejin,
            molishi, Bullet_s.qishe_molishi,
            hejinboli, Bullet_s.qishe_hejin,
            jin, Bullet_s.qishe_jin,
            jingliantai, Bullet_s.qishe_jingliantai,
            gutaiwanqin, Bullet_s.qishe_gutaiwanqin,
        );
        a.size = 4;
        a.range = 48 * 8;
        a.reload = 60;
        a.ammoEjectBack = 3;
        a.recoil = 3;
        a.shake = 1;
        a.shoot = (() => {
            const c = new ShootAlternate()
            c.spread = 4.7;
            c.shots = 6;
            c.barrels = 4
            c.shotDelay = 3;
            return c;
        })()
        a.cooldownTime = 120;//炮口过热消退时间 
        var CD2 = Color.valueOf("007bff");
        a.heatColor = CD2
        a.drawer = ((() => {
            const b = new DrawTurret("") //炮塔底座    
            b.parts.addAll(
                (() => {
                    const c = new RegionPart("-1");
                    c.progress = DrawPart.PartProgress.warmup;
                    //c.mirror = true;
                    //c.moveRot = -40;
                    c.moveY = -2;
                    c.under = false;
                    c.heatColor = CD2
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-2");
                    c.progress = DrawPart.PartProgress.warmup;
                    //
                    c.mirror = true;
                    c.moveRot = 15;
                    c.moveY = 6.5;//上下
                    c.moveX = -1.5//左右
                    c.under = false;
                    c.heatColor = CD2
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-3");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.mirror = true;
                    //c.moveRot = 10;
                    c.moveY = 3;//上下
                    c.moveX = 1//左右
                    c.under = false;
                    c.heatColor = CD2
                    return c;
                })(),

                (() => {
                    const c = new RegionPart("-spine");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.outline = false;
                    c.heatProgress = DrawPart.PartProgress.warmup.add(p => (Mathf.absin(3, 0.2) - 0.2) * p.warmup);
                    c.mirror = true;
                    c.moveRot = -50;
                    c.moveY = 9;//上下
                    c.moveX = 3//左右
                    c.under = true;
                    c.heatColor = CD2
                    c.color = Color.valueOf("8f665b");
                    // c.moves.add(new PartMove(DrawPart.PartProgress.recoil.delay(3, 1, 0, 3)));
                    return c;
                })(),
                //parts.add(new RegionPart("-spine")
            )
            return b;
        })());
        a.ammoUseEffect = Fx.casing2;
        a.scaledHealth = 240;
        a.shootSound = Sounds.shootBig;
        a.buildCostMultiplier = 3.5;//建造时间倍
        //a.limitRange();
        a.requirements = ItemStack.with(
            Items.lead, 180,
            Items.copper, 300,
            Items.plastanium, 80,
            monengjing1, 50,
            weijing1, 35,
            zuanjing, 75,
            guijingti, 150,
        );
        a.consume(new ConsumeCoolant(0.2));
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)


exports.kuoshan = (
    (() => {
        const a = extend(ItemTurret, "kuoshan", {
                //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                }
            },
        });//扩散
        a.health = 2200;
        a.ammo(
            weijing1, kuosanBullet.Wweijing1,
            weijing2, kuosanBullet.Wweijing2,
            weijing3, kuosanBullet.Wweijing3,
            weijing4, kuosanBullet.Wweijing4,
        );
        a.shootY = 15;
        a.size = 5;
        a.range = 52 * 8;
        a.reload = 120;
        a.shootCone = 30;
        a.rotateSpeed = 1.5;
        a.recoil = 1;
        a.ejectEffect = Fx.casing1;
        a.shoot = new ShootSpread(15, 10);
        a.ammoUseEffect = Fx.casing2;
        a.ammoPerShot = 3;//每发子弹数量
        a.shootSound = Sounds.shootBig;
        a.buildCostMultiplier = 3.5;//建造时间倍
        //a.limitRange();
        a.requirements = ItemStack.with(
            Items.lead, 4180,
            Items.copper, 3300,
            taihejin, 180,
            monengjing1, 340,
            weijing1, 230,
            weijing2, 60,
            zuanjing, 175,
            guijingti, 220,
        );
        a.consume(new ConsumeCoolant(0));
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        var haloY = -15,circleY=18,circleStroke = 1.6,circleRad = 11,
            haloRotSpeed = 1,circleRotSpeed = 3.5,
            circleProgress = DrawPart.PartProgress.warmup.delay(0.9),
            haloProgress = DrawPart.PartProgress.warmup.delay(0.5),
            LColor = Color.valueOf("4ec7f8");
        a.drawer = ((() => {
            const b = new DrawTurret("") //炮塔底座    
            b.parts.addAll(
                (() => {
                    const c = new RegionPart("");
        
                    return c;
                })(),

                (() => {
                    const c = new ShapePart();
                   c.progress = circleProgress;
                   c.color = LColor;
                   c.circle = true;
                   c.hollow = true;
                   c.stroke = 0;
                   c.strokeTo = circleStroke;
                   c.radius = circleRad;
                   c.layer = Layer.effect;
                   c.y = circleY;
                    return c;
                })(),
            
                (() => {
                    const c = new ShapePart();
                   c.progress = circleProgress;
                   c.rotateSpeed = -circleRotSpeed;
                   c.color = LColor;
                   c.sides = 4;
                   c.hollow = true;
                   c.stroke = 0;
                   c.strokeTo = circleStroke;
                   c.radius = circleRad - 1;
                   c.layer = Layer.effect;
                   c.y = circleY;
                    return c;
                })(),
            
                (() => {
                    const c = new ShapePart();
                   c.progress = circleProgress;
                   c.rotateSpeed = -circleRotSpeed;
                   c.color = LColor;
                   c.sides = 4;
                   c.hollow = true;
                   c.stroke = 0;
                   c.strokeTo = circleStroke;
                   c.radius = circleRad - 1;
                   c.layer = Layer.effect;
                   c.y = circleY;
                    return c;
                })(),
            
                (() => {
                    const c = new ShapePart();
                   c.progress = circleProgress;
                   c.rotateSpeed = -circleRotSpeed/2;
                   c.color = LColor;
                   c.sides = 4;
                   c.hollow = true;
                   c.stroke = 0;
                   c.strokeTo = 2;
                   c.radius = 3;
                   c.layer = Layer.effect;
                   c.y = circleY;
                    return c;
                })(),
            

                //-----------------------
                /* 
                (() => {
                    const c = new ShapePart()
                    c.progress = DrawPart.PartProgress.warmup.delay(0.2);
                    c.color = LColor;
                    c.circle = true;
                    c.hollow = true;
                    c.stroke = 0;
                    c.strokeTo = 2;
                    c.radius = 10;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.rotateSpeed = haloRotSpeed;
                    return c;
                })(),

                (() => {
                    const c = new ShapePart()
                    c.progress = DrawPart.PartProgress.warmup.delay(0.2);
                    c.color = LColor;
                    c.circle = true;
                    c.hollow = true;
                    c.stroke = 0;
                    c.strokeTo = 1.6;
                    c.radius = 4;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.rotateSpeed = haloRotSpeed;
                    return c;
                })(),

                (() => {
                    const c = new HaloPart()
                    c.progress = haloProgress;
                    c.color = LColor;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.haloRotation = 90;
                    c.shapes = 2;
                    c.triLength = 0;
                    c.triLengthTo = 20;
                    c.haloRadius = 16;
                    c.tri = true;
                    c.radius = 4;
                    return c;
                })(),

                (() => {
                    const c = new HaloPart()
                    c.progress = haloProgress;
                    c.color = LColor;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.haloRotation = 90;
                    c.shapes = 2;
                    c.triLength = 0;
                    c.triLengthTo = 5;
                    c.haloRadius = 16;
                    c.tri = true;
                    c.radius = 4;
                    c.shapeRotation = 180;
                    return c;
                })(),

                (() => {
                    const c = new HaloPart()
                    c.progress = haloProgress;
                    c.color = LColor;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.haloRotateSpeed = -haloRotSpeed;
                    c.shapes = 4;
                    c.triLength = 0;
                    c.triLengthTo = 5;
                    c.haloRotation = 45;
                    c.haloRadius = 16;
                    c.tri = true;
                    c.radius = 8;
                    return c;
                })(),

                (() => {
                    const c = new HaloPart()
                    c.progress = haloProgress;
                    c.color = LColor;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.haloRotateSpeed = -haloRotSpeed;
                    c.shapes = 4;
                    c.shapeRotation = 180;
                    c.triLength = 0;
                    c.triLengthTo = 2;
                    c.haloRotation = 45;
                    c.haloRadius = 16;
                    c.tri = true;
                    c.radius = 8;
                    return c;
                })(),

                (() => {
                    const c = new HaloPart()
                    c.progress = haloProgress;
                    c.color = LColor;
                    c.layer = Layer.effect;
                    c.y = haloY;
                    c.haloRotateSpeed = haloRotSpeed;
                    c.shapes = 4;
                    c.triLength = 0;
                    c.triLengthTo = 3;
                    c.haloRotation = 45;
                    c.haloRadius = 10;
                    c.tri = true;
                    c.radius = 6;
                    return c;
                })(), */
            )
            return b;
        })());

        //a.cooldownTime = 120;//炮口过热消退时间 
        /* var CD2 = Color.valueOf("007bff");
        a.heatColor = CD2
        a.drawer = ((() => {
            const b = new DrawTurret("") //炮塔底座    
            b.parts.addAll(
                (() => {
                    const c = new RegionPart("-1");
                    c.progress = DrawPart.PartProgress.warmup;
                    //c.mirror = true;
                    //c.moveRot = -40;
                    c.moveY = -2;
                    c.under = false;
                    c.heatColor = CD2
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-2");
                    c.progress = DrawPart.PartProgress.warmup;
                    //
                    c.mirror = true;
                    c.moveRot = 15;
                    c.moveY = 6.5;//上下
                    c.moveX = -1.5//左右
                    c.under = false;
                    c.heatColor = CD2
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-3");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.mirror = true;
                    //c.moveRot = 10;
                    c.moveY = 3;//上下
                    c.moveX = 1//左右
                    c.under = false;
                    c.heatColor = CD2
                    return c;
                })(),

                (() => {
                    const c = new RegionPart("-spine");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.outline = false;
                    c.heatProgress = DrawPart.PartProgress.warmup.add(p => (Mathf.absin(3, 0.2) - 0.2) * p.warmup);
                    c.mirror = true;
                    c.moveRot = -50;
                    c.moveY = 9;//上下
                    c.moveX = 3//左右
                    c.under = true;
                    c.heatColor = CD2
                    c.color = Color.valueOf("8f665b");
                    // c.moves.add(new PartMove(DrawPart.PartProgress.recoil.delay(3, 1, 0, 3)));
                    return c;
                })(),
                //parts.add(new RegionPart("-spine")
            )
            return b;
        })()); */
        return a;
    })()
)

exports.kuoshan2 = (
    (() => {
        const a = extend(ItemTurret, "kuoshan2", {});//扩散2
        a.health = 2200;
        a.shootY = 0;
        a.ammo(
            weijing1, kuosanBullet.Wweijing1,
            weijing2, kuosanBullet.Wweijing2,
            weijing3, kuosanBullet.Wweijing3,
            weijing4, kuosanBullet.Wweijing4,
        );
        a.size = 5;
        a.range = 52 * 8;
        a.reload = 90;
        a.shootCone = 30;
        a.rotateSpeed = 1.5;
        a.recoil = 1;
        a.ejectEffect = Fx.casing1;
        a.shoot = new ShootSpread(36, 10);
        a.ammoUseEffect = Fx.casing2;
        a.ammoPerShot = 2;
        a.shootSound = Sounds.shootBig;
        a.buildCostMultiplier = 3.5;//建造时间倍
        //a.limitRange();
        a.requirements = ItemStack.with(
            Items.lead, 4180,
            Items.copper, 3300,
            taihejin, 180,
            monengjing2, 80,
            weijing1, 230,
            weijing2, 460,
            zuanjing, 175,
            guijingti, 220,
        );
        a.consume(new ConsumeCoolant(0.2));
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)







//-------------------------------------------------------------------------------------------    




const DianHu = extend(PowerTurret, 'dianhu', {})//"霹雳闪"
DianHu.shootType = (() => {
    const a = new JavaAdapter(FlakBulletType, {});
    a.lifetime = 40;
    a.absorbable = false;
    a.speed = 10;
    a.width = 100
    a.collidesGround = false
    a.translation = -50
    a.damage = 15;
    a.hitEffect = Fx.none;
    a.despawnEffect = Fx.none;
    a.shootEffect = Fx.none;
    a.smokeEffect = Fx.none;
    return a;
})()
DianHu.canOverdrive = false;
DianHu.reload = 35;
DianHu.shootY = 0;
DianHu.recoil = 0;
DianHu.rotateSpeed = 0;
DianHu.shootCone = 720;//射击瞄准角度
DianHu.inaccuracy = 360;//精准，精度
DianHu.consumePower(20);
DianHu.shootLength = 0;
DianHu.targetAir = true; //空
DianHu.targetGround = false; //地
DianHu.range = 320;
DianHu.shootEffect = Fx.none;
//DianHu.recoilAmount = 0;//炮塔后座  暂时没效果
DianHu.size = 3;
DianHu.health = 260;
DianHu.shootSound = Sounds.spark;
DianHu.hasLiquids = false;
DianHu.liquidCapacity = 0;
DianHu.shoot.shots = 100;
DianHu.xRand = 5;
DianHu.inaccuracy = 360;
DianHu.coolantUsage = 0;//液体消耗量
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

    const a = new JavaAdapter(FlakBulletType, {});
    a.lifetime = 20;
    a.absorbable = false;
    a.speed = 10;
    a.collidesGround = false
    a.translation = -50
    a.damage = 13;
    a.status = status.pilishan;
    a.statusDuration = 60;
    //a.hitEffect = Fx.none;
    a.despawnEffect = Fx.none;
    a.shootEffect = Fx.none;
    a.smokeEffect = Fx.none;
    return a;
})()
DianHu2.shootY = 0;
DianHu2.recoil = 0;
DianHu2.rotateSpeed = 0;
DianHu2.shootLength = 0;
DianHu2.canOverdrive = false;
DianHu2.reload = 70;
DianHu2.consumePower(8);
DianHu2.targetAir = true; //空
DianHu2.targetGround = false; //地
DianHu2.shootCone = 720;//射击瞄准角度
DianHu2.range = 160;
DianHu2.shootEffect = Fx.none;
DianHu2.recoilAmount = 0;
DianHu2.size = 2;
DianHu2.health = 210;
DianHu2.shootSound = Sounds.spark;
DianHu2.hasLiquids = false;
DianHu2.liquidCapacity = 0;
DianHu2.shoot.shots = 50;
DianHu2.xRand = 5;
DianHu2.inaccuracy = 360;
DianHu2.coolantUsage = 0;//液体消耗量
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
FangKong.range = 144 + 9 * 8;
FangKong.reload = 10;
FangKong.inaccuracy = 1;
FangKong.shoot.shots = 1;
FangKong.spread = 6;
FangKong.recoil = 0.1;
FangKong.restitution = 0.02;
FangKong.cooldowntime = 25;
FangKong.rotatespeed = 8;
FangKong.shootShake = 0.2;
FangKong.collidesGround = false
FangKong.targetAir = true;
FangKong.targetGround = false;
FangKong.coolantMultiplier = 2;
FangKong.coolEffect = Fx.steam;
FangKong.consumePower(0.5);
FangKong.consume(new ConsumeCoolant(0.2));
FangKong.shootType = (() => {
    const a = new JavaAdapter(BasicBulletType, {});
    a.bulletWidth = 5;
    a.bulletHeight = 50;
    a.bulletShrink = 0.5;
    a.lifetime = 38;
    a.speed = 8;
    a.damage = 15;
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
    a.status = StatusEffects.burning;
    a.statusDuration = 180
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
healere.targetGround = false;
healere.rotateSpeed = 5;//转速
healere.reload = 10;//装填时间
healere.coolantMultiplier = 0; //液体冷却倍率
healere.range = 200;
healere.shootSound = zhiliaoSound;
healere.knockback = 3;//击退
healere.inaccuracy = 3;//精准
healere.consumePower(1.5);
healere.consume(new ConsumeCoolant(0));
healere.shootType = (() => {
    const a = new JavaAdapter(LaserBoltBulletType, {});
    a.speed = 6;//子弹速度
    a.ammoMultiplier = 1; //装弹数量
 
    a.lifetime = 40;
    a.healPercent = 2;
    a.damage = 0;//子弹伤
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
        const a = extend(LiquidTurret, "huasha", {});//花洒
        a.health = 500;
        a.size = 1;
        a.reload = 5;
        a.shoot.shots = 13;
        a.velocityRnd = 0.1;
        a.inaccuracy = 360;
        a.recoil = 0;
        a.shootCone = 720;
        a.shootEffect = Fx.none;
        a.range = 110;
        a.scaledHealth = 250;
        a.buildCostMultiplier = 0.5;
        a.shootY = 0;
        a.rotateSpeed = 0;
        a.targetAir = false;
        a.targetGround = false;
        a.liquidCapacity = 3000;
        a.targetFlags = [BlockFlag.extinguisher]
        a.consumePower(3);
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
                b.lifetime = 30
                b.liquid = Liquids.water;
                b.speed = 4;
                b.knockback = 0;
                b.puddleSize = 8;
                b.orbSize = 4;
                b.drag = 0.001;
                b.ammoMultiplier = 0.4;
                b.statusDuration = 240;
                b.damage = 0
                b.status = StatusEffects.wet;
                b.statusDuration = 60
                return b;
            })()
        );
        a.ammoTypes.put(
            Liquids.cryofluid,
            (() => {
                const b = new LiquidBulletType();
                b.lifetime = 30
                b.liquid = Liquids.cryofluid;
                b.speed = 4;
                b.knockback = 0;
                b.puddleSize = 8;
                b.orbSize = 4;
                b.drag = 0.001;
                b.ammoMultiplier = 0.4;
                b.statusDuration = 240;
                b.damage = 0
                b.status = StatusEffects.freezing;
                b.statusDuration = 90
                return b;
            })()
        );
        a.ammoTypes.put(
            qiangxiaolengqueye,
            (() => {
                const b = new LiquidBulletType();
                b.lifetime = 30
                b.liquid = qiangxiaolengqueye;
                b.speed = 4;
                b.knockback = 0;
                b.puddleSize = 8;
                b.orbSize = 4;
                b.drag = 0.001;
                b.ammoMultiplier = 0.4;
                b.statusDuration = 240;
                b.damage = 0
                b.status = StatusEffects.unmoving;
                b.statusDuration = 120
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
ml.length = 25 * 8;
ml.reloadMultiplier = 0.8;
ml.fromColor = F.c("DCDCDC");
ml.ammoMultiplier = 1;
var ti = new JavaAdapter(ShrapnelBulletType, {});
ti.damage = 80;
ti.length = 25 * 8;
ti.reloadMultiplier = 1.2;
ti.fromColor = F.c("87CEFA");
ti.ammoMultiplier = 1;
ti.duration = 1;
var pi = new JavaAdapter(ShrapnelBulletType, {});
pi.damage = 100;
pi.length = 25 * 8;
pi.fromColor = F.c("9ACD32");
pi.reloadMultiplier = 1.2; //装弹速度
pi.ammoMultiplier = 2;
var tim = new JavaAdapter(ShrapnelBulletType, {});
tim.damage = 120;
tim.length = 25 * 8;
tim.fromColor = F.c("B766AD");
tim.ammoMultiplier = 3;
tim.incendChance = 0.5;
tim.incendAmount = 3;
var sa = new JavaAdapter(ShrapnelBulletType, {});
sa.damage = 140;
sa.length = 25 * 8;
sa.fromColor = F.c("EEC900");
sa.ammoMultiplier = 1;
sa.lightning = 2;
sa.reloadMultiplier = 0.7; //装弹速度
sa.lightningDamage = 5;
sa.lightningLength = 22;
sa.lightningCone = 20;
sa.lightningLengthRand = 13

const JueWang = extend(ItemTurret, 'q-juewang', {})//绝望
JueWang.ammoTypes.put(Items.metaglass, ml);
JueWang.ammoTypes.put(Items.titanium, ti);
JueWang.ammoTypes.put(Items.plastanium, pi);
JueWang.ammoTypes.put(Items.thorium, tim);
JueWang.ammoTypes.put(Items.surgeAlloy, sa);
JueWang.requirements = ItemStack.with(
    Items.plastanium, 300,
    Items.titanium, 150,
    Items.thorium, 120,
    Items.surgeAlloy, 200,
    guijingti, 100,
    jin, 270
);
JueWang.consume(new ConsumeCoolant(0.2));
JueWang.shootSound = Sounds.shotgun;
JueWang.health = 2700;
JueWang.reload = 55;
JueWang.size = 4;
JueWang.spread = 20;
JueWang.shootCone = 30;
JueWang.recoilAmount = 4;
JueWang.rotatespeed = 5;
JueWang.ammoPerShot = 2;
JueWang.heatColor = Pal.turretHeat;
JueWang.shoot = new ShootSpread(7, 7);
JueWang.range = 28 * 8;
JueWang.buildVisibility = BuildVisibility.shown;
JueWang.category = Category.turret;

exports.JueWang = JueWang;
//-------------------------------------------------------------
const BuHuo = extend(TractorBeamTurret, 'r-buhuo', {})//捕获
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
BuHuo.size = 3;
BuHuo.rotateSpeed = 20;//旋转速度
BuHuo.range = 280;
BuHuo.scaledForce = 20;//按比例缩小的力
BuHuo.force = 20;//拉力
BuHuo.hasPower = true
BuHuo.damage = 0.7;//伤害比例 1=60伤害
BuHuo.consumePower(4.8);
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
LanJie.reload = 5;
LanJie.shootLength = 10;
//LanJie.inaccuracy = 5;//精度？
LanJie.bulletDamage = 35;//子弹的抵挡伤害
LanJie.consumePower(13);
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

const lieguang = extend(PowerTurret, 'lieguang', {})//裂光/
lieguang.health = 1800;
lieguang.inaccuracy = 0; //精准
lieguang.size = 3;
lieguang.targetAir = false; //空
lieguang.targetGround = true; //地
lieguang.coolantMultiplier = 0.7; //液体冷却倍率
lieguang.reload = 2.8 * 60;
lieguang.range = 216;
lieguang.liquidCapacity = 10; //液体容量
lieguang.shootSound = Sounds.shootBig; //统一射击音效
lieguang.shoot.shots = 1;
lieguang.shootCone = 2;
lieguang.spread = 4;
lieguang.recoilAmount = 1.5;
lieguang.restitution = 0.04;
lieguang.rotateSpeed = 80;
lieguang.shootSound = Sounds.lasershoot;
lieguang.consumePower(2200 / 60);
lieguang.hasPower = true;
lieguang.shootType = Bullet_s.guang1;
lieguang.requirements = ItemStack.with(
    Items.lead, 560,
    Items.copper, 320,
    jin, 75,
    guijingti, 120,
    shimoxi, 140
);
lieguang.buildVisibility = BuildVisibility.shown;
lieguang.category = Category.turret;
lieguang.consume(new ConsumeCoolant(0.2));
exports.lieguang = lieguang;

exports.lanse2 = (//飞逝
    (() => {
        const v = extend(PowerTurret, 'lanse2', {})
        v.range = 40 * 8;
        v.shoot.firstShotDelay = 50;
        v.recoil = 2;
        v.reload = 5 * 60;
        v.shake = 2;
        v.shootEffect = Fx.lancerLaserShoot;
        v.smokeEffect = Fx.none;
        v.size = 4;
        v.coolantMultiplier = 1.8; //液体冷却倍率
        v.liquidCapacity = 90; //液体容量
        v.scaledHealth = 280;
        v.targetAir = true;
        v.moveWhileCharging = false;
        v.accurateDelay = false;
        v.shootSound = Sounds.laser;
        v.consume(new ConsumeCoolant(0.5));
        v.consumePower(12000 / 60);
        v.requirements = ItemStack.with(
            Items.lead, 560,
            Items.copper, 320,
            weijing1, 700,
            taihejin, 220,
            monengjing1, 150,
            guijingti, 400,
            shimoxi, 1350
        );
        //var CD3 = Color.valueOf("ffa96f");
        var CD3 = Color.red;
        v.heatColor = CD3//颜色
        v.cooldownTime = 120;//炮口过热消退时间 
        v.drawer = ((() => {
            const b = new DrawTurret("") //炮塔底座    
            b.parts.addAll(
                (() => {
                    const c = new RegionPart("-1");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.mirror = true;//镜像
                    c.moveRot = 0;//角度  正为顺时针，负为逆时针
                    c.moveY = 3;//上下 负为下  
                    c.moveX = -1.5//左右 负为合  正为分
                    c.under = false;//关闭再上面，开启再下面
                    c.heatColor = CD3//颜色
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-2");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.mirror = true;//镜像
                    c.moveRot = 10;//角度
                    c.moveY = 3;//上下
                    c.moveX = -1//左右
                    c.under = false;//关闭再上面，开启再下面
                    c.heatColor = CD3//颜色
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-3");
                    c.progress = DrawPart.PartProgress.warmup;
                    c.mirror = true;//镜像
                    c.moveRot = -10;//角度
                    c.moveY = -1;//上下
                    c.moveX = -3.5//左右
                    c.under = true;//关闭再上面，开启再下面
                    //c.heatColor = CD3//颜色
                    return c;
                })(),
                (() => {
                    const c = new RegionPart("-4");
                    c.progress = DrawPart.PartProgress.charge;
                    c.mirror = true;//镜像
                    c.moveRot = -15;//角度
                    c.moveY = 9;//上下
                    c.moveX = -4//左右
                    c.under = true;//关闭再上面，开启再下面
                    // c.heatColor = CD3//颜色
                    return c;
                })(),
            )
            return b;
        })());
        v.shootType = Bullet_s.lanseBU
        v.buildVisibility = BuildVisibility.shown;
        v.category = Category.turret;
        return v;
    })());
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
Qzuanjing.sprite = "creators-shoot";
Qzuanjing.damage = 30; //伤害
Qzuanjing.splashDamageRadius = 64; //分裂范围
Qzuanjing.splashDamage = 150; //分裂的伤害
Qzuanjing.width = 15; //宽
Qzuanjing.height = 15; //高
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
Qzuanjing.frontColor = F.c("96fbe1");
Qzuanjing.backColor = F.c("96fbe1");
Qzuanjing.trailColor = F.c("00E3E3ff");;
Qzuanjing.trailParam = 4;
Qzuanjing.trailLength = 8;
Qzuanjing.trailWidth = 2;
Qzuanjing.trailInterval = 5;
Qzuanjing.trailRotation = true;
Qzuanjing.trailEffect = Fx.none;
Qzuanjing.shrinkY = 0;
Qzuanjing.shrinkX = 0;
Qzuanjing.spin = 18;


var QsurgeAlloy = new JavaAdapter(FlakBulletType, {});
QsurgeAlloy.damage = 10; //伤害
QsurgeAlloy.splashDamageRadius = 48; //分裂范围
QsurgeAlloy.splashDamage = 90; //分裂的伤害
QsurgeAlloy.width = 15; //宽
QsurgeAlloy.height = 15; //高
QsurgeAlloy.speed = 6;
QsurgeAlloy.lifetime = 60; //子弹最远距离
QsurgeAlloy.hitEffect = Fx.plasticExplosion;
QsurgeAlloy.backColor = F.c("ffffffff"); //背景颜
QsurgeAlloy.frontColor = F.c("feff98"); //前面颜
QsurgeAlloy.reloadMultiplier = 2; //装弹速
QsurgeAlloy.ammoMultiplier = 4; //装弹数
QsurgeAlloy.lightning = 8; //闪电根数
QsurgeAlloy.lightningLength = 7; //闪电长度
QsurgeAlloy.lightningDamage = 10;//闪电伤害
QsurgeAlloy.trailParam = 4;
QsurgeAlloy.trailLength = 8;
QsurgeAlloy.trailWidth = 2;
QsurgeAlloy.trailInterval = 5;
QsurgeAlloy.trailRotation = true;
QsurgeAlloy.trailEffect = Fx.none;
QsurgeAlloy.shrinkY = 0;
QsurgeAlloy.shrinkX = 0;
QsurgeAlloy.spin = 18;
QsurgeAlloy.sprite = "creators-shoot3";



var Qjin = new JavaAdapter(FlakBulletType, {});
Qjin.damage = 8; //伤害
Qjin.splashDamageRadius = 54; //分裂范围
Qjin.splashDamage = 75; //分裂的伤害
Qjin.width = 13; //宽
Qjin.height = 13; //高
Qjin.knockback = 3; //击退; 
Qjin.speed = 6;
Qjin.lifetime = 60; //子弹最远距离
Qjin.hitEffect = Fx.plasticExplosion;
Qjin.backColor = F.c("F9F900"); //背景颜色
Qjin.frontColor = F.c("feff78"); //前面颜色
Qjin.reloadMultiplier = 5.3; //装弹速度
Qjin.ammoMultiplier = 2.5; //装弹数量
Qjin.sprite = "creators-shoot2";
Qjin.trailColor = F.c("feff98ff");;
Qjin.trailParam = 4;
Qjin.trailLength = 8;
Qjin.trailWidth = 2;
Qjin.trailInterval = 5;
Qjin.trailRotation = true;
Qjin.trailEffect = Fx.none;
Qjin.shrinkY = 0;
Qjin.shrinkX = 0;
Qjin.spin = 18;


var Qthorium = new JavaAdapter(FlakBulletType, {});
Qthorium.damage = 15; //伤害
Qthorium.splashDamageRadius = 40; //分裂范围
Qthorium.splashDamage = 50; //分裂的伤害
Qthorium.width = 15; //宽
Qthorium.height = 15; //高
Qthorium.speed = 6;
Qthorium.lifetime = 60; //子弹最远距离
Qthorium.hitEffect = Fx.plasticExplosion;
Qthorium.backColor = F.c("ffffffff"); //背景颜色
Qthorium.frontColor = F.c("cba1ff"); //前面颜色
Qthorium.reloadMultiplier = 3; //装弹速度
Qthorium.ammoMultiplier = 2; //装弹数量
Qthorium.homingPower = 1;
Qthorium.sprite = "creators-shoot1";
Qthorium.trailChance = 1;
Qthorium.trailColor = F.c("cba1ffff");;
Qthorium.trailParam = 4;
Qthorium.trailLength = 8;
Qthorium.trailWidth = 2;
Qthorium.trailInterval = 5;
Qthorium.trailRotation = true;
Qthorium.trailEffect = Fx.none;





var Qplastanium = new JavaAdapter(FlakBulletType, {});
const fragPlasticFrag1 = extend(BasicBulletType, {});
fragPlasticFrag1.damage = 10; //伤害
fragPlasticFrag1.speed = 2.5;
fragPlasticFrag1.width = 13;
fragPlasticFrag1.height = 13;
fragPlasticFrag1.shrinkY = 1;
fragPlasticFrag1.lifetime = 15;
fragPlasticFrag1.backColor = Pal.plastaniumBack;
fragPlasticFrag1.frontColor = Pal.plastaniumFront;
fragPlasticFrag1.despawnEffect = Fx.none;
fragPlasticFrag1.collidesGround = false
Qplastanium.damage = 6; //伤害
Qplastanium.splashDamageRadius = 40; //分裂范围
Qplastanium.splashDamage = 40; //分裂的伤害
Qplastanium.width = 18; //宽
Qplastanium.height = 18; //高
Qplastanium.speed = 6;
Qplastanium.lifetime = 60; //子弹最远距离     
Qplastanium.backColor = F.c("ffffffFF"); //背景颜色    
Qplastanium.frontColor = F.c("8dfed4"); //前面颜色
Qplastanium.reloadMultiplier = 6; //装弹速度
Qplastanium.ammoMultiplier = 3; //装弹数量
Qplastanium.fragBullets = 10; //分裂数量
Qplastanium.fragBullet = fragPlasticFrag1;
Qplastanium.sprite = "creators-shoot5";
Qplastanium.trailChance = 1;
Qplastanium.trailColor = F.c("8dfed4ff");;
Qplastanium.trailParam = 4;
Qplastanium.trailLength = 8;
Qplastanium.trailWidth = 2;
Qplastanium.trailInterval = 5;
Qplastanium.trailRotation = true;
Qplastanium.trailEffect = Fx.none;


var Qbuding = new JavaAdapter(BasicBulletType, {});
Qbuding.damage = 8; //伤害
Qbuding.width = 20; //宽
Qbuding.height = 20; //高
Qbuding.speed = 6;
Qbuding.lifetime = 60; //子弹最远距离         
Qbuding.frontColor = F.c("d5fab7"); //前面颜色
Qbuding.reloadMultiplier = 2; //装弹速度
Qbuding.ammoMultiplier = 4; //装弹数量
Qbuding.homingPower = 1;
Qbuding.status = StatusEffects.freezing; //效果;冰冻
Qbuding.sprite = "creators-shoot6";
Qbuding.trailChance = 1;
Qbuding.trailColor = F.c("d5fab7ff");;
Qbuding.trailParam = 4;
Qbuding.trailLength = 8;
Qbuding.trailWidth = 2;
Qbuding.trailInterval = 5;
Qbuding.trailRotation = true;
Qbuding.trailEffect = Fx.none;

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
ZhengFu.reload = 30; //每秒发射数60:1;30:2
ZhengFu.range = 360;
ZhengFu.liquidCapacity = 20; //液体容量
ZhengFu.shootSound = Sounds.shootBig; //统一射击音效
ZhengFu.consumePower(2);
ZhengFu.outputsPower = true;
ZhengFu.requirements = ItemStack.with(
    Items.lead, 1420,
    Items.copper, 1760,
    jin, 70,
    zijing1, 40,
    guijingti, 220
);
ZhengFu.consume(new ConsumeCoolant(0.2));
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
Wzuanjing.width = 20; //宽
Wzuanjing.height = 20; //高
Wzuanjing.speed = 2;
Wzuanjing.lifetime = 200; //子弹最远距离
Wzuanjing.hitEffect = Fx.plasticExplosion;
Wzuanjing.backColor = F.c("FFFFAA"); //背景颜色
Wzuanjing.frontColor = F.c("aaf3ff"); //前面颜色
Wzuanjing.reloadMultiplier = 1.5; //装弹速度
//Wzuanjing.ammoMultiplier = 3; //装弹数量
Wzuanjing.collidesTiles = true
Wzuanjing.collides = true;
Wzuanjing.collidesAir = false;
Wzuanjing.scaleLife = true;//开启指哪打哪
Wzuanjing.knockback = 12; //击退; 
Wzuanjing.pierce = false; //穿透
Wzuanjing.fragBullets = 12; //分裂数量
Wzuanjing.fragBullet = fragPlasticFrag2;
Wzuanjing.sprite = "creators-shoot";
Wzuanjing.trailChance = 1;
Wzuanjing.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-shoot";
        b.colorFrom = F.c("FFFFAAFF");
        b.colorTo = F.c("FFFFAAFF");
        return b;
    })()
);
Wzuanjing.shrinkY = 0;
Wzuanjing.shrinkX = 0;
Wzuanjing.spin = 20;

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
WsurgeAlloy.shrinkY = 0;
WsurgeAlloy.shrinkX = 0;
WsurgeAlloy.spin = 20;
WsurgeAlloy.sprite = "creators-shoot3";
WsurgeAlloy.trailChance = 1;
WsurgeAlloy.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-shoot3";
        b.colorFrom = F.c("feff98ff");
        b.colorTo = F.c("feff98ff");
        b.lifetime = 20;
        return b;
    })()
);


var Wjin = new JavaAdapter(BasicBulletType, {});
Wjin.damage = 8; //伤害
Wjin.splashDamageRadius = 54; //分裂范围
Wjin.splashDamage = 50; //分裂的伤害
Wjin.width = 13; //宽
Wjin.height = 13; //高
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
Wjin.sprite = "creators-shoot2";
Wjin.trailChance = 1;
Wjin.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-shoot2";
        b.colorFrom = F.c("feff78ff");
        b.colorTo = F.c("feff78ff");
        b.lifetime = 20;
        return b;
    })()
);
Wjin.shrinkY = 0;
Wjin.shrinkX = 0;
Wjin.spin = 20;


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
Wthorium.backColor = F.c("ffffffFF"); //背景颜色
Wthorium.frontColor = F.c("cba1ff"); //前面颜色
Wthorium.reloadMultiplier = 3; //装弹速度
//Wthorium.ammoMultiplier = 2; //装弹数量
Wthorium.homingPower = 1;
Wthorium.sprite = "creators-shoot1";
Wthorium.trailChance = 1;
Wthorium.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-shoot4";
        b.colorFrom = F.c("cba1ffff");
        b.colorTo = F.c("cba1ffff");
        return b;
    })()
);




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
Wplastanium.width = 18; //宽
Wplastanium.height = 18; //高
Wplastanium.speed = 6;
Wplastanium.lifetime = 60; //子弹最远距离         
Wplastanium.frontColor = F.c("8dfed4"); //前面颜色
Wplastanium.reloadMultiplier = 6; //装弹速度
Wplastanium.ammoMultiplier = 3; //装弹数量
Wplastanium.fragBullets = 10; //分裂数量
Wplastanium.fragBullet = fragPlasticFrag3; //分裂子弹
Wplastanium.homingPower = 1;
Wplastanium.sprite = "creators-shoot5";
Wplastanium.shrinkY = 0;
Wplastanium.shrinkX = 0;
Wplastanium.spin = 22;
Wplastanium.trailChance = 1;
Wplastanium.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-shoot6";
        b.colorFrom = F.c("8dfed4ff");
        b.colorTo = F.c("8dfed4ff");
        return b;
    })()
);
var Wbuding = new JavaAdapter(BasicBulletType, {});
Wbuding.collidesTiles = true
Wbuding.collides = true;
Wbuding.collidesAir = false;
Wbuding.damage = 8; //伤害
Wbuding.width = 20; //宽
Wbuding.height = 20; //高
Wbuding.speed = 6;
Wbuding.lifetime = 60; //子弹最远距离         
Wbuding.frontColor = F.c("d5fab7"); //前面颜色
Wbuding.reloadMultiplier = 2; //装弹速度
Wbuding.ammoMultiplier = 4; //装弹数量
Wbuding.homingPower = 1;
Wbuding.status = StatusEffects.freezing; //效果;冰冻
Wbuding.collidesGround = true;//地面碰撞
Wbuding.homingPower = 1;
Wbuding.sprite = "creators-shoot6";
Wbuding.trailChance = 1;
Wbuding.trailEffect = (
    (() => {
        const b = new ParticleEffect();
        b.region = "creators-shoot6";
        b.colorFrom = F.c("d5fab7ff");
        b.colorTo = F.c("d5fab7ff");
        return b;
    })()
);


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
ZhengYi.reload = 30; //每秒发射数60:1;30:2
ZhengYi.range = 360;
ZhengYi.liquidCapacity = 20; //液体容量
ZhengYi.shootSound = Sounds.shootBig; //统一射击音效
ZhengYi.consumePower(2);
ZhengYi.outputsPower = true;
ZhengYi.requirements = ItemStack.with(
    Items.lead, 1420,
    Items.copper, 1760,
    jin, 150,
    weijing1, 75,
    guijingti, 220
);
ZhengYi.consume(new ConsumeCoolant(0.2));
ZhengYi.buildVisibility = BuildVisibility.shown;
ZhengYi.category = Category.turret;
lib.addToResearch(ZhengYi, { parent: Blocks.ripple.name, });
exports.ZhengYi = ZhengYi;



const PenHuo = require('turrets/PenHuo');//喷火器
//const PenHuo = guang2//喷火器

const bawang = extend(ItemTurret, 'bawang', {
    //微晶核心限制
    canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
    },
    drawPlace(x, y, rotation, valid) {
        let tile = Vars.world.tile(x, y);
        if (tile == null) return;
        if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
            let missingMsg = dsGlobal.duoQianZhi.getMissing()
                .toString(", ", block => block.localizedName + block.emoji());
            this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
        }
    },
})//霸王
bawang.ammoTypes.put(weijing1, Bullet_s.Wweijing1);
bawang.ammoTypes.put(weijing2, Bullet_s.Wweijing2);
bawang.ammoTypes.put(monengjing1, Bullet_s.Wmonengjing);
bawang.ammoTypes.put(monengjing2, Bullet_s.Wmonengjing2);
bawang.ammoTypes.put(chuangshilizi, Bullet_s.shangdilizi1);
//bawang.itemCapacity = 50;
bawang.health = 2100;
bawang.inaccuracy = 8; //精准
bawang.size = 4;
bawang.ammoPerShot=3;//每发消耗的资源
bawang.targetAir = true; //空
bawang.targetGround = true; //地
bawang.coolantMultiplier = 0.3; //液体冷却倍率
bawang.itemCapacity = 50; //资源容量
bawang.reload = 30; //每秒发射数60:1;30:2
bawang.range = 480;
bawang.liquidCapacity = 20; //液体容量
bawang.shootSound = Sounds.shootBig; //统一射击音效
bawang.requirements = ItemStack.with(
    Items.lead, 1120,
    Items.copper, 1260,
    jin, 330,
    weijing1, 130,
    weijing2, 60,
    guijingti, 450
);
bawang.consume(new ConsumeCoolant(0.2));
bawang.buildVisibility = BuildVisibility.shown;
bawang.category = Category.turret;

exports.bawang = bawang;
//原版幽灵
CTBlocks.spectre.ammoTypes.put(Items.surgeAlloy, (() => {
    const v = new BasicBulletType(9, 105, "bullet");
    v.frontColor = Color.valueOf("F3E979");
    v.backColor = Color.valueOf("FFFFFF");
    v.lifetime = 30;
    v.hitSize = 5;
    v.width = 16;
    v.height = 23;
    v.ammoMultiplier = 1;
    v.shootEffect = Fx.shootBig;
    v.pierceCap = 2;
    v.pierceBuilding = true;
    v.reloadMultiplier = 0.8; //装弹速度
    v.lightning = 2; //闪电根数
    v.lightningLength = 6; //闪电长度
    v.lightningDamage = 10;//闪电伤害
    v.lightningColor = Color.valueOf("ffffff");//闪电颜色
    v.knockback = 0.6;
    return v;
})());


CTBlocks.spectre.ammoTypes.put(jingliantai, (() => {
    const v = new BasicBulletType(7, 70, "bullet");
    v.frontColor = Color.valueOf("B79EEE");
    v.backColor = Color.valueOf("FFF3FF");
    // v.speed = 5;
    // v.damage = 120;
    v.hitSize = 5;
    v.width = 16;
    v.height = 23;
    v.shootEffect = Fx.shootBig;
    v.pierceCap = 4;
    v.pierceBuilding = true;
    v.knockback = 1.2;
    return v;
})());

CTBlocks.spectre.ammoTypes.put(jin, (() => {
    const v = new BasicBulletType(9, 35, "bullet");
    v.frontColor = Color.valueOf("DB9F00");
    v.backColor = Color.valueOf("FFD900");
    v.lifetime = 30;
    v.hitSize = 5;
    v.width = 16;
    v.height = 23;
    v.shootEffect = Fx.shootBig;
    v.pierceCap = 2;
    v.pierceBuilding = true;
    v.reloadMultiplier = 2; //装弹速度
    v.knockback = 1.5;
    return v;
})());

CTBlocks.spectre.ammoTypes.put(zuanshikuang, (() => {
    const v = new BasicBulletType(9, 130, "bullet");
    v.frontColor = Color.valueOf("#2CCDB1");
    v.backColor = Color.valueOf("#FFFFFF");
    v.splashDamageRadius = 4.3 * 8; //分裂范围
    v.splashDamage = 50; //分裂的伤害
    v.lifetime = 30;
    v.hitSize = 5;
    v.width = 16;
    v.height = 23;
    v.shootEffect = Fx.shootBig;
    v.pierceCap = 1;
    v.pierceBuilding = true;
    v.knockback = 0.5;
    return v;
})());









//原版海啸
CTBlocks.tsunami.ammoTypes.put(suan, (() => {
    const v = new LiquidBulletType(suan);
    v.speed = 5;
    v.damage = 0.8;
    v.knockback = 1; //击退; 
    return v;
})());


CTBlocks.tsunami.ammoTypes.put(liziye, (() => {
    const v = newIonBoltBulletType(liziye);
    v.speed = 4;
    v.damage = 6.32;
    return v;
})());

CTBlocks.tsunami.ammoTypes.put(qiangxiaolengqueye, (() => {
    const v = new LiquidBulletType(qiangxiaolengqueye);
    v.speed = 6;
    v.damage = 0.2;
    v.lifetime = 30
    //v.status = StatusEffects.unmoving; //效果:定身
    //v.statusDuration = 30
    return v;
})());

//1111111111111111111111

exports.langyong2 = (//浪涌2
    (() => {
        const a = extend(ItemTurret, "langyong2", {});
        a.canOverdrive = true;
        //  a.alternate = true;
        a.size = 4;
        a.health = 2200;
        a.consume(new ConsumeCoolant(0.2));

        a.shootSound = Sounds.artillery;
        a.range = 60 * 8;
        a.targetAir = true;
        a.shoot.shots = 4;
        a.inaccuracy = 12;
        a.reload = 60;
        a.ammoEjectBack = 5;
        a.ammoUseEffect = Fx.casing3Double;
        a.ammoPerShot = 2;
        a.cooldowntime = 25;
        a.velocityInaccuracy = 0.2;
        a.restitution = 0.02;
        a.recoil = 6;
        a.shootShake = 2;
        a.minRange = 50;
        a.velocityRnd = 0.3;//子弹的随机力度
        a.shake = 2;





        a.ammo(
            Items.graphite, Bullet_s.artilleryDense,
            Items.silicon, Bullet_s.artilleryHoming,
            Items.pyratite, Bullet_s.artilleryIncendiary,
            Items.blastCompound, Bullet_s.artilleryExplosive,
            Items.plastanium, Bullet_s.artilleryPlastic,
            //-------------------
            taihejin, Bullet_s.langyong2Bullet_taihejin,
            zuanjing, Bullet_s.langyong2Bullet_zuanjing,
            zhayao, Bullet_s.langyong2Bullet_zhayao,
            juhebaozhawu, Bullet_s.langyong2Bullet_juhebaozhawu,
            JHhejin, Bullet_s.langyong2Bullet_JHhejin,
            jinhuiboli, Bullet_s.langyong2Bullet_jinhuiboli,
            monengjing1, Bullet_s.langyong2Bullet_monengjing1,
            monengjing2, Bullet_s.langyong2Bullet_monengjing2,
            dabaoshui, Bullet_s.langyong2Bullet_dabaoshui,
            dabaoyedan, Bullet_s.langyong2Bullet_dabaoyedan ,


        );
        a.requirements = ItemStack.with(
            Items.lead, 750,
            Items.copper, 1200,
            jingliantai, 240,
            Items.phaseFabric, 150,
            weijing2, 35,
            monengjing1, 170,
            guijingti, 360
        );

        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
);

exports.youling3 = (//幽灵3
    (() => {
        const a = extend(ItemTurret, "youling3", {});
        a.canOverdrive = true;
        a.size = 5;
        a.health = 4300;
        a.reload = 30;
        a.coolantMultiplier = 0.5;
        a.consume(new ConsumeCoolant(1.2));
        a.restitution = 0.1;
        a.ammoUseEffect = Fx.casing3Double;
        a.range = 42 * 8;
        a.inaccuracy = 5;
        a.recoilAmount = 3;
        a.spread = 5;
        a.shoot.shots = 3;
        //a.ammoPerShot = 3;
        a.shootShake = 4;
        a.alternate = true;
        a.shootCone = 24;
        a.shootSound = Sounds.shootBig;
        a.coolantUsage = 1.2;
        a.ammoPerShot=3;//每发消耗的资源
        a.limitRange();
        a.ammo(
            Items.surgeAlloy, Bullet_s.Bullet_surgeAlloy,
            monengjing, Bullet_s.Bullet_monengjing,
            hejinboli, Bullet_s.Bullet_hejinboli,
            taihejin, Bullet_s.Bullet_taihejin,
            weijing3, Bullet_s.Bullet_weijing3,
            weijing4, Bullet_s.Bullet_weijing4,
            JHhejin, Bullet_s.Bullet_JHhejin ,
        );
        a.requirements = ItemStack.with(
            Items.lead, 3200,
            Items.copper, 4500,
            Items.thorium, 900,
            Items.plastanium, 1200,
            guijingti, 800,
            weijing2, 120,
            weijing3, 12,
            zuanjing, 750,
            taihejin, 120,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
);
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
        a.liquidCapacity = 50;
        a.range = 320;
        a.firingMoveFract = 0.5;
        a.inaccuracy = 0;
        a.recoilAmount = 7;
        a.rotateSpeed = 4;
        a.shootShake = 1;
        a.shootCone = 40;
        a.coolEffect = Fx.steam;
        a.cooldowntime = 60;//炮口过热消退时间
        a.consumePower(4500 / 60);
        a.reload = 30;
        a.shootDuration = 300; //炮口停留时间
        a.consumeLiquid(moliye, 15 / 60,)
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
                b.damage = 1200 / 12;
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

exports.ronghui2 = (//天煞
    (() => {
        const a = extend(PowerTurret, "ronghui2", {
            //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                }
            },
        });

        /*         a.chargeBeginEffect = (//向外
                    (() => {
                        const b = new MultiEffect();
                        b.lifetime = 120;
                        b.effects = [
                            (() => {
                                const b = new ParticleEffect();
                                b.particles = 1;
                                b.sizeFrom = 0;
                                b.sizeTo = 20;
                                b.length = 0;
                                b.lifetime = 130;
                                b.colorFrom = F.c("ffd37fff");;
                                b.colorTo = F.c("ffd37fff");;
                                b.cone = 360
                                return b;
                            })(),
                        ]
                        return b;
                    })()
                ); */
        a.canOverdrive = true;
        a.consumePower(7000 / 60);
        a.size = 4;
        a.health = 2600;
        a.buildCostMultiplier = 0.4;
        a.shootSound = CreatorsSound.loadSound("tiansha");
        a.range = 480;
        a.rotateSpeed = 1; //旋转速度
        a.coolantMultiplier = 4; //液体冷却倍率
        a.reload = 400;
        a.chargeMaxDelay = 300;
        a.recoilAmount = 2; //反冲数量
        a.cooldowntime = 35;
        a.shootShake = 2;
        a.despawnEffect = DrawS.destruction
        a.shoot.firstShotDelay = 90
        a.consumeLiquid(Liquids.cryofluid, 12 / 60)
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
        a.shootType = Bullet_s.tiansha
        return a;
    })()
)

exports.youling2 = (//冥王
    (() => {
        const a = extend(PowerTurret, "youling2", {
            //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                }
            },
        });
        a.buildType = prov(() => {
            const tif = 9;//贴图间的延迟变色速度，越大越不同
            const tid = 4;//贴图变色速度，越大越快
            const tr2 = new Vec2();
            return new JavaAdapter(PowerTurret.PowerTurretBuild, {
                draw() {
                    this.super$draw();
                    // tr2.trns(this.rotation, -this.recoil);
                    Draw.blend(Blending.additive);
                    for (var h = 0; h < ti; h++) {
                        Draw.color(F.c("ff0000").shiftHue((Time.time * tid) + (h * (360 / tif))));
                        Draw.rect(Core.atlas.find("creators-youling22-" + (h + 1)),
                            this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0), this.rotation - 90);
                    }
                    Draw.blend();
                    Draw.color();
                },
            }, a);
        });
        a.consumePower(18500 / 60);
        a.size = 5;
        a.shootSound = CreatorsSound.loadSound("youling22");
        a.reload = 60/0.6;
        a.canOverdrive = true;
        a.liquidCapacity = 10;
        a.health = 4200;
        a.buildCostMultiplier = 0.5;
        a.heatColor = F.c("d98686");
        a.shootEffect = Fx.shootBig;
        a.range = 45 * 8;
        a.inaccuracy = 0;
        a.rotateSpeed = 6; //旋转速度
        a.chargeMaxDelay = 300;
        a.recoilAmount = 7;
        a.shootShake = 1;
        a.shootCone = 5;
        a.coolEffect = Fx.steam;
        a.cooldowntime = 15;
        a.chargeTime = 20;
        a.chargeMaxDelay = 10;
        a.chargeEffects = 1;
        a.coolantMultiplier = 30; //液体冷却倍率、
        a.shoot.firstShotDelay = 10//第一枪的延迟//蓄力射击特效必须有这个接口做前置
        //a.shoot.shotDelay = 5//每一枪的延迟
        a.consumeLiquid(zhiwujinghuaye, 6 / 60)
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
        a.shootType = Bullet_s.mingwang;
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
);



exports.ronghui4 = (//天谴
    (() => {
        const a = extend(PowerTurret, "ronghui4", {});
        a.canOverdrive = true;
        a.size = 8;
        a.health = 9600;
        a.buildCostMultiplier = 1.5;
        a.heatColor = F.c("6F00D2")
        a.shootEffect = Fx.shootBig
        a.shootSound = CreatorsSound.loadSound("ronghui4");
        a.range = 600;
        a.firingMoveFract = 0.5;
        a.inaccuracy = 0;
        a.rotateSpeed = 2.5; //旋转速度
        a.chargeMaxDelay = 300;
        a.recoilAmount = 7;
        a.shootShake = 1;
        a.shootCone = 5;
        a.coolEffect = Fx.steam;
        a.cooldowntime = 65;
        a.reload = 600 / 3.84;
        a.shootDuration = 10; //炮口停留时间
        a.accurateDelay = true;
        a.chargeTime = 65
        a.chargeMaxDelay = 12
        a.chargeEffects = 6
        a.shoot.firstShotDelay = 110
        a.consumeLiquid(qiangxiaolengqueye, 9 / 60,)
        a.consumePower(80000 / 60);
        a.coolantMultiplier = 5; //液体冷却倍率
        a.requirements = ItemStack.with(
            Items.lead, 3000,
            Items.copper, 2400,
            guijingti, 4300,
            weijing5, 20,
            monengjing3, 5,
            jinhuiboli, 1200,
            weijing4, 300,
        );
        a.shootType = Bullet_s.tianqian
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)
const z = require('turrets/zongjipao');
exports.zongjipao = z.xipao1;
const x = require('turrets/zongjipao2');
exports.zongjipao2 = x.xipao2;
/************************************************** */
//炸弹代码由 @XVX神魂 提供

const bomb = extend(Wall, "bomb", {});//炸弹
bomb.health = 16500
bomb.size = 4;
bomb.update = true;
bomb.hasPower = true;
bomb.consumePower(1 / 60);
bomb.buildCostMultiplier = 0.8;
bomb.group = BlockGroup.power;
bomb.insulated = true;
//bomb.buildVisibility = BuildVisibility.shown;
bomb.category = Category.turret;
bomb.requirements = ItemStack.with(
    Items.lead, 30000,
    Items.copper, 30000,
    Items.silicon, 5000,
    zhayao, 2500,
    zuanjing, 120,
    monengjing1, 70,
);
bomb.buildType = () => {
    const TNTDamage = 50000;//爆炸攻击
    const TNTRadius = 100 * 8;//爆炸范围
    const TNTTime = 3 * 60;//爆炸延迟
    let T = 0.0;
    const t = extend(Wall.WallBuild, bomb, {
        updateTile() {
            if (this.efficiency > 0 && this.power.status >= 0) {
                T += Time.delta;
                if (Vars.ui != null) {
                    Vars.ui.showLabel((Math.floor((TNTTime - T) / 60.0) + "s"), 0.01, this.x, this.y);
                }
                if (T >= TNTTime) {
                    Units.nearby(this.team, this.x, this.y, TNTRadius, cons(other => { other.damage(TNTDamage) }))
                    this.damage(this.health);
                }
            } else {
                T = 0.0;
            }
        },
        draw() {
            this.super$draw();
            Drawf.dashCircle(this.x, this.y, TNTRadius, this.team.color);
        },
        write(write) {
            this.super$write(write);
            write.f(T)
        },
        read(read, revision) {
            this.super$read(read, revision);
            T = read.f();
        }
    });
    return t;
};
exports.bomb = bomb
/************************************************** */
/************************************************** */
const rainbowRegionss = [];
const Acker = extend(PowerTurret, 'acker', {
    //微晶核心限制
    canPlaceOn(tile, team, rotation) {
        return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
    },
    drawPlace(x, y, rotation, valid) {
        let tile = Vars.world.tile(x, y);
        if (tile == null) return;
        if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
            let missingMsg = dsGlobal.duoQianZhi.getMissing()
                .toString(", ", block => block.localizedName + block.emoji());
            this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
        }
    },
})//艾克尔
const CCf=Color.valueOf("9B61FFFF")
Acker.buildType = prov(() => {
    const tif = 1; //贴图间的延迟变色速度，越大越不同
    const tid = 0.5; //贴图变色速度，越大越快
    const tr2 = new Vec2();
    return new JavaAdapter(PowerTurret.PowerTurretBuild, {
        draw() {
            this.super$draw();
            // tr2.trns(this.rotation, -this.recoil);
            Draw.blend(Blending.additive);
            for (var h = 0; h < 1; h++) {
                Draw.color(Color.valueOf("b20000").shiftHue((Time.time * tid) + (h * (360 / tif))));
                Draw.rect(Core.atlas.find("creators-acker-" + (h + 1)), this.x, this.y, this.rotation - 90);
            }
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 0 - Time.time * 0.8);//旋转
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 45 + Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 90 - Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 135 + Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 180 - Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 225 + Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 270 - Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-acker-2"), this.x, this.y, 315 + Time.time * 0.8);
            const r = this.rotation;
            Draw.color(Color.valueOf("b20000"));
            Draw.alpha(Mathf.sin(Time.time * 0.05));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-acker-3"), this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0), r - 90);
            Draw.blend();
            Draw.reset();
        },

    }, Acker);
});
Acker.health = 20000;
Acker.reload = 1400;
Acker.recoil = 0;//武器后座
Acker.rotateSpeed = 0;
Acker.canOverdrive = false;
//Acker.acceptsCoolant = false;
Acker.shootCone = 360;//射击瞄准角度
Acker.cooldownTime = 600;//炮口过热消退时间 
Acker.restitution = 33//什么玩意的恢复
//Acker.coolantUsage = 1;//液体消耗量-失效
Acker.consume(new ConsumeCoolant(1));//液体消耗量
Acker.coolantMultiplier = 0.5; //液体冷却倍率
Acker.range = 150 * 8;
Acker.shootY = 0;//中心发射子弹
Acker.heatColor = CCf;
Acker.size = 9;
Acker.shootSound = CreatorsSound.loadSound("release1")

Acker.shoot = new ShootSpread(360, 1);
Acker.inaccuracy = 0;

// Acker.shoot.shots = 360;
// Acker.inaccuracy = 360;

Acker.spread = 1;
Acker.targetAir = true;
Acker.targetGround = true;
Acker.consumePower(500000.1 / 60);
Acker.hasPower = true;
Acker.shootEffect = new Effect(300, e => {
    Draw.color(CCf, e.color, e.fin());
    Lines.stroke(5 - e.finpow() * 5);
    Lines.circle(e.x, e.y, e.finpow() * 20);
})
Acker.buildVisibility = BuildVisibility.shown;
Acker.category = Category.turret;
Acker.requirements = ItemStack.with(
    zuanjing, 45000,
    weijing2, 1500,
    weijing4, 2000,
    weijing5, 20,
    monengjing3, 40,
    chuangshilizi, 1,
    jinhuiboli, 2500,
    taihejin, 700,
    shimoxi, 450,
    guijingti, 100000,
);
//Acker.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(yuanwan0), new DrawDefault(),);


Acker.shoot.firstShotDelay = 5
Acker.shootType = (
    (() => {
        const a = new JavaAdapter(BasicBulletType, {});
        a.sprite = "bullet";
        a.collidesTiles = true;
        a.reflectable = false;
        a.hittable = false;
        a.absorbable = false;
        a.speed = 5;
        a.height = 17;
        a.width = 17;
        a.shrinkX = -18;
        a.shrinkY = 0;
        a.drawSize = 0;
        a.collidesTeam = true;
        a.healPercent = 100;
        a.hitSize = 36;
        a.pierce = true;
        a.pierceCap = 100;
        a.pierceBuilding = true;
        a.lifetime = 4 * 60;
        a.ammoMultiplier = 1;
        a.damage = 280000;
        a.chargeEffect = new Effect(300, e => {
            Angles.randLenVectors(e.id, 40, 50 * e.finpow(),
                e.rotation, 200, (x, y) => {
                    Draw.color(CCf, CCf, e.fin());
                    Fill.circle(e.x + x, e.y + y, e.fout() * 5);
                    Lines.lineAngle(e.x + x * 2, e.y + y * 2, Mathf.angle(x, y), e.fout() * 10);
                });
            Lines.stroke(5 - e.finpow() * 5);
            Lines.circle(e.x, e.y, e.finpow() * 100);
        });
        a.trailChance = 0.05;
        a. trailRotation = true;//旋转
        a.trailEffect = (
            (() => {
                const v = new MultiEffect();
                v.lifetime = 60;
                v.effects = [
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar1";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar2";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar3";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar4";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar5";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    // (() => {
                    //     const v = new ParticleEffect();
                    //     v.particles = 1;
                    //     v.sizeFrom = 3.5;
                    //     v.sizeTo = 3;
                    //     v.length = 18;
                    //     v.baseLength = 18;
                    //     v.lifetime = 30;
                    //     v.region = "creators-ar6";
                    //     v.lightColor = CCf;
                    //     v.colorFrom = CCf;
                    //     v.colorTo = CCf;
                    //     return v;
                    // })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar7";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.5;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar8";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                    (() => {
                        const v = new ParticleEffect();
                        v.particles = 1;
                        v.sizeFrom = 3.4;
                        v.sizeTo = 3;
                        v.length = 18;
                        v.baseLength = 18;
                        v.lifetime = 30;
                        v.region = "creators-ar9";
                        v.lightColor = CCf;
                        v.colorFrom = CCf;
                        v.colorTo = CCf;
                        return v;
                    })(),
                ]
                return v;
            })());
        a.frontColor = CCf;
        a.backColor = CCf;
        a.hitEffect = DrawS.deathMissileHit;
        a.despawnEffect = Fx.none;
        a.despawnEffect = (() => {
            const c = new WaveEffect()
            c.colorFrom = CCf
            c.colorTo = Color.valueOf("e1abffff")
            c.sizeTo = 50;
            c.strokeFrom = 4;
            c.lifetime = 60;
            return c;
        })()
        a.shootEffect = Fx.none;
        a.smokeEffect = Fx.none;
        a.incendChance = 0;
        a.status = (() => {
            const a = new JavaAdapter(StatusEffect, {}, "stun");
            a.reloadMultiplier = 0
            a.speedMultiplier = 0
            return a;
        })()
        a.statusDuration = 180;
        return a;
    })()
);
exports.Acker = Acker;
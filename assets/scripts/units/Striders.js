var lib = require('lib');
var { mieshishenhun } = CTItem
var dropStack = new ItemStack(mieshishenhun, 1,);
const Striders = extend(UnitType, "Striders", {});
Striders.itemCapacity = 0;
Striders.groundLayer = Layer.legUnit;
Striders.constructor = prov(() => extend(UnitTypes.toxopid.constructor.get().class, {
    remove() {
        this.dropItem(Vars.player.team());
        this.super$remove();
    },
    dropItem(team) {
        let dropTo = team.core();
        if (dropTo != null) {
            let item = dropStack.item, amount = dropStack.amount;
            dropTo.items.add(item, amount);
            Fx.itemTransfer.at(this.x, this.y, amount, item.color, dropTo);
        }
    },
}));

Striders.drag = 0.1;
Striders.speed = 0.15;
Striders.hitSize = 300;
Striders.health = 1300000000;//13亿血
Striders.armor = 4500;
Striders.lightRadius = 150 * 8;//灯光范围
Striders.rotateSpeed = 0.1;//旋转速度
Striders.alwaysUnlocked = true;//默认解锁
Striders.legCount = 8;//数量
Striders.legMoveSpace = 0.8;
Striders.legPairOffset = 3;
Striders.legLength = 175;//长度
Striders.legLengthScl = 0.93;
Striders.legExtension = -50;//腿部伸展
Striders.legBaseOffset = 208;
Striders.legSpeed = 0.19;
Striders.legSplashDamage = 1200;//踩踏伤害
Striders.legSplashRange = 10 * 8;//踩踏范围

Striders.targetFlags = [BlockFlag.core];//目标直指核心
Striders.rippleScale = 3;
Striders.buildSpeed = 1;
Striders.mechLandShake = 1;
Striders.hovering = true;
Striders.allowLegStep = true;
Striders.shadowElevation = 0.95;
Striders.groundLayer = 75

exports.qixuan_mieshishen = (//气旋
    (() => {
        const v = extend(FlakBulletType, {});
        v.shootCone = 30;
        v.speed = 3;
        v.damage = 130;
        v.ammoMultiplier = 5;
        v.splashDamage = 50 * 1.5;
        v.splashDamageRadius = 38;
        v.lightning = 2;
        v.lightningLength = 16;
        v.lightningDamage = 30;//闪电伤害
        v.shootEffect = Fx.shootBig;
        v.collidesGround = true;
        v.sprite = "creators-qixuan";
        v.lifetime = 7 * 60;
        v.width = 12;
        v.height = 12;
        v.shrinkY = 0;
        v.shrinkX = 0;
        v.spin = 12;//子弹旋转
        v.backColor = Color.valueOf("ff4141ff"); //背景颜色    
        v.frontColor = Color.valueOf("ff8484ff"); //前面颜色
        v.trailChance = 1;
        v.trailColor = Color.valueOf("ff8484ff");;
        v.trailParam = 4;
        v.trailLength = 3;
        v.trailWidth = 2;
        v.trailInterval = 5;
        v.trailRotation = true;
        v.trailEffect = Fx.none;
        //v.collideFloor = true;//地图墙壁碰撞
        v.weaveMag = 10
        v.weaveScale = 4
        return v;
    })()
);


Striders.weapons.add(//气旋
    (() => {
        const w = new Weapon("cyclone");
        w.autoTarget = true
        w.shootY = 10
        w.x = -235;//横向
        w.y = 185;//纵向
        w.rotate = true;
        w.rotateSpeed = 2;//转速
        w.reload = 5;
        w.rotateSpeed = 10;
        w.inaccuracy = 30
        w.shootCone = 30;
        w.shootSound = Sounds.shootSnap;
        w.mirror = false;
        w.bullet = exports.qixuan_mieshishen
        return w;
    })());
Striders.weapons.add(//气旋
    (() => {
        const w = new Weapon("cyclone");
        w.autoTarget = true;
        w.shootY = 10;
        w.rotate = true;
        w.rotateSpeed = 2;//转速
        w.x = 235;//横向
        w.y = 185;//纵向
        w.reload = 5;
        w.rotateSpeed = 10;
        w.inaccuracy = 30
        w.shootCone = 30;
        w.shootSound = Sounds.shootSnap;
        w.mirror = false;
        w.bullet = exports.qixuan_mieshishen
        return w;
    })());

Striders.weapons.add(//气旋
    (() => {
        const w = new Weapon("cyclone");
        w.autoTarget = true
        w.shootY = 10
        w.x = -190;//横向
        w.y = 185;//纵向
        w.reload = 5;
        w.rotateSpeed = 10;
        w.inaccuracy = 30
        w.shootCone = 30;
        w.shootSound = Sounds.shootSnap;
        w.mirror = false;
        w.bullet = exports.qixuan_mieshishen
        return w;
    })());
Striders.weapons.add(//气旋
    (() => {
        const w = new Weapon("cyclone");
        w.autoTarget = true
        w.shootY = 10
        w.x = 190;//横向
        w.y = 185;//纵向
        w.reload = 5;
        w.rotateSpeed = 10;
        w.inaccuracy = 30
        w.shootCone = 30;
        w.shootSound = Sounds.shootSnap;
        w.mirror = false;
        w.bullet = exports.qixuan_mieshishen
        return w;
    })());
Striders.weapons.add(//气旋
    (() => {
        const w = new Weapon("cyclone");
        w.autoTarget = true
        w.shootY = 10
        w.x = 147;//横向
        w.y = 185;//纵向
        w.reload = 5;
        w.rotateSpeed = 10;
        w.inaccuracy = 30
        w.shootCone = 30;
        w.shootSound = Sounds.shootSnap;
        w.mirror = false;
        w.bullet = exports.qixuan_mieshishen
        return w;
    })());
Striders.weapons.add(//气旋
    (() => {
        const w = new Weapon("cyclone");
        w.autoTarget = true
        w.shootY = 10
        w.x = -147;//横向
        w.y = 185;//纵向
        w.reload = 5;
        w.rotateSpeed = 10;
        w.inaccuracy = 30
        w.shootCone = 30;
        w.shootSound = Sounds.shootSnap;
        w.mirror = false;
        w.bullet = exports.qixuan_mieshishen
        return w;
    })());
Striders.weapons.add(//水枪

    (() => {
        const w = new Weapon("tsunami");
        w.autoTarget = true
        w.shootSound = Sounds.spray;
        w.shootY = 10
        w.x = -103;//横向
        w.y = 185;//纵向
        w.reload = 11;
        w.shoot.shots = 10;
        w.velocityRnd = 0.2;//子弹的随机力度
        w.inaccuracy = 25;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Object.assign(new LiquidBulletType(Liquids.water), {
            speed: 3,
            damage: 0.8,
            knockback: 1,//击退; 
            lifetime: 3 * 60,
        });
        return w;
    })());
Striders.weapons.add(//水枪
    (() => {
        const w = new Weapon("tsunami");
        w.shootSound = Sounds.spray;
        w.autoTarget = true//被动开火
        w.shootY = 10
        w.x = 103;//横向
        w.y = 185;//纵向
        w.reload = 11;
        w.shoot.shots = 10;
        w.inaccuracy = 25;
        w.shootCone = 45;
        w.velocityRnd = 0.2;//子弹的随机力度
        w.mirror = false;
        w.bullet = Object.assign(new LiquidBulletType(Liquids.water), {
            speed: 3,
            damage: 0.8,
            knockback: 1,//击退; 
            lifetime: 3 * 60,
        });
        return w;
    })());

Striders.weapons.add(//审判
    (() => {
        const w = new Weapon("creators-ronghui3");
        w.shootY = 16
        w.x = -152;//横向
        w.y = 150;//纵向
        w.rotate = false;
        w.mirror = false;//镜像
        w.top = false;
        w.shake = 4;
        w.shootY = 5;
        //w.firstShotDelay = Fx.greenLaserChargeSmall.lifetime - 1;
        w.recoil = 5;//反冲
        w.chargeSound = Sounds.lasercharge2;
        w.shootSound = CreatorsSound.loadSound("beam1");
        w.continuous = true;
        w.cooldownTime = 200;
        w.inaccuracy = 25;
        w.reload = 150;//射速
        w.bullet = (() => {
            const bt2 = new JavaAdapter(ContinuousLaserBulletType, {});
            bt2.damage = 1500;
            bt2.hitEffect = Fx.hitMeltHeal;
            bt2.drawSize = 420;
            bt2.lifetime = 300;
            bt2.width = 21;//宽
            bt2.length = 56 * 8//长
            bt2.shake = 1;
            bt2.despawnEffect = Fx.smokeCloud;
            bt2.smokeEffect = Fx.none;
            bt2.shootEffect = new Effect(40, 100, e => {
                Draw.color(Color.valueOf("f95240"));
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
            return bt2;
        })()
        return w;
    })());
Striders.weapons.add(//审判
    (() => {
        const w = new Weapon("creators-ronghui3");
        w.shootY = 16
        w.x = 152;//横向
        w.y = 150;//纵向
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
        w.inaccuracy = 25;
        w.reload = 150;//射速
        w.bullet = (() => {
            const bt2 = new JavaAdapter(ContinuousLaserBulletType, {});
            bt2.damage = 1500;
            bt2.hitEffect = Fx.hitMeltHeal;
            bt2.drawSize = 420;
            bt2.lifetime = 300;
            bt2.width = 21;//宽
            bt2.length = 56 * 8//长
            bt2.shake = 1;
            bt2.despawnEffect = Fx.smokeCloud;
            bt2.smokeEffect = Fx.none;
            bt2.shootEffect = new Effect(40, 100, e => {
                Draw.color(Color.valueOf("f95240"));
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
            return bt2;
        })()
        return w;
    })());
const Bullet_s = require('turrets/Bullets');
Striders.weapons.add(//浪涌
    (() => {
        const w = new Weapon("creators-langyong2");
        w.shootSound = Sounds.artillery;
        w.autoTarget = true//被动开火
        w.shootY = 10
        w.x = -195;//横向
        w.y = 105;//纵向
        w.reload = 40;
        w.velocityRnd = 0.3;//子弹的随机力度
        w.shoot.shots = 4;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.langyong2Bullet_monengjing2_mieshishen;
        return w;
    })());
Striders.weapons.add(//浪涌
    (() => {
        const w = new Weapon("creators-langyong2");
        w.shootSound = Sounds.artillery;
        w.autoTarget = true//被动开火
        w.shootY = 10
        w.x = 195;//横向
        w.y = 105;//纵向
        w.reload = 40;
        w.velocityRnd = 0.3;//子弹的随机力度
        w.shoot.shots = 4;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.langyong2Bullet_monengjing2_mieshishen;
        return w;
    })());


Striders.weapons.add(//天煞
    (() => {
        const w = new Weapon("creators-ronghui2");
        w.shootSound = CreatorsSound.loadSound("tiansha");
        w.autoTarget = true//被动开火
        w.shootY = 10
        w.x = -132;//横向
        w.y = 88;//纵向
        w.reload = 160;
        //w.shots = 1;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.tiansha_mieshishen;
        return w;
    })());
Striders.weapons.add(//天煞
    (() => {
        const w = new Weapon("creators-ronghui2");
        w.shootSound = CreatorsSound.loadSound("tiansha");
        w.autoTarget = true//被动开火
        w.shootY = 10
        w.x = 131;//横向
        w.y = 88;//纵向
        w.reload = 160;
        //w.shots = 1;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.tiansha_mieshishen;
        return w;
    })());
Striders.weapons.add(//冥王
    (() => {
        const w = new Weapon("creators-youling2");
        w.shootSound = CreatorsSound.loadSound("youling22");
        w.shootY = 16
        w.x = -240;//横向
        w.y = 60;//纵向
        w.reload = 120;
        //w.shots = 3;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.mingwang_mieshishen;
        return w;
    })());
Striders.weapons.add(//冥王
    (() => {
        const w = new Weapon("creators-youling2");
        w.shootSound = CreatorsSound.loadSound("youling22");
        w.shootY = 16
        w.x = 240;//横向
        w.y = 60;//纵向
        w.reload = 120;
        //w.shots = 3;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.mingwang_mieshishen;
        return w;
    })());

Striders.weapons.add(//北极星
    (() => {
        const w = new Weapon("creators-xipao2");
        w.shootSound = Sounds.railgun;
        w.autoTarget = true//被动开火
        w.rotate = true;//旋转
        w.shootY = 16
        w.x = -174;//横向
        w.y = 20;//纵向
        w.reload = 6 * 60;
        //w.shots = 5;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.beijixing_mieshishen;
        return w;
    })());

Striders.weapons.add(//北极星
    (() => {
        const w = new Weapon("creators-xipao2");
        w.shootSound = Sounds.railgun;
        w.autoTarget = true//被动开火
        w.rotate = true;//旋转
        w.shootY = 16
        w.x = 174;//横向
        w.y = 20;//纵向
        w.reload = 6 * 60;
        //w.shots = 5;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.beijixing_mieshishen;
        return w;
    })());
//------------------
Striders.weapons.add(//天谴
    (() => {
        const w = new Weapon("creators-ronghui4");
        w.shootSound = CreatorsSound.loadSound("ronghui4");
        w.shootY = 20
        w.x = -170;//横向
        w.y = -80;//纵向
        w.reload = 300;
        //w.shots = 3;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.tianqian_mieshishen;
        return w;
    })());
Striders.weapons.add(//天谴
    (() => {
        const w = new Weapon("creators-ronghui4");
        w.shootSound = CreatorsSound.loadSound("ronghui4");
        w.shootY = 20
        w.x = 170;//横向
        w.y = -80;//纵向
        w.reload = 300;
        //w.shots = 3;
        w.inaccuracy = 30;
        w.shootCone = 45;
        w.mirror = false;
        w.bullet = Bullet_s.tianqian_mieshishen;
        return w;
    })());
Striders.weapons.add(//波
    (() => {
        const w = new Weapon("");
        w.x = 0;//横向
        w.y = 0;//纵向
        w.rotate = true;
        w.rotateSpeed = 0;//转速
        w.mirror = false;//镜像
        w.top = false;
        w.recoil = 0;//反冲
        w.shootSound = Sounds.none;
        w.reload = 0.7 * 60;//射速
        w.shoot.shots = 360;
         w.shootCone = 720;//射击瞄准角度
        w.inaccuracy = 360;
        w.bullet = Bullet_s.mieshishenAcker;
        return w;
    })());
Striders.weapons.add(//Striders
    (() => {
        const w = new Weapon("creators-StridersBU");
        w.shootY = 80
        w.x = 0;//横向
        w.y = -120;//纵向
        w.rotate = true;
        w.rotateSpeed = 0.3;//转速
        w.mirror = false;//镜像
        w.top = false;
        w.shake = 4;//屏幕震动
        //w.firstShotDelay = Fx.greenLaserChargeSmall.lifetime - 1;
        w.recoil = 5;//反冲
        w.chargeSound = Sounds.lasercharge2;
        w.shootSound = Sounds.beam;
        w.continuous = true;
        w.cooldownTime = 200;
        w.inaccuracy = 25;
        w.reload = 40 * 60;//射速
        w.bullet = Bullet_s.mieshishen;
        return w;
    })());
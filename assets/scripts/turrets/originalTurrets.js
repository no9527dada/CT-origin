const lib = require('lib');
const {
   // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
      molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli, xudianchi,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = CTItem
//********************************************************* */
const fragPlastic = extend(FlakBulletType, {});
fragPlastic.damage = 6; //伤害
fragPlastic.speed = 4;
fragPlastic.splashDamageRadius = 40
fragPlastic.splashDamage = 25 * 1.5;
fragPlastic.fragBullet = CreatorsBullets.fragPlasticFrag;
fragPlastic.fragBullets = 6;
fragPlastic.hitEffect = Fx.plasticExplosion;
fragPlastic.shootEffect = Fx.shootBig;
fragPlastic.collidesGround = true;
fragPlastic.backColor = Pal.plastaniumBack;
fragPlastic.frontColor = Pal.plastaniumFront;
fragPlastic.explodeRange = 20;
fragPlastic.knockback = 0.3;//击退

const xudianciBullet = extend(FlakBulletType, {});
xudianciBullet.damage = 4; //伤害
xudianciBullet.speed = 5;
xudianciBullet.lightning = 3;//闪电根数
xudianciBullet.lightningLength = 16;//闪电长度
//xudianciBullet.lightningColor = Color.valueOf("ff6200");//闪电颜色
xudianciBullet.lightningDamage = 20;//闪电伤害
// xudianciBullet.backColor = Color.valueOf("ffffff"); //背景颜色
// xudianciBullet.frontColor = Color.valueOf("f8ff85"); //前面颜色

CTBlocks.cyclone.ammo(
    Items.metaglass, CreatorsBullets.fragGlass,
    Items.blastCompound, CreatorsBullets.fragExplosive,
    Items.plastanium, fragPlastic,
    Items.surgeAlloy, CreatorsBullets.fragSurge,
    xudianchi, xudianciBullet,
);//气旋子弹
Blocks.cyclone.ammo(
    Items.metaglass, CreatorsBullets.fragGlass,
    Items.blastCompound, CreatorsBullets.fragExplosive,
    Items.plastanium, fragPlastic,
    Items.surgeAlloy, CreatorsBullets.fragSurge,
    xudianchi, xudianciBullet,
);//气旋子弹
//********************************************************* 
const saaas = new JavaAdapter(FlakBulletType, {});
saaas.reloadMultiplier = 2;
saaas.damage = 2; //伤害
saaas.splashDamageRadius = 12; //分裂范围
saaas.splashDamage = 18; //分裂的伤害
saaas.speed = 3
saaas.ammoMultiplier = 2; //装弹数量;
CTBlocks.scatter.ammoTypes.put(Items.sand, saaas); //原版分裂炮

//********************************************************* 

CTBlocks.salvo.ammoTypes.put(Items.titanium,//
    (() => {
        const D = new JavaAdapter(BasicBulletType, {});
        D.damage = 22;
        D.speed = 3.8
        D.width = 9;
        D.height = 12;
        D.shootEffect = Fx.shootBig;
        D.smokeEffect = Fx.shootBigSmoke;
        D.ammoMultiplier = 2;
        D.lifetime = 55;
        return D;
    })(),
);
Blocks.salvo.ammoTypes.put(Items.titanium,//
    (() => {
        const D = new JavaAdapter(BasicBulletType, {});
        D.damage = 22;
        D.speed = 3.8
        D.width = 9;
        D.height = 12;
        D.shootEffect = Fx.shootBig;
        D.smokeEffect = Fx.shootBigSmoke;
        D.ammoMultiplier = 2;
        D.lifetime = 55;
        return D;
    })(),
);
var asa = (() => {
    const c = new ParticleEffect()
    c.lifetime = 20;
    c.region = "creators-ss";
    c.particles = 5;
    c.length = 16;
    c.sizeFrom = 10;
    c.colorFrom = Color.valueOf("39e3f3FF");
    c.colorTo = Color.valueOf("b4f8ffFF");
    return c;
})();
CTBlocks.foreshadow.ammoTypes.put(zuanjing,//
    (() => {
        const D = new JavaAdapter(PointBulletType, {});
        D.hitEffect=Fx.massiveExplosion;
        D.smokeEffect=Fx.smokeCloud;
        D.trailEffect=asa//子弹的弹道效果（那条直线）
        D.despawnEffect=Fx.greenBomb;//子弹打在目标点上的效果
        D.updateEffectSeg = 40;

        D.color=Color.valueOf("79f4f8FF");
        D.trailSpacing=20;
        D.tileDamageMultiplier=0.5;
        D.hitShake=6;
        D.speed=100;
        D.damage=800;
        D.ammoMultiplier=1;
        D.shootEffect=new Effect(24, e => {
            e.scaled(10, b => {
                Draw. color(Color.white, Color.valueOf("39e3f3FF"), b.fin());
                Lines. stroke(b.fout() * 3 + 0.2);
                Lines.circle(b.x, b.y, b.fin() * 50);
            });
            Draw. color(Color.valueOf("39e3f3FF"));
            Drawf.light(e.x, e.y, 180, Color.valueOf("39e3f3FF"), 0.9 * e.fout());
        }),
        D.splashDamageRadius=3*8;
        D.splashDamage=300;
        D.buildingDamageMultiplier=0.3;
        return D;
    })(),
);
Blocks.foreshadow.ammoTypes.put(zuanjing,//
    (() => {
        const D = new JavaAdapter(PointBulletType, {});
        D.hitEffect=Fx.massiveExplosion;
        D.smokeEffect=Fx.smokeCloud;
        D.trailEffect=asa//子弹的弹道效果（那条直线）
        D.despawnEffect=Fx.greenBomb;//子弹打在目标点上的效果
        D.updateEffectSeg = 40;

        D.color=Color.valueOf("79f4f8FF");
        D.trailSpacing=20;
        D.tileDamageMultiplier=0.5;
        D.hitShake=6;
        D.speed=100;
        D.damage=800;
        D.ammoMultiplier=1;
        D.shootEffect=new Effect(24, e => {
            e.scaled(10, b => {
                Draw. color(Color.white, Color.valueOf("39e3f3FF"), b.fin());
                Lines. stroke(b.fout() * 3 + 0.2);
                Lines.circle(b.x, b.y, b.fin() * 50);
            });
            Draw. color(Color.valueOf("39e3f3FF"));
            Drawf.light(e.x, e.y, 180, Color.valueOf("39e3f3FF"), 0.9 * e.fout());
        }),
        D.splashDamageRadius=3*8;
        D.splashDamage=300;
        D.buildingDamageMultiplier=0.3;
        return D;
    })(),
);
exports.T6chuan1 = (() => {
    const D = new JavaAdapter(MissileBulletType, {});
    D.buildingDamageMultiplier = 0.05
    D.trailChance = 2//拖尾
    D.speed = 4;
    D.damage = 25;
    D.width = 15;
    D.height = 30;
    D.shrinkY = 0;
    D.drag = -0.003;
    D.homingRange = 60;
    D.keepVelocity = false;
    D.splashDamageRadius = 25;
    D.splashDamage = 15;
    D.lifetime = 80;
    D.trailColor = Color.valueOf("45d754");
    D.backColor = Color.valueOf("45d754");
    D.frontColor = Color.valueOf("7de39c");
    D.hitEffect = Fx.blastExplosion;
    D.despawnEffect = Fx.blastExplosion;
    D.weaveScale = 6;
    D.weaveMag = 1
    return D;
})();

exports.T6chuan2 = (() => {
    const D = new JavaAdapter(ArtilleryBulletType, {});
    D.buildingDamageMultiplier = 0.05
    D.speed = 2;
    D.damage = 45;
    D.hitEffect = Fx.blastExplosion;
    D.knockback = 0.8;
    D.lifetime = 150;
    D.width = 25;
    D.height = 25;
    D.collides = true;
    D.collidesTiles = true;
    D.splashDamageRadius = 35;
    D.splashDamage = 80;
    D.backColor = Color.valueOf("84f491");
    D.frontColor = Color.valueOf("fff8e8")
    return D;
})();
exports.T6chuan31 = (() => {
    const D = new JavaAdapter(ArtilleryBulletType, {});
    D.buildingDamageMultiplier = 0.05
    D.hitEffect = Fx.sapExplosion;
    D.knockback = 0.8;
    D.lifetime = 90;
    D.speed = 2.5;
    D.damage = 50;
    D.width = 20;
    D.height = 20;
    D.collidesTiles = false;
    D.splashDamageRadius = 70;
    D.splashDamage = 40;
    D.backColor = Color.valueOf("00ad12");
    D.frontColor = Color.valueOf("7cfd89");
    D.lightning = 2;
    D.lightningLength = 5;
    D.smokeEffect = Fx.shootBigSmoke2;
    D.hitShake = 5;
    D.lightRadius = 30;
    D.lightningDamage = 15;
    D.lightColor = Color.valueOf("84f491");
    D.lightOpacity = 0.5;
    D.status = StatusEffects.sapped;
    D.statusDuration = 600
    return D;
})();
exports.T6chuan3 = (() => {
    const D = new JavaAdapter(ArtilleryBulletType, {});
    D.hitEffect = Fx.sapExplosion;
    D.buildingDamageMultiplier = 0.05
    D.knockback = 0.8;
    D.lifetime = 60;
    D.speed = 5;
    D.damage = 120;
    D.width = 50;
    D.height = 50;
    //D.collidesTiles = collides;
    D.collides = true;
    D.ammoMultiplier = 2;
    D.splashDamageRadius = 80;
    D.splashDamage = 75;
    D.backColor = Color.valueOf("00ad12");
    D.frontColor = Color.valueOf("7cfd89");
    D.lightningColor = Color.valueOf("7cfd89");
    D.lightning = 5;
    D.lightningLength = 12;
    D.lightningDamage = 8;
    D.smokeEffect = Fx.shootBigSmoke2;
    D.hitShake = 10;
    D.lightRadius = 40;
    D.lightColor = Color.valueOf("84f491");
    D.lightOpacity = 0.6;
    D.status = StatusEffects.sapped;
    D.statusDuration = 600;
    D.fragLifeMin = 0.3;
    D.fragBullets = 9;
    D.fragBullet = exports.T6chuan31
    return D;
})();

//********************************************************* 

exports.T6rishi1 = (() => {
    const D = new JavaAdapter(MissileBulletType, {});
    D.speed = 4;
    D.damage = 25;
    D.width = 15;
    D.height = 30;
    D.shrinkY = 0;
    D.drag = -0.003;
    D.homingRange = 60;
    D.keepVelocity = false;
    D.splashDamageRadius = 25;
    D.splashDamage = 15;
    D.lifetime = 80;
    D.trailColor = Color.valueOf("d06b53");
    D.backColor = Color.valueOf("d06b53");
    D.frontColor = Color.valueOf("ffa665");
    D.hitEffect = Fx.blastExplosion;
    D.despawnEffect = Fx.blastExplosion;
    D.weaveScale = 6;
    D.weaveMag = 1
    return D;
})();

exports.T6rishi2 = (() => {
    const D = new JavaAdapter(ArtilleryBulletType, {});
    D.speed = 2;
    D.damage = 45;
    D.hitEffect = Fx.blastExplosion;
    D.knockback = 0.8;
    D.lifetime = 150;
    D.width = 25;
    D.height = 25;
    D.collides = true;
    D.collidesTiles = true;
    D.splashDamageRadius = 35;
    D.splashDamage = 80;
    D.backColor = Color.valueOf("f9c27a");
    D.frontColor = Color.valueOf("fff8e8")
    return D;
})();
exports.T6rishi31 = (() => {
    const D = new JavaAdapter(ArtilleryBulletType, {});
    D.hitEffect = Fx.sapExplosion;
    D.knockback = 0.8;
    D.lifetime = 90;
    D.speed = 2.5;
    D.damage = 50;
    D.width = 20;
    D.height = 20;
    D.collidesTiles = false;
    D.splashDamageRadius = 70;
    D.splashDamage = 40;
    D.backColor = Color.valueOf("ff8e1d");
    D.frontColor = Color.valueOf("fff890");
    D.lightning = 2;
    D.lightningLength = 5;
    D.smokeEffect = Fx.shootBigSmoke2;
    D.hitShake = 5;
    D.lightRadius = 30;
    D.lightColor = Color.valueOf("665c9f");
    D.lightOpacity = 0.5;
    D.status = StatusEffects.sapped;
    D.statusDuration = 600
    return D;
})();
exports.T6rishi3 = (() => {
    const D = new JavaAdapter(ArtilleryBulletType, {});
    D.hitEffect = Fx.sapExplosion;
    D.knockback = 0.8;
    D.lifetime = 60;
    D.speed = 5;
    D.damage = 120;
    D.width = 50;
    D.height = 50;
    //D.collidesTiles = collides;
    D.collides = true;
    D.ammoMultiplier = 2;
    D.splashDamageRadius = 80;
    D.splashDamage = 75;
    D.backColor = Color.valueOf("ff8e1d");
    D.frontColor = Color.valueOf("fff890");
    D.lightningColor = Color.valueOf("fff890");
    D.lightning = 5;
    D.lightningLength = 20;
    D.lightningDamage = 65;
    D.smokeEffect = Fx.shootBigSmoke2;
    D.hitShake = 10;
    D.lightRadius = 40;
    D.lightColor = Color.valueOf("665c9f");
    D.lightOpacity = 0.6;
    D.status = StatusEffects.sapped;
    D.statusDuration = 600;
    D.fragLifeMin = 0.3;
    D.fragBullets = 9;
    D.fragBullet = exports.T6chuan31
    return D;
})();














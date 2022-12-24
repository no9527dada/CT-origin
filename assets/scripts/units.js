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
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = CTItem
const lib = require('lib')
require('BlocksLibes/jiasuyi');//传送门
const { poly2,mega2 } = require('units/poly2');
const { T6rishi, T6sixing, T6tianxie, T6wangzuo, } = require('units/T6');
const { oct2 } = require('units/oct2');
const { } = require('units/gammaSplus');
const { ax1, ax2, ax3, ax4, ax5, ax6, yunshu } = require('units/kuangji');
const { zisha } = require('units/zisha');
const { } = require('units/cangying');
const { YunLuo } = require('units/YunLuo');
const { } = require('units/nai');
const { } = require('units/T6chuan');
const { } = require('units/BOSS');

CTUnitTypes.mega.weapons.add(//给巨像增加的武器
    (() => {
        const w = new Weapon("point-defense-mount");
        w.mirror = false;
        w.rotate = true;
        w.reload = 90;
        //w.shots = 3;
        //w.shotDelay = 7;
        w.x = 0;
        w.y = 0;
        w.inaccuracy = 7;
        w.shootX = 0;
        w.shootY = 0;
        w.shootSound = Sounds.mineDeploy;
        w.rotateSpeed = 150;
        w.autoTarget = true;
        w.controllable = false;
        w.bullet = ((() => {
            const a = new FlakBulletType(2.5, 25)
            a.sprite = "missile-large";
            a.collidesGround = true;
            a.collidesAir = true;
            a.explodeRange = 40;
            a.width = 7
            a.height = 7;
            a.shrinkY = 0;
            a.drag = -0.003;
            a.homingRange = 60;
            a.keepVelocity = false;
            a.lightRadius = 60;
            a.lightOpacity = 0.7;
            a.lightColor = Pal.heal;
            a.splashDamageRadius = 30;
            a.buildingDamageMultiplier= 0.01,//对建筑的伤害
            a.splashDamage = 37;
            a.lifetime = 120;
            a.backColor = Pal.heal;
            a.frontColor = Color.white;
            a.hitEffect = ((() => {
                const c = new ExplosionEffect();
                c.lifetime = 28;
                c.waveStroke = 6;
                c.waveLife = 10;
                c.waveRadBase = 7;
                c.waveColor = Pal.heal;
                c.waveRad = 30;
                c.smokes = 6;
                c.smokeColor = Color.white;
                c.sparkColor = Pal.heal;
                c.sparks = 6;
                c.sparkRad = 35;
                c.sparkStroke = 1.5;
                c.sparkLen = 4;
                return c;
            })());
            a.weaveScale = 8;
            a.weaveMag = 1;
            a.trailColor = Pal.heal;
            a.trailWidth = 2.5;
            a.trailLength = 15;
            return a;
        })());
        return w;
    })());
CTUnitTypes.gamma.abilities.add(new RepairFieldAbility(5, 60 * 3, 1));//原版3级飞机

CTUnitTypes.oct.abilities.add(new UnitSpawnAbility(CTUnitTypes.poly, 3600, 19.25, -31.75), new UnitSpawnAbility(CTUnitTypes.flare, 60, -19.25, -31.75));//t5护盾飞机
//T1空军
CTBlocks.airFactory.plans.add(
    new UnitFactory.UnitPlan(yunshu, 2400, ItemStack.with(Items.lead, 50, shiying, 35)),
    new UnitFactory.UnitPlan(ax1, 2400, ItemStack.with(Items.lead, 20, shiying, 25)),
    new UnitFactory.UnitPlan(poly2, 2400, ItemStack.with(Items.lead, 80, guijingti, 33,shimoxi,25)),

);
//T2
CTBlocks.additiveReconstructor.addUpgrade(ax1, ax2);
CTBlocks.additiveReconstructor.addUpgrade(yunshu, zisha);
CTBlocks.additiveReconstructor.addUpgrade(poly2, mega2);
//T3
CTBlocks.multiplicativeReconstructor.addUpgrade(ax2, ax3);
//CTBlocks.multiplicativeReconstructor.addUpgrade(zisha, miehuo);
CTBlocks.multiplicativeReconstructor.requirements = ItemStack.with(
    guijingti, 50,
    Items.titanium, 80,
    Items.metaglass, 40,
);
//T4
CTBlocks.exponentialReconstructor.addUpgrade(ax3, ax4);
CTBlocks.exponentialReconstructor.requirements = ItemStack.with(
    guijingti, 460,
    Items.titanium, 750,
    Items.plastanium, 650,
    jingliantai, 220,
);
//T5
CTBlocks.tetrativeReconstructor.addUpgrade(ax4, ax5);
CTBlocks.exponentialReconstructor.requirements = ItemStack.with(
    guijingti, 800,
    Items.plastanium, 600,
    Items.surgeAlloy, 500,
    Items.phaseFabric, 350,
    jin, 120
);



const unitGC1 = extend(UnitFactory, "288", {});
unitGC1.health = 4590;
unitGC1.size = 9;
unitGC1.liquidCapacity = 120;
unitGC1.consumes
unitGC1.buildVisibility = BuildVisibility.shown;
unitGC1.category = Category.units;
unitGC1.requirements = ItemStack.with(
    guijingti, 3200,
    Items.plastanium, 1500,
    Items.lead, 5000,
    Items.metaglass, 1200,
    Items.titanium, 2500,
    buding, 3200,
    weijing1, 600,
    weijing2, 120,
);
unitGC1.consumeLiquid(molijinghuaye, 60 / 60);
unitGC1.consumePower(2800 / 60);

var time = 60 * 200;
unitGC1.plans = Seq.with(
    new UnitFactory.UnitPlan(
        CTUnitTypes.eclipse, time,
        ItemStack.with(
            weijing2, 10,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 260,
            Items.silicon, 700
        )),
    new UnitFactory.UnitPlan(
        CTUnitTypes.toxopid, time,
        ItemStack.with(
            weijing2, 20,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 260,
            zijing1, 300
        )),
    new UnitFactory.UnitPlan(
        CTUnitTypes.reign, time,
        ItemStack.with(
            weijing2, 15,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 260,
            Items.thorium, 700
        )),
    new UnitFactory.UnitPlan(
        CTUnitTypes.omura, time,
        ItemStack.with(
            weijing2, 30,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 260,
            Items.metaglass, 900
        )),
    new UnitFactory.UnitPlan(
        CTUnitTypes.oct, time,
        ItemStack.with(
            weijing2, 5,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 260,
            jingliantai, 450
        )),
    new UnitFactory.UnitPlan(
        CTUnitTypes.corvus, time,
        ItemStack.with(
            weijing2, 20,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 260,
            Items.titanium, 700
        )),
    new UnitFactory.UnitPlan(
        CTUnitTypes.navanax, time,
        ItemStack.with(
            weijing2, 30,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 500,
            jin, 280,
            Items.metaglass, 1200
        )),
    new UnitFactory.UnitPlan(
        ax5, time,
        ItemStack.with(
            weijing2, 20,
            guijingti, 1300,
            Items.plastanium, 950,
            Items.surgeAlloy, 650,
            Items.phaseFabric, 480,
            jin, 700
        )),
);
exports.unitGC1 = unitGC1;


const unitGC2 = extend(Reconstructor, "352", {});
unitGC2.size = 11;
unitGC2.health = 5500
unitGC2.consumePower(2500);
unitGC2.constructTime = 60 * 60 * 5;//分钟
unitGC2.consumeItems(ItemStack.with(
    dabaojingmoli, 300,
    guijingti, 1300,
    Items.titanium, 3000,
    jin, 2500,
    monengjing1, 800,
    weijing2, 1300,
    weijing3, 90
));
unitGC2.addUpgrade(ax5, ax6);
unitGC2.addUpgrade(CTUnitTypes.reign, T6wangzuo);
unitGC2.addUpgrade(CTUnitTypes.corvus, T6sixing);
unitGC2.addUpgrade(CTUnitTypes.toxopid, T6tianxie);
unitGC2.addUpgrade(CTUnitTypes.eclipse, T6rishi);
unitGC2.addUpgrade(CTUnitTypes.oct, oct2);

//unitGC2.upgrades.addAll(
//    [CTUnitTypes.reign, T6wangzuo],
//    [CTUnitTypes.corvus, T6sixing],
//    [CTUnitTypes.toxopid, T6tianxie],
//    [CTUnitTypes.eclipse, T6rishi],
//    [CTUnitTypes.oct, oct2],
//    [ax5, ax6],
//);
unitGC2.requirements = ItemStack.with(
    Items.copper, 5000,
    Items.lead, 5000,
    guijingti, 2000,
    shimoxi, 1500,
    Items.metaglass, 400,
    jin, 2500,
    weijing2, 800,
    monengjing2, 10
);
unitGC2.buildCostMultiplier = 0.8;
unitGC2.buildVisibility = BuildVisibility.shown;
unitGC2.category = Category.units;

exports.unitGC2 = unitGC2;

UnitTypes.reign. weapons.set(0,
    (() => {
        const v   = new Weapon("reign-weapon");
        v.shoot = (() => {
            const c = new ShootAlternate()
            c.spread = 4.7;
            c.shots = 6;
            c.barrels = 4
            c.shotDelay = 3;
            return c;
        })()
        
       v. top = false;
       v. y = 1;
       v. x = 21.5;
       v. shootY = 11;
       v. reload = 35;
       v. recoil = 5;
       v. shake = 2;
       v. ejectEffect = Fx.casing4;
       v. shootSound = Sounds.bang;
       v.bullet = (() => {
        const v   = new BasicBulletType(13, 80);
       v. pierce = true;
       v. pierceCap = 10;
       v. width = 14;
       v. height = 33;
       v. lifetime = 15;
       v. shootEffect = Fx.shootBig;
       v. fragVelocityMin = 0.4;
       v. hitEffect = Fx.blastExplosion;
       v. splashDamage = 18;
       v. splashDamageRadius = 13;
       v. fragBullets = 3;
       v. fragLifeMin = 0;
       v. fragRandomSpread = 30;
       v.fragBullet =   (() => {
        const v   = new BasicBulletType(9, 20);
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
CTUnitTypes.reign. weapons.set(0,
    (() => {
        const v   = new Weapon("reign-weapon");
        v.shoot = (() => {
            const c = new ShootAlternate()
            c.spread = 4.7;
            c.shots = 6;
            c.barrels = 4
            c.shotDelay = 3;
            return c;
        })()
       v. top = false;
       v. y = 1;
       v. x = 21.5;
       v. shootY = 11;
       v. reload = 35;
       v. recoil = 5;
       v. shake = 2;
       v. ejectEffect = Fx.casing4;
       v. shootSound = Sounds.bang;
       v.bullet = (() => {
        const v   = new BasicBulletType(13, 80);
       v. pierce = true;
       v. pierceCap = 10;
       v. width = 14;
       v. height = 33;
       v. lifetime = 15;
       v. shootEffect = Fx.shootBig;
       v. fragVelocityMin = 0.4;
       v. hitEffect = Fx.blastExplosion;
       v. splashDamage = 18;
       v. splashDamageRadius = 13;
       v. fragBullets = 3;
       v. fragLifeMin = 0;
       v. fragRandomSpread = 30;
       v.fragBullet =   (() => {
        const v   = new BasicBulletType(9, 20);
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
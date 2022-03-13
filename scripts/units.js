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
const lib = require('lib')
require('BlocksLibes/portal');//传送门

const { T6rishi, T6sixing, T6tianxie, T6wangzuo, } = require('units/T6');
const { oct2 } = require('units/oct2');
const { } = require('units/gammaSplus');
const { ax1, ax2, ax3, ax4, ax5, ax6, yunshu } = require('units/kuangji');
const { zisha } = require('units/zisha');
const { miehuo } = require('units/miehuo');
const { } = require('units/zhuzai');
const { } = require('units/nai');
const { } = require('units/cangying');
const { } = require('units/T6chuan');
UnitTypes.gamma.abilities.add(new RepairFieldAbility(5, 60 * 3, 1));//原版3级飞机
UnitTypes.oct.abilities.add(new UnitSpawnAbility(UnitTypes.poly, 3600, 19.25, -31.75), new UnitSpawnAbility(UnitTypes.flare, 60, -19.25, -31.75));//t5护盾飞机
//T1空军
Blocks.airFactory.plans.add(
    new UnitFactory.UnitPlan(yunshu, 2400, ItemStack.with(Items.lead, 50, shiying, 35)),
    new UnitFactory.UnitPlan(ax1, 2400, ItemStack.with(Items.lead, 20, shiying, 25))
);
//T2
Blocks.additiveReconstructor.addUpgrade(ax1, ax2);
Blocks.additiveReconstructor.addUpgrade(yunshu, zisha);
//T3
Blocks.multiplicativeReconstructor.addUpgrade(ax2, ax3);
Blocks.multiplicativeReconstructor.addUpgrade(zisha, miehuo);
Blocks.multiplicativeReconstructor.requirements = ItemStack.with(
    guijingti, 50,
    Items.titanium, 80,
    Items.metaglass, 40,
);
//T4
Blocks.exponentialReconstructor.addUpgrade(ax3, ax4);
Blocks.exponentialReconstructor.requirements = ItemStack.with(
    guijingti, 460,
    Items.titanium, 750,
    Items.plastanium, 650,
    jingliantai, 220,
);
//T5
Blocks.tetrativeReconstructor.addUpgrade(ax4, ax5);
Blocks.exponentialReconstructor.requirements = ItemStack.with(
    guijingti, 800,
    Items.plastanium, 600,
    Items.surgeAlloy, 500,
    Items.phaseFabric, 350,
    jin, 120
);



const unitGC1 = extendContent(UnitFactory, "288", {});
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
unitGC1.consumes.liquid(molijinghuaye, 60 / 60);
unitGC1.consumes.power(2800 / 60);
lib.addToResearch(unitGC1, {
    parent: Blocks.tetrativeReconstructor.name,
});
var time = 60 * 200;
unitGC1.plans = Seq.with(
    new UnitFactory.UnitPlan(
        UnitTypes.eclipse, time,
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
        UnitTypes.toxopid, time,
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
        UnitTypes.reign, time,
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
        UnitTypes.omura, time,
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
        UnitTypes.oct, time,
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
        UnitTypes.corvus, time,
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
        UnitTypes.aegires, time,
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


const unitGC2 = extendContent(Reconstructor, "352", {});
unitGC2.size = 11;
unitGC2.health = 5500
unitGC2.consumes.power(2500);
unitGC2.constructTime = 60 * 60 * 5;//分钟
unitGC2.consumes.items(ItemStack.with(
    dabaoyedan, 200,
    guijingti, 1300,
    Items.titanium, 3000,
    jin, 2500,
    monengjing1, 800,
    weijing2, 1300,
    weijing3, 90
));
unitGC2.addUpgrade(ax5, ax6);
unitGC2.addUpgrade(UnitTypes.reign, T6wangzuo);
unitGC2.addUpgrade(UnitTypes.corvus, T6sixing);
unitGC2.addUpgrade(UnitTypes.toxopid, T6tianxie);
unitGC2.addUpgrade(UnitTypes.eclipse, T6rishi);

//unitGC2.upgrades.addAll(
//    [UnitTypes.reign, T6wangzuo],
//    [UnitTypes.corvus, T6sixing],
//    [UnitTypes.toxopid, T6tianxie],
//    [UnitTypes.eclipse, T6rishi],
//    [UnitTypes.oct, oct2],
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
lib.addToResearch(unitGC2, {
    parent: unitGC1.name,
});
exports.unitGC2 = unitGC2;

//stop
//host 橘子
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
    dabaoyedan, zhiwujingyou, jinglianlio,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = require('wupin');
const ax1 = new UnitType('1kuangji');
ax1.speed = 1.6;
ax1.drag = 0.01;
ax1.hitSize = 10;
ax1.health = 240;
ax1.itemCapacity = 25;
ax1.range = 50;
ax1.flying = true;
ax1.isCounted = false;
ax1.mineTier = 1;
ax1.mineSpeed = 1.6;
ax1.armor = 10;
ax1.defaultController = prov(() => new MinerAI()); ax1.ammoType = new ItemAmmoType(Items.blastCompound, 1);
ax1.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
lib.addToResearch(ax1, { parent: Blocks.airFactory.name, });
exports.ax1 = ax1
//-----------------------------------------------------------------------------------------
const kuangjiAI2 = require("all/kuangjiAI2");
const ax2 = new UnitType('2kuangji');
ax2.defaultController = prov(() => new kuangjiAI2.kuangjiAI2()); ax2.ammoType = new ItemAmmoType(Items.blastCompound, 1);
ax2.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax2 = ax2

const kuangjiAI3 = require("all/kuangjiAI3");
const ax3 = new UnitType('3kuangji');
ax3.abilities.add(new RepairFieldAbility(Infinity, 60, 8 * 8));
ax3.defaultController = prov(() => new kuangjiAI3.kuangjiAI3()); ax3.ammoType = new ItemAmmoType(Items.blastCompound, 2);
ax3.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax3 = ax3

const kuangjiAI4 = require("all/kuangjiAI4");
const ax4 = new UnitType('4kuangji');
ax4.abilities.add(new ForceFieldAbility(40, 110, 60 * 1, 160));//(40半径, 60重新生成, 500盾容, 60 * 6冷却)20f, 40f, 60f * 5, 60f//Infinity 无穷大
ax4.defaultController = prov(() => new kuangjiAI4.kuangjiAI4()); ax4.ammoType = new ItemAmmoType(Items.blastCompound, 2);
ax4.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax4 = ax4

const kuangjiAI5 = require("all/kuangjiAI5");
const ax5 = new UnitType('5kuangji');
ax5.payloadCapacity = (4.5 * 4.5) * Vars.tilePayload;
ax5.defaultController = prov(() => new kuangjiAI5.kuangjiAI5()); ax5.ammoType = new PowerAmmoType(18000);
ax5.constructor = prov(() => extend(UnitTypes.oct.constructor.get().class, {}));
exports.ax5 = ax5

const kuangjiAI6 = require("all/kuangjiAI6");
const ax6 = new UnitType('6kuangji');
ax6.payloadCapacity = (5.8 * 5.8) * Vars.tilePayload;
ax6.ammoType = new PowerAmmoType(9000);
ax6.abilities.add(new ForceFieldAbility(56, 110, 60 * 1, 160));//(40半径, 60重新生成, 500盾容, 60 * 6冷却)20f, 40f, 60f * 5, 60f//Infinity 无穷大

lib.addToResearch(ax6, {
    parent: 'toxopid',
    requirements: ItemStack.with(
        monengjing1, 4000,
        jin, 120000,
        weijing2, 7000,
        weijing3, 200,
        Items.thorium, 50000,
        guijingti, 180000,
    ),
});
//ax6.defaultController = prov(() => new MinerAI());
ax6.defaultController = prov(() => new kuangjiAI6.kuangjiAI6());
ax6.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax6 = ax6

const yunshu = new UnitType('yunshu');
yunshu.defaultController = prov(() => new MinerAI());
yunshu.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.yunshu = yunshu
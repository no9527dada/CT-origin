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
    dabaoyedan, zhiwujingyou, jinglianlio,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = CTItem
const ax1 = new UnitType('1kuangji');
ax1.speed = 1.6;
ax1.drag = 0.01;
ax1.hitSize = 10;
ax1.health = 240;
ax1.itemCapacity = 25;
ax1.range = 50;
ax1.flying = true;
//ax1.isCounted = false;
ax1.mineTier = 1;
ax1.mineSpeed = 1.6;
ax1.armor = 10;
ax1.controller = u => new MinerAI();
ax1.ammoType = new ItemAmmoType(Items.blastCompound, 1);
ax1.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax1 = ax1
//-----------------------------------------------------------------------------------------

const ax2 = new UnitType('2kuangji');
ax2.controller = u => new MinerAI();
ax2.mineItems = Seq.with(shiying, Items.copper, Items.lead, Items.sand,)
ax2.ammoType = new ItemAmmoType(Items.blastCompound, 1);
ax2.logicControllable = false//逻辑器无法控制单位
ax2.playerControllable = false//玩家无法操控
ax2.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax2 = ax2

const ax3 = new UnitType('3kuangji');
ax3.mineItems = Seq.with(shiying, jingliantai, Items.copper, Items.lead, Items.thorium, Items.coal,)
ax3.abilities.add(new RepairFieldAbility(Infinity, 60, 8 * 8));
ax3.logicControllable = false//逻辑器无法控制单位
ax3.playerControllable = false//玩家无法操控
ax3.controller = u => new MinerAI();
ax3.ammoType = new ItemAmmoType(Items.blastCompound, 2);
ax3.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax3 = ax3

const ax4 = new UnitType('4kuangji');
ax4.mineItems = Seq.with(shiying, jingliantai, jin, Items.copper, Items.lead, Items.thorium, Items.titanium, Items.scrap,)
ax4.abilities.add(new ForceFieldAbility(40, 110, 60 * 1, 160));//(40半径, 60重新生成, 500盾容, 60 * 6冷却)20f, 40f, 60f * 5, 60f//Infinity 无穷大
ax4.controller = u => new MinerAI();
ax4.logicControllable = false//逻辑器无法控制单位
ax4.playerControllable = false//玩家无法操控
ax4.ammoType = new ItemAmmoType(Items.blastCompound, 2);
ax4.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax4 = ax4

const ax5 = new UnitType('5kuangji');
ax5.mineItems = Seq.with(shiying, jingliantai, jin, Items.copper, Items.lead, Items.thorium, Items.titanium,)
ax5.payloadCapacity = (4.5 * 4.5) * Vars.tilePayload;
ax5.logicControllable = false//逻辑器无法控制单位
//ax5.playerControllable = false//玩家无法操控
ax5.controller = u => new MinerAI();
ax5.ammoType = new PowerAmmoType(18000);
ax5.constructor = prov(() => extend(UnitTypes.oct.constructor.get().class, {}));
exports.ax5 = ax5

const ax6 = new UnitType('6kuangji');
ax6.mineItems = Seq.with(jin, zuanshikuang, molishi, jingliantai, shiying, jingliantai, jin, Items.copper, Items.lead, Items.thorium, Items.titanium,);
ax6.logicControllable = true//逻辑器无法控制单位
ax6.playerControllable = true//玩家无法操控
//Items.copper,lead,coal,sand,scrap,thorium,titanium, )
ax6.payloadCapacity = (5.8 * 5.8) * Vars.tilePayload;
ax6.ammoType = new PowerAmmoType(9000);
ax6.abilities.add(new ForceFieldAbility(56, 110, 60 * 1, 160))


//ax6.controller = u => new MinerAI());
ax6.controller = u => new MinerAI();
ax6.abilities.add(
    (() => {
        const w = new SuppressionFieldAbility()
       w.color = Color.valueOf("89f08e");
       w.particleColor=Color.valueOf("b3f0b6");
       w.orbRadius = 5;
       w.particleSize = 3;
       w.y = -15;
       w.x = 0;
       w.particles = 10;
       w.particleLen = 7
       w.rotateScl = 3
       w.particleLife = 110
       w.display = false;
       w.active = true;
        return w;
    })()
);

ax6.setEnginesMirror(new UnitType.UnitEngine(11, -18, 5, 315));
ax6.engineColor =  Color.valueOf("89f08e");//这是调颜色
ax6.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
exports.ax6 = ax6;

const yunshu = new UnitType('yunshu');
yunshu.controller = u => new MinerAI();
yunshu.physics = false
yunshu.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
yunshu.canAttack = false//关闭单位的武器,功能性单位
yunshu.playerControllable = false;//玩家无法操控
exports.yunshu = yunshu


const yunshu2 = new ErekirUnitType('yunshu2');
yunshu2.aiController = prov(() => new CargoAI());
yunshu2.constructor = prov(() => extend(UnitTypes.manifold.constructor.get().class, {}));
yunshu2.logicControllable = false;
yunshu2.playerControllable = false;
yunshu2.hittable = false;
yunshu2.isEnemy = false;
//yunshu2.lowAltitude = false;
yunshu2.targetable = false;
yunshu2.physics = false;//关闭碰撞
yunshu2.canAttack = false//关闭单位的武器,功能性单位
exports.yunshu2 = yunshu2;
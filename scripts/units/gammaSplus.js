/* const ax1 = new UnitType('1kuangji');
    ax1.defaultController = prov(() => new MinerAI());
    ax1.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
   "commandLimit": 8, //指挥命令限制数量
*/

/*  
    private Prov<Unit> unitType(JsonValue value){
        if(value == null) return UnitEntity::create;
        return switch(value.asString()){
            case "flying" -> UnitEntity::create;
            case "mech" -> MechUnit::create;
            case "legs" -> LegsUnit::create;
            case "naval" -> UnitWaterMove::create;
            case "payload" -> PayloadUnit::create;

    以上可能在JS中会用得到。
    json看下面
    
    单位Type：
    飞行单位：UnitEntity
    该单位可以飞行使用飞行AI
    陆地单位：MechUnit
    该单位无需介绍
    蜘蛛单位：LegsUnit
    该单位拥有蜘蛛的属性
    海军单位：UnitWaterMove
    海上行驶
    辅助单位：PayloadUnit
    该单位与其他单位不同，其他单位type不可以建造方块
    该单位可以建造方块 
*/
const gg = require('all/ability');
const zdan = BasicBulletType();
zdan.width = 6.5;
zdan.speed = 8;
zdan.damage=12;
zdan.height = 11;
zdan.lifetime = 50;
zdan.scaleVelocity = false;//指哪打哪
zdan.frontColor = Color.valueOf("d6ffd1");
zdan.lightning = 3;//闪电根数
zdan.lightningLength = 5;//闪电长度
zdan.lightningColor = Color.valueOf("4ae636");//闪电颜色
zdan.lightningDamage = 5;//闪电伤害
zdan.shootEffect = Fx.shootSmall;
zdan.smokeEffect = Fx.shootSmallSmoke;
zdan.buildingDamageMultiplier = 0.01;
zdan.healPercent = 3;//治愈建筑百分比
zdan.homingPower = 0.04;//追踪能力值
exports.gammaSplusZdan = zdan;
//------------------------
const gammaSplus = new UnitType('gammaSplus');
gammaSplus.defaultController = prov(() => new BuilderAI());
gammaSplus.isCounted = false;
gammaSplus.flying = true;
gammaSplus.mineSpeed = 8.5;
gammaSplus.mineTier = 3;
gammaSplus.buildSpeed = 3;
gammaSplus.lightRadius = 1400;
gammaSplus.lightOpacity = 0.5;
gammaSplus.drag = 0.05;
gammaSplus.speed = 6;
gammaSplus.rotateSpeed = 19;
gammaSplus.accel = 0.11;
gammaSplus.itemCapacity = 90;
gammaSplus.health = 260;
gammaSplus.engineOffset = 6;
gammaSplus.hitSize = 20;
gammaSplus.commandLimit = 8;
gammaSplus.abilities.add(gg.ColourfulForceFieldAbilityy(40, 3, 700, 600));//彩色护盾
gammaSplus.abilities.add(new RepairFieldAbility(5, 60 * 3, 1));//自身回血
gammaSplus.weapons.add(
    (() => {
        const w = new Weapon("feiji666-weapon");
        w.top = false;
        w.reload = 15;
        w.x = 1;
        w.y = 2;
        w.shots = 2;
        w.spacing = 2;
        w.inaccuracy = 3;
        w.shotDelay = 3;
        w.ejectEffect = Fx.casing1;
        w.bullet = zdan
        return w;
    })()
);
gammaSplus.constructor = prov(() => extend(UnitTypes.gamma.constructor.get().class, {}));
exports.gammaSplus = gammaSplus;


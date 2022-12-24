/* const ax1 = new UnitType('1kuangji');
    ax1.aiController = prov(() => new MinerAI());
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
const gg = require('all/Colour');
const zdan = BasicBulletType();
zdan.width = 6.5;
zdan.speed = 8;
zdan.damage = 10;
zdan.height = 11;
zdan.lifetime = 50;
zdan.scaleLife = false;//指哪打哪
zdan.frontColor = Color.valueOf("d6ffd1");
zdan.lightning = 3;//闪电根数
zdan.lightningLength = 5;//闪电长度
zdan.lightningColor = Color.valueOf("4ae636");//闪电颜色
zdan.lightningDamage = 4;//闪电伤害
zdan.shootEffect = Fx.shootSmall;
zdan.smokeEffect = Fx.shootSmallSmoke;
zdan.buildingDamageMultiplier = 0.01;
zdan.collidesTeam = true;
zdan.healPercent = 1;//治愈建筑百分比
zdan.homingPower = 0.04;//追踪能力值
exports.gammaSplusZdan = zdan;
//------------------------
//const gammaSplus = new UnitType('gammaSplus');
var cogs = Color.valueOf("6dd8fe");
const effect2 = new Effect(50, e => {
    Draw.color(Color.valueOf("ab83f6ff"), e.color, e.fin());
    Lines.stroke(e.fout() * 1 + 0.5);
    Angles.randLenVectors(e.id, 10, 100 * e.fin(), e.rotation, 5, (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fslope() * 5 + 0.5);

    });
    Draw.color(cogs, Color.valueOf("ab83f6ff"), e.fin());
    Angles.randLenVectors(e.id, 5, 3.5 + e.fin() * 7, (x, y) => {
        Fill.circle(e.x + x, e.y + y, 0.1 + e.fout() * 1.4);
    });
})
var wwee = (
    (() => {
        const w = new MoveEffectAbility(0, -7, Color.valueOf("89f08e"), effect2, 1.7);
        w.minVelocity = 0.4;
        w.rotateEffect = true;
        w.effectParam = 2;
        w.rotation = 180
        w.teamColor = true;
        return w;
    })()
);
exports.gammaSpluswwee = wwee;
const gammaSplus = extend(UnitType, "gammaSplus", {
    draw(unit) {
        this.super$draw(unit);

        Draw.alpha(Mathf.sin(Time.time * 0.04) * 1);
        Draw.rect(Core.atlas.find("creators-xvx-cell0"), unit.x, unit.y);

        var z = Draw.z();
        Draw.z(Layer.flyingUnit - 0.5);
        // Draw.color(unit.team.color);队伍颜色
        Draw.color(cogs);
        Draw.alpha(1);
        Draw.rect(Core.atlas.find("creators-gammaSplus-1"), unit.x, unit.y, Time.time * 0.6);
        Draw.rect(Core.atlas.find("creators-gammaSplus-2"), unit.x, unit.y, -Time.time * 0.6);
        //Draw.rect(Core.atlas.find("creators-BOSS贴图-圈"), unit.x, unit.y);
        Draw.z(z);
    },
});
const bbbx = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "creators1S");
    v.effect = Fx.lightningCharge;
    return v;
})();

Events.run(Trigger.update, () => {
    Vars.player.unit().apply(bbbx, java.lang.Float.MAX_VALUE);
});



gammaSplus.aiController = prov(() => new BuilderAI());
//gammaSplus.isCounted = false;
gammaSplus.flying = true;
gammaSplus.mineSpeed = 8.5;
gammaSplus.mineTier = 4;
gammaSplus.buildSpeed = 9.5;
gammaSplus.lightRadius = 1400;
gammaSplus.mineRange = 100;//采矿范围
gammaSplus.lightOpacity = 0.5;
gammaSplus.drag = 0.05;
gammaSplus.speed = 8;
gammaSplus.fogRadius = 2
gammaSplus.rotateSpeed = 19;
gammaSplus.accel = 0.11;
gammaSplus.itemCapacity = 90;
gammaSplus.health = 260;
gammaSplus.engineOffset = 7.5;
gammaSplus.hitSize = 20;
//gammaSplus.engineColor =  Color.valueOf("b67bff");//这是调颜色
gammaSplus.physics = false;//关闭碰撞
gammaSplus.buildRange = 220 + 8 * 8;//默认建造距离27.5格
gammaSplus.abilities.add(gg.Colour(40, 3, 700, 600));//彩色护盾
gammaSplus.abilities.add(new RepairFieldAbility(5, 60 * 3, 1));//自身回血

gammaSplus.parts.add(
    (() => {
        const w = new HoverPart()
        w.x = 3.9;
        w.y = 3;
        w.color = cogs;
        w.mirror = true;
        w.radius = 8;
        w.phase = 90;
        w.stroke = 3;
        w.layerOffset = -0.001;
        w.color = Color.valueOf("bf92f9");
        return w;
    })()
);
gammaSplus.parts.add(
    (() => {
        const w = new HoverPart()
        w.x = 4.9;
        w.y = -3;
        w.color = cogs;
        w.mirror = true;
        w.radius = 8;
        w.phase = 90;
        w.stroke = 3;
        w.layerOffset = -0.001;
        w.color = Color.valueOf("bf92f9");
        return w;
    })()
);


gammaSplus.weapons.add(
    (() => {
        const w = new Weapon("feiji666-weapon");
        w.top = false;
        w.reload = 5;
        w.x = 1;
        w.y = 2;
        w.shoot.shots = 3;
        //w.spacing = 2;
        w.inaccuracy = 3;
        w.shoot.shotDelay = 3;
        w.ejectEffect = Fx.casing1;
        w.bullet = zdan
        return w;
    })()
);
gammaSplus.constructor = prov(() => extend(UnitTypes.gamma.constructor.get().class, {}));
exports.gammaSplus = gammaSplus;


const CT_coreUnit = new UnitType('CT_coreUnit');
CT_coreUnit.aiController = prov(() => new BuilderAI());
CT_coreUnit.flying = true;
CT_coreUnit.mineSpeed = 7;
CT_coreUnit.mineTier = 3;
CT_coreUnit.mineRange = 130;//采矿范围
CT_coreUnit.coreUnitDock = true
CT_coreUnit.buildSpeed = 7;
CT_coreUnit.lightRadius = 10 * 8;
CT_coreUnit.lightOpacity = 0.3;
CT_coreUnit.drag = 0.05;
CT_coreUnit.fogRadius = 0
CT_coreUnit.speed = 5;
CT_coreUnit.physics = false;//关闭碰撞
CT_coreUnit.rotateSpeed = 19;
CT_coreUnit.accel = 0.11;
CT_coreUnit.itemCapacity = 200;
CT_coreUnit.health = 200;
CT_coreUnit.engineOffset = 6;
CT_coreUnit.hitSize = 15;
CT_coreUnit.hittable = false
CT_coreUnit.killable = false
CT_coreUnit.targetable = false
CT_coreUnit.constructor = prov(() => extend(UnitTypes.emanate.constructor.get().class, {}));
exports.CT_coreUnit = CT_coreUnit;

const CT_core2Unit = new UnitType('CT_core2Unit');
CT_core2Unit.aiController = prov(() => new BuilderAI());
CT_core2Unit.flying = true;
CT_core2Unit.mineSpeed = 10;
CT_core2Unit.fogRadius = 0
CT_core2Unit.mineTier = 4;
CT_core2Unit.mineRange = 160;//采矿范围
CT_core2Unit.physics = false;//关闭碰撞
CT_core2Unit.coreUnitDock = true
CT_core2Unit.buildSpeed = 11;
CT_core2Unit.lightRadius = 10 * 8;
CT_core2Unit.lightOpacity = 0.3;
CT_core2Unit.drag = 0.05;
CT_core2Unit.speed = 6.5;
CT_core2Unit.rotateSpeed = 19;
CT_core2Unit.accel = 0.11;
CT_core2Unit.itemCapacity = 300;
CT_core2Unit.health = 240;
CT_core2Unit.engineOffset = 6;
CT_core2Unit.hitSize = 18;
CT_core2Unit.hittable = false;
CT_core2Unit.killable = false;
CT_core2Unit.targetable = false;
CT_core2Unit.mineWalls = true;
CT_core2Unit.buildRange = 220 + 8 * 8
CT_core2Unit.weapons.add(
    (() => {
        const w = new RepairBeamWeapon();
        w.widthSinMag = 0.11;
        w.reload = 20;
        w.autoTarget = false//被动开火
        w.x = 0;
        w.y = 0;
        w.rotate = false;
        w.shootY = 0;
        w.beamWidth = 0.7;
        w.shootCone = 15;
        w.mirror = false;
        w.repairSpeed = 2.5;
        w.fractionRepairSpeed = 0.06;
        w.targetUnits = false;
        w.targetBuildings = true;
        w.controllable = true;
        w.laserColor = Pal.accent;
        w.healColor = Pal.accent;
        w.bullet = (() => {
            var b = new BulletType
            b.maxRange = 65;
            return b;
        })()
        return w;
    })()
);
CT_core2Unit.abilities.add(ForceFieldAbility(3 * 8, 180 / 60, 6400, 600));//普通护盾
CT_core2Unit.constructor = prov(() => extend(UnitTypes.emanate.constructor.get().class, {}));

exports.CT_core2Unit = CT_core2Unit;

const CT_core3Unit = new UnitType('CT_core3Unit');
CT_core3Unit.aiController = prov(() => new BuilderAI());
CT_core3Unit.flying = true;
CT_core3Unit.mineSpeed = 13;
CT_core3Unit.mineTier = 5;
CT_core3Unit.fogRadius = 1
CT_core3Unit.physics = false;//关闭碰撞
CT_core3Unit.mineRange = 190;//采矿范围
CT_core3Unit.coreUnitDock = true
CT_core3Unit.buildSpeed = 15;
CT_core3Unit.lightRadius = 10 * 8;
CT_core3Unit.lightOpacity = 0.3;
CT_core3Unit.drag = 0.05;
CT_core3Unit.speed = 8;
CT_core3Unit.rotateSpeed = 19;
CT_core3Unit.accel = 0.11;
CT_core3Unit.itemCapacity = 500;
CT_core3Unit.health = 320;
CT_core3Unit.engineOffset = 8;//尾焰
CT_core3Unit.engineSize = 2.3
CT_core3Unit.hitSize = 20;
CT_core3Unit.hittable = false;
CT_core3Unit.killable = false;
CT_core3Unit.targetable = false;
CT_core3Unit.mineWalls = true;
CT_core3Unit.buildRange = 220 + 13 * 8
CT_core3Unit.setEnginesMirror(new UnitType.UnitEngine(7.5, -7.5, 2.3, 315));//(float x, float y, float radius, float rotation)
CT_core3Unit.weapons.add(
    (() => {
        const w = new RepairBeamWeapon();
        w.widthSinMag = 0.11;
        w.reload = 20;
        w.x = 0;
        w.y = 7.5;
        w.rotate = false;
        w.shootY = 0;
        w.beamWidth = 0.7;
        w.shootCone = 15;
        w.mirror = false;
        w.repairSpeed = 4;
        w.fractionRepairSpeed = 0.06;
        w.targetUnits = false;
        w.targetBuildings = true;
        w.autoTarget = false;
        w.controllable = true;
        w.laserColor = Pal.accent;
        w.healColor = Pal.accent;
        w.bullet = (() => {
            var b = new BulletType
            b.maxRange = 160;
            return b;
        })()
        return w;
    })()
);
CT_core3Unit.abilities.add(gg.Colour(4 * 8, 1800 / 60, 50000, 8 * 60));//彩色护盾
CT_core3Unit.constructor = prov(() => extend(UnitTypes.emanate.constructor.get().class, {}));
exports.CT_core3Unit = CT_core3Unit;

const CT_core3Unit2 = new UnitType('CT_core3Unit2');
CT_core3Unit2.aiController = prov(() => new BuilderAI());
CT_core3Unit2.flying = true;
CT_core3Unit2.mineSpeed = 13;
CT_core3Unit2.mineTier = 6;
CT_core3Unit2.physics = false;//关闭碰撞
CT_core3Unit2.mineRange = 190;//采矿范围
//CT_core3Unit2.drawBuildBeam = false//关闭建造光束
CT_core3Unit2.coreUnitDock = true
CT_core3Unit2.buildSpeed = 15;
CT_core3Unit2.lightRadius = 10 * 8;
CT_core3Unit2.lightOpacity = 0.3;
CT_core3Unit2.drag = 0.05;
CT_core3Unit2.speed = 8;
CT_core3Unit2.fogRadius = 2
CT_core3Unit2.rotateSpeed = 19;
CT_core3Unit2.accel = 0.11;
CT_core3Unit2.itemCapacity = 500;
CT_core3Unit2.health = 320;
CT_core3Unit2.engineOffset = 8;//尾焰
CT_core3Unit2.engineSize = 2.3
CT_core3Unit2.hitSize = 20;
CT_core3Unit2.hittable = false;
CT_core3Unit2.killable = false;
CT_core3Unit2.targetable = false;
CT_core3Unit2.mineWalls = true;
CT_core3Unit2.buildRange = 220 + 13 * 8
CT_core3Unit2.abilities.add(gg.Colour(4 * 8, 5000 / 60, 50000, 2 * 60));//彩色护盾
CT_core3Unit2.setEnginesMirror(new UnitType.UnitEngine(7.5, -7.5, 2.3, 315));//(float x, float y, float radius, float rotation)
CT_core3Unit2.weapons.add(
    (() => {
        const w = new CreatorsRepairBeamWeapon();
        w.widthSinMag = 0.11;
        w.reload = 40;
        w.x = 0;
        w.y = 6.5;
        w.rotate = false;
        w.shootY = 0;
        w.beamWidth = 1.3;
        w.repairSpeed = 500 / 60 + 1;
        //  w.fractionRepairSpeed = 1;
        w.shootCone = 15;
        w.mirror = false;

        w.targetUnits = false;
        w.targetBuildings = true;
        w.autoTarget = false;
        w.controllable = true;
        w.laserColor = Pal.accent;
        w.healColor = Pal.accent;

        w.bullet = new BulletType()
        w.bullet.maxRange = 160;

        return w;
    })()
);

CT_core3Unit2.constructor = prov(() => extend(UnitTypes.gamma.constructor.get().class, {}));
exports.CT_core3Unit2 = CT_core3Unit2;
CTUnitTypes.gamma.fogRadius = 0;
CTUnitTypes.beta.fogRadius = 0;
CTUnitTypes.alpha.fogRadius = 0;
UnitTypes.gamma.fogRadius = 0;
UnitTypes.beta.fogRadius = 0;
UnitTypes.alpha.fogRadius = 0;
/*
const CT_core3Unit2 = new ErekirUnitType('CT_core3Unit2');
CT_core3Unit2.coreUnitDock = true
CT_core3Unit2.controller =  u => new BuilderAI(true, 500);
CT_core3Unit2.flying = true;
CT_core3Unit2.mineSpeed = 13;
CT_core3Unit2.mineTier = 6;
CT_core3Unit2.physics = false;//关闭碰撞
CT_core3Unit2.mineRange = 190;//采矿范围
//CT_core3Unit2.drawBuildBeam = false//关闭建造光束
CT_core3Unit2.buildSpeed = 15;
CT_core3Unit2.lightRadius = 10 * 8;
CT_core3Unit2.lightOpacity = 0.3;
CT_core3Unit2.drag = 0.05;
CT_core3Unit2.speed = 8;
CT_core3Unit2.rotateSpeed = 19;
CT_core3Unit2.accel = 0.11;
CT_core3Unit2.itemCapacity = 500;
CT_core3Unit2.health = 320;
CT_core3Unit2.engineOffset = 8;//尾焰
CT_core3Unit2.engineSize = 2.3
CT_core3Unit2.hitSize = 20;
CT_core3Unit2.hittable = false;
CT_core3Unit2.killable = false;
CT_core3Unit2.targetable = false;
CT_core3Unit2.mineWalls = true;
CT_core3Unit2.buildRange = 220 + 13 * 8


CT_core3Unit2.abilities.add(gg.Colour(4 * 8, 5000 / 60, 50000, 2 * 60));//彩色护盾
CT_core3Unit2.setEnginesMirror(new UnitType.UnitEngine(7.5, -7.5, 2.3, 315));//(float x, float y, float radius, float rotation)
CT_core3Unit2.weapons.add(
    (() => {
        const w = new CreatorsRepairBeamWeapon();
        w.widthSinMag = 0.11;
        w.reload = 40;
        w.x = 0;
        w.y = 6.5;
        w.rotate = false;
        w.shootY = 0;
        w.beamWidth = 1.3;
        w.repairSpeed = 500 / 60 + 1;
        //  w.fractionRepairSpeed = 1;
        w.shootCone = 15;
        w.mirror = false;

        w.targetUnits = false;
        w.targetBuildings = true;
        w.autoTarget = false;
        w.controllable = true;
        w.laserColor = Pal.accent;
        w.healColor = Pal.accent;

        w.bullet = new BulletType()
        w.bullet.maxRange = 160;

        return w;
    })()
);

CT_core3Unit2.constructor = prov(() => extend(UnitTypes.emanate.constructor.get().class, {}));
exports.CT_core3Unit2 = CT_core3Unit2;
*/
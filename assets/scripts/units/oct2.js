
const www = require("all/ability2");
const sseee = require("units/cangying");

const oct2 = new UnitType('oct2');
oct2.aiController = prov(() => new DefenderAI());
oct2.constructor = prov(() => extend(UnitTypes.oct.constructor.get().class, {}));

oct2.abilities.add(www.TerritoryFieldAbility(150, 60 * 4, 200));
oct2.abilities.add(new ForceFieldAbility(40*8, 480 / 60, 15000, 60 * 5), new RepairFieldAbility(280, 60 * 2, 140));
oct2.abilities.add(new UnitSpawnAbility(sseee.wenzi2, 3600, 19.25, -31.75), new UnitSpawnAbility(sseee.cangying1, 1600, -19.25, -31.75));
oct2.rotateSpeed = 1;
oct2.armor = 16;
oct2.health = 58000;
oct2.speed = 1.3;
oct2.drag = 0.018;
oct2.engineOffset = 46;
oct2.engineSize = 9.8;
oct2.flying = true;
//oct2.rotateShooting = false;
oct2.hitSize = 60;
oct2.payloadCapacity = (6 * 6) * Vars.tilePayload;
oct2.buildSpeed = 4;
oct2.drawShields = false;
//oct2.commandLimit = 12;
oct2.lowAltitude = true;
oct2.buildBeamOffset = 43;
oct2.ammoCapacity = 1300;
//oct2.accel = 0.04;逐渐加速
oct2.itemCapacity = 300;
exports.oct2 = oct2;

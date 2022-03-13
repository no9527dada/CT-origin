//------------------------------------------------------------------------------------------------------------------------------------------------------------
const lib = require('lib');
const ability = require("all/ability2");
const death1 = lib.loadSound("death1");
const sss = require("wupin");
/* 
const zhaoya = new UnitType('zhaoya');//爪牙
zhaoya.alwaysUnlocked = true;
zhaoya.speed = 0.56;
zhaoya.hitSize = 8;//
//zhaoya.breakSound = 方块破坏声音
zhaoya.deathSound = death1
zhaoya.health = 220;
zhaoya.alwaysUnlocked = true;
zhaoya.itemCapacity = 0;
zhaoya.isCounted = false;
zhaoya.flying = false;
zhaoya.abilities.add(
    new UnitSpawnAbility(zhaoya, 1200, 1, -1),
);
zhaoya.constructor = prov(() => extend(UnitTypes.dagger.constructor.get().class, {}));
//--------------------------------------------------------------------
const Clem = new UnitType('Clem');//饥饿
Clem.alwaysUnlocked = true;
Clem.speed = 0.5;
Clem.hitSize = 8;//
Clem.alwaysUnlocked = true;
Clem.health = 800;
Clem.itemCapacity = 0;
Clem.flying = false;
Clem.abilities.add(
    new UnitSpawnAbility(Clem, 1800, 1, -1),
    new UnitSpawnAbility(UnitTypes.flare, 480, 1, -1),
);
Clem.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//--------------------------------------------------------------------
const Rot = new UnitType('Rot');//腐败
Rot.alwaysUnlocked = true;
Rot.speed = 0.35;
Rot.hitSize = 32;//
Rot.alwaysUnlocked = true;
Rot.health = 6000;
Rot.itemCapacity = 0;
Rot.flying = false;
Rot.abilities.add(
    new UnitSpawnAbility(Clem, 900, 1, -1),
    new UnitSpawnAbility(zhaoya, 600, 1, -1),
    new UnitSpawnAbility(UnitTypes.zenith, 720, 1, -1),
);
Rot.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));

 */
const ZHUZAI0 = new UnitType('zhuzai-0');
//ZHUZAI0.abilities.add(ability.MendFieldAbility(180, 210, 10));方块修复场

ZHUZAI0.abilities.add(ability.pointDefenseAbility1(25, -8, 10, 160, 200, "creators-zhuzai-0-2"), ability.pointDefenseAbility1(-25, -8, 10, 160, 200, "creators-zhuzai-0-2"));
// pointDefenseAbility1(px, py, reloadTime, range, bulletDamage, "sprite");
ZHUZAI0.alwaysUnlocked = true;
ZHUZAI0.commandLimit = 150;
ZHUZAI0.abilities.add(
    new UnitSpawnAbility(UnitTypes.arkyid, 300, 19.25, -31.75), // T4 爬爬
    new UnitSpawnAbility(UnitTypes.zenith, 30, -19.25, 31.75),//T3 飞
    new UnitSpawnAbility(UnitTypes.antumbra, 400, -31.75, 19.25), //t4 飞
    new UnitSpawnAbility(UnitTypes.eclipse, 800, 31.75, -19.25),//t5 飞
);


const dropStack = new ItemStack(sss.yuanshencanpian, 1);

ZHUZAI0.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {
	remove(){
		this.dropItem(Vars.player.team());
		this.super$remove();
	},
	dropItem(team){
		let dropTo = team.core();
		if(dropTo != null){
			let item = dropStack.item, amount = dropStack.amount;
			dropTo.items.add(item, amount);
			Fx.itemTransfer.at(this.x, this.y, amount, item.color, dropTo);
		}
	},
}));
//ZHUZAI0.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//lib.addToResearch(ZHUZAI0, { parent: UnitTypes.eclipse.name, });
//--------------------------------------------------------------------
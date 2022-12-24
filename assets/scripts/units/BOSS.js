//------------------------------------------------------------------------------------------------------------------------------------------------------------
const lib = require('lib');
const ability = require("all/ability2");
const death1 = CreatorsSound.loadSound("death1");
const sss = CTItem
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
//const ZHUZAI0 = new UnitType('zhuzai-0');
//ZHUZAI0.abilities.add(ability.MendFieldAbility(180, 210, 10));方块修复场
const ZHUZAI0 = extend(UnitType, "zhuzai-0", {});
ZHUZAI0.abilities.add(ability.pointDefenseAbility1(25, -8, 10, 160, 200, ""), ability.pointDefenseAbility1(-25, -8, 10, 160, 200, ""));
// pointDefenseAbility1(px, py, reload, range, bulletDamage, "sprite");
ZHUZAI0.alwaysUnlocked = true;
//ZHUZAI0.commandLimit = 150;
ZHUZAI0.abilities.add(
	new UnitSpawnAbility(UnitTypes.arkyid, 300, 19.25, -31.75), // T4 爬爬
	new UnitSpawnAbility(UnitTypes.zenith, 30, -19.25, 31.75),//T3 飞
	new UnitSpawnAbility(UnitTypes.antumbra, 400, -31.75, 19.25), //t4 飞
	new UnitSpawnAbility(UnitTypes.eclipse, 800, 31.75, -19.25),//t5 飞
);
var dropStack = new ItemStack(sss.yuanshencanpian, 1);
ZHUZAI0.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {
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
const F = require("all/kuangjiAI");
var CO = F.c("b292fd")
var FBullet = (
	(() => {
		const b = new BasicBulletType(3, 380, "creators-shoot6");
		b.width = 9+3;
		b.hitSize = 5+3;
		b.height = 15+3;
		b.pierce = true;
		b.lifetime = 35;
		b.pierceBuilding = true;
		b.hitColor = CO
		b.backColor = CO
		b.trailColor = CO
		b.frontColor = Color.white;
		b.pierceCap= 3, //穿透数量
		b.weaveMag = 2.5;//曲线，拐弯
        b.weaveScale = 4;
		b.trailWidth = 2.1;
		b.trailLength = 5;
		b.buildingDamageMultiplier = 0.3;
		b.homingPower = 0.2;
		b.hitEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO
			c.colorTo = CO
			c.sizeTo = 20;
			c.strokeFrom = 8;
			c.lifetime = 120;
			c.strokeFrom = 4;
			c.strokeTo = 0;
			return c;
		})()
		b.despawnEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO
			c.colorTo = CO
			c.sizeTo = 7;
			c.strokeFrom = 4;
			c.lifetime = 30;
			return c;
		})()
		return b;
	})());
var hct = (() => {
	const c = new WaveEffect()
	c.colorFrom = CO
	c.colorTo = CO
	c.sizeTo = 30;
	c.strokeFrom = 8;
	c.lifetime = 120;
	c.strokeFrom = 7;
	c.strokeTo = 0;
	return c;
})();
var hct2 = (() => {
	const c = new WaveEffect()
	c.colorFrom = CO
	c.colorTo = CO
	c.sizeTo = 22;
	c.strokeFrom = 8;
	c.lifetime = 90;
	c.strokeFrom = 5;
	c.strokeTo = 0;
	return c;
})()
const Wweijing2 = (
	(() => {

		const v = new BasicBulletType(5, 3200, "creators-shoot1");
		v.despawnEffect = (() => {
			const b = new ExplosionEffect()
			b.lifetime = 28;
			b.waveStroke = 6;
			b.waveLife = 10;
			b.waveRadBase = 7;
			b.waveRad = 30;
			b.smokes = 6;
			b.sparks = 6;
			b.sparkRad = 35;
			b.sparkStroke = 1.5;
			b.sparkLen = 4

			b.waveColor = CO
			b.smokeColor = Color.gray;
			b.sparkColor = Pal.sap;
			// b.waveStroke = 1;
			// b.waveRad = 40;
			// b.smokes = 15;
			// b.sparks = 10;
			return b;
		})()
		v.hitEffect = new MultiEffect(hct, hct2);
		v.smokeEffect = Fx.shootSmokeTitan;
		v.hitColor = CO
		v.trailEffect = Fx.missileTrail;
		v.trailInterval = 3;
		v.trailParam = 4;
		v.pierceCap = 2;
		v.fragOnHit = false;
		v.lifetime = 90;
		v.width = 22
		v.weaveMag = 2.5;//曲线，拐弯
        v.weaveScale = 4;
		v.height = 26;
		v.backColor = CO
		v.frontColor = Color.white;
		v.shrinkX = shrinkY = 0;
		v.trailColor = CO
		v.trailLength = 25;
		v.trailWidth = 5;
		v.lightningColor = Color.valueOf("759332");
		v.lightning = 8; //闪电根数
		v.lightningDamage = 30; //伤害
		v.lightningLength = 20; //闪电长度
		
		v.intervalBullet = FBullet;
		v.fragBullet = FBullet;
		v.fragBullets = 20;
		v.fragVelocityMin = 0.5;
		v.fragVelocityMax = 1.5;
		v.fragLifeMin = 2.5;

		v.bulletInterval = 3;
		v.intervalRandomSpread = 20;
		v.intervalBullets = 2;
		v.intervalAngle = 180;
		v.intervalSpread = 300;
		return v;
	})());
ZHUZAI0.weapons.add(
	(() => {
		const w = new Weapon("creators-zhuzai-0-1");
		w.shootCone = 30;
		w.top = false;
		w.shoot = new ShootSpread(15, 4);
		w.shootSound = Sounds.shootBig;
		w.rotate = true; //武器旋转
		w.shootY = 2;
		w.reload = 40;
		w.rotateSpeed = 1.5;
		w.recoil = 1;
		w.ejectEffect = Fx.casing1;
		w.x = 25;
		w.y = 15;
		w.bullet = Wweijing2;
		return w;
	})()
);
//ZHUZAI0.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//lib.addToResearch(ZHUZAI0, { parent: UnitTypes.eclipse.name, });
//--------------------------------------------------------------------
const zhongji = new UnitType('zhongji-s');//终极
zhongji.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));

require('units/Striders');//灭-世-神
var dropStack2 = new ItemStack(sss.nulls, 1);
const Rot = new UnitType('rule');//xvx神魂
Rot.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {
	remove() {
		this.dropItem(Vars.player.team());
		this.super$remove();
	},
	dropItem(team) {
		let dropTo = team.core();
		if (dropTo != null) {
			let item = dropStack2.item, amount = dropStack2.amount;
			dropTo.items.add(item, amount);
			Fx.itemTransfer.at(this.x, this.y, amount, item.color, dropTo);
		}
	},
}));

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

//ZHUZAI0.abilities.add(ability.MendFieldAbility(180, 210, 10));方块修复场
const { canpianX } = require("units/medal");

//const ZHUZAI0 = extend(UnitType, "zhuzai-0", {});//这个写法在战役中无法生产单位
//const ZHUZAI0 = new UnitType('zhuzai-0');//这个写法在战役中可以生产单位
//第二种写法
const ZHUZAI0 = Object.assign( new UnitType('zhuzai-0'), {
	alwaysUnlocked: true,
	speed: 0.4, //速度
	lowAltitude: true,
	rotateSpeed: 0.5, //旋转的速度
	baseRotateSpeed: 5, //基础转速
	hitSize: 88, //单位的大小
	health: 500000, //血量
	flying: true, //飞行
	engineOffset: 110,
	engineSize: 25,
	//deathSound :niganma//死亡时的声音，貌似没效果
	armor: 200, //护甲
})

ZHUZAI0.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
ZHUZAI0.abilities.add(
	new CTUnitSpawnAbility(UnitTypes.arkyid, 300, 19.25, -31.75), // T4 爬爬
	new CTUnitSpawnAbility(UnitTypes.zenith, 30, -19.25, 31.75),//T3 飞
	new CTUnitSpawnAbility(UnitTypes.antumbra, 400, -31.75, 19.25), //t4 飞
	new CTUnitSpawnAbility(UnitTypes.eclipse, 800, 31.75, -19.25),//t5 飞
);


ZHUZAI0.abilities.add(ability.pointDefenseAbility1(25, -8, 10, 160, 200, "ZHUZAI1S"), ability.pointDefenseAbility1(-25, -8, 10, 160, 200, "ZHUZAI1S"));
// pointDefenseAbility1(px, py, reload, range, bulletDamage, "sprite");
ZHUZAI0.alwaysUnlocked = true;
ZHUZAI0.abilities.add(new SpawnDeathAbility(canpianX, 1, 11));//死亡分裂
//ZHUZAI0.commandLimit = 150;

ZHUZAI0.setEnginesMirror(new UnitType.UnitEngine(80, -90, 20, 315));//(float x, float y, float radius, float rotation)

ZHUZAI0.abilities.add(
	(() => {
		const w = new SuppressionFieldAbility()
		w.orbRadius = 5.1, orbMidScl = 0.33, orbSinScl = 8, orbSinMag = 1;

		w.color = Color.valueOf("a286d5");
		w.particleColor = Color.valueOf("7b5bb8");
		w.orbRadius = 5 + 10;
		w.particleSize = 8;
		w.y = -40;
		w.x = 0;
		w.particles = 10 + 10;
		w.particleLen = 7 + 12
		w.rotateScl = 3 + 10
		w.particleLife = 110
		w.display = true;
		w.active = true;
		return w;
	})()
);
const F = require("all/kuangjiAI");
var CO = F.c("b292fd")
var FBullet = (
	(() => {
		const b = new BasicBulletType(3, 380, "creators-shoot6");
		b.width = 9 + 3;
		b.hitSize = 5 + 3;
		b.height = 15 + 3;
		b.pierce = true;
		b.lifetime = 35;
		b.pierceBuilding = true;
		b.hitColor = CO
		b.backColor = CO
		b.trailColor = CO
		b.frontColor = Color.white;
		b.pierceCap = 5, //穿透数量
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
		//v.pierceCap = 2;
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
/* const FxDaoDan = new Effect(180, 300, b => {
	var intensity = 2;

	Draw.color(b.color, 0.7);
	for (let i = 0; i < 4; i++) {
		rand.setSeed(b.id * 2 + i);
		var lenScl = rand.random(0.5, 1);
		let fi = i;
		b.scaled(b.lifetime * lenScl, e => {
			Angles.randLenVectors(e.id + fi - 1, e.fin(Interp.pow10Out), (int)(2.9 * intensity), 13 * intensity, (x, y, this.in, out), => {
	var fout = e.fout(Interp.pow5Out) * rand.random(0.5, 1);
	var rad = fout * ((2 + intensity) * 2.35);

	Fill.circle(e.x + x, e.y + y, rad);
	Drawf.light(e.x + x, e.y + y, rad * 2.5, b.color, 0.5);
});
			});
		}
	}).layer(Layer.bullet - 1); */
const DaoDan = (() => {
	const a = new MissileBulletType(6, 70)
	a.splashDamageRadius = 8 * 8;
	a.splashDamage = 12000//450*2;
	//a.buildingDamageMultiplier = 6500/12000///对建筑的伤害 10%
	a.shootEffect = Fx.shootBig;
	a.smokeEffect = Fx.shootSmokeMissile;
	a.width = 13 * 2
	a.height = 25 * 2
	a.lifetime = 300
	a.weaveMag = 3;//这个是自动打时拐弯
	a.weaveScale = 3;//这个是操控打时拐弯
	//            a.homingRange = 50 * 8;//追踪范围
	a.homingPower = 0//追踪
	a.trailWidth = 3
	a.trailLength = 7;
	a.trailRotation = true;
	a.trailInterval = 3
	a.trailParam = 2;
	a.trailEffect = CTLIB.CTmissileTrailSmoke//  Fx.missileTrailSmoke;
	a.hitColor = Pal.redLight;
	a.hitEffect = new MultiEffect(Fx.massiveExplosion, Fx.scatheExplosion, Fx.scatheLight, (() => {
		const b = new WaveEffect()
		b.lifetime = 20;
		b.strokeFrom = 4;
		b.sizeTo = 130;
		return b;
	})());
	a.despawnEffect = new MultiEffect(Fx.massiveExplosion, Fx.scatheExplosion, Fx.scatheLight, (() => {
		const b = new WaveEffect()
		b.lifetime = 20;
		b.strokeFrom = 4;
		b.sizeTo = 130;
		return b;
	})());//撞击地面的效果
	a.smokeEffect = Fx.titanSmoke
	//new Effect(7, e => {
	// 	Draw.color(Color.valueOf("2b2b2b"), Color.valueOf("656565"), Color.gray, e.fin());

	// 	Angles.randLenVectors(e.id, 9, e.finpow() * 17, e.rotation, 15, (x, y) => {
	// 		Fill.circle(e.x + x, e.y + y, e.fout() * 2.4 + 0.2);
	// 	});
	// })
	//Fx.shootBigSmoke2;//发射时额外产生的烟雾效果
	return a;
})()
ZHUZAI0.weapons.add(
	(() => {
		const w = new Weapon("creators-zhuzai-0-1");
		w.shootCone = 180;
		w.top = false;
		w.shoot = new ShootSpread(15, 4);
		w.shootSound = Sounds.shootBig;
		w.rotate = false; //武器旋转
		w.shootY = 2;
		w.reload = 80;
		w.rotateSpeed = 1.5;
		w.recoil = 5;//后座力
		w.ejectEffect = Fx.casing1;
		w.x = 70;
		w.y = 75;
		w.bullet = Wweijing2;
		return w;
	})()
);
ZHUZAI0.weapons.add(
	(() => {
		const w = new Weapon("creators-zhuzai-0-2")
		w.reload = 450
		w.x = 90
		w.y = 0
		w.recoil = 8;
		w.top = false;
		w.shoot.shots = 2;
		w.ejectEffect = Fx.casing1;
		w.shootSound = Sounds.missileLaunch;
		w.inaccuracy = 90;
		w.inaccuracy = 20;
		w.bullet = DaoDan
		return w;
	})()
);
ZHUZAI0.weapons.add(
	(() => {
		const w = new Weapon("creators-zhuzai-0-2")
		w.reload = 450
		w.x = -90
		w.y = 0
		w.recoil = 8;
		w.top = false;
		w.shoot.shots = 2;
		w.ejectEffect = Fx.casing1;
		w.shootSound = Sounds.missileLaunch;
		w.inaccuracy = 90;
		w.inaccuracy = 20;
		w.bullet = DaoDan
		return w;
	})()
);
//ZHUZAI0.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
//lib.addToResearch(ZHUZAI0, { parent: UnitTypes.eclipse.name, });
//--------------------------------------------------------------------
//const zhongji = new UnitType('zhongji-s');//终极




const zhongji = extend(UnitType, "zhongji-s", {
	draw(unit) {
		this.super$draw(unit);
		Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 0.5) + (1 * (360 / 20))));
		Draw.rect(Core.atlas.find("creators-zhongji-s1"), unit.x, unit.y);



		const r = unit.rotation;
		Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 1.3) + (1 * (360 / 1))));
		Draw.rect(Core.atlas.find("creators-zhongji-s-A"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0), r - 90);

		Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 1.3) + (1 * (360 / 5))));
		Draw.rect(Core.atlas.find("creators-zhongji-s-B"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0), r - 90)

		Draw.blend();
		Draw.reset();



		// Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 1) + (1 * (360 / 1))));
		// Draw.blend(Blending.additive);
		// Draw.rect(Core.atlas.find("creators-zhongji-s-A"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0), 0);
		// Draw.blend();
		// Draw.reset();

		// Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 1) + (1 * (360 / 10))));
		// Draw.blend(Blending.additive);
		// Draw.rect(Core.atlas.find("creators-zhongji-s-B"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0), 0);
		// Draw.blend();
		// Draw.reset();








		var tif = 1; //贴图间的延迟变色速度，越大越不同
		var tid = 0.5; //贴图变色速度，越大越快
		var z = Draw.z();
		/* 		Draw.z(Layer.flyingUnit - 0.5);
				
					Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 0.5) + (1 * (360 / 20))));
					//Draw.color(Color.valueOf("b20000").shiftHue((Time.time * tid) + (h * (360 / tif))));
					Draw.rect(Core.atlas.find("creators-zhongji-s1" ), unit.x, unit.y);
				
		
					Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 1) + (1 * (360 / 1))));
					Draw.blend(Blending.additive);
					Draw.rect(Core.atlas.find("creators-zhongji-s-A"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0),0);
					Draw.blend();
					Draw.reset();
		
					Draw.color(Color.valueOf("ff000050").shiftHue((Time.time * 1) + (1 * (360 / 10))));
					Draw.blend(Blending.additive);
					Draw.rect(Core.atlas.find("creators-zhongji-s-B"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0),0);
					Draw.blend();
					Draw.reset();
		
					Draw.z(z);*/
	}
});


const sectors = 5;
const sectorRad = 0.14;
const blinkScl = 20;
const rotateSpeed = 0.5;
const effectRadius = 15;
const LightningFieldAbility = (damage, reload, range, color, maxFind) => {
	var x = 0;
	const y = 40;
	var timer = 0;
	var curStroke = 0;
	var find = false;
	var target = new Seq();
	//const maxFind = 18;
	const chargeTime = 20;
	var ability = new JavaAdapter(Ability, {
		localized() {
			return Core.bundle.format("T6sixingg", damage, range / Vars.tilesize, maxFind);
		},
		draw(unit) {
			Draw.z(Layer.bullet - 0.001);
			Draw.color(color);
			Tmp.v1.trns(unit.rotation - 90, x, y).add(unit.x, unit.y);
			var rx = Tmp.v1.x;
			var ry = Tmp.v1.y;
			var orbRadius = effectRadius * (1 + Mathf.absin(blinkScl, 0.1));

			Fill.circle(rx, ry, orbRadius);
			Draw.color();
			Fill.circle(rx, ry, orbRadius / 2);

			Lines.stroke((0.7 + Mathf.absin(blinkScl, 0.7)), color);

			for (var i = 0; i < sectors; i++) {
				var rot = unit.rotation + i * 360 / sectors - Time.time * rotateSpeed;
				Lines.arc(rx, ry, orbRadius + 3, sectorRad, rot);
			}

			Lines.stroke(Lines.getStroke() * curStroke);

			if (curStroke > 0) {
				for (var i = 0; i < sectors; i++) {
					var rot = unit.rotation + i * 360 / sectors + Time.time * rotateSpeed;
					Lines.arc(rx, ry, range, sectorRad, rot);
				}
			}
			Drawf.light(rx, ry, range * 1.5, color, 0.8);
			Draw.reset();
		},
		update(unit) {
			timer = Math.min(timer + Time.delta, reload);
			curStroke = Mathf.lerpDelta(curStroke, find ? 1 : 0, 0.09);
			//Lock multiple (group friend selection)
			if (timer >= reload) {
				find = false;
				target.clear();
				Units.nearby(null, unit.x, unit.y, range, cons(other => {
					if (other.team != unit.team) {
						target.add(other);
					}
				}));
				target.sort(floatf(u => u.dst2(unit.x, unit.y)));

				var max = Math.min(maxFind, target.size);
				for (var a = 0; a < max; a++) {
					var other = target.get(a);
					find = true;
					new Effect(12, cons(e => {
						Draw.color(color);
						Lines.circle(e.x, e.y, e.fin() * range);
						Draw.reset();
					})).at(unit);
					Fx.chainLightning.at(unit.x, unit.y + 40, 0, color, other);
					other.apply(StatusEffects.unmoving, 30);
					for (var i = 0; i < 4; i++) {
						Lightning.create(unit.team, color, damage / 4, other.x, other.y + 40, Mathf.range(180), 10);
					}
					timer = 0
				}
			}
			if (Mathf.chance(0.05)) {
				const r = unit.rotation;
				var a = unit.rotation + Mathf.range(180) + 0;
				//	Lightning.create(unit.team, color, damage, unit.x, unit.y+40, a, 8);
				Lightning.create(unit.team, color, damage, unit.x + Angles.trnsx(unit.rotation, 40, 0), unit.y + Angles.trnsy(unit.rotation, 40, 0), a, 8);
			}
		},
		copy() {
			return LightningFieldAbility(damage, reload, range, color, maxFind);
		},
	});
	return ability;
};
/* zhongji.parts.add(
	(() => {
		const c = new ShapePart();
		c.y = 40;
		c.x = 0;
		c.hollow = true;
		c.circle = false;
		c.layer = 110;
		c.mirror = true;
		c.color = Color.valueOf("#a393feff");
		c.stroke = 1.8;
		c.strokeTo = 1.8;
		c.radiusTo = 14;
		c.radius = 11//外圈大小
		return c;
	})()
) */
zhongji.abilities.add(LightningFieldAbility(54, 90, 192, Color.valueOf("#b09bee"), 22));
zhongji.abilities.add(new SpawnDeathAbility(canpianX, 1, 11));//死亡分裂

/* zhongji.abilities.add(	(() => {//修复建筑？
	const aaaa = new RegenAbility()
	aaaa.amount = 20;
	return aaaa;
})()
); */


/* zhongji.abilities.add(//没起到显示效果，被挡住了。懒得删了
	(() => {
		const aaaa = new SuppressionFieldAbility()
		aaaa.reload = 40;
		aaaa.range = 150 ;
		aaaa.layer = 50;
		aaaa.y = 40;
		aaaa.x = 0;
		aaaa.particles = 15;
		aaaa.particleSize = 13;
		aaaa.rotateScl = 7;
		aaaa.active = true;
		return aaaa;
	})()
);
 */






zhongji.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {
	damage(amount){
        this.health -= amount;
        //hitTime = 1f;
        if(this.health <= 0 && !this.dead){
            this.kill();
        }
    },
}));

/* zhongji.abilities.add(
	(() => {
		const aaaa = new JavaAdapter(MoveLightningAbility, {})
		aaaa.minSpeed = -1;
		aaaa.maxSpeed = 0;
		aaaa.damage = 0;
		aaaa.chance = 0.7;
		aaaa.bulletSpread = 360;
		aaaa.y = 40;
		aaaa.length = 0;
		aaaa.color = 00000000;
		aaaa.shootSound = none;
		aaaa.shootEffect = none
		aaaa.bullet = (() => {
			var bbb = new JavaAdapter(LightningBulletType, {})
			bbb.lightningColor = Color.valueOf("9b7bf6");
			bbb.lightningLengthRand = 8;
			bbb.damage = 0;
			bbb.lightningLength = 6
			return bbb;
		})()
		return aaaa;
	})()
); */





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





/*
const 测试单位 = new UnitType('测试单位');
测试单位.speed = 3;
测试单位.drag = 0.01;
测试单位.hitSize = 10;
测试单位.health = 240;
测试单位.itemCapacity = 25;
测试单位.range = 50;
测试单位.flying = true;
//测试单位.isCounted = false;
测试单位.mineTier = 1;
测试单位.mineSpeed = 1.6;
测试单位.armor = 10;
测试单位.ammoType = new ItemAmmoType(Items.blastCompound, 1);
测试单位.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
测试单位.weapons.add(
	(() => {
		const w = new Weapon();
		w.shootCone = 30;
		w.top = false;
		//w.shoot = new ShootSpread(15, 4);
		w.shootSound = Sounds.shootBig;
		w.rotate = true; //武器旋转
		w.shootY = 2;
		w.reload = 40;
		w.rotateSpeed = 1.5;
		w.recoil = 1;
		w.ejectEffect = Fx.casing1;
		w.x = 0;
		w.y = 0;
		w.bullet = (
			(() => {
				const b = new BasicBulletType(3, 380, "scathe-missile");
				b.width = 12;
				b.height = 25;
					//b.hitSize = 20;
				b.lifetime = 185;

				b. trailEffect = Fx.missileTrailSmoke;
				b.trailRotation=true;
			   b. trailEffect=Fx.none;
			   b.trailInterval = 7;
			  b.  trailColor=F.c("ab80ffff");
				b.trailWidth = 2.1;
b.trailLength = 5;
				// b.shootEffect = new MultiEffect(Fx.massiveExplosion, Fx.scatheExplosion, Fx.scatheLight, (() => {
				// 	const c = new WaveEffect()
				// 	c.lifetime = 10;
				// 	c.strokeFrom = 4;
				// 	c.sizeTo = 130;
				// 	return c;
				// })())


				// b.hitColor = CO
				// b.backColor = CO
				// b.trailColor = CO
				// b.frontColor = Color.white;
				// b.pierceCap = 5, //穿透数量

				// b.weaveMag = 2.5;//曲线，拐弯
				// b.weaveScale = 4;

		
				// b.buildingDamageMultiplier = 0.3;
				// b.homingPower = 0.2;
				// b.hitEffect = (() => {
				// 	const c = new WaveEffect()
				// 	c.colorFrom = CO
				// 	c.colorTo = CO
				// 	c.sizeTo = 20;
				// 	c.strokeFrom = 8;
				// 	c.lifetime = 120;
				// 	c.strokeFrom = 4;
				// 	c.strokeTo = 0;
				// 	return c;
				// })()
				// b.despawnEffect = (() => {
				// 	const c = new WaveEffect()
				// 	c.colorFrom = CO
				// 	c.colorTo = CO
				// 	c.sizeTo = 7;
				// 	c.strokeFrom = 4;
				// 	c.lifetime = 30;
				// 	return c;
				// })()
				return b;
			})());
		return w;
	})());*/
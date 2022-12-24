const F = require("all/kuangjiAI");

var CO1 = F.c("f3ffaf")
var FBullet1 = (
	(() => {
		const b = new BasicBulletType(3, 15, "creators-shoot6");
		b.width = 9;
		b.hitSize = 5;
		b.height = 15;
		b.pierce = true;
		b.lifetime = 20;
		b.pierceBuilding = true;
		b.hitColor = CO1
		b.backColor = CO1
		b.trailColor = CO1
		b.frontColor = Color.white;
		b.weaveMag = 2.5;//曲线，拐弯
        b.weaveScale = 4;
		b.trailWidth = 2.1;
		b.trailLength = 5;
		b.buildingDamageMultiplier = 0.3;
		b.homingPower = 0.2;
		b.hitEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO1
			c.colorTo = CO1
			c.sizeTo = 20;
			c.strokeFrom = 8;
			c.lifetime = 120;
			c.strokeFrom = 4;
			c.strokeTo = 0;
			return c;
		})()
		b.despawnEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO1
			c.colorTo = CO1
			c.sizeTo = 7;
			c.strokeFrom = 4;
			c.lifetime = 30;
			return c;
		})()
		return b;
	})());
exports. Wweijing1 = (
	(() => {
		const v = new BasicBulletType(5, 80, "creators-shoot1");
		v.despawnEffect = (() => {
			const b = new ExplosionEffect()
			b.lifetime = 40;
			b.waveStroke = 6;
			b.waveLife = 10;
			b.waveRadBase = 7;
			b.waveRad = 30;
			b.smokes = 6;
			b.sparks = 6;
			b.sparkRad = 35;
			b.sparkStroke = 1.5;
			b.sparkLen = 4
			b.waveColor = CO1
			b.smokeColor = Color.gray;
			b.sparkColor = Pal.sap;
			return b;
		})()
		v.hitEffect = new MultiEffect(
            (() => {
                const c = new WaveEffect()
                c.colorFrom = CO1
                c.colorTo = CO1
                c.sizeTo = 30;
                c.strokeFrom = 8;
                c.lifetime = 120;
                c.strokeFrom = 7;
                c.strokeTo = 0;
                return c;
            })(),
            (() => {
                const c = new WaveEffect()
                c.colorFrom = CO1
                c.colorTo = CO1
                c.sizeTo = 22;
                c.strokeFrom = 8;
                c.lifetime = 90;
                c.strokeFrom = 5;
                c.strokeTo = 0;
                return c;
            })());
		v.smokeEffect = Fx.shootSmokeTitan;
		v.hitColor = CO1
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
		v.backColor = CO1
		v.frontColor = Color.white;
		v.shrinkX = shrinkY = 0;
		v.trailColor = CO1
		v.trailLength = 25;
		v.trailWidth = 5;
		v.intervalBullet = FBullet1;
		v.fragBullet = FBullet1;
		v.fragBullets = 10;
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
	
var CO2 = F.c("bfff97")
var FBullet2 = (
	(() => {
		const b = new BasicBulletType(3, 25, "creators-shoot6");
		b.width = 9;
		b.hitSize = 5;
		b.height = 15;
		b.pierce = true;
		b.lifetime = 20;
		b.pierceBuilding = true;
		b.hitColor = CO2
		b.backColor = CO2
		b.trailColor = CO2
		b.frontColor = Color.white;
		b.weaveMag = 2.5;//曲线，拐弯
        b.weaveScale = 4;
		b.trailWidth = 2.1;
		b.trailLength = 5;
		b.buildingDamageMultiplier = 0.3;
		b.homingPower = 0.2;
		b.hitEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO2
			c.colorTo = CO2
			c.sizeTo = 20;
			c.strokeFrom = 8;
			c.lifetime = 120;
			c.strokeFrom = 4;
			c.strokeTo = 0;
			return c;
		})()
		b.despawnEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO2
			c.colorTo = CO2
			c.sizeTo = 7;
			c.strokeFrom = 4;
			c.lifetime = 30;
			return c;
		})()
		return b;
	})());
exports. Wweijing2 = (
	(() => {
		const v = new BasicBulletType(5, 140, "creators-shoot1");
		v.despawnEffect = (() => {
			const b = new ExplosionEffect()
			b.lifetime = 40;
			b.waveStroke = 6;
			b.waveLife = 10;
			b.waveRadBase = 7;
			b.waveRad = 30;
			b.smokes = 6;
			b.sparks = 6;
			b.sparkRad = 35;
			b.sparkStroke = 1.5;
			b.sparkLen = 4
			b.waveColor = CO2
			b.smokeColor = Color.gray;
			b.sparkColor = Pal.sap;
			return b;
		})()
		v.hitEffect = new MultiEffect((() => {
			const c = new WaveEffect()
			c.colorFrom = CO2
			c.colorTo = CO2
			c.sizeTo = 30;
			c.strokeFrom = 8;
			c.lifetime = 120;
			c.strokeFrom = 7;
			c.strokeTo = 0;
			return c;
		})(),  (() => {
			const c = new WaveEffect()
			c.colorFrom = CO2
			c.colorTo = CO2
			c.sizeTo = 22;
			c.strokeFrom = 8;
			c.lifetime = 90;
			c.strokeFrom = 5;
			c.strokeTo = 0;
			return c;
		})());
		v.smokeEffect = Fx.shootSmokeTitan;
		v.hitColor = CO2
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
		v.backColor = CO2
		v.frontColor = Color.white;
		v.shrinkX = shrinkY = 0;
		v.trailColor = CO2
		v.trailLength = 25;
		v.trailWidth = 5;
		v.intervalBullet = FBullet2;
		v.fragBullet = FBullet2;
		v.fragBullets = 10;
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


var CO3 = F.c("b292fd")
var FBullet3 = (
	(() => {
		const b = new BasicBulletType(3, 40, "creators-shoot6");
		b.width = 9;
		b.hitSize = 5;
		b.height = 15;
		b.pierce = true;
		b.lifetime = 20;
		b.pierceBuilding = true;
		b.hitColor = CO3
		b.backColor = CO3
		b.trailColor = CO3
		b.frontColor = Color.white;
		b.weaveMag = 2.5;//曲线，拐弯
        b.weaveScale = 4;
		b.trailWidth = 2.1;
		b.trailLength = 5;
		b.buildingDamageMultiplier = 0.3;
		b.homingPower = 0.2;
		b.hitEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO3
			c.colorTo = CO3
			c.sizeTo = 20;
			c.strokeFrom = 8;
			c.lifetime = 120;
			c.strokeFrom = 4;
			c.strokeTo = 0;
			return c;
		})()
		b.despawnEffect = (() => {
			const c = new WaveEffect()
			c.colorFrom = CO3
			c.colorTo = CO3
			c.sizeTo = 7;
			c.strokeFrom = 4;
			c.lifetime = 30;
			return c;
		})()
		return b;
	})());

exports. Wweijing3 = (
	(() => {
		const v = new BasicBulletType(5, 280, "creators-shoot1");
		v.despawnEffect = (() => {
			const b = new ExplosionEffect()
			b.lifetime = 40;
			b.waveStroke = 6;
			b.waveLife = 10;
			b.waveRadBase = 7;
			b.waveRad = 30;
			b.smokes = 6;
			b.sparks = 6;
			b.sparkRad = 35;
			b.sparkStroke = 1.5;
			b.sparkLen = 4
			b.waveColor = CO3
			b.smokeColor = Color.gray;
			b.sparkColor = Pal.sap;
			return b;
		})()
		v.hitEffect = new MultiEffect((() => {
			const c = new WaveEffect()
			c.colorFrom = CO3
			c.colorTo = CO3
			c.sizeTo = 30;
			c.strokeFrom = 8;
			c.lifetime = 120;
			c.strokeFrom = 7;
			c.strokeTo = 0;
			return c;
		})(), (() => {
			const c = new WaveEffect()
			c.colorFrom = CO3
			c.colorTo = CO3
			c.sizeTo = 22;
			c.strokeFrom = 8;
			c.lifetime = 90;
			c.strokeFrom = 5;
			c.strokeTo = 0;
			return c;
		})());
		v.smokeEffect = Fx.shootSmokeTitan;
		v.hitColor = CO3
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
		v.backColor = CO3
		v.frontColor = Color.white;
		v.shrinkX = shrinkY = 0;
		v.trailColor = CO3
		v.trailLength = 25;
		v.trailWidth = 5;
		v.intervalBullet = FBullet3;
		v.fragBullet = FBullet3;
		v.fragBullets = 10;
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


	var CO4 = F.c("f98e3c")
	var FBullet4 = (
		(() => {
			const b = new BasicBulletType(3, 70, "creators-shoot6");
			b.width = 9;
			b.hitSize = 5;
			b.height = 15;
			b.pierce = true;
			b.lifetime = 20;
			b.pierceBuilding = true;
			b.hitColor = CO4
			b.backColor = CO4
			b.trailColor = CO4
			b.frontColor = Color.white;
			b.weaveMag = 2.5;//曲线，拐弯
			b.weaveScale = 4;
			b.trailWidth = 2.1;
			b.trailLength = 5;
			b.buildingDamageMultiplier = 0.3;
			b.homingPower = 0.2;
			b.hitEffect = (() => {
				const c = new WaveEffect()
				c.colorFrom = CO4
				c.colorTo = CO4
				c.sizeTo = 20;
				c.strokeFrom = 8;
				c.lifetime = 120;
				c.strokeFrom = 4;
				c.strokeTo = 0;
				return c;
			})()
			b.despawnEffect = (() => {
				const c = new WaveEffect()
				c.colorFrom = CO4
				c.colorTo = CO4
				c.sizeTo = 7;
				c.strokeFrom = 4;
				c.lifetime = 30;
				return c;
			})()
			return b;
		})());
	exports. Wweijing4 = (
		(() => {
			const v = new BasicBulletType(5, 350, "creators-shoot1");
			v.despawnEffect = (() => {
				const b = new ExplosionEffect()
				b.lifetime = 40;
				b.waveStroke = 6;
				b.waveLife = 10;
				b.waveRadBase = 7;
				b.waveRad = 30;
				b.smokes = 6;
				b.sparks = 6;
				b.sparkRad = 35;
				b.sparkStroke = 1.5;
				b.sparkLen = 4
				b.waveColor = CO4
				b.smokeColor = Color.gray;
				b.sparkColor = Pal.sap;
				return b;
			})()
			v.hitEffect = new MultiEffect(
				(() => {
					const c = new WaveEffect()
					c.colorFrom = CO4
					c.colorTo = CO4
					c.sizeTo = 30;
					c.strokeFrom = 8;
					c.lifetime = 120;
					c.strokeFrom = 7;
					c.strokeTo = 0;
					return c;
				})(),
				(() => {
					const c = new WaveEffect()
					c.colorFrom = CO4
					c.colorTo = CO4
					c.sizeTo = 22;
					c.strokeFrom = 8;
					c.lifetime = 90;
					c.strokeFrom = 5;
					c.strokeTo = 0;
					return c;
				})());
			v.smokeEffect = Fx.shootSmokeTitan;
			v.hitColor = CO4
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
			v.backColor = CO4
			v.frontColor = Color.white;
			v.shrinkX = shrinkY = 0;
			v.trailColor = CO4
			v.trailLength = 25;
			v.trailWidth = 5;
			v.intervalBullet = FBullet4;
			v.fragBullet = FBullet4;
			v.fragBullets = 10;
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







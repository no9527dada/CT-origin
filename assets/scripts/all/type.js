//guiY
//子弹等移至此处
const lib = require('fllib');
///bullet
const c1 = Color.valueOf("84f491");
const c2 = Color.valueOf("bd70e5");
const bt = [CreatorsBullets.artilleryDense, CreatorsBullets.artilleryPlastic, CreatorsBullets.artilleryPlasticFrag, CreatorsBullets.artilleryHoming, CreatorsBullets.artilleryIncendiary, CreatorsBullets.artilleryExplosive, CreatorsBullets.flakScrap, CreatorsBullets.flakLead, CreatorsBullets.flakGlass, CreatorsBullets.flakGlassFrag, CreatorsBullets.fragGlass, CreatorsBullets.fragExplosive, CreatorsBullets.fragPlastic, CreatorsBullets.fragSurge, CreatorsBullets.fragGlassFrag, CreatorsBullets.fragPlasticFrag, CreatorsBullets.missileExplosive, CreatorsBullets.missileIncendiary, CreatorsBullets.missileSurge, CreatorsBullets.standardCopper, CreatorsBullets.standardDense, CreatorsBullets.standardThorium, CreatorsBullets.standardHoming, CreatorsBullets.standardIncendiary, CreatorsBullets.standardDenseBig, CreatorsBullets.standardThoriumBig, CreatorsBullets.standardIncendiaryBig, CreatorsBullets.waterShot, CreatorsBullets.cryoShot, CreatorsBullets.slagShot, CreatorsBullets.oilShot, CreatorsBullets.heavyWaterShot, CreatorsBullets.heavyCryoShot, CreatorsBullets.heavySlagShot, CreatorsBullets.heavyOilShot, CreatorsBullets.damageLightning, CreatorsBullets.damageLightningGround, CreatorsBullets.driverBolt, "CreatorsBullets.healBullet", "CreatorsBullets.healBulletBig"];
//电弧
const arc = extend(LightningBulletType, {});
arc.damage = 20;
arc.lightningLength = 25;
arc.collidesAir = true;
//兰瑟
const lancer = extend(LaserBulletType, {});
lancer.damage = 140;
lancer.hitEffect = Fx.hitLancer;
lancer.despawnEffect = Fx.none;
lancer.hitSize = 4;
lancer.lifetime = 16;
lancer.drawSize = 400;
lancer.collidesAir = true;
lancer.length = 173;
//雷光，两个(一个子弹解决3发射的方法在这里)
//钛
const fuse1 = extend(ShrapnelBulletType, {});
fuse1.length = 110;//+10
fuse1.damage = 80;//+14
fuse1.width = 17;
const fuseS1 = extend(BasicBulletType, {
    despawned(b){
        for(var i = 0; i < 3; i++){
            fuse1.create(b, b.x, b.y, b.rotation() + 20 * (1 - i), 0.01, 1);
        }
    }
});
fuseS1.speed = 0.01;
fuseS1.lifetime = 1;
fuseS1.damage = 1;
//钍
const fuse2 = extend(ShrapnelBulletType, {});
fuse2.length = 110;//+10
fuse2.damage = 120;//+15
fuse2.toColor = Color.valueOf("fec3ff");
fuse2.shootEffect = Fx.thoriumShoot;
fuse2.smokeEffect = Fx.thoriumShoot;
const fuseS2 = extend(BasicBulletType, {
    despawned(b){
        for(var i = 0; i < 3; i++){
            fuse2.create(b, b.x, b.y, b.rotation() + 20 * (1 - i), 0.01, 1);
        }
    }
});
fuseS2.speed = 0.01;
fuseS2.lifetime = 1;
fuseS2.damage = 1;
//融毁
const meltdown = extend(ContinuousLaserBulletType, {});
meltdown.damage = 150;
meltdown.lifetime = 90;
meltdown.length = 200;
meltdown.hitEffect = Fx.hitMeltdown;
meltdown.drawSize = 420;
meltdown.incendChance = 0.4;
meltdown.incendSpread = 5;
meltdown.incendAmount = 1;
//厄兆
const foreshadow = extend(PointBulletType, {});
foreshadow.shootEffect = Fx.instShoot;
foreshadow.hitEffect = Fx.instHit;
foreshadow.smokeEffect = Fx.smokeCloud;
foreshadow.trailEffect = Fx.instTrail;
foreshadow.despawnEffect = Fx.instBomb;
foreshadow.trailSpacing = 20;
foreshadow.damage = 1350;
foreshadow.tileDamageMultiplier = 0.3;
foreshadow.speed = 500;
foreshadow.hitShake = 6;
//单位(特别添加)
//激光
//恒星
const pulsar = extend(LightningBulletType, {});
pulsar.lightningColor = c1;
pulsar.hitColor = c1;
pulsar.damage = 15;
pulsar.lightningLength = 25;
//pulsar.lightningLengthRand = 7;
pulsar.shootEffect = Fx.shootHeal;
pulsar.healPercent = 2;
//耀星
const quasar = extend(LaserBulletType, {});
quasar.damage = 45;
quasar.recoil = 1;
quasar.sideAngle = 45;
quasar.sideWidth = 1;
quasar.sideLength = 70;
quasar.healPercent = 10;
quasar.collidesTeam = true;
quasar.colors = [c1, c1, Color.white];
//灾星(长度修改160->200)
const vela = extend(ContinuousLaserBulletType, {});
vela.damage = 70;
vela.length = 200;
vela.hitEffect = Fx.hitMeltHeal;
vela.drawSize = 420;
vela.lifetime = 90;
//vela.shake = 1;
vela.despawnEffect = Fx.smokeCloud;
vela.smokeEffect = Fx.none;

vela.shootEffect = Fx.greenLaserChargeSmall;

vela.incendChance = 0.075;
vela.incendSpread = 5;
vela.incendAmount = 1;
vela.healPercent = 1;
vela.collidesTeam = true;
vela.colors = [c1, c1, Color.white];
//死星
const corvus = extend(LaserBulletType, {});
corvus.length = 460;
corvus.damage = 560;
corvus.width = 75;

corvus.lifetime = 45;

corvus.lightningSpacing = 35;
corvus.lightningLength = 5;
corvus.lightningDelay = 1.1;
corvus.lightningLengthRand = 15;
corvus.lightningDamage = 50;
corvus.lightningAngleRand = 40;
corvus.largeHit = true;
corvus.lightColor = c1;
corvus.lightningColor = c1;

corvus.shootEffect = Fx.greenLaserCharge;

corvus.healPercent = 25;
corvus.collidesTeam = true;

corvus.sideAngle = 15;
corvus.sideWidth = 0;
corvus.sideLength = 0;
corvus.colors = [c1, c1, Color.white];
//死神
const eclipse = extend(LaserBulletType, {});
eclipse.damage = 90;
eclipse.sideAngle = 20;
eclipse.sideWidth = 1.5;
eclipse.sideLength = 80;
eclipse.width = 25;
eclipse.length = 200;
eclipse.shootEffect = Fx.shockwave;
eclipse.colors = [Color.valueOf("ec7458aa"), Color.valueOf("ff9c5a"), Color.white];
///子弹
//天蝎子弹(最强远程子弹)
const tx = extend(ArtilleryBulletType, {});
tx.damage = 35;
tx.speed = 2.3;
tx.hitEffect = Fx.sapExplosion;
tx.knockback = 0.8;
tx.lifetime = 90;
tx.width = 20;
tx.height = 20;
tx.collidesTiles = false;
tx.splashDamageRadius = 80;
tx.splashDamage = 40;
tx.backColor = c2;
tx.frontColor = c2;
tx.lightningColor = c2;
tx.lightning = 2;
tx.lightningLength = 5;
tx.smokeEffect = Fx.shootBigSmoke2;
tx.hitShake = 5;
tx.status = StatusEffects.sapped;
tx.statusDuration = 60 * 10;
const toxopid = extend(ArtilleryBulletType, {});
toxopid.damage = 50;
toxopid.speed = 3;
toxopid.hitEffect = Fx.sapExplosion;
toxopid.knockback = 0.8;
toxopid.lifetime = 80;
toxopid.width = 25;
toxopid.height = 25;
toxopid.collidesTiles = true;
toxopid.collides = true;
//toxopid.ammoMultiplier = 4;
toxopid.splashDamageRadius = 90;
toxopid.splashDamage = 75;
toxopid.backColor = Color.valueOf("f6c2ff");
toxopid.frontColor = c2;
toxopid.lightningColor = c2;
toxopid.lightning = 5;
toxopid.lightningLength = 20;
toxopid.smokeEffect = Fx.shootBigSmoke2;
toxopid.hitShake = 10;
toxopid.status = StatusEffects.sapped;
toxopid.statusDuration = 60 * 10;
toxopid.fragLifeMin = 0.3;
toxopid.fragBullets = 9;
toxopid.fragBullet = tx;
///
//加入数组
bt.unshift(arc);
bt.unshift(lancer);
bt.unshift(fuseS1);
bt.unshift(fuseS2);
bt.unshift(meltdown);
bt.unshift(vela);
bt.unshift(pulsar);
bt.unshift(quasar);
bt.unshift(corvus);
bt.unshift(eclipse);
bt.unshift(toxopid);
///
//接下来是整条js的精髓
///废料墙相关
const effectColor = Color.valueOf("606060");
const effectColor2 = Color.valueOf("ffffff");
const shieldRange = 150;
const findRange = 12;
///
const eff1 = lib.newEffect(35, (e) => {
			Draw.color(effectColor);
			Lines.stroke(e.fout() * 4); 
			Lines.poly(e.x, e.y, 6, shieldRange * 0.525 + 75 * e.fin());
		});
const shieldDefense = lib.newEffect(20, (e) => {
	Draw.color(effectColor);
	Lines.stroke(e.fslope() * 2.5);
	Lines.poly(e.x, e.y, 6, 4 * e.fout() + 16);
	const d = new Floatc2({get(x, y){
		Lines.poly(e.x + x, e.y + y, 6, 4 * e.fout() + 4);
	}})
	Angles.randLenVectors(e.id, 2, 32 * e.fin(), 0, 360,d);
});
const sh = extend(BasicBulletType,{
	update(b){
		const realRange = shieldRange * b.fout();
		Groups.bullet.intersect(b.x - realRange, b.y - realRange, realRange * 2, realRange * 2, cons(trait =>{
			if(trait.type.absorbable && trait.team != b.team && Intersector.isInsideHexagon(trait.getX(), trait.getY(), realRange, b.x, b.y) ){
				trait.absorb();
				shieldDefense.at(trait);
			}
        }));
	},
	init(b){
		if(b == null)return;
		eff1.at(b.x, b.y, b.fout(), effectColor);
	},
	draw(b){
		Draw.color(effectColor);
		Lines.stroke(b.fout() * 3); 
		Lines.poly(b.x, b.y, 6, (shieldRange * 0.525) * b.fout() * b.fout());
		Draw.alpha(b.fout() * b.fout() * 0.3);
		Fill.poly(b.x, b.y, 6, (shieldRange * 0.525) * b.fout() * b.fout());
	}
});
sh.damage = 0;
sh.speed = 0;
sh.lifetime = 90;
sh.despawnEffect = Fx.none;
///small
const shS = extend(BasicBulletType, {
    update(b){
        if(b.timer.get(Mathf.random(30,90))){
            Lightning.create(b.team, effectColor, 30, b.x, b.y, b.rotation(), 15);
        }
    },
    despawned(b){
        sh.create(b, b.x, b.y, b.rotation(), 0 ,0.5);
    }
});
shS.damage = 30;
shS.speed = 2.5;
shS.lifetime = 100;
shS.shrinkY = 0;
shS.width = 8;
shS.height = 8;
shS.spin = 5;
shS.sprite = "fl-shsm";
///large
const shL = extend(BasicBulletType, {
    update(b){
        if(b.timer.get(Mathf.random(20,70))){
            Lightning.create(b.team, effectColor, 30, b.x, b.y, b.rotation(), 30);
        }
    },
    despawned(b){
        sh.create(b, b.x, b.y, b.rotation(), 0 ,1);
    }
});
shL.damage = 60;
shL.speed = 2.5;
shL.lifetime = 100;
shL.shrinkY = 0;
shL.width = 16;
shL.height = 16;
shL.spin = 5;
shL.sprite = "fl-shla";
bt.unshift(shS);
bt.unshift(shL);
///力墙相关
var alpha = 1;
const forceSh = extend(BasicBulletType,{
	update(b){
		const realRange = shieldRange * 1.66667;
		Groups.bullet.intersect(b.x - realRange, b.y - realRange, realRange * 2, realRange * 2, cons(trait =>{
			if(trait.type.absorbable && trait.team != b.team && Intersector.isInsideHexagon(trait.getX(), trait.getY(), realRange, b.x, b.y) ){
				trait.absorb();
				Fx.absorb.at(trait);
			}
        }));
        alpha = Math.max(alpha - Time.delta/10, 0);
	},
	init(b){
		if(b == null)return;
	},
	draw(b){
	    const radius = shieldRange * 0.8;
	    Draw.z(Layer.shields);

        Draw.color(b.team.color, Color.white, Mathf.clamp(alpha));

        if(Core.settings.getBool("animatedshields")){
            Fill.poly(b.x, b.y, 6, radius);
        }else{
            Lines.stroke(1.5);
            Draw.alpha(0.09);
            Fill.poly(b.x, b.y, 6, radius);
            Draw.alpha(1);
            Lines.poly(b.x, b.y, 6, radius);
        }
	},
	despawned(b){
	    const realRange = shieldRange * 0.8;
        Fx.shieldBreak.at(b.x, b.y,realRange , b.team.color);
    }
});
forceSh.damage = 0;
forceSh.speed = 0;
forceSh.lifetime = 110;
//forceSh.despawnEffect = Fx.none;
const forceB = extend(BasicBulletType, {
    despawned(b){
        Fx.breakBlock.at(b.x, b.y, 3);
    },
    drawLight(b){  }
});
forceB.damage = 1;
forceB.speed = 0;
forceB.width = 24;
forceB.height = 24;
forceB.pierce = true;
forceB.sprite = "fl-force";
forceB.lifetime = 110;
forceB.shrinkY = 0;
forceB.hitEffect = Fx.none;
const forceS = extend(ArtilleryBulletType, {
    draw(b){
        Draw.color(Color.valueOf("ffffff"));
        Draw.rect(this.backRegion, b.x, b.y, this.width, this.height, b.rotation());
        Draw.color(Color.valueOf("ffffff"));
        Draw.rect(this.frontRegion, b.x, b.y, this.width, this.height, b.rotation());

        Draw.reset();
    },
    drawLight(b){  },
    despawned(b){
        forceB.create(b, b.x, b.y, b.rotation(), 0 ,1);
        forceSh.create(b, b.x, b.y, b.rotation(), 0 ,1);
    }
});
forceS.damage = 1;
forceS.speed = 2.5;
forceS.width = 24;
forceS.height = 24;
forceS.sprite = "fl-force";
forceS.lifetime = 110;
forceS.shrinkY = 0;
bt.unshift(forceS);
//妙妙弹(真·最强远程子弹)
const ank = extend(ArtilleryBulletType, {
    despawned(b){
        
        for(var i = 0; i < this.fragBullets; i++){
            var len = Mathf.random(1, 7);
            var a = b.rotation() + Mathf.range(this.fragCone/2) + this.fragAngle;
            var v = 1 + Math.floor(Math.random() * (bt.length - 3));
            bt[v].create(b, b.x + Angles.trnsx(a, len), b.y + Angles.trnsy(a, len), a, Mathf.random(this.fragVelocityMin, this.fragVelocityMax), Mathf.random(this.fragLifeMin, this.fragLifeMax));
        }
    }
    //}
});
ank.damage = 1;
ank.speed = 10;
//ank.hitEffect = Fx.sapExplosion;
//ank.knockback = 0.8;
ank.lifetime = 20;
ank.backColor = Color.valueOf("ffffff");
ank.frontColor = c2;
ank.width = 2;
ank.height = 2;
ank.collidesTiles = true;
ank.collides = true;
ank.fragLifeMin = 0.3;
ank.fragBullets = 4;
//ank.fragBullet = null;
const mmd = extend(BasicBulletType, {
    update(b){
        if(b.timer.get(8)){
            var offset = b.rotation() + (this.spin != 0 ? (Mathf.randomSeed(b.id, 360) + b.time * this.spin) + this.spin : 0);
            var v = 1 + Math.floor(Math.random() * (bt.length - 3));
            bt[v].create(b, b.x, b.y, offset, 1, 1);
        }
    }
});
mmd.damage = 50;
mmd.speed = 2.5;
mmd.sprite = "fl-mmp";
mmd.hitEffect = Fx.sapExplosion;
mmd.knockback = 0.8;
mmd.lifetime = 140;
mmd.width = 16;
mmd.height = 16;
mmd.backColor = Color.valueOf("ff0000");
mmd.frontColor = Color.white;
mmd.spin = 6;
mmd.shrinkY = 0;
mmd.collidesTiles = true;
mmd.collides = true;
mmd.fragLifeMin = 0.3;
mmd.fragBullets = 5;
mmd.fragBullet = ank;

bt.unshift(mmd);
bt.unshift(foreshadow);
///
exports.allBulletType = bt;
exports.mmd = mmd;
///unit
/*var units = Vars.content.getBy(ContentType.unit);
export.allUnitType = units;*/
///item
/*var items = Vars.content.getBy(ContentType.item);
export.allItemType = items;*/
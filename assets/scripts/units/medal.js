const SB = extend(BombBulletType, {});
SB.amage = 0;
SB.speed = 0;
SB.hitEffect = Fx.pulverize;
SB.lifetime = 10;
SB.speed = 10;
SB.splashDamageRadius = 120;
SB.instantDisappear = true;
SB.splashDamage = 0;
SB.killShooter = true;
SB.hittable = false;
SB.collidesAir = true;
const sss = CTItem;
const dropStack = new ItemStack(sss.medal1, 1);
const dropStack1 = new ItemStack(sss.medal2, 1);
const medalSilver = extend(UnitType, "medal-silver", {})//银牌
//medalSilver.aiController = prov(() => new SuicideAI()); 
medalSilver.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {
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
medalSilver.speed = 3;
medalSilver.accel = 0.08;
medalSilver.drag = 0.01;
medalSilver.flying = true;
medalSilver.health = 6;
medalSilver.engineOffset = 5.5;
medalSilver.range = 140;
medalSilver.targetAir = false;
//medalSilver.commandLimit = 4;
medalSilver.circleTarget = true;
medalSilver.hitSize = 13;
medalSilver.armor = 5;
medalSilver.weapons.add(
    (() => {
        const w = new Weapon("");
        w.shootOnDeath = true
        w.reload = 60;
        w.shootCone = 180;
        w.ejectEffect = Fx.none;
        w.shootSound = Sounds.explosion;
        w.x = 0;
        w.shootY = 0;
        w.mirror = false;
        w.bullet = SB;
        return w;
    })()
);
exports.medalSilver = medalSilver;


const medalGold = extend(UnitType, "medal-gold", {})//银牌
//medalGold.aiController = prov(() => new SuicideAI()); 
medalGold.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {
	remove(){
		this.dropItem(Vars.player.team());
		this.super$remove();
	},
	dropItem(team){
		let dropTo = team.core();
		if(dropTo != null){
			let item = dropStack1.item, amount = dropStack1.amount;
			dropTo.items.add(item, amount);
			Fx.itemTransfer.at(this.x, this.y, amount, item.color, dropTo);
		}
	},
}));
medalGold.speed = 3;
medalGold.accel = 0.08;
medalGold.drag = 0.01;
medalGold.flying = true;
medalGold.health = 8;
medalGold.engineOffset = 5.5;
medalGold.range = 140;
medalGold.targetAir = false;
//medalGold.commandLimit = 4;
medalGold.circleTarget = true;
medalGold.hitSize = 13;
medalGold.armor = 5;
medalGold.weapons.add(
    (() => {
        const w = new Weapon("");
        w.shootOnDeath = true
        w.reload = 60;
        w.shootCone = 180;
        w.ejectEffect = Fx.none;
        w.shootSound = Sounds.explosion;
        w.x = 0;
        w.shootY = 0;
        w.mirror = false;
        w.bullet = SB;
        return w;
    })()
);
exports.medalGold = medalGold;
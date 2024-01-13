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
medalSilver.hidden = true;//UI隐藏显示
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
medalGold.hidden = true;//UI隐藏显示
exports.medalGold = medalGold;


var dropStack3 = new ItemStack(sss.yuanshencanpian, 1);
const canpianX = extend(UnitType, "canpianX", {})//残片
//canpianX.aiController = prov(() => new SuicideAI()); 
canpianX.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {
	remove(){
		this.dropItem(Vars.player.team());
		this.super$remove();
	},
	dropItem(team){
		let dropTo = team.core();
		if(dropTo != null){
			let item = dropStack3.item, amount = dropStack3.amount;
			dropTo.items.add(item, amount);
			Fx.itemTransfer.at(this.x, this.y, amount, item.color, dropTo);
		}
	},
}));
canpianX.speed = 3;
canpianX.accel = 0.08;
canpianX.drag = 0.01;
canpianX.flying = true;
canpianX.health = 8;
canpianX.engineOffset = 5.5;
canpianX.range = 140;
canpianX.targetAir = false;
//canpianX.commandLimit = 4;
canpianX.circleTarget = true;
canpianX.hitSize = 13;
canpianX.armor = 5;
canpianX.weapons.add(
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
canpianX.hidden = true;//UI隐藏显示
exports.canpianX = canpianX;


var mieshiItem = new ItemStack(sss.mieshishenhun, 1);
const mieshiX = extend(UnitType, "mieshiX", {})//灭世神魂
//mieshiX.aiController = prov(() => new SuicideAI()); 
mieshiX.constructor = prov(() => extend(UnitTypes.eclipse.constructor.get().class, {
	remove(){
		this.dropItem(Vars.player.team());
		this.super$remove();
	},
	dropItem(team){
		let dropTo = team.core();
		if(dropTo != null){
			let item = mieshiItem.item, amount = mieshiItem.amount;
			dropTo.items.add(item, amount);
			Fx.itemTransfer.at(this.x, this.y, amount, item.color, dropTo);
		}
	},
}));
mieshiX.hidden = true;//UI隐藏显示
mieshiX.speed = 3;
mieshiX.accel = 0.08;
mieshiX.drag = 0.01;
mieshiX.flying = true;
mieshiX.health = 1;
mieshiX.engineOffset = 5.5;
mieshiX.range = 140;
mieshiX.targetAir = false;
//mieshiX.commandLimit = 4;
mieshiX.circleTarget = true;
mieshiX.hitSize = 13;
mieshiX.armor = 0;
mieshiX.weapons.add(
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
exports.mieshiX = mieshiX;
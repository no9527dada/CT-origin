


// Events.run(Trigger.draw, () => {
// 	rotation = (rotation + 1.5) % 360;
// 	obitRotate = (obitRotate + 1) % 360;

// 	let v = Tmp.v1.set(1, 1).setLength(Vars.player.unit().hitSize + Vars.tilesize).rotate(obitRotate);

// 	Draw.rect(Items.copper.uiIcon, Vars.player.x + v.x, Vars.player.y + v.y, rotation);
// });


var rotation = 0;//自转起始位置
var obitRotate = 0;//公转起始位置

var rotation2 = 0;
var obitRotate2 = 90;

var rotation3 = 0;
var obitRotate3 = 180;

var rotation4 = 0;
var obitRotate4 = 270;

var rotation5 = 0;
var obitRotate5 = 0;

var rotation6 = 0;
var obitRotate6 = 90;

var rotation7 = 0;
var obitRotate7 = 180;

var rotation8 = 0;
var obitRotate8 = 270;

const z1111 = extend(UnitType, "YunLuo", {
    draw(unit) {
        this.super$draw(unit);

        obitRotate = (obitRotate - 0.5) % 360;
         rotation = (rotation + 1) % 360;
         let v = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1).rotate(obitRotate);
         Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v.x, unit.y + v.y, rotation);

         obitRotate2 = (obitRotate2 - 0.5) % 360;
         rotation2 = (rotation2 + 1) % 360;
         let v2 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1).rotate(obitRotate2);
         Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v2.x, unit.y + v2.y, rotation2);

         obitRotate3 = (obitRotate3 - 0.5) % 360;
         rotation3 = (rotation3 + 1) % 360;
         let v3 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1).rotate(obitRotate3);
         Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v3.x, unit.y + v3.y, rotation3);

         obitRotate4 = (obitRotate4 - 0.5) % 360;
         rotation4 = (rotation4 + 1) % 360;
         let v4 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1).rotate(obitRotate4);
         Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v4.x, unit.y + v4.y, rotation4);

        obitRotate5 = (obitRotate5 + 0.5) % 360;
        rotation5 = (rotation5 + 1) % 360;
        let v5 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate5);
        Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v5.x, unit.y + v5.y, rotation5);

        obitRotate6 = (obitRotate6 + 0.5) % 360;
        rotation6 = (rotation6 + 1) % 360;
        let v6 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate6);
        Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v6.x, unit.y + v6.y, rotation6);

        obitRotate7 = (obitRotate7 + 0.5) % 360;
        rotation7 = (rotation7 + 1) % 360;
        let v7 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate7);
        Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v7.x, unit.y + v7.y, rotation7);
        
        obitRotate8 = (obitRotate8 + 0.5) % 360;
        rotation8 = (rotation8 + 1) % 360;
        let v8 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate8);
        Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v8.x, unit.y + v8.y, rotation8);
    }
})
/* 
//对角来回转
obitRotate6 = (obitRotate6 + 0.5) % 360;
rotation6 = (rotation6 + 1) % 360;
let v6 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate6);
Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v6.y, unit.y + v6.y, rotation6);

obitRotate7 = (obitRotate7 + 0.5) % 360;
rotation7 = (rotation7 + 1) % 360;
let v7 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate7);
Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v7.y, unit.y + v7.y, rotation7);

obitRotate8 = (obitRotate8 + 0.5) % 360;
rotation8 = (rotation8 + 1) % 360;
let v8 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 1.4).rotate(obitRotate8);
Draw.rect(Core.atlas.find("creators-YunLuo-1"), unit.x + v8.y, unit.y + v8.y, rotation8); */

z1111.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
z1111.speed = 5;
z1111.accel = 0.08;
z1111.drag = 0.01;
z1111.flying = true;
z1111.health = 100000;

z1111.engineSize=8
z1111.engineOffset = 37;
z1111.range = 140;
z1111.targetAir = false;
//z1111.commandLimit = 4;
z1111.circleTarget = true;
z1111.lowAltitude = true
z1111.hitSize = 50;
z1111.armor = 5000;
z1111.createWreck = false;
z1111.ammoType = new ItemAmmoType(Items.coal);
z1111.targetFlags = [BlockFlag.core];
z1111.weapons.add(
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
        w.bullet = (
            (() => {
                const v = new BombBulletType(0, 0, "clear");
                v.hitEffect = Fx.pulverize;
                v.lifetime = 10;
                v.speed = 0.1;
                v.splashDamageRadius = 55;
                v.instantDisappear = true;
                v.splashDamage = 6000;
                v.killShooter = true;
                v.hittable = false;
                v.collidesAir = true;
                //v.despawnEffect = Fx.greenBomb
                v.collidesTiles = false;
                v.shrinkY = 0.7;
                v.drag = 0.05;
                v.keepVelocity = false;
                v.hitSound = Sounds.explosion;
                v.collidesAir = true;
                v.status = StatusEffects.burning;
                return v;
            })()
        ); 
        return w;
    })()
);
exports.YunLuo = z1111

/* 
var rotation = 0;
var obitRotate = 0;
var rotation2 = 0;
var obitRotate2 = 90;
var rotation3 = 0;
var obitRotate3 = 180;

var rotation4 = 0;
var obitRotate4 = 270;

var rotation5 = 0;
var obitRotate5 = 270;

var rotation6 = 0;
var obitRotate6 = 270;

var rotation7 = 0;
var obitRotate7 = 270;


const z1111 = extend(UnitType, "YunLuo", {
    draw(unit) {
        this.super$draw(unit);
    	
        obitRotate = (obitRotate + 0.8) % 360;
        rotation = (rotation + 1) % 360;
        let v = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 4).rotate(obitRotate);
        Draw.rect(Items.copper.fullIcon, unit.x + v.x, unit.y + v.y, rotation);

        obitRotate2 = (obitRotate2 + 0.5) % 360;
        rotation2 = (rotation2 + 1) % 360;
        let v2 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 5).rotate(obitRotate2);
        Draw.rect(Items.lead.fullIcon, unit.x + v.x + v2.x, unit.y + v.y + v2.y, rotation2);

        obitRotate3 = (obitRotate3 - 0.7) % 360;
        rotation3 = (rotation3 - 0.9) % 360;
        let v3 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 6).rotate(obitRotate3);
        Draw.rect(Items.metaglass.fullIcon, unit.x + v.x + v3.x, unit.y + v.y + v3.y, rotation3);

        obitRotate4 = (obitRotate4 + 2) % 360;
        rotation4 = (rotation4 + 1) % 360;
        let v4 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 3).rotate(obitRotate4);
        Draw.rect(Items.graphite.fullIcon, unit.x + v4.x, unit.y + v4.y, rotation4);

        obitRotate5 = (obitRotate5 + 1) % 360;
        rotation5 = (rotation5 + 0.8) % 360;
        let v5 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 4).rotate(obitRotate5);
        Draw.rect(Items.thorium.fullIcon, unit.x + v5.x, unit.y + v5.y, rotation4);

        obitRotate6 = (obitRotate6 + 0.5) % 360;
        rotation6 = (rotation6 + 0.5) % 360;
        let v6 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 5).rotate(obitRotate6);
        Draw.rect(Items.surgeAlloy.fullIcon, v6.x, v6.y, rotation4);

        obitRotate7 = (obitRotate7 + 0.1) % 360;
        rotation7 = (rotation7 + 0.1) % 360;
        let v7 = Tmp.v1.set(1, 1).setLength(unit.hitSize + Vars.tilesize * 6).rotate(obitRotate7);
        Draw.rect(Items.titanium.fullIcon, v7.x, v7.y, rotation4);
   }
})
z1111.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
z1111.speed = 5;
z1111.accel = 0.08;
z1111.drag = 0.01;
z1111.flying = true;
z1111.health = 100000;
 */
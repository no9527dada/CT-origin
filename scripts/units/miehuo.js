//灭火单位相关代码由<guiY>提供，感谢！！
const lib = require('lib');
const AI = require("all/unitAI");
const SD = lib.loadSound("shuidan");
const bubble = extend(LiquidBulletType, {});
bubble.liquid = Liquids.water;
bubble.status = StatusEffects.wet;
bubble.lightColor = Pal.sap;
bubble.lightOpacity = Pal.sap;
bubble.damage = 1;
bubble.knockback = 1.2;
bubble.puddleSize = 9;
bubble.orbSize = 5;
bubble.lifetime = 18;
bubble.speed = 3.5;
bubble.shootEffect = Fx.shootLiquid;

const fireDefense = new BombBulletType(5, 25);
fireDefense.hitSound = SD;
Object.assign(fireDefense, {
    backColor: Pal.sap,
    frontColor: Pal.sap,
    width: 16,
    height: 24,
    hitEffect: Fx.none,
    despawnEffect: Fx.none,
    shootEffect: Fx.none,
    smokeEffect: Fx.none,
    fragBullet: bubble,
    fragBullets: 30,
    collidesAir: true,
    status: StatusEffects.wet,
});

const moth = new UnitType("miehuo");
moth.constructor = prov(() => extend(UnitTypes.zenith.constructor.get().class, {}));
moth.defaultController = prov(() => AI.Firefighter9527(160, 310, Time.toSeconds * 3));
moth.weapons.add(
    (() => {
        const w = new Weapon("");
        w.x = 0;
        w.y = -1;
        w.shootY = 0;
        w.reload = 60;//装填
        w.rotate = true;
        w.bullet = fireDefense;
        w.shootSound = Sounds.sap;
        return w;
    })()
);
moth.armor = 2;
moth.flying = true;
moth.hitSize = 13;
moth.speed = 2;
moth.accel = 0.04;
moth.drag = 0.016;
moth.health = 1100;
moth.mineSpeed = 3;
moth.mineTier = 2;
moth.buildSpeed = 0.5;
moth.itemCapacity = 60;
moth.engineOffset = 7.3;
moth.engineSize = 3.4;
moth.rotateShooting = false;
moth.ammoType = new PowerAmmoType(500);
moth.commandLimit = 6;
exports.miehuo = moth;
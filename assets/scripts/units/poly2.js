
const lib = require("lib");
/*
w.bullet = Object.assign(new BulletType(), {
    maxRange: 120,
    bullet: Object.assign(new BulletType(), {
        maxRange: 120,
        bullet: Object.assign(new BulletType(), {
            maxRange: 120,
        })
    })
})
*/
exports.poly2 = (
    (() => {
        const a = new UnitType('poly2');
       // a.controller = u => new BuilderAI();
        a.defaultCommand = UnitCommand.rebuildCommand;
        a.flying = true;
        a.drag = 0.05;
        a.speed = 6;
        a.rotateSpeed = 15;
        a.accel = 0.1;
        a.health = 1300;
        a.buildSpeed = 1;
        a.engineOffset = 6.5;
        a.buildRange = 32 * 8//默认建造距离27.5格
        a.hitSize = 9;
        a.armor = 150;
        //a.logicControllable = false//逻辑器无法控制单位
        a.playerControllable = true//玩家无法操控
        a.canAttack = false//关闭单位的武器,功能性单位
        a.lowAltitude = true;
        // a.hittable = false;
        a.targetable = false;
        a.itemCapacity = 0;
        a.abilities.add(new RepairFieldAbility(5, 60 * 2, 50));
        a.constructor = prov(() => extend(UnitTypes.poly.constructor.get().class, {}));
        return a;
    })())

exports.mega2 = (
    (() => {
        const a = new UnitType('mega2');
       // a.controller = u => new RepairAI();
        a.      defaultCommand = UnitCommand.repairCommand;
        a.health = 1700;
        a.armor = 220;
        a.speed = 2.5;
        a.accel = 0.06;
        a.drag = 0.017;
        a.lowAltitude = true;//低海拔
        a.flying = true;
        // a.logicControllable = false//逻辑器无法控制单位
        a.playerControllable = true//玩家无法操控
        a.canAttack = false//关闭单位的武器,功能性单位
        a.engineOffset = 10.5;
        //a.rotateShooting = false;
        a.hitSize = 16.05;
        a.engineSize = 3;
        a.itemCapacity = 0;
        //  a.hittable = false;
        a.targetable = false;
        a.payloadCapacity = 0
        //a.isCounted = false;
        a.weapons.add(//
            (() => {
                const b = new Weapon("heal-weapon-mount");
                b.shootSound = Sounds.lasershoot;
                b.reload = 20;
                b.x = 8;
                b.y = -6;
                b.rotate = true;
                b.bullet = (
                    (() => {
                        const a = new JavaAdapter(LaserBoltBulletType, {});
                        a.speed = 5.2
                        a.damage = 0
                        a.lifetime = 70;
                        a.healPercent = 6.2;
                        a.collidesTeam = true;
                        a.backColor = Pal.heal;
                        a.frontColor = Color.white;
                        return a;
                    })())
                return b;
            })())
        a.weapons.add(//
            (() => {
                const b = new Weapon("heal-weapon-mount");
                b.shootSound = Sounds.lasershoot;
                b.reload = 20;
                b.x = 4;
                b.y = 5;
                b.rotate = true;
                b.bullet = (
                    (() => {
                        const a = new JavaAdapter(LaserBoltBulletType, {});
                        a.speed = 5.2
                        a.damage = 0
                        a.lifetime = 70;
                        a.healPercent = 6.2;
                        a.collidesTeam = true;
                        a.backColor = Pal.heal;
                        a.frontColor = Color.white;
                        return a;
                    })())
                return b;
            })())
        a.ammoType = new PowerAmmoType(100);
        a.abilities.add(new RepairFieldAbility(5, 60 * 8, 50));
        a.constructor = prov(() => extend(UnitTypes.mega.constructor.get().class, {}));
        return a;
    })())



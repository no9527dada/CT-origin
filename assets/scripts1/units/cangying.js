
exports.cangying1 =
    (() => {
        const a = new UnitType('cangying1');
        a.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
        a.speed = 4;
        a.accel = 0.08;
        a.drag = 0.01;
        a.flying = true;
        a.health = 3200;
        a.engineOffset = 5.5;
        //a.range = 3200;
        a.targetAir = false;
        a.targetFlags = [BlockFlag.turret, BlockFlag.storage]
        //a.commandLimit = 4;
        a.circleTarget = true;
        a.hitSize = 7;
        a.weapons.add(
            (() => {
                const b = new Weapon('');
                b.shootSound = Sounds.pew;
                b.y = 0;
                b.x = 2;
                b.reload = 13;
                b.ejectEffect = Fx.casing1;
                b.bullet = (() => {
                    const c = new BasicBulletType();
                    c.speed = 2.5;
                    c.damage = 45;
                    c.width = 7;
                    c.height = 9;
                    c.lifetime = 45;
                    c.shootEffect = Fx.shootSmall;
                    c.smokeEffect = Fx.shootSmallSmoke;
                    c.ammoMultiplier = 2;
                    return c;
                })()
                return b;
            })()
        )
        return a;
    })()

exports.cangying2 =
    (() => {
        const a = new UnitType('cangying2');
        a.constructor = prov(() => extend(UnitTypes.flare.constructor.get().class, {}));
        a.speed = 4;
        a.accel = 0.08;
        a.drag = 0.01;
        a.flying = true;
        a.health = 15000;
        a.engineSize = 4;
        a.engineOffset = 9.5;
        //a.range = 15000;
        a.targetAir = false;
        a.targetFlags = [BlockFlag.turret]
        //a.commandLimit = 4;
        a.circleTarget = true;
        a.hitSize = 7;
        a.weapons.add(
            (() => {
                const b = new Weapon('');
                b.shootSound = Sounds.pew;
                b.y = 0;
                b.x = 2;
                b.reload = 13;
                b.ejectEffect = Fx.casing1;
                b.bullet = (() => {
                    const c = new BasicBulletType();
                    c.speed = 2.5;
                    c.damage = 45;
                    c.width = 7;
                    c.height = 9;
                    c.lifetime = 45;
                    c.shootEffect = Fx.shootSmall;
                    c.smokeEffect = Fx.shootSmallSmoke;
                    c.ammoMultiplier = 2;
                    return c;
                })()
                return b;
            })()
        )
        return a;
    })()
exports.wenzi1 =
    (() => {
        const a = new UnitType('wenzi1');
        a.constructor = prov(() => extend(UnitTypes.horizon.constructor.get().class, {}));
        a.health = 2200;
        a.speed = 2.65;
        a.accel = 0.08;
        a.drag = 0.016;
        a.flying = true;
        a.hitSize = 9;
        a.targetAir = false;
        a.engineOffset = 6.5;
        a.range = 140;
        a.faceTarget = false;
        a.armor = 3;
        a.targetFlags = [BlockFlag.battery, BlockFlag.factory, BlockFlag.launchPad];
        //a.commandLimit = 5;
        a.circleTarget = true;
        a.ammoType = new ItemAmmoType(Items.graphite);
        a.weapons.add(
            (() => {
                const b = new Weapon('');
                b.minShootVelocity = 0.75;
                b.x = 3;
                b.shootY = 0;
                b.reload = 12;
                b.shootCone = 180;
                b.ejectEffect = Fx.none;
                b.inaccuracy = 15;
                b.ignoreRotation = true;
                b.shootSound = Sounds.none;
                b.bullet = (() => {
                    const c = new BombBulletType();
                    c.splashDamage = 5;
                    c.splashDamageRadius = 2 * 8;
                    c.width = 10;
                    c.height = 14;
                    c.hitEffect = Fx.flakExplosion;
                    c.shootEffect = Fx.none;
                    c.smokeEffect = Fx.none;
                    c.status = StatusEffects.blasted;
                    c.statusDuration = 60;
                    return c;
                })()
                return b;
            })())
        return a;
    })()

exports.wenzi2 =
    (() => {
        const a = new UnitType('wenzi2');
        a.constructor = prov(() => extend(UnitTypes.horizon.constructor.get().class, {}));
        a.health = 7500;
        a.range = 111;
        a.speed = 2.65;
        a.accel = 0.08;
        a.drag = 0.016;
        a.flying = true;
        a.hitSize = 9;
        a.targetAir = false;
        a.engineSize = 4;
        a.engineOffset = 9.8;
        a.range = 140;
        a.faceTarget = false;
        a.armor = 3;
        a.targetFlags = [BlockFlag.battery, BlockFlag.factory, BlockFlag.launchPad];
        //a.commandLimit = 5;
        a.circleTarget = true;
        a.ammoType = new ItemAmmoType(Items.graphite);
        a.weapons.add(
            (() => {
                const b = new Weapon('');
                b.minShootVelocity = 0.75;
                b.x = 3;
                b.shootY = 0;
                b.reload = 12;
                b.shootCone = 180;
                b.ejectEffect = Fx.none;
                b.inaccuracy = 15;
                b.ignoreRotation = true;
                b.shootSound = Sounds.none;
                b.bullet = (() => {
                    const c = new BombBulletType();

                    c.splashDamage = 5;
                    c.splashDamageRadius = 2 * 8;
                    c.width = 10;
                    c.height = 14;
                    c.hitEffect = Fx.flakExplosion;
                    c.shootEffect = Fx.none;
                    c.smokeEffect = Fx.none;
                    c.status = StatusEffects.burning;
                    c.statusDuration = 60;
                    return c;
                })()
                return b;
            })())
        return a;
    })()

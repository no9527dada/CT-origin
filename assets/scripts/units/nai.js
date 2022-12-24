const status = require("Status");
const lib = require("lib");
const F = require("all/kuangjiAI");
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


//const a =  extend(UnitType, "nai1",{});
exports.nai1 =
    (() => {
        const a = new UnitType('nai1');
        a.aiController = prov(() => new DefenderAI());
        a.speed = 0.8;
        a.drag = 0.4;
        a.hitSize = 6;
        a.rotateSpeed = 3;
        a.flying = true;
        a.targetAir = false;
        a.payloadCapacity = (99 * 99) * Vars.tilePayload;
        a.health = 2000;
        a.legCount = 2;
        a.legLength = 3;
        a.legForwardScl = 0.6;
        a.legMoveSpace = 1.4;
        a.hovering = true;
        a.armor = 3;
        a.ammoType = new ItemAmmoType(Items.coal);
        a.constructor = prov(() => extend(UnitTypes.dagger.constructor.get().class, {}));
        a.immunities.add(status.suanEffect);
        a.shadowElevation = 0.2;
        a.abilities.add(
            (() => {
                const w = new RepairFieldAbility(200, 30, 0.1 * 8)//(amount, reload, range)给自己(oct那种治疗)
                w.healEffect = Fx.none;
                w.activeEffect = Fx.none;
                w.parentizeEffects = true;
                return w;
            })()
        );
        a.weapons.add(
            (() => {
                const w = new RepairBeamWeapon("");
                w.x = 0;
                w.y = 0;
                w.beamWidth = 0.5;
                w.repairSpeed = 10;
                w.pulseStroke = 2
                w.pulseRadius = 6
                w.laserColor = F.c("6878ff");
                w.bullet = (() => {
                    const b = new BulletType();
                    b.maxRange = 200;
                    return b;
                })();
                return w;
            })()
        );
        return a;
    })()

//  a.immunities.ObjectSet.with(status.suanEffect,status.suanEffect);
exports.nai2 =
    (() => {
        const a = new UnitType('nai2');
        a.aiController = prov(() => new DefenderAI());
        a.speed = 0.7;
        a.drag = 0.4;
        a.hitSize = 10;
        a.flying = true;
        a.rotateSpeed = 3;
        a.targetAir = false;
        a.payloadCapacity = (99 * 99) * Vars.tilePayload;
        a.health = 5000;
        a.legCount = 3;//脚
        a.legLength = 5;
        a.legForwardScl = 0.6;
        a.legMoveSpace = 1.4;
        a.hovering = true;
        a.armor = 3;
        a.ammoType = new ItemAmmoType(Items.coal);
        a.shadowElevation = 0.2;
        a.constructor = prov(() => extend(UnitTypes.dagger.constructor.get().class, {}));
        a.immunities = ObjectSet.with(status.suanEffect,);
        a.abilities.add(
            (() => {
                const w = new RepairFieldAbility(220, 30, 0.1 * 8)//(amount, reload, range)给自己(oct那种治疗)
                w.healEffect = Fx.none;
                w.activeEffect = Fx.none;
                w.parentizeEffects = true;
                return w;
            })()
        );
        a.abilities.add(
            (() => {
                const w = new RepairFieldAbility(1000, 2.5 * 60, 10 * 8)//(amount, reload, range)给别单位(oct那种治疗)
                w.healEffect = new Effect(50, e => {
                    Draw.color(F.c("6878ff"));
                    Lines.stroke(e.fout() * 2);
                    Lines.circle(e.x, e.y, 5 + e.finpow() * 7);
                });
                w.activeEffect = new Effect(22, e => {
                    Draw.color(F.c("6878ff"));
                    Lines.stroke(e.fout() * 10);
                    Lines.circle(e.x, e.y, 4 + e.finpow() * e.rotation);
                });
                w.parentizeEffects = false;
                return w;
            })()
        );
        return a;
    })();
//奶3：:有2种治疗，有挡子弹武器，攻击频低一点，没有闪电治疗闪
exports.nai3 =
    (() => {
        const a = new UnitType('nai3');
        a.aiController = prov(() => new DefenderAI());
        a.speed = 0.7;
        a.drag = 0.4;
        a.hitSize = 15;
        a.flying = true;
        a.rotateSpeed = 3;
        a.targetAir = false;
        a.payloadCapacity = (99 * 99) * Vars.tilePayload;
        a.health = 12000;
        a.legCount = 4;//脚
        a.legLength = 5;
        a.legForwardScl = 3.6;
        a.legMoveSpace = 1;
        a.legPairOffset = 3;
        a.legExtension = -10;
        a.legBaseOffset = 12
        a.mechLandShake = 1;
        a.legLengthScl = 0.93;
        a.legSpeed = 1.1;
        a.legSplashDamage = 40;
        a.legSplashRange = 24;
        a.groundLayer = Layer.legUnit;
        a.hovering = true;
        a.armor = 3;
        a.ammoType = new ItemAmmoType(Items.coal);
        a.shadowElevation = 0.2;
        a.constructor = prov(() => extend(UnitTypes.dagger.constructor.get().class, {}));
        a.immunities = ObjectSet.with(status.suanEffect,);
        a.abilities.add(
            (() => {
                const w = new RepairFieldAbility(800, 60, 0.1 * 8)//(amount, reload, range)给自己(oct那种治疗)
                w.healEffect = Fx.none;
                w.activeEffect = Fx.none;
                w.parentizeEffects = true;
                return w;
            })()
        );
        a.abilities.add(
            (() => {
                const w = new RepairFieldAbility(5000, 2.5 * 60, 15 * 8)//(amount, reload, range)给别单位(oct那种治疗)
                w.healEffect = new Effect(50, e => {
                    Draw.color(F.c("6878ff"));
                    Lines.stroke(e.fout() * 2);
                    Lines.circle(e.x, e.y, 5 + e.finpow() * 7);
                });
                w.activeEffect = new Effect(22, e => {
                    Draw.color(F.c("6878ff"));
                    Lines.stroke(e.fout() * 10);
                    Lines.circle(e.x, e.y, 4 + e.finpow() * e.rotation);
                });
                w.parentizeEffects = false;
                return w;
            })()
        );
        a.weapons.add(//激光修复
            (() => {
                const w = new RepairBeamWeapon("");
                w.x = 0;
                w.mirror = true;
                w.y = 0;
                w.beamWidth = 0.5;
                w.repairSpeed = 8;
                w.pulseStroke = 2
                w.pulseRadius = 6
                w.laserColor = F.c("6878ff");
                w.bullet = (() => {
                    const b = new BulletType();
                    b.maxRange = 200;
                    return b;
                })();
                return w;
            })()
        );
        a.weapons.add(//激光点防
            (() => {
                const w = new PointDefenseWeapon("point-defense-mount")
                w.mirror = true;
                w.x = 0;
                w.y = 1;
                w.reload = 9;
                w.targetInterval = 10;
                w.targetSwitchInterval = 15;
                w.bullet = (() => {
                    const b = new BulletType()
                    b.shootEffect = Fx.sparkShoot;
                    b.hitEffect = Fx.pointHit;
                    b.maxRange = 100;
                    b.damage = 55;
                    return b;
                })();
                return w;
            })()
        );
        a.weapons.add(
            (() => {
                const w = new Weapon("plasma-mount-weapon");
                w.x = 4.5;
                w.y = 6.5;
                w.controllable = false//玩家不能附身控制
                w.autoTarget = true//被动开火
                w.rotate = true;
                w.rotateSpeed = 5;
                w.inaccuracy = 10;
                w.reload = 1 * 60;//射速
                w.ejectEffect = Fx.casing1;
                w.shootSound = Sounds.flame;
                w.shootCone = 30;
                w.bullet = (
                    (() => {
                        const b = new BulletType(3.4, 23)
                        b.speed = 3.4
                        b.buildingDamageMultiplier = 0.01
                        b.damage = 23
                        b.healPercent = 1.5;
                        b.collidesTeam = true;
                        b.ammoMultiplier = 3;
                        b.hitSize = 7;
                        b.lifetime = 18;
                        b.pierce = true;
                        b.collidesAir = false;
                        b.statusDuration = 60 * 4;
                        b.hitEffect = Fx.hitFlamePlasma;
                        //b.ejectEffect = Fx.none;
                        b.despawnEffect = Fx.none;
                        b.status = StatusEffects.burning;
                        b.keepVelocity = false;
                        b.hittable = false;
                        b.shootEffect = new Effect(32, 80, e => {
                            Draw.color(Color.white, F.c("6878ff"), Color.gray, e.fin());
                            Angles.randLenVectors(e.id, 8, e.finpow() * 60, e.rotation, 10, (x, y) => {
                                Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
                                Drawf.light(e.x + x, e.y + y, 16 * e.fout(), F.c("6878ff"), 0.6);
                            });
                        });
                        return b;
                    })()
                )
                return w;
            })()
        );
        return a;
    })();
//奶4：有挡子弹武器，有闪电治疗，电治高一些，但范围小 5左右格，有波治疗 范围大一些，治疗低一点，有激光治疗 治疗适中
const dropStack = new ItemStack(Items.copper, 60,);
exports.nai4 =
    (() => {
        const a = extend(UnitType, "nai4", {});
        a.aiController = prov(() => new DefenderAI());
        a.speed = 0.6;
        a.drag = 0.4;
        a.hitSize = 22;
        a.flying = true;
        a.rotateSpeed = 3;
        a.targetAir = false;
        a.payloadCapacity = (99 * 99) * Vars.tilePayload;
        a.health = 48000;
        a.legCount = 6;//脚

        a.legMoveSpace = 1;
        a.legPairOffset = 3;
        a.legLength = 13;
        a.legExtension = -15;
        a.legBaseOffset = 10;
        a.mechLandShake = 1;
        a.legLengthScl = 0.96;
        a.rippleScale = 2;
        a.legSpeed = 0.2;
        a.ammoType = new PowerAmmoType(2000);
        a.buildSpeed = 1;
        a.legSplashDamage = 32;
        a.legSplashRange = 30;
        a.drownTimeMultiplier = 2;
        a.hovering = true;
        a.shadowElevation = 0.65;
        a.groundLayer = Layer.legUnit;

        a.hovering = true;
        a.armor = 3;
        a.ammoType = new ItemAmmoType(Items.coal);
        a.shadowElevation = 0.2;
        a.constructor = prov(() => extend(UnitTypes.dagger.constructor.get().class, {
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
        a.immunities = ObjectSet.with(status.suanEffect,);
        a.abilities.add(
            (() => {
                const w = new RepairFieldAbility(800, 20, 0.1 * 8)//(amount, reload, range)给自己(oct那种治疗)
                w.healEffect = Fx.none;
                w.activeEffect = Fx.none;
                w.parentizeEffects = true;
                return w;
            })()
        );
        a.abilities.add(
            (() => {
                const w = new EnergyFieldAbility(4, 3 * 30, 17 * 8)//(damage, reload, range)给别的单位(龙王那种范围电弧的治疗)
                w.healEffect = Fx.heal;
                w.hitEffect = Fx.hitLaserBlast;
                w.damageEffect = Fx.chainLightning;
                //w.status = StatusEffects.electrified;
                // w.statusDuration = 60 * 6;
                w.targetGround = true
                w.targetAir = true
                w.hitBuildings = true
                w.hitUnits = true;
                w.maxTargets = 8 * 8;
                w.healPercent = 2;//治疗百分比
                w.layer = Layer.bullet - 0.001
                w.blinkScl = 20;
                w.effectRadius = 5
                w.sectorRad = 0.14
                w.rotateSpeed = 0.5;
                w.sectors = 5;
                w.color = F.c("6878ff")
                w.useAmmo = true;
                return w;
            })()
        );

        a.weapons.add(//激光修复
            (() => {
                const w = new RepairBeamWeapon("");
                w.mirror = true;
                w.x = 0;
                w.y = 0;
                w.beamWidth = 0.5;
                w.repairSpeed = 10;
                w.pulseStroke = 2
                w.pulseRadius = 6
                w.laserColor = F.c("6878ff");
                w.bullet = (() => {
                    const b = new BulletType();
                    b.maxRange = 200;
                    return b;
                })();
                return w;
            })()
        );
        a.weapons.add(//激光点防
            (() => {
                const w = new PointDefenseWeapon("point-defense-mount")
                w.mirror = true;
                w.x = 0;
                w.y = 1;
                w.reload = 9;
                w.targetInterval = 10;
                w.targetSwitchInterval = 15;
                w.bullet = (() => {
                    const b = new BulletType()
                    b.shootEffect = Fx.sparkShoot;
                    b.hitEffect = Fx.pointHit;
                    b.maxRange = 100;
                    b.damage = 55;
                    return b;
                })();
                return w;
            })()
        );

        a.weapons.add(
            (() => {
                const w = new Weapon("creators-nai4-1");
                w.shootCone = 15;
                w.mirror = false;//镜像
                w.alternate = false;
                w.shoot.shots = 1;
                w.controllable = false//玩家不能附身控制
                w.autoTarget = true//被动开火
                w.inaccuracy = 0;
                w.x = 0;
                w.y = 15;
                w.reload = 5 * 60;//射速
                w.recoil = 0.5;
                w.shootY = 8;
                w.rotate = true;
                w.rotateSpeed = 0.6;
                w.shootSound = Sounds.railgun;
                w.bullet = (() => {
                    const b = extend(RailBulletType, {});
                    b.buildingDamageMultiplier = 0.05
                    b.damage = 1500;
                    b.length = 90*8;
                    //b.ammoMultiplier = 3;
                    b.pierce = true;
                    b.pierceBuilding = true;
                    b.pierceDamageFactor = 0.1;
                    b.collidesAir = true;
                    b.collidesGround = true;
                    b.collidesTiles = true;
                    b.pointEffectSpace = 40;
                    b.pointEffect = (() => {
                        const c = new ParticleEffect()
                        c.region = "creators-wide1";
                        c.particles = 1;
                        c.length = 0;
                        c.sizeFrom = 20;
                        c.colorFrom = Color.valueOf("4b88f4FF");
                        c.colorTo = Color.valueOf("774ACFFF");
                        return c;
                    })();
                    b.pierceEffect = (() => {
                        const c = new WaveEffect();
                        c.lifetime = 35;
                        c.sizeFrom = 0;
                        c.sizeTo = 55;
                        c.strokeFrom = 4;
                        c.strokeTo = 0;
                        c.colorFrom = F.c("4b88f4FF");
                        c.colorTo = F.c("774ACFFF")
                        return c
                    })();
                    b.hitEffect = (() => {
                        const c = new WaveEffect();
                        c.sizeFrom = 0;
                        c.sizeTo = 55;
                        c.strokeFrom = 4;
                        c.strokeTo = 0;
                        c.colorFrom = F.c("4b88f4FF");
                        c.colorTo = F.c("774ACFFF")
                        return c
                    })();
                    b.shootEffect = Fx.railShoot;
                  //  b.pointEffectSpace = 60;
                    //b.pierceEffect = Fx.railHit;
                    //b.pointEffect = Fx.railTrail;
                   // b.hitEffect = Fx.massiveExplosion;
                    b.smokeEffect = Fx.shootBig2;
                    return b;
                })();
                return w;
            })()
        )
        return a;
    })();
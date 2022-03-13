
const lib = require('lib')
const { nulls } = require('wupin');
//--------------------------无敌飞机

const InvincibleForceFieldAbility = (radius, regen, max, cooldown) => {

    var realRad;
    var paramUnit;
    var paramField;
    var shieldConsumer = cons(trait => {
        if (trait.team != paramUnit.team
            && trait.type.absorbable
            && Intersector.isInsideHexagon(paramUnit.x, paramUnit.y, realRad * 2, trait.x, trait.y)
            && paramUnit.shield > 0) {

            trait.absorb();
            Fx.absorb.at(trait);

            paramField.alpha = 1;
        }
    });

    const ability = new JavaAdapter(ForceFieldAbility, {
        update(unit) {
            unit.shield = Infinity;
            this.radiusScale = Mathf.lerpDelta(this.radiusScale, 1, 0.06)
            realRad = this.radiusScale * this.radius;
            paramUnit = unit;
            paramField = this;
            Groups.bullet.intersect(unit.x - realRad, unit.y - realRad, realRad * 2, realRad * 2, shieldConsumer);
            this.alpha = Math.max(this.alpha - Time.delta / 10, 0);
        },
        copy() {
            return InvincibleForceFieldAbility(radius, regen, max, cooldown);
        },
        draw(unit) {
            this.super$draw(unit);
        },
    }, radius, regen, max, cooldown);

    return ability;
};

const invincibleBulletType = (() => {

    const bt = extend(BasicBulletType, {
        hitEntity(b, other, initialHealth) {
            if (other && other.kill) {
                other.kill();
                if (!other.dead && !Vars.net.client()) {
                    other.health = 0
                    other.dead = true
                    Call.unitDeath(other.id)
                }
            }
        },
        hitTile(b, tile, health, direct) {
            this.super$hitTile(b, tile, health, direct);
            if (tile) {
                Tile.tileDestroyed(tile);
            }
        },
    });
    //bt.collidesTeam = true//子弹碰撞
    bt.scaleVelocity = true;//开启指哪打哪
    bt.width = 10;
    bt.height = 16;
    bt.damage = Infinity;
    bt.splashDamage = Infinity;
    bt.speed = 10;
    // bt.bulletWidth = 7;
    //bt.bulletHeight = 9;
    bt.lifetime = 40;
    bt.inaccuracy = 5;
    bt.despawnEffect = Fx.hitBulletSmall;
    bt.keepVelocity = false;
    return bt;
})();




const invincibleWeaponn = (() => {

    const w = extend(Weapon, {});

    w.name = lib.modName + '-' + 'feiji666-weapon';
    //w.name = Core.bundle.format("feiji666-weapon");
    w.length = 1.5;
    w.reload = 7;
    // w.ejectEffect = Fx.shellEjectSmall;
    w.bullet = invincibleBulletType;
    w.rotate = false;
    //w.rotateSpeed = 20;
    w.x = 3;
    w.y = 2;
    return w;
})();


const mechh = (() => {
    const m = new UnitType('feiji666');

    m.abilities.add(new RepairFieldAbility(Infinity, 60, 8 * 8));
    // m.abilities.add(new JavaAdapter(ForceFieldAbility, {}, 60, Infinity, Infinity, 300));
    m.abilities.add(InvincibleForceFieldAbility(60, Infinity, Infinity, 300));
    m.constructor = prov(() => extend(UnitTypes.alpha.constructor.get().class, {
        damage(amount) { },
    }));
    m.defaultController = prov(() => new BuilderAI());
    m.weapons.add(invincibleWeaponn);
    m.flying = true; //  m.turnCursor=true; m.isCounted= false;
    m.speed = 120;
    m.hitSize = 12;
    m.accel = 0.01;
    m.rotateSpeed = 5;
    //m.baseRotateSpeed = 20;
    // m.boostMultiplier = 3;
    // m.canBoost = false;
    m.drag = 0.1;
    m.health = 10;
    m.mineSpeed = 50000;
    m.mineTier = 2147483647;
    m.buildSpeed = Infinity;
    m.itemCapacity = 9999;
    m.canHeal = false;
    m.engineOffset = 18;
    m.engineSize = 5;
    m.rotateShooting = true;
    m.payloadCapacity = (200 * 200) * (8 * 8);
    m.ammoCapacity = 5000;

    m.commandLimit = 30;
    m.alwaysUnlocked = true;
    // m.weaponOffsetY = -2;
    // m.weaponOffsetX = 5;

    return m;
})();



///--------------------------叛变核心


const block99 = extendContent(CoreBlock, "hexin",
    {
        setStats() {
            this.stats.add(Stat.buildTime, 0, StatUnit.seconds);
            this.super$setStats();
        },
        isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); },//非沙盒禁止建造
        canBreak(tile) { return Vars.state.teams.cores(tile.team()).size > 1; },
        canReplace(other) { return other.alwaysReplace; },
        canPlaceOn(tile, team) { return true; },
        placeBegan(tile, previous) { },
        beforePlaceBegan(tile, previous) { },

        drawPlace(x, y, rotation, valid) { },
    });
// block99.config(java.lang.Integer, lib.cons2((tile, i) => {
//     tile.team = Team.get(i);
// }));
block99.buildVisibility = BuildVisibility.sandboxOnly;//仅沙盒
const allTeams = [
    Team.derelict, Team.sharded, Team.crux,
    Team.green, Team.purple, Team.blue,
];
lib.setBuildingSimple(block99, CoreBlock.CoreBuild, {
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },

    isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); },//非沙盒禁止建造
    canBreak(tile) { return false; },

    buildConfiguration(table) {
        const tmp = new ImageButton();
        const g = new ButtonGroup(tmp);
        g.remove(tmp);
        const cont = new Table();
        cont.defaults().size(40);
        var i = 0;
        allTeams.forEach(team => {
            (team => {
                var button = cont.button(Tex.whiteui, Styles.clearToggleTransi, 24, run(() => {
                })).group(g).get();
                button.changed(run(() => {
                    if (button.isChecked()) {
                        this.configure(lib.int(team.id));
                    }
                }));
                button.getStyle().imageUp = Tex.whiteui.tint(team.color.r, team.color.g, team.color.b, team.color.a);
                button.update(run(() => button.setChecked(this.team == team)));

                if (i++ % 3 == 3) {
                    cont.row();
                }
            })(team);
        });
        if (i % 3 != 0) {
            var remaining = 3 - (i % 3);
            for (var j = 0; j < remaining; j++) {
                cont.image(Styles.black6);
            }
        }
        var pane = new ScrollPane(cont, Styles.smallPane);
        pane.setScrollingDisabled(true, false);
        pane.setOverscroll(false, false);
        table.add(pane).maxHeight(Scl.scl(40 * 2)).left();
        table.row();
    },
    configured(builder, value) {
        this.super$configured(builder, value);
        if (builder != null && builder.isPlayer()) {
            const team = Team.get(value);
            builder.team = team;
            builder.getPlayer().team(team);

            this.onRemoved();
            this.team = team;
            this.onProximityUpdate();
        }
    },
});
//block99.unitType = UnitTypes.gamma;

block99.unitType = mechh;
block99.buildVisibility = BuildVisibility.shown;
block99.category = Category.effect;
//exports.block9 = block9;
block99.alwaysUnlocked = true;
block99.size = 3;
block99.hasItems = true;
block99.unloadable = true;
block99.breakable = true;
block99.rebuildable = false;
block99.configurable = true;
block99.health = 2000;
block99.itemCapacity = 10000;
block99.requirements = ItemStack.with(
    nulls, 1,
);





//------------------------无敌护盾

/*
 * 此文件描述没法挡子弹的冷冻力场，原理复杂，开 mod 服务器时有可能会死。
 * 如此复杂的原因：(md 一堆 package-private 级别的字段，根本没法继承，只能都重写一遍了)
 * 1. update 难以定制，想去掉挡子弹的代码很不容易
 * 2. 力场颜色难以修改，因为 update() 里面写死了 new ShieldEntity，并且力场的渲染是在 Renderer 里写死的
 * 以上描述仅对126及以前的版本，后续版本未测试
 */
const shieldConsumer = (paramEntity) => cons(trait => {
    if (trait.team != paramEntity.team
        && trait.type.absorbable
        && Intersector.isInsideHexagon(paramEntity.x, paramEntity.y, paramEntity.realRadius() * 2, trait.x, trait.y)) {
        trait.absorb();
        Fx.absorb.at(trait);
        paramEntity.hit = 1;
    }
});
const blockType = extendContent(ForceProjector, "wudihudun", {
    canBreak(tile) { return false; },//不可拆 
    isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); },//非沙盒禁止建造
});
blockType.buildVisibility = BuildVisibility.sandboxOnly;//仅沙盒
lib.setBuildingSimple(blockType, ForceProjector.ForceBuild, {
    updateTile() {
        var phaseValid = this.block.consumes.get(ConsumeType.item).valid(this);

        this.phaseHeat = Mathf.lerpDelta(this.phaseHeat, Mathf.num(phaseValid), 0.1);

        if (phaseValid && !this.broken && this.timer.get(blockType.timerUse, blockType.phaseUseTime) && this.efficiency() > 0) {
            this.consume();
        }

        this.radscl = Mathf.lerpDelta(this.radscl, this.broken ? 0 : this.warmup, 0.05);

        if (Mathf.chanceDelta(this.buildup / this.breakage * 0.1)) {
            Fx.reactorsmoke.at(this.x + Mathf.range(tilesize / 2), this.y + Mathf.range(tilesize / 2));
        }

        this.warmup = Mathf.lerpDelta(this.warmup, this.efficiency(), 0.1);

        if (this.buildup > 0) {
            var scale = !this.broken ? cooldownNormal : this.cooldownBrokenBase;
            var cons = this.block.consumes.get(ConsumeType.liquid);
            if (cons.valid(this)) {
                cons.update(this);
                scale *= (cooldownLiquid * (1 + (this.liquids.current().heatCapacity - 0.4) * 0.9));
            }

            this.buildup -= delta() * scale;
        }

        if (this.broken && this.buildup <= 0) {
            this.broken = false;
        }

        if (this.buildup >= this.breakage + this.phaseShieldBoost && !this.broken) {
            this.broken = true;
            this.buildup = this.breakage;
            Fx.shieldBreak.at(this.x, this.y, this.realRadius(), this.team.color);
        }

        if (this.hit > 0) {
            this.hit -= 1 / 5 * Time.delta;
        }

        var realRadius = this.realRadius();

        if (realRadius > 0 && !this.broken) {
            Groups.bullet.intersect(this.x - realRadius, this.y - realRadius, realRadius * 2, realRadius * 2, shieldConsumer(this));
        }
    },
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },
});



// --------------------------必死炮

const destoryBeamBulletType = (() => {
    const THE_COLOR = Color.purple;

    const fragBulletType = (() => {

        const hitEffect = lib.newEffect(8, (e) => {
            Draw.color(Color.black, THE_COLOR, e.fin());
            Lines.stroke(0.5 + e.fout());
            Lines.circle(e.x, e.y, e.fin() * 10);
        });

        const despawnEffect = lib.newEffect(8, (e) => {
            Draw.color(Color.black, THE_COLOR, e.fin());
            Lines.stroke(0.5 + e.fout());
            Lines.circle(e.x, e.y, e.fin() * 5);
        });

        const bt = extend(BasicBulletType, {
            hitEntity(b, other, initialHealth) {
                if (other && other.kill) {
                    other.kill();
                }
            },
            hitTile(b, tile, health, direct) {
                this.super$hitTile(b, tile, health, direct);
                if (tile && tile.team != b.team) {
                    Tile.tileDestroyed(tile);
                }
            },
            draw(b) {
                Draw.color(THE_COLOR);
                // Lines.stroke(1);
                // Lines.lineAngleCenter(b.x, b.y, b.rotation(), 6);
                // Draw.color(Color.white);
                // Lines.lineAngleCenter(b.x, b.y, b.rotation(), 1);

                Drawf.tri(b.x, b.y, 4, 8, b.rotation());
                Drawf.tri(b.x, b.y, 4, 12, b.rotation() - 180);
                Draw.reset();
            },
            update(b) {
                // Rewrite homing power (adds a delay) trail logic
                if (this.homingPower > 0.0001 && b.time > 12) {
                    var target = Units.closestTarget(b.team, b.x, b.y, this.homingRange,
                        boolf(e => (e.isGrounded() && this.collidesGround) || (e.isFlying() && this.collidesAir)),
                        boolf(t => this.collidesGround)
                    );
                    if (target != null) {
                        b.vel.setAngle(Mathf.slerpDelta(b.rotation(), b.angleTo(target), this.homingPower));
                    }
                }
            },
        });
        bt.pierce = true;
        bt.pierceCap = 6;
        bt.pierceBuilding = false;
        bt.healPercent = 500;
        bt.speed = 3.5;
        bt.damage = Infinity;
        bt.homingPower = 0.3;
        bt.homingRange = 50;
        bt.splashDamage = 3;
        bt.splashDamageRadius = 10;
        bt.hitEffect = hitEffect;
        bt.despawnEffect = despawnEffect;
        bt.lifetime = 22;
        bt.shootEffect = Fx.none;
        return bt;
    })();

    const tailEffectTime = 12;
    const tailEffect = lib.newEffect(tailEffectTime, e => {
        Draw.color(Color.black, THE_COLOR, Math.max(0, e.fout() * 2 - 1));
        Drawf.tri(e.x, e.y, 8 * e.fout(), 16, e.rotation);
        Drawf.tri(e.x, e.y, 8 * e.fout(), 30 * Math.min(1, e.data.time / 8 * 0.8 + 0.2), e.rotation - 180);
    });

    const hitEffect = lib.newEffect(8, (e) => {
        Draw.color(Color.black, THE_COLOR, e.fin());
        Lines.stroke(0.5 + e.fout());
        Lines.circle(e.x, e.y, e.fin() * 30);
    });

    const despawnEffect = lib.newEffect(8, (e) => {
        Draw.color(Color.black, THE_COLOR, e.fin());
        Lines.stroke(0.5 + e.fout());
        Lines.circle(e.x, e.y, e.fin() * 5);
    });

    const bt = extend(BasicBulletType, {
        hitTile(b, tile, health, direct) {
            this.super$hitTile(b, tile, health, direct);
            if (tile && tile.team != b.team) {
                Tile.tileDestroyed(tile);
            }
        },
        draw(b) {
            Draw.color(THE_COLOR);
            // Lines.stroke(2);
            // Lines.lineAngleCenter(b.x, b.y, b.rotation(), 15);
            // Draw.color(Color.white);
            // Lines.lineAngleCenter(b.x, b.y, b.rotation(), 1);

            Drawf.tri(b.x, b.y, 8, 16, b.rotation());
            Drawf.tri(b.x, b.y, 8, 30 * Math.min(1, b.time / this.speed * 0.8 + 0.2), b.rotation() - 180);
            Draw.reset();
        },
        update(b) {
            // Rewrite homing power (adds a delay) trail logic
            if (this.homingPower > 0.0001 && b.time > 25) {
                var target = Units.closestTarget(b.team, b.x, b.y, this.homingRange,
                    boolf(e => (e.isGrounded() && this.collidesGround) || (e.isFlying() && this.collidesAir)),
                    boolf(t => this.collidesGround)
                );
                if (target != null) {
                    b.vel.setAngle(Mathf.slerpDelta(b.rotation(), b.angleTo(target), this.homingPower));
                }
            }

            if (b.timer.get(1, 1)) {
                tailEffect.at(b.x, b.y, b.rotation(), THE_COLOR, { time: ((v) => v)(b.time) });
            }
        },
    });
    bt.pierce = true;
    bt.pierceCap = 6;
    bt.pierceBuilding = false;
    bt.hitSize = 8;
    bt.healPercent = 1000;
    bt.speed = 6;
    bt.damage = Infinity;
    bt.homingPower = 0.3;
    bt.homingRange = 240;
    bt.splashDamage = Infinity;
    bt.splashDamageRadius = 30;
    bt.shootEffect = Fx.none;
    bt.hitEffect = hitEffect;
    bt.despawnEffect = despawnEffect;
    bt.fragBullet = fragBulletType;
    bt.fragBullets = 6;
    bt.lifetime = 70;
    return bt;
})();

const turret = extendContent(Turret, 'bisipao', {
    canPickup() {
        //cores can never be picked up
        return false;
    },
    load() {
        this.super$load();
        this.baseRegion = lib.loadRegion2("bisipao-base");
    },
    // generateIcons(){
    //     const list = this.super$generateIcons();
    //     list[0] = Core.atlas.find(lib.modName + "-bisipao-base");
    //     list[1] = Core.atlas.find(this.name);
    //     return list;
    // },
});//

lib.setBuildingSimple(turret, Turret.TurretBuild, {
    hasAmmo() { return true; },
    canPickup() { return false },
    peekAmmo() { return destoryBeamBulletType; },
    useAmmo() { return destoryBeamBulletType; },
});
turret.coolantUsage = 0;//液体加速
turret.targetInterval = 0;
turret.category = Category.turret;
turret.health = 6000;
turret.size = 1;
turret.reloadTime = 10;
turret.range = 400;
turret.inaccuracy = 15;
turret.rotateSpeed = 20;
turret.targetInterval = 0;
turret.shootCone = 80;
turret.shootSound = Sounds.shootBig;
turret.buildVisibility = BuildVisibility.shown,
    //BiSiPao.buildVisibility = BuildVisibility.shown,
    exports.BiSiPao = turret;

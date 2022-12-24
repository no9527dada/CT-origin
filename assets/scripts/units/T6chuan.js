const status = require("Status");
const { T6chuan1, T6chuan2, T6chuan3, } = require('turrets/originalTurrets');
const sss = CTItem;
const TerritoryFieldAbility = (damage, reload, range) => {
    var dam = false;
    var timer = 0;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return Core.bundle.get("abilitH");
        },
        update(unit) {
            Units.nearby(unit.team, unit.x, unit.y, range, cons(other => {
                if (other != unit) other.apply(status.superBoss, 30);
                if (unit.team == Team.crux) Vars.state.teams.bosses.add(other)
            }));
            Units.nearbyEnemies(unit.team, unit.x - range, unit.y - range, range * 2, range * 2, cons(other => {
                if (other.within(unit.x, unit.y, range)) other.apply(status.speedDown, 30);
            }));
            timer += Time.delta;
            if (timer > reload) {
                dam = false;
                Units.nearbyEnemies(unit.team, unit.x - range, unit.y - range, range * 2, range * 2, cons(other => {
                    if (other.within(unit.x, unit.y, range)) {
                        other.damage(damage);
                        new Effect(65, cons(e => {
                            Draw.color(unit.team.color);
                            Lines.stroke(e.fout() * 10);
                            Lines.circle(e.x, e.y, 2 + e.finpow() * 7);
                        })).at(other.x, other.y);
                        dam = true;
                    }
                }));
                if (dam) {
                    new Effect(240, cons(e => {//冲击波
                        Draw.color(unit.team.color);
                        Lines.stroke(e.fout() * 20);
                        Lines.circle(e.x, e.y, 2 + e.finpow() * range);
                    })).at(unit.x, unit.y);
                }
                timer = 0;
            }
        },
        copy() {
            return TerritoryFieldAbility(damage, reload, range);
        },
        draw(unit) {
            Draw.color(unit.team.color);

            Lines.stroke(1.5);
            Draw.alpha(0.09);
            Fill.circle(unit.x, unit.y, range);
            Draw.alpha(0.5);
            Lines.circle(unit.x, unit.y, range);
        },
    });
    return ability;
};
//var Y=
const T6chuan = extend(UnitType, "T6chuan", {
    draw(unit) {
        this.super$draw(unit);

        Draw.rect(Core.atlas.find("creators-T6chuan-1"), unit.x + Angles.trnsx(unit.rotation, 10, 0), unit.y + Angles.trnsy(unit.rotation, 10, 0), Time.time * 2);

        //Draw.rect(Core.atlas.find("creators-T6chuan-1"), unit.x, unit.y + Angles.trnsy(unit.rotation, 0, 11), Time.time * 2);

        const r = unit.rotation;
        Draw.color(Color.valueOf("FF3030"));
        Draw.alpha(Mathf.sin(Time.time * 0.04));
        Draw.blend(Blending.additive);
        Draw.rect(Core.atlas.find("creators-T6chuan-2"), unit.x + Angles.trnsx(unit.rotation, 0, 0), unit.y + Angles.trnsy(unit.rotation, 0, 0), r - 90);
        Draw.blend();
        Draw.reset();


    }

})
//const T6chuan = new UnitType('T6chuan');

const dropStack = new ItemStack(sss.yuanshencanpian, 1);
//T6chuan.constructor = prov(() => extend(UnitTypes.retusa.constructor.get().class, {}));
T6chuan.constructor = prov(() => extend(UnitTypes.retusa.constructor.get().class, {
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
T6chuan.hitSize = 80;
T6chuan.health = 600000;
T6chuan.speed = 0.01;
T6chuan.drag = 0.17;
T6chuan.armor = 150;
T6chuan.accel = 0.2;
T6chuan.rotateSpeed = 1.1;
//T6chuan.rotateShooting = false;
T6chuan.ammoType = new PowerAmmoType(4500);
T6chuan.trailLength = 70;
T6chuan.trailX = 23;
T6chuan.trailY = -32;
T6chuan.trailScl = 3.5;
T6chuan.buildSpeed = 5.5;
//武器坐标 25, 50
T6chuan.abilities.add(
    new UnitSpawnAbility(UnitTypes.cyerce, 60, 25, -50), //
    new UnitSpawnAbility(UnitTypes.oxynoe, 180, -25, -50),//
    // new UnitSpawnAbility(UnitTypes.cyerce, 180, 0 - 50), //
    new UnitSpawnAbility(UnitTypes.aegires, 600, 0, -60),//
);

T6chuan.abilities.add(TerritoryFieldAbility(300, 60 * 5, 1600));


T6chuan.immunities.add(status.suan2Effect);
T6chuan.weapons.add(
    (() => {
        const w = new Weapon("creators-T6chuan-s1");
        w.reload = 20;
        w.y = -25;
        w.x = -30;
        w.rotate = true;
        w.shake = 1;
        w.shoot.shots = 2;
        w.inaccuracy = 5;
        w.velocityRnd = 0.2;
        w.shootSound = Sounds.missile;
        w.bullet = T6chuan1
        return w;
    })()
);

T6chuan.weapons.add(
    (() => {
        const w = new Weapon("creators-T6chuan-s2");
        w.top = false;
        w.y = 50;
        w.x = 25;
        w.rotate = true;
        w.reload = 60;
        w.recoil = 4;
        w.shake = 2;
        w.inaccuracy = 25;//精准
        w.shoot.shotDelay = 4;//加上它一簇子弹的每个子弹有延迟
        w.shoot.shots = 3;//每发一次出膛多少子弹
        w.ejectEffect = Fx.casing2;
        w.shootSound = Sounds.artillery;
        w.bullet = T6chuan2

        return w;
    })()
);
T6chuan.weapons.add(
    (() => {
        const w = new Weapon("creators-T6chuan-s3");
        w.shadow = 0; //武器贴图阴影大小
        w.mirror = true; //镜像
        w.y = 25; //上下
        w.x = -20; //左右
        w.shootY = 10;
        w.reload = 130; //射速
        w.shake = 10;
        w.recoil = 10;
        w.rotateSpeed = 1;
        w.ejectEffect = Fx.casing3;
        w.shootSound = Sounds.artillery;
        w.rotate = true;
        w.bullet = T6chuan3
        return w;
    })()
);
exports.T6chuan = T6chuan;


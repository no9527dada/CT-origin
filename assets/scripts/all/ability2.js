//---------//@guiY 编写


const status = require("Status");

const TerritoryFieldAbility = (damage, reload, range) => {
    var dam = false;
    var timer = 0;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return Core.bundle.get("ability.creators-abilitG");
        },
        update(unit) {
            Units.nearby(unit.team, unit.x, unit.y, range, cons(other => {
                if(other != unit) other.apply(status.speedUp, 30);
            }));
            Units.nearbyEnemies(unit.team, unit.x - range, unit.y - range, range * 2, range * 2, cons(other => {
                if(other.within(unit.x, unit.y, range)) other.apply(status.speedDown, 30);
            }));
            timer += Time.delta;
            if(timer > reload){
                dam = false;
                Units.nearbyEnemies(unit.team, unit.x - range, unit.y - range, range * 2, range * 2, cons(other => {
                    if(other.within(unit.x, unit.y, range)){
                        other.damage(damage);
                        new Effect(11, cons(e => {
                            Draw.color(unit.team.color);
                            Lines.stroke(e.fout() * 2);
                            Lines.circle(e.x, e.y, 2 + e.finpow() * 7);
})).at(other.x, other.y);
                        dam = true;
                    }
                }));
                if(dam){
                    new Effect(22, cons(e => {
                        Draw.color(unit.team.color);
                        Lines.stroke(e.fout() * 2);
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
exports.TerritoryFieldAbility = TerritoryFieldAbility;

const baseColor = Color.valueOf("84f491");
const phaseColor = Color.valueOf("ffd59e");
const MendFieldAbility = (range, reload, healP) => {//方块修复场
    var timer = 0;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return Core.bundle.get("ability.creators-abilityF");
        },
        update(unit) {
            Vars.indexer.eachBlock(unit, range, boolf(other => other.damaged()), cons(other => {
                timer += Time.delta;
                if(timer >= reload){
                    timer = 0;
                    other.heal((healP/100) * other.block.health);
                    Fx.healBlockFull.at(other.x, other.y, other.block.size, Tmp.c1.set(baseColor).lerp(phaseColor, 0.3));
                }
            }));
        },
        copy() {
            return MendFieldAbility(range, reload, healP);
        },
        draw(unit) {
            Vars.indexer.eachBlock(unit, range, boolf(other => other.damaged()), cons(other => {
                var tmp = Tmp.c1.set(baseColor);
                tmp.a = Mathf.absin(4, 1);
                Drawf.selected(other, tmp);
                }));
        },
    });
    return ability;
};
exports.MendFieldAbility = MendFieldAbility;

const pointDefenseAbility1 = (px, py, reload, range, bulletDamage, sprite) => {
    const color = Color.white;
    var target = null;
    var reload = 0;
    var rotation = 90;
    var timer = 90;
    var ability = new JavaAdapter(Ability, {
        localized() {
            return Core.bundle.get("ability.creators-abilityD");
        },
        update(unit) {
            var x = unit.x + Angles.trnsx(unit.rotation, py, px);
            var y = unit.y + Angles.trnsy(unit.rotation, py, px);
            target = Groups.bullet.intersect(unit.x - range, unit.y - range, range*2, range*2).min(b => b.team != unit.team && b.type.hittable, b => b.dst2(unit));

            if(target != null && !target.isAdded()){
                target = null;
            }
            if(target == null){
                if(timer >= 90){
                    rotation = Angles.moveToward(rotation, unit.rotation, 3);
                }else{
                    timer += Time.delta;
                }
            }
            if(target != null && target.within(unit, range) && target.team != unit.team && target.type != null && target.type.hittable){
                timer = 0;
                reload += Time.delta;
                //var dest = unit.angleTo(target);
                var dest = target.angleTo(x, y) - 180;
                rotation = Angles.moveToward(rotation, dest, 20);
                if(Angles.within(rotation, dest, 3) && reload >= reload){
                    if(target.damage > bulletDamage){
                        target.damage = target.damage - bulletDamage;
                    }else{
                        target.remove();
                    }
                    Tmp.v1.trns(rotation, 6);
                    Fx.pointBeam.at(x + Tmp.v1.x, y + Tmp.v1.y, rotation, color, new Vec2().set(target));
                    Fx.sparkShoot.at(x + Tmp.v1.x, y + Tmp.v1.y, rotation, color);
                    Fx.pointHit.at(target.x, target.y, color);
                    Sounds.lasershoot.at(x, y, Mathf.random(0.9, 1.1));
                    reload = 0;
                }
            }
        },
        copy() {
            return pointDefenseAbility1(px, py, reload, range, bulletDamage, sprite);
        },
        draw(unit){
            var x = unit.x + Angles.trnsx(unit.rotation, py, px);
            var y = unit.y + Angles.trnsy(unit.rotation, py, px);
            var region = Core.atlas.find("creators-" + sprite);
            Draw.rect(region, x, y, rotation - 90);
        },
    });
    return ability;
};
exports.pointDefenseAbility1 = pointDefenseAbility1;
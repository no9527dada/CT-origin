//guiY
const Colour = (radius, regen, max, cooldown) => {
    var realRad=ForceFieldAbility.realRad;
    var paramUnit;
    var paramField;
    //var i = 0;
    var shieldConsumer = cons(trait => {
        if (trait.team != paramUnit.team && trait.type.absorbable && Intersector.isInsideHexagon(paramUnit.x, paramUnit.y, realRad * 2, trait.x, trait.y) && paramUnit.shield > 0) {
            trait.absorb();
            Fx.absorb.at(trait);
            if (paramUnit.shield <= trait.damage) {
                paramUnit.shield -= paramField.cooldown * paramField.regen;

                Fx.shieldBreak.at(paramUnit.x, paramUnit.y, paramField.radius, Color.white);
            }

            paramUnit.shield -= trait.damage;
            paramField.alpha = 1;
        }
    });
    const ability = new JavaAdapter(ForceFieldAbility, {
        localized() {
            return Core.bundle.get("abilitFF");
        },
        update(unit) {
            realRad = this.radiusScale * this.radius;
            paramUnit = unit;
            paramField = this;
            Groups.bullet.intersect(unit.x - realRad, unit.y - realRad, realRad * 2, realRad * 2, shieldConsumer);
            this.super$update(unit);
        },
        copy() {
            return Colour(radius, regen, max, cooldown);
        },
        draw(unit) {
            this.super$draw(unit);
            if (unit.shield > 0) {
                Draw.z(Layer.shields);
                Draw.color(Color.valueOf("ff0000").shiftHue((Time.time * 0.2) + (1 * (360 / 16))), Color.white, Mathf.clamp(this.alpha));//变色
                if (Core.settings.getBool("animatedshields")) {
                    Fill.poly(unit.x, unit.y, 6, realRad);
                } else {
                    Lines.stroke(1.5);
                    Draw.alpha(0.09);
                    Fill.poly(unit.x, unit.y, 6, this.radius);
                    Draw.alpha(1);
                    Lines.poly(unit.x, unit.y, 6, this.radius);
                }
            }
        }
    }, radius, regen, max, cooldown);
    return ability;
};
exports.Colour = Colour;

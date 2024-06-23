//---------------------@滞人编写 
const lib = require('lib');
const { chuangshishenhun, } = CTItem
const shieldConsumer = (paramEntity) => cons(trait => {
    if (trait.team != paramEntity.team
        && Intersector.isInsideHexagon(paramEntity.x, paramEntity.y, paramEntity.realRadius() * 2, trait.x, trait.y)) {
        trait.remove();
    }
});
const COLOR = Color.purple;
const blockType = extend(ForceProjector, "xuwu", {});
lib.setBuildingSimple(blockType, ForceProjector.ForceBuild, {
    updateTile() {
        var phaseValid = this.block.findConsumer(cons => cons instanceof ConsumeItems).efficiency(this);
        this.phaseHeat = Mathf.lerpDelta(this.phaseHeat, phaseValid, 0.1);

        if (phaseValid && !this.broken && this.timer.get(blockType.timerUse, blockType.phaseUseTime) && this.efficiency > 0) {
            this.consume();
        }

        this.radscl = Mathf.lerpDelta(this.radscl, this.broken ? 0 : this.warmup, 0.05);

        if (Mathf.chanceDelta(this.buildup / this.breakage * 0.1)) {
            Fx.reactorsmoke.at(this.x + Mathf.range(tilesize / 2), this.y + Mathf.range(tilesize / 2));
        }

        this.warmup = Mathf.lerpDelta(this.warmup, this.efficiency, 0.1);

        if (this.buildup > 0) {
            var scale = !this.broken ? cooldownNormal : this.cooldownBrokenBase;
            var cons = this.block.findConsumer(cons => cons instanceof ConsumeLiquid).efficiency(this);
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
            Groups.unit.intersect(this.x - realRadius, this.y - realRadius, realRadius * 2, realRadius * 2, shieldConsumer(this));
        }
    },
    drawShield() {
        var x = this.x;
        var y = this.y;
        var hit = this.hit;
        if (!this.broken) {
            var radius = this.realRadius();

            Draw.z(Layer.shields);


            if (Core.settings.getBool("animatedshields")) {
                Draw.color(COLOR, Color.white, Mathf.clamp(hit));
                Fill.poly(x, y, 6, radius);
                Draw.color(this.team.color, Color.white, Mathf.clamp(hit));
                Lines.poly(x, y, 6, radius);
            } else {
                Lines.stroke(1.5);
                Draw.color(COLOR, Color.white, Mathf.clamp(hit));
                Draw.alpha(0.09 + Mathf.clamp(0.08 * hit));
                Fill.poly(x, y, 6, radius);
                Draw.color(this.team.color, Color.white, Mathf.clamp(hit));
                Draw.alpha(1);
                Lines.poly(x, y, 6, radius);
                Draw.reset();
            }
        }

        Draw.reset();
    },
    damage(damage) { },
    handleDamage(tile, amount) { return 0; },
});
blockType.consumePower(3000000 / 60);
//xuwu.consumeItems(new ItemStack.with(chuangshishenhun, 200,));
blockType.itemConsumer = blockType.consumeItem(chuangshishenhun, 200).boost();
exports.xuwu = blockType;

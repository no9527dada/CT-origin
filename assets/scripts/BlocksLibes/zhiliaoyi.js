
const lib = require('lib');
const items = CTItem
const { cure } = require('Status');
const shieldConsumer = (paramEntity) => cons(trait => {
    if (
        Intersector.isInsideHexagon(paramEntity.x, paramEntity.y, paramEntity.realRadius() * 2, trait.x, trait.y)) {
        trait.apply(cure, 30);
    }
});

const blockType = extend(ForceProjector, "zhiliaoyi", {});//治疗仪
blockType.buildVisibility = BuildVisibility.shown;
blockType.category = Category.effect;
blockType.size = 3;
blockType.health = 1750;
blockType.hasPower = true;
blockType.consumePower(430 / 60);
blockType.repairRadius = 45*8;
blockType.repairSpeed = 4;
blockType.solid = true;
blockType.update = true;
blockType.targetable = true;
blockType.hasPower = true;
blockType.hasLiquids = false;
blockType.phaseUseTime = 1 * 60;
blockType.shieldHealth = 0;
blockType.phaseShieldBoost = 0;
blockType.radius = 14 * 8;
blockType.phaseRadiusBoost = 15 * 8;
blockType.itemConsumer = blockType.consumeItem(items.shimoxi,2).boost();
blockType.requirements = ItemStack.with(
    Items.copper, 60,
    Items.lead, 120,
    Items.metaglass, 120,
    items.jin, 120,
    items.guijingti, 150,
    items.shimoxi, 780,
    items.weijing1, 340,
    items.weijing2, 380
);

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
        var COLOR = new Color.valueOf("6eff85");
        var COLOR2 = new Color.valueOf("104d2b");
        var x = this.x;
        var y = this.y;
        var hit = this.hit;
        if (!this.broken) {
            var radius = this.realRadius();

            Draw.z(Layer.shields);


            if (Core.settings.getBool("animatedshields")) {
                Draw.color(COLOR, COLOR2, Mathf.clamp(hit));
                Fill.poly(x, y, 6, radius);
                Draw.color(this.team.color, COLOR2, Mathf.clamp(hit));
                Lines.poly(x, y, 6, radius);
            } else {
                Lines.stroke(1.5);
                Draw.color(COLOR, COLOR2, Mathf.clamp(hit));
                Draw.alpha(0.09 + Mathf.clamp(0.08 * hit));
                Fill.poly(x, y, 6, radius);
                Draw.color(this.team.color, COLOR2, Mathf.clamp(hit));
                Draw.alpha(1);
                Lines.poly(x, y, 6, radius);
                Draw.reset();
            }
        }

        Draw.reset();
    },

});
exports.zhiliaoyi = blockType;
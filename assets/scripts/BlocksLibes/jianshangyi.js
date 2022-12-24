
const lib = require('lib');
const items = CTItem
const shieldConsumer = (paramEntity) => cons(trait => {
    if (trait.team != paramEntity.team
        && Intersector.isInsideHexagon(paramEntity.x, paramEntity.y, paramEntity.realRadius() * 2, trait.x, trait.y)) {
        trait.apply(StatusEffects.electrified, 30);
    }
});

const blockType = extend(ForceProjector, "jianshangyi", {});//减伤仪
blockType.buildVisibility = BuildVisibility.shown;
blockType.category = Category.effect;
blockType.buildCostMultiplier = 0.3;//建造时间倍
blockType.size = 4;
blockType.health = 1750;
blockType.hasPower = true;
blockType.consumePower(1200 / 60);
blockType.repairRadius = 240;
blockType.repairSpeed = 1.8;
blockType.solid = true;
blockType.update = true;
blockType.targetable = true;
blockType.hasPower = true;
blockType.hasLiquids = false;
blockType.phaseUseTime = 0.5 * 60;
blockType.shieldHealth = 0;
blockType.phaseShieldBoost = 0;
blockType.radius = 35 * 8;
blockType.phaseRadiusBoost = 30 * 8;
blockType.itemConsumer = blockType.consumeItem(items.monengjing1,1).boost();
blockType.requirements = ItemStack.with(
    Items.copper, 3500,
    Items.lead, 2200,
    items.jinhuiboli, 300,
    items.jin, 110,
    items.guijingti, 700,
    items.shimoxi, 450,
    items.weijing2, 180
);

lib.setBuildingSimple(blockType, ForceProjector.ForceBuild, {
    updateTile() {
        var phaseValid =this.block.findConsumer(cons => cons instanceof ConsumeItems).efficiency(this);

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
        var COLOR = new Color.valueOf("c97061");
        var COLOR2 = new Color.valueOf("c97061");
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
exports.jianshangyi = blockType;
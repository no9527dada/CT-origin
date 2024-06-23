//---------------------@滞人编写
//防护仪
const items = CTItem
const lib = require('lib');



const { fanghu } = require('Status');
const shieldConsumer = (paramEntity) => cons(trait => {
    if (trait.team == paramEntity.team
        &&Intersector.isInsideHexagon(paramEntity.x, paramEntity.y, paramEntity.realRadius() * 2, trait.x, trait.y)) {
        trait.apply(fanghu, 60*60*1.5/*持续90秒*/);
    }
});

const fanghublockType = extend(ForceProjector, "fanghuyi", {});//加速仪
fanghublockType.buildVisibility = BuildVisibility.shown;
fanghublockType.category = Category.effect;
fanghublockType.size = 6;
fanghublockType.health = 750;
fanghublockType.canOverdrive= false;
fanghublockType.hasPower = true;
fanghublockType.consumePower(120000 / 60);
fanghublockType.repairRadius = 240;
fanghublockType.repairSpeed = 1.8;
fanghublockType.solid = true;
fanghublockType.update = true;
fanghublockType.targetable = true;
fanghublockType.hasPower = true;
fanghublockType.hasLiquids = false;
fanghublockType.phaseUseTime = 30 * 60;//30秒消耗1个资源
fanghublockType.shieldHealth = 0;
fanghublockType.phaseShieldBoost = 0;
fanghublockType.radius = 0 * 8;//初始范围0
fanghublockType.phaseRadiusBoost = 75 * 8;
fanghublockType.itemConsumer = fanghublockType.consumeItem(items.weijing5,1).boost();

fanghublockType.requirements = ItemStack.with(
    Items.copper, 76000,
    Items.lead, 45000,
    items.hejinboli, 720,
    items.jin, 3000,
    items.guijingti, 32000,
    items.shimoxi, 18000,
    items.taihejin, 7500,
    items.JHhejin, 5000

);

lib.setBuildingSimple(fanghublockType, ForceProjector.ForceBuild, {
    updateTile() {
        var phaseValid = this.block.findConsumer(cons => cons instanceof ConsumeItems).efficiency(this);

        this.phaseHeat = Mathf.lerpDelta(this.phaseHeat, phaseValid, 0.1);

        if (phaseValid && !this.broken && this.timer.get(fanghublockType.timerUse, fanghublockType.phaseUseTime) && this.efficiency > 0) {
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
        var COLOR = new Color.valueOf("ff7341");
        var COLOR2 = new Color.valueOf("ff7341");
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

//const a = extend(Wall, "2qian2"); 
exports.fanghuyi = fanghublockType;
//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）

const F = require("all/kuangjiAI");
function kuangjiAI() {
	var mineItems = Seq.with(F.fi("shiying"),
    Items.copper,Items.lead,Items.sand,
    )
	//,Items.copper,Items.lead,Items.thorium,Items.titanium,Items.coal,Items.sand,Items.scrap,
	var tpxp = true
	var mining = true

	var targetItem
	var ore
	var timer = new Interval(4)
	var timerTarget = 0, timerTarget2 = 1, timerTarget3 = 2;
	return new JavaAdapter(MinerAI, {
		updateMovement() {
			const core = this.unit.closestCore();

			if (!(this.unit.canMine()) || core == null) return;

			if (this.unit.mineTile != null && !this.unit.mineTile.within(this.unit, this.unit.type.range)) {
				this.unit.mineTile = null
			}

			if (tpxp) {
				if (this.unit.health <= this.unit.type.health * 0.1) {
					tpxp = false;
				}

				if (tpxp && mining) {
					if (timer.get(timerTarget2, 60 * 4) || targetItem == null) {
						targetItem = mineItems.min(boolf(i => Vars.indexer.hasOre(i) && this.unit.canMine(i)), floatf(i => core.items.get(i)))
					}

					if (targetItem != null && core.acceptStack(targetItem, 1, this.unit) == 0) {
						this.unit.clearItem()
						this.unit.mineTile = null
						return
					}

					if (this.unit.stack.amount >= this.unit.type.itemCapacity || (targetItem != null && !this.unit.acceptsItem(targetItem))) {
						mining = false;
					} else {
						if (timer.get(timerTarget, 60) && targetItem != null) {
							ore = Vars.indexer.findClosestOre(this.unit, targetItem);
						}

						if (ore != null) {
							this.moveTo(ore, this.unit.type.range / 2, 20);

							if (this.unit.within(ore, this.unit.type.range)) {
								this.unit.mineTile = ore;
							}

							if (ore.block() != Blocks.air) {
								mining = false;
							}
						}
					}
				} else {
					this.unit.mineTile = null;

					if (this.unit.stack.amount == 0) {
						mining = true;
						return;
					}

					if (this.unit.within(core, this.unit.type.range)) {
						if (core.acceptStack(this.unit.stack.item, this.unit.stack.amount, this.unit) > 0) {
							Call.transferItemTo(this.unit, this.unit.stack.item, this.unit.stack.amount, this.unit.x, this.unit.y, core);
						}

						this.unit.clearItem();
						mining = true;
					}
					this.circle(core, 30)
				}
			} else {
				if (this.unit.health >= this.unit.type.health - 5) {
					tpxp = true;
				}
				this.moveTo(this.targetFlag(this.unit.x, this.unit.y, BlockFlag.repair, false), 30)
			}
		},
		updateTargeting() { }
	})
}

exports.kuangjiAI2 = kuangjiAI;
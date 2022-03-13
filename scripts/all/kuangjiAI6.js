//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）

const F = require("all/kuangjiAI");
function kuangjiAI() {
	var mineItems = Seq.with(F.fi("jin"), F.fi("zuankuang"), F.fi("molishi"), F.fi("jingliantai"))
	//Items.copper,lead,coal,sand,scrap,thorium,titanium,
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

exports.kuangjiAI6 = kuangjiAI;

// var 采矿x = extendContent(UnitType, '进阶采矿机', {
// 	// draw(unit) {
// 	// 	this.super$draw(unit);

// 	// 	if(unit.health <= unit.type.health * 0.1){
// 	// 	Draw.color(Color.valueOf("00ff00"));
// 	// 	Draw.alpha(Mathf.sin(Time.time*0.1)*1);
// 	// 	Draw.blend(Blending.additive);
// 	// 	Draw.rect(Core.atlas.find("光耀旧世界-Units-cell3"), unit.x, unit.y);
// 	// 	Draw.blend();
// 	// 	}
// 	// },
// });
// 采矿x.defaultController = prov(() => new 矿机AI());
// 采矿x.constructor = prov(() => extend(UnitTypes.mono.constructor.get().class, {}));
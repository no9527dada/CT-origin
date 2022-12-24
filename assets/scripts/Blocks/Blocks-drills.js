const lib = require('lib');
const dsGlobal = require('BlocksLibes/qianzhi');
const {
    //白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
      molijinghuaye, moliye, qiangxiaolengqueye,oreweijing4,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,nulls
} = CTItem
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

exports.yingzhizuantou =
    (() => {
        const a = extend(Drill, "yingzhizuantou", {}); //硬质钻头
        a.liquidBoostIntensity = 1
        a.health = 220;
        a.size = 4;
        a.tier = 4;
        a.liquidCapacity = 0;

        a.drillTime = 120;
        a.hardnessDrillMultiplier = 100;

        a.requirements = ItemStack.with(
            Items.copper, 150,
            Items.lead, 120,
            shiying, 60,
            Items.graphite, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();

//-----------------------------------------------------------
exports.weijingzuantou1 =
    (() => {
        const a = extend(Drill, "1weijingzuantou", {}); //初级钻头
        a.health = 600;
        a.size = 4;
        a.tier = 7;
        a.hardnessDrillMultiplier = 2.5;
        a.rotateSpeed = 7;
        a.drillTime = 210;
        a.drillEffect = Fx.hitBulletBig;
        a.liquidCapacity = 12;
        a.hasShadow = true;
        a.drawMineItem = true;
        a.consumePower(6);
        a.consumeLiquid(Liquids.cryofluid, 0.05), true;
        a.requirements = ItemStack.with(
            Items.copper, 265,
            Items.lead, 265,
            weijing1, 30,
            zuanjing, 30,
            zijing1, 65,
            guijingti, 155,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.weijingzuantou2 =
    (() => {
        const a = extend(Drill, "2weijingzuantou", {}); //高级钻头
        a.health = 800;
        a.size = 3;
        a.tier = 9;
        a.hardnessDrillMultiplier = 2.5;
        a.rotateSpeed = 10;
        a.drillTime = 75;
        a.drillEffect = Fx.hitBulletBig;
        a.hasShadow = true;
        a.liquidCapacity = 15;
        a.drawMineItem = true;
        a.consumePower(20);
        a.consumeLiquid(molijinghuaye, 0.033333333);
        a.requirements = ItemStack.with(
            Items.copper, 265,
            Items.lead, 265,
            weijing2, 35,
            zuanjing, 120,
            molishi, 80,
            guijingti, 320,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.junengzuantou =
    (() => {
        const a = extend(Drill, "junengzuantou", {
            drawPlace(x, y, rotation, valid) {
                this.super$drawPlace(x, y, rotation, valid);

                let tile = Vars.world.tile(x, y);
                if (tile == null) return;

                this.countOre(tile);

                if (this.returnItem != null) {
                    var width = this.drawPlaceText(Core.bundle.formatFloat("bar.drillspeed", 60 / this.getDrillTime(this.returnItem) * this.returnCount, 2), x, y, valid);
                    var dx = x * this.tilesize + this.offset - width / 2 - 4;
                    var dy = y * this.tilesize + this.offset + this.size * this.tilesize / 2 + 5;
                    var s = this.iconSmall / 4;
                    Draw.mixcol(Color.darkGray, 1);
                    Draw.rect(this.returnItem.fullIcon, dx, dy - 1, s, s);
                    Draw.reset();
                    Draw.rect(this.returnItem.fullIcon, dx, dy, s, s);

                    if (this.drawMineItem) {
                        Draw.color(this.returnItem.color);
                        Draw.rect(this.itemRegion, tile.worldx() + this.offset, tile.worldy() + this.offset);
                        Draw.color();
                    }
                } else {
                    let to = tile.getLinkedTilesAs(this, this.tempTiles).find(t => t.drop() != null && (t.drop().hardness > this.tier || t.drop() != molishi));
                    let item = to == null ? null : to.drop();
                    if (item != null) {
                        this.drawPlaceText(Core.bundle.format("bar.drilltierreq3"), x, y, valid);
                    }
                }
            },

            canMine(tile) {
                if (tile == null || tile.block().isStatic()) return false;
                var drops = tile.drop();
                return drops != null && drops.hardness <= this.tier && drops == molishi;
            }
        }); //聚能钻头
        a.health = 900;
        a.size = 2;
        a.tier = 10;
        a.buildCostMultiplier = 10;
        a.updateEffectChance = 0.35;
        a.liquidBoostIntensity = 1;
        a.hardnessDrillMultiplier = 0;
        a.warmupSpeed = 0.01;
        a.rotateSpeed = 6;
        a.drillTime = 400;
        a.heatColor = Color.black;
        a.coolEffect = Fx.steam;
        a.hasLiquid = false;
        a.hasShadow = true;
        a.drawRim = true;
        a.drawMineItem = false;
        a.consumePower(8.33333);
        a.requirements = ItemStack.with(
            Items.thorium, 120,
            Items.surgeAlloy, 60,
            weijing1, 80,
            zuanjing, 70,
            monengjing1, 25,
            guijingti, 400,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.junengzuantou2 =
    (() => {
        const a = extend(Drill, "junengzuantou2", {
            //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                }
            },
            setBars() { lib.Health(this) },
            drawPlace(x, y, rotation, valid) {
                this.super$drawPlace(x, y, rotation, valid);

                let tile = Vars.world.tile(x, y);
                if (tile == null) return;

                this.countOre(tile);

                if (this.returnItem != null) {
                    var width = this.drawPlaceText(Core.bundle.formatFloat("bar.drillspeed", 60 / this.getDrillTime(this.returnItem) * this.returnCount, 2), x, y, valid);
                    var dx = x * this.tilesize + this.offset - width / 2 - 4;
                    var dy = y * this.tilesize + this.offset + this.size * this.tilesize / 2 + 5;
                    var s = this.iconSmall / 4;
                    Draw.mixcol(Color.darkGray, 1);
                    Draw.rect(this.returnItem.fullIcon, dx, dy - 1, s, s);
                    Draw.reset();
                    Draw.rect(this.returnItem.fullIcon, dx, dy, s, s);

                    if (this.drawMineItem) {
                        Draw.color(this.returnItem.color);
                        Draw.rect(this.itemRegion, tile.worldx() + this.offset, tile.worldy() + this.offset);
                        Draw.color();
                    }
                } else {
                    let to = tile.getLinkedTilesAs(this, this.tempTiles).find(t => t.drop() != null && (t.drop().hardness > this.tier || t.drop() != molishi));
                    let item = to == null ? null : to.drop();
                    if (item != null) {
                        this.drawPlaceText(Core.bundle.format("bar.drilltierreq3"), x, y, valid);
                    }
                }
            },

            canMine(tile) {
                if (tile == null || tile.block().isStatic()) return false;
                var drops = tile.drop();
                return drops != null && drops.hardness <= this.tier && drops == molishi;
            }
        }); //聚能钻头2
        a.health = 1200;
        a.size = 3;
        a.tier = 10;
        a.buildCostMultiplier = 10;
        a.updateEffectChance = 0.35;
        a.liquidBoostIntensity = 1;
        a.hardnessDrillMultiplier = 0;
        a.warmupSpeed = 0.01;
        a.liquidCapacity = 0;
        a.rotateSpeed = 6;
        a.drillTime = 150;
        a.heatColor = Color.black;
        a.coolEffect = Fx.steam;
        a.hasLiquid = false;
        a.hasShadow = true;
        a.drawRim = true;
        a.drawMineItem = false;
        a.consumePower(2000 / 60);
        a.requirements = ItemStack.with(
            taihejin, 120,
            JHhejin, 50,
            weijing5, 10,
            zuanjing, 2000,
            monengjing2, 50,
            guijingti, 700,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.zuantou =//4级微晶砖头
    (() => {
        const a = extend(Drill, "zuantou", {

            /*           setStats() {
                          this.super$setStats();
          
                          this.stats.add(Stat.drillTier, StatValues.blocks(boolf(b => {
                              if (b instanceof Floor) {
                                  var f = b;
                                  return !f.wallOre &&
                                      f.itemDrop != null &&
                                      f.itemDrop.hardness <= this.tier &&
                                      f.itemDrop == this.blockedItem &&
                                      (Vars.indexer.isBlockPresent(f) || Vars.state.isMenu());
                              }
                              return false;
                          }
                          )));
                          this.stats.add(Stat.drillSpeed, 60 / this.drillTime * this.size * this.size, StatUnit.itemsSecond);
                          if (this.liquidBoostIntensity == 1) {
                              this.stats.add(Stat.boostEffect, this.liquidBoostIntensity * this.liquidBoostIntensity, StatUnit.timesSpeed);
                          }
                      },
           */

            drawPlace(x, y, rotation, valid) {
                this.super$drawPlace(x, y, rotation, valid);

                let tile = Vars.world.tile(x, y);
                if (tile == null) return;

                this.countOre(tile);

                if (this.returnItem != null) {
                    var width = this.drawPlaceText(Core.bundle.formatFloat("bar.drillspeed", 60 / this.getDrillTime(this.returnItem) * this.returnCount, 2), x, y, valid);
                    var dx = x * this.tilesize + this.offset - width / 2 - 4;
                    var dy = y * this.tilesize + this.offset + this.size * this.tilesize / 2 + 5;
                    var s = this.iconSmall / 4;
                    Draw.mixcol(Color.darkGray, 1);
                    Draw.rect(this.returnItem.fullIcon, dx, dy - 1, s, s);
                    Draw.reset();
                    Draw.rect(this.returnItem.fullIcon, dx, dy, s, s);

                    if (this.drawMineItem) {
                        Draw.color(this.returnItem.color);
                        Draw.rect(this.itemRegion, tile.worldx() + this.offset, tile.worldy() + this.offset);
                        Draw.color();
                    }
                } else {
                    let to = tile.getLinkedTilesAs(this, this.tempTiles).find(t => t.drop() != null && (t.drop().hardness > this.tier || t.drop() != weijing4));
                    let item = to == null ? null : to.drop();
                    if (item != null) {
                        this.drawPlaceText(Core.bundle.format("bar.drilltierreq2"), x, y, valid);
                    }
                }
            },

            canMine(tile) {
                if (tile == null || tile.block().isStatic()) return false;
                var drops = tile.drop();
                return drops != null && drops.hardness <= this.tier && drops == oreweijing4;
            }
        }); //4级微晶-微晶钻头-强化钻头
        //a.blockedItem = weijing4
        a.health = 1800;
        a.size = 1;
        a.buildCostMultiplier = 20;
        a.liquidCapacity = 6;
        a.tier = 50;
        a.drillTime = 4000;
        a.liquidBoostIntensity = 2.5;
        a.hardnessDrillMultiplier = 0;
        a.warmupSpeed = 0.01;
        a.drawMineItem = false;
        //a.drillEffect = Fx.lightningCharge;
        a.consumeLiquid(qiangxiaolengqueye, 1.5 / 60).optional = true;
        a.rotateSpeed = 6;
        a.updateEffectChance = 0.2;
        a.updateEffect = Fx.lightningCharge;
        a.drawRim = true;
        a.consumePower(16.66667);
        a.requirements = ItemStack.with(
            Items.lead, 320,
            weijing4, 4,
            zuanjing, 450,
            monengjing2, 30,
            guijingti, 1500
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//--------------------------------------------------------------------------
exports.weijingzuantou3_2 =
    (() => {
        const a = extend(Drill, "3weijingzuantou", {}); //超级微晶钻头 即将删除
        a.health = 0;
        a.size = 3;
        a.tier = 0;
        a.hardnessDrillMultiplier = 2.5;
        a.updateEffectChance = 0.015;
        a.rotateSpeed = 10;
        a.drillTime = 50;
        a.liquidCapacity = 15;
        a.drillEffect = Fx.hitBulletSmall;
        a.hasShadow = true;
        a.drawMineItem = true;
        a.consumePower(50);
        a.consumeLiquid(qiangxiaolengqueye, 0.025),
            a.requirements = ItemStack.with(
                nulls,0
            );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//------------------------------------------------
exports.weijingzuantou3 =
    (() => {
        const a = extend(BurstDrill, "3weijingzuantou_1", {}); //超级微晶钻头2
        a.buildType = prov(() => {
            return new JavaAdapter(BurstDrill.BurstDrillBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    //Draw.rect(Core.atlas.find("creators-3weijingzuantou-top"), this.x, this.y);
                    // Draw.rect(Core.atlas.find("creators-3weijingzuantou-1-r"), this.x, this.y, 45)
                    Draw.rect(Core.atlas.find("creators-3weijingzuantou-1-r"), this.x, this.y, 45 - this.progress * 3);//progress换warmup也可以
                    // Draw.rect(Core.atlas.find("creators-pu-top"),this.x, this.y);
                },

            }, a);
        });
        a.updateEffect = Fx.none;
        a.drillEffect = Fx.none;
        a.drillEffect = new MultiEffect(
            Fx.mineImpact,
            // Fx.drillSteam,
            // Fx.dynamicSpikes.wrap(Color.valueOf("90ffff"), 15),
            Fx.mineImpactWave.wrap(Color.valueOf("90ffff"), 20)
        );
        a.dumpTime = 50;//钻头的输出速度
        a.health = 1200;
        a.size = 3;
        a.tier = 11;
        a.itemCapacity = 250;
        a.drillTime = 27;
        a.liquidCapacity = 15;
        a.dominantItems = 30
        a.arrows = 1;//哪个进度贴图的帧率   不要动
        a.consumePower(50);
        a.consumeLiquid(qiangxiaolengqueye, 0.025),
            a.requirements = ItemStack.with(
                Items.copper, 265,
                Items.lead, 265,
                guijingti, 455,
                zuanjing, 225,
                weijing2, 120,
                weijing3, 10,
                monengjing1, 65,
            );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//----------- 
exports.pobiji =//破壁机
    (() => {
        const a = new WallBreakMachine("pobiji")
        a.health = 3250;
        a.size = 2;
        a.drillTime = 30 * 60 * 60 * 60;//30分钟
        a.consumePower(100000 / 60);
        a.liquidCapacity = 90;
        a.consumeLiquid(qiangxiaolengqueye, 0.5),
            a.requirements = ItemStack.with(
                Items.copper, 150,
                Items.lead, 120,
                zuanjing, 360,
                monengjing3, 2,
            );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();

    exports.pobiji2 =//破壁机2 沙盒
    (() => {
        const a = new WallBreakMachine("pobiji2")
        a.health = 3000;
        a.size = 2;
        a.drillTime =2*60;
       // a.consumePower(60 / 60);
            a.requirements = ItemStack.with(
                Items.copper, 1
            );
        a.buildVisibility = BuildVisibility.sandboxOnly;
        a.category = Category.production;
        return a;
    })();


exports.shiyou =
    (() => {
        const a = extend(Fracker, "shiyou", {}); //石油钻井
        a.health = 600;
        a.size = 3;
        a.buildCostMultiplier = 0.5;
        a.updateEffect = Fx.pulverize;
        a.updateEffectChance = 0.05;
        a.pumpAmount = 0.7;
        a.result = Liquids.oil;
        a.rotateSpeed = 6;
        a.coolEffect = Fx.steam;
        a.warmupSpeed = 0.21;
        a.craftTime = 90;
        a.liquidCapacity = 200;
        a.consumePower(7);
        a.consumeLiquid(Liquids.water, 15 / 60);
        a.consumeItem(Items.sand, 3);
        a.requirements = ItemStack.with(
            Items.copper, 180,
            Items.lead, 250,
            jingliantai, 250,
            guijingti, 150,
            weijing2, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();

const At = require('Attribute');
exports.suanzhuanjing =
    (() => {
        const a = extend(Fracker, "suanDrilling", {});
        a.attribute = At.suand;
        a.health = 600;
        a.size = 3;
        a.buildCostMultiplier = 0.5;
        a.updateEffect = Fx.pulverize;
        a.updateEffectChance = 0.05;
        a.pumpAmount = 0.6;
        a.result = suan;
        a.rotateSpeed = 6;
        a.baseEfficiency = 0
        a.coolEffect = Fx.steam;
        a.warmupSpeed = 0.21;
        a.craftTime = 60;
        a.liquidCapacity = 200;
        a.consumePower(4.5);
        a.consumeLiquid(Liquids.water, 6 / 60);
        a.requirements = ItemStack.with(
            Items.lead, 150,
            Items.copper, 200,
            molishi, 35,
            guijingti, 60,
            jingliantai, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.sui =
    (() => {
        const a = extend(SolidPump, "sui", {}); //小型抽水机
        a.health = 60;
        a.size = 1;
        a.pumpAmount = 0.035;
        a.result = Liquids.water;
        a.rotateSpeed = 3;
        a.warmupSpeed = 0.21;
        a.liquidCapacity = 5;
        a.consumePower(0.4);
        a.requirements = ItemStack.with(
            Items.copper, 40,
            Items.metaglass, 20,
            shiying, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.sui2 =
    (() => {
        const a = extend(SolidPump, "sui2", {}); //微晶抽水机
        a.health = 200;
        a.size = 2;
        a.attribute = Attribute.water;
        a.buildCostMultiplier = 0.5;
        a.pumpAmount = 0.25;
        a.result = Liquids.water;
        a.rotateSpeed = 2;
        a.liquidCapacity = 10;
        a.consumePower(2.5);
        a.requirements = ItemStack.with(
            Items.copper, 60,
            Items.graphite, 50,
            guijingti, 110,
            weijing1, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();
//-----------------------------------------------------------
exports.sui3 =
    (() => {
        const a = extend(SolidPump, "sui3", {}); //大型微晶抽水机
        a.health = 500;
        a.size = 3;
        a.buildCostMultiplier = 0.5;
        a.pumpAmount = 0.5;
        a.result = Liquids.water;
        a.rotateSpeed = 2;
        a.liquidCapacity = 30;
        a.consumePower(3.5);
        a.requirements = ItemStack.with(
            Items.copper, 130,
            Items.graphite, 70,
            guijingti, 160,
            weijing1, 30,
            monengjing, 50
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;

        return a;
    })();
//-----------------------------------------------------------
exports.sui4 =
    (() => {
        const a = extend(SolidPump, "sui4", {}); //抽冷冻液器
        a.health = 900;
        a.size = 2;
        a.attribute = Attribute.water;
        a.buildCostMultiplier = 0.5;
        a.pumpAmount = 0.2;
        a.result = Liquids.cryofluid;
        a.rotateSpeed = 2;
        a.liquidCapacity = 20;
        a.consumePower(5.6);
        a.requirements = ItemStack.with(
            Items.lead, 300,
            Items.graphite, 100,
            Items.titanium, 160,
            weijing2, 12,
            buding, 500
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();

































































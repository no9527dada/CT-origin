const lib = require('lib')
const dsGlobal = require('BlocksLibes/qianzhi');
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
      molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli, jinhuiboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, nulls,
} = CTItem
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



exports.qian1 =
    (() => {
        const a = extend(Wall, "1qian1", {
            setBars() { lib.Health(this) }
        }); //小铅墙
        a.armor = 10
        a.health = 320;
        a.size = 1;
        a.requirements = ItemStack.with(
            Items.lead, 6,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.qian2 =
    (() => {
        const a = extend(Wall, "2qian2", { setBars() { lib.Health(this) } }); //铅墙
        a.health = 1280;
        a.size = 2;
        a.requirements = ItemStack.with(
            Items.lead, 24,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.qian3 =
    (() => {
        const a = extend(Wall, "3qian3", { setBars() { lib.Health(this) } }); //大铅墙
        a.health = 2280;
        a.size = 3;
        a.requirements = ItemStack.with(
            Items.lead, 54,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.tong3 =
    (() => {
        const a = extend(Wall, "4tong3", { setBars() { lib.Health(this) } }); //大铜墙
        a.health = 2280;
        a.size = 3;
        a.requirements = ItemStack.with(
            Items.copper, 54,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.tai3 =
    (() => {
        const a = extend(Wall, "5tai3", { setBars() { lib.Health(this) } }); //大钛墙
        a.health = 3560;
        a.size = 3;
        a.requirements = ItemStack.with(
            Items.titanium, 54,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.tu3 =
    (() => {
        const a = extend(Wall, "6tu3", { setBars() { lib.Health(this) } }); //大钍墙
        a.health = 5200;
        a.size = 3;
        a.requirements = ItemStack.with(
            Items.thorium, 54,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.sugang3 =
    (() => {
        const a = extend(Wall, "7sugang3", { setBars() { lib.Health(this) } }); //大塑钢墙
        a.health = 4680;
        a.size = 3;
        a.insulated = true;
        a.absorbLasers = true;
        a.requirements = ItemStack.with(
            hejinboli, 45,
            shimoxi, 18,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.hejin3 =
    (() => {
        const a = extend(Wall, "8hejin3", { setBars() { lib.Health(this) } }); //大合金墙
        a.health = 7280;
        a.size = 3;
        a.lightningChance = 0.08;
        a.lightningLength = 20;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 54,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
const PowerWall1 = new BatteryWall("PowerWall1");
PowerWall1.health = 500
PowerWall1.size = 2
PowerWall1.percentage = 4;//伤害比例1：5
PowerWall1.effect = Fx.none;
PowerWall1.sound = Sounds.none;
PowerWall1.buildCostMultiplier = 0.5;
PowerWall1.consumePowerBuffered(2000);//储电
PowerWall1.requirements = ItemStack.with(
    Items.graphite, 125,
    Items.copper, 30,
    Items.lead, 50,
);
PowerWall1.buildVisibility = BuildVisibility.shown;
PowerWall1.category = Category.defense;
PowerWall1.group = BlockGroup.walls
exports.PowerWall1 = PowerWall1

const PowerWall2 = new BatteryWall("PowerWall2");
PowerWall2.health = 1000
PowerWall2.size = 2
PowerWall2.percentage = 3;
PowerWall2.effect = Fx.none;
PowerWall2.sound = Sounds.none;
PowerWall2.buildCostMultiplier = 0.5;
PowerWall2.consumePowerBuffered(22000);//储电
PowerWall2.requirements = ItemStack.with(
    Items.silicon, 30,
    shimoxi, 500,
    weijing1, 30,
    Items.copper, 30,
    Items.lead, 50,
);
PowerWall2.buildVisibility = BuildVisibility.shown;
PowerWall2.category = Category.defense;
PowerWall2.group = BlockGroup.walls
exports.PowerWall2 = PowerWall2

const PowerWall3 = new BatteryWall("PowerWall3");
PowerWall3.health = 3200
PowerWall3.size = 3
PowerWall3.percentage = 1;
PowerWall3.effect = Fx.none;
PowerWall3.buildCostMultiplier = 0.5;
PowerWall3.sound = Sounds.none;
PowerWall3.consumePowerBuffered(85000);//储电
PowerWall3.requirements = ItemStack.with(
    shimoxi, 3200,
    guijingti, 70,
    weijing2, 25,
    Items.copper, 80,
    Items.lead, 100,
);
PowerWall3.buildVisibility = BuildVisibility.shown;
PowerWall3.group = BlockGroup.walls
PowerWall3.category = Category.defense;
exports.PowerWall3 = PowerWall3

exports.moli1 =
    (() => {
        const a = extend(Wall, "9moli1", { setBars() { lib.Health(this) } }); //小魔力石墙
        a.health = 2500;
        a.size = 1;
        a.buildCostMultiplier = 50;
        a.requirements = ItemStack.with(
            molishi, 6,
            zuanjing, 12,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.moli2 =
    (() => {
        const a = extend(Wall, "91moli2", { setBars() { lib.Health(this) } }); //魔力石墙


        a.health = 10000;
        a.buildCostMultiplier = 20;
        a.size = 2;
        a.requirements = ItemStack.with(
            molishi, 24,
            zuanjing, 48,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.hunhe3 =
    (() => {
        const a = extend(Wall, "93hunhe3", {
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
            setBars() { lib.Health(this) }
        }); //狙电魔微墙
        a.health = 8000;
        a.size = 3;
        a.insulated = true;
        a.absorbLasers = true;
        a.chanceDeflect = 8;
        // a.flashHit = true;
        a.requirements = ItemStack.with(
            hejinboli, 150,
            monengjing1, 20,
            weijing2, 12,
            shimoxi, 450,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();

//-----------------------------------------------------------
exports.hunhe4 =
    (() => {
        const a = extend(Wall, "92hunhe4", { setBars() { lib.Health(this) } }); //魔微墙
        a.health = 16000;
        a.size = 4;
        a.buildCostMultiplier = 100;
        a.lightningChance = 0.1;
        a.lightningColor = Color.valueOf("54a841"); //闪电颜色
        a.lightningLength = 40;
        a.requirements = ItemStack.with(
            monengjing1, 40,
            weijing2, 25,
            hejinboli, 150,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.shenwei =
    (() => {
        const a = extend(Wall, "shenwei", { setBars() { lib.Health(this) } }); //神威城防
        a.health = 50000 //14000;
        a.size = 5;
        a.buildCostMultiplier = 20;
        a.lightningChance = 0.15;
        a.lightningLength = 40;
        a.lightningColor = Color.valueOf("ff0000"); //闪电颜色
        a.lightningDamage = 20; //闪电伤害
        a.chanceDeflect = 12;
        a.requirements = ItemStack.with(
            guijingti, 8000,
            monengjing3, 2,
            weijing3, 150,
            jinhuiboli, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.qiang =
    (() => {
        const a = extend(Wall, "qiang", { setBars() { lib.Health(this) } }); //创世城防墙
        a.health = 1999999999;
        a.size = 4;
        a.placeableLiquid = true;//可被放在深水之上
        a.buildCostMultiplier = 2;
        a.insulated = true;
        a.absorbLasers = true;
        a.lightningChance = 0.25;
        a.lightningLength = 64;
        a.chanceDeflect = 20;
        a.requirements = ItemStack.with(
            chuangshiweichen, 1,
            guijingti, 20000,
            hejinboli, 18000,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.invincible2 =
    (() => {
        const a = extend(Wall, "invincible2", {
            setBars() { lib.Health(this) },
            isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); },//非沙盒禁止建造
        });
        a.health = 2147483647;
        a.placeableLiquid = true;
        a.size = 2;
        a.requirements = ItemStack.with(
            nulls, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
exports.moweimen =
    (() => {
        const a = extend(Door, "moweimen", { setBars() { lib.Health(this) } }); //魔力石门
        a.openfx = Fx.dooropenlarge;
        a.closefx = Fx.doorcloselarge;
        a.placeableLiquid = true;//可被放在深水之上
        a.health = 3500
        a.size = 2;
        a.requirements = ItemStack.with(
            molishi, 380,
            guijingti, 120,
            shimoxi, 240,
            weijing2, 20,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.defense;
        return a;
    })();
//-----------------------------------------------------------
exports.radar =
    (() => {
        const a = extend(Radar, "radar", { setBars() { lib.Health(this) } }); //雷达

        //a.placeableLiquid = true;//可被放在深水之上
        a.outlineColor = Color.valueOf("4a4b53");
        a.fogRadius = 60;
        a.consumePower(320 / 60);
        a.health = 450;
        a.discoveryTime = 60 * 60;
        a.size = 2;
        a.hittable = false;
        a.targetable = false;
        a.solid = false;
        a.requirements = ItemStack.with(
            Items.graphite, 125,
            Items.copper, 30,
            Items.lead, 50,
            guijingti, 80,
            shimoxi, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------






const jiasu3 = extend(OverdriveProjector, "jiasu3", {}); //微晶超速仪I
exports.jiasu3 = jiasu3

const jiasu4 = extend(OverdriveProjector, "jiasu4", {}); //微晶超速仪II
exports.jiasu4 = jiasu4

const jiasu5 = extend(OverdriveProjector, "jiasu5", {}); //微晶超速仪III
exports.jiasu5 = jiasu5

const jiasu6 = extend(OverdriveProjector, "jiasu6", {}); //迷你微晶超速仪
exports.jiasu6 = jiasu6
require('BlocksLibes/fanjiasu');
require('BlocksLibes/fanjiasu2');

const xianzhi = lib.createBuildLimit(10);
exports.chaojijiasuyi = //超级超速仪
    (() => {
        const a = extend(OverdriveProjector, "jiasu9", {

            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },



            canPlaceOn(tile, team, rotation) {
                if (!xianzhi.canBuild(team)) {
                    return false;
                }
                return this.super$canPlaceOn(tile, team, rotation);
            },
            drawPlace(x, y, rotation, valid) {
                let player = Vars.player;
                let rules = Vars.state.rules;
                let team = player.team();
                if ((team.core() != null && !team.core().items.has(this.requirements, rules.buildCostMultiplier)) && !rules.infiniteResources) {
                    this.drawPlaceText(Core.bundle.get("bar.noresources"), x, y, false);
                }

                if (!Vars.world.tile(x, y)) { return; }
                if (!xianzhi.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 10),
                        x, y, valid
                    );
                }
            },
        });
        a.buildType = prov(() => {
            return new JavaAdapter(OverdriveProjector.OverdriveBuild, {

                add() {
                    this.super$add();
                    if (this.team != Team.derelict) {
                        xianzhi.addBuild(this.team);
                    }
                },
                readBase(read) {
                    this.super$readBase(read);
                    if (this.team != Team.derelict) {
                        xianzhi.addBuild(this.team);
                    }
                },
                remove() {
                    if (this.added) { xianzhi.removeBuild(this.team); }
                    this.super$remove();
                },
            }, a);
        });
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        return a;
    })();


exports.shahechaosu10 =
    (() => {
        const a = extend(OverdriveProjector, "jiasu10", {
            isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); }
        }); //沙盒超速大
        a.placeableLiquid = true;//可被放在深水之上
        a.hasPower = false;
        a.hasItems = false;
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        return a;
    })();
exports.shahechaosu11 =
    (() => {
        const a = extend(OverdriveProjector, "jiasu11", {
            isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); }
        }); //沙盒超速小
        a.placeableLiquid = true;//可被放在深水之上
        a.hasPower = false;
        a.hasItems = false;
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        return a;
    })();
exports.deng = //灯
    (() => {
        const a = extend(LightBlock, "deng", {});
        a.canOverdrive = false
        a.size = 3
        a.health = 120
        a.brightness = 1
        a.radius = 500
        a.consumePower(2);
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.metaglass, 70,
            guijingti, 45,
            shimoxi, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
const fp = extend(ForceProjector, "hudun2", {});
fp.buildType = prov(() => {
    return new JavaAdapter(ForceProjector.ForceBuild, {
        drawShield() {
            if (!this.broken) {
                var radius = this.realRadius();
                Draw.z(Layer.shields);
                Draw.color(Color.valueOf("7dafff")/*这里是你要的颜色*/, Color.red, Mathf.clamp(this.hit));
                if (Core.settings.getBool("animatedshields")) {
                    Fill.poly(this.x, this.y, 6, radius);
                } else {
                    Lines.stroke(1.5);
                    Draw.alpha(0.09 + Mathf.clamp(0.08 * this.hit));
                    Fill.poly(this.x, this.y, 6, radius);
                    Draw.alpha(1);
                    Lines.poly(this.x, this.y, 6, radius);
                    Draw.reset();
                }
            }
            Draw.reset();
        }
    }, fp);
});
fp.consumePower(6);
fp.itemConsumer = fp.consumeItem(Items.phaseFabric, 1).boost();

fp.shieldHealth = 2450
fp.phaseShieldBoost = 3850 - 2450
exports.hudun2 = fp;

const fp2 = extend(ForceProjector, "hudun3", {});

fp2.consumePower(12);
fp2.itemConsumer = fp2.consumeItem(buding).boost();
fp2.shieldHealth = 3200
fp2.phaseShieldBoost = 7430 - 3200
exports.hudun3 = fp2;
exports.jianzaota = //建造塔
    (() => {
        const a = extend(BuildTurret, "buildTower", {});
        a.requirements = ItemStack.with(
            Items.copper, 500,
            Items.metaglass, 60,
            guijingti, 50,
            shimoxi, 20,
            weijing1, 30
        );
        a.health = 800;
        a.category = Category.effect;
        a.outlineColor = Pal.darkOutline;
        a.range = 90 * 8;
        a.size = 3;
        a.buildVisibility = BuildVisibility.shown;
        a.buildSpeed = 0.8;
        a.canOverdrive = false; //不可超速
        a.consumePower(4);
        return a;
    })();
exports.jianzaota2 = //建造塔2
    (() => {
        const a = extend(BuildTurret, "buildTower2", {});
        a.requirements = ItemStack.with(
            Items.copper, 2000,
            zijing1, 60,
            guijingti, 90,
            shimoxi, 30,
            weijing2, 75
        );
        a.canOverdrive = false; //不可超速
        a.health = 2500;
        a.category = Category.effect;
        a.outlineColor = Pal.darkOutline;
        a.range = 45 * 8;
        a.size = 3;
        a.buildVisibility = BuildVisibility.shown;
        a.buildSpeed = 5.6;
        a.consumePower(1200 / 60);
        return a;
    })();
exports.xiuli1 = //修理
    (() => {
        const a = extend(MendProjector, "xiuli1", {});
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
const A7 = lib.createBuildLimit(1);
exports.xiuli2 = //修理
    (() => {
        var block = extend(MendProjector, '15664^', {
            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },
            canPlaceOn(tile, team, rotation) {
                if (!A7.canBuild(team)) {
                    return false;
                }
                return this.super$canPlaceOn(tile, team, rotation);
            },
            drawPlace(x, y, rotation, valid) {
                let player = Vars.player;
                let rules = Vars.state.rules;
                let team = player.team();
                if ((team.core() != null && !team.core().items.has(this.requirements, rules.buildCostMultiplier)) && !rules.infiniteResources) {
                    this.drawPlaceText(Core.bundle.get("bar.noresources"), x, y, false);
                }

                if (!Vars.world.tile(x, y)) { return; }
                if (!A7.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 1),
                        x, y, valid
                    );
                }
            },
        });
        block.buildType = prov(() => {
            return new JavaAdapter(MendProjector.MendBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-li-d1"), this.x, this.y);
                    Draw.rect(Core.atlas.find("creators-li-d2"), this.x, this.y, 90 - Time.time * 0.3);
                    Draw.rect(Core.atlas.find("creators-li-d3"), this.x, this.y, 90 + Time.time * 0.07);
                    Draw.rect(Core.atlas.find("creators-li1"), this.x, this.y, 90 - Time.time * 0.1);
                    Draw.rect(Core.atlas.find("creators-li2"), this.x, this.y, 90 - Time.time * 0.15);
                    Draw.rect(Core.atlas.find("creators-li3"), this.x, this.y, 90 - Time.time * 0.5);
                    Draw.rect(Core.atlas.find("creators-li4"), this.x, this.y, 90 - Time.time * 0.7);
                    Draw.rect(Core.atlas.find("creators-li5"), this.x, this.y, 90 + Time.time * 1);
                    Draw.rect(Core.atlas.find("creators-li6"), this.x, this.y, 90 + Time.time * 0.6)
                    Draw.rect(Core.atlas.find("creators-li7"), this.x, this.y, 90 - Time.time * 0.8);
                    Draw.rect(Core.atlas.find("creators-li8"), this.x, this.y, 90 + Time.time * 0);
                    Draw.rect(Core.atlas.find("creators-li9"), this.x, this.y, 90 + Time.time * 0.7);
                    Draw.rect(Core.atlas.find("creators-li10"), this.x, this.y, 90 - Time.time * 1);
                    Draw.rect(Core.atlas.find("creators-li11"), this.x, this.y, 90 + Time.time * 1.5);
                    Draw.rect(Core.atlas.find("creators-li12"), this.x, this.y, 90 - Time.time * 0.65);
                    Draw.rect(Core.atlas.find("creators-li13"), this.x, this.y, 90 + Time.time * 0.3);
                    Draw.rect(Core.atlas.find("creators-li14"), this.x, this.y, 90 - Time.time * 0.7);
                    Draw.rect(Core.atlas.find("creators-li15"), this.x, this.y, 90 - Time.time * 2.5);
                    Draw.rect(Core.atlas.find("creators-li16"), this.x, this.y, 90 + Time.time * 1);
                    Draw.rect(Core.atlas.find("creators-li17"), this.x, this.y, 90 - Time.time * 0.8);
                },
                add() {
                    this.super$add();
                    if (this.team != Team.derelict) {
                        A7.addBuild(this.team);
                    }
                },
                readBase(read) {
                    this.super$readBase(read);
                    if (this.team != Team.derelict) {
                        A7.addBuild(this.team);
                    }
                },
                remove() {
                    if (this.added) { A7.removeBuild(this.team); }
                    this.super$remove();
                },
            }, block);
        });
        return block;
    })();
//--------------------------------------
exports.display =
    (() => {
        const a = extend(LogicDisplay, "display", {});//显示器
        a.health = 500;
        a.size = 16;
        a.hasPower = true
        a.consumePower(3);
        a.displaySize = 480;
        a.requirements = ItemStack.with(
            Items.copper, 1000,
            Items.lead, 1200,
            Items.metaglass, 120,
            shiying, 200,
            guijingti, 500,
            shimoxi, 200,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.logic;
        return a;
    })();
//----------------------------
exports.xinxiban =
    (() => {
        //信息版
        var a = extend(MessageBlock, 'xinxiban', {
            isPlaceable() { return lib.techDsAvailable() && this.super$isPlaceable(); },//非沙盒禁止建造
            canBreak(tile) { return false; },
        });
        a.maxNewlines = 24
        a.maxTextLength = 114514
        a.targetable = false;
        a.update = false;
        a.solid = false;
        a.requirements = ItemStack.with(
            nulls, 1,
        );
        a.alwaysUnlocked = true;
        a.health = 1;
        a.size = 2;
        a.buildVisibility = BuildVisibility.sandboxOnly;//仅沙盒
        a.category = Category.logic;
        a.buildType = prov(() => new JavaAdapter(MessageBlock.MessageBuild, {
            collide(other) { return false },
            damage(damage) { },
            handleDamage(tile, amount) { return 0; },
        }, a))
        return a;
    })();
//-----------------------
exports.weixiudian =
    (() => {
        const a = extend(RepairTurret, "weixiudian", {});//治疗点
        a.health = 240;
        a.size = 2;
        a.hasPower = true;
        a.powerUse = 4;
        a.repairRadius = 30 * 8;
        a.repairSpeed = 260 / 60;
        a.requirements = ItemStack.with(
            Items.copper, 60,
            Items.lead, 120,
            jin, 50,
            guijingti, 35,
            shimoxi, 20,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.units;
        return a;
    })();


    CTBlocks.hyperProcessor2.requirements = ItemStack.with(
        Items.copper, 180,
        Items.lead, 200,
        guijingti, 435,
        shimoxi, 220,
        weijing2, 40,
    ); CTBlocks.hyperProcessor2.liquidCapacity = 100;
    CTBlocks.hyperProcessor2.consumeLiquid(moliye, 0.5);
    CTBlocks.hyperProcessor2.range = 75 * 8;
//-------------
require('BlocksLibes/zhiliaoyi');
require('BlocksLibes/jianshangyi');
require('BlocksLibes/geshangyi');


const lib = require('lib')
const dsGlobal =require('BlocksLibes/qianzhi');
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, xudianchi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    invalid, dabaosuan, molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli, jinhuiboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = require('wupin');
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const guanbi = new Color.valueOf("ffffff");
const kaiqi = new Color.valueOf("2c2c2c");
const heDian = lib.loadSound("shuiDi");
exports.dianxiangan =
    (() => {
        const a = extend(PowerNode, "1dianxiangan", {}); //能量节点
        a.health = 260;
        a.size = 2;
        a.hasPower = true;
        a.outputsPower = true;
        a.consumesPower = true;
        a.laserRange = 15;
        a.maxNodes = 50;
        a.consumes.powerBuffered(10000)
        a.requirements = ItemStack.with(
            Items.copper, 20,
            Items.lead, 30,
            Items.titanium, 25,
            shimoxi, 10,
            guijingti, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.nengliangta =
    (() => {
        const a = extend(PowerNode, "nengliangta", {}); //能量塔
        a.health = 500;
        a.size = 2;
        a.consumesPower = true;
        a.hasPower = true;
        a.outputsPower = true;
        a.laserRange = 90;
        a.maxNodes = 2;
        a.consumes.powerBuffered(100000);
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 20,
            shimoxi, 100,
            guijingti, 80,
            Items.titanium, 65,
            weijing1, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.nengliangta2 =
    (() => {
        const a = extend(PowerNode, "nengliangta2", {isHidden() { return !dsGlobal.H1(); },}); //能量塔2
        a.health = 800;
        a.size = 2;
        a.consumesPower = true;
        a.hasPower = true;
        a.outputsPower = true;
        a.laserRange = 60;
        a.maxNodes = 5;
        a.consumes.powerBuffered(35000);
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 50,
            shimoxi, 150,
            guijingti, 120,
            Items.titanium, 300,
            weijing1, 75,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.jidianchi3 =
    (() => {
        const a = extend(Battery, "3jidianchi", {}); //3级电池
        a.health = 500;
        a.size = 3;
        a.outputsPower = true;
        a.consumesPower = true;
        a.fullLightColor = guanbi;
        a.emptyLightColor = kaiqi;
        a.consumes.powerBuffered(300000);
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 30,
            shimoxi, 150,
            guijingti, 80,
            Items.lead, 250,
            jingliantai, 60,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.jidianchi4 =
    (() => {
        const guanbi = new Color.valueOf("ffffff");
        const kaiqi = new Color.valueOf("2c2c2c");
        const DianChi = lib.createBuildLimit(5);//4级电池
        const a = extend(Battery, "4jidianchi", {
            isHidden() { return !dsGlobal.H1(); },
            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },
            canPlaceOn(tile, team) {
                if (!DianChi.canBuild(team)) {
                    return false;
                }
                return this.super$canPlaceOn(tile, team);
            },
            drawPlace(x, y, rotation, valid) {
                let player = Vars.player;
                let rules = Vars.state.rules;
                let team = player.team();
                if ((team.core() != null && !team.core().items.has(this.requirements, rules.buildCostMultiplier)) && !rules.infiniteResources) {
                    this.drawPlaceText(Core.bundle.get("bar.noresources"), x, y, false);
                }

                if (!Vars.world.tile(x, y)) { return; }
                if (!DianChi.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 5),
                        x, y, valid
                    );
                }
            },
        });
        a.buildType = prov(() => {
            return new JavaAdapter(Battery.BatteryBuild, {

                add() {
                    this.super$add();
                    if (this.team != Team.derelict) {
                        DianChi.addBuild(this.team);
                    }
                },
                readBase(read) {
                    this.super$readBase(read);
                    if (this.team != Team.derelict) {
                        DianChi.addBuild(this.team);
                    }
                },
                remove() {
                    if (this.added) { DianChi.removeBuild(this.team); }
                    this.super$remove();
                },
            }, a);
        });
        a.health = 3500;
        a.size = 5;
        a.outputsPower = true;
        a.consumesPower = true;
        a.fullLightColor = guanbi;
        a.emptyLightColor = kaiqi;
        a.consumes.powerBuffered(900000000);
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 30,
            shimoxi, 12000,
            guijingti, 480,
            Items.lead, 550,
            monengjing1, 200,
            weijing4, 20,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
Blocks.batteryLarge.fullLightColor = guanbi;
Blocks.batteryLarge.emptyLightColor = kaiqi;
Blocks.battery.fullLightColor = guanbi;
Blocks.battery.emptyLightColor = kaiqi;
//-----------------------------------------------------------
exports.jitaiyangneng3 =
    (() => {
        const a = extend(SolarGenerator, "3jitaiyangneng", {}); //3级太阳能
        a.health = 360;
        a.size = 4;
        a.hasPower = true;
        a.itemDuration = 470;
        a.itemCapacity = 2;
        a.liquidCapacity = 10;
        a.powerProduction = 2.5;
        a.requirements = ItemStack.with(
            shimoxi, 20,
            tanban, 3,
            Items.phaseFabric, 25,
            guijingti, 50,
            jingliantai, 80,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.jitaiyangneng4 =
    (() => {
        const a = extend(SingleTypeGenerator, "4jitaiyangneng", {}); //4级太阳能
        a.health = 630;
        a.size = 3;
        a.hasPower = true;
        a.buildCostMultiplier = 0.3;
        a.itemDuration = 280;
        a.itemCapacity = 3;
        //a.liquidCapacity = 10;
        a.powerProduction = 25;
        a.consumes.items(ItemStack.with(
            tanban, 1,
        ));
        a.requirements = ItemStack.with(
            shimoxi, 210,
            weijing1, 50,
            hejinboli, 25,
            guijingti, 220,
            jingliantai, 120,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------

//-----------------------------------------------------------
exports.gaojidirefadianji =
    (() => {
        const a = extend(ThermalGenerator, "gaojidirefadianji", {}); //高级地热
        a.health = 550;
        a.attribute = Attribute.heat;
        a.size = 3;
        a.floating = true;
        a.powerProduction = 2.5;
        a.generateEffect = Fx.redgeneratespark;
        a.requirements = ItemStack.with(
            shimoxi, 125,
            zijing1, 22,
            Items.lead, 150,
            guijingti, 130,
            jingliantai, 100,
            tanban, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.shuilifadianji =
    (() => {
        const a = extend(ImpactReactor, "shuilifadianji", {}); //水力电
        a.health = 160;
        a.size = 2;
        a.hasPower = true;
        a.hasLiquid = true;
        a.itemDuration = 60;
        a.warmupSpeed = 0.005;
        a.explosionRadius = 1;
        a.explosionDamage = 0;
        a.powerProduction = 6.516667;
        a.plasmas = 1;
        a.liquidCapacity = 50;
        a.buildCostMultiplier = 5;
        a.consumes.power(0.016667);
        a.consumes.liquid(Liquids.water, 0.261);
        a.requirements = ItemStack.with(
            Items.copper, 150,
            hejinboli, 20,
            shimoxi, 40,
            guijingti, 30,
            Items.lead, 350,
            Items.titanium, 10,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
const ee = 1 / 90;
const hh = 1 / 120;
exports.chongdianqi =
    (() => {
        const a = extend(GenericCrafter, "chongdianqi", {});
        a.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, a, {
            BT: 0.0,
            BK: true,
            updateTile() {
                this.super$updateTile();
                if (this.cons.valid()) {
                    if (this.BK) {
                        if (this.BT > 1) {
                            this.BK = false;
                            this.BT -= hh;
                        }
                        else {
                            this.BT += ee;
                        }
                    }
                    else {
                        if (this.BT < 0.5) {
                            this.BK = true;
                            this.BT += ee;
                        }
                        else {
                            this.BT -= hh;
                        }
                    }
                }
                else {
                    if (this.BT > 0.0) {
                        this.BT -= hh;
                    }
                }
            },
            draw() {
                this.super$draw();
                Draw.color(Color.valueOf("00ad12"));
                Draw.alpha(this.BT);
                Draw.rect(Core.atlas.find(a.name + "-top"), this.x, this.y);

                var sG = Core.atlas.find(a.name + "-statustop");
                Draw.color(1.0, 0.0, 0.1);
                Draw.alpha(1.0 - this.progress);
                Draw.rect(sG, this.x, this.y);
                Draw.color(0.0, 1.0, 0.0);
                Draw.alpha(this.progress);
                Draw.rect(sG, this.x, this.y);
                Draw.reset();
            }
        });
        a.health = 350; //充电器
        a.size = 2;
        a.itemCapacity = 60;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 300;
        a.consumes.power(50000 / 60 / 5);
        a.consumes.items(new ItemStack.with(
            shimoxi, 5,
            Items.silicon, 5,
            Items.surgeAlloy, 3,
        ));
        a.outputItem = new ItemStack(
            xudianchi, 1,
        );
        a.requirements = ItemStack.with(
            Items.lead, 25,
            Items.copper, 60,
            Items.titanium, 40,
            Items.surgeAlloy, 50,
            guijingti, 80,
            shimoxi, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
exports.fangdianqi =
    (() => {
        const a = extend(ItemLiquidGenerator, "fangdianqi", {
            getItemEfficiency(item) {
                // if (item.xudianchi) {
                //     return 1.0;
                // }
                if (item.name == "creators-xudianchi") {
                    return 1.0;
                }
                return 0.0;
            },
            setStats() {
                this.super$setStats();
                // this.stats.add(Stat.output, Vars.content.getByName(ContentType.item,"creators-xudianchi"));
                this.stats.add(Stat.output, 100, StatUnit.percent);
            }
        }); //放电器
        a.health = 450;
        a.size = 2;
        // a.hasPower = true;
        a.buildCostMultiplier = 0.7;
        a.itemDuration = 600;
        a.itemCapacity = 5;
        a.powerProduction = 5000 / 60;
        a.maxLiquidGenerate = 0.0;
        a.randomlyExplode = false;
        a.hasItems = true;
        a.hasLiquids = false;
        a.baseExplosiveness = 80;
        a.breakSound = Sounds.plasmaboom;
        a.activeSound = Sounds.hum;
        a.activeSoundVolume = 1.51;
        a.heatColor = Color.valueOf("FB8B00");
        a.update = true;
        a.destructible = true;
        a.solid = true;
        a.rotate = false;
        a.breakable = true;
        a.rebuildable = true;
        a.sync = true;
        a.targetable = true;
        a.canOverdrive = true;
        a.requirements = ItemStack.with(
            Items.lead, 25,
            Items.copper, 60,
            weijing1, 15,
            Items.surgeAlloy, 50,
            guijingti, 80,
            shimoxi, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();

exports.shiyoufadianji =
    (() => {
        const a = extend(ItemLiquidGenerator, "shiyoufadianji", { //石油发电机-----@guiYMOUR编写
            getItemEfficiency(item) {
                return 0;
            },
            getLiquidEfficiency(liquid) {
                return 1;
            },
        });
        a.hasLiquid = true;
        a.hasItems = false;
        a.health = 550;
        a.size = 3;
        a.liquidCapacity = 100;
        a.powerProduction = 8;
        a.maxLiquidGenerate = 0.3;
        a.consumes.liquid(Liquids.oil, 0.3);
        a.requirements = ItemStack.with(
            shimoxi, 30,
            Items.copper, 150,
            Items.lead, 350,
            Items.titanium, 80,
            Items.metaglass, 40,
            guijingti, 50,
            jingliantai, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.yanjiangfadianji =
    (() => {
        const a = extend(ItemLiquidGenerator, "yanjiangfadianji", { //岩浆发电机-----@guiYMOUR编写
            getItemEfficiency(item) {
                return 0;
            },
            getLiquidEfficiency(liquid) {
                return 1;
            },
        });
        //a.consumesPower = true;
        a.outputsPower = true;
        a.hasLiquid = true;
        a.hasItems = false;
        a.health = 360;
        a.size = 2;
        a.liquidCapacity = 50;
        a.powerProduction = 5;
        a.maxLiquidGenerate = 0.18
        a.consumes.liquid(Liquids.slag, 0.18);
        a.requirements = ItemStack.with(
            shimoxi, 10,
            Items.copper, 50,
            Items.lead, 80,
            hejinboli, 10,
            Items.titanium, 20,
            Items.silicon, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
// //-----------------------------------------------------------
exports.gaoxiaowolunfadianji =
    (() => {
        const a = extend(BurnerGenerator, "gaoxiaowolunfadianji", {isHidden() { return !dsGlobal.H1(); },}); //高效涡轮发电
        a.health = 360;
        a.size = 3;
        a.hasItems = true;
        a.itemDuration = 110;
        a.itemCapacity = 3;
        a.powerProduction = 15;
        a.consumes.liquid(Liquids.water, 0.2);
        a.requirements = ItemStack.with(
            shimoxi, 90,
            jin, 35,
            weijing1, 45,
            guijingti, 80,
            jingliantai, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.molichongjifadianji =
    (() => {
        const a = extend(ImpactReactor, "molichongjifadianji", {}); //炸药冲击发电
        a.health = 1200; //
        a.size = 4;
        a.buildCostMultiplier = 3;
        a.itemCapacity = 10;
        a.liquidCapacity = 30;
        a.itemDuration = 240;
        a.warmupSpeed = 0.0008;
        a.powerProduction = 416.6667;
        a.explosionRadius = 23; //爆炸半径 除以8
        a.explosionDamage = 1900; //爆炸伤害
        a.hasLiquid = true;
        a.hasPower = true;
        //a.consumes.powerBuffered(130000);
        //a.consumes.power(83.333333);
        a.consumes.power(5000 / 60);
        a.ambientSound = Sounds.pulse;
        a.ambientSoundVolume = 0.07;
        a.consumes.liquid(jinglianlio, 3.5 / 60);
        a.consumes.items(ItemStack.with(
            zhayao, 2,
        ));
        a.requirements = ItemStack.with(
            shimoxi, 250,
            monengjing, 10,
            weijing1, 20,
            guijingti, 300,
            hejinboli, 80,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.molizhifanyingdui =
    (() => {
        const a = extend(NuclearReactor, "molizhifanyingdui", {}); //魔力核电
        a.health = 800;
        a.size = 3;
        a.buildCostMultiplier = 3.7;
        a.itemCapacity = 60;
        a.liquidCapacity = 50;
        a.itemDuration = 600;
        a.flashThreshold = 0.46; //快闪阈值 
        a.coolantPower = 0.5;
        a.explosionRadius = 48; //爆炸半径 除以8
        a.heating = 0.01;
        a.explosionDamage = 1600; //爆炸伤害
        a.ambientSound = Sounds.hum;
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.rebuildable = false;
        a.powerProduction = 25;
        //a.consumes.liquid(moliye, 0.009);
        a.consumes.liquid(moliye, 0.59 / 60).update = false;
        a.consumes.items(ItemStack.with(
            Items.thorium, 2,
        ));
        a.requirements = ItemStack.with(
            shimoxi, 150,
            jin, 20,
            zuanjing, 20,
            zijing1, 25,
            hejinboli, 10

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.monengfanyingdui =
    (() => {
        const a = extend(NuclearReactor, "monengfanyingdui", {isHidden() { return !dsGlobal.H1(); },}); //魔能核电
        a.health = 6300;
        a.size = 5;
        a.buildCostMultiplier = 1.2;
        a.itemCapacity = 60;
        a.liquidCapacity = 100;
        a.itemDuration = 600;
        a.flashThreshold = 0.46; //快闪阈值 
        a.coolantPower = 0.5;
        a.explosionRadius = 80; //爆炸半径 除以8
        a.heating = 0.01;
        a.explosionDamage = 8200; //爆炸伤害
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.rebuildable = false;
        a.ambientSound = heDian;
        a.powerProduction = 1000;
        a.consumes.liquid(molijinghuaye, 0.45);
        a.consumes.items(ItemStack.with(
            monengjing1, 1,
        ));
        a.requirements = ItemStack.with(
            shimoxi, 1000,
            jin, 550,
            zuanjing, 450,
            monengjing, 150,
            weijing2, 50,
            weijing3, 10,
            hejinboli, 300
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
//-----------------------------------------------------------
exports.juhechongji =
    (() => {
        const a = extend(ImpactReactor, "juhechongji", {isHidden() { return !dsGlobal.H1(); },}); //聚核冲击发电
        a.health = 7500; //
        a.size = 8;
        a.buildCostMultiplier = 5;
        a.itemCapacity = 50;
        a.liquidCapacity = 1000;
        a.itemDuration = 420;
        a.warmupSpeed = 0.0002;
        a.powerProduction = 6366.66666667;
        a.explosionRadius = 240; //爆炸半径 除以8
        a.explosionDamage = 45000; //爆炸伤害
        a.hasLiquid = true;
        a.hasPower = true;
        //a.consumes.powerBuffered(130000);
        a.consumes.power(900);
        a.ambientSound = Sounds.pulse;
        a.ambientSoundVolume = 0.15;
        a.consumes.liquid(qiangxiaolengqueye, 0.1666666667);
        a.consumes.items(ItemStack.with(
            juhebaozhawu, 2,
        ));
        a.requirements = ItemStack.with(
            Items.copper, 7500,
            Items.lead, 9200,
            buding, 1800,
            shimoxi, 5000,
            hejinboli, 3000,
            guijingti, 4300,
            weijing3, 450,
            weijing5, 20,
            monengjing3, 8,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();




























































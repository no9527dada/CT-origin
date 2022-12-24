const lib = require('lib')
const dsGlobal = require('BlocksLibes/qianzhi');
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, xudianchi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
      molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli, jinhuiboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = CTItem
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const guanbi = new Color.valueOf("ffffff");
const kaiqi = new Color.valueOf("2c2c2c");
const heDian = CreatorsSound.loadSound("shuiDi");
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
        a.consumePowerBuffered(800)
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
        a.consumePowerBuffered(1000);
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
        const a = extend(PowerNode, "nengliangta2", {}); //能量塔2
        a.health = 800;
        a.size = 2;
        a.consumesPower = true;
        a.hasPower = true;
        a.outputsPower = true;
        a.laserRange = 60;
        a.maxNodes = 5;
        a.consumePowerBuffered(1300);
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
exports.CP2Link =
    (() => {
        const a = extend(BeamNode, "CP2-link", {
        /*     //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                
                //-------------------------
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                };

                for(let i = 0; i < 4; i++){
                    let maxLen = this.range + this.size/2;
                    var dest = null;
                    var dir = Geometry.d4[i];
                    let dx = dir.x;
                    let dy = dir.y;
                    let offset = this.size/2;
                    for(let j = 1 + offset; j <= this.range + offset; j++){
                        var other = Vars.world.build(x + j * dir.x, y + j * dir.y);
        
                        //hit insulated wall
                        if(other != null && other.isInsulated()){
                            break;
                        }
        
                        if(other != null && other.block.hasPower && other.team == Vars.player.team() && !(other.block instanceof PowerNode)){
                            maxLen = j;
                            dest = other;
                            break;
                        }
                    }
        
                    Drawf.dashLine(Pal.placing,
                        x * this.tilesize + dx * (this.tilesize * this.size / 2 + 2),
                        y * this.tilesize + dy * (this.tilesize * this.size / 2 + 2),
                        x * this.tilesize + dx * (maxLen) * this.tilesize,
                        y * this.tilesize + dy * (maxLen) * this.tilesize
                    );
        
                    if(dest != null){
                        Drawf.square(dest.x, dest.y, dest.block.size * this.tilesize/2 + 2.5, 0);
                    }
                };
            }, */
        }); //十字能量节点
        a.range = 60;
       // a.fogRadius = 3;
        a.health = 320;
        a.size = 3;
        a.hasPower = true;
        a.outputsPower = true;
        a.consumesPower = true;
        a.consumePowerBuffered(1300)
        a.requirements = ItemStack.with(
            Items.copper, 20,
            Items.lead, 30,
            Items.titanium, 25,
            shimoxi, 10,
            guijingti, 50,
            molishi, 35,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.lichangjiedian =
    (() => {
        //力场节点

        const a = new CreatorsPowerField("lichangjiedian")
        a.laserRange = 30;
        a.consumesPower = true
        a.insulated = false;
        a.health = 500;
        a.size = 2;
        a.drawAlphaA = 0.1
        a.drawAlphaB = 1
        a.drawColor = Color.valueOf("c0f8ff")   //Team.sharded.color;
        a.consumePower(900 / 60);
        a.requirements = ItemStack.with(
            Items.copper, 40,
            Items.lead, 35,
            jingliantai, 45,
            shimoxi, 100,
            guijingti, 150,
            monengjing, 35,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.lichangjiedian2 =
    (() => {
        //大型力场节点
        const a = new CreatorsPowerField("lichangjiedian2")
        a.laserRange = 50;
        a.consumesPower = true
        a.insulated = false;
        a.drawAlphaA = 0.1
        a.drawAlphaB = 1
        a.drawColor = Color.valueOf("c0f8ff")   //Team.sharded.color;
        a.consumePower(2200 / 60);
        a.health = 720;
        a.size = 3;
        a.requirements = ItemStack.with(
            Items.copper, 55,
            Items.lead, 40,
            jingliantai, 70,
            shimoxi, 200,
            guijingti, 150,
            monengjing1, 120,
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
        a.consumePowerBuffered(300000);
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
        let guanbi0 = new Color.valueOf("ffffff");
        let kaiqi0 = new Color.valueOf("2c2c2c");
        const a = extend(Battery, "4jidianchi", {
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
        });

        a.health = 3500;
        a.size = 5;
        a.outputsPower = true;
        a.consumesPower = true;
        a.fullLightColor = guanbi0;
        a.emptyLightColor = kaiqi0;
        a.consumePowerBuffered(90000000);
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 350,
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
CTBlocks.batteryLarge.fullLightColor = guanbi;
CTBlocks.batteryLarge.emptyLightColor = kaiqi;
CTBlocks.battery.fullLightColor = guanbi;
CTBlocks.battery.emptyLightColor = kaiqi;
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
            guijingti, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
//-----------------------------------------------------------
exports.jitaiyangneng4 =
    (() => {
        const a = extend(ConsumeGenerator, "4jitaiyangneng", {}); //4级太阳能
        a.health = 630;
        a.size = 3;
        a.hasPower = true;
        a.buildCostMultiplier = 0.3;
        a.itemDuration = 280;
        a.itemCapacity = 3;
        //a.liquidCapacity = 10;
        a.powerProduction = 25;
        a.consumeItems(ItemStack.with(
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
        a.powerProduction = 3;
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
        a.consumePower(0.016667);
        a.consumeLiquid(Liquids.water, 0.261);
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
exports.chongdianqi =//充电器
    (() => {
        const a = extend(GenericCrafter, "chongdianqi", {});
        a.buildType = () => extend(GenericCrafter.GenericCrafterBuild, a, {
            BT: 0.0,
            BK: true,
            updateTile() {
                this.super$updateTile();
                if (this.canConsume()) {
                    if (this.BK) {
                        if (this.BT > 1) {
                            this.BK = false;
                            this.BT -= hh;
                        }
                        else {
                            this.BT += ee;
                        };
                    }
                    else {
                        if (this.BT < 0.5) {
                            this.BK = true;
                            this.BT += ee;
                        }
                        else {
                            this.BT -= hh;
                        };
                    };
                }
                else {
                    if (this.BT > 0.0) {
                        this.BT -= hh;
                    }
                };
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
        a.consumePower(50000 / 60 / 5);
        a.consumeItems(new ItemStack.with(
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


exports.fangdianqi =//放电器
    (() => {
        const a = new CreatorsNoChooseMulti("fangdianqi-2", 1);
        a.TableColor = Color.white;
        // a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.oil), new DrawDefault())

        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(xudianchi, 1), 0),
            new CreatorsRecipe.OutputContents(5000 / 60), 600.0,
        );
        a.health = 450;
        a.size = 2;
        a.buildCostMultiplier = 0.7;
        a.itemCapacity = 5;
        a.hasItems = true;
        a.hasLiquids = false;
        a.baseExplosiveness = 80;
        a.updateEffect = Fx.electrified //电池紊乱
        //a.breakSound = Sounds.plasmaboom;
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
//-----------------------------------------------------------



exports.shiyoufadianji =//
    (() => {
        const a = new CreatorsNoChooseMulti("shiyoufadianji-2", 1);
        a.TableColor = Color.white;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.oil), new DrawDefault())

        a.addRecipe(
            new CreatorsRecipe.InputContents(LiquidStack.with(Liquids.oil, 0.3 * 60), 0),
            new CreatorsRecipe.OutputContents(600 / 60), 60.0,
        );
        a.health = 550;
        a.size = 3;
        a.liquidCapacity = 100;
        a.craftEffect = Fx.none;
        a.updateEffect = Fx.none;
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
exports.yanjiangfadianji =//
    (() => {
        const a = new CreatorsNoChooseMulti("yanjiangfadianji-2", 1);
        a.TableColor = Color.white;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.slag), new DrawDefault())

        a.addRecipe(
            new CreatorsRecipe.InputContents(LiquidStack.with(Liquids.slag, 0.18 * 60), 0),
            new CreatorsRecipe.OutputContents(650 / 60), 60.0,
        );
        a.health = 380;
        a.size = 2;
        a.liquidCapacity = 50;
        a.craftEffect = Fx.none;
        a.updateEffect = Fx.none;
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
exports.gaoxiaowolunfadianji =//高效涡轮发电机
    (() => {
        const a = extend(ConsumeGenerator, "gaoxiaowolunfadianji", {
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
        }); //高效涡轮发电
        a.health = 360;
        a.size = 3;
        a.hasItems = true;
        a.itemDuration = 110;
        a.itemCapacity = 3;
        a.powerProduction = 17;
        a.consume(new ConsumeItemFlammable());
        a.consume(new ConsumeItemExplode());
        a.consumeLiquid(Liquids.water, 0.2);
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
        a.powerProduction = 30000 / 60;
        a.explosionRadius = 23; //爆炸半径 除以8
        a.explosionDamage = 1900; //爆炸伤害
        a.hasLiquid = true;
        a.hasPower = true;
        //a.consumePowerBuffered(130000);
        //a.consumePower(83.333333);
        a.consumePower(5000 / 60);
        a.ambientSound = Sounds.pulse;
        a.ambientSoundVolume = 0.07;
        a.consumeLiquid(jinglianlio, 3.5 / 60);
        a.consumeItems(ItemStack.with(
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
        a.explosionRadius = 48; //爆炸半径 除以8
        a.explosionDamage = 1600; //爆炸伤害
        a.ambientSound = Sounds.hum;
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.rebuildable = false;
        a.heating = 0.01;
        a.coolantPower = 35;
        a.fuelItem = Items.thorium;
        a.powerProduction = 1500 / 60;
        //a.consumeLiquid(moliye, 0.009);
        a.consumeLiquid(moliye, 1.2/60)
        a.consumeItems(ItemStack.with(
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
        const a = extend(NuclearReactor, "monengfanyingdui", {
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
        }); //魔能核电
        a.health = 6300;
        a.size = 5;
        a.buildCostMultiplier = 1.2;
        a.itemCapacity = 60;
        a.liquidCapacity = 100;
        a.itemDuration = 300;
        a.flashThreshold = 0.46; //快闪阈值 
        a.explosionRadius = 80; //爆炸半径 
        a.explosionDamage = 8200; //爆炸伤害
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.rebuildable = false;
        a.ambientSound = heDian;
        a.powerProduction = 90000 / 60;

        a.heating = 0.003;
        a.coolantPower = 0.5;
        a.consumeLiquid(molijinghuaye, 26/60)
        
        a.fuelItem = monengjing1;
        a.consumeItems(ItemStack.with(
            monengjing1, 2,
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
        const a = extend(ImpactReactor, "juhechongji", {}); //聚核冲击发电
        a.health = 7500; //
        a.size = 8;
        a.buildCostMultiplier = 5;
        a.itemCapacity = 100;
        a.liquidCapacity = 1000;
        a.itemDuration = 360;
        a.warmupSpeed = 0.0002;
        a.powerProduction = 250001 / 60;
        a.explosionRadius = 240; //爆炸半径 除以8
        a.explosionDamage = 45000; //爆炸伤害
        a.hasLiquid = true;
        a.hasPower = true;
        //a.consumePowerBuffered(130000);
        a.consumePower(82000 / 60);
        a.ambientSound = Sounds.pulse;
        a.ambientSoundVolume = 0.15;
        a.consumeLiquid(qiangxiaolengqueye, 0.1666666667);
        a.consumeItems(ItemStack.with(
            juhebaozhawu, 3,
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




























































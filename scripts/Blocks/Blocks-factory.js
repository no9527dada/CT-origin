//更换原版资源ui贴图
/*
Events.on(EventType.ClientLoadEvent, cons(e => {
    Items.lead.uiIcon = Core.atlas.find("creators-lead22", Items.lead.fullIcon);
}))
//*************************************** */
//a.group = BlockGroup.transportation;
// a.group = BlockGroup.liquids;
//a.floating = true; 水边缘
//a.requiresWater= true; 水中放置


Blocks.deepTaintedWater.attributes.set(Attribute.spores, 0.23);
Blocks.router.speed = 0; //路由器
Blocks.router.instantTransfer = true;
Blocks.router.itemCapacity = 5;
Blocks.router.canOverdrive = true;
UnitTypes.flare.mineTier = 2; //原版T1飞机采矿等级
UnitTypes.flare.mineSpeed = 2.0; //原版T1飞机采矿速度
UnitTypes.horizon.mineTier = 3; //原版T2飞采矿等级
UnitTypes.horizon.mineSpeed = 3; //原版T2飞采矿速度
UnitTypes.zenith.mineTier = 4; //原版T3飞采矿等级
UnitTypes.zenith.mineSpeed = 3; //原版T3飞采矿速度
UnitTypes.poly.speed = 6; ///原版T2建造及机
UnitTypes.poly.buildSpeed = 0.8;
UnitTypes.alpha.speed = 3; //原版1级飞机
UnitTypes.alpha.buildSpeed = 1;
UnitTypes.beta.speed = 4; //原版2级飞机
UnitTypes.beta.buildSpeed = 1.25;
UnitTypes.gamma.speed = 5; //原版3级飞机
UnitTypes.gamma.buildSpeed = 2;
UnitTypes.mega.speed = 5; //原版T3绿飞机
Blocks.blastMixer.consumes.items(new ItemStack.with( //爆炸混合物机器
    Items.pyratite, 3,
    Items.sporePod, 4,
));
Blocks.blastMixer.outputItem = new ItemStack( //爆炸混合物机器
    Items.blastCompound, 3,
);
Blocks.blastMixer.consumes.power(1.2);//爆炸混合物机器
Blocks.blastMixer.craftEffect = Fx.explosion;//爆炸混合物机器
Blocks.blastMixer.craftTime = 140; //爆炸混合物机器
Blocks.sporePress.craftTime = 15; //孢子压缩机工作时间
Blocks.liquidRouter.liquidCapacity = 30; //液体路由器
Blocks.powerSource.laserRange = 20; //电力院
Blocks.powerSource.maxNodes = 100;
Blocks.powerSource.health = 100000;
Blocks.waterExtractor.pumpAmount = 0.131; //抽水机抽水量
Blocks.sporePress.craftTime = 15; //孢子压缩机工作时间
Blocks.phaseConduit.liquidCapacity = 35; //布导管桥
Blocks.surgeSmelter.craftTime = 60//合金
Blocks.kiln.craftTime = 24//玻璃

Blocks.itemSource.health = 100000;//物品源
Blocks.liquidSource.health = 100000;//液体源

// Vars.ui.menufrag = extend(MenuFragment, {
//     build(group){

//     }
//   });



const lib = require('lib')
const dsGlobal = require('BlocksLibes/qianzhi');
const DrawS = require('BlocksLibes/DrawS');
const { abomb4GC } = require('BlocksLibes/v6');
const { MultiCrafter1 } = require("XuanZeV7");
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    invalid, dabaosuan, molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, canza, hejinboli, xudianchi,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, jinhuiboli,
} = require('wupin');
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX





exports.fensuiji =
    (() => {
        const a = abomb4GC({//制沙机
            name: 'fensuiji',
            noParallelAffect: false,
            itemCapacity: 20,
            liquidCapacity: 15,
            updateEffectChance: 0.09,
            updateEffect: Fx.steam,
            ambientSound: Sounds.machine,
            ambientSoundVolume: 0.5,
            plans: [
                {
                    consume: {
                        power: 2,
                        items: [
                            { item: jin, amount: 1 },
                        ]
                    },
                    output: {
                        items: [

                            { item: jinfen, amount: 2 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 30,
                },
                {
                    consume: {
                        power: 1,
                        items: [
                            { item: kuangzajinghuawu, amount: 5 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.sand, amount: 14 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 30,
                },
                {
                    consume: {
                        power: 1,
                        items: [
                            { item: Items.scrap, amount: 5 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.sand, amount: 8 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 30,
                },
                {
                    consume: {
                        power: 1,
                        items: []
                    },
                    output: {
                        items: [

                            { item: Items.sand, amount: 2 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 200,
                },
            ]
        });
        a.outputsPower = false;
        a.group = BlockGroup.transportation
        return a;
    })();

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
exports.shiyingronglu =//石英熔炉
    (() => {
        const a = extend(GenericCrafter, "b-shiyingronglu", {});
        a.drawer = new DrawSmelter(Color.valueOf("DADADA"));
        a.health = 150;
        a.buildCostMultiplier = 0.1;
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 50;
        a.updateEffect = Fx.bubble;
        a.consumes.power(1);
        a.consumes.items(new ItemStack.with(
            Items.sand, 1,
            Items.graphite, 1,
        ));
        a.outputItem = new ItemStack(
            shiying, 3,
        );
        a.requirements = ItemStack.with(
            Items.copper, 50,
            Items.lead, 80,
            Items.graphite, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------

exports.guijingtichengxingji =//硅晶体成型机,
    (() => {
        const a = extend(GenericCrafter, "a-1guijingtichengxingji", {});
        a.health = 120;
        a.size = 2;
        a.hasPower = true;
        a.drawer = new DrawSmelter(Color.valueOf("8FC0D5"));
        a.hasItems = true;
        a.buildCostMultiplier = 0.3;
        a.craftTime = 80;
        a.updateEffect = Fx.steam;
        a.consumes.power(1);
        a.outputItem = new ItemStack(
            guijingti, 1,
        );
        a.consumes.items(new ItemStack.with(
            Items.silicon, 2,
            shiying, 1,
        ));
        a.requirements = ItemStack.with(
            // Items.titanium, 26,
            Items.metaglass, 62,
            Items.silicon, 55,
            Items.copper, 85,
            Items.lead, 85,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.liuji =
    (() => {
        const a = abomb4GC({
            name: 'liuji',
            noParallelAffect: true,//false,
            itemCapacity: 20,
            liquidCapacity: 10,
            updateEffectChance: 0.15,
            updateEffect: Fx.steam,
            ambientSound: Sounds.machine,
            ambientSoundVolume: 0.5,
            plans: [
                {
                    consume: {
                        power: 0.2,
                        items: [
                            { item: Items.coal, amount: 1 },
                            { item: Items.lead, amount: 2 },
                            { item: Items.sand, amount: 2 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.pyratite, amount: 1 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 69,
                },
                {
                    consume: {
                        power: 0.5,
                        items: [
                            { item: xiao, amount: 1 },
                            { item: Items.coal, amount: 2 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.pyratite, amount: 1 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 69,
                },
            ]
        });
        a.group = BlockGroup.transportation
        return a;
    })();

//-----------------------------------------------------------
exports.guilu =//硅炉
    (() => {
        const a = extend(AttributeSmelter, "guilu", {});
        a.health = 360;
        a.craftEffect = Fx.smeltsmoke;
        a.drawer = new DrawSmelter(Color.valueOf("B0BAC0"));
        a.boostScale = 0.1;
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 20;
        a.craftTime = 70;
        a.updateEffect = Fx.smoke;
        a.consumes.power(3);
        a.consumes.items(new ItemStack.with(
            Items.coal, 2,
            Items.sand, 3));
        a.outputItem = new ItemStack(
            Items.silicon, 4,
        );
        a.requirements = ItemStack.with(
            Items.copper, 330,
            Items.lead, 330,
            Items.titanium, 120,
            Items.silicon, 220,
            guijingti, 60,
            shiying, 450
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.guijingtihechengji =//硅晶体合成机
    (() => {
        const a = extend(GenericCrafter, "a-2guijingtihechengji", {});
        a.health = 360;
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 180;
        a.drawer = new DrawSmelter(Color.valueOf("BCCEE3"));
        a.updateEffect = DrawS.guijingtihechengjiSteam;
        a.updateEffectChance = 0.3;
        a.consumes.power(5);
        a.consumes.liquid(Liquids.cryofluid, 0.05);
        a.consumes.items(new ItemStack.with(
            Items.silicon, 4,
            shiying, 3,
        ));
        a.outputItem = new ItemStack(
            guijingti, 5,
        );
        a.requirements = ItemStack.with(
            Items.silicon, 225,
            Items.titanium, 80,
            Items.surgeAlloy, 20,
            zijing1, 10,
            guijingti, 30,

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.guijingtigongchang =//硅晶体工厂
    (() => {
        const a = extend(GenericCrafter, "a-3guijingtigongchang", {});
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-a-3guijingtigongchang-1"), this.x, this.y, 45 - Time.time * 3);
                    Draw.rect(Core.atlas.find("creators-a-3guijingtigongchang-1"), this.x, this.y, 90 + Time.time * 3);
                },
            }, a);
        });
        a.health = 500;
        a.size = 2;
        a.itemCapacity = 20;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 100;
        a.drawer = new DrawSmelter(Color.valueOf("18CFDE"));
        a.updateEffect = Fx.bubble;
        a.consumes.power(10.6);
        a.consumes.items(new ItemStack.with(
            Items.silicon, 6, shiying, 5,
        ));
        a.outputItem = new ItemStack(
            guijingti, 10,
        );
        a.requirements = ItemStack.with(
            Items.copper, 450,
            Items.lead, 400,
            zuanjing, 130,
            hejinboli, 200,
            weijing2, 10,
            guijingti, 350,

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
const SMX = require('BlocksLibes/shimoxi');//石墨烯制造器
SMX.shimoxiji.buildVisibility = BuildVisibility.shown;
SMX.shimoxiji.drawer = new DrawSmelter(Color.valueOf("426996"));
SMX.shimoxiji.craftEffect = Fx.smeltsmoke;
SMX.shimoxiji.health = 180;
SMX.shimoxiji.size = 2;
SMX.shimoxiji.hasPower = true;
SMX.shimoxiji.hasItems = true;
SMX.shimoxiji.buildCostMultiplier = 0.35;
SMX.shimoxiji.craftTime = 95;
SMX.shimoxiji.consumes.power(0.6);
SMX.shimoxiji.consumes.items(new ItemStack.with(
    Items.graphite, 5, Items.lead, 2,
));
SMX.shimoxiji.outputItem = new ItemStack(
    shimoxi, 1,
);
SMX.shimoxiji.requirements = ItemStack.with(
    Items.lead, 50,
    Items.titanium, 15,
    Items.graphite, 25,
    guijingti, 30,
);
SMX.shimoxiji.buildVisibility = BuildVisibility.shown;
SMX.shimoxiji.category = Category.crafting;
SMX.group = BlockGroup.transportation
exports.shimoxiji = SMX.shimoxiji
//-----------------------------------------------------------

exports.xitilianji =
    (() => {
        const a = extend(GenericCrafter, "xitilianji", {});
        a.health = 220;
        a.size = 2;
        a.itemCapacity = 10;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 40;
        a.craftEffect = Fx.steam;
        a.updateEffect = Fx.steam;
        a.updateEffectChance = 0.05;
        a.consumes.power(0.7);
        a.consumes.items(new ItemStack.with(
            Items.titanium, 2));

        a.requirements = ItemStack.with(
            Items.lead, 60,
            Items.plastanium, 25,
            Items.copper, 65,
            Items.thorium, 30,
            guijingti, 40,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();



// exports.xitilianji =
//     (() => {
//         const a = abomb4GC({//锡机
//             name: 'xitilianji',
//             noParallelAffect: false,
//             itemCapacity: 15,
//             liquidCapacity: 10,
//             updateEffectChance: 0.15,
//             updateEffect: Fx.steam,
//             ambientSound: Sounds.machine,
//             ambientSoundVolume: 0.5,
//             plans: [
//                 {
//                     consume: {
//                         power: 0.5,
//                         items: [
//                             { item: Items.titanium, amount: 2 },
//                         ]
//                     },
//                     output: {
//                         items: [
//                             { item: jingliantai, amount: 1 },
//                             { item: Items.scrap, amount: 3 },
//                         ]
//                     },
//                     craftEffect: Fx.none,
//                     craftTime: 40,
//                 },
//             ]
//         });
//         a.outputsPower = false;
//         return a;
//     })();
//-----------------------------------------------------------
exports.budingjiagongchang =
    (() => {
        const a = extend(GenericCrafter, "budingjiagongchang", {});
        a.health = 220; //布丁加工厂
        a.size = 2;
        a.drawer = new DrawSmelter(Color.valueOf("FFD59E"));
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 80;
        a.updateEffect = Fx.bubble;
        a.consumes.power(1.8);
        a.consumes.liquid(Liquids.cryofluid, 0.1);
        a.consumes.items(new ItemStack.with(
            Items.plastanium, 2, Items.phaseFabric, 2));
        a.outputItem = new ItemStack(
            buding, 5,
        );
        a.requirements = ItemStack.with(
            shiying, 30,
            Items.titanium, 25,
            Items.graphite, 240,
            guijingti, 40,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();

//-----------------------------------------------------------
exports.budingjiagongchang2 =
    (() => {
        const a = extend(GenericCrafter, "budingjiagongchang2", {});
        a.health = 450; //大型布丁加工厂
        a.drawer = DrawS.budingjiagongchang2;
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 50;
        a.itemCapacity = 20;
        a.updateEffect = Fx.bubble;
        a.consumes.power(12);
        a.consumes.liquid(Liquids.cryofluid, 0.15);
        a.consumes.items(new ItemStack.with(
            Items.plastanium, 1, Items.phaseFabric, 1));
        a.outputItem = new ItemStack(
            buding, 4,
        );
        a.requirements = ItemStack.with(
            Items.titanium, 650,
            Items.graphite, 720,
            guijingti, 200,
            weijing4, 10,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.hejinboliji =
    (() => {
        const a = extend(GenericCrafter, "hejinboliji", {});
        a.health = 320; //合金玻璃机
        a.size = 3;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 10;
        a.craftTime = 70;
        a.drawer = DrawS.hejinboli
        a.updateEffect = Fx.steam;
        a.craftEffect = Fx.coalSmeltsmoke;
        a.consumes.power(3);
        a.consumes.items(new ItemStack.with(
            Items.metaglass, 4,
            Items.plastanium, 2,
            Items.surgeAlloy, 2,

        ));
        a.outputItem = new ItemStack(
            hejinboli, 1,
        );
        a.requirements = ItemStack.with(
            Items.copper, 50,
            Items.lead, 80,
            Items.graphite, 30,
            Items.metaglass, 45,
            Items.surgeAlloy, 20,
            guijingti, 40,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jinhuiboliji =
    (() => {
        const a = extend(GenericCrafter, "jinhuiboliji", {});
        a.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, a, {
            draw() {
                this.super$draw();

                Draw.color(JHhejinLiquid.color);
                Draw.alpha(this.liquids.get(JHhejinLiquid) / a.liquidCapacity);
                Draw.rect(Core.atlas.find(a.name + "-liquid"), this.x, this.y);
                Draw.reset();
            }
        });
        a.health = 520; //金辉玻璃机
        a.size = 5;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 10;
        a.liquidCapacity = 20;
        a.craftTime = 90;
        a.drawer = new DrawSmelter(Color.valueOf("ffef99"));
        a.boostScale = 0.15
        a.updateEffect = Fx.steam;
        a.craftEffect = DrawS.jinhuiboliSmeltsmoke;
        a.consumes.liquid(JHhejinLiquid, 12 / 60);
        a.consumes.power(7);
        a.consumes.items(new ItemStack.with(
            hejinboli, 5,
            weijing3, 2,

        ));
        a.outputItem = new ItemStack(
            jinhuiboli, 1,
        );
        a.requirements = ItemStack.with(
            Items.copper, 350,
            Items.lead, 280,
            weijing4, 30,
            hejinboli, 45,
            Items.surgeAlloy, 220,
            guijingti, 140,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.zhiwujingyoutilianji =
    (() => {
        const a = abomb4GC({//植物精油萃取机
            name: 'zhiwujingyoutilianji',
            noParallelAffect: false,
            itemCapacity: 100,
            liquidCapacity: 30,
            updateEffectChance: 0.09,
            updateEffect: Fx.steam,
            ambientSound: Sounds.machine,
            ambientSoundVolume: 0.05,
            plans: [
                {
                    consume: {
                        power: 1.5,
                        items: [
                            { item: hua1, amount: 5 },
                        ]
                    },
                    output: {
                        items: [
                            { item: canza, amount: 5 },
                        ],
                        liquids: [

                            { liquid: zhiwujingyou, amount: 1.5 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 30,
                },
                {
                    consume: {
                        power: 1.5,
                        items: [
                            { item: hua2, amount: 5 },
                        ]
                    },
                    output: {
                        items: [
                            { item: canza, amount: 5 },
                        ],
                        liquids: [

                            { liquid: zhiwujingyou, amount: 1.5 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 30,
                },
                {
                    consume: {
                        power: 1.5,
                        items: [
                            { item: hua3, amount: 5 },
                        ]
                    },
                    output: {
                        items: [
                            { item: canza, amount: 5 },
                        ],
                        liquids: [

                            { liquid: zhiwujingyou, amount: 1.5 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 30,
                },
                {
                    consume: {
                        power: 1.5,
                        items: [
                            { item: Items.sporePod, amount: 4 },
                        ]
                    },
                    output: {
                        items: [
                            { item: canza, amount: 5 },
                        ],
                        liquids: [

                            { liquid: zhiwujingyou, amount: 1.5 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 25,
                },
            ]
        });
        a.outputsPower = false;
        a.group = BlockGroup.transportation
        return a;
    })();
//--------------------------------------------------------------
exports.zhiwudaosuiji =
    (() => {
        const a = abomb4GC({//植物捣碎
            name: 'zhiwudaosuiji',
            noParallelAffect: true,
            itemCapacity: 20,
            liquidCapacity: 10,
            updateEffectChance: 0.15,
            updateEffect: Fx.steam,
            ambientSound: Sounds.machine,
            ambientSoundVolume: 0.05,
            plans: [
                {
                    consume: {
                        power: 0.5,
                        items: [
                            { item: hua1, amount: 5 },
                        ]
                    },
                    output: {
                        items: [

                            { item: zhiwumo, amount: 2 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 0.2,
                },
                {
                    consume: {
                        power: 0.5,
                        items: [
                            { item: hua2, amount: 5 },
                        ]
                    },
                    output: {
                        items: [

                            { item: zhiwumo, amount: 2 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 0.2,
                },
                {
                    consume: {
                        power: 0.5,
                        items: [
                            { item: hua3, amount: 5 },
                        ]
                    },
                    output: {
                        items: [

                            { item: zhiwumo, amount: 2 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 0.2,
                },
                {
                    consume: {
                        power: 0.5,
                        items: [
                            { item: Items.sporePod, amount: 3 },
                        ]
                    },
                    output: {
                        items: [

                            { item: zhiwumo, amount: 1 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 0.5,
                },
            ]
        });
        a.outputsPower = false;
        a.group = BlockGroup.transportation
        return a;
    })();

//-----------------------------------------------------------
exports.zhiwujingyoutiquji =
    (() => {
        const a = extend(GenericCrafter, "zhiwujingyoutiquji", {});
        a.health = 330; //植物精油提取机
        a.size = 2;
        //a.itemCapacity = 15;
        a.liquidCapacity = 30;
        a.hasPower = true;
        a.hasItems = false;
        a.hasLiquid = true;
        a.craftTime = 60;
        a.updateEffect = DrawS.zhiwuSmeltsmoke;
        a.updateEffectChance = 0.08;
        a.consumes.power(2);
        a.consumes.liquid(zhiwujinghuaye, 12 / 60);
        a.outputLiquid = new LiquidStack(
            zhiwujingyou, 6,
        );
        a.requirements = ItemStack.with(
            Items.lead, 30,
            Items.copper, 20,
            Items.titanium, 45,
            Items.surgeAlloy, 35,
            guijingti, 30,
            jin, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.liquids
        return a;
    })();
//-----------------------------------------------------------
exports.jinfentilianji =
    (() => {
        const a = extend(GenericCrafter, "f-1jinfentilianji", {});
        a.health = 180; //金粉提炼机
        a.size = 2;
        a.buildCostMultiplier = 0.4;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 70;
        a.updateEffect = DrawS.jinfentilianjiSmoke;
        a.updateEffectChance = 0.15;
        a.consumes.liquid(Liquids.slag, 0.134);
        a.consumes.power(1);
        a.consumes.item(
            Items.thorium, 3,
        );
        a.outputItem = new ItemStack(
            jinfen, 2,
        );
        a.requirements = ItemStack.with(
            shimoxi, 20,
            Items.copper, 60,
            Items.plastanium, 15,
            guijingti, 80,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.jinchengxingji =
    (() => {
        const a = extend(GenericCrafter, "f-2jinchengxingji", {});
        a.health = 220; //金成型机
        a.size = 2;
        a.buildCostMultiplier = 0.35;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 60;
        a.updateEffect = DrawS.jinfentilianjiSmoke;
        a.updateEffectChance = 0.15;
        a.consumes.power(1.3);
        a.consumes.item(
            jinfen, 3,
        );
        a.outputItem = new ItemStack(
            jin, 1,
        );
        a.requirements = ItemStack.with(
            shimoxi, 25,
            Items.lead, 75,
            Items.thorium, 55,
            guijingti, 60,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jinchengxingji2 =
    (() => {
        const a = extend(GenericCrafter, "f-3jinchengxingji", {});
        a.health = 350; //大金成型机
        a.size = 3;
        a.buildCostMultiplier = 0.35;
        a.itemCapacity = 18;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 50;
        a.updateEffect = DrawS.jinfentilianjiSmoke;
        a.updateEffectChance = 0.15;
        a.consumes.liquid(moliye, 0.003333333334);
        a.consumes.power(6);
        a.consumes.item(
            Items.thorium, 8,
        );
        a.outputItem = new ItemStack(
            jin, 2,
        );
        a.requirements = ItemStack.with(
            shimoxi, 60,
            Items.lead, 175,
            jin, 20,
            guijingti, 120,
            hejinboli, 20
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.zijinggongchang =
    (() => {
        const a = extend(GenericCrafter, "zijinggongchang", {});
        a.health = 300; //紫晶制造器
        a.size = 3;
        a.buildCostMultiplier = 0.2;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 80;
        a.drawer = DrawS.zijinggongchang;
        a.updateEffect = Fx.steam;
        a.consumes.power(6);
        a.consumes.items(new ItemStack.with(
            Items.plastanium, 3,
            jin, 3,
            guijingti, 4));
        a.outputItem = new ItemStack(
            zijing1, 1,
        );
        a.requirements = ItemStack.with(
            jingliantai, 420,
            Items.plastanium, 310,
            Items.surgeAlloy, 240,
            guijingti, 280,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jiweijinggongchang1 =
    (() => {
        const a = extend(GenericCrafter, "c-1jiweijinggongchang", {});
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-c-1jiweijinggongchang-1"), this.x, this.y, 90 + Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-c-1jiweijinggongchang-1"), this.x, this.y, 0 - Time.time * 2);
                },
            }, a);
        });
        a.health = 160; //微晶工厂
        a.size = 2;
        a.drawer = DrawS.jiweijinggongchang1;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 180;
        a.updateEffect = Fx.bubble;
        a.consumes.power(1.8);
        a.consumes.liquid(zhiwujinghuaye, 0.03333333334);
        a.consumes.items(new ItemStack.with(
            zijing1, 2,
            guijingti, 2));
        a.outputItem = new ItemStack(
            weijing1, 1,
        );
        a.requirements = ItemStack.with(
            Items.copper, 230,
            Items.lead, 160,
            Items.graphite, 240,
            guijingti, 80,

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();


//-----------------------------------------------------------
exports.jiweijinggongchang2 =//微晶工厂2
    (() => {
        const a = extend(GenericCrafter, "c-2jiweijinggongchang", {});
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-1"), this.x, this.y, 90 + Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-1"), this.x, this.y, 0 - Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-2"), this.x, this.y, 90 - this.totalProgress * 5);
                    //Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-4"), this.x, this.y, 0 - this.totalProgress * 5);
                },
            }, a);
        });
        a.health = 320;
        a.drawer = DrawS.jiweijinggongchang2;
        a.size = 5;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 350;
        a.itemCapacity = 18;
        a.craftEffect = Fx.mine;
        a.updateEffect = Fx.fireballsmoke;
        a.updateEffectChance = 0.1
        a.consumes.power(2);
        a.consumes.liquid(zhiwujinghuaye, 0.15);
        a.consumes.items(new ItemStack.with(
            zuanjing, 3,
            weijing1, 2,
            guijingti, 6,
            Items.surgeAlloy, 8));
        a.outputItem = new ItemStack(
            weijing2, 1,
        );
        a.requirements = ItemStack.with(
            shiying, 210,
            Items.lead, 300,
            weijing1, 50,
            guijingti, 180,
            hejinboli, 30

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();

//-----------------------------------------------------------
exports.jiweijinggongchang3 =
    (() => {
        const a = extend(GenericCrafter, "c-3jiweijinggongchang", {});
        a.health = 420; //微晶工厂3
        a.size = 4;
        a.itemCapacity = 400;
        a.buildCostMultiplier = 0.2;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 380;
        a.drawer = new DrawSmelter();
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.mine;
        a.updateEffectChance = 0.1
        a.consumes.power(6);
        a.consumes.liquid(molijinghuaye, 0.05);
        a.consumes.items(new ItemStack.with(
            zuanjing, 160,
            weijing2, 50,
            buding, 150));
        a.outputItem = new ItemStack(
            weijing3, 1,
        );
        a.requirements = ItemStack.with(
            zuanjing, 260,
            Items.titanium, 320,
            weijing2, 300,
            guijingti, 470,
            hejinboli, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
const b = require('BlocksLibes/weijing4GC');
exports.jiweijinggongchang4 = b.weijing4GC;
//------------------------------------------------------------------- 

exports.jiweijinggongchang5 =
    (() => {
        const a = extend(GenericCrafter, "c-5jiweijinggongchang", {});
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-1"), this.x, this.y, 90 + Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-1"), this.x, this.y, 0 - Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-2"), this.x, this.y, 90 + Time.time * 3);
                    Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-2"), this.x, this.y, 90 - Time.time * 3);
                    // Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-5"), this.x, this.y, 90 + Time.time * 2);
                    //Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-6"), this.x, this.y, 45 - Time.time * 2);
                },
            }, a);
        });
        a.health = 5000; //微晶工厂5
        a.size = 4;
        a.itemCapacity = 280;
        a.liquidCapacity = 150;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 18000;
        a.idleSoundVolume = 0.5;
        a.drawer = DrawS.jiweijinggongchang5;
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.spawnShockwave;
        a.updateEffectChance = 0.1
        a.consumes.power(3000);
        a.consumes.liquid(qiangxiaolengqueye, 0.16666667);
        a.consumes.items(new ItemStack.with(
            monengjing2, 3,
            buding, 220,
            weijing2, 200,
            weijing4, 50));
        a.outputItem = new ItemStack(
            weijing5, 1,
        );
        a.requirements = ItemStack.with(
            Items.copper, 3000,
            Items.silicon, 2500,
            Items.titanium, 180,
            jin, 530,
            weijing2, 320,
            weijing3, 50,
            weijing4, 5,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.weijingfenjieji =
    (() => {
        const a = extend(GenericCrafter, "weijingfenjieji", {});
        a.health = 2600; //微晶分解机
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;;
        a.buildCostMultiplier = 0.5;
        a.drawer = DrawS.weijingfenjieji;
        a.itemCapacity = 20;
        a.craftTime = 340;
        a.updateEffect = Fx.lancerLaserCharge;
        a.updateEffectChance = 0.1;
        a.consumes.power(13);
        a.consumes.liquid(liziye, 0.020001);
        a.consumes.item(
            weijing4, 1
        );
        a.outputItem = new ItemStack(
            weijing2, 5,
        );
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.lead, 70,
            guijingti, 170,
            monengjing2, 15,
            weijing4, 35,
            hejinboli, 70
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jiweijinggongchang21 =
    (() => {
        const a = extend(GenericCrafter, "c-2jiweijinggongchang1", {});
        a.health = 1320; //超级微晶工厂2
        a.size = 5;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 290;
        a.itemCapacity = 80;
        a.drawer = DrawS.jiweijinggongchang21
        a.craftEffect = Fx.mine;
        a.updateEffect = Fx.fireballsmoke;
        a.updateEffectChance = 0.1
        a.consumes.power(50);
        a.consumes.liquid(molijinghuaye, 0.1);
        a.consumes.items(new ItemStack.with(
            monengjing1, 5,
            weijing1, 8,
            guijingti, 25,
            Items.surgeAlloy, 30));
        a.outputItem = new ItemStack(
            weijing2, 5,
        );
        a.requirements = ItemStack.with(
            Items.copper, 2200,
            Items.lead, 2300,
            weijing2, 200,
            weijing4, 10,
            monengjing3, 2,
            guijingti, 1800,
            hejinboli, 120

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
const c = require('BlocksLibes/liziduizhuangji'); //粒子对撞机
c.group = BlockGroup.transportation
exports.liziduizhuangji = c.duizhuangji;
//-----------------------------------------------------------
const testC = MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "yeti11", [
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["water/100"],
            power: 1,
        },
        output: {
            items: ["creators-dabaoshui/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["oil/100"],
            power: 1,
        },
        output: {
            items: ["creators-dabaoshiyou/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-jinglianlio/100"],
            power: 1.3,
        },
        output: {
            items: ["creators-dabaojinglianlio/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["cryofluid/100"],
            power: 1,
        },
        output: {
            items: ["creators-dabaoleng/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-moliye/100"],
            power: 1,
        },
        output: {
            items: ["creators-dabaomoli/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-zhiwujingyou/100"],
            power: 1.2,
        },
        output: {
            items: ["creators-dabaozhiwujingyou/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-zhiwujinghuaye/100"],
            power: 1.5,
        },
        output: {
            items: ["creators-dabaozhiwu/1"],
        },
        craftTime: 180,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-molijinghuaye/100"],
            power: 3,
        },
        output: {
            items: ["creators-dabaojingmoli/1"],
        },
        craftTime: 300,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-JHLiquid/100"],
            power: 4,
        },
        output: {
            items: ["creators-dabaoJHLiquid/1"],
        },
        craftTime: 350,
    },
    {
        input: {
            items: ["creators-jingliantai/5"],
            liquids: ["creators-qiangxiaolengqueye/100"],
            power: 5,
        },
        output: {
            items: ["creators-dabaoyedan/1"],
        },
        craftTime: 420,
    },
    // {
    //   input: {
    //     items: ["creators-zijing1/10"],
    //     liquids: ["creators-suan/150"],
    //     power: 4,
    //   },
    //   output: {
    //     items: ["creators-dabaosuan/1"],
    //   },
    //   craftTime: 360,
    // },
]);
Object.assign(testC, {
    health: 360,
    size: 2,
    noParallelAffect: false,//false,
    itemCapacity: 10,
    liquidCapacity: 160,
    updateEffectChance: 1.05,
    updateEffect: Fx.steam,
    ambientSound: Sounds.machine,
    ambientSoundVolume: 0.1,
    craftEffect: Fx.steam,
});
testC.requirements = ItemStack.with(
    jingliantai, 240,
    Items.plastanium, 60,
    jin, 80,
    Items.titanium, 120,
    Items.graphite, 250
);
testC.buildVisibility = BuildVisibility.shown;
testC.category = Category.crafting;
testC.group = BlockGroup.transportation
exports.testC = testC
//--------------------------------------------------------------------------------
const testA = MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "yeti22", [
    {
        input: {
            items: ["creators-dabaoshui/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["water/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaoshiyou/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["oil/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaojinglianlio/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["creators-jinglianlio/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaoleng/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["cryofluid/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaomoli/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["creators-moliye/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaozhiwujingyou/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["creators-zhiwujingyou/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaozhiwu/1"],
            power: 1.5,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["creators-zhiwujinghuaye/100"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-dabaojingmoli/1"],
            power: 3,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["creators-molijinghuaye/100"],
        },
        craftTime: 90,
    },
    {
        input: {
            items: ["creators-dabaoJHLiquid/1"],
            power: 1,
        },
        output: {
            items: ["creators-jingliantai/1"],
            liquids: ["creators-JHLiquid/100"],
        },
        craftTime: 100,
    },
    {
        input: {
            items: ["creators-dabaoyedan/1"],
            power: 5,
        },
        output: {
            items: ["creators-jingliantai/2"],
            liquids: ["creators-qiangxiaolengqueye/100"],
        },
        craftTime: 120,
    },
    // {
    //   input: {
    //     items: ["creators-dabaosuan/1"],
    //     power: 4,
    //   },
    //   output: {
    //     liquids: ["creators-suan/100"],
    //   },
    //   craftTime: 100,
    // },
]);
Object.assign(testA, {
    health: 360,
    size: 2,
    noParallelAffect: false,//false,
    itemCapacity: 10,
    liquidCapacity: 200,
    updateEffectChance: 1.05,
    updateEffect: Fx.steam,
    ambientSound: Sounds.machine,
    ambientSoundVolume: 0.2,
    craftEffect: Fx.steam,
});
testA.requirements = ItemStack.with(
    jingliantai, 240,
    weijing1, 5,
    jin, 300,
    Items.titanium, 120,
    Items.graphite, 250
);
testA.outputsPower = false,
    testA.buildVisibility = BuildVisibility.shown;
testA.category = Category.crafting;
testA.group = BlockGroup.transportation
exports.testA = testA
//-----------------------------------------------------------
exports.zuanshiyasuoji =//钻石压缩机
    (() => {
        const a = MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "zuanshiyasuoji", [
            {
                input: {
                    items: ["coal/100"],
                    liquids: ["oil/12"],
                    power: 6,
                },
                output: {
                    items: ["creators-zuankuang/1"],
                },
                craftTime: 150,
            },

            {
                input: {
                    items: ["creators-tanban/5"],
                    liquids: ["oil/3"],
                    power: 3.5,
                },
                output: {
                    items: ["creators-zuankuang/1"],
                },
                craftTime: 77,
            },
        ]);

        a.health = 350;
        a.size = 2;
        a.itemCapacity = 100;
        a.liquidCapacity = 24;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftEffect = DrawS.zuanSmeltsmoke;
        a.requirements = ItemStack.with(
            Items.lead, 50,
            Items.copper, 80,
            Items.titanium, 35,
            Items.surgeAlloy, 30,
            guijingti, 40,
            zuanjing, 60,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.taihejinji =
    (() => {
        const a = extend(GenericCrafter, "taihejinji", {});
        a.health = 420; //钛合金机
        a.size = 4;
        a.itemCapacity = 20;
        a.liquidCapacity = 10;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 120;
        //a.updateEffect =Fx.electrified 电池紊乱
        a.updateEffect = DrawS.taiSmeltsmoke;
        a.drawer = new DrawSmelter(Color.valueOf("B8C9FF"));
        a.updateEffectChance = 0.15;
        a.consumes.liquid(jinglianlio, 3 / 60);
        a.consumes.power(5);
        a.consumes.items(new ItemStack.with(
            zuanshikuang, 3,
            jingliantai, 4,
            Items.surgeAlloy, 3,
        ));
        a.outputItem = new ItemStack(
            taihejin, 1,
        );
        a.requirements = ItemStack.with(
            Items.lead, 175,
            Items.copper, 130,
            Items.titanium, 220,
            Items.surgeAlloy, 300,
            guijingti, 80,
            zijing1, 20,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
//-----------------------------------------------------------
exports.oiljinglianchang =
    (() => {
        const a = extend(GenericCrafter, "oiljinglianchang", {});
        a.buildType = () => extendContent(GenericCrafter.GenericCrafterBuild, a, {
            draw() {
                this.super$draw();

                Draw.color(jinglianlio.color);
                Draw.alpha(this.liquids.get(jinglianlio) / a.liquidCapacity);
                Draw.rect(Core.atlas.find(a.name + "-liquid"), this.x, this.y);
                Draw.reset();
            }
        });
        a.health = 350; //石油精炼厂
        a.size = 3;
        a.itemCapacity = 10;
        a.liquidCapacity = 30;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 90;
        a.updateEffect = DrawS.oilSmeltsmoke;
        a.updateEffectChance = 0.15;
        a.consumes.liquid(Liquids.oil, 12 / 60);
        a.consumes.power(4);
        a.consumes.item(
            buding, 2,
        );
        a.outputItem = new ItemStack(
            gutaiwanqin, 1,
        );
        a.outputLiquid = new LiquidStack(
            jinglianlio, 9.2,
        );
        a.requirements = ItemStack.with(
            shimoxi, 50,
            Items.lead, 175,
            Items.titanium, 90,
            Items.surgeAlloy, 45,
            Items.metaglass, 40,
            guijingti, 120,
            weijing1, 25,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.liquids
        return a;
    })();
//-----------------------------------------------------------
exports.jinhuiyasuoji =
    (() => {
        const a = extend(GenericCrafter, "jinhuiyasuoji", {});
        a.health = 550; //金辉压缩机
        a.size = 5;
        a.itemCapacity = 15;
        a.liquidCapacity = 10;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 160;
        a.drawer = new DrawSmelter(Color.valueOf("ffef99"));
        a.updateEffect = DrawS.jinSmeltsmoke;
        a.updateEffectChance = 0.1;
        a.consumes.power(7);
        a.consumes.items(new ItemStack.with(
            jinfen, 6,
            weijing2, 1,
            taihejin, 2,
            monengjing, 3,
        ));
        a.outputItem = new ItemStack(
            JHhejin, 1,
        );
        a.requirements = ItemStack.with(
            Items.lead, 175,
            Items.copper, 130,
            weijing2, 20,
            taihejin, 25,
            guijingti, 180,
            jin, 210,
            zuanjing, 80,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.jinhuiyeji =
    (() => {
        const a = extend(LiquidConverter, "jinhuiyeji", {});
        a.health = 500; //金辉液体融合工厂
        a.size = 3;
        a.itemCapacity = 10;
        a.liquidCapacity = 20;
        a.outputsLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 60;
        a.drawer = new DrawMixer()
        a.consumes.power(2);
        a.consumes.liquid(liziye, 12 / 60);
        a.consumes.item(
            JHhejin, 2,
        );
        a.outputLiquid = new LiquidStack(
            JHhejinLiquid, 12,
        );

        a.requirements = ItemStack.with(
            Items.lead, 600,
            Items.copper, 450,
            Items.titanium, 220,
            Items.surgeAlloy, 240,
            taihejin, 50,
            guijingti, 260,
            weijing3, 20,
            hejinboli, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.liquids
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.duochonbuji2 =
    (() => {
        const a = extend(GenericCrafter, "duochonbuji2", {});
        a.health = 360; //高级相位物压缩机 布 T2
        a.size = 3;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 27;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 50;
        a.craftEffect = Fx.smeltsmoke;
        a.drawer = new DrawWeave();
        a.consumes.power(9);
        a.consumes.items(new ItemStack.with(
            Items.thorium, 6, Items.sand, 15));
        a.outputItem = new ItemStack(
            Items.phaseFabric, 2,
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 90,
            Items.phaseFabric, 50,
            Items.titanium, 180,
            guijingti, 255,
            jin, 130,
            weijing1, 30,
            taihejin, 10,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.duochonbuji3 =
    (() => {
        const a = extend(GenericCrafter, "duochonbuji3", {});
        a.health = 420; //高级相位物压缩机 布  T3
        a.size = 3;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 22;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 22;
        a.craftEffect = Fx.smeltsmoke;
        a.drawer = new DrawWeave();
        a.consumes.power(7.5);
        a.consumes.liquid(zhiwujingyou, 1 / 60);
        a.consumes.items(new ItemStack.with(
            Items.thorium, 5, Items.sand, 10));
        a.outputItem = new ItemStack(
            Items.phaseFabric, 2,
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 90,
            Items.phaseFabric, 80,
            Items.titanium, 180,
            guijingti, 255,
            taihejin, 20,
            jin, 150,
            weijing1, 40,
            weijing2, 10,
            hejinboli, 20
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
const duochongsugangji = MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "duochongsugangji", [
    {
        input: {
            items: ["titanium/5"],
            liquids: ["oil/18"],
            power: 6,
        },
        output: {
            items: ["plastanium/3"],
        },
        craftTime: 80,
    },
    {
        input: {
            items: ["titanium/4"],
            liquids: ["creators-jinglianlio/6"],
            power: 4.5,
        },
        output: {
            items: ["plastanium/3"],
        },
        craftTime: 50,
    },
    {
        input: {
            items: ["creators-jingliantai/4"],
            liquids: ["oil/18"],
            power: 4,
        },
        output: {
            items: ["plastanium/3"],
        },
        craftTime: 60,
    },
    {
        input: {
            items: ["creators-jingliantai/4"],
            liquids: ["creators-jinglianlio/3"],
            power: 3,
        },
        output: {
            items: ["plastanium/3"],
        },
        craftTime: 30,
    },
]);
Object.assign(duochongsugangji, {
    health: 420,
    size: 3,
    noParallelAffect: false,//false,
    itemCapacity: 20,
    liquidCapacity: 25,
    updateEffectChance: 1.05,
    updateEffect: Fx.smeltsmoke,
    ambientSound: Sounds.machine,
    ambientSoundVolume: 0.2,
    craftEffect: Fx.smeltsmoke,
    group: BlockGroup.transportation
});
duochongsugangji.requirements = ItemStack.with(
    taihejin, 90,
    Items.plastanium, 220,
    Items.titanium, 180,
    guijingti, 255,
    jin, 130,
    weijing1, 10,
);
duochongsugangji.outputsPower = false,
    duochongsugangji.buildVisibility = BuildVisibility.shown;
duochongsugangji.category = Category.crafting;
exports.duochongsugangji = duochongsugangji

//-----------------------------------------------------------
exports.moliyeshoujiqi1 =
    (() => {
        const a = extend(GenericCrafter, "moliyeshoujiqi1", {});
        a.group = BlockGroup.liquids
        return a;
    })();
//-----------------------------------------------------------
exports.moliyeshoujiqi2 =
    (() => {
        const a = extend(GenericCrafter, "moliyeshoujiqi2", {});
        a.group = BlockGroup.liquids
        return a;
    })();
//-----------------------------------------------------------
exports.wenshiqi =
    (() => {
        const a = extend(Separator, "e-wenshiqi", {});
        a.health = 230; //温室器
        a.size = 3;
        a.buildCostMultiplier = 0.4;
        a.itemCapacity = 40;
        a.liquidCapacity = 12;
        a.craftTime = 15;
        //a.drawer = new DrawCultivator();
        a.updateEffect = Fx.bubble;
        a.consumes.power(2);
        a.consumes.liquid(moliye, 0.013);
        a.results = ItemStack.with(
            hua1, 20,
            hua2, 208,
            hua3, 20,
            molizhi, 3,
        );;
        a.requirements = ItemStack.with(
            Items.titanium, 150,
            Items.graphite, 120,
            Items.metaglass, 50,
            jin, 60,
            guijingti, 150,
            jingliantai, 220,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.zhiwucuiqugongchang =
    (() => {
        const a = extend(LiquidConverter, "e-1zhiwucuiqugongchang", {});
        a.group = BlockGroup.liquids
        return a;
    })();
//-----------------------------------------------------------
exports.zhiwucuiqugongchang2 =
    (() => {
        const a = extend(LiquidConverter, "e-2zhiwucuiqugongchang", {});
        a.group = BlockGroup.liquids
        return a;
    })();
//-----------------------------------------------------------
exports.feiliaoji =
    (() => {
        const a = extend(GenericCrafter, "feiliaoji", {});
        a.health = 280; //废料制造机
        a.size = 2;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 10;
        a.craftTime = 10;
        a.updateEffect = Fx.steam;
        a.craftEffect = Fx.coalSmeltsmoke;
        a.consumes.power(2);
        a.consumes.items(new ItemStack.with(
            Items.copper, 2, Items.lead, 2));
        a.outputItem = new ItemStack(
            Items.scrap, 3,
        );
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.lead, 70,
            Items.graphite, 55,
            Items.silicon, 45,
            guijingti, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.transportation
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.zhuanhuantai =
    (() => {
        const a = extend(GenericCrafter, "e-zizhuan-tai", {}); //资源转换-钛
        a.size = 2;
        a.health = 160;
        a.requirements = ItemStack.with(
            Items.titanium, 120,
            Items.phaseFabric, 100,
            Items.surgeAlloy, 20,
            jingliantai, 160,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.craftEffect = DrawS.taiSmeltsmoke;
        a.outputItem = new ItemStack(Items.titanium, 7);
        a.craftTime = 15;
        a.hasPower = true;
        a.hasItems = true;
        a.updateEffect = Fx.steam
        a.flameColor = Color.valueOf("00000000");
        a.itemCapacity = 20;
        a.consumes.items(ItemStack.with(
            jingliantai, 3
        ));
        a.consumes.power(30);
        a.group = BlockGroup.transportation
        return a;
    })();
exports.zizhuanTu =
    (() => {
        const a = extend(GenericCrafter, "e-zizhuan-tu", {});
        a.health = 160; //资源转换器-钍
        a.size = 2;
        a.itemCapacity = 20;
        a.craftTime = 15;
        a.craftEffect = DrawS.tuSmeltsmoke;
        a.updateEffect = Fx.steam;
        a.consumes.power(60);
        a.consumes.item(
            jingliantai, 3,
        );
        a.outputItem = new ItemStack(
            Items.thorium, 2,
        );
        a.requirements = ItemStack.with(
            Items.titanium, 100,
            Items.thorium, 200,
            guijingti, 225,
            jingliantai, 100,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.tanbanyasuoji =
    (() => {
        const a = extend(GenericCrafter, "g-2tanbanyasuoji", {});
        a.health = 200; //碳板压缩机
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 100;
        a.craftTime = 300;
        a.updateEffect = Fx.rocketSmokeLarge;
        a.updateEffectChance = 0.3;
        a.consumes.power(1.75);
        a.consumes.item(
            Items.coal, 50,
        );
        a.outputItem = new ItemStack(
            tanban, 2,
        );
        a.requirements = ItemStack.with(
            Items.copper, 20,
            Items.lead, 30,
            Items.titanium, 45,
            guijingti, 50,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.zuanjingjiagongchang =
    (() => {
        const a = extend(GenericCrafter, "zuanjingjiagongchang", {});
        a.health = 360; //钻晶加工厂
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.buildCostMultiplier = 0.35;
        a.itemCapacity = 10;
        a.craftTime = 300;
        a.updateEffect = Fx.mine;
        a.updateEffectChance = 0.2;
        a.consumes.liquid(moliye, 0.02);
        a.consumes.power(2.9);
        a.consumes.item(
            tanban, 5,
        );
        a.outputItem = new ItemStack(
            zuanjing, 1,
        );
        a.requirements = ItemStack.with(
            tanban, 20,
            zijing1, 15,
            jin, 55,
            jingliantai, 120,
            guijingti, 230,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.zuankuangjiagongchang =
    (() => {
        const a = extend(GenericCrafter, "zuankuangjiagongchang", {});
        a.health = 260;
        a.size = 2;
        a.itemCapacity = 20;
        a.liquidCapacity = 15;
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 45;
        a.craftEffect = Fx.steam;
        a.updateEffect = Fx.steam;
        a.updateEffectChance = 0.05;
        a.consumes.liquid(Liquids.cryofluid, 4 / 60);
        a.consumes.power(4.3);
        a.consumes.items(new ItemStack.with(
            zuanshikuang, 2));
        a.requirements = ItemStack.with(
            Items.lead, 60,
            Items.plastanium, 30,
            Items.surgeAlloy, 40,
            guijingti, 70,
            zuanjing, 30,
            weijing1, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.meitantiliangongchang =
    (() => {
        const a = abomb4GC({//高级煤炭机
            name: 'g-1meitantiliangongchang',
            itemCapacity: 50,
            //liquidCapacity: 100,
            updateEffectChance: 0.15,
            updateEffect: Fx.steam,
            ambientSound: Sounds.machine,
            ambientSoundVolume: 0.5,
            plans: [
                {
                    consume: {
                        power: 1.3,
                        items: [
                            { item: hua1, amount: 3 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.coal, amount: 3 },
                        ]
                    },
                    craftEffect: Fx.steam,
                    craftTime: 60,
                },
                {
                    consume: {
                        power: 1.3,
                        items: [
                            { item: hua2, amount: 3 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.coal, amount: 3 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 60,
                },
                {
                    consume: {
                        power: 1.3,
                        items: [
                            { item: hua3, amount: 3 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.coal, amount: 3 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 60,
                },
                {
                    consume: {
                        power: 1.3,
                        items: [
                            { item: Items.sporePod, amount: 3 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.coal, amount: 3 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 60,
                },
                {
                    consume: {
                        power: 1.3,
                        items: [
                            { item: canza, amount: 5 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.coal, amount: 8 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 15,
                },
                {
                    consume: {
                        power: 1.3,
                        items: [
                            { item: zhiwumo, amount: 2 },
                        ]
                    },
                    output: {
                        items: [

                            { item: Items.coal, amount: 5 },
                        ]
                    },
                    craftEffect: Fx.none,
                    craftTime: 50,
                },
            ]
        });
        a.outputsPower = false;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.tanbanyasuoji2 =
    (() => {
        const a = extend(GenericCrafter, "g-3gaojitanbanyasuoji", {});
        a.health = 320; //高级碳板压缩机
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.itemCapacity = 90;
        a.craftTime = 210;
        a.drawer = new DrawSmelter(Color.valueOf("a4a4a4"));
        a.updateEffect = DrawS.Magmasmoke;
        a.updateEffectChance = 0.3;
        a.consumes.power(3.5);
        a.consumes.item(
            Items.coal, 60,
        );
        a.outputItem = new ItemStack(
            tanban, 5,
        );
        a.requirements = ItemStack.with(
            Items.copper, 20,
            Items.lead, 30,
            zuanjing, 45,
            tanban, 80,
            guijingti, 50,
            zijing1, 40,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
exports.gaojipeiyangji =
    (() => {
        const a = extend(AttributeCrafter, "gaojipeiyangji2", {});
        a.health = 420; //高级培养机
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.floating = true;
        a.itemCapacity = 15;
        a.craftTime = 122;
        a.boostScale = 0.2; //地形增幅倍率
        a.attribute = Attribute.spores;
        a.legacyReadWarmup = true;
        a.drawer = new DrawCultivator()
        a.envRequired |= Env.spores;
        a.craftEffect = Fx.mine;
        a.updateEffectChance = 0.1;
        a.consumes.power(120 / 60);
        a.consumes.liquid(Liquids.water, 30 / 60);
        a.outputItem = new ItemStack(
            Items.sporePod, 3,
        );
        a.requirements = ItemStack.with(
            Items.copper, 50,
            Items.lead, 80,
            guijingti, 50,
            jingliantai, 50,
            hejinboli, 15,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.molishizhizaoqi =
    (() => {
        const a = extend(GenericCrafter, "molishizhizaoqi", {});
        a.health = 220; //魔力石制造机
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 10;
        a.craftTime = 80;
        a.updateEffect = Fx.steam;
        a.consumes.power(2.4);
        a.consumes.items(new ItemStack.with(
            molizhi, 2,
            weijing1, 1));
        a.outputItem = new ItemStack(
            molishi, 1,
        );
        a.requirements = ItemStack.with(
            jingliantai, 96,
            jin, 85,
            taihejin, 25,
            guijingti, 70,
            zijing1, 85
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.monengjingdamoji0 =
    (() => {
        const a = extend(GenericCrafter, "h-0monengjingdamoji", {});
        a.health = 360; //魔能晶打磨机  粗劣魔能晶
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.buildCostMultiplier = 0.3;
        a.itemCapacity = 10;
        a.craftTime = 35;
        a.drawer = new DrawSmelter()
        a.updateEffect = Fx.steam;
        a.consumes.power(4.3);
        a.consumes.items(new ItemStack.with(
            molishi, 2,
            buding, 1));
        a.outputItem = new ItemStack(
            monengjing, 2,
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 65,
            Items.lead, 330,
            Items.titanium, 130,
            guijingti, 210,
            weijing1, 5,
            jin, 150,
            taihejin, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();

//-----------------------------------------------------------
exports.jimonengjinglianzhiqi1 =
    (() => {
        const a = extend(GenericCrafter, "h-1jimonengjinglianzhiqi", {});
        a.health = 360; //1级魔能晶制造器
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.drawer = new DrawSmelter()
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 20;
        a.craftTime = 60;
        a.updateEffect = Fx.steam;
        a.consumes.power(8);
        a.consumes.items(new ItemStack.with(
            monengjing, 3,
            buding, 3));
        a.outputItem = new ItemStack(
            monengjing1, 1,
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 85,
            Items.thorium, 120,
            monengjing, 40,
            guijingti, 450,
            jin, 120,
            taihejin, 45,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jimonengjinglianzhiqi2 =
    (() => {
        const a = extend(GenericCrafter, "h-2jimonengjinglianzhiqi", {});
        a.health = 420; //2级魔能晶工厂
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 10;
        a.liquidCapacity = 60;
        a.craftTime = 450;
        a.drawer = new DrawSmelter()
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.mine;
        a.updateEffectChance = 0.1;
        a.consumes.power(120);
        a.consumes.liquid(molijinghuaye, 12 / 60);
        a.consumes.items(new ItemStack.with(
            monengjing1, 10,
            weijing2, 8,
            weijing3, 1));
        a.outputItem = new ItemStack(
            monengjing2, 1,
        );
        a.requirements = ItemStack.with(
            zuanjing, 180,
            molishi, 80,
            jin, 350,
            guijingti, 350,
            taihejin, 50,
            weijing2, 75
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jimonengjinglianzhiqi3 =
    (() => {
        const a = extend(GenericCrafter, "h-3jimonengjinglianzhiqi", {});
        a.health = 720; //3级魔能晶工厂
        a.size = 4;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.liquidCapacity = 60;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 25;
        a.craftTime = 1200;
        a.drawer = new DrawSmelter();
        a.updateEffect = Fx.steam;
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffectChance = 0.1;
        a.consumes.power(85000 / 60);
        a.consumes.liquid(JHhejinLiquid, 24 / 60);
        a.consumes.items(new ItemStack.with(
            monengjing2, 25,
            weijing4, 20,
            weijing5, 1));
        a.outputItem = new ItemStack(
            monengjing3, 1,
        );
        a.requirements = ItemStack.with(
            zuanjing, 380,
            weijing4, 12,
            monengjing, 420,
            jin, 720,
            taihejin, 120,
            guijingti, 275,
            hejinboli, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jimonengjinglianzhiqi4 =
    (() => {
        const a = extend(GenericCrafter, "h-4jimonengjinglianzhiqi", {});
        a.health = 550; //高级1级魔能晶制造器
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 10;
        a.craftTime = 50;
        a.drawer = new DrawSmelter()
        a.updateEffect = Fx.steam;
        a.consumes.power(12.5);
        a.consumes.items(new ItemStack.with(
            molishi, 2,
            buding, 3));
        a.outputItem = new ItemStack(
            monengjing1, 1,
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 700,
            Items.thorium, 2000,
            hejinboli, 10,
            monengjing3, 2,
            taihejin, 150,
            guijingti, 1500,
            weijing5, 3
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
require('BlocksLibes/lajixiang')//资源焚化炉,
//-----------------------------------------------------------
exports.hejin2 =
    (() => {
        const a = extend(GenericCrafter, "hejin", {});
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-hejin-1"), this.x, this.y, 45 - Time.time * 2);
                    Draw.rect(Core.atlas.find("creators-hejin-2"), this.x, this.y, 45 + Time.time * 2);
                },
            }, a);
        });
        a.health = 480; //高效巨浪合金工厂
        a.size = 4;
        a.hasPower = true;
        a.hasItems = true;
        //a.buildCostMultiplier = 0.3;
        a.itemCapacity = 30;
        a.craftTime = 70;
        a.drawer = new DrawSmelter(Color.valueOf("ffef99"));
        a.flameColor = Color.valueOf("ffc099");
        a.updateEffect = Fx.mine;
        a.craftEffect = Fx.fireballsmoke;
        a.consumes.power(6);
        a.consumes.items(new ItemStack.with(
            Items.copper, 6,
            Items.lead, 7,
            Items.silicon, 5,
            Items.titanium, 6));
        a.outputItem = new ItemStack(
            Items.surgeAlloy, 3,
        );
        a.requirements = ItemStack.with(
            Items.copper, 260,
            tanban, 200,
            taihejin, 45,
            guijingti, 180,
            weijing1, 120,
            molishi, 100,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.luzhayasuoji =
    (() => {
        const a = extend(AttributeCrafter, "luzhayasuoji", {});
        a.health = 420; //T2石磨机
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.itemCapacity = 20;
        a.craftTime = 30;
        a.drawer = DrawS.none;
        a.attribute = Attribute.water;
        a.boostScale = 0.1;
        a.craftEffect = Fx.pulverizeMedium
        a.consumes.liquid(moliye, 0.59 / 60);
        a.consumes.power(3.2);
        a.consumes.item(
            Items.coal, 7,
        );
        a.outputItem = new ItemStack(
            Items.graphite, 5,
        );
        a.requirements = ItemStack.with(
            Items.copper, 50,
            Items.lead, 80,
            guijingti, 40,
            weijing1, 30,
            zuanjing, 30,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jitilianji3 =
    (() => {
        const a = extend(Separator, "3jitilianji", {}); //3级提炼机
        a.buildType = prov(() => {
            return new JavaAdapter(Separator.SeparatorBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();

                    Draw.rect(Core.atlas.find("creators-3jitilianji-2"), this.x, this.y, 90 + this.totalProgress * 3);
                    Draw.rect(Core.atlas.find("creators-3jitilianji-3"), this.x, this.y, 90 - this.totalProgress * 3);
                    Draw.rect(Core.atlas.find("creators-3jitilianji-1"), this.x, this.y);
                    // Draw.rect(Core.atlas.find("creators-coree4"), this.x, this.y, 45 + Time.time * 1);
                },
            }, a);
        });

        a.health = 500;
        a.size = 4;
        a.craftTime = 20;
        a.itemCapacity = 50;
        a.liquidCapacity = 30;
        a.consumes.power(3.5);
        a.consumes.liquid(Liquids.slag, 0.25);
        a.results = ItemStack.with(
            Items.thorium, 13,
            jinfen, 8,
            jingliantai, 10,
            kuangzajinghuawu, 40,
            Items.titanium, 18,
        );;
        a.requirements = ItemStack.with(
            Items.titanium, 450,
            weijing2, 15,
            taihejin, 45,
            jin, 60,
            guijingti, 150,
            hejinboli, 25,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jitilianjimoliyetilianji =
    (() => {
        const a = extend(Separator, "3jitilianjimoliyetilianji", {});
        a.health = 600; //魔力液提炼机
        a.size = 3;
        a.craftTime = 15;
        a.itemCapacity = 70;
        a.liquidCapacity = 30;
        a.consumes.power(6);
        a.consumes.item(kuangzajinghuawu);
        a.consumes.liquid(moliye, 0.0333333);
        a.results = ItemStack.with(
            Items.plastanium, 7,
            Items.phaseFabric, 7,
            Items.silicon, 65,
            Items.surgeAlloy, 30,
        );;
        a.requirements = ItemStack.with(
            Items.titanium, 450,
            weijing2, 12,
            jin, 60,
            guijingti, 150,
            molishi, 20,
            hejinboli, 35,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.jitilianji4 =
    (() => {
        const a = extend(Separator, "4jitilianji", {}); //4级提炼机
        a.buildType = prov(() => {
            return new JavaAdapter(Separator.SeparatorBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-4jitilianji-1"), this.x, this.y, 90 - this.totalProgress * 2);
                    Draw.rect(Core.atlas.find("creators-4jitilianji-2"), this.x, this.y, 90 + this.totalProgress * 2);
                },
            }, a);
        });
        a.health = 700;
        a.size = 5;
        a.craftTime = 6;
        a.itemCapacity = 150;
        a.liquidCapacity = 20;
        a.consumes.power(10);
        a.consumes.liquid(JHhejinLiquid, 3 / 60);
        a.results = ItemStack.with(
            zuanjing, 220,
            weijing1, 350,
            guijingti, 400,
            weijing3, 20,
            kuangzajinghuawu, 700,
        );;
        a.requirements = ItemStack.with(
            Items.titanium, 450,
            weijing3, 60,
            jin, 160,
            taihejin, 30,
            guijingti, 150,
            hejinboli, 70,
            monengjing2, 10,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.xiaofentilianji =
    (() => {
        const a = extend(GenericCrafter, "xiaofentilianji", {});
        a.health = 260; //硝粉提炼机
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 10;
        a.craftTime = 90;
        a.drawer = new DrawSmelter(Color.valueOf("DADADA"));
        a.updateEffect = Fx.steam;
        a.consumes.power(1.2);
        a.consumes.liquid(moliye, 0.01);
        a.consumes.item(
            Items.thorium, 3
        );
        a.outputItem = new ItemStack(
            xiao, 1,
        );
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.lead, 70,
            Items.metaglass, 55,
            zijing1, 10,
            guijingti, 110,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
//-----------------------------------------------------------
exports.zhayaozhizaoji =//炸药制造机
    (() => {
        const a = MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "zhayaozhizaoji", [
            {
                input: {
                    items: ["creators-tanban/2", "pyratite/2", "creators-xiao/2"],
                    power: 4,
                },
                output: {
                    items: ["creators-zhayao/1"],
                },
                craftTime: 110,
            },

            {
                input: {
                    items: ["creators-gutaiwanqin/1", "blast-compound/2"],
                    liquids: ["creators-jinglianlio/2"],
                    power: 3,
                },
                output: {
                    items: ["creators-zhayao/1"],
                },
                craftTime: 80,
            },
            {
                input: {
                    items: ["creators-gutaiwanqin/2", "blast-compound/3"],
                    liquids: ["creators-yuanwan/6"],
                    power: 3,
                },
                output: {
                    items: ["creators-zhayao/3"],
                },
                craftTime: 80,
            },
        ]);

        a.health = 480;
        a.size = 3;
        a.itemCapacity = 10;
        a.liquidCapacity = 15;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftEffect = DrawS.zuanSmeltsmoke;
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.lead, 80,
            Items.graphite, 65,
            weijing1, 45,
            guijingti, 80,
            zuanjing, 20,

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();

//-----------------------------------------------------------
exports.jhgtbzwj =
    (() => {
        const a = extend(GenericCrafter, "jhgtbzwj", {}); //聚合固体爆炸物机
        a.health = 2200;
        a.size = 3;
        a.itemCapacity = 50;
        a.buildCostMultiplier = 0.2;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 110;
        a.updateEffect = Fx.steam;
        a.craftEffect = Fx.mine;
        a.updateEffectChance = 0.2;
        a.consumes.liquid(liziye, 0.05);
        a.consumes.power(8.5);
        a.consumes.items(new ItemStack.with(
            Items.blastCompound, 3,
            zhayao, 2,
            buding, 6
        ));
        a.outputItem = new ItemStack(
            juhebaozhawu, 1,
        );
        a.requirements = ItemStack.with(
            guijingti, 650,
            Items.plastanium, 130,
            jin, 450,
            weijing3, 35,
            monengjing1, 120,
            buding, 320
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------
exports.qianghuaronglu =
    (() => {
        const a = extend(GenericCrafter, "qianghuaronglu", {});
        a.health = 280; //强化熔炉
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquids = true;
        a.updateEffect = Fx.steam;
        a.drawer = new DrawLiquid()
        a.itemCapacity = 10;
        a.liquidCapacity = 100;
        a.craftTime = 20;
        a.consumes.power(2);
        a.consumes.items(new ItemStack.with(
            Items.scrap, 3,
        ));
        a.outputLiquid = LiquidStack(
            Liquids.slag, 12
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 35,
            Items.titanium, 80,
            weijing1, 4,
            guijingti, 130,
            hejinboli, 10,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------
exports.lengdongyehunheji =
    (() => {
        const a = extend(LiquidConverter, "lengdongyehunheji", {});
        a.alwaysUnlocked = false;
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
exports.moliyehunheji =
    (() => {
        const a = extend(LiquidConverter, "moliyehunheji", {});
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
exports.molijinghuatilianji =
    (() => {
        const a = extend(LiquidConverter, "molijinghuatilianji", {});
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
const liziyeji = extend(LiquidConverter, "liziyeji", {}); //离子液机
liziyeji.group = BlockGroup.liquids
exports.liziyeji = liziyeji;
//-----------------------------------------------------------
exports.yuanwanjinghuaji =
    (() => {
        const a = extend(GenericCrafter, "yuanwanjinghuaji", {});
        a.health = 950;//沅烷净化机
        a.size = 3;
        a.itemCapacity = 20;
        a.liquidCapacity = 200;
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 180;
        a.drawer = new DrawLiquid()
        a.updateEffect = Fx.steam;
        a.consumes.liquid(yuanwan0, 1.5);
        a.consumes.power(13.5);
        a.consumes.items(new ItemStack.with(
            monengjing1, 7,
            guijingti, 12,
        )
        );
        a.outputLiquid = new LiquidStack(
            liziye, 18,
        );
        a.outputItem = new ItemStack(
            juhebaozhawu, 1,
        );
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 90,
            Items.plastanium, 120,
            jingliantai, 300,
            guijingti, 150,
            zuanjing, 500,
            hejinboli, 350,
            weijing2, 180,
            weijing3, 130,
            taihejin, 70,
            monengjing2, 20,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
exports.weichenshoujiqi =
    (() => {
        const CuangWei = lib.createBuildLimit(1);
        const a = extend(GenericCrafter, "weichenshoujiqi", {
            canBreak(tile) { return false; },//不可拆    //创微收集器
            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },
            canPlaceOn(tile, team) {
                if (!CuangWei.canBuild(team)) {
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
                if (!CuangWei.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 1),
                        x, y, valid
                    );
                }
            },
        });
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {

                add() {
                    this.super$add();
                    if (this.team != Team.derelict) {
                        CuangWei.addBuild(this.team);
                    }
                },
                readBase(read) {
                    this.super$readBase(read);
                    if (this.team != Team.derelict) {
                        CuangWei.addBuild(this.team);
                    }
                },
                remove() {
                    if (this.added) { CuangWei.removeBuild(this.team); }
                    this.super$remove();
                },
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-weichenshoujiqi-1"), this.x, this.y, 45 - Time.time * 1);
                },
            }, a);
        });
        a.health = 360;
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.canOverdrive = false;
        a.itemCapacity = 3;
        a.craftTime = 3 * 60 * 60 * 60;//小时
        a.updateEffect = Fx.lightningCharge;
        a.updateEffectChance = 0.2;
        a.consumes.power(5.333343);
        a.outputItem = new ItemStack(
            chuangshiweichen, 1,
        );
        a.requirements = ItemStack.with(
            weijing1, 20,
            jin, 50,
            zuanjing, 10,
            guijingti, 200,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()

//------------------------------------------------------------------------------------------
exports.qiangxiaolengqueyehunheji =
    (() => {
        const a = extend(LiquidConverter, "qiangxiaolengqueyehunheji", {});
        a.updateEffect = Fx.breakProp;
        a.updateEffectChance = 0.3;
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
exports.chuangshiji =
    (() => {
        const a = extend(GenericCrafter, "z-2chuangshiji", {});
        a.health = 9000; //创世纪
        a.size = 3;
        //  a.canOverdrive = false;
        a.hasPower = true;
        a.hasItems = true;;
        a.buildCostMultiplier = 50;
        a.itemCapacity = 100;
        a.craftTime = 36000;
        a.updateEffect = Fx.steam;
        a.updateEffectChance = 0.5;
        a.consumes.power(33333.333995);
        a.consumes.item(
            chuangshilizi, 50,
        );
        a.outputItem = new ItemStack(
            chuangshizhixing, 1,
        );
        a.requirements = ItemStack.with(
            weijing5, 65,
            zuanjing, 1200,
            monengjing2, 40,
            jingliantai, 1700,
            jin, 2300,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------
exports.chuangxingjiexiyi =
    (() => {
        const a = extend(GenericCrafter, "z-3chuangxingjiexiyi", {});
        a.health = 1999999999; //创星解析仪
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        //a.alwaysUnlocked = true;
        //  a.canOverdrive = false;;
        a.buildCostMultiplier = 30;
        a.itemCapacity = 50;
        a.craftTime = 6000;
        a.updateEffect = Fx.bubble;
        a.updateEffectChance = 0.5;
        a.consumes.power(5000);
        a.consumes.items(new ItemStack.with(
            chuangshizhixing, 1, weijing5, 30));
        a.outputItem = new ItemStack(
            chuangshiweichen, 13,
        );
        a.requirements = ItemStack.with(
            chuangshiweichen, 1,
            monengjing3, 5,
            chuangshilizi, 6,
            weijing5, 10,
            jin, 1300,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------
exports.chuangshiyujie =
    (() => {
        const a = extend(GenericCrafter, "z-4chuangshiyujie", {
            canBreak(tile) {
                return false;
            }
        });
        a.health = 1999999999; //创世域界
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        // a.alwaysUnlocked = true;
        a.canOverdrive = false;;
        a.buildCostMultiplier = 600;
        a.itemCapacity = 10;
        a.craftTime = 18000;
        a.updateEffect = DrawS.chuangshiyujieBubble;
        a.updateEffectChance = 0.5;
        a.consumes.power(2000);
        a.consumes.items(new ItemStack.with(
            chuangshilizi, 10, chuangshiweichen, 4));
        a.outputItem = new ItemStack(
            chuangshizhixing, 1,
        );
        a.requirements = ItemStack.with(
            chuangshiweichen, 1,
            monengjing2, 15,
            zuanjing, 60,
            weijing5, 2,
            jin, 300,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------


//-----------------------------------------------------------
exports.jinbigongcang =
    (() => {
        const a = extend(GenericCrafter, "zzz-jinbigongcang", {});
        a.health = 560; //金币工厂
        a.size = 3;
        a.hasPower = true;
        a.hasLiquid = true;
        a.hasItems = true;
        a.canOverdrive = false;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 20;
        a.craftTime = 180;
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.mine;
        a.updateEffectChance = 0.1;
        a.consumes.power(7);
        a.consumes.liquid(moliye, 0.01);
        a.consumes.items(new ItemStack.with(
            jin, 5,
            guijingti, 20));
        a.outputItem = new ItemStack(
            zzjinbi, 1,
        );
        a.requirements = ItemStack.with(
            zuanjing, 1000,
            jin, 1000,
            weijing1, 10,
            monengjing, 10,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------------------------------
exports.CuangShenBubble = (() => {
    var D = new Effect(20, e => {
        Draw.color(Color.valueOf("ECB000")); Lines.stroke(e.fout() + 0.2);
        Angles.randLenVectors(e.id, 2, 1 + 20 * e.fout(), e.rotation, 120, (x, y) => {
            Lines.circle(e.x + x, e.y + y, 1 + e.fin() * 3);
            Drawf.tri(e.x + x, e.y + y, e.fslope() * 3 + 1, e.fslope() * 3 + 1, Mathf.angle(x, y));
        });
    });
    return D;
})();
exports.chuangshizhishen =
    (() => {
        const CuangShen = lib.createBuildLimit(1);
        const a = extend(GenericCrafter, "z-5chuangshizhishen", {
            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },
            canBreak(tile) { return false; },//不可拆   //创世神棺材
            canPlaceOn(tile, team) {
                if (!CuangShen.canBuild(team)) {
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
                if (!CuangShen.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 1),
                        x, y, valid
                    );
                }
            },
        });
        a.buildType = prov(() => {
            return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {

                add() {
                    this.super$add();
                    if (this.team != Team.derelict) {
                        CuangShen.addBuild(this.team);
                    }
                },
                readBase(read) {
                    this.super$readBase(read);
                    if (this.team != Team.derelict) {
                        CuangShen.addBuild(this.team);
                    }
                },
                remove() {
                    if (this.added) { CuangShen.removeBuild(this.team); }
                    this.super$remove();
                },
            }, a);
        });
        a.health = 1999999999;
        a.size = 5;
        a.hasPower = false;
        a.hasItems = true;
        //a.alwaysUnlocked = true;
        a.canOverdrive = false;;
        a.buildCostMultiplier = 200;
        a.itemCapacity = 50;
        a.craftTime = 18000;
        a.updateEffect = exports.CuangShenBubble;
        a.updateEffectChance = 0.5;
        a.consumes.items(new ItemStack.with(
            chuangshizhixing, 50, yuanshencanpian, 5)
        );
        a.outputItem = new ItemStack(
            chuangshishenhun, 1,
        );
        a.requirements = ItemStack.with(
            chuangshizhixing, 10,
            monengjing3, 15,
            weijing5, 2,
            jin, 5000,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()

//-----------------------------------------------------------
exports.wupinyuan =
    (() => {
        const CuangGuan = lib.createBuildLimit(1);
        const a = extend(ItemSource, "z-6wupinyuan", {
            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },

            canBreak(tile) { return false; },//不可拆   ///创世神 物品源
            canPlaceOn(tile, team) {
                if (!CuangGuan.canBuild(team)) {
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
                if (!CuangGuan.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 1),
                        x, y, valid
                    );
                }
            },
        });
        a.buildType = prov(() => {
            return new JavaAdapter(ItemSource.ItemSourceBuild, {

                add() {
                    this.super$add();
                    if (this.team != Team.derelict) {
                        CuangGuan.addBuild(this.team);
                    }
                },
                readBase(read) {
                    this.super$readBase(read);
                    if (this.team != Team.derelict) {
                        CuangGuan.addBuild(this.team);
                    }
                },
                remove() {
                    if (this.added) { CuangGuan.removeBuild(this.team); }
                    this.super$remove();
                },
            }, a);
        });
        a.health = 1999999999;//创世神 物品源
        a.size = 3;
        a.targetable = false;
        a.posConfig = true;
        a.configurable = true;
        a.breakable = false;
        //a.alwaysUnlocked = true;
        a.buildCostMultiplier = 2000;//建造时间倍
        a.requirements = ItemStack.with(
            chuangshishenhun, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()





exports.choujiangji =
    (() => {
        const A7 = lib.createBuildLimit(2);//抽奖机
        const a = extend(Separator, "zzz-choujiangji", {
            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },
            canPlaceOn(tile, team) {
                if (!A7.canBuild(team)) {
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
                if (!A7.canBuild(Vars.player.team())) {
                    this.drawPlaceText(
                        Core.bundle.format("message.creators.ABCD", 2),
                        x, y, valid
                    );
                }
            },
        });
        a.buildType = prov(() => {
            return new JavaAdapter(Separator.SeparatorBuild, {

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
            }, a);
        });
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()
//-----------------------------------------------------------
exports.fashetai0 = (() => {
    const v = extend(LaunchPad, "fashetai0", {});//发射台
    v.size = 3;
    v.hasPower = true;
    v.health = 450;
    v.launchTime = 20 * 60;
    v.buildCostMultiplier = 5;
    //v.canOverdrive = false;
    v.itemCapacity = 70;
    v.alwaysUnlocked = false;
    v.consumes.power(280 / 60);
    v.requirements = ItemStack.with(
        Items.copper, 350,
        shimoxi, 140,
        Items.lead, 200,
        Items.titanium, 150,
        guijingti, 70,
    );
    v.category = Category.effect;
    v.buildVisibility = BuildVisibility.shown;
    v.group = BlockGroup.transportation
    return v;
})();


exports.fashetai = (() => {
    const v = extend(LaunchPad, "fashetai", { isHidden() { return !dsGlobal.H1(); }, });//微晶大发射台
    v.size = 5;
    v.hasPower = true;
    v.health = 2200;
    v.launchTime = 35 * 60;
    v.buildCostMultiplier = 5;
    //v.canOverdrive = false;
    v.itemCapacity = 180;
    v.alwaysUnlocked = false;
    v.consumes.power(500 / 60);
    v.requirements = ItemStack.with(
        shimoxi, 330,
        weijing3, 80,
        guijingti, 150,
        jingliantai, 50,
        Items.metaglass, 50,
    );
    v.category = Category.effect;
    v.buildVisibility = BuildVisibility.shown;
    v.group = BlockGroup.transportation
    return v;
})();

//-----------------------------------------------------------
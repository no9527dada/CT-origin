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



// Blocks.router.speed = 0; //路由器
// Blocks.router.instantTransfer = true;
// Blocks.router.itemCapacity = 5;
// Blocks.router.canOverdrive = true;











// Vars.ui.menufrag = extend(MenuFragment, {
//     build(group){

//     }
//   });



const lib = require('lib')
const dsGlobal = require('BlocksLibes/qianzhi');
const DrawS = require('BlocksLibes/DrawS');
//const { MultiCrafter1 } = require("XuanZeV7");
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1, zishi,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun, mieshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, dabaocobo, cobo,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    molijinghuaye, moliye, qiangxiaolengqueye, oreweijing4,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, canza, hejinboli, xudianchi,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, jinhuiboli, daboayan,
} = CTItem
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




exports.fensuiji =
    (() => {
        // const a = extend(CreatorsNoChooseMulti, "fensuiji", 2, {});
        const a = new CreatorsNoChooseMulti("fensuiji", 4);
        a.TableColor = Color.white;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jin, 1), 2),
            new CreatorsRecipe.OutputContents(ItemStack.with(jinfen, 2)), 22.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(kuangzajinghuawu, 5), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.sand, 14)), 30.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.scrap, 5), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.sand, 8)), 30.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.sand, 2)), 200.0,
        );
        a.health = 360;
        a.size = 2;
        a.itemCapacity = 30;
        a.buildCostMultiplier = 0.3;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.none;
        a.requirements = ItemStack.with(
            zuanjing, 30,
            weijing1, 15,
            jin, 50,
            Items.titanium, 120,
            Items.graphite, 250,

        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
/****drawer说明
 * new DrawDefault()=工厂的本体贴图
 * new DrawFlame()=steam蒸汽光圈
 * new DrawRegion("-bottom")=玻璃盖子贴图
 */
var shiyingrongluDraw = extend(DrawFrames, {});
shiyingrongluDraw.frames = 5
shiyingrongluDraw.interval = 5
shiyingrongluDraw.sine = false
exports.shiyingronglu =//石英熔炉
    (() => {
        const a = extend(GenericCrafter, "b-shiyingronglu", {});
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("DADADA")), shiyingrongluDraw);
        a.health = 150;
        a.buildCostMultiplier = 0.1;
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 50;
        a.updateEffect = Fx.bubble;
        a.consumePower(1);
        a.consumeItems(new ItemStack.with(
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

exports.guijingtichengxingji =//硅晶体成型机,(new DrawDefault(), Color.valueOf("8FC0D5"));
    (() => {
        const a = extend(GenericCrafter, "a-1guijingtichengxingji", {});
        a.health = 120;
        a.size = 2;
        a.hasPower = true;
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("8FC0D5")),);
        a.hasItems = true;
        a.buildCostMultiplier = 0.3;
        a.craftTime = 80;
        a.updateEffect = Fx.steam;
        a.consumePower(1);
        a.outputItem = new ItemStack(
            guijingti, 1,
        );
        a.consumeItems(new ItemStack.with(
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
exports.liuji =//硫机
    (() => {
        const a = new CreatorsNoChooseMulti("liuji", 2);
        a.TableColor = Color.white;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.coal, 1, Items.lead, 2, Items.sand, 2,), 0.2),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.pyratite, 1)), 69.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(xiao, 1, Items.coal, 2,), 0.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.pyratite, 1)), 69.0,
        );
        a.health = 220;
        a.size = 2;
        a.buildCostMultiplier = 0.3;
        a.itemCapacity = 10;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.none;
        a.requirements = ItemStack.with(
            guijingti, 20,
            Items.copper, 50,
            Items.graphite, 15,
            Items.lead, 75,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();

//-----------------------------------------------------------
exports.guilu =//硅炉
    (() => {
        const a = extend(AttributeCrafter, "guilu", {});
        a.health = 360;
        a.craftEffect = Fx.smeltsmoke;
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("B0BAC0")),);
        a.boostScale = 0.1;
        a.size = 2;
        a.hasPower = true;
        a.hasItems = true;
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 20;
        a.craftTime = 70;
        a.updateEffect = Fx.smoke;
        a.consumePower(3);
        a.consumeItems(new ItemStack.with(
            Items.coal, 2,
            Items.sand, 3));
        a.outputItem = new ItemStack(
            Items.silicon, 4,
        );
        a.requirements = ItemStack.with(
            Items.copper, 330,
            Items.lead, 330,
            Items.surgeAlloy, 60,
            Items.phaseFabric, 30,
            Items.silicon, 300,
            guijingti, 60,
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("BCCEE3")),);
        a.updateEffect = DrawS.guijingtihechengjiSteam;
        a.updateEffectChance = 0.3;
        a.consumePower(5);
        a.consumeLiquid(Liquids.cryofluid, 0.05);
        a.consumeItems(new ItemStack.with(
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
            weijing1, 10,
            guijingti, 40,

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
        a.health = 500;
        a.size = 2;
        a.itemCapacity = 20;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 100;
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("18CFDE")),);
        a.updateEffect = Fx.bubble;
        a.consumePower(10.6);
        a.consumeItems(new ItemStack.with(
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
SMX.shimoxiji.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("426996")),);
SMX.shimoxiji.craftEffect = Fx.smeltsmoke;
SMX.shimoxiji.health = 180;
SMX.shimoxiji.size = 2;
SMX.shimoxiji.hasPower = true;
SMX.shimoxiji.hasItems = true;
SMX.shimoxiji.buildCostMultiplier = 0.35;
SMX.shimoxiji.craftTime = 95;
SMX.shimoxiji.consumePower(0.6);
SMX.shimoxiji.consumeItems(new ItemStack.with(
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
        a.consumePower(0.7);
        a.consumeItems(new ItemStack.with(
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
//-----------------------------------------------------------
exports.budingjiagongchang =
    (() => {
        const a = extend(GenericCrafter, "budingjiagongchang", {});
        a.health = 220; //布丁加工厂
        a.size = 2;
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("FFD59E")),);
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 80;
        a.updateEffect = Fx.bubble;
        a.consumePower(1.8);
        a.consumeLiquid(Liquids.cryofluid, 0.1);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.budingjiagongchang2)
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 50;
        a.itemCapacity = 20;
        a.updateEffect = Fx.bubble;
        a.consumePower(12);
        a.consumeLiquid(Liquids.cryofluid, 0.15);
        a.consumeItems(new ItemStack.with(
            Items.plastanium, 3, Items.phaseFabric, 3));
        a.outputItem = new ItemStack(
            buding, 10,
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
        a.craftTime = 45;
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.hejinboli)
        a.updateEffect = Fx.steam;
        a.craftEffect = Fx.coalSmeltsmoke;
        a.consumePower(3);
        a.consumeItems(new ItemStack.with(
            Items.metaglass, 4,
            Items.plastanium, 2,
            Items.surgeAlloy, 3,

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

        a.health = 520; //金辉玻璃机
        a.size = 5;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 10;
        a.liquidCapacity = 20;
        a.craftTime = 90;
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffef99")),);
        a.boostScale = 0.15
        a.updateEffect = Fx.steam;
        a.craftEffect = DrawS.jinhuiboliSmeltsmoke;
        a.consumeLiquid(JHhejinLiquid, 12 / 60);
        a.consumePower(7);
        a.consumeItems(new ItemStack.with(
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
exports.zhiwujingyoutilianji =//植物精油萃取机
    (() => {
        const a = new CreatorsNoChooseMulti("zhiwujingyoutilianji", 4);
        a.TableColor = Color.white;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua1, 5,), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(canza, 5), LiquidStack.with(zhiwujingyou, 1.5)), 30.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua2, 5,), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(canza, 5), LiquidStack.with(zhiwujingyou, 1.5)), 30.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua3, 5,), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(canza, 5), LiquidStack.with(zhiwujingyou, 1.5)), 30.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.sporePod, 4,), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(canza, 4), LiquidStack.with(zhiwujingyou, 1.5)), 25.0,
        );

        a.health = 320;
        a.size = 2;
        a.buildCostMultiplier = 0.3;
        a.liquidCapacity = 10
        a.itemCapacity = 12;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.none;
        a.requirements = ItemStack.with(
            shimoxi, 20,
            guijingti, 45,
            Items.copper, 200,
            Items.plastanium, 80,
            Items.lead, 230,
            Items.thorium, 150,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();

//--------------------------------------------------------------
exports.zhiwudaosuiji =//植物捣碎
    (() => {
        const a = new CreatorsNoChooseMulti("zhiwudaosuiji", 4);
        a.TableColor = Color.white;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua1, 5,), 0.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhiwumo, 2)), 0.2,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua2, 5,), 0.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhiwumo, 2)), 0.2,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua3, 5,), 0.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhiwumo, 2)), 0.2,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.sporePod, 3), 0.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhiwumo, 1)), 0.5,
        );
        a.health = 220;
        a.size = 2;
        a.buildCostMultiplier = 0.6;
        a.itemCapacity = 12;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.none;
        a.requirements = ItemStack.with(
            guijingti, 60,
            jingliantai, 75,
            jin, 15,
            Items.lead, 25,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
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
        a.consumePower(2);
        a.consumeLiquid(zhiwujinghuaye, 12 / 60);
        a.outputLiquid = new LiquidStack(
            zhiwujingyou, 6 / 60,
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
        a.consumeLiquid(Liquids.slag, 0.134);
        a.consumePower(1);
        a.consumeItem(
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
        a.consumePower(1.3);
        a.consumeItem(
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
        a.consumeLiquid(moliye, 0.003333333334);
        a.consumePower(6);
        a.consumeItem(
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
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.zijinggongchang)
        a.updateEffect = Fx.steam;
        a.consumePower(6);
        a.consumeItems(new ItemStack.with(
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
exports.zijingronglianji =
    (() => {
        const a = extend(GenericCrafter, "zijingronglianji", {}); //紫晶熔炼机
        a.health = 550;
        a.size = 3;
        a.craftTime = 120;
        a.itemCapacity = 20;
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.zijinggongchang)
        a.consumePower(8);
        a.updateEffect = Fx.steam;
        a.consumeItems(new ItemStack.with(
            gutaiwanqin, 1,
            zishi, 4));
        a.outputItem = new ItemStack(
            zijing1, 4,
        );
        a.requirements = ItemStack.with(
            jingliantai, 450,
            taihejin, 330,
            JHhejin, 260,
            guijingti, 500,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })();
exports.jiweijinggongchang1 =
    (() => {
        const a = extend(GenericCrafter, "c-1jiweijinggongchang", {});

        a.health = 160; //微晶工厂
        a.size = 2;
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.jiweijinggongchang1)
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 180;
        a.updateEffect = Fx.bubble;
        a.consumePower(1.8);
        a.consumeLiquid(zhiwujinghuaye, 0.03333333334);
        a.consumeItems(new ItemStack.with(
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
        a.health = 320;
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.jiweijinggongchang2)
        a.size = 5;
        a.liquidCapacity = 22,
            a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 350;
        a.itemCapacity = 18;
        a.craftEffect = Fx.mine;
        a.updateEffect = Fx.fireballsmoke;
        a.updateEffectChance = 0.1
        a.consumePower(190 / 60);
        a.consumeLiquid(zhiwujinghuaye, 9 / 60);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(),);
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.mine;
        a.updateEffectChance = 0.1
        a.consumePower(820 / 60);
        a.consumeLiquid(molijinghuaye, 0.05);
        a.consumeItems(new ItemStack.with(
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
exports.jiweijinggongchang4 =
    (() => {
        const weijing4GC = extend(GenericCrafter, "c-4jiweijinggongchang", {});

        weijing4GC.health = 3000; //微晶工厂4
        weijing4GC.size = 8;
        weijing4GC.itemCapacity = 800;
        weijing4GC.liquidCapacity = 150;
        weijing4GC.buildCostMultiplier = 0.2;
        weijing4GC.hasPower = true;
        weijing4GC.hasItems = true;
        weijing4GC.hasLiquid = true;
        weijing4GC.craftTime = 18000;
        weijing4GC.craftEffect = CreatorsFX.nuclearcloud;
        weijing4GC.updateEffect = CreatorsFX.impactShockwave;
        weijing4GC.coolEffect = CreatorsFX.nuclearcloud;
        weijing4GC.updateEffectChance = 0.1
        weijing4GC.consumePower(2000);
        weijing4GC.consumeLiquid(molijinghuaye, 1);
        weijing4GC.consumeItems(new ItemStack.with(
            Items.surgeAlloy, 560,
            zuanjing, 520,
            monengjing1, 60,
            weijing3, 50,
            jin, 650,
            jingliantai, 700,
            hejinboli, 220,
            zijing1, 640));
        weijing4GC.outputItem = new ItemStack(
            weijing4, 1,
        );
        weijing4GC.requirements = ItemStack.with(
            Items.copper, 1000,
            Items.lead, 1200,
            Items.silicon, 2000,
            Items.titanium, 800,
            molishi, 700,
            weijing2, 500,
            weijing3, 120,
            zuanjing, 200,
        );
        weijing4GC.buildVisibility = BuildVisibility.shown;
        weijing4GC.category = Category.crafting;

        return weijing4GC;
    })();
//------------------------------------------------------------------- 

exports.jiweijinggongchang5 =
    (() => {
        const a = extend(GenericCrafter, "c-5jiweijinggongchang", {});
        a.health = 5000; //微晶工厂5
        a.size = 4;
        a.itemCapacity = 280;
        a.liquidCapacity = 150;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 18000;
        a.idleSoundVolume = 0.5;
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.jiweijinggongchang5)
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.spawnShockwave;
        a.updateEffectChance = 0.1
        a.consumePower(3000);
        a.consumeLiquid(qiangxiaolengqueye, 0.16666667);
        a.consumeItems(new ItemStack.with(
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
exports.weijingxilianji4 =//4级微晶洗练机
    (() => {
        const a = new CreatorsMultiCrafter("weijingxilianji4", 1);
        a.TableColor = Color.valueOf("78ffa5");
        //a.RecipeShowIS = 3//是几个配方跳一行
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(oreweijing4, 5,), LiquidStack.with(zhiwujingyou, 6), 12),
            new CreatorsRecipe.OutputContents(ItemStack.with(weijing4, 5, zuanshikuang, 2, Items.scrap, 15,)), 240.0,
        );
        a.health = 650;
        a.size = 4;
        a.buildCostMultiplier = 0.3;
        a.itemCapacity = 20;
        a.liquidCapacity = 25;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.steam;
        a.updateEffectChance = 0.3
        a.requirements = ItemStack.with(
            Items.copper, 150,
            Items.lead, 90,
            guijingti, 170,
            monengjing2, 15,
            weijing3, 35,
            hejinboli, 350,
        );
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(zhiwujingyou), new DrawDefault())
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.weijingfenjieji =//微晶分解机
    (() => {
        const a = new CreatorsMultiCrafter("weijingfenjieji2R", 2);
        a.TableColor = Color.valueOf("78ffa5");
        a.RecipeShowIS = 3//是几个配方跳一行
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(weijing4, 1,), LiquidStack.with(liziye, 1.2), 14),
            new CreatorsRecipe.OutputContents(ItemStack.with(weijing2, 5)), 340.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(weijing4, 1,), LiquidStack.with(liziye, 1.2), 12),
            new CreatorsRecipe.OutputContents(ItemStack.with(taihejin, 15)), 120.0,
        );
        a.health = 360;
        a.size = 2;
        a.buildCostMultiplier = 0.3;
        a.itemCapacity = 30;
        a.liquidCapacity = 10;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.lancerLaserCharge;
           a.updateEffectChance = 0.05
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.lead, 70,
            guijingti, 170,
            monengjing2, 15,
            weijing4, 35,
            hejinboli, 70,
            taihejin, 350,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
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
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.jiweijinggongchang21);
        a.craftEffect = Fx.mine;
        a.updateEffect = Fx.fireballsmoke;
        a.updateEffectChance = 0.1
        a.consumePower(50);
        a.consumeLiquid(molijinghuaye, 0.1);
        a.consumeItems(new ItemStack.with(
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
// const c = require('BlocksLibes/liziduizhuangji'); //粒子对撞机
// exports.liziduizhuangji = c.duizhuangji;

exports.liziduizhuangji =
    (() => {
        const liziduizhuangjii = extend(GenericCrafter, "z-1liziduizhuangji", {});
        liziduizhuangjii.health = 2800;//粒子机
        liziduizhuangjii.size = 4;
        liziduizhuangjii.hasPower = true;
        liziduizhuangjii.hasItems = true;;
        liziduizhuangjii.buildCostMultiplier = 30;
        liziduizhuangjii.itemCapacity = 3000;
        liziduizhuangjii.craftTime = 10800;
        liziduizhuangjii.updateEffect = Fx.mineHuge;
        liziduizhuangjii.updateEffectChance = 0.1;
        liziduizhuangjii.consumePower(13333.333333);
        liziduizhuangjii.drawer = new DrawMulti(new DrawDefault());
        liziduizhuangjii.consumeItems(new ItemStack.with(
            monengjing3, 3,
            weijing5, 2,
            weijing4, 15,
            weijing3, 90,
            weijing2, 320,
            weijing1, 750,
            guijingti, 3000
        ));
        liziduizhuangjii.outputItem = new ItemStack(
            chuangshilizi, 1,
        );
        liziduizhuangjii.requirements = ItemStack.with(
            weijing5, 8,
            monengjing, 120,
            zijing1, 340,
            zuanjing, 650,
            jinhuiboli, 800
        );
        liziduizhuangjii.group = BlockGroup.transportation
        liziduizhuangjii.buildVisibility = BuildVisibility.shown;
        liziduizhuangjii.category = Category.crafting;

        return liziduizhuangjii;
    })();
//-----------------------------------------------------------

exports.testC =//打包机
    (() => {
        const a = new CreatorsMultiCrafter("yeti11R", 11);
        a.TableColor = Color.valueOf("78ffa5");
        a.allRecShow = false;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(Liquids.water, 100), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaoshui, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(Liquids.oil, 100), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaoshiyou, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(jinglianlio, 100), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaojinglianlio, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(Liquids.cryofluid, 100), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaoleng, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(moliye, 100), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaomoli, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(zhiwujingyou, 100), 1.2),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaozhiwujingyou, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(zhiwujinghuaye, 100), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaozhiwu, 1)), 180.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(molijinghuaye, 100), 3),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaojingmoli, 1)), 300.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(JHhejinLiquid, 100), 4),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaoJHLiquid, 1)), 350.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(qiangxiaolengqueye, 100), 5),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaoyedan, 1)), 420.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 5,), LiquidStack.with(cobo, 100), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(dabaocobo, 1)), 180.0,
        );
        a.health = 360;
        a.size = 2;
        a.itemCapacity = 10;
        a.liquidCapacity = 160;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.steam;
        a.requirements = ItemStack.with(
            jingliantai, 240,
            Items.plastanium, 60,
            jin, 80,
            Items.titanium, 120,
            Items.graphite, 250
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();
//--------------------------------------------------------------------------------
exports.testA =//解包机
    (() => {
        const a = new CreatorsMultiCrafters("yeti22R", 11);
        a.TableColor = Color.valueOf("78ffa5");
        a.RecipeShowIS = 3; a.allRecShow = false;
        a.ItemLiquid = [
            false, false, false, false, false, false, false, false, false, false, false,
            true, true, true, true, true, true, true, true, true, true, true
        ]
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaoshui, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(Liquids.water, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaoshiyou, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(Liquids.oil, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaojinglianlio, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(jinglianlio, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaoleng, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(Liquids.cryofluid, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaomoli, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(moliye, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaozhiwujingyou, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(zhiwujingyou, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaozhiwu, 1), 1.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(zhiwujinghuaye, 100)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaojingmoli, 1), 3),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(molijinghuaye, 100)), 90.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaoJHLiquid, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(JHhejinLiquid, 100)), 100.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaoyedan, 1), 5),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(qiangxiaolengqueye, 100)), 120.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(dabaocobo, 1), 1),
            new CreatorsRecipe.OutputContents(ItemStack.with(jingliantai, 1), LiquidStack.with(cobo, 100)), 60.0,
        );
        a.health = 450;
        a.size = 2;
        a.itemCapacity = 10;
        a.liquidCapacity = 200;
        a.craftEffect = Fx.pulverizeMedium;
        // a.craftEffect = DrawS.zuanSmeltsmoke;
        a.updateEffect = Fx.lancerLaserCharge;
        a.requirements = ItemStack.with(
            jingliantai, 240,
            weijing1, 5,
            jin, 300,
            Items.titanium, 120,
            Items.graphite, 250
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();

exports.yanbaoji =//炎液包装分解机
    (() => {
        const a = new CreatorsMultiCrafters("yanbaoji", 2);
        a.TableColor = Color.valueOf("78ffa5"); a.allRecShow = false;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.surgeAlloy, 10,), LiquidStack.with(yuanwan0, 50), 15),
            new CreatorsRecipe.OutputContents(ItemStack.with(daboayan, 1)), 480.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(daboayan, 1,), 15),
            new CreatorsRecipe.OutputContents(LiquidStack.with(yuanwan0, 50)), 250.0,
        );
        a.health = 420;
        a.size = 2;
        a.itemCapacity = 20;
        a.liquidCapacity = 100;
        a.craftEffect = Fx.smeltsmoke;
        a.updateEffect = Fx.smeltsmoke;
        a.requirements = ItemStack.with(
            taihejin, 80,
            Items.surgeAlloy, 260,
            Items.phaseFabric, 180,
            guijingti, 320,
            zuanjing, 320,
            weijing4, 30,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.zuanshiyasuoji =//钻石矿压缩机
    (() => {
        const a = new CreatorsMultiCrafter("zuanshiyasuojiR", 2);
        a.TableColor = Color.valueOf("78ffa5");
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.coal, 100), LiquidStack.with(Liquids.oil, 12), 6),
            new CreatorsRecipe.OutputContents(ItemStack.with(zuanshikuang, 1)), 150.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(tanban, 5), LiquidStack.with(Liquids.oil, 3), 6),
            new CreatorsRecipe.OutputContents(ItemStack.with(zuanshikuang, 1)), 77.0,
        );
        a.health = 350;
        a.size = 2;
        a.itemCapacity = 100;
        a.liquidCapacity = 24;
        a.craftEffect = Fx.pulverizeMedium;
        // a.craftEffect = DrawS.zuanSmeltsmoke;
        a.updateEffect = Fx.lancerLaserCharge;
        a.requirements = ItemStack.with(
            Items.lead, 50,
            Items.copper, 80,
            Items.titanium, 35,
            Items.surgeAlloy, 30,
            guijingti, 40,
            zuanjing, 60,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("B8C9FF")),);
        a.updateEffectChance = 0.15;
        a.consumeLiquid(jinglianlio, 3 / 60);
        a.consumePower(5);
        a.consumeItems(new ItemStack.with(
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
        a.consumeLiquid(Liquids.oil, 12 / 60);
        a.consumePower(4);
        a.consumeItem(
            buding, 2,
        );
        a.outputItem = new ItemStack(
            gutaiwanqin, 1,
        );
        a.outputLiquid = new LiquidStack(
            jinglianlio, 9.2 / 60,
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffef99")),);
        a.updateEffect = DrawS.jinSmeltsmoke;
        a.updateEffectChance = 0.1;
        a.consumePower(7);
        a.consumeItems(new ItemStack.with(
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
        const a = extend(GenericCrafter, "jinhuiyeji", {});
        a.health = 500; //金辉液体融合工厂
        a.size = 3;
        a.itemCapacity = 10;
        a.liquidCapacity = 20;
        a.outputsLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.hasLiquid = true;
        a.craftTime = 60;
        a.updateEffect = new Effect(50, e => {
            Draw.color(Color.valueOf("ffd37f"));
            Lines.stroke(e.fout() + 0.2);
            Angles.randLenVectors(e.id, 4, e.rotation * 1.4, (x, y) => {
                Lines.circle(e.x + x, e.y + y, 1 + e.fin() * 3);
            });
        });
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(liziye), new DrawDefault())
        a.consumePower(2);
        a.consumeLiquid(liziye, 12 / 60);
        a.consumeItem(
            JHhejin, 1,
        );
        a.outputLiquid = new LiquidStack(
            JHhejinLiquid, 12 / 60,
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
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawWeave(), new DrawDefault());
        a.consumePower(9);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawWeave(), new DrawDefault());
        a.consumePower(7.5);
        a.consumeLiquid(zhiwujingyou, 3 / 60);
        a.consumeItems(new ItemStack.with(
            Items.thorium, 5, Items.sand, 10));
        a.outputItem = new ItemStack(
            Items.phaseFabric, 3,
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
exports.duochongsugangji =//多重塑钢机
    (() => {
        const a = new CreatorsMultiCrafter("duochongsugangjiR", 4);
        a.TableColor = Color.valueOf("78ffa5"); a.allRecShow = false;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.titanium, 5,), LiquidStack.with(Liquids.oil, 18), 6),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.plastanium, 3)), 80.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.titanium, 4,), LiquidStack.with(jinglianlio, 4), 4.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.plastanium, 3)), 50.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 4,), LiquidStack.with(Liquids.oil, 18), 4),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.plastanium, 3)), 65.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(jingliantai, 4,), LiquidStack.with(jinglianlio, 2), 3.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.plastanium, 4)), 30.0,
        );


        a.health = 420;
        a.size = 3;
        a.buildCostMultiplier = 0.3;
        a.itemCapacity = 20;
        a.liquidCapacity = 25;
        a.craftEffect = Fx.smeltsmoke;
        a.updateEffect = Fx.smeltsmoke;
        a.requirements = ItemStack.with(
            taihejin, 90,
            Items.plastanium, 220,
            Items.titanium, 180,
            guijingti, 255,
            jin, 130,
            weijing1, 10,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
        return a;
    })();
//-----------------------------------------------------------
exports.moliyeshoujiqi1 =
    (() => {
        const a = extend(GenericCrafter, "moliyeshoujiqi1", {});
        a.requirements = ItemStack.with(
            jin, 80,
            Items.plastanium, 20,
            Items.titanium, 40,
        );
        a.group = BlockGroup.liquids
        a.buildVisibility = BuildVisibility.shown;
        return a;
    })();
//-----------------------------------------------------------
exports.moliyeshoujiqi2 =
    (() => {
        const a = extend(GenericCrafter, "moliyeshoujiqi2", {});
        a.group = BlockGroup.liquids
        a.buildVisibility = BuildVisibility.shown;
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
        a.drawer = new DrawMulti(
            new DrawRegion("-bottom"),
            new DrawLiquidTile(moliye),
            new DrawDefault(),
            new DrawCultivator(),
            // new DrawRegion("-top")
        );
        // a.drawer = new DrawCultivator();
        a.updateEffect = Fx.bubble;
        a.consumePower(2);
        a.consumeLiquid(moliye, 0.013);
        a.results = ItemStack.with(
            hua1, 100,
            hua2, 100,
            hua3, 100,
            molizhi, 18,
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
exports.zhiwucuiqugongchang =//植物萃取工厂
    (() => {
        const a = extend(GenericCrafter, "e-1zhiwucuiqugongchang", {});
        a.consumePower(2.5);
        a.consumeLiquid(Liquids.water, 12 / 60);
        a.consumeItems(new ItemStack.with(
            zhiwumo, 4,
        ));
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(zhiwujinghuaye), new DrawDefault())
        a.group = BlockGroup.liquids
        a.buildVisibility = BuildVisibility.shown;
        return a;
    })();
//-----------------------------------------------------------
exports.zhiwucuiqugongchang2 =//高级植物萃取工厂
    (() => {
        const a = extend(GenericCrafter, "e-2zhiwucuiqugongchang", {});
        a.consumePower(3.5);
        a.consumeLiquid(Liquids.water, 36 / 60);
        a.consumeItems(new ItemStack.with(
            zhiwumo, 6,
        ));
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(zhiwujinghuaye), new DrawDefault())
        a.group = BlockGroup.liquids
        a.buildVisibility = BuildVisibility.shown;
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
        a.consumePower(2);
        a.consumeItems(new ItemStack.with(
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
        a.consumeItems(ItemStack.with(
            jingliantai, 3
        ));
        a.consumePower(30);
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
        a.consumePower(60);
        a.consumeItem(
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
        a.consumePower(1.75);
        a.consumeItem(
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
        a.consumeLiquid(moliye, 0.02);
        a.consumePower(2.9);
        a.consumeItem(
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
        a.consumeLiquid(Liquids.cryofluid, 4 / 60);
        a.consumePower(210 / 60);
        a.consumeItems(new ItemStack.with(
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
exports.meitantiliangongchang =//高级煤炭机//煤炭提炼工厂
    (() => {
        const a = new CreatorsNoChooseMulti("1meitantiliangongchang", 6);
        a.TableColor = Color.white;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua1, 3), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.coal, 3)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua2, 3), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.coal, 3)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(hua3, 3), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.coal, 3)), 60.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(canza, 5), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.coal, 8)), 30.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(zhiwumo, 2), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.coal, 5)), 50.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(Items.sporePod, 3), 1.3),
            new CreatorsRecipe.OutputContents(ItemStack.with(Items.coal, 3)), 60.0,
        );
        // a.addRecipe(
        //     new CreatorsRecipe.InputContents(ItemStack.with(Items.sporePod, 3), 1.3),
        //     new CreatorsRecipe.OutputContents(2), 60.0,
        // );
        a.health = 360;
        a.size = 2;
        a.buildCostMultiplier = 0.5;
        a.liquidCapacity = 1;
        a.itemCapacity = 15;
        a.craftEffect = Fx.pulverizeMedium;
        a.updateEffect = Fx.none;
        a.requirements = ItemStack.with(
            guijingti, 45,
            zuanjing, 20,
            molizhi, 30,
            Items.copper, 20,
            Items.titanium, 15,
            Items.lead, 35,
            Items.graphite, 80
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("a4a4a4")),);
        a.updateEffect = DrawS.Magmasmoke;
        a.updateEffectChance = 0.3;
        a.consumePower(3.5);
        a.consumeItem(
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
        a.drawer = new DrawMulti(
            new DrawDefault(),
            new DrawCultivator(),
            new DrawRegion("-top")
        );
        a.envRequired |= Env.spores;
        a.liquidCapacity = 100;
        a.craftEffect = Fx.mine;
        a.updateEffectChance = 0.1;
        a.consumePower(120 / 60);
        a.consumeLiquid(Liquids.water, 30 / 60);
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
        a.consumePower(2.4);
        a.consumeItems(new ItemStack.with(
            molizhi, 2,
            weijing1, 1));
        a.outputItem = new ItemStack(
            molishi, 1,
        );
        a.requirements = ItemStack.with(
            jingliantai, 96,
            jin, 85,
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(),)
        a.updateEffect = Fx.steam;
        a.consumePower(4.3);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(),)
        a.buildCostMultiplier = 0.2;
        a.itemCapacity = 20;
        a.craftTime = 60;
        a.updateEffect = Fx.steam;
        a.consumePower(8);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(),)
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffect = Fx.mine;
        a.updateEffectChance = 0.1;
        a.consumePower(120);
        a.consumeLiquid(molijinghuaye, 12 / 60);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(),);
        a.updateEffect = Fx.steam;
        a.craftEffect = Fx.fireballsmoke;
        a.updateEffectChance = 0.1;
        a.consumePower(85000 / 60);
        a.consumeLiquid(JHhejinLiquid, 24 / 60);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(),)
        a.updateEffect = Fx.steam;
        a.consumePower(12.5);
        a.consumeItems(new ItemStack.with(
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

        a.health = 480; //高效巨浪合金工厂
        a.size = 4;
        a.hasPower = true;
        a.hasItems = true;
        //a.buildCostMultiplier = 0.3;
        a.itemCapacity = 30;
        a.craftTime = 70;
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffef99")),);
        a.flameColor = Color.valueOf("ffc099");
        a.updateEffect = Fx.mine;
        a.craftEffect = Fx.fireballsmoke;
        a.consumePower(6);
        a.consumeItems(new ItemStack.with(
            Items.copper, 6,
            Items.lead, 7,
            Items.silicon, 5,
            Items.titanium, 6));
        a.outputItem = new ItemStack(
            Items.surgeAlloy, 3,
        );
        a.requirements = ItemStack.with(
            Items.copper, 260,
            Items.surgeAlloy, 200,
            taihejin, 45,
            guijingti, 180,
            weijing1, 120,
            //molishi, 100,
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
        a.drawer = new DrawMulti(new DrawDefault(), DrawS.none);
        a.attribute = Attribute.heat;
        a.boostScale = 0.1;
        a.craftEffect = Fx.pulverizeMedium
        a.consumeLiquid(moliye, 0.59 / 60);
        a.consumePower(3.2);
        a.consumeItem(
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

        a.health = 500;
        a.size = 4;
        a.craftTime = 20;
        a.itemCapacity = 50;
        a.liquidCapacity = 30;
        a.consumePower(3.5);
        a.consumeLiquid(Liquids.slag, 0.25);
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(), new DrawDefault());
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
        a.consumePower(6);
        a.consumeItem(kuangzajinghuawu);
        a.consumeLiquid(moliye, 0.0333333);
        a.results = ItemStack.with(
            Items.plastanium, 7,
            Items.phaseFabric, 7,
            Items.silicon, 65,
            Items.surgeAlloy, 30,
        );;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(), new DrawDefault());
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

        a.health = 700;
        a.size = 5;
        a.craftTime = 10;
        a.itemCapacity = 150;
        a.liquidCapacity = 20;
        a.consumePower(10);
        a.consumeLiquid(JHhejinLiquid, 2 / 60);
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(), /* new DrawRegion("-spinner", 3, true),工作时贴图旋转 */ new DrawDefault());
        a.results = ItemStack.with(
            zuanjing, 250,
            weijing1, 140,
            guijingti, 450,
            weijing3, 40,
            kuangzajinghuawu, 900,
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
        a.drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("DADADA")),);
        a.updateEffect = Fx.steam;
        a.consumePower(1.2);
        a.consumeLiquid(moliye, 0.01);
        a.consumeItem(
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
        const a = new CreatorsMultiCrafter("zhayaozhizaojiR", 3);
        a.TableColor = Color.valueOf("78ffa5ff");
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(tanban, 2, Items.pyratite, 2, xiao, 2), 4),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhayao, 1)), 110.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(gutaiwanqin, 1, Items.blastCompound, 2), LiquidStack.with(jinglianlio, 2), 3),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhayao, 1)), 80.0,
        );
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(gutaiwanqin, 2, Items.blastCompound, 3), LiquidStack.with(yuanwan0, 6), 3),
            new CreatorsRecipe.OutputContents(ItemStack.with(zhayao, 3)), 80.0,
        );
        a.health = 480;
        a.size = 3;
        a.buildCostMultiplier = 0.3;
        a.itemCapacity = 10;
        a.liquidCapacity = 15;
        a.craftEffect = Fx.pulverizeMedium;
        //a.craftEffect = DrawS.zuanSmeltsmoke;
        a.updateEffect = Fx.lancerLaserCharge;
        a.requirements = ItemStack.with(
            Items.copper, 90,
            Items.lead, 80,
            Items.graphite, 65,
            weijing1, 45,
            guijingti, 80,
            zuanjing, 20,
        );
        a.group = BlockGroup.transportation
        a.buildVisibility = BuildVisibility.shown;
        a.ambientSound = Sounds.machine;
        a.category = Category.crafting;
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
        a.consumeLiquid(liziye, 0.05);
        a.consumePower(8.5);
        a.consumeItems(new ItemStack.with(
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
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.slag), new DrawDefault(),)
        a.itemCapacity = 10;
        a.liquidCapacity = 100;
        a.craftTime = 35;
        a.consumePower(2);
        a.consumeItems(new ItemStack.with(
            Items.scrap, 4,
        ));
        a.outputLiquid = LiquidStack(
            Liquids.slag, 36 / 60
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
exports.zhisuanji =//制酸机
    (() => {
        const a = new CreatorsNoChooseMulti("zhisuanji", 1);
        a.TableColor = Color.white;
        a.addRecipe(
            new CreatorsRecipe.InputContents(
                ItemStack.with(xiao, 2),
                LiquidStack.with(zhiwujingyou, 6, Liquids.water, 6), 1),
            new CreatorsRecipe.OutputContents(LiquidStack.with(suan, 12,)), 60.0,
        );
        /* 
                a.consumeLiquid(zhiwujingyou, 6 / 60);
                a.consumePower(1);
                a.consumeItems(new ItemStack.with(
                    xiao, 2,
                ));
                a.outputLiquid = new LiquidStack(
                    suan, 6 / 60,
                ); 
        */
        // a.attribute = At.suand;
        // a.baseEfficiency = 0.5
        a.requirements = ItemStack.with(
            Items.lead, 50,
            Items.copper, 30,
            Items.surgeAlloy, 35,
            guijingti, 45,
            jin, 20,
            hejinboli, 15,
            jingliantai, 40,
        );
        a.health = 480;
        a.liquidCapacity = 48;
        a.size = 4;
        a.updateEffect = Fx.smoke;
        a.category = Category.crafting;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(suan), new DrawDefault());
        a.buildVisibility = BuildVisibility.shown;
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
exports.lengdongyehunheji =
    (() => {
        const a = extend(GenericCrafter, "lengdongyehunheji", {});
        a.alwaysUnlocked = false;
        a.buildCostMultiplier = 0.7;
        a.health = 420;
        a.liquidCapacity = 90;
        a.hasLiquids = true;
        a.solid = true;
        a.outputsLiquid = true;
        a.size = 3;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 55;
        a.outputLiquid = new LiquidStack(
            Liquids.cryofluid, 100 / 60,
        );
        a.consumeLiquid(Liquids.water, 1);
        a.consumePower(4.5);
        a.consumeItems(new ItemStack.with(
            Items.titanium, 3,
            buding, 1,
        ));
        a.requirements = ItemStack.with(
            Items.metaglass, 35,
            weijing1, 15,
            Items.titanium, 65,
            guijingti, 72,
            molizhi, 12
        );
        a.category = Category.crafting;
        a.buildVisibility = BuildVisibility.shown;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.water), new DrawDefault())
        a.group = BlockGroup.liquids
        return a;
    })()
//-----------------------------------------------------------
exports.moliyehunheji =
    (() => {
        const a = extend(GenericCrafter, "moliyehunheji", {});
        a.outputLiquid = new LiquidStack(
            moliye, 60 / 60,
        );
        a.consumeLiquid(Liquids.cryofluid, 60 / 60);
        a.consumePower(2.5);
        a.consumeItems(new ItemStack.with(
            molishi, 1,

        ));
        a.requirements = ItemStack.with(
            Items.metaglass, 130,
            zuanjing, 150,
            monengjing, 130,
            guijingti, 420,
        );
        a.health = 680;
        a.liquidCapacity = 90;
        a.size = 2;
        a.solid = true;
        a.outputsLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 58;
        a.updateEffect = Fx.smoke;
        a.category = Category.crafting;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(moliye), new DrawDefault())
        a.group = BlockGroup.liquids
        a.buildVisibility = BuildVisibility.shown;
        return a;
    })()
//-----------------------------------------------------------
exports.molijinghuatilianji =
    (() => {
        const a = extend(GenericCrafter, "molijinghuatilianji", {});
        a.buildCostMultiplier = 1;
        a.health = 850;
        a.itemCapacity = 10;

        a.outputLiquid = new LiquidStack(
            molijinghuaye, 15 / 60,
        );
        a.consumeLiquid(zhiwujinghuaye, 15 / 60);
        a.consumePower(3);
        a.consumeItems(new ItemStack.with(
            monengjing1, 1,
            buding, 4,
        ));
        a.requirements = ItemStack.with(
            hejinboli, 130,
            zuanjing, 150,
            monengjing, 130,
            guijingti, 420,
        );
        a.size = 2;
        a.liquidCapacity = 50;
        a.hasLiquids = true;
        a.outputsLiquid = true;
        a.solid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 120;
        a.updateEffect = Fx.smoke;
        a.category = Category.crafting;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.water), new DrawDefault())
        a.group = BlockGroup.liquids;
        a.buildVisibility = BuildVisibility.shown;
        return a;
    })()


const At = require('Attribute');
/*exports.molijinghuatilianji2 =//魔力精华液T2
    (() => {
        const a = extend(Fracker, "molijinghuatilianji2", {});
        a.attribute = At.moliyeD;
        a.health = 600;
        a.size = 2;
        a.buildCostMultiplier = 0.5;
        a.updateEffect = Fx.pulverize;
        a.updateEffectChance = 0.05;
        a.pumpAmount = 0.01;
        a.result = molijinghuaye;
        a.rotateSpeed = 6;//输出物的产量
        a.baseEfficiency = 0
        a.coolEffect = Fx.steam;
        a.warmupSpeed = 0.21;
        a.itemUseTime = 60;
        a.liquidCapacity = 3;
        a.consumePower(4.3);
        //a.consumeLiquid();
        a.consumeItems(new ItemStack.with(
            buding,3,
        ));
        a.requirements = ItemStack.with(
            monengjing2,15,
            hejinboli,130,
            weijing2, 50,
            guijingti, 225,
            buding,800,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();*/

 var breakProp2= new Effect(23, e => {
        let scl2 = Math.max(e.rotation, 1);
       // Draw.color(Tmp.c1.set(e.color).mul(1.1));
        Draw.color(Color.valueOf("a06cff"));
        Draw.z(Layer.debris);//特效在底部
        Angles.randLenVectors(e.id, 6, 19 * e.finpow() * scl2, (x, y) => {
             Fill.circle(e.x + x, e.y + y, e.fout() * 3.5 * scl2 + 0.3);
         });
     });


    exports.molijinghuatilianji2 =//魔力精华液T2
    (() => {
        const a = extend(AttributeCrafter, "molijinghuatilianji2", {});
        a.attribute = At.moliyeD;
        a.health = 600;
        a.size = 2;
        // a.updateEffect = Fx.breakProp;
        // a.updateEffectChance = 0.05;

        a.updateEffect = breakProp2
        a.updateEffectChance = 0.3;
        a.boostScale = 0.0625*16;
        a.craftEffect = Fx.smeltsmoke;
        a.craftTime = 120;
        a.hasPower = true;
        a.hasLiquids = true;
        a.itemCapacity = 30;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(molijinghuaye), new DrawDefault())
        a.consumeLiquid(moliye, 12 / 60);
        a.outputLiquid = new LiquidStack(
            molijinghuaye, 0.5 / 60,
        );
        a.liquidCapacity = 3;
        a.consumePower(4.3);
        a.consumeItems(new ItemStack.with(
            buding,1,
        ));
        a.requirements = ItemStack.with(
            monengjing2,15,
            hejinboli,130,
            weijing2, 50,
            guijingti, 225,
            buding,800,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        return a;
    })();



//-----------------------------------------------------------
exports.liziyeji =
    (() => {
        const a = extend(GenericCrafter, "liziyeji", {});
        a.outputLiquid = new LiquidStack(
            liziye, 12 / 60,
        );
        a.consumeLiquid(Liquids.slag, 48 / 60);
        a.consumePower(7);
        a.consumeItems(new ItemStack.with(
            Items.blastCompound, 3,
            gutaiwanqin, 4,
            monengjing1, 5,
        ));
        a.requirements = ItemStack.with(
            hejinboli, 160,
            zuanjing, 220,
            weijing3, 20,
            weijing2, 60,
            jingliantai, 350,
            Items.metaglass, 180,
        );
        a.health = 880;
        a.buildCostMultiplier = 0.4;
        a.itemCapacity = 20;
        a.liquidCapacity = 50;
        a.size = 3;
        a.solid = true;
        a.outputsLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 90;


        a.category = Category.crafting;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(liziye), new DrawDefault())
        a.group = BlockGroup.liquids;
        a.buildVisibility = BuildVisibility.shown;
        return a;
    })()
//-----------------------------------------------------------
exports.yuanwanjinghuaji =
    (() => {
        const a = extend(GenericCrafter, "yuanwanjinghuaji", {});
        a.health = 950;//沅烷净化机
        a.size = 3;
        a.itemCapacity = 250;
        a.liquidCapacity = 200;
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.craftTime = 60*60*2;//2分钟
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(yuanwan0), new DrawDefault(),);
        a.updateEffect = Fx.steam;
        a.consumeLiquid(yuanwan0, 1.5);
        a.consumePower(13.5);
        a.consumeItems(new ItemStack.with(
            monengjing1, 50,
            guijingti, 120,
        )
        );
        a.outputLiquid = new LiquidStack(
            liziye, 18 / 60,
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
            canPlaceOn(tile, team, rotation) {
                if (!CuangWei.canBuild(team)) {
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
                    if (this.added) CuangWei.removeBuild(this.team);
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
        a.craftTime = 3 * 60 * 60 * 60;//3小时
        a.updateEffect = Fx.lightningCharge;
        a.updateEffectChance = 0.2;
        a.consumePower(5.333343);
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
exports.qiangxiaolengqueyehunheji =//液氮机
    (() => {
        const a = extend(GenericCrafter, "qiangxiaolengqueyehunheji", {});
        a.consumePower(11);
        a.consumeLiquid(liziye, 15 / 60);
        a.consumeItems(new ItemStack.with(
            buding, 20,
            taihejin, 3,
            weijing2, 4,
            juhebaozhawu, 3,
        ));
        a.updateEffect = Fx.breakProp;
        a.updateEffectChance = 0.3;
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(qiangxiaolengqueye), new DrawDefault())
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
        a.consumePower(33333.333995);
        a.consumeItem(
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
            jinhuiboli, 2300,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        a.group = BlockGroup.transportation
        return a;
    })()




exports.chanpianji =
    (() => {
        const a = extend(GenericCrafter, "chanpianji", {});
        a.health = 9000; //残片合成
        a.size = 3;
        //  a.canOverdrive = false;
        a.hasPower = true;
        a.hasItems = true;;
        a.buildCostMultiplier = 0.5;
        a.itemCapacity = 50;
        a.craftTime = 36000;
        a.updateEffect = Fx.steam;
        a.updateEffectChance = 0.5;
        a.consumePower(1000000 / 60);
        a.consumeItem(
            chuangshizhixing, 50,
        );
        a.outputItem = new ItemStack(
            yuanshencanpian, 1,
        );
        a.requirements = ItemStack.with(
            chuangshizhixing, 1,
            zuanjing, 6000000,
            monengjing3, 500,
            jinhuiboli, 150000,
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
        a.health = 9200; //创星解析仪
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
        a.consumePower(5000);
        a.consumeItems(new ItemStack.with(
            chuangshizhixing, 1, weijing5, 30));
        a.outputItem = new ItemStack(
            chuangshiweichen, 13,
        );
        a.requirements = ItemStack.with(
            chuangshiweichen, 1,
            monengjing3, 5,
            chuangshilizi, 6,
            weijing5, 10,
            jinhuiboli, 1500,
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
        a.health = 8700; //创世域界
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
        a.consumePower(2000);
        a.consumeItems(new ItemStack.with(
            chuangshilizi, 10, chuangshiweichen, 4));
        a.outputItem = new ItemStack(
            chuangshizhixing, 1,
        );
        a.requirements = ItemStack.with(
            chuangshiweichen, 2,
            monengjing2, 15,
            zuanjing, 60,
            weijing5, 2,
            jinhuiboli, 2800,
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
        a.consumePower(7);
        a.consumeLiquid(moliye, 0.01);
        a.consumeItems(new ItemStack.with(
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
            //canBreak(tile) { return false; },//不可拆   //创世神棺材
            canPlaceOn(tile, team, rotation) {
                if (!CuangShen.canBuild(team)) {
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
        a.health = 13000;
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
        a.consumeItems(new ItemStack.with(
            chuangshizhixing, 50, yuanshencanpian, 10, mieshishenhun, 1)
        );
        a.outputItem = new ItemStack(
            chuangshishenhun, 1,
        );
        a.requirements = ItemStack.with(
            chuangshizhixing, 10,
            monengjing3, 15,
            weijing5, 2,
            jinhuiboli, 10000,
            yuanshencanpian, 3,
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
          icons(){
                return [Core.atlas.find("creators-CTsource-bottom"),Core.atlas.find("creators-CTsource-bottom"), this.region];
            },
            drawPlanConfig(plan, list) {
                this.drawPlanConfigCenter(plan, plan.config, "creators-center2", true);
            },

            setStats() {
                this.super$setStats();
                this.stats.remove(Stat.buildTime);
            },

            canBreak(tile) { return false; },//不可拆   ///创世神 物品源
            canPlaceOn(tile, team, rotation) {
                if (!CuangGuan.canBuild(team)) {
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
                //heal(amount){},//不可被治疗 被修理
                dump(item) {
                    var count = 36;
                    this.items.set(item, count);
                    while (count > 0 && this.super$dump(item)) {
                        count--;
                    }
                },
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
/*                 draw() {
                    this.super$draw();
                    if (this.outputItem == null) {
                        Draw.rect("creators-cross2-full", this.x, this.y);
                    } else {
                        Draw.color(this.outputItem.color);
                        Fill.square(this.x, this.y, this.tilesize / 2);
                        Draw.color();
                    };
                },
                  */
             draw(){
                this.super$draw();
    
                if(this.outputItem == null){
                    Draw.rect("creators-cross2-full", this.x, this.y);
                }else{
                    Draw.color(this.outputItem.color);
                    Draw.rect("center", this.x, this.y);
                    Draw.color();
                }
                }
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
    v.launchTime = 15 * 60;
    v.buildCostMultiplier = 5;
    //v.canOverdrive = false;
    v.itemCapacity = 70;
    v.alwaysUnlocked = false;
    v.consumePower(120 / 60);
    v.requirements = ItemStack.with(
        Items.copper, 350,
        shimoxi, 140,
        Items.lead, 200,
        Items.titanium, 150,
        guijingti, 70,
    );
    v.category = Category.effect;
    v.buildVisibility = BuildVisibility.campaignOnly;
    v.group = BlockGroup.transportation
    return v;
})();


exports.fashetai = (() => {
    const v = extend(LaunchPad, "fashetai", {
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
    });//微晶大发射台
    v.size = 5;
    v.hasPower = true;
    v.health = 2200;
    v.launchTime = 30 * 60;
    v.buildCostMultiplier = 5;
    //v.canOverdrive = false;
    v.itemCapacity = 420;
    v.alwaysUnlocked = false;
    v.consumePower(650 / 60);
    v.requirements = ItemStack.with(
        shimoxi, 330,
        weijing2, 80,
        guijingti, 150,
        jingliantai, 50,
        Items.metaglass, 50,
    );
    v.category = Category.effect;
    v.buildVisibility = BuildVisibility.campaignOnly;
    v.group = BlockGroup.transportation
    return v;
})();

//----------------------------------------------------------- 

const achievement = extend(Floor, "achievement", {});
achievement.localizedName = "密神成就"
achievement.alwaysUnlocked = false
achievement.buildVisibility = BuildVisibility.hidden;
exports.achievement = achievement
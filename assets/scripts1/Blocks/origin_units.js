


const lib = require('lib')
const dsGlobal = require('BlocksLibes/qianzhi');
const DrawS = require('BlocksLibes/DrawS');
//const { MultiCrafter1 } = require("XuanZeV7");
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun, mieshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, dabaocobo, cobo,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
     molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, canza, hejinboli, xudianchi,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, jinhuiboli,

    matrix3, matrix4, matrix5, matrix6,
} = CTItem
const { T6rishi, T6sixing, T6tianxie, T6wangzuo, } = require('units/T6');
const { oct2 } = require('units/oct2');
const { ax1, ax2, ax3, ax4, ax5, ax6, yunshu } = require('units/kuangji');
const { zisha } = require('units/zisha');
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
exports.origin_unitsT3 =
    (() => {
        const a = new UnitFactory("t3");
        //a.buildVisibility = BuildVisibility.sandboxOnly;//仅沙盒hidden;//隐藏
        a.consumeLiquid(cobo, 0.4);
        a.consumePower(4);
        let T3time = 4 * 60;
        a.plans = Seq.with(
            new UnitFactory.UnitPlan(
                CTUnitTypes.fortress, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.quasar, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.spiroct, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.zenith, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.mega, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.bryde, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.cyerce, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
            new UnitFactory.UnitPlan(
                ax3, T3time,
                ItemStack.with(
                    matrix3, 1
                )),
        );
        a.requirements = ItemStack.with(
            Items.titanium, 120,
            Items.metaglass, 50,
            guijingti, 40,
            matrix3, 1,
        );
        a.size = 5;
        a.liquidCapacity = 100;
        a.canOverdrive = false;//不可超速 禁止超速
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.units;
        return a;
    })();
exports.origin_unitsT4 =
    (() => {
        const a = new UnitFactory("t4");
        a.consumeLiquid(cobo, 1.2);
        a.consumePower(9);
        let T4time = 720;
        a.plans = Seq.with(
            new UnitFactory.UnitPlan(
                CTUnitTypes.scepter, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.vela, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.arkyid, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.antumbra, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.quad, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.sei, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.aegires, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
            new UnitFactory.UnitPlan(
                ax4, T4time,
                ItemStack.with(
                    matrix4, 1
                )),
        );
        a.requirements = ItemStack.with(
            Items.plastanium, 500,
            Items.surgeAlloy, 500,
            Items.phaseFabric, 350,
            jin, 130,
            guijingti, 500,
            matrix4, 1,
        );
        a.size = 7;
        a.liquidCapacity = 100;
        a.canOverdrive = false;//不可超速 禁止超速
        a.buildVisibility = BuildVisibility.shown; a.category = Category.units;
        return a;
    })();
exports.origin_unitsT5 =
    (() => {
        const a = new UnitFactory("t5");
        a.consumeLiquid(cobo, 2).booster = false;
        a.consumePower(17);
        a.requirements = ItemStack.with(
            Items.lead, 4500,
            Items.plastanium, 600,
            Items.surgeAlloy, 800,
            Items.phaseFabric, 600,
            jin, 210,
            jingliantai, 550,
            guijingti, 1000,
            matrix5, 1,
        );
        let T5time = 1080;
        a.plans = Seq.with(
            new UnitFactory.UnitPlan(
                CTUnitTypes.reign, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.corvus, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.toxopid, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.eclipse, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.oct, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.omura, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                CTUnitTypes.navanax, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
            new UnitFactory.UnitPlan(
                ax5, T5time,
                ItemStack.with(
                    matrix5, 1
                )),
        );
        a.size = 9;
        a.liquidCapacity = 100;
        a.canOverdrive = false;//不可超速 禁止超速
        a.buildVisibility = BuildVisibility.shown; a.category = Category.units;
        return a;
    })();
exports.origin_unitsT6 =
    (() => {
        const a = new UnitFactory("t6");
        a.consumeLiquid(cobo, 3);
        a.consumePower(300);
        a.requirements = ItemStack.with(
            Items.copper, 5000,
            Items.lead, 5000,
            Items.plastanium, 1200,
            Items.phaseFabric, 600,
            Items.surgeAlloy, 800,
            guijingti, 2800,
            jin, 3000,
            shimoxi, 1800,
            monengjing2, 12,
            weijing2, 1000,
            matrix6, 1
        );
        let T6time = 1800;
        a.plans = Seq.with(
            new UnitFactory.UnitPlan(
                T6wangzuo, T6time,
                ItemStack.with(
                    matrix6, 1
                )),
            new UnitFactory.UnitPlan(
                T6rishi, T6time,
                ItemStack.with(
                    matrix6, 1
                )),
            new UnitFactory.UnitPlan(
                T6tianxie, T6time,
                ItemStack.with(
                    matrix6, 1
                )),
            new UnitFactory.UnitPlan(
                T6sixing, T6time,
                ItemStack.with(
                    matrix6, 1
                )),
            new UnitFactory.UnitPlan(
                oct2, T6time,
                ItemStack.with(
                    matrix6, 1
                )),
            new UnitFactory.UnitPlan(
                ax6, T6time,
                ItemStack.with(
                    matrix6, 1
                )),
        );
        a.size = 11;
        a.liquidCapacity = 100;
        a.canOverdrive = false;//不可超速 禁止超速
        a.buildVisibility = BuildVisibility.shown; a.category = Category.units;
        return a;
    })();




exports.origin_unitsBB =
    (() => {
        const a = new GenericCrafter("coboConverter");
        a.drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(cobo), new DrawDefault())
        a.buildVisibility = BuildVisibility.shown;
        a.consumeLiquid(suan, 12 / 60);
        a.consumePower(3);
        a.consumeItems(new ItemStack.with(
            weijing1, 1,
            Items.surgeAlloy, 3,
        ));
        a.outputLiquid = new LiquidStack(
            cobo, 12 / 60,
        );
        a.requirements = ItemStack.with(
            Items.copper, 45,
            Items.lead, 60,
            hejinboli, 35,
            jingliantai, 40,
            guijingti, 80,
        );
        a.category = Category.crafting;
        return a;
    })();
exports.origin_unitsCC =
    (() => {
        const a = new CreatorsMultiCrafter("sequenceSynthesisR", 4);
        a.TableColor = Color.valueOf("78ffa5");
        a.buildVisibility = BuildVisibility.shown;
        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(
                Items.metaglass, 50,
                Items.silicon, 180,
                Items.titanium, 110,
            ), 6),
            new CreatorsRecipe.OutputContents(ItemStack.with(matrix3, 1)), 3600, );

        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(
                Items.plastanium, 975,
                Items.silicon, 1275,
                Items.titanium, 1125,
            ), LiquidStack.with(Liquids.cryofluid, 90), 19.5),
            new CreatorsRecipe.OutputContents(ItemStack.with(matrix4, 1)), 8640, );

        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(
                weijing2, 32,
                guijingti, 1800,
                jin, 320,
                jingliantai, 700,
                hejinboli, 600,
                Items.plastanium, 975,
                Items.surgeAlloy, 975,
                Items.phaseFabric, 975,
            ), LiquidStack.with(molijinghuaye, 45), 370),
            new CreatorsRecipe.OutputContents(ItemStack.with(matrix5, 1)), 18000, );

        a.addRecipe(
            new CreatorsRecipe.InputContents(ItemStack.with(
                weijing2, 1500,
                weijing3, 100,
                guijingti, 1800,
                jin, 3000,
                jingliantai, 2500,
                monengjing1, 1000,
            ), LiquidStack.with(qiangxiaolengqueye, 9), 200000 / 60),
            new CreatorsRecipe.OutputContents(ItemStack.with(matrix6, 1)), 21600, );//6分钟
        Object.assign(a, {
            health: 6700,
            size: 11,
            buildCostMultiplier: 0.3,
            //alwaysUnlocked: true,
            canOverdrive: false,
            //   noParallelAffect: false,//false,
            itemCapacity: 3000,
            liquidCapacity: 100,
            updateEffectChance: 1.05,
            updateEffect: Fx.steam,
            ambientSound: Sounds.machine,
            ambientSoundVolume: 0.1,
            craftEffect: Fx.steam,
        });
        a.requirements = ItemStack.with(
            Items.copper, 32000,
            Items.lead, 4500,
            weijing2, 120,
            jin, 450,
            zuanjing, 300,
            jingliantai, 600,
            guijingti, 800,
            monengjing1, 200,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.crafting;
        //---------------------------------
        return a;
    })();


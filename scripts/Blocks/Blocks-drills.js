const {
    //白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    invalid, dabaosuan, molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou,dabaozhiwujingyou,
    dabaoJHLiquid,dabaojinglianlio,dabaomoli, dabaozhiwu, dabaojingmoli, 
    dabaoyedan,zhiwujingyou,jinglianlio,hejinboli,
    JHhejinLiquid,JHhejin,gutaiwanqin,taihejin,
} = require('wupin');
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
        a.consumes.power(6);
        a.consumes.liquid(Liquids.cryofluid, 0.05), true;
        a.requirements = ItemStack.with(
            Items.copper, 265,
            Items.lead, 265,
            weijing1, 5,
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
        a.consumes.power(20);
        a.consumes.liquid(molijinghuaye, 0.033333333);
        a.requirements = ItemStack.with(
            Items.copper, 265,
            Items.lead, 265,
            weijing2, 5,
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
        const a = extend(Drill, "junengzuantou", {}); //聚能钻头
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
        a.consumes.power(8.33333);
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
exports.zuantou =
    (() => {
        const a = extend(Drill, "zuantou", {}); //4级微晶-微晶钻头-强化钻头
        a.health = 1800;
        a.size = 1;
        a.buildCostMultiplier = 20;
        a.tier = 50;
        a.drillTime = 4000;
        a.liquidBoostIntensity = 2.5;
        a.hardnessDrillMultiplier = 0;
        a.warmupSpeed = 0.01;
        a.drawMineItem = false;
        //a.drillEffect = Fx.lightningCharge;
        a.rotateSpeed = 6;
        a.updateEffectChance = 0.2;
        a.updateEffect = Fx.lightningCharge;
        a.drawRim = true;
        a.consumes.power(16.66667);
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
exports.weijingzuantou3 =
    (() => {
        const a = extend(Drill, "3weijingzuantou", {}); //超级微晶钻头
        a.health = 1200;
        a.size = 3;
        a.tier = 11;
        a.hardnessDrillMultiplier = 2.5;
        a.updateEffectChance = 0.015;
        a.rotateSpeed = 10;
        a.drillTime = 50;
        a.liquidCapacity = 15;
        a.drillEffect = Fx.hitBulletSmall;
        a.hasShadow = true;
        a.drawMineItem = true;
        a.consumes.power(50);
        a.consumes.liquid(qiangxiaolengqueye, 0.025),
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
//-----------------------------------------------------------
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
        a.consumes.power(7);
        a.consumes.liquid(Liquids.water, 15 / 60);
        a.consumes.item(Items.sand, 3);
        a.requirements = ItemStack.with(
            Items.copper, 180,
            Items.lead, 250,
            jingliantai, 250,
            guijingti, 150,
            weijing2, 2,
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
        a.consumes.power(0.4);
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
        a.consumes.power(2.5);
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
        a.consumes.power(3.5);
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
        a.consumes.power(5.6);
        a.requirements = ItemStack.with(
            Items.lead, 300,
            Items.graphite, 100,
            Items.titanium, 160,
            weijing2, 2,
            buding, 500
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.production;
        return a;
    })();

































































const lib = require('lib')
const dsGlobal =require('BlocksLibes/qianzhi');
const DrawS = require('BlocksLibes/DrawS');
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
exports.weicang = //微仓
    (() => {
        const a = extend(StorageBlock, "weicang", {});
        a.size = 1;
        a.health = 400; 
        a.itemCapacity = 100;
        a.hasItems = true;
        a.buildCostMultiplier = 0.3;
        a.requirements = ItemStack.with(
            Items.copper, 80,
            Items.lead, 150,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();

//-----------------------------------------------------------
exports.jicangku3 = //3级仓库
    (() => {
        const a = extend(StorageBlock, "3jicangku", {});
        a.size = 4;
        a.health = 800;
        a.itemCapacity = 3200;
        a.hasItems = true;
        a.buildCostMultiplier = 0.1;
        a.requirements = ItemStack.with(
            Items.titanium, 280,
            Items.thorium, 230,
            Items.surgeAlloy, 75,
            shiying, 450,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
exports.jicangku4 = //4级仓库
    (() => {
        const a = extend(StorageBlock, "4jicangku", {});
        a.size = 5;
        a.health = 1500;
        a.itemCapacity = 8000;
        a.hasItems = true;
        a.buildCostMultiplier = 0.1;
        a.requirements = ItemStack.with(
            Items.titanium, 920,
            Items.graphite, 830,
            weijing1, 20,
            guijingti, 640,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
exports.jicangku5 =
    (() => {
        const a = extend(StorageBlock, "5jicangku", {}); //5级仓库
        a.size = 6;
        a.health = 2800;
        a.itemCapacity = 20000;
        a.hasItems = true;
        a.buildCostMultiplier = 0.1;
        a.requirements = ItemStack.with(
            buding, 3240,
            zuanjing, 65,
            weijing2, 20,
            guijingti, 730,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
exports.jicangku6 =
    (() => {
        const a = extend(StorageBlock, "6jicangku", {}); //6级仓库
        a.size = 3;
        a.health = 4600;
        a.itemCapacity = 50000;
        a.hasItems = true;
        a.buildCostMultiplier = 0.3;
        a.requirements = ItemStack.with(
            molishi, 350,
            zuanjing, 120,
            weijing3, 5,
            guijingti, 850,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();

//-----------------------------------------------------------
exports.huanchongcang =
    (() => {
        const a = extend(StorageBlock, "huanchongcang", {}); //缓冲仓
        a.size = 8;
        a.health = 1200;
        a.itemCapacity = 500;
        a.hasItems = true;
        a.buildCostMultiplier = 0.3;
        a.requirements = ItemStack.with(
            Items.copper, 750,
            Items.lead, 700,
            Items.titanium, 480,
            Items.titanium, 330,
            shiying, 650,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
//传输

exports.csdq0 =
    (() => {
        const a = extend(ItemBridge, "csqd0", {}); //短桥
        a.health = 90;
        a.range = 6;
        //a.hasLiquids = true;
        a.itemCapacity = 15;
        a.hasPower = false;
        a.requirements = ItemStack.with(
            Items.lead, 20,
            Items.graphite, 10,
            Items.titanium, 15,
            guijingti, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();

//-----------------------------------------------------------
exports.conveyor10 =
    (() => {
        const a = extend(ArmoredConveyor, "0-conveyor1", {}); //减速装甲传输带
        a.health = 80;
        a.displayedSpeed = 1.5;
        a.speed = 0.01;
        a.canOverdrive = false;
        a.requirements = ItemStack.with(
            Items.copper, 1,
            Items.plastanium, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        //a.details = "[yellow]MAX:1.5/s It cannot be accelerated"
        return a;
    })();

//-----------------------------------------------------------
exports.conveyor11 =
    (() => {
        const a = extend(Conveyor, "1-conveyor", {}); //3级传输带
        a.health = 220;
        a.displayedSpeed = 30;
        a.speed = 0.3;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            jingliantai, 1,
            jin, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();

//a.details = "[yellow]MAX:30/s"

//-----------------------------------------------------------
exports.conveyor12 =
    (() => {
        const a = extend(ArmoredConveyor, "1-conveyor1", {}); //3级装甲传输带
        a.health = 220;
        a.displayedSpeed = 30;
        a.speed = 0.3;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            Items.thorium, 1,
            jingliantai, 1,
            jin, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();

//a.details = "[yellow]MAX:30/s"

//-----------------------------------------------------------
exports.conveyor2 =
    (() => {
        const a = extend(Conveyor, "2-conveyor", {}); //4级传输带
        a.health = 350;
        a.speed = 0.8;
        a.displayedSpeed = 70;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            jingliantai, 1,
            jin, 1,
            weijing1, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//a.details = "[yellow]MAX:80/s"
//-----------------------------------------------------------
exports.conveyor21 =
    (() => {
        const a = extend(ArmoredConveyor, "2-conveyor1", {}); //4级装甲传输带
        a.health = 350;
        a.speed = 0.8;
        a.displayedSpeed = 70;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            Items.thorium, 1,
            jingliantai, 1,
            jin, 1,
            weijing1, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//a.details = "[yellow]MAX:80/s"
//-----------------------------------------------------------
exports.luyouqi2 =
    (() => {
        const a = extend(Router, "luyouqi2", {}); //路由器2
        a.consumesPower = true;
        a.outputsPower = true;
        a.hasPower = true;
        a.consumes.power(0);
        a.health = 100;
        a.speed = 2.0;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 5,
            jin, 3,
            weijing1, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//-----------------------------------------------------------

exports.lianjieqi2 =
    (() => {
        const a = extend(Junction, "lianjieqi2", {}); //连接器2
        a.consumesPower = true;
        a.outputsPower = true;
        a.hasPower = true;
        a.consumes.power(0);
        a.capacity = 3;
        a.health = 120;
        a.speed = 1.0;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 5,
            jingliantai, 3,
            weijing1, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//-----------------------------------------------------------
exports.conveyor3 =
    (() => {
        const a = extend(Conveyor, "3-conveyor", {isHidden() { return !dsGlobal.H1(); },}); //5级传输带
        a.consumesPower = true;
        a.outputsPower = true;
        a.hasPower = true;
        a.displayedSpeed = 240;
        a.consumes.power(2/60);

        a.health = 500;
        a.speed = 2.0;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            jingliantai, 1,
            jin, 1,
            weijing2, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//a.details = "[yellow]MAX:240/s"
//-----------------------------------------------------------
exports.conveyor31 =
    (() => {
        const a = extend(ArmoredConveyor, "3-conveyor1", {isHidden() { return !dsGlobal.H1(); },}); //5级装甲传输带
        a.consumesPower = true;
        a.outputsPower = true;
        a.hasPower = true;
        a.consumes.power(2/60);
        a.health = 500;
        a.speed = 2.0;
        a.displayedSpeed = 240;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            Items.thorium, 1,
            jingliantai, 1,
            jin, 1,
            weijing2, 1,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//a.details = "[yellow]MAX:240/s"
//-----------------------------------------------------------
exports.jibaozhuangyunshudai2 =
    (() => {
        const a = extend(StackConveyor, "2jibaozhuangyunshudai", {});
        a.health = 150; //2级包装运输带
        a.speed = 0.3;
        a.itemCapacity = 20;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 1,
            Items.metaglass, 1,
            guijingti, 3,
            zijing1, 1
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//-----------------------------------------------------------
require('BlocksLibes/luyouqi');//塑钢路由器
//------------------------------------------
exports.dabaodai =
(() => {
    const a = extend(StackConveyor, "dabaodai", {isHidden() { return !dsGlobal.H1(); },});
    a.health = 100; //打包传输带
    a.speed = 0.15;
    a.itemCapacity = 40;
    a.requirements = ItemStack.with(
        Items.surgeAlloy, 30,
        Items.metaglass, 50,
        guijingti, 50,
        weijing1, 20
    );
    a.buildVisibility = BuildVisibility.shown;
    a.category = Category.distribution;
    return a;
})();
//-----------------------------------------------------------
exports.jibaozhuangyunshudai3 =
    (() => {
        const a = extend(StackConveyor, "3jibaozhuangyunshudai", {isHidden() { return !dsGlobal.H1(); },});
        a.health = 300; //3级包装运输带
        a.buildCostMultiplier = 0.5;
        a.speed = 1.5;
        a.placeableLiquid = true;//可被放在深水之上
        a.itemCapacity = 10;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 30,
            weijing2, 1,
            guijingti, 75,
            zijing1, 5,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//-----------------------------------------------------------
exports.weixingzhiqu =
    (() => {
        const a = extend(MassDriver, "1weixingzhiqu", {}); //微型质驱
        a.bullet = new MassDriverBolt
        a.health = 100;
        a.size = 1;
        a.itemCapacity = 50;
        a.range = 200;
        a.translation = 10;
        //a.shootShake = 0
        a.minDistribute = 30; //最低发射量
        a.knockback = 2;
        a.reloadTime = 130;
        a.shake = 0;
        a.shootEffect = Fx.steam;
        a.shootSound = lib.loadSound("shootBigg");;
        a.smokeEffect = Fx.none;
        a.consumes.power(1);
        a.requirements = ItemStack.with(
            Items.lead, 80,
            Items.titanium, 35,
            Items.silicon, 10,
            jingliantai, 20,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//a.details = "[yellow]range:30"
//-----------------------------------------------------------
exports.zhiqu2 =
    (() => {
        const a = extend(MassDriver, "2jizhiqu", {}); //2级质驱
        a.bullet = new MassDriverBolt
        a.offloadSpeed = 30;
        a.health = 700;
        a.size = 4;
        a.itemCapacity = 350;
        a.range = 672;
        a.translation = 10;
        a.minDistribute = 75; //最低发射量
        a.knockback = 6;
        a.reloadTime = 50;
        a.shake = 10;
        a.shootEffect = Fx.shootBig2;
        a.consumes.power(4);
        a.requirements = ItemStack.with(
            Items.lead, 375,
            guijingti, 210,
            weijing1, 30,
            jin, 50,
            Items.thorium, 375,
            jingliantai, 375,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//a.details = "[yellow]range:84"
//-----------------------------------------------------------
exports.zhiqu3 =
    (() => {
        const a = extend(MassDriver, "3jizhiqu", {}); //3级质驱
        a.bullet = new MassDriverBolt
        a.offloadSpeed = 100;
        a.health = 2500;
        a.size = 5;
        a.itemCapacity = 1200;
        a.range = 2500;
        a.bulletLifetime = 1000 //子弹寿命
        a.minDistribute = 250; //最低发射量
        a.knockback = 8;
        a.reloadTime = 120;
        a.shake = 10;
        a.shootEffect = Fx.shootBig2;
        a.consumes.power(15);
        a.requirements = ItemStack.with(
            Items.lead, 575,
            Items.copper, 700,
            guijingti, 350,
            monengjing, 80,
            weijing2, 120,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//-----------------------------------------------------------
exports.conduit1 =
    (() => {
        const a = extend(Conduit, "1-conduit", {}); //锡导管
        a.health = 150;
        a.speed = 0.19;
        a.hasLiquids = true;
        a.liquidCapacity = 22;
        a.outputsLiquid = true;
        a.update = true;
        a.rotate = true;
        a.solid = false;
        a.floating = true;
        a.requirements = ItemStack.with(
            Items.surgeAlloy, 2,
            Items.metaglass, 3,
            Items.copper, 5,
            jingliantai, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
exports.conduit11 =
    (() => {
        const a = extend(ArmoredConduit, "1-conduit1", {}); //镀金锡导管
        a.health = 170;
        a.speed = 0.19;
        a.hasLiquids = true;
        a.liquidCapacity = 22;
        a.outputsLiquid = true;
        a.update = true;
        a.rotate = true;
        a.solid = false;
        a.floating = true;
        a.requirements = ItemStack.with(
            Items.thorium, 1,
            Items.surgeAlloy, 2,
            Items.metaglass, 3,
            Items.copper, 5,
            jingliantai, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
exports.conduit2 =
    (() => {
        const a = extend(Conduit, "2-conduit", {}); ////微晶导管
        a.health = 300;
        a.speed = 0.35;
        a.hasLiquids = true;
        a.liquidCapacity = 50;
        a.outputsLiquid = true;
        a.update = true;
        a.rotate = true;
        a.solid = false;
        a.floating = true;
        a.requirements = ItemStack.with(
            zuanjing, 2,
            Items.metaglass, 3,
            weijing1, 1,
            jin, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
exports.conduit21 =
    (() => {
        const a = extend(ArmoredConduit, "2-conduit1", {isHidden() { return !dsGlobal.H1(); },}); //镀金微晶导管
        a.health = 300;
        a.speed = 0.35;
        a.hasLiquids = true;
        a.liquidCapacity = 50;
        a.outputsLiquid = true;
        a.update = true;
        a.rotate = true;
        a.solid = false;
        a.floating = true;
        a.requirements = ItemStack.with(
            Items.thorium, 3,
            zuanjing, 2,
            Items.metaglass, 3,
            weijing1, 1,
            jin, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
exports.dongcibeng = //动磁泵
    (() => {
        const a = extend(Pump, "dongcibeng", {});
        a.size = 2;
        a.health = 600;
        a.liquidCapacity = 80;
        a.hasPower = true;
        a.consumes.power(3)
        a.placeableLiquid = true;
        a.pumpAmount = 18 / 60;
        a.requirements = ItemStack.with(
            Items.copper, 180,
            Items.lead, 120,
            jingliantai, 50,
            weijing2,25,
            hejinboli, 30,
            taihejin, 45,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
exports.csdq =
    (() => {
        const a = extend(ItemBridge, "csdq", { //桥
            updateTransport(tile, other) {
                for (var i = 0; i < 36; i++) {
                    this.super$updateTransport(tile, other);
                }
            }
        });
        a.health = 500;
        a.range = 50;
        a.transportTime = 1;
        //a.bufferCapacity = 20;
        //a.itemCapacity = 35;
        a.consumes.power(1.2)
        a.requirements = ItemStack.with(
            Items.silicon, 20,
            Items.surgeAlloy, 10,
            Items.phaseFabric, 2,
            weijing1, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.distribution;
        return a;
    })();
//-----------------------------------------------------------
exports.daoguanqiao0 =
    (() => {
        const a = extend(LiquidBridge, "daoguanqiao0", {}); //短导管桥
        a.health = 90;
        a.range = 6;
        //a.hasLiquids = true;
        a.liquidCapacity = 15;
        a.hasPower = false;
        a.requirements = ItemStack.with(
            Items.metaglass, 20,
            Items.graphite, 15,
            guijingti, 5,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
require('BlocksLibes/wanxiangqiao');
//-----------------------------------------------------------
exports.daoguanqiao =
    (() => {
        const a = extend(LiquidBridge, "daoguanqiao", {}); //长导管桥
        a.health = 500;
        a.range = 50;
        a.hasLiquids = true;
        a.liquidCapacity = 80;
        a.consumes.power(5);
        a.requirements = ItemStack.with(
            Items.metaglass, 50,
            Items.graphite, 40,
            Items.lead, 80,
            weijing1, 5,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        return a;
    })();
//-----------------------------------------------------------
exports.daxingchuyeguan =
    (() => {
        const a = extend(LiquidRouter, "daxingchuyeguan", {}); //大型储液罐
        a.health = 500;
        a.size = 4;
        a.placeableLiquid = true;//可被放在深水之上
        a.hasLiquids = true;
        a.liquidCapacity = 5500;
        a.requirements = ItemStack.with(
            Items.titanium, 135,
            Items.metaglass, 100,
            jingliantai, 80,
            guijingti, 180,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.liquid;
        a.floating = true
        return a;
    })();

//-----------------------------------------------------------
exports.jizhuangxieqi0 =
    (() => {
        const a = extend(Unloader, "d-0jizhuangxieqi", {});
        a.buildType = prov(() => {
            return new JavaAdapter(Unloader.UnloaderBuild, {
                draw() {
                    this.super$draw();
                    Draw.blend();
                    Draw.color();
                    Draw.rect(Core.atlas.find("creators-d-0jizhuangxieqi-1"), this.x, this.y, 90 - Time.time * 1);
                },
            }, a);
        });
        a.health = 100; //0级装卸器
        a.size = 1;
        a.speed = 15;
        a.buildCostMultiplier = 0.3;
        a.requirements = ItemStack.with(
            Items.copper, 10,
            Items.lead, 15,
            Items.graphite, 30,
            Items.silicon, 40,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
exports.jizhuangxieqi2 =
    (() => {
        const a = extend(Unloader, "d-2jizhuangxieqi", {});
        a.health = 120; //2级装卸器
        a.size = 1;
        a.speed = 2;
        a.buildCostMultiplier = 0.3;
        a.requirements = ItemStack.with(
            Items.graphite, 125,
            shiying, 175,
            guijingti, 80,
            zijing1, 5,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
exports.jizhuangxieqi3 =
    (() => {
        const a = extend(Unloader, "d-3jizhuangxieqi", {isHidden() { return !dsGlobal.H1(); },}); //在fanjiasu1里面
        a.health = 430; //3级装卸器
        a.size = 1;
        a.hasPower = true
        a.speed = 0.1;
        a.consumes.power(1.3);
        a.buildCostMultiplier = 0.5;
        a.requirements = ItemStack.with(
            zuanjing, 5,
            shiying, 200,
            guijingti, 180,
            weijing2, 2,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        return a;
    })();
//-----------------------------------------------------------
/*
 * @author guiY
 * @Extra mod <https://github.com/guiYMOUR/mindustry-Extra-Utilities-mod>
 */
const YT = require('BlocksLibes/yeti-unloader'); //液体装卸器
const yeti = YT.yeti;
exports.yetiUnloader = yeti;





































































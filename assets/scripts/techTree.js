
const lib = require('lib')
const { NaMeiXing } = require('xingqiu');//星球
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
    dabaoyedan, zhiwujingyou, jinglianlio, jinhuiboli, nulls, medal1, medal2,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, hejinboli,oreweijing4,
} = CTItem
const {
    oiljinglianchang, taihejinji, zuanshiyasuoji, jinhuiyasuoji, zhiwujingyoutilianji, zhiwujingyoutiquji, jinhuiyeji,
    xitilianji, zuankuangjiagongchang, meitantiliangongchang, zhiwudaosuiji, fensuiji, liuji,
    hejinboliji, jinhuiboliji,yanbaoji,
    shiyingronglu, guijingtichengxingji, guilu, guijingtihechengji, guijingtigongchang,
    shimoxiji, budingjiagongchang, budingjiagongchang2, jinfentilianji, jinchengxingji, jinchengxingji2,
    zijinggongchang, zijingronglianji, jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4,
    jiweijinggongchang5, weijingfenjieji, jiweijinggongchang21, liziduizhuangji,
    duochonbuji2, duochonbuji3, duochongsugangji, moliyeshoujiqi1, moliyeshoujiqi2, wenshiqi, zhisuanji,
    zhiwucuiqugongchang, zhiwucuiqugongchang2, feiliaoji, zhuanhuantai, zizhuanTu, tanbanyasuoji, zuanjingjiagongchang,
    tanbanyasuoji2, gaojipeiyangji, molishizhizaoqi, monengjingdamoji0, jimonengjinglianzhiqi1, jimonengjinglianzhiqi2,
    jimonengjinglianzhiqi3, jimonengjinglianzhiqi4, hejin2, luzhayasuoji, jitilianji3, jitilianji4, jitilianjimoliyetilianji,
    xiaofentilianji, zhayaozhizaoji, jhgtbzwj, qianghuaronglu, lengdongyehunheji, moliyehunheji, molijinghuatilianji,
    liziyeji, yuanwanjinghuaji, qiangxiaolengqueyehunheji, chuangshiji, chuangxingjiexiyi, chuangshiyujie, jinbigongcang, weichenshoujiqi,
    chuangshizhishen, choujiangji, wupinyuan, testC, testA, fashetai0, fashetai, achievement,weijingxilianji4,
} = require('Blocks/Blocks-factory');
const { lajixiang } = require('BlocksLibes/lajixiang')
const { xuwu } = require('BlocksLibes/xuwu');
const {
    weicang, jicangku3, jicangku4, jicangku5, jicangku6, jicangku7,huanchongcang, csdq0, conveyor10, luyouqi2, lianjieqi2,
    conveyor11, conveyor12, jibaozhuangyunshudai2, conveyor2, conveyor21, conveyor3, conveyor31, dongcibeng, jizhuangxieqi4,
    jibaozhuangyunshudai3, weixingzhiqu, zhiqu2, zhiqu3, conduit1, conduit11, conduit2, conduit21, dabaodai,
    csdq, daoguanqiao0, daoguanqiao, ctunitCargoLoader, ctUnitCargoUnloadPoint, daxingchuyeguan, jizhuangxieqi0, jizhuangxieqi2, jizhuangxieqi22, jizhuangxieqi3, jizhuangxieqi31, yetiUnloader
} = require('Blocks/Blocks-ChuanShu');
const { wanxiangqiao } = require('BlocksLibes/wanxiangqiao'); const { sugangcrouter } = require('BlocksLibes/luyouqi');//塑钢路由器
/************************************************************************ */
const {
    qian1, qian2, qian3, tong3, tai3, tu3, sugang3, hejin3, moli1, moli2, hunhe3, hunhe4, shenwei, qiang,
    jiasu3, jiasu4, jiasu5, jiasu6, chaojijiasuyi, deng, hudun2, hudun3, xiuli1, xiuli2, display, weixiudian,
    moweimen, xinxiban, invincible2, radar, jianzaota, jianzaota2, PowerWall1, PowerWall2, PowerWall3,
} = require('Blocks/Blocks-defense');
const { jiasu7 } = require('BlocksLibes/fanjiasu');
const { jiasu8 } = require('BlocksLibes/fanjiasu2');
const { zhiliaoyi } = require('BlocksLibes/zhiliaoyi');
const { jianshangyi } = require('BlocksLibes/jianshangyi');
const { geshangyi } = require('BlocksLibes/geshangyi');
/********************************************************************** */
const {
    yingzhizuantou, weijingzuantou1, weijingzuantou2, junengzuantou, zuantou, pobiji,
    weijingzuantou3, shiyou, sui, sui2, sui3, sui4, suanzhuanjing, junengzuantou2,
} = require('Blocks/Blocks-drills');
const {
    DianHu, DianHu2, FangKong, healere, JueWang, BuHuo, LanJie, lieguang, ZhengFu, ZhengYi, bawang, ronghui3, lanse2,
    ronghui2, youling2, ronghui4, zongjipao, zongjipao2, huasha, youling3, langyong2, bomb, Acker, yunyu, qishe2, kuoshan,
} = require('turrets/DC'); //require('wmod');//+++++++++++
const { PenHuo } = require('turrets/PenHuo');
const {
    dianxiangan, nengliangta, nengliangta2, jidianchi3, jitaiyangneng3, jitaiyangneng4, gaojidirefadianji,
    shuilifadianji, shiyoufadianji, yanjiangfadianji, gaoxiaowolunfadianji, molichongjifadianji, molizhifanyingdui,
    monengfanyingdui, juhechongji, jidianchi4, chongdianqi, fangdianqi, CP2Link, lichangjiedian, lichangjiedian2,
} = require('Blocks/Blocks-power');
const { jitaiyangneng5 } = require("Blocks/chaojitaiyangneng");
const { jiasuyi } = require('BlocksLibes/jiasuyi');
const { CT_core, CT_core2, CT_core3, CoreJiangLuo, WJcore, CT_core32,CoreJiangLuoT2, } = require('core');
const { unitGC1, unitGC2 } = require('units');//单位构造机

const { poly2, mega2 } = require('units/poly2');
const { ax1, ax2, ax3, ax4, ax5, ax6, yunshu } = require('units/kuangji');
const { oct2 } = require('units/oct2');
const { T6rishi, T6sixing, T6tianxie, T6wangzuo, } = require('units/T6');//单位
const {
    Maps173, Maps189, Maps111, Maps104, Maps83,
    Maps214, Maps76, Maps159, Maps163, Maps267,
    Maps230, Maps127, Maps234, Maps243, Maps199,
    Maps89, Maps26, Maps90, Maps235, Maps262, Maps61,
    Maps53, Maps288, Maps72, Maps260, Maps258, Maps62,
    Maps198, Maps196, Maps110, Maps193, Maps147, Maps45,
    Maps237, Maps155, Maps152, Maps52, Maps168, Maps27,
    Maps44, Maps23, Maps87, Maps64, Maps232, Maps225,
    groundZero
    , saltFlats
    , frozenForest
    , biomassFacility
    , craters
    , ruinousShores
    , windsweptIslands
    , stainedMountains
    , extractionOutpost
    , coastline
    , navalFortress
    , fungalPass
    , overgrowth
    , tarFields
    , impact0078
    , desolateRift
    , nuclearComplex
    , planetaryTerminal
} = require('techTree/maps');
const {
    origin_unitsT3,
    origin_unitsT4,
    origin_unitsT5,
    origin_unitsT6,
    origin_unitsBB,
    origin_unitsCC } = require('Blocks/origin_units');
/* //发射台修改：
Blocks.launchPad.alwaysUnlocked = true;
Blocks.launchPad.health = 450;
Blocks.launchPad.launchTime = 3000;
Blocks.launchPad.buildCostMultiplier = 2147483647;
Blocks.launchPad.canOverdrive = false;
Blocks.launchPad.itemCapacity = 1;
Blocks.launchPad.consumePower(0);
Blocks.launchPad.requirements = ItemStack.with();
Blocks.launchPad.category = Category.effect
*/

NaMeiXing.techTree = TechTree.nodeRoot(Core.bundle.format("creators.GThree"), CTBlocks.coreShard, true, run(() => {
    // const xingqiuTechTree=TechTree.nodeRoot()
    // xingqiuTechTree.name="实验科技树"
    // xingqiuTechTree.content=Blocks.coreShard;
    // xingqiuTechTree.requiresUnlock=true;
    // NaMeiXing.techTree = xingqiuTechTree

    require('techTree/mapTechTree');
    //========================================================






    lib.addToResearch(CoreJiangLuo, {//核心定位装置
        parent: CTBlocks.coreShard.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps104),//占领解锁
        ),
        // requirements: ItemStack.with(
        //     Items.copper, 150,
        // ),
    });
    lib.addToResearch(CoreJiangLuoT2, {//核心定位装置t2
        parent: CoreJiangLuo.name,
        requirements: ItemStack.with(
            Items.copper, 22000/4*200,
            Items.lead, 35000/4*200,
            Items.silicon, 5500/4*200,
            Items.titanium, 3200/4*200,
            Items.thorium, 2400/4*200,
           guijingti, 2500/4*200,
           monengjing3,20,
           JHhejin,24500/4*200,
           jinhuiboli,100/4*200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps87),//占领解锁奇异空间
        ),
    });
    // CTBlocks.overdriveDome.consumeItem(Items.phaseFabric, 2).boost();
    // //consumeItem(Items.phaseFabric).boost();


    CTBlocks.constructor.filter = Seq.with(
        weicang,
        CTBlocks.container,
        // CTBlocks.vault,
        // jicangku6,
        CTBlocks.liquidTank,
        // CTBlocks.liquidContainer,
    );
/*     CTBlocks.payloadLoader.maxBlockSize = 2;
    CTBlocks.payloadUnloader.maxBlockSize = 2;
    CTBlocks.payloadUnloader.consumePower(180 / 60); */

    /*
    //使方块无法被单位拾起，更改会导致毁存档
       CTBlocks.battery.buildType = () => extend(PowerNode.PowerNodeBuild, CTBlocks.battery, {
            canPickup() {
                return false;
            }
        });
        CTBlocks.batteryLarge.buildType = () => extend(PowerNode.PowerNodeBuild, CTBlocks.batteryLarge, {
            canPickup() {
                return false;
            }
        }); */
   // CTBlocks.largeConstructor.buildVisibility = BuildVisibility.sandboxOnly;//仅沙盒hidden;//隐藏
    Blocks.deepTaintedWater.attributes.set(Attribute.spores, 0.23);//原版的地板
    // Blocks.snowBoulder.variants = 4;//地形点缀物 雪块
    // Blocks.sandBoulder.variants = 3;//地形点缀物 沙块
    Blocks.coreShard.unitType = CTUnitTypes.alpha;
    Items.copper.alwaysUnlocked = false;//铜
    Items.lead.alwaysUnlocked = false;//铅
    Items.sand.alwaysUnlocked = false;//沙
    Liquids.water.alwaysUnlocked = false;//水
    Blocks.conveyor.alwaysUnlocked = false;//传送带
    CTBlocks.conveyor.alwaysUnlocked = false;//传送带
    Blocks.router.alwaysUnlocked = false;//路由器
    Blocks.junction.alwaysUnlocked = false;//连接器
    Blocks.mechanicalDrill.alwaysUnlocked = false;//铜钻头
    CTBlocks.mechanicalDrill.alwaysUnlocked = false;//铜钻头
    Blocks.duo.alwaysUnlocked = false;//双管跑
    //Blocks.coreBastion.alwaysUnlocked = false;
    Blocks.powerSource.laserRange = 20; //电力院
    Blocks.powerSource.maxNodes = 100;
    Blocks.powerSource.health = 100000;
    Blocks.itemSource.health = 100000;//物品源
    Blocks.liquidSource.health = 100000;//液体源
    CTBlocks.illuminator.buildVisibility = BuildVisibility.shown;//小照明
    CTBlocks.payloadVoid.requirements = ItemStack.with(//荷载黑洞
        weijing1, 30, Items.lead, 54,
        Items.copper, 54, Items.graphite, 125,
    ); CTBlocks.payloadVoid.buildVisibility = BuildVisibility.shown;

    Blocks.powerSource.requirements = ItemStack.with(
        nulls, 0,
    );
    Blocks.itemSource.requirements = ItemStack.with(
        nulls, 0,
    );;
    Blocks.liquidSource.requirements = ItemStack.with(
        nulls, 0,
    );;
    Blocks.payloadSource.requirements = ItemStack.with(
        nulls, 0,
    );
    CTBlocks.powerSource.requirements = ItemStack.with(
        nulls, 0,
    );
    CTBlocks.itemSource.requirements = ItemStack.with(
        nulls, 0,
    );;
    CTBlocks.liquidSource.requirements = ItemStack.with(
        nulls, 0,
    );;
    CTBlocks.payloadSource.requirements = ItemStack.with(
        nulls, 0,
    );

    lib.addToResearch(CTBlocks.conveyor, {
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.copper, 100,
        ),
    });
    CTBlocks.router.alwaysUnlocked = false;//路由器
    lib.addToResearch(CTBlocks.router, {
        parent: CTBlocks.conveyor.name,
        requirements: ItemStack.with(
            Items.copper, 150,
        ),
    });
    CTBlocks.junction.alwaysUnlocked = false;//连接器
    lib.addToResearch(CTBlocks.junction, {
        parent: CTBlocks.router.name,
        requirements: ItemStack.with(
            Items.copper, 150,
        ),
    });

    lib.addToResearch(CTBlocks.mechanicalDrill, {
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.copper, 12 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.mechanicalPump, {//小泵
        parent: CTBlocks.mechanicalDrill.name,//
        requirements: ItemStack.with(
            Items.copper, 20 / 4 * 200,
            Items.lead, 25 / 4 * 200,
            Items.metaglass, 15 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.rotaryPump, {//中泵
        parent: CTBlocks.mechanicalPump.name,//小泵
        requirements: ItemStack.with(
            Items.copper, 70 / 4 * 200,
            Items.lead, 80 / 4 * 200,
            Items.metaglass, 50 / 4 * 200,
            Items.titanium, 35 / 4 * 200,
            Items.silicon, 45 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.impulsePump, {//大泵
        parent: CTBlocks.rotaryPump.name,//中泵
        requirements: ItemStack.with(
            Items.metaglass, 90 / 4 * 200,
            Items.lead, 80 / 4 * 200,
            Items.silicon, 30 / 4 * 200,
            Items.titanium, 40 / 4 * 200,
            Items.thorium, 35 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.conduit, {//导管
        parent: CTBlocks.mechanicalPump.name,//小泵
        requirements: ItemStack.with(
            Items.metaglass, 150,
        ),

    });
    lib.addToResearch(CTBlocks.pulseConduit, {//钛导管
        parent: CTBlocks.conduit.name,//导管
        requirements: ItemStack.with(
            Items.titanium, 150,
            Items.metaglass, 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),//风吹群岛
        )
    });
    lib.addToResearch(CTBlocks.platedConduit, {//钛导管+
        parent: CTBlocks.pulseConduit.name,//钛导管
        requirements: ItemStack.with(
            Items.titanium, 150,
            Items.metaglass, 200,
            Items.plastanium, 100,
        ),

    });//liquid-junction,//
    lib.addToResearch(CTBlocks.liquidRouter, {//液体路由器
        parent: CTBlocks.conduit.name,//导管
        requirements: ItemStack.with(
            Items.graphite, 4 / 4 * 200,
            Items.metaglass, 2 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.liquidJunction, {//液体交叉器
        parent: CTBlocks.liquidRouter.name,//液体路由器
        requirements: ItemStack.with(
            Items.graphite, 2 / 4 * 200,
            Items.metaglass, 2 / 4 * 200,

        ),

    });
    lib.addToResearch(CTBlocks.liquidContainer, {//小液体罐
        parent: CTBlocks.liquidRouter.name,//液体路由器
        requirements: ItemStack.with(
            Items.titanium, 10 / 4 * 200,
            Items.metaglass, 15 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.liquidTank, {//大液体罐
        parent: CTBlocks.liquidContainer.name,//小液体罐
        requirements: ItemStack.with(
            Items.titanium, 30 / 4 * 200,
            Items.metaglass, 40 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.bridgeConduit, {//导管桥
        parent: CTBlocks.liquidRouter.name,//液体路由器
        requirements: ItemStack.with(
            Items.graphite, 4 / 4 * 200,
            Items.metaglass, 8 / 4 * 200,
        ),

    });

    lib.addToResearch(CTBlocks.graphitePress, {//石墨机
        depth: 3,
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.copper, 75 / 4 * 200,
            Items.lead, 30 / 4 * 200,
        ),

    });

    lib.addToResearch(CTBlocks.siliconSmelter, {//硅机
        depth: 2,
        parent: CTBlocks.graphitePress.name,//石墨机
        requirements: ItemStack.with(
            Items.copper, 30 / 4 * 200,
            Items.lead, 25 / 4 * 200,
            Items.graphite, 40 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.multiPress, {//大石墨机
        depth: 3,
        parent: CTBlocks.siliconSmelter.name,//硅机
        requirements: ItemStack.with(
            Items.copper, 120 / 4 * 200,
            Items.lead, 90 / 4 * 200,
            Items.titanium, 100 / 4 * 200,
            Items.silicon, 35 / 4 * 200,
            Items.graphite, 180 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.siliconCrucible, {//大硅机
        parent: CTBlocks.siliconSmelter.name,//硅机
        requirements: ItemStack.with(
            Items.copper, 180 / 4 * 200,
            Items.lead, 150 / 4 * 200,
            Items.titanium, 120 / 4 * 200,
            Items.metaglass, 80 / 4 * 200,
            Items.plastanium, 35 / 4 * 200,
            Items.silicon, 160
        ),

    });
    lib.addToResearch(CTBlocks.kiln, {//玻璃机
        parent: CTBlocks.graphitePress.name,//石墨机
        requirements: ItemStack.with(
            Items.copper, 60 / 4 * 200,
            Items.lead, 35 / 4 * 200,
            Items.graphite, 30 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(craters),//陨石带
        )
    });
    lib.addToResearch(CTBlocks.plastaniumCompressor, {//塑钢机
        parent: CTBlocks.siliconSmelter.name,//硅机
        requirements: ItemStack.with(
            Items.copper, 145 / 4 * 200,
            Items.lead, 120 / 4 * 200,
            Items.graphite, 60 / 4 * 200,
            Items.silicon, 90 / 4 * 200,
            Items.titanium, 80 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),//风吹群岛
        )
    });
    lib.addToResearch(CTBlocks.phaseWeaver, {//布
        parent: CTBlocks.plastaniumCompressor.name,//塑钢
        requirements: ItemStack.with(
            Items.copper, 180 / 4 * 200,
            Items.lead, 130 / 4 * 200,
            Items.silicon, 135 / 4 * 200,
            Items.metaglass, 200 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps83),//占领融合
        )
    });
    lib.addToResearch(CTBlocks.phaseConduit, {//布导管桥
        parent: CTBlocks.bridgeConduit.name,//导管桥
        requirements: ItemStack.with(
            Items.phaseFabric, 5 / 4 * 200,
            Items.silicon, 7 / 4 * 200,
            Items.metaglass, 20 / 4 * 200,
            Items.titanium, 10 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.surgeSmelter, {//巨浪合金机
        parent: CTBlocks.plastaniumCompressor.name,//塑钢
        requirements: ItemStack.with(
            Items.copper, 120 / 4 * 200,
            Items.lead, 80 / 4 * 200,
            Items.plastanium, 20 / 4 * 200,
            Items.phaseFabric, 15 / 4 * 200,
            Items.silicon, 80 / 4 * 200,
            Items.thorium, 70 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//油田
        )
    });

    lib.addToResearch(liuji, {//硫机
        parent: CTBlocks.siliconSmelter.name,//硅机
        requirements: ItemStack.with(
            Items.copper, 50 / 4 * 200,
            Items.lead, 25 / 4 * 200,
            Items.coal, 60 / 4 * 200,
            Items.graphite, 22 / 4 * 200,
            Items.silicon, 45 / 4 * 200,
        ),

    });
    // lib.addToResearch(CTBlocks.pyratiteMixer, {//硫机
    //     parent: CTBlocks.siliconSmelter.name,//硅机
    //     requirements: ItemStack.with(
    //         Items.copper, 50 / 4 * 200,
    //         Items.lead, 25 / 4 * 200,
    //         Items.coal, 60 / 4 * 200,
    //         Items.silicon, 45 / 4 * 200,
    //     ),
    // });
    lib.addToResearch(CTBlocks.blastMixer, {//爆混机
        parent: liuji.name,//硫机
        requirements: ItemStack.with(
            Items.sporePod, 20 / 4 * 200,
            Items.titanium, 25 / 4 * 200,
            Items.pyratite, 35 / 4 * 200,
            Items.lead, 50 / 4 * 200,
        ),

    }); CTBlocks.blastMixer.itemCapacity = 12;
    lib.addToResearch(CTBlocks.pulverizer, {//粉碎机
        parent: CTBlocks.kiln.name,//玻璃机
        requirements: ItemStack.with(
            Items.copper, 30 / 4 * 200,
            Items.lead, 25 / 4 * 200,
            Items.graphite, 10 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.incinerator, {//焚烧炉
        parent: CTBlocks.pulverizer.name,//粉碎机
        requirements: ItemStack.with(
            Items.graphite, 6 / 4 * 200,
            Items.lead, 16 / 4 * 200,
            Items.silicon, 12 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.melter, {//小熔炉
        parent: CTBlocks.incinerator.name,//焚烧炉
        requirements: ItemStack.with(
            Items.copper, 30 / 4 * 200,
            Items.lead, 35 / 4 * 200,
            Items.graphite, 45 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.separator, {//分离机
        parent: CTBlocks.melter.name,//小熔炉
        requirements: ItemStack.with(
            Items.copper, 30 / 4 * 200,
            Items.titanium, 25 / 4 * 200,
            Items.silicon, 35 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.disassembler, {//解离机
        parent: CTBlocks.separator.name,//分离机
        requirements: ItemStack.with(
            Items.plastanium, 80 / 4 * 200,
            Items.titanium, 120 / 4 * 200,
            Items.silicon, 180 / 4 * 200,
            Items.thorium, 220 / 4 * 200,
        ),

    });

    lib.addToResearch(testC, {
        parent: CTBlocks.disassembler.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps111),//占领-
        ),
    });
    lib.addToResearch(testA, { parent: testC.name, });
    lib.addToResearch(yanbaoji, { parent: testA.name, });

    lib.addToResearch(CTBlocks.cultivator, {//培养机
        parent: CTBlocks.siliconSmelter.name,//
        requirements: ItemStack.with(
            Items.copper, 30 / 4 * 200,
            Items.lead, 25 / 4 * 200,
            Items.silicon, 20 / 4 * 200,
            Items.graphite, 25 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(biomassFacility),//生物质合成区
        )
    });
    lib.addToResearch(CTBlocks.sporePress, {//孢子压缩机
        parent: CTBlocks.siliconSmelter.name,//硅机
        requirements: ItemStack.with(
            Items.lead, 40 / 4 * 200,
            Items.graphite, 25 / 4 * 200,
            Items.silicon, 30 / 4 * 200,
            Items.sporePod, 20 / 4 * 200,
        ),

    });

    lib.addToResearch(CTBlocks.coalCentrifuge, {//煤炭离心机
        parent: CTBlocks.sporePress.name,//孢子压缩机
        requirements: ItemStack.with(
            Items.copper, 50 / 4 * 200,
            Items.lead, 30 / 4 * 200,
            Items.titanium, 25 / 4 * 200,
            Items.graphite, 50 / 4 * 200,
            Items.silicon, 70 / 4 * 200,
        ),

    });


    lib.addToResearch(CTBlocks.pneumaticDrill, {
        parent: CTBlocks.mechanicalDrill.name,//铜钻头
        requirements: ItemStack.with(
            Items.copper, 20 / 4 * 200,
            Items.lead, 15 / 4 * 200,
            Items.graphite, 10 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(frozenForest),//冰冻森林
        )
    });
    lib.addToResearch(yingzhizuantou, {//硬质钻头
        parent: CTBlocks.pneumaticDrill.name,//气动钻头
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps189),//占领遇袭解锁
        ),
    });

    lib.addToResearch(CTBlocks.laserDrill, {
        parent: yingzhizuantou.name,//硬质钻头
        requirements: ItemStack.with(
            Items.copper, 35 / 4 * 200,
            Items.lead, 50 / 4 * 200,
            Items.graphite, 50 / 4 * 200,
            Items.silicon, 35 / 4 * 200,
            Items.titanium, 20 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.Research(yingzhizuantou),
        )
    });

    lib.addToResearch(CTBlocks.blastDrill, {
        parent: CTBlocks.laserDrill.name,//激光钻头
        requirements: ItemStack.with(
            Items.copper, 65 / 4 * 200,
            Items.silicon, 60 / 4 * 200,
            Items.titanium, 50 / 4 * 200,
            Items.thorium, 75 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),//占领风吹群岛
        )
    });

    lib.addToResearch(CTBlocks.waterExtractor, {//抽水机
        parent: CTBlocks.pneumaticDrill.name,//气动钻头
        requirements: ItemStack.with(
            Items.metaglass, 30 / 4 * 200,
            Items.graphite, 45 / 4 * 200,
            Items.lead, 50 / 4 * 200,
            Items.copper, 35 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(saltFlats),//盐碱荒滩
        )
    });
    lib.addToResearch(CTBlocks.cryofluidMixer, {//冷冻液机
        parent: CTBlocks.waterExtractor.name,//抽水机
        requirements: ItemStack.with(
            Items.silicon, 50 / 4 * 200,
            Items.titanium, 60 / 4 * 200,
            Items.lead, 65 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.oilExtractor, {//石油钻井
        parent: CTBlocks.waterExtractor.name,//抽水机
        requirements: ItemStack.with(
            Items.copper, 150 / 4 * 200,
            Items.graphite, 175 / 4 * 200,
            Items.lead, 115 / 4 * 200,
            Items.thorium, 115 / 4 * 200,
            Items.silicon, 75 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.coreFoundation, {
        parent: CTBlocks.coreShard.name,//
        requirements: ItemStack.with(
            Items.copper, 3000 / 4 * 200,
            Items.lead, 3000 / 4 * 200,
            Items.silicon, 2000 / 4 * 200
        ),

    });
    lib.addToResearch(CT_core, {
        parent: CTBlocks.coreShard.name,
    });
    lib.addToResearch(CT_core2, {
        parent: 'CT_core',
    });
    lib.addToResearch(CT_core3, {
        parent: 'CT_core2',
    });
    lib.addToResearch(CT_core32, {
        parent: 'CT_core3',
    });
    lib.addToResearch(CTBlocks.coreNucleus, {
        parent: CTBlocks.coreFoundation.name,//
        requirements: ItemStack.with(
            Items.copper, 8000 / 4 * 200,
            Items.lead, 8000 / 4 * 200,
            Items.silicon, 5000 / 4 * 200,
            Items.thorium, 4000 / 4 * 200
        ),

    });
    lib.addToResearch(jizhuangxieqi0, {
        parent: CTBlocks.junction.name,//连接器
        //parent: CTBlocks.unloader.name,
    });
    lib.addToResearch(CTBlocks.unloader, {//装卸器
        parent: jizhuangxieqi0.name,
        requirements: ItemStack.with(
            Items.titanium, 25 / 4 * 200,
            Items.silicon, 30 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.container, {//容器
        parent: CTBlocks.unloader.name,//
        requirements: ItemStack.with(
            Items.lead, 130 / 4 * 200,
            Items.titanium, 100 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.vault, {//仓库
        parent: CTBlocks.container.name,//
        requirements: ItemStack.with(
            Items.lead, 200 / 4 * 200,
            Items.titanium, 250 / 4 * 200,
            Items.thorium, 125 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(stainedMountains),//绵延群山
        )
    });
    lib.addToResearch(CTBlocks.sorter, {//分类器
        parent: CTBlocks.junction.name,//连接器
        requirements: ItemStack.with(
            Items.copper, 150,
            Items.lead, 120,
        ),

    });
    lib.addToResearch(CTBlocks.invertedSorter, {//反向分类器
        parent: CTBlocks.sorter.name,//分类器
        requirements: ItemStack.with(
            Items.copper, 150,
            Items.lead, 120,
        ),

    });
    lib.addToResearch(CTBlocks.overflowGate, {//溢流门
        parent: CTBlocks.sorter.name,//分类器
        requirements: ItemStack.with(
            Items.copper, 200,
            Items.lead, 120,
        ),

    });
    lib.addToResearch(CTBlocks.underflowGate, {//反向溢流门
        parent: CTBlocks.overflowGate.name,//溢流门
        requirements: ItemStack.with(
            Items.copper, 200,
            Items.lead, 120,
        ),

    });
    lib.addToResearch(CTBlocks.distributor, {//分配器
        parent: CTBlocks.junction.name,//连接器
        requirements: ItemStack.with(
            Items.copper, 200,
            Items.lead, 120,
        ),

    });
    lib.addToResearch(CTBlocks.itemBridge, {//桥
        parent: CTBlocks.junction.name,//连接器
        requirements: ItemStack.with(
            Items.copper, 350,
            Items.lead, 200,
        ),

    });
    lib.addToResearch(CTBlocks.titaniumConveyor, {//钛传送带
        parent: CTBlocks.junction.name,//连接器
        requirements: ItemStack.with(
            Items.copper, 150,
            Items.lead, 120,
            Items.titanium, 100,
        ),

    });
    lib.addToResearch(CTBlocks.armoredConveyor, {//钛传送带+
        parent: CTBlocks.titaniumConveyor.name,//钛传送带
        requirements: ItemStack.with(
            Items.plastanium, 100,
            Items.thorium, 150,
            Items.metaglass, 220
        ),

    });
    lib.addToResearch(CTBlocks.plastaniumConveyor, {//塑钢带
        parent: CTBlocks.armoredConveyor.name,//
        requirements: ItemStack.with(
            Items.plastanium, 200,
            Items.silicon, 120,
            Items.graphite, 150
        ),

    });
    lib.addToResearch(CTBlocks.phaseConveyor, {//布桥
        parent: CTBlocks.titaniumConveyor.name,//
        requirements: ItemStack.with(
            Items.phaseFabric, 5 / 4 * 200,
            Items.silicon, 7 / 4 * 200,
            Items.lead, 10 / 4 * 200,
            Items.graphite, 10 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps83),//占领融合
        )
    });
    lib.addToResearch(CTBlocks.massDriver, {//质驱
        parent: CTBlocks.phaseConveyor.name,//布桥
        requirements: ItemStack.with(
            Items.titanium, 125 / 4 * 200,
            Items.silicon, 75 / 4 * 200,
            Items.lead, 125 / 4 * 200,
            Items.thorium, 50 / 4 * 200
        ),
    });
    lib.addToResearch(weixingzhiqu, {//小质驱
        parent: CTBlocks.phaseConveyor.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps214),//占领落锤
        )
    });
    lib.addToResearch(CTBlocks.largePayloadMassDriver, {//荷载质驱
        parent: CTBlocks.massDriver.name,//质驱
        requirements: ItemStack.with(
            Items.thorium, 700 / 2 * 200,
            Items.silicon, 500 / 2 * 200,
            Items.plastanium, 200 / 2 * 200,
            Items.phaseFabric, 150 / 2 * 200
        ),
    });
    //CTBlocks.largePayloadMassDriver.regionSuffix = "creators-dark";
    CTBlocks.largePayloadMassDriver.category = Category.distribution;
    lib.addToResearch(CTBlocks.payloadConveyor, {//荷载传送带
        parent: CTBlocks.titaniumConveyor.name,//钛传送带
        requirements: ItemStack.with(
            Items.graphite, 10 / 4 * 200,
            Items.lead, 10 / 4 * 200
        ),

    }); CTBlocks.payloadConveyor.category = Category.distribution;
    lib.addToResearch(CTBlocks.payloadRouter, {//荷载路由器
        parent: CTBlocks.payloadConveyor.name,//荷载传送带
        requirements: ItemStack.with(
            Items.graphite, 15 / 4 * 200,
            Items.lead, 15 / 4 * 200
        ),

    }); CTBlocks.payloadRouter.category = Category.distribution; Blocks.payloadRouter.payloadLimit = 7.5;
    lib.addToResearch(CTBlocks.payloadLoader, {//荷载装载器
        parent: CTBlocks.payloadRouter.name,//荷载路由器
        requirements: ItemStack.with(
            Items.graphite, 50 / 4 * 200,
            Items.silicon, 50 / 4 * 200,
            Items.plastanium, 80 / 4 * 200

        ),

    }); CTBlocks.payloadLoader.category = Category.distribution;
    lib.addToResearch(CTBlocks.payloadUnloader, {//荷载卸载器
        parent: CTBlocks.payloadLoader.name,//荷载装载器
        requirements: ItemStack.with(
            Items.graphite, 50 / 4 * 200,
            Items.silicon, 50 / 4 * 200,
            Items.plastanium, 30 / 4 * 200

        ),

    }); CTBlocks.payloadUnloader.category = Category.distribution;
    lib.addToResearch(CTBlocks.constructor, {//构造器
        parent: CTBlocks.payloadRouter.name,//荷载路由器
        requirements: ItemStack.with(
            Items.silicon, 100 / 4 * 200,
            Items.graphite, 150 / 4 * 200,
            Items.plastanium, 80 / 4 * 200

        ),

    });
    /*
    //改为仅沙盒使用
     lib.addToResearch(CTBlocks.largeConstructor, {//大型构造器
            parent: CTBlocks.constructor.name,//构造器
            requirements: ItemStack.with(
                Items.silicon, 150 / 4 * 200,
                Items.graphite, 450 / 4 * 200,
                Items.plastanium, 200 / 4 * 200,
                Items.phaseFabric, 40 / 4 * 200

            ),
        }); */
    lib.addToResearch(CTBlocks.smallDeconstructor, {//解构器
        parent: CTBlocks.constructor.name,//构造器
        requirements: ItemStack.with(
            Items.phaseFabric, 20 / 4 * 200,
            Items.silicon, 100 / 4 * 200,
            Items.plastanium, 100 / 4 * 200,
            Items.graphite, 80 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.deconstructor, {//大型解构器
        parent: CTBlocks.smallDeconstructor.name,//解构器
        requirements: ItemStack.with(
            weijing1, 30 / 4 * 500,
            Items.lead, 54 / 4 * 500,
            Items.copper, 54 / 4 * 500,
            Items.graphite, 125 / 4 * 500,
        ),

    });
    lib.addToResearch(CTBlocks.payloadVoid, {//载荷黑洞
        parent: CTBlocks.deconstructor.name,//解大构器
        requirements: ItemStack.with(
            Items.surgeAlloy, 150 / 4 * 200,
            Items.phaseFabric, 50 / 4 * 200,
            Items.silicon, 250 / 4 * 200,
            Items.plastanium, 250 / 4 * 200
        ),
    });
    lib.addToResearch(fashetai0, {//发射台
        parent: CTBlocks.titaniumConveyor.name,//钛传送带
        requirements: ItemStack.with(
            Items.copper, 350 * 1.8 / 4 * 200,
            Items.silicon, 140 * 1.8 / 4 * 200,
            Items.lead, 200 * 1.8 / 4 * 200,
            Items.titanium, 150 * 1.8 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(extractionOutpost),//萃取前哨
        )
    });



    CTBlocks.duo.alwaysUnlocked = false;//双管跑
    lib.addToResearch(CTBlocks.duo, {
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.copper, 35 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.copperWall, {//小铜墙
        parent: CTBlocks.duo.name,//
        requirements: ItemStack.with(
            Items.copper, 6 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.copperWallLarge, {//铜墙
        parent: CTBlocks.copperWall.name,//
        requirements: ItemStack.with(
            Items.copper, 24 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.titaniumWall, {//小钛墙
        parent: CTBlocks.copperWallLarge.name,//
        requirements: ItemStack.with(
            Items.titanium, 6 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.titaniumWallLarge, {//钛墙
        parent: CTBlocks.titaniumWall.name,//小钛墙
        requirements: ItemStack.with(
            Items.titanium, 30 / 4 * 200,
        ),

    });




    lib.addToResearch(CTBlocks.door, {//小门
        parent: CTBlocks.titaniumWall.name,//小钛墙
        requirements: ItemStack.with(
            Items.titanium, 6 * 200, Items.silicon, 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.doorLarge, {//大门
        parent: CTBlocks.door.name,//小门
        requirements: ItemStack.with(
            Items.titanium, 24 * 200, Items.silicon, 16 * 200
        ),

    });
    lib.addToResearch(moweimen, {//魔微门
        parent: CTBlocks.doorLarge.name,//大门
        requirements: ItemStack.with(
            molishi, 380 / 4 * 210,
            guijingti, 120 / 4 * 210,
            shimoxi, 240 / 4 * 210,
            weijing2, 20 / 4 * 210,
        ),
    });





    lib.addToResearch(CTBlocks.plastaniumWall, {//小塑钢墙
        parent: CTBlocks.titaniumWall.name,//小钛墙
        requirements: ItemStack.with(
            Items.plastanium, 10 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.plastaniumWallLarge, {//塑钢墙
        parent: CTBlocks.plastaniumWall.name,//小塑钢墙
        requirements: ItemStack.with(
            Items.plastanium, 30 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.thoriumWall, {//小钍墙
        parent: CTBlocks.titaniumWall.name,//小钛墙
        requirements: ItemStack.with(
            Items.thorium, 15 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.thoriumWallLarge, {//钍墙
        parent: CTBlocks.thoriumWall.name,//小钛墙
        requirements: ItemStack.with(
            Items.thorium, 30 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.phaseWall, {//小布墙
        parent: CTBlocks.thoriumWall.name,//小钍墙
        requirements: ItemStack.with(
            Items.phaseFabric, 25 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.phaseWallLarge, {//布墙
        parent: CTBlocks.phaseWall.name,//小布墙
        requirements: ItemStack.with(
            Items.phaseFabric, 35 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.surgeWall, {//小合金墙
        parent: CTBlocks.phaseWall.name,//小布墙
        requirements: ItemStack.with(
            Items.surgeAlloy, 30 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.surgeWallLarge, {//合金墙
        parent: CTBlocks.surgeWall.name,//小合金墙
        requirements: ItemStack.with(
            Items.surgeAlloy, 40 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.scatter, {//分裂炮
        parent: CTBlocks.duo.name,//
        requirements: ItemStack.with(
            Items.copper, 85 * 1.3 / 4 * 200,
            Items.lead, 45 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.scorch, {//喷火炮
        parent: CTBlocks.duo.name,//
        requirements: ItemStack.with(
            Items.copper, 25 * 1.3 / 4 * 200,
            Items.lead, 22 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.hail, {//冰雹炮
        parent: CTBlocks.scatter.name,//分裂炮
        requirements: ItemStack.with(
            Items.copper, 40 * 1.3 / 4 * 200,
            Items.graphite, 25 * 1.3 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(craters),//陨石带
        )
    });
    lib.addToResearch(CTBlocks.arc, {//电弧
        parent: CTBlocks.scorch.name,//喷火炮
        requirements: ItemStack.with(
            Items.copper, 40 * 1.3 / 4 * 200,
            Items.lead, 50 * 1.3 / 4 * 200,
            Items.graphite, 25 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.wave, {//波浪
        parent: CTBlocks.scatter.name,//分裂炮
        requirements: ItemStack.with(
            Items.copper, 30 * 1.3 / 4 * 200,
            Items.lead, 75 * 1.3 / 4 * 200,
            Items.metaglass, 45 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.lancer, {//兰瑟
        parent: CTBlocks.arc.name,//电弧
        requirements: ItemStack.with(
            Items.copper, 60 * 1.3 / 4 * 200,
            Items.lead, 75 * 1.3 / 4 * 200,
            Items.silicon, 50 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.parallax, {//差绕
        parent: CTBlocks.lancer.name,//波浪
        requirements: ItemStack.with(
            Items.lead, 75 * 1.3 / 4 * 200,
            Items.graphite, 35 * 1.3 / 4 * 200,
            Items.titanium, 90 * 1.3 / 4 * 200,
            Items.silicon, 120 * 1.3 / 4 * 200,
        ),

    });

    lib.addToResearch(CTBlocks.salvo, {//齐射
        parent: CTBlocks.hail.name,//冰雹
        requirements: ItemStack.with(
            Items.lead, 60 * 1.3 / 4 * 200,
            Items.graphite, 80 * 1.3 / 4 * 200,
            Items.titanium, 50 * 1.3 / 4 * 200,
            Items.copper, 100 * 1.3 / 4 * 200,
        ),

    });

    lib.addToResearch(CTBlocks.swarmer, {//蜂群
        parent: CTBlocks.salvo.name,//齐射
        requirements: ItemStack.with(
            Items.graphite, 35 * 1.3 / 4 * 200,
            Items.titanium, 35 * 1.3 / 4 * 200,
            Items.silicon, 30 * 1.3 / 4 * 200,
            Items.plastanium, 45 * 1.3 / 4 * 200,
        ),

    });
    lib.addToResearch(qishe2, {//T2齐射炮，泰克炮
        parent: CTBlocks.salvo.name,//齐射
    });


    lib.addToResearch(lanse2, {//T2兰瑟，飞逝
        parent: CTBlocks.lancer.name,//兰瑟
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps196),//占领-磁暴
        ),
    });

    lib.addToResearch(CTBlocks.segment, {//裂解
        parent: CTBlocks.parallax.name,//差绕
        requirements: ItemStack.with(
            Items.copper, 30 * 1.3 / 4 * 200,
            Items.lead, 50 * 1.3 / 4 * 200,
            Items.thorium, 80 * 1.3 / 4 * 200,
            Items.silicon, 130 * 1.3 / 4 * 200,
            Items.phaseFabric, 40 * 1.3 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.tsunami, {//海啸
        parent: CTBlocks.wave.name,//波浪
        requirements: ItemStack.with(
            Items.metaglass, 100 * 1.3 / 4 * 200,
            Items.lead, 400 * 1.3 / 4 * 200,
            Items.titanium, 250 * 1.3 / 4 * 200,
            Items.thorium, 100 * 1.3 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps76),//占领热融解锁
        ),
    });
    lib.addToResearch(CTBlocks.ripple, {//浪涌
        parent: CTBlocks.salvo.name,//齐射
        requirements: ItemStack.with(
            Items.copper, 150 * 1.3 / 4 * 200,
            Items.lead, 200 * 1.3 / 4 * 200,
            Items.graphite, 135 * 1.3 / 4 * 200,
            Items.titanium, 60 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.fuse, {//雷光
        parent: CTBlocks.ripple.name,//浪涌
        requirements: ItemStack.with(
            Items.copper, 100 * 1.3 / 4 * 200,
            Items.lead, 225 * 1.3 / 4 * 200,
            Items.graphite, 225 * 1.3 / 4 * 200,
            Items.thorium, 100 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.cyclone, {//气旋
        parent: CTBlocks.swarmer.name,//蜂群
        requirements: ItemStack.with(
            Items.copper, 200 * 1.3 / 4 * 200,
            Items.lead, 120 * 1.3 / 4 * 200,
            Items.titanium, 125 * 1.3 / 4 * 200,
            Items.plastanium, 80 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.spectre, {//幽灵
        parent: CTBlocks.cyclone.name,//气旋
        requirements: ItemStack.with(
            Items.lead, 1100 * 1.3 / 4 * 200,
            Items.copper, 900 * 1.3 / 4 * 200,
            Items.graphite, 300 * 1.3 / 4 * 200,
            Items.surgeAlloy, 250 * 1.3 / 4 * 200,
            Items.plastanium, 175 * 1.3 / 4 * 200,
            Items.thorium, 250 * 1.3 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(nuclearComplex),//和列阵
        )
    });
    lib.addToResearch(CTBlocks.meltdown, {//融汇
        parent: CTBlocks.lancer.name,//兰瑟
        requirements: ItemStack.with(
            Items.lead, 1500 * 1.3 / 4 * 200,
            Items.copper, 1200 * 1.3 / 4 * 200,
            Items.lead, 350 * 1.3 / 4 * 200,
            Items.graphite, 300 * 1.3 / 4 * 200,
            Items.surgeAlloy, 325 * 1.3 / 4 * 200,
            Items.silicon, 325 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.foreshadow, {//噩兆
        parent: CTBlocks.meltdown.name,//融汇
        requirements: ItemStack.with(
            Items.lead, 2000 * 1.3 / 4 * 200,
            Items.copper, 1500 * 1.3 / 4 * 200,
            Items.metaglass, 600 * 1.3 / 4 * 200,
            Items.surgeAlloy, 300 * 1.3 / 4 * 200,
            Items.plastanium, 200 * 1.3 / 4 * 200,
            Items.silicon, 600 * 1.3 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.mender, {//小修复
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.copper, 30 / 4 * 200,
            Items.lead, 25 / 4 * 200,
        ),
    });
    lib.addToResearch(radar, {//雷达
        parent: Blocks.radar.name,
    });
    lib.addToResearch(CTBlocks.mendProjector, {//修复
        parent: CTBlocks.mender.name,
        requirements: ItemStack.with(
            Items.lead, 100 / 4 * 200,
            Items.titanium, 25 / 4 * 200,
            Items.silicon, 40 / 4 * 200,
            Items.copper, 50 / 4 * 200
        ),

    });

    lib.addToResearch(CTBlocks.overdriveProjector, {
        parent: CTBlocks.mendProjector.name,
        requirements: ItemStack.with(
            Items.lead, 100 / 4 * 200,
            Items.titanium, 25 / 4 * 200,
            Items.silicon, 40 / 4 * 200,
            Items.copper, 50 / 4 * 200
        ),

    });

    lib.addToResearch(CTBlocks.overdriveDome, {
        parent: CTBlocks.overdriveProjector.name,
        requirements: ItemStack.with(
            Items.lead, 200 / 4 * 200,
            Items.titanium, 130 / 4 * 200,
            Items.silicon, 130 / 4 * 200,
            Items.plastanium, 80 / 4 * 200,
            Items.surgeAlloy, 120 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.forceProjector, {//护罩 力墙
        parent: CTBlocks.mendProjector.name,
        requirements: ItemStack.with(
            Items.lead, 100 / 4 * 200,
            Items.titanium, 75 / 4 * 200,
            Items.silicon, 125 / 4 * 200
        ),
        // objectives: Seq.with(
        //     new Objectives.SectorComplete(impact0078),//冲击区0078
        // )
    });

    lib.addToResearch(CTBlocks.shockMine, {//地雷
        parent: CTBlocks.mender.name,
        requirements: ItemStack.with(
            Items.lead, 30 / 4 * 200,
            Items.pyratite, 20 / 4 * 200,
            Items.silicon, 15 / 4 * 200
        ),

    });
    // lib.addToResearch(bomb, {//炸弹
    //     parent: CTBlocks.shockMine.name,
    //     requirements: ItemStack.with(
    //         Items.lead, 30000 / 4 * 200,
    //         Items.copper, 30000 / 4 * 200,
    //         Items.silicon, 5000 / 4 * 200,
    //         zhayao, 70000,
    //         zuanjing, 12000,
    //         monengjing1, 1750,
    //     ),
    // });
    lib.addToResearch(CTBlocks.combustionGenerator, {//火力电
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.lead, 25 / 4 * 200,
            Items.copper, 30 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.powerNode, {//小电节点
        parent: CTBlocks.combustionGenerator.name,
        requirements: ItemStack.with(
            Items.copper, 1 / 4 * 200,
            Items.lead, 3 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.powerNodeLarge, {//电节点
        parent: CTBlocks.powerNode.name,
        requirements: ItemStack.with(
            Items.silicon, 3 / 4 * 200,
            Items.lead, 10 / 4 * 200,
            Items.titanium, 5 / 4 * 200,
        ),

    });
    lib.addToResearch(CTBlocks.diode, {//二极管
        parent: CTBlocks.powerNodeLarge.name,
        requirements: ItemStack.with(
            Items.silicon, 10 / 4 * 200,
            Items.plastanium, 5 / 4 * 200,
            Items.metaglass, 10 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.surgeTower, {//电塔
        parent: CTBlocks.diode.name,
        requirements: ItemStack.with(
            Items.titanium, 7 / 4 * 200,
            Items.lead, 10 / 4 * 200,
            Items.silicon, 15 / 4 * 200,
            Items.surgeAlloy, 15 / 4 * 200
        ),

    });

    lib.addToResearch(CTBlocks.battery, {//小电池
        parent: CTBlocks.powerNode.name,
        requirements: ItemStack.with(
            Items.copper, 5 / 4 * 200,
            Items.graphite, 5 / 4 * 200,
            Items.lead, 20 / 4 * 200
        ),

    });

    lib.addToResearch(CTBlocks.batteryLarge, {
        parent: CTBlocks.battery.name,
        requirements: ItemStack.with(
            Items.titanium, 20 / 4 * 200,
            Items.lead, 40 / 4 * 200,
            Items.silicon, 20 / 4 * 200,
            Items.graphite, 50 / 4 * 200,
        ),

    });
    lib.addToResearch(chongdianqi, {//充电器
        parent: CTBlocks.battery.name,
    });
    lib.addToResearch(fangdianqi, {//放电器
        parent: chongdianqi,
        objectives: Seq.with(
            new Objectives.Research(CTBlocks.batteryLarge)
        ),
    });
    lib.addToResearch(CTBlocks.steamGenerator, {//涡轮
        parent: CTBlocks.powerNode.name,
        requirements: ItemStack.with(
            Items.copper, 35 / 4 * 200,
            Items.graphite, 25 / 4 * 200,
            Items.lead, 40 / 4 * 200,
            Items.silicon, 30 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(craters),//陨石带
        )
    });
    lib.addToResearch(CTBlocks.thermalGenerator, {//地热
        parent: CTBlocks.steamGenerator.name,
        requirements: ItemStack.with(
            Items.copper, 40 / 4 * 200,
            Items.graphite, 35 / 4 * 200,
            Items.lead, 50 / 4 * 200,
            Items.silicon, 35 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.differentialGenerator, {//温差
        parent: CTBlocks.thermalGenerator.name,
        requirements: ItemStack.with(
            Items.copper, 70 / 4 * 200,
            Items.titanium, 50 / 4 * 200,
            Items.lead, 100 / 4 * 200,
            Items.silicon, 65 / 4 * 200,
            Items.metaglass, 50 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.rtgGenerator, {//RTG
        parent: CTBlocks.differentialGenerator.name,
        requirements: ItemStack.with(
            Items.copper, 70 / 4 * 200,
            Items.titanium, 50 / 4 * 200,
            Items.lead, 100 / 4 * 200,
            Items.silicon, 65 / 4 * 200,
            Items.metaglass, 50 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.solarPanel, {//小太阳能
        parent: CTBlocks.powerNode.name,
        requirements: ItemStack.with(
            Items.lead, 10 / 4 * 200,
            Items.silicon, 15 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.largeSolarPanel, {//太阳能
        parent: CTBlocks.solarPanel.name,
        requirements: ItemStack.with(
            Items.lead, 80 / 4 * 200,
            Items.silicon, 110 / 4 * 200,
            Items.phaseFabric, 15 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.thoriumReactor, {//钍堆
        parent: CTBlocks.rtgGenerator.name,
        requirements: ItemStack.with(
            Items.lead, 300 / 4 * 200,
            Items.silicon, 200 / 4 * 200,
            Items.graphite, 150 / 4 * 200,
            Items.thorium, 150 / 4 * 200,
            Items.metaglass, 50 / 4 * 200
        ),

    });
    lib.addToResearch(CTBlocks.impactReactor, {//冲击
        parent: CTBlocks.thoriumReactor.name,
        requirements: ItemStack.with(
            Items.lead, 500 / 4 * 200,
            Items.silicon, 300 / 4 * 200,
            Items.graphite, 400 / 4 * 200,
            Items.thorium, 100 / 4 * 200,
            Items.surgeAlloy, 250 / 4 * 200,
            Items.metaglass, 250 / 4 * 200
        ),

    });
    //原版单位工厂
    lib.addToResearch(CTBlocks.groundFactory, {//陆军工厂
        parent: CTBlocks.coreShard.name,
        requirements: ItemStack.with(
            Items.copper, 50 / 4 * 200,
            Items.lead, 120 / 4 * 200,
            Items.silicon, 80 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.airFactory, {//空军工厂
        parent: CTBlocks.groundFactory.name,
        requirements: ItemStack.with(
            Items.copper, 60 / 4 * 200,
            Items.lead, 70 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.navalFactory, {//海军工厂
        parent: CTBlocks.airFactory.name,
        requirements: ItemStack.with(
            Items.copper, 150 / 4 * 200,
            Items.lead, 130 / 4 * 200,
            Items.metaglass, 120 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.additiveReconstructor, {//T2工厂
        parent: CTBlocks.airFactory.name,
        requirements: ItemStack.with(
            Items.copper, 200 / 4 * 200,
            Items.lead, 120 / 4 * 200,
            Items.silicon, 90 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.multiplicativeReconstructor, {//T3工厂
        parent: CTBlocks.additiveReconstructor.name,
        requirements: ItemStack.with(
            Items.lead, 650 / 4 * 200,
            Items.silicon, 450 / 4 * 200,
            Items.titanium, 350 / 4 * 200,
            Items.thorium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.exponentialReconstructor, {//T4工厂
        parent: CTBlocks.multiplicativeReconstructor.name,
        requirements: ItemStack.with(
            Items.lead, 2000 / 4 * 200,
            Items.silicon, 1000 / 4 * 200,
            Items.titanium, 2000 / 4 * 200,
            Items.thorium, 750 / 4 * 200,
            Items.plastanium, 450 / 4 * 200,
            Items.phaseFabric, 600 / 4 * 200
        ),
    });
    lib.addToResearch(CTBlocks.tetrativeReconstructor, {//T5工厂
        parent: CTBlocks.exponentialReconstructor.name,
        requirements: ItemStack.with(
            Items.lead, 4000 / 4 * 200,
            Items.silicon, 3000 / 4 * 200,
            Items.thorium, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.phaseFabric, 600 / 4 * 200,
            Items.surgeAlloy, 800 / 4 * 200
        ),
    });

    //原版单位：
    lib.addToResearch(CTUnitTypes.risso, { //T1船
        parent: CTBlocks.navalFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 20 / 4 * 200,
            Items.metaglass, 35 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.retusa, { //T1绿船
        parent: CTBlocks.navalFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 15 / 4 * 200,
            Items.metaglass, 25 / 4 * 200,
            Items.titanium, 20 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.flare, { //T1空
        parent: CTBlocks.airFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 15 / 4 * 200,
        ),
    });
    lib.addToResearch(CTUnitTypes.mono, { //T1绿空
        parent: CTBlocks.airFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 30 / 4 * 200,
            Items.lead, 15 / 4 * 200,
        ),
    });
    lib.addToResearch(CTUnitTypes.dagger, { //T1陆
        parent: CTBlocks.groundFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 10 / 4 * 200,
            Items.lead, 10 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.crawler, { //T1紫陆
        parent: CTUnitTypes.dagger.name,
        requirements: ItemStack.with(
            Items.silicon, 8 / 4 * 200,
            Items.lead, 10 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.nova, { //T1绿陆
        parent: CTUnitTypes.dagger.name,
        requirements: ItemStack.with(
            Items.silicon, 30 / 4 * 200,
            Items.lead, 20 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.minke, { //T2船
        parent: CTUnitTypes.risso.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.oxynoe, { //T2绿船
        parent: CTUnitTypes.retusa.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.horizon, { //T2空
        parent: CTUnitTypes.flare.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.poly, { //T2绿空
        parent: CTUnitTypes.mono.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.mace, { //T2陆
        parent: CTUnitTypes.dagger.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.pulsar, { //T2绿陆
        parent: CTUnitTypes.nova.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.atrax, { //T2紫陆
        parent: CTUnitTypes.crawler.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.bryde, { //T3船
        parent: CTUnitTypes.minke.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.cyerce, { //T3绿船
        parent: CTUnitTypes.oxynoe.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.zenith, { //T3空
        parent: CTUnitTypes.horizon.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.mega, { //T3绿空
        parent: CTUnitTypes.poly.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.fortress, { //T3陆
        parent: CTUnitTypes.mace.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.quasar, { //T3绿陆
        parent: CTUnitTypes.pulsar.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.spiroct, { //T3紫陆
        parent: CTUnitTypes.atrax.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.sei, { //T4船
        parent: CTUnitTypes.bryde.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.aegires, { //T4绿船
        parent: CTUnitTypes.cyerce.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.antumbra, { //T4空
        parent: CTUnitTypes.zenith.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.quad, { //T4绿空
        parent: CTUnitTypes.mega.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    }); CTUnitTypes.quad.mineTier = 4; CTUnitTypes.quad.mineSpeed = 5; CTUnitTypes.quad.mineRange = 20 * 8; CTUnitTypes.quad.hitSize = 30;
    lib.addToResearch(CTUnitTypes.scepter, { //T4陆
        parent: CTUnitTypes.fortress.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.vela, { //T4绿陆
        parent: CTUnitTypes.quasar.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    }); CTUnitTypes.vela.mineTier = 4; CTUnitTypes.vela.mineSpeed = 7.5; CTUnitTypes.vela.mineRange = 15 * 8
    lib.addToResearch(CTUnitTypes.arkyid, { //T4紫陆
        parent: CTUnitTypes.spiroct.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.omura, { //T5船
        parent: CTUnitTypes.sei.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.navanax, { //T5绿船
        parent: CTUnitTypes.aegires.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.eclipse, { //T5空
        parent: CTUnitTypes.antumbra.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.oct, { //T5绿空
        parent: CTUnitTypes.quad.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.reign, { //T5陆
        parent: CTUnitTypes.scepter.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.corvus, { //T5绿陆
        parent: CTUnitTypes.vela.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(CTUnitTypes.toxopid, { //T5紫陆
        parent: CTUnitTypes.arkyid.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    //************************************ *

    lib.addToResearch(ax1, {
        parent: CTBlocks.airFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 15 / 4 * 200,
        ),
    });
    lib.addToResearch(poly2, {
        parent: CTBlocks.airFactory.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(mega2, {
        parent: poly2.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(ax2, {
        parent: ax1.name,
        requirements: ItemStack.with(
            Items.silicon, 40 / 4 * 200,
            Items.graphite, 40 / 4 * 200
        ),
    });
    lib.addToResearch(ax3, {
        parent: ax2.name,
        requirements: ItemStack.with(
            Items.silicon, 130 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.metaglass, 40 / 4 * 200
        ),
    });
    lib.addToResearch(ax4, {
        parent: ax3.name,
        requirements: ItemStack.with(
            Items.silicon, 850 / 4 * 200,
            Items.titanium, 750 / 4 * 200,
            Items.plastanium, 650 / 4 * 200
        ),
    });
    lib.addToResearch(ax5, {
        parent: ax4.name,
        requirements: ItemStack.with(
            Items.silicon, 1000 / 4 * 200,
            Items.plastanium, 600 / 4 * 200,
            Items.surgeAlloy, 500 / 4 * 200,
            Items.phaseFabric, 350 / 4 * 200
        ),
    });
    lib.addToResearch(ax6, {
        parent: ax5.name,
        requirements: ItemStack.with(
            monengjing1, 4000,
            jin, 120000,
            weijing2, 7000,
            weijing3, 200,
            Items.thorium, 50000,
            guijingti, 180000,
        ),
    });





    lib.addToResearch(T6rishi, {
        parent: CTUnitTypes.eclipse.name,
        requirements: ItemStack.with(
            monengjing1, 7000,
            jin, 250000,
            weijing2, 35000,
            weijing3, 500,
            Items.titanium, 350000,
            zhayao, 60000,
        ),
    });
    lib.addToResearch(T6wangzuo, {
        parent: CTUnitTypes.reign.name,
        requirements: ItemStack.with(
            monengjing1, 12000,
            jin, 310000,
            weijing2, 35000,
            weijing3, 680,
            Items.titanium, 350000,
            juhebaozhawu, 80000,
        ),
    });
    lib.addToResearch(T6tianxie, {
        parent: CTUnitTypes.toxopid.name,
        requirements: ItemStack.with(
            monengjing1, 18000,
            jin, 290000,
            weijing2, 35000,
            weijing3, 700,
            Items.thorium, 520000,
            shimoxi, 52000,
        ),
    });
    lib.addToResearch(T6sixing, {
        parent: CTUnitTypes.corvus.name,
        requirements: ItemStack.with(
            monengjing1, 9000,
            jin, 270000,
            weijing2, 35000,
            weijing3, 830,
            Items.thorium, 950000,
            shimoxi, 210000,
        ),
    });
    lib.addToResearch(oct2, {
        parent: CTUnitTypes.oct.name,
        requirements: ItemStack.with(
            monengjing1, 32000,
            jin, 250000,
            weijing2, 35000,
            weijing3, 900,
            Items.surgeAlloy, 350000,
            shimoxi, 250000,
        ),
    });
    lib.addToResearch(unitGC1, {//天尊单位工厂（T5）
        parent: CTBlocks.tetrativeReconstructor.name,//(T5)
    });
    lib.addToResearch(unitGC2, {//虚灵单位工厂（T6）
        parent: unitGC1.name,
    });
    lib.addToResearch(WJcore, {//微晶核心
        parent: CTBlocks.coreNucleus.name,// CoreJiangLuo.name,
        objectives: Seq.with(
            new Objectives.Research(windsweptIslands)//占领风吹群岛
        ),
    });
    
    lib.addToResearch(CTBlocks.repairPoint, { //单位维修点
        parent: CTBlocks.groundFactory.name,
        requirements: ItemStack.with(
            Items.lead, 30,
            Items.copper, 30,
            Items.silicon, 20
        ),
    });
    lib.addToResearch(CTBlocks.repairTurret, { //大型单位维修点
        parent: CTBlocks.repairPoint.name,
        requirements: ItemStack.with(
            Items.silicon, 90,
            Items.thorium, 80,
            Items.plastanium, 60
        ),
    });



    //传输 储藏 仓库
    lib.addToResearch(weicang, {
        parent: CTBlocks.vault.name,
    }); weicang.alwaysUnlocked = true;//默认解锁
    lib.addToResearch(jicangku3, {
        parent: weicang.name,
    });
    lib.addToResearch(jicangku4, {
        parent: jicangku3.name,
    });
    lib.addToResearch(jicangku5, {
        parent: jicangku4.name,
    });
    lib.addToResearch(jicangku6, {
        parent: jicangku5.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps61),//占领-极圈
        ),

    });
    lib.addToResearch(jicangku7, {//7级仓库
        parent: jicangku6.name,
        requirements: ItemStack.with(
            Items.copper, 20000/4*200,
            Items.lead, 20000/4*200,
            monengjing, 10000/4*200,
            zuanjing, 45000/4*200,
            weijing5, 20,
            guijingti, 4300/4*200,
            shimoxi,5000/4*200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps193),//占领-双子
        ),

    });
    lib.addToResearch(huanchongcang, {
        parent: weicang.name,
    });

    lib.addToResearch(luyouqi2, {
        parent: CTBlocks.router.name,
    });
    lib.addToResearch(lianjieqi2, {
        parent: CTBlocks.junction.name,
    });
    lib.addToResearch(sugangcrouter, {//塑钢路由器
        parent: CTBlocks.router.name,
    });


    lib.addToResearch(csdq0, {
        parent: CTBlocks.itemBridge.name,
    });
    lib.addToResearch(conveyor10, {
        parent: CTBlocks.conveyor.name,
    });
    lib.addToResearch(conveyor11, {
        parent: CTBlocks.titaniumConveyor.name,
    });
    lib.addToResearch(conveyor12, {
        parent: conveyor11.name,
    });
    lib.addToResearch(jibaozhuangyunshudai2, {
        parent: CTBlocks.plastaniumConveyor.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(nuclearComplex),//占领核列阵解锁
        ),
    });
    lib.addToResearch(dabaodai, {
        parent: jibaozhuangyunshudai2.name,
    });
    lib.addToResearch(conveyor2, {
        parent: conveyor12.name,
    });
    lib.addToResearch(conveyor21, {
        parent: conveyor2.name,
    });
    lib.addToResearch(conveyor3, {
        parent: conveyor21.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps163),//占领分岭解锁
        ),
    });
    lib.addToResearch(conveyor31, {
        parent: conveyor3.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps163),//占领分岭解锁
        ),
    });
    lib.addToResearch(jibaozhuangyunshudai3, {
        parent: jibaozhuangyunshudai2.name,
    });
    lib.addToResearch(ctunitCargoLoader, {
        parent: CTBlocks.massDriver.name,
    });
    lib.addToResearch(ctUnitCargoUnloadPoint, {
        parent: ctunitCargoLoader.name,
    });

    lib.addToResearch(zhiqu2, {
        parent: CTBlocks.massDriver.name,
    });
    lib.addToResearch(zhiqu3, {
        parent: zhiqu2.name,
    });
    lib.addToResearch(conduit1, {
        parent: CTBlocks.platedConduit.name,
    });
    lib.addToResearch(conduit11, {
        parent: conduit1.name,
    });
    lib.addToResearch(conduit2, {
        parent: conduit11.name,
    });
    lib.addToResearch(conduit21, {
        parent: conduit2.name,
    });
    lib.addToResearch(dongcibeng, {
        parent: CTBlocks.impulsePump.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps258),//占领激流解锁
        ),
    });
    lib.addToResearch(csdq, {
        parent: conveyor21.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps163),//占领分岭解锁
        ),
    });
    lib.addToResearch(daoguanqiao0, {
        parent: CTBlocks.bridgeConduit.name,
    });
    lib.addToResearch(wanxiangqiao, {
        parent: CTBlocks.phaseConduit.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps214),//占领落锤
        )
    });
    lib.addToResearch(daoguanqiao, {
        parent: CTBlocks.phaseConduit.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps163),//占领分岭解锁
        ),
    });
    lib.addToResearch(daxingchuyeguan, {
        parent: CTBlocks.phaseConduit.name,
    });

    lib.addToResearch(jizhuangxieqi2, {
        parent: CTBlocks.unloader.name,
    });
    lib.addToResearch(jizhuangxieqi22, {
        parent: jizhuangxieqi2.name,
    });
    lib.addToResearch(jizhuangxieqi31, {
        parent: jizhuangxieqi2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps199),//扭曲-油田
        ),
    });

    lib.addToResearch(jizhuangxieqi4, {
        parent: jizhuangxieqi22.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps152),//扭曲-风吹
        ),
    });
    lib.addToResearch(yetiUnloader, {
        parent: CTBlocks.unloader.name,
    });
    //墙 防御设施
    lib.addToResearch(qian1, {
        parent: CTBlocks.copperWall.name,
    });
    lib.addToResearch(qian2, {
        parent: qian1.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(frozenForest),//冰冻森林
        )
    });
    lib.addToResearch(qian3, {
        parent: qian2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(craters),//陨石带
        )
    });
    lib.addToResearch(tong3, {
        parent: CTBlocks.copperWallLarge.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(frozenForest),//冰冻森林
        )
    });
    lib.addToResearch(tai3, {
        parent: CTBlocks.titaniumWallLarge.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(stainedMountains),//绵延群山
        )
    });
    lib.addToResearch(tu3, {
        parent: CTBlocks.thoriumWallLarge.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(overgrowth),//增生区
        )
    });
    lib.addToResearch(sugang3, {
        parent: CTBlocks.plastaniumWallLarge.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(saltFlats),//盐碱荒滩
            new Objectives.SectorComplete(coastline),//边际海湾
        )

    });
    lib.addToResearch(hejin3, {
        parent: CTBlocks.surgeWallLarge.name,
    });

    lib.addToResearch(PowerWall1, {
        parent: tong3.name,
    });
    lib.addToResearch(PowerWall2, {
        parent: PowerWall1.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//油田
        )
    });
    lib.addToResearch(PowerWall3, {
        parent: PowerWall2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps267),//占领L方阵
        ),
    });
    lib.addToResearch(moli1, {
        parent: hejin3.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(impact0078),//冲击区0078
        )
    });
    lib.addToResearch(moli2, {
        parent: moli1.name,
    });
    lib.addToResearch(hunhe3, {
        parent: moli2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps193),//占领-
        ),
    });
    lib.addToResearch(hunhe4, {
        parent: hunhe3.name,
    });
    lib.addToResearch(shenwei, {
        parent: hunhe4.name,
    });
    lib.addToResearch(qiang, {
        parent: hunhe4.name,
        requirements: ItemStack.with(
            guijingti, 20000 / 4 * 200,
            jinhuiboli, 150000,
        ),
    });
    //-----------------------
    lib.addToResearch(FangKong, {
        parent: CTBlocks.lancer.name,
    });
    lib.addToResearch(DianHu, {
        parent: FangKong.name,
    });
    lib.addToResearch(DianHu2, {
        parent: FangKong.name,
    });
    lib.addToResearch(healere, {
        parent: CTBlocks.mendProjector.name,
    });
    lib.addToResearch(JueWang, {
        parent: CTBlocks.fuse.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(nuclearComplex),//占领核列阵解锁
        ),
    });
    lib.addToResearch(kuoshan, {
        parent: JueWang.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps44),//占领-三相
        ),
    });
    lib.addToResearch(BuHuo, {
        parent: CTBlocks.parallax.name,
    });
    lib.addToResearch(LanJie, {
        parent: CTBlocks.segment.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps127),//占领-魔鬼三角区
        ),
    });
    lib.addToResearch(lieguang, {//裂光
        parent: CTBlocks.lancer.name,
    });
    lib.addToResearch(PenHuo, {//喷火器
        parent: CTBlocks.scorch.name,
    });
    lib.addToResearch(ZhengFu, {//征服
        parent: CTBlocks.ripple.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps267),//占领L方阵
        ),
    });
    lib.addToResearch(ZhengYi, {//正义
        parent: CTBlocks.ripple.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps267),//占领L方阵
        ),
    });
    lib.addToResearch(bawang, {//霸王
        parent: CTBlocks.ripple.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps152),//占领-扭曲风吹群岛
        ),
    });
    lib.addToResearch(huasha, {//花洒
        parent: CTBlocks.wave.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps76),//占领热融解锁
        ),
    });
    lib.addToResearch(ronghui3, {//审判
        parent: CTBlocks.meltdown.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps155),//占领-
        ),
    });

    lib.addToResearch(youling3, {//恶灵/幽灵3
        parent: CTBlocks.spectre.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps53),//占领- 恶灵
        ),
    });
    lib.addToResearch(langyong2, {//浪潮/浪涌2
        parent: CTBlocks.ripple.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps168),//占领-浪潮
        ),
    });

    lib.addToResearch(ronghui2, {//天煞
        parent: ronghui3.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps237),//占领-
        ),
    });
    lib.addToResearch(yunyu, {//韵语
        parent: ronghui2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps44),//占领-三相
        ),
    });
    lib.addToResearch(ronghui4, {//天谴
        parent: ronghui2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(desolateRift),//占领-荒芜裂谷
        ),
        requirements: ItemStack.with(
            Items.lead, 150000,
            Items.copper, 120000,
            guijingti, 215000,
            weijing5, 2,
            monengjing3, 3,
            JHhejin, 5000,
            weijing4, 3000
        )
    });
    lib.addToResearch(Acker, {//艾克尔
        parent: ronghui4.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps198),//占领-硬茬
            new Objectives.Research(chuangshilizi),//研究资源 上帝粒子
        ),
        requirements: ItemStack.with(
            zuanjing, 45000 / 4 * 200,
            weijing2, 1500 / 4 * 100,
            weijing4, 10000,
            weijing5, 70,
            monengjing3, 30,
            jinhuiboli, 450 / 4 * 130,
            taihejin, 700 / 4 * 200,
            shimoxi, 450 / 4 * 300,
            guijingti, 100000 / 4 * 200,
        )
    });
    lib.addToResearch(youling2, {//冥王
        parent: CTBlocks.spectre.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps237),//占领-
        ),
    });
    lib.addToResearch(zongjipao, {
        parent: CTBlocks.foreshadow.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps52),//占领-
        ),
    });
    lib.addToResearch(zongjipao2, {
        parent: zongjipao.name,
        requirements: ItemStack.with(
            jingliantai, 2600 / 4 * 200,
            jinhuiboli, 5000,
            guijingti, 4300 / 4 * 200,
            monengjing1, 550 / 4 * 200,
            weijing3, 30 / 4 * 200,
            weijing4, 100 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps62),//占领-三花聚顶
        ),
    });


    //------------------------------
    lib.addToResearch(CTBlocks.illuminator, {
        parent: CTBlocks.siliconSmelter.name,
    });
    lib.addToResearch(deng, {
        parent: CTBlocks.illuminator.name,
    });
    lib.addToResearch(hudun2, {
        parent: CTBlocks.forceProjector.name,
        requirements: ItemStack.with(
            Items.titanium, 150 / 4 * 200,
            weijing1, 20 / 4 * 200,
            guijingti, 190 / 4 * 200,
            shimoxi, 170 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.Research(jiweijinggongchang1)//研究微晶1工厂
        ),
    });
    lib.addToResearch(hudun3, {
        parent: hudun2.name,
        requirements: ItemStack.with(
            Items.titanium, 150 / 4 * 200,
            weijing2, 20 / 4 * 200,
            guijingti, 190 / 4 * 200,
            shimoxi, 180 / 4 * 200,
            monengjing1, 15 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps260),//占领-
        ),

    });
    lib.addToResearch(jiasu3, {//1级微晶超速
        parent: CTBlocks.overdriveDome.name,
        requirements: ItemStack.with(
            shimoxi, 120 / 4 * 200,
            guijingti, 50 / 4 * 200,
            weijing1, 50 / 4 * 200,
            jin, 40 / 4 * 200,
            Items.titanium, 20 / 4 * 200,
            Items.surgeAlloy, 70 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps258),//占领-
        ),

    });
    lib.addToResearch(jiasu4, {//2级微晶超速
        parent: jiasu3.name,
        requirements: ItemStack.with(
            shimoxi, 320 / 4 * 200,
            guijingti, 250 / 4 * 200,
            weijing2, 50 / 4 * 200,
            jin, 40 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
        ),
    });
    lib.addToResearch(jiasu5, {//3级微晶超速
        parent: jiasu4.name,
        requirements: ItemStack.with(
            shimoxi, 850 / 4 * 200,
            guijingti, 340 / 4 * 200,
            weijing3, 20 / 4 * 200,
            weijing2, 80 / 4 * 200,
            jin, 240 / 4 * 200,
            Items.titanium, 180 / 4 * 200,

        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps62),//占领-三花聚顶
        ),

    });
    lib.addToResearch(jiasu6, {//迷你加速
        parent: jiasu4.name,
        requirements: ItemStack.with(
            shimoxi, 55 / 4 * 200,
            guijingti, 120 / 4 * 200,
            weijing3, 30 / 4 * 200,
            weijing2, 150 / 4 * 200,
            jin, 200 / 4 * 200,
            monengjing1, 80 / 4 * 200,

        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps62),//占领-三花聚顶
        ),

    });
    lib.addToResearch(chaojijiasuyi, {//超级迷你加速
        parent: jiasu6.name,
        requirements: ItemStack.with(
            shimoxi, 150 / 4 * 200,
            guijingti, 1200 / 4 * 200,
            weijing4, 50 / 4 * 200,
            monengjing3, 10,
            zuanjing, 70 / 4 * 200,

        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps232),//占领-终极战役2-黄昏与黎明
        ),
    });
    lib.addToResearch(jianzaota, {//建造塔
        parent: CTBlocks.mendProjector.name,
    });
    lib.addToResearch(jianzaota2, {//建造塔2
        parent: jianzaota.name,
    });
    lib.addToResearch(xiuli1, {//修理
        parent: CTBlocks.mendProjector.name,
        requirements: ItemStack.with(
            Items.copper, 300 / 4 * 200,
            Items.lead, 300 / 4 * 200,
            Items.phaseFabric, 60 / 4 * 200,
            weijing2, 33 / 4 * 200,
            guijingti, 430 / 4 * 200,
            shimoxi, 750 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.Research(jiweijinggongchang2)//研究微晶2工厂
        ),
    });
    lib.addToResearch(xiuli2, {//全图大范围修理器
        parent: CTBlocks.mendProjector.name,
        requirements: ItemStack.with(
            Items.copper, 2000 / 4 * 200,
            Items.lead, 2500 / 4 * 200,
            Items.phaseFabric, 150 / 4 * 200,
            weijing2, 50 / 4 * 200,
            guijingti, 200 / 4 * 200,
            shimoxi, 500 / 4 * 200,
            jin, 150 / 4 * 200,
        ),
        objectives: Seq.with(
            new Objectives.Research(xiuli1)
        ),
    });
    lib.addToResearch(fashetai, {//大型发射台
        parent: "fashetai0",
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps52),//占领-资源分配区-2
        ),
    });
    CTBlocks.interplanetaryAccelerator.requirements = ItemStack.with(
        Items.copper, 16000,
        Items.silicon, 11000,
        Items.thorium, 13000,
        Items.titanium, 12000,
        Items.surgeAlloy, 6000,
        Items.phaseFabric, 5000,
        chuangshizhixing, 1,
    );
    CTBlocks.interplanetaryAccelerator.buildVisibility = BuildVisibility.shown;
    lib.addToResearch(CTBlocks.interplanetaryAccelerator, {//行星发射终端 方块
        //parent: fashetai.name,
        parent: "fashetai",
        requirements: ItemStack.with(
            Items.copper, 16000 * 1.8 / 4 * 200,
            Items.silicon, 11000 * 1.8 / 4 * 200,
            Items.thorium, 13000 * 1.8 / 4 * 200,
            Items.titanium, 12000 * 1.8 / 4 * 200,
            Items.surgeAlloy, 6000 * 1.8 / 4 * 200,
            Items.phaseFabric, 5000 * 1.8 / 4 * 200
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps198),//硬核
            //  new Objectives.Research(invincible2)//
        )
    });
    //钻头

    lib.addToResearch(weijingzuantou1, {
        parent: CTBlocks.blastDrill.name,
    });
    lib.addToResearch(weijingzuantou2, {
        parent: weijingzuantou1.name,
    });
    lib.addToResearch(junengzuantou, {//聚能钻头
        parent: weijingzuantou2.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps230),//占领-强攻
        ),
    });
    lib.addToResearch(junengzuantou2, {//高级聚能钻头
        parent: junengzuantou.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps225),// 克鲁苏遗址
        ),
        requirements: ItemStack.with(
            taihejin, 120 / 4 * 200,
            JHhejin, 50 / 4 * 200,
            weijing5, 20,
            zuanjing, 2000 / 4 * 200,
            monengjing2, 1800,
            guijingti, 700 / 4 * 200,
        ),
    });

    

    lib.addToResearch(zuantou, {
        parent: junengzuantou.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps127),//占领-魔鬼三角区
        ),
        requirements: ItemStack.with(
            Items.lead, 75000,
            weijing4, 40,
            zuanjing, 124000,
            monengjing2, 650,
            guijingti, 300000
        ),
    });

    lib.addToResearch(weijingzuantou3, {
        parent: junengzuantou.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps234),//占领-
        ),
    });
    lib.addToResearch(pobiji, {
        parent: weijingzuantou3.name,
        requirements: ItemStack.with(
            Items.copper, 150 * 200,
            Items.lead, 120 * 200,
            zuanjing, 360 * 200,
            monengjing3, 30,
        ),
    });

    lib.addToResearch(shiyou, {//微晶石油钻井
        parent: CTBlocks.oilExtractor.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(impact0078),//占领-冲击区
        ),

    });
    lib.addToResearch(suanzhuanjing, {//酸钻井
        parent: CTBlocks.oilExtractor.name,
        objectives: Seq.with(
            new Objectives.Research(zhisuanji),
            new Objectives.SectorComplete(Maps72),//占领-酸腐地
        )
    });
    lib.addToResearch(sui, {
        parent: CTBlocks.waterExtractor.name,
    });
    lib.addToResearch(sui2, {
        parent: sui.name,
    });
    lib.addToResearch(sui3, {
        parent: sui2.name,
    });
    lib.addToResearch(sui4, {
        parent: sui3.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps243),//占领-冰海堰
        ),
    });
    //电力
    lib.addToResearch(dianxiangan, {
        parent: CTBlocks.powerNodeLarge.name,
    });
    lib.addToResearch(nengliangta, {
        parent: CTBlocks.surgeTower.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps72),//占领-占领-酸腐地
        ),

    });
    lib.addToResearch(nengliangta2, {
        parent: nengliangta.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps72),//占领-占领-酸腐地
        ),
    });
    lib.addToResearch(CP2Link, {//十字节点
        parent: nengliangta.name,
    });
    lib.addToResearch(lichangjiedian, {//力场节点
        parent: CP2Link.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps196),//占领-占领-磁暴区
        ),
    });
    lib.addToResearch(lichangjiedian2, {//力场节点大
        parent: lichangjiedian.name,
    });

    lib.addToResearch(jidianchi3, {
        parent: CTBlocks.batteryLarge.name,
    });
    lib.addToResearch(jitaiyangneng3, {
        parent: CTBlocks.largeSolarPanel.name,
    });
    lib.addToResearch(jitaiyangneng4, {
        parent: jitaiyangneng3.name,
    });
    lib.addToResearch(jitaiyangneng5, {//超级太阳能
        parent: jitaiyangneng4.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps198),//占领-
        ),

        requirements: ItemStack.with(
            shimoxi, 6000 / 4 * 200,
            weijing2, 24000,
            guijingti, 4500 / 4 * 200,
            tanban, 300000,
            jinhuiboli, 180000,
            weijing5, 1,
        ),
    });
    lib.addToResearch(gaojidirefadianji, {
        parent: CTBlocks.thermalGenerator.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps262),//占领-雪痕
        ),

    });
    lib.addToResearch(shuilifadianji, {
        parent: CTBlocks.steamGenerator.name,
    });
    lib.addToResearch(shiyoufadianji, {
        parent: CTBlocks.differentialGenerator.name,
    });
    lib.addToResearch(yanjiangfadianji, {
        parent: CTBlocks.differentialGenerator.name,
    });
    lib.addToResearch(gaoxiaowolunfadianji, {
        parent: CTBlocks.steamGenerator.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps159),//占领极圈
        ),
    });
    lib.addToResearch(molichongjifadianji, {
        parent: CTBlocks.impactReactor.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps288),//占领-
        ),
    }); CTBlocks.impactReactor.liquidCapacity = 45;
    lib.addToResearch(molizhifanyingdui, {
        parent: CTBlocks.thoriumReactor.name,
    });
    lib.addToResearch(monengfanyingdui, {
        parent: molizhifanyingdui.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps61),//占领-
        ),

    });
    lib.addToResearch(juhechongji, {
        parent: molichongjifadianji.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps147),//占领-资源分配区-3
        ),

    });
    //工厂

    lib.addToResearch(shiyingronglu, {
        parent: CTBlocks.graphitePress.name,

    });
    lib.addToResearch(lajixiang, {//垃圾箱 焚化炉
        parent: CTBlocks.incinerator.name,
    });
    lib.addToResearch(guijingtichengxingji, {
        parent: CTBlocks.siliconSmelter.name,

    });
    lib.addToResearch(guilu, {
        parent: CTBlocks.siliconCrucible.name,

    });
    lib.addToResearch(guijingtihechengji, {
        parent: guijingtichengxingji.name,


    });
    lib.addToResearch(guijingtigongchang, {
        parent: guijingtihechengji.name,

    });
    lib.addToResearch(shimoxiji, {
        parent: CTBlocks.graphitePress.name,

    });
    lib.addToResearch(fensuiji, {
        parent: CTBlocks.pulverizer.name,
        requirements: ItemStack.with(
            Items.silicon, 225 / 4 * 200,
            Items.titanium, 80 / 4 * 200,
            Items.surgeAlloy, 20 / 4 * 200,
            zijing1, 10 / 4 * 200,
            guijingti, 30 / 4 * 200,

        )
    });

    lib.addToResearch(xitilianji, {
        parent: guijingtichengxingji.name,
    });

    lib.addToResearch(hejinboliji, {
        parent: CTBlocks.kiln.name,
    });
    lib.addToResearch(jinhuiboliji, {
        parent: hejinboliji.name,
    });
    lib.addToResearch(oiljinglianchang, {
        parent: CTBlocks.sporePress.name,
    });
    lib.addToResearch(budingjiagongchang, {
        parent: guijingtichengxingji.name,
    });
    lib.addToResearch(budingjiagongchang2, {
        parent: budingjiagongchang.name,
    });
    lib.addToResearch(jinfentilianji, {
        parent: shimoxiji.name,
    });
    lib.addToResearch(jinchengxingji, {
        parent: jinfentilianji.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps111),//弯口
        ),
    });
    lib.addToResearch(zijinggongchang, {
        parent: jinchengxingji.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(coastline),//边际海湾
        ),
    });
    lib.addToResearch(zijingronglianji, {
        parent: zijinggongchang.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps87),//奇异空间
        ),
    });
    lib.addToResearch(jinchengxingji2, {
        parent: jinchengxingji.name,
    });
    lib.addToResearch(taihejinji, {
        parent: zijinggongchang.name,
    });
    lib.addToResearch(jinhuiyasuoji, {
        parent: taihejinji.name,
    });
    lib.addToResearch(jinhuiyeji, {
        parent: jinhuiyasuoji.name,
    });
    lib.addToResearch(jiweijinggongchang1, {
        parent: zijinggongchang.name,
    });
    lib.addToResearch(jiweijinggongchang1, {
        parent: zijinggongchang.name,
    });
    lib.addToResearch(jiweijinggongchang2, {
        parent: jiweijinggongchang1.name,
    });
    lib.addToResearch(jiweijinggongchang3, {
        parent: jiweijinggongchang2.name,
    });
    lib.addToResearch(jiweijinggongchang4, {
        parent: jiweijinggongchang3.name,
    });
    
    lib.addToResearch(weijingxilianji4, {
        parent: jiweijinggongchang4.name,
        objectives: Seq.with(
            new Objectives.Research(zuantou)//研究强化钻头
        ),
    });

    lib.addToResearch(jiweijinggongchang5, {
        parent: jiweijinggongchang4.name,
    });
    lib.addToResearch(weijingfenjieji, {
        parent: jiweijinggongchang4.name,
    });

    lib.addToResearch(jiweijinggongchang21, {
        parent: jiweijinggongchang2.name,
    });
    lib.addToResearch(liziduizhuangji, {
        parent: jiweijinggongchang5.name,
        requirements: ItemStack.with(
            weijing5, 8/4*200,
            monengjing, 120/4*200,
            zijing1, 2650/4*200,
            zuanjing, 3400/4*200,
            jinhuiboli, 3200
        ),
    });
    lib.addToResearch(duochonbuji2, {
        parent: CTBlocks.phaseWeaver.name,
    });
    lib.addToResearch(duochonbuji3, {
        parent: duochonbuji2.name,
    });
    lib.addToResearch(duochongsugangji, {
        parent: CTBlocks.plastaniumCompressor.name,
    });
    lib.addToResearch(moliyeshoujiqi1, {
        parent: jinchengxingji.name,
        requirements: ItemStack.with(
            Items.plastanium, 26 / 4 * 210,
            Items.titanium, 44 / 4 * 210,
            jin, 80 / 4 * 210,
        ),
        objectives: Seq.with(
            new Objectives.SectorComplete(navalFortress),//海军要塞
        ),
    });
    lib.addToResearch(moliyeshoujiqi2, {
        parent: moliyeshoujiqi1.name,
        requirements: ItemStack.with(
            Items.plastanium, 90 / 4 * 210,
            Items.titanium, 112 / 4 * 210,
            weijing2, 20 / 4 * 210,
            zijing1, 150 / 4 * 210,
        ),
    });
    lib.addToResearch(wenshiqi, {
        parent: moliyeshoujiqi1.name,
    });
    lib.addToResearch(zhiwujingyoutilianji, {
        parent: wenshiqi.name,
        requirements: ItemStack.with(
            Items.copper, 222 / 4 * 210,
            Items.lead, 233 / 4 * 210,
            Items.plastanium, 88 / 4 * 210,
            Items.titanium, 155 / 4 * 210,
            guijingti, 44 / 4 * 210,
            shimoxi, 22 / 4 * 210,
        ),
    });
    lib.addToResearch(zhiwudaosuiji, {
        parent: wenshiqi.name,
        requirements: ItemStack.with(
            Items.lead, 25 / 4 * 210,
            guijingti, 60 / 4 * 210,
            jingliantai, 75 / 4 * 210,
            jin, 15 / 4 * 210,
        ),
    });
    lib.addToResearch(meitantiliangongchang, {
        parent: wenshiqi.name,
        requirements: ItemStack.with(
            zuanjing, 20 / 4 * 200,
            molizhi, 30 / 4 * 200,
            Items.titanium, 125 / 4 * 210,
            Items.graphite, 80 / 4 * 210,
        ),
    });
    lib.addToResearch(zhiwucuiqugongchang, {
        parent: zhiwudaosuiji.name,
        requirements: ItemStack.with(
            guijingti, 55 / 4 * 200,
            jin, 30 / 4 * 200,
            Items.plastanium, 40 / 4 * 210,
            Items.metaglass, 35 / 4 * 210,
        ),
    });
    lib.addToResearch(zhiwucuiqugongchang2, {
        parent: zhiwucuiqugongchang.name,
        requirements: ItemStack.with(
            guijingti, 155 / 4 * 200,
            jin, 70 / 4 * 200,
            weijing1, 40 / 4 * 200,
            hejinboli, 45 / 4 * 200,
            Items.metaglass, 150 / 4 * 210,
        ),
    });
    lib.addToResearch(zhiwujingyoutiquji, {
        parent: zhiwucuiqugongchang.name,
    });
    lib.addToResearch(zhisuanji, {
        parent: zhiwujingyoutiquji.name,
    });
    lib.addToResearch(feiliaoji, {
        parent: guijingtichengxingji.name,
    });
    lib.addToResearch(zhuanhuantai, {
        parent: feiliaoji.name,
    });
    lib.addToResearch(zizhuanTu, {
        parent: feiliaoji.name,
    });
    lib.addToResearch(tanbanyasuoji, {
        parent: guijingtichengxingji.name,
    });
    lib.addToResearch(zuanjingjiagongchang, {
        parent: tanbanyasuoji.name,
    });
    lib.addToResearch(tanbanyasuoji2, {
        parent: zuanjingjiagongchang.name,
    });
    lib.addToResearch(zuanshiyasuoji, {
        parent: zuanjingjiagongchang.name,
    });
    lib.addToResearch(zuankuangjiagongchang, {
        parent: zuanjingjiagongchang.name,
    });
    lib.addToResearch(gaojipeiyangji, {
        parent: CTBlocks.cultivator.name,
    });

    lib.addToResearch(molishizhizaoqi, {
        parent: zijinggongchang.name,
    });
    lib.addToResearch(monengjingdamoji0, {
        parent: molishizhizaoqi.name,
    });
    lib.addToResearch(jimonengjinglianzhiqi1, {
        parent: monengjingdamoji0.name,
    });
    lib.addToResearch(jimonengjinglianzhiqi2, {
        parent: jimonengjinglianzhiqi1.name,
    });
    lib.addToResearch(jimonengjinglianzhiqi3, {
        parent: jimonengjinglianzhiqi2.name,
    });
    lib.addToResearch(jimonengjinglianzhiqi4, {
        parent: jimonengjinglianzhiqi3.name,
    });
    lib.addToResearch(hejin2, {
        parent: CTBlocks.surgeSmelter.name,
    });
    lib.addToResearch(luzhayasuoji, {
        parent: CTBlocks.multiPress.name,
    });
    lib.addToResearch(jitilianji3, {
        parent: CTBlocks.disassembler.name,
    });
    lib.addToResearch(jitilianjimoliyetilianji, {
        parent: jitilianji3.name,
    });
    lib.addToResearch(jitilianji4, {
        parent: jitilianji3.name,
    });
    lib.addToResearch(xiaofentilianji, {
        parent: zijinggongchang.name,
    });
    lib.addToResearch(zhayaozhizaoji, {
        parent: xiaofentilianji.name,
    });
    lib.addToResearch(jhgtbzwj, {
        parent: zhayaozhizaoji.name,
    });
    lib.addToResearch(qianghuaronglu, {
        parent: CTBlocks.melter.name,
    });
    lib.addToResearch(lengdongyehunheji, {
        parent: CTBlocks.cryofluidMixer.name,
        objectives: Seq.with(
            new Objectives.Research(jiweijinggongchang1)//研究微晶1工厂
        ),
    });
    lib.addToResearch(moliyehunheji, {
        parent: molishizhizaoqi.name,
    });
    lib.addToResearch(molijinghuatilianji, {
        parent: jimonengjinglianzhiqi1.name,
        requirements: ItemStack.with(
            hejinboli, 130 / 4 * 200,
            zuanjing, 150 / 4 * 200,
            monengjing1, 30 / 4 * 200,
            guijingti, 420 / 4 * 200,
        ),
    });
    lib.addToResearch(liziyeji, {
        parent: molijinghuatilianji.name,
        requirements: ItemStack.with(
            Items.metaglass, 100 / 4 * 200,
            hejinboli, 160 / 4 * 200,
            zuanjing, 20 / 4 * 200,
            weijing3, 3,
            weijing2, 60 / 4 * 200,
            jingliantai, 350 / 4 * 200,
        ),
    });
    lib.addToResearch(qiangxiaolengqueyehunheji, {
        parent: liziyeji.name,
        requirements: ItemStack.with(
            hejinboli, 250 / 4 * 200,
            zuanjing, 180 / 4 * 200,
            weijing3, 50 / 4 * 200,
            monengjing2, 15 / 4 * 200,
            jingliantai, 310 / 4 * 200,
            jin, 222 / 4 * 200,

        ),
    });
    lib.addToResearch(yuanwanjinghuaji, {
        parent: liziyeji.name,
    });
    lib.addToResearch(chuangshiji, {
        parent: liziduizhuangji.name,
    });
    lib.addToResearch(chuangxingjiexiyi, {
        parent: chuangshiji.name,
    });
    lib.addToResearch(chuangshiyujie, {
        parent: chuangxingjiexiyi.name,
        requirements: ItemStack.with(
            monengjing2, 15 / 4 * 200,
            zuanjing, 60 / 4 * 200,
            weijing5, 15,
            jin, 300 / 4 * 200,
        ),
    });
    lib.addToResearch(jinbigongcang, {
        parent: jinchengxingji2.name,
    });




    lib.addToResearch(jidianchi4, {
        parent: jidianchi3.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//占领-焦油田
        ),
    });//4级电池
    lib.addToResearch(weichenshoujiqi, { parent: jiweijinggongchang1.name, });//微子搜集

    lib.addToResearch(chuangshizhishen, {//棺材
        parent: chuangshiyujie.name, requirements: ItemStack.with(
            Items.copper, 4000 / 4 * 200,
            Items.lead, 2500 / 4 * 200,
            JHhejin, 50 / 4 * 120,
            jin, 330 / 4 * 200,
            guijingti, 1720 / 4 * 200,
            shimoxi, 630 / 4 * 200,
            monengjing3, 50,
            weijing5, 80,
            jin, 5070 / 4 * 200,
        ), objectives: Seq.with(
            new Objectives.SectorComplete(Maps27),//占领-神与神
        ),
    });

    lib.addToResearch(wupinyuan, {//物品源
        parent: chuangshizhishen.name,
        requirements: ItemStack.with(
        ), 
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps27),//占领-神与神
            new Objectives.Research(chuangshizhishen)//研究棺材
        )
    });
    lib.addToResearch(jiasuyi, {//加移速仪
        parent: CTBlocks.groundFactory.name,
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps72),//占领-酸腐地
        ),
    });
    lib.addToResearch(choujiangji, { parent: jinbigongcang.name, });//抽奖机

    lib.addToResearch(CTBlocks.microProcessor, { parent: CTBlocks.siliconSmelter.name, });//原版小逻辑器
    lib.addToResearch(CTBlocks.switchBlock, { parent: CTBlocks.microProcessor.name, });//原版开关
    lib.addToResearch(CTBlocks.logicProcessor, { parent: CTBlocks.switchBlock.name, });//原版逻辑器
    lib.addToResearch(CTBlocks.hyperProcessor, { parent: CTBlocks.logicProcessor.name, });//原版逻大辑器
    lib.addToResearch(CTBlocks.hyperProcessor2, { parent: CTBlocks.hyperProcessor.name, });//模组大辑器
    lib.addToResearch(CTBlocks.message, { parent: CTBlocks.switchBlock.name, });//原版信息板
    lib.addToResearch(CTBlocks.largeLogicDisplay, { parent: CTBlocks.message.name, });//原版显示器

    lib.addToResearch(CTBlocks.memoryCell, { parent: CTBlocks.message.name, });//原版小内存
    lib.addToResearch(CTBlocks.memoryBank, { parent: CTBlocks.memoryCell.name, });//原版大内存
    lib.addToResearch(display, { parent: CTBlocks.largeLogicDisplay.name, });//显示器


    lib.addToResearch(weixiudian, { parent: CTBlocks.repairPoint.name, });//单位维修点
    lib.addToResearch(zhiliaoyi, { parent: "weixiudian", });//治疗仪
    lib.addToResearch(jianshangyi, { parent: "zhiliaoyi", });//减伤仪
    lib.addToResearch(geshangyi, {
        parent: "jianshangyi",
        requirements: ItemStack.with(
            Items.copper, 4000 / 4 * 200,
            Items.lead, 2500 / 4 * 200,
            JHhejin, 50 / 4 * 120,
            jin, 300 / 4 * 200,
            guijingti, 1700 / 4 * 200,
            shimoxi, 600 / 4 * 200,
            weijing2, 210 / 4 * 200,
            weijing3, 140
        )
    });//割伤仪
    lib.addToResearch(xuwu, {//虚无
        parent: Acker.name,//艾克尔
        requirements: ItemStack.with(
            chuangshishenhun, 2000,
            jin, 1500,
        ),
    });

    //快速单位生产
    lib.addToResearch(origin_unitsT3, {
        parent: CTBlocks.multiplicativeReconstructor.name,
    });
    lib.addToResearch(origin_unitsT4, {
        parent: origin_unitsT3.name,
        objectives: Seq.with(
            new Objectives.Research(CTBlocks.exponentialReconstructor)
        )
    });
    lib.addToResearch(origin_unitsT5, {
        parent: origin_unitsT4.name,
        objectives: Seq.with(
            new Objectives.Research(CTBlocks.tetrativeReconstructor)
        )
    });
    lib.addToResearch(origin_unitsT6, {
        parent: origin_unitsT5.name,
        objectives: Seq.with(
            new Objectives.Research(unitGC2)
        )
    });
    lib.addToResearch(origin_unitsBB, {
        parent: CTBlocks.groundFactory.name,
    });
    lib.addToResearch(origin_unitsCC, {
        parent: origin_unitsBB.name,
    });


    lib.addToResearch(achievement, {
        parent: wupinyuan.name,
        requirements: ItemStack.with(
            medal1, 15,
            medal2, 15,
            nulls, 1,
        )
    });

    /*/////
    欢迎游玩创世神模组
    本模组的战役较难，不适合初次接触此游戏的玩家
    建议原版通关后对游戏有个了解后再玩本模组
    模组难点体现在：
    波次时间短
    地形复杂
    敌人强大
    建议多多发展后勤资源
    使用发射台来提供源源不断的资源
    -----------------------------------------
    另，本模组启用了模组白名单验证，旨在保证不被其他模组破坏平衡
    以及产生一些模组混合BUG
    如果需要加入白名单请加QQ群：289848516
    向作者提供，在经作者查验不会破坏平衡后加入白名单
    模组有以下例子（包含但不仅限于）会被拒绝：
    多（无限）核心，大数据（发电量很高，超速很高等），低建造材料（1铜/无建筑成本等），
    作弊行为（无敌，无限，地形破坏，离谱高攻击单位等）
    [red]如果你修改本模组任何数据请自己游玩，严禁把修改后的模组对外公开[]
    -----------------------------------------
    阅完后点击下一波正式开启游戏吧
    */
}));

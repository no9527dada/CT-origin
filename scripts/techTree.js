
const lib = require('lib')


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
    dabaoyedan, zhiwujingyou, jinglianlio, jinhuiboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, hejinboli
} = require('wupin');
const {
    oiljinglianchang, taihejinji, zuanshiyasuoji, jinhuiyasuoji, zhiwujingyoutilianji, zhiwujingyoutiquji, jinhuiyeji,
    xitilianji, zuankuangjiagongchang, meitantiliangongchang, zhiwudaosuiji, fensuiji, liuji,
    hejinboliji, jinhuiboliji,
    shiyingronglu,  guijingtichengxingji, guilu, guijingtihechengji, guijingtigongchang,
    shimoxiji, budingjiagongchang, budingjiagongchang2, jinfentilianji, jinchengxingji, jinchengxingji2,
    zijinggongchang, jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4,
    jiweijinggongchang5, weijingfenjieji, jiweijinggongchang21, liziduizhuangji,
    duochonbuji2, duochonbuji3, duochongsugangji, moliyeshoujiqi1, moliyeshoujiqi2, wenshiqi,
    zhiwucuiqugongchang, zhiwucuiqugongchang2, feiliaoji, zhuanhuantai, zizhuanTu, tanbanyasuoji, zuanjingjiagongchang,
    tanbanyasuoji2, gaojipeiyangji, molishizhizaoqi, monengjingdamoji0, jimonengjinglianzhiqi1, jimonengjinglianzhiqi2,
    jimonengjinglianzhiqi3, jimonengjinglianzhiqi4, hejin2, luzhayasuoji, jitilianji3, jitilianji4, jitilianjimoliyetilianji,
    xiaofentilianji, zhayaozhizaoji, jhgtbzwj, qianghuaronglu, lengdongyehunheji, moliyehunheji, molijinghuatilianji,
    liziyeji, yuanwanjinghuaji, qiangxiaolengqueyehunheji, chuangshiji, chuangxingjiexiyi, chuangshiyujie, jinbigongcang, weichenshoujiqi,
    chuangshizhishen, choujiangji, wupinyuan, testC, testA, fashetai0, fashetai,
} = require('Blocks/Blocks-factory');
const {lajixiang}=require('BlocksLibes/lajixiang')
const { xuwu } = require('BlocksLibes/xuwu');xuwu.consumes.power(3000000/60);xuwu.consumes.items(new ItemStack.with( chuangshishenhun,200,));
const {
    weicang, jicangku3, jicangku4, jicangku5, jicangku6, huanchongcang, csdq0, conveyor10,luyouqi2,lianjieqi2,
    conveyor11, conveyor12, jibaozhuangyunshudai2, conveyor2, conveyor21, conveyor3, conveyor31,dongcibeng,
    jibaozhuangyunshudai3, weixingzhiqu, zhiqu2, zhiqu3, conduit1, conduit11, conduit2, conduit21, dabaodai,
    csdq, daoguanqiao0, daoguanqiao, daxingchuyeguan, jizhuangxieqi0, jizhuangxieqi2, jizhuangxieqi3, yetiUnloader
} = require('Blocks/Blocks-ChuanShu');
const { wanxiangqiao } = require('BlocksLibes/wanxiangqiao');const { crouter } = require('BlocksLibes/luyouqi');//塑钢路由器
/************************************************************************ */
const {
    qian1, qian2, qian3, tong3, tai3, tu3, sugang3, hejin3, moli1, moli2, hunhe3, hunhe4, shenwei, qiang,
    jiasu3, jiasu4, jiasu5, jiasu6, chaojijiasuyi, deng, hudun2, hudun3, xiuli1, xiuli2, display, weixiudian,
    moweimen, xinxiban,bomb,
} = require('Blocks/Blocks-defense');
const { jiasu7 } = require('BlocksLibes/fanjiasu');
const { jiasu8 } = require('BlocksLibes/fanjiasu2');
const { zhiliaoyi } = require('BlocksLibes/zhiliaoyi');  
const { jianshangyi } = require('BlocksLibes/jianshangyi');
const { geshangyi } = require('BlocksLibes/geshangyi');
/********************************************************************** */
const {
    yingzhizuantou, weijingzuantou1, weijingzuantou2, junengzuantou, zuantou,
    weijingzuantou3, shiyou, sui, sui2, sui3, sui4,
} = require('Blocks/Blocks-drills');
const {
    DianHu, DianHu2, FangKong, healere, JueWang, BuHuo, LanJie, lieguang, ZhengFu, ZhengYi, bawang, ronghui3,
    ronghui2, youling2, ronghui4, zongjipao, zongjipao2, huasha,youling3,langyong2,
} = require('turrets/DC');require('wmod');//+++++++++++
const { PenHuo } = require('turrets/PenHuo');
const {
    dianxiangan, nengliangta, nengliangta2, jidianchi3, jitaiyangneng3, jitaiyangneng4, gaojidirefadianji,
    shuilifadianji, shiyoufadianji, yanjiangfadianji, gaoxiaowolunfadianji, molichongjifadianji, molizhifanyingdui,
    monengfanyingdui, juhechongji, jidianchi4, chongdianqi, fangdianqi,
} = require('Blocks/Blocks-power');
const { jitaiyangneng5 } = require("Blocks/chaojitaiyangneng");
const { chuansongmen } = require('BlocksLibes/portal');
const { CoreJiangLuo, WJcore, } = require('core');
const { unitGC1, unitGC2 } = require('units');//单位构造机

const { oct2 } = require('units/oct2');
const { T6rishi, T6sixing, T6tianxie, T6wangzuo, } = require('units/T6');//单位
//发射台修改：
Blocks.launchPad.alwaysUnlocked = true;
Blocks.launchPad.health = 450;
Blocks.launchPad.launchTime = 3000;
Blocks.launchPad.buildCostMultiplier = 2147483647;
Blocks.launchPad.canOverdrive = false;
Blocks.launchPad.itemCapacity = 1; 
Blocks.launchPad.consumes.power(0);
Blocks.launchPad.requirements = ItemStack.with();
Blocks.launchPad.category = Category.effect


// lib.addToResearch(Blocks.launchPad, {
//     parent: Blocks.launchPad.name,
// });


//    objectives: Seq.with(
//        new Objectives.SectorComplete(Maps我),//占领-
//    ),

const {
    Maps173, Maps189, Maps111, Maps104, Maps83, Maps214, Maps76, Maps159, Maps163, Maps267,
    Maps230,
    Maps127,
    Maps234,
    Maps243,
    Maps199,
    Maps89,
    Maps26,
    Maps90,
    Maps235,
    Maps262,
    Maps61,
    Maps53,
    Maps288,
    Maps72,
    Maps260,
    Maps258,
    Maps62,
    Maps197,
    Maps196,
    Maps110,
    Maps193,
    Maps147,
    Maps45,
    Maps237,
    Maps155,
    Maps152,
    Maps52,
    Maps168,
    Maps27,
    Maps44,
    Maps23,
    Maps87,
    Maps64,


} = require('maps');
/*
 * 
 * 
 * 
 * objectives: Seq.with(
    new Objectives.SectorComplete(Maps我),//占领解锁
),
 * /* 
objectives: Seq.with(
    new Objectives.Research(guijingtichengxingji)
),
 */
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps173, {//
        parent: 'core-shard',
    });
}));

Events.on(ContentInitEvent, cons(e => {// 占领后解锁硬质钻头
    lib.addToResearch(Maps189, {//遇袭
        parent: 'craters',//陨石带
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.craters),//占领陨石带
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {//占领解锁金机
    lib.addToResearch(Maps111, {//弯口 
        parent: 'extractionOutpost',//萃取前哨
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.extractionOutpost),//占领萃取前哨
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁霸王
    lib.addToResearch(Maps152, {//扭曲-风吹群岛
        parent: 'windsweptIslands',//风吹群岛
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.windsweptIslands),//占领风吹群岛
            new Objectives.SectorComplete(SectorPresets.desolateRift),//荒芜裂谷
            new Objectives.Research(ronghui2),//研究天煞
            new Objectives.Research(youling2)//研究冥王
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁核心定位装置
    lib.addToResearch(Maps104, {//资源分配区-1
        parent: 'overgrowth',//增生区
        objectives: Seq.with(
            new Objectives.Research(fashetai0)//研究发射台
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps45, {//核心转移教程
        parent: 'overgrowth',//
        objectives: Seq.with(
            new Objectives.Research(CoreJiangLuo)//研究核心定位装置
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {// 解锁石油+岩浆发电机
    lib.addToResearch(Maps83, {// 融合
        parent: 'windsweptIslands',//风吹群岛
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.windsweptIslands),//占领风吹群岛
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(SectorPresets.tarFields, {//原版油田
        parent: 'RongHe',//融合
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.windsweptIslands),
            new Objectives.Research(Blocks.coalCentrifuge),
            new Objectives.Research(Blocks.conduit),
            new Objectives.Research(Blocks.wave),
            new Objectives.SectorComplete(Maps83),//占领融合
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁微型质驱+万向液体桥
    lib.addToResearch(Maps214, {//落锤
        parent: 'frozenForest',//冰冻森林
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.stainedMountains),//占领绵延群山
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁花洒
    lib.addToResearch(Maps76, {//热融
        parent: 'biomassFacility',//生物质合成区
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.biomassFacility),//占领生物质合成区
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁高效涡轮
    lib.addToResearch(Maps159, {//极圈
        parent: 'tarFields',//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.tarFields),//占领油田
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁微晶传送带+传送桥+导管桥
    lib.addToResearch(Maps163, {//分岭
        parent: 'nuclearComplex',//核裂阵
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.nuclearComplex),//占领核裂阵
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁正义+征服
    lib.addToResearch(Maps267, {//L方阵
        parent: 'fungalPass',//真菌通道
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.fungalPass),//占领真菌通道
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁审判
    lib.addToResearch(Maps155, {//审判
        parent: 'ZY1',//资源分配区1
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps104),//占领资源分配区1
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//冥王与天煞
    lib.addToResearch(Maps237, {//
        parent: 'ZY1',//资源分配区1
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps104),//占领资源分配区1
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁高级地热
    lib.addToResearch(Maps262, {//雪痕
        parent: 'tarFields',//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.tarFields),//占领油田
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁抽冷冻液机
    lib.addToResearch(Maps243, {//冰海堰
        parent: 'coastline',//边际海湾
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.coastline),//占领边际海湾
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁聚能钻头
    lib.addToResearch(Maps230, {//强攻
        parent: 'WanKou',//
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps111),//占领弯口
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {////高级能量塔+超级能量塔+单位门
    lib.addToResearch(Maps72, {//腐酸地
        parent: 'saltFlats',//盐碱荒滩
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.navalFortress),//占领海军要塞
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁微晶超速2
    lib.addToResearch(Maps258, {//激流
        parent: 'navalFortress',//
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.saltFlats),//盐碱荒滩
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁电磁炮1和大型发射台
    lib.addToResearch(Maps52, {//资源分配区-2"
        parent: 'ZY1',//
        // objectives: Seq.with(
        //     new Objectives.SectorComplete(SectorPresets.desolateRift),//荒芜裂谷
        // )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁4级强化钻头+拦截
    lib.addToResearch(Maps127, {//魔鬼三角区
        parent: 'BingHaiYan',//
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps243),//冰海堰
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁魔能核电
    lib.addToResearch(Maps61, {//辐射区
        parent: 'JiQuan',//极圈
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps258),//占领激流
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁微晶超速3+迷你超速+电磁炮2
    lib.addToResearch(Maps62, {//三花聚顶
        parent: 'QiangGong',//强攻
            objectives: Seq.with(
            new Objectives.SectorComplete(Maps230),//占领强攻
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁虚灵单位工厂
    lib.addToResearch(Maps199, {//扭曲-油田
        parent: 'tarFields',//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(SectorPresets.tarFields),//占领油田
            new Objectives.Research(ronghui2)//研究天煞
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {////解锁聚合冲击发电
    lib.addToResearch(Maps288, {//行古道
        parent: 'FuSheQu',//辐射区
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps199),//占领扭曲-油田
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁恶灵
    lib.addToResearch(Maps53, {//解锁恶灵
        parent: 'nuclearComplex',//核裂阵
        objectives: Seq.with(
            new Objectives.Research(Blocks.spectre)//研究幽灵
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps168, {//浪潮
        parent: 'LFangZhen',//L方阵
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps267),//占领L方阵
            new Objectives.SectorComplete(Maps45),//占领核心转移
            new Objectives.Research(Blocks.spectre)//研究幽灵
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁阻电魔微墙
    lib.addToResearch(Maps193, {//双子域
        parent: 'FenLing',//分岭
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps163),//占领分岭
            new Objectives.Research(ronghui3),//研究审判
            new Objectives.Research(zongjipao),//研究电磁炮1
            new Objectives.Research(youling3),//研究恶灵
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁超级微晶护盾仪
    lib.addToResearch(Maps260, {//紫薇海
        parent: 'BingHaiYan',//冰海堰
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps258),//激流
            new Objectives.Research(dongcibeng)//研究动磁泵
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁超级钻头
    lib.addToResearch(Maps234, {//炎狱
        parent: 'ZiWeiHai',//紫薇海
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps260),//紫薇海
            new Objectives.SectorComplete(Maps152),//扭曲-风吹群岛
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁聚合冲击发电机
    lib.addToResearch(Maps147, {//资源分配区-3
        parent: 'ZY2',//
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps234),//炎狱
            new Objectives.SectorComplete(Maps288),//行古道
        )
    });
}));



























lib.addToResearch(T6rishi, {
    parent: 'eclipse',
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
    parent: 'reign',
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
    parent: 'toxopid',
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
    parent: 'corvus',
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
    parent: UnitTypes.oct.name,
    requirements: ItemStack.with(
        monengjing1, 32000,
        jin, 250000,
        weijing2, 35000,
        weijing3, 900,
        Items.surgeAlloy, 350000,
        shimoxi, 250000,
    ),
    // objectives: Seq.with(
    //     new Objectives.SectorComplete(SectorPresets.nuclearComplex),
    //     new Objectives.SectorComplete(SectorPresets.overgrowth),
    // )
});

lib.addToResearch(unitGC2, {//虚灵单位工厂
    parent: unitGC1.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps199),//占领-扭曲-油田
    ),
});

lib.addToResearch(WJcore, {//微晶核心
    parent: 'core-nucleus',// CoreJiangLuo.name,
    objectives: Seq.with(
        new Objectives.Research(SectorPresets.windsweptIslands)//占领风吹群岛
    ),
    // requirements: ItemStack.with(
    //     Items.copper, 150,
    // ),
});

lib.addToResearch(CoreJiangLuo, {//核心定位装置
    parent: 'core-shard',
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps104),//占领解锁
    ),
    // requirements: ItemStack.with(
    //     Items.copper, 150,
    // ),
});

Items.copper.alwaysUnlocked = false;//铜
Items.lead.alwaysUnlocked = false;//铅
Items.sand.alwaysUnlocked = false;//沙
Liquids.water.alwaysUnlocked = false;//水
Blocks.conveyor.alwaysUnlocked = false;//传送带
lib.addToResearch(Blocks.conveyor, {
    parent: 'core-shard',
    requirements: ItemStack.with(
        Items.copper, 100,
    ),

});
Blocks.router.alwaysUnlocked = false;//路由器
lib.addToResearch(Blocks.router, {
    parent: 'conveyor',
    requirements: ItemStack.with(
        Items.copper, 150,
    ),
});
Blocks.junction.alwaysUnlocked = false;//连接器
lib.addToResearch(Blocks.junction, {
    parent: 'router',
    requirements: ItemStack.with(
        Items.copper, 150,
    ),
});
Blocks.mechanicalDrill.alwaysUnlocked = false;//铜钻头
Blocks.mechanicalDrill.drillTime = 350;
lib.addToResearch(Blocks.mechanicalDrill, {
    parent: 'core-shard',
    requirements: ItemStack.with(
        Items.copper, 12 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.mechanicalPump, {//小泵
    parent: 'mechanical-drill',//
    requirements: ItemStack.with(
        Items.copper, 20 / 4 * 200,
        Items.lead, 25 / 4 * 200,
        Items.metaglass, 15 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.rotaryPump, {//中泵
    parent: 'mechanical-pump',//小泵
    requirements: ItemStack.with(
        Items.copper, 70 / 4 * 200,
        Items.lead, 80 / 4 * 200,
        Items.metaglass, 50 / 4 * 200,
        Items.titanium, 35 / 4 * 200,
        Items.silicon, 45 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.thermalPump, {//大泵
    parent: 'rotary-pump',//中泵
    requirements: ItemStack.with(
        Items.metaglass, 90 / 4 * 200,
        Items.lead, 80 / 4 * 200,
        Items.silicon, 30 / 4 * 200,
        Items.titanium, 40 / 4 * 200,
        Items.thorium, 35 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.conduit, {//导管
    parent: 'mechanical-pump',//小泵
    requirements: ItemStack.with(
        Items.metaglass, 150,
    ),

});
lib.addToResearch(Blocks.pulseConduit, {//钛导管
    parent: 'conduit',//导管
    requirements: ItemStack.with(
        Items.titanium, 150,
        Items.metaglass, 200,
    ),
    objectives: Seq.with(

        new Objectives.SectorComplete(SectorPresets.windsweptIslands),//风吹群岛
    )
});
lib.addToResearch(Blocks.platedConduit, {//钛导管+
    parent: 'pulse-conduit',//钛导管
    requirements: ItemStack.with(
        Items.titanium, 150,
        Items.metaglass, 200,
        Items.plastanium, 100,
    ),

});//'liquid-junction',//
lib.addToResearch(Blocks.liquidRouter, {//液体路由器
    parent: 'conduit',//导管
    requirements: ItemStack.with(
        Items.graphite, 4 / 4 * 200,
        Items.metaglass, 2 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.liquidJunction, {//液体交叉器
    parent: 'liquid-router',//液体路由器
    requirements: ItemStack.with(
        Items.graphite, 2 / 4 * 200,
        Items.metaglass, 2 / 4 * 200,

    ),

});
lib.addToResearch(Blocks.liquidContainer, {//小液体罐
    parent: 'liquid-router',//液体路由器
    requirements: ItemStack.with(
        Items.titanium, 10 / 4 * 200,
        Items.metaglass, 15 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.liquidTank, {//大液体罐
    parent: 'liquid-container',//小液体罐
    requirements: ItemStack.with(
        Items.titanium, 30 / 4 * 200,
        Items.metaglass, 40 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.bridgeConduit, {//导管桥
    parent: 'liquid-router',//液体路由器
    requirements: ItemStack.with(
        Items.graphite, 4 / 4 * 200,
        Items.metaglass, 8 / 4 * 200,
    ),

});
Blocks.graphitePress.craftTime = 50;
lib.addToResearch(Blocks.graphitePress, {//石墨机
    depth: 3,
    parent: 'core-shard',
    requirements: ItemStack.with(
        Items.copper, 75 / 4 * 200,
        Items.lead, 30 / 4 * 200,
    ),

});

lib.addToResearch(Blocks.siliconSmelter, {//硅机
    depth: 2,
    parent: 'graphite-press',//石墨机
    requirements: ItemStack.with(
        Items.copper, 30 / 4 * 200,
        Items.lead, 25 / 4 * 200,
        Items.graphite, 40 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.multiPress, {//大石墨机
    depth: 3,
    parent: 'silicon-smelter',//硅机
    requirements: ItemStack.with(
        Items.copper, 120 / 4 * 200,
        Items.lead, 90 / 4 * 200,
        Items.titanium, 100 / 4 * 200,
        Items.silicon, 35 / 4 * 200,
        Items.graphite, 180 / 4 * 200
    ),
});
lib.addToResearch(Blocks.siliconCrucible, {//大硅机
    parent: 'silicon-smelter',//硅机
    requirements: ItemStack.with(
        Items.copper, 180 / 4 * 200,
        Items.lead, 150 / 4 * 200,
        Items.titanium, 120 / 4 * 200,
        Items.metaglass, 80 / 4 * 200,
        Items.plastanium, 35 / 4 * 200,
        Items.silicon, 160
    ),

});
lib.addToResearch(Blocks.kiln, {//玻璃机
    parent: 'graphite-press',//石墨机
    requirements: ItemStack.with(
        Items.copper, 60 / 4 * 200,
        Items.lead, 35 / 4 * 200,
        Items.graphite, 30 / 4 * 200,
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.craters),//陨石带
    )
});
lib.addToResearch(Blocks.plastaniumCompressor, {//塑钢机
    parent: 'silicon-smelter',//硅机
    requirements: ItemStack.with(
        Items.copper, 145 / 4 * 200,
        Items.lead, 120 / 4 * 200,
        Items.graphite, 60 / 4 * 200,
        Items.silicon, 90 / 4 * 200,
        Items.titanium, 80 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.windsweptIslands),//风吹群岛
    )
});
lib.addToResearch(Blocks.phaseWeaver, {//布
    parent: 'plastanium-compressor',//塑钢
    requirements: ItemStack.with(
        Items.copper, 180 / 4 * 200,
        Items.lead, 130 / 4 * 200,
        Items.silicon, 135 / 4 * 200,
        Items.metaglass, 200 / 4 * 200,
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.tarFields),//油田
    )
});
lib.addToResearch(Blocks.phaseConduit, {//布导管桥
    parent: 'bridge-conduit',//导管桥
    requirements: ItemStack.with(
        Items.phaseFabric, 5 / 4 * 200,
        Items.silicon, 7 / 4 * 200,
        Items.metaglass, 20 / 4 * 200,
        Items.titanium, 10 / 4 * 200
    ),

});
lib.addToResearch(Blocks.surgeSmelter, {//巨浪合金机
    parent: 'plastanium-compressor',//塑钢
    requirements: ItemStack.with(
        Items.copper, 120 / 4 * 200,
        Items.lead, 80 / 4 * 200,
        Items.plastanium, 20 / 4 * 200,
        Items.phaseFabric, 15 / 4 * 200,
        Items.silicon, 80 / 4 * 200,
        Items.thorium, 70 / 4 * 200
    ),

});
lib.addToResearch(Blocks.pyratiteMixer, {//硫机
    parent: 'silicon-smelter',//硅机
    requirements: ItemStack.with(
        Items.copper, 50 / 4 * 200,
        Items.lead, 25 / 4 * 200,
        Items.coal, 60 / 4 * 200,
        Items.silicon, 45 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.blastMixer, {//爆混机
    parent: 'pyratite-mixer',//硫机
    requirements: ItemStack.with(
        Items.sporePod, 20 / 4 * 200,
        Items.titanium, 25 / 4 * 200,
        Items.pyratite, 35 / 4 * 200,
        Items.lead, 50 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.pulverizer, {//粉碎机
    parent: 'kiln',//玻璃机
    requirements: ItemStack.with(
        Items.copper, 30 / 4 * 200,
        Items.lead, 25 / 4 * 200,
        Items.graphite, 10 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.incinerator, {//焚烧炉
    parent: 'pulverizer',//粉碎机
    requirements: ItemStack.with(
        Items.graphite, 6 / 4 * 200,
        Items.lead, 16 / 4 * 200,
        Items.silicon, 12 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.melter, {//小熔炉
    parent: 'incinerator',//焚烧炉
    requirements: ItemStack.with(
        Items.copper, 30 / 4 * 200,
        Items.lead, 35 / 4 * 200,
        Items.graphite, 45 / 4 * 200
    ),

});
lib.addToResearch(Blocks.separator, {//分离机
    parent: 'melter',//小熔炉
    requirements: ItemStack.with(
        Items.copper, 30 / 4 * 200,
        Items.titanium, 25 / 4 * 200,
        Items.silicon, 35 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.disassembler, {//解离机
    parent: 'separator',//分离机
    requirements: ItemStack.with(
        Items.plastanium, 80 / 4 * 200,
        Items.titanium, 120 / 4 * 200,
        Items.silicon, 180 / 4 * 200,
        Items.thorium, 220 / 4 * 200,
    ),

});

lib.addToResearch(testC, { parent: Blocks.disassembler.name });
lib.addToResearch(testA, { parent: testC.name, });

lib.addToResearch(Blocks.cultivator, {//培养机
    parent: 'silicon-smelter',//
    requirements: ItemStack.with(
        Items.copper, 30 / 4 * 200,
        Items.lead, 25 / 4 * 200,
        Items.silicon, 20 / 4 * 200,
        Items.graphite, 25 / 4 * 200,
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.biomassFacility),//生物质合成区
    )
});
lib.addToResearch(Blocks.sporePress, {//孢子压缩机
    parent: 'silicon-smelter',//硅机
    requirements: ItemStack.with(
        Items.lead, 40 / 4 * 200,
        Items.graphite, 25 / 4 * 200,
        Items.silicon, 30 / 4 * 200,
        Items.sporePod, 20 / 4 * 200,
    ),

});

lib.addToResearch(Blocks.coalCentrifuge, {//煤炭离心机
    parent: 'spore-press',//孢子压缩机
    requirements: ItemStack.with(
        Items.copper, 50 / 4 * 200,
        Items.lead, 30 / 4 * 200,
        Items.titanium, 25 / 4 * 200,
        Items.graphite, 50 / 4 * 200,
        Items.silicon, 70 / 4 * 200,
    ),

});

Blocks.pneumaticDrill.drillTime = 180; //气动钻头
lib.addToResearch(Blocks.pneumaticDrill, {
    parent: 'mechanical-drill',//铜钻头
    requirements: ItemStack.with(
        Items.copper, 20 / 4 * 200,
        Items.lead, 15 / 4 * 200,
        Items.graphite, 10 / 4 * 200,
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.frozenForest),//冰冻森林
    )
});
Blocks.laserDrill.drillTime = 240;//激光钻头
lib.addToResearch(Blocks.laserDrill, {
    parent: 'pneumatic-drill',//气动钻头
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
Blocks.blastDrill.drillTime = 240;//爆破钻头
lib.addToResearch(Blocks.blastDrill, {
    parent: 'laser-drill',//激光钻头
    requirements: ItemStack.with(
        Items.copper, 65 / 4 * 200,
        Items.silicon, 60 / 4 * 200,
        Items.titanium, 50 / 4 * 200,
        Items.thorium, 75 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.windsweptIslands),//占领风吹群岛
    )
});
Blocks.waterExtractor.pumpAmount = 0.131;
lib.addToResearch(Blocks.waterExtractor, {//抽水机
    parent: 'pneumatic-drill',//气动钻头
    requirements: ItemStack.with(
        Items.metaglass, 30 / 4 * 200,
        Items.graphite, 45 / 4 * 200,
        Items.lead, 50 / 4 * 200,
        Items.copper, 35 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.saltFlats),//盐碱荒滩
    )
});
lib.addToResearch(Blocks.cryofluidMixer, {//冷冻液机
    parent: 'water-extractor',//抽水机
    requirements: ItemStack.with(
        Items.silicon, 50 / 4 * 200,
        Items.titanium, 60 / 4 * 200,
        Items.lead, 65 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.oilExtractor, {//石油钻井
    parent: 'water-extractor',//抽水机
    requirements: ItemStack.with(
        Items.copper, 150 / 4 * 200,
        Items.graphite, 175 / 4 * 200,
        Items.lead, 115 / 4 * 200,
        Items.thorium, 115 / 4 * 200,
        Items.silicon, 75 / 4 * 200
    ),

});
lib.addToResearch(Blocks.coreFoundation, {
    parent: 'core-shard',//
    requirements: ItemStack.with(
        Items.copper, 3000 / 4 * 200,
        Items.lead, 3000 / 4 * 200,
        Items.silicon, 2000 / 4 * 200
    ),

});
lib.addToResearch(Blocks.coreNucleus, {
    parent: 'core-foundation',//
    requirements: ItemStack.with(
        Items.copper, 8000 / 4 * 200,
        Items.lead, 8000 / 4 * 200,
        Items.silicon, 5000 / 4 * 200,
        Items.thorium, 4000 / 4 * 200
    ),

});
lib.addToResearch(jizhuangxieqi0, {
    parent: 'junction',//连接器
    //parent: Blocks.unloader.name,
});
lib.addToResearch(Blocks.unloader, {//装卸器
    parent: jizhuangxieqi0.name,
    requirements: ItemStack.with(
        Items.titanium, 25 / 4 * 200,
        Items.silicon, 30 / 4 * 200
    ),

});
lib.addToResearch(Blocks.container, {//容器
    parent: 'unloader',//
    requirements: ItemStack.with(
        Items.lead, 130 / 4 * 200,
        Items.titanium, 100 * 200,
    ),

});
lib.addToResearch(Blocks.vault, {//仓库
    parent: 'container',//
    requirements: ItemStack.with(
        Items.lead, 200 / 4 * 200,
        Items.titanium, 250 / 4 * 200,
        Items.thorium, 125 / 4 * 200,
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.stainedMountains),//绵延群山
    )
});
lib.addToResearch(Blocks.sorter, {//分类器
    parent: 'junction',//连接器
    requirements: ItemStack.with(
        Items.copper, 150,
        Items.lead, 120,
    ),

});
lib.addToResearch(Blocks.invertedSorter, {//反向分类器
    parent: 'sorter',//分类器
    requirements: ItemStack.with(
        Items.copper, 150,
        Items.lead, 120,
    ),

});
lib.addToResearch(Blocks.overflowGate, {//溢流门
    parent: 'sorter',//分类器
    requirements: ItemStack.with(
        Items.copper, 200,
        Items.lead, 120,
    ),

});
lib.addToResearch(Blocks.underflowGate, {//反向溢流门
    parent: 'overflow-gate',//溢流门
    requirements: ItemStack.with(
        Items.copper, 200,
        Items.lead, 120,
    ),

});
lib.addToResearch(Blocks.distributor, {//分配器
    parent: 'junction',//连接器
    requirements: ItemStack.with(
        Items.copper, 200,
        Items.lead, 120,
    ),

});
lib.addToResearch(Blocks.itemBridge, {//桥
    parent: 'junction',//连接器
    requirements: ItemStack.with(
        Items.copper, 350,
        Items.lead, 200,
    ),

});
lib.addToResearch(Blocks.titaniumConveyor, {//钛传送带
    parent: 'junction',//连接器
    requirements: ItemStack.with(
        Items.copper, 150,
        Items.lead, 120,
        Items.titanium, 100,
    ),

});
lib.addToResearch(Blocks.armoredConveyor, {//钛传送带+
    parent: 'titanium-conveyor',//钛传送带
    requirements: ItemStack.with(
        Items.plastanium, 100,
        Items.thorium, 150,
        Items.metaglass, 220
    ),

});
lib.addToResearch(Blocks.plastaniumConveyor, {//塑钢带
    parent: 'armored-conveyor',//
    requirements: ItemStack.with(
        Items.plastanium, 200,
        Items.silicon, 120,
        Items.graphite, 150
    ),

});
lib.addToResearch(Blocks.phaseConveyor, {//布桥
    parent: 'titanium-conveyor',//
    requirements: ItemStack.with(
        Items.phaseFabric, 5 / 4 * 200,
        Items.silicon, 7 / 4 * 200,
        Items.lead, 10 / 4 * 200,
        Items.graphite, 10 / 4 * 200
    ),

});
lib.addToResearch(Blocks.massDriver, {//质驱
    parent: 'phase-conveyor',//布桥
    requirements: ItemStack.with(
        Items.titanium, 125 / 4 * 200,
        Items.silicon, 75 / 4 * 200,
        Items.lead, 125 / 4 * 200,
        Items.thorium, 50 / 4 * 200
    ),

});
lib.addToResearch(Blocks.payloadPropulsionTower, {//荷载质驱
    parent: 'mass-driver',//质驱
    requirements: ItemStack.with(
        Items.thorium, 700 / 2 * 200,
        Items.silicon, 500 / 2 * 200,
        Items.plastanium, 200 / 2 * 200,
        Items.phaseFabric, 150 / 2 * 200
    ),

});
lib.addToResearch(Blocks.payloadConveyor, {//荷载传送带
    parent: 'titanium-conveyor',//钛传送带
    requirements: ItemStack.with(
        Items.graphite, 10 / 4 * 200,
        Items.lead, 10 / 4 * 200
    ),

});
lib.addToResearch(Blocks.payloadRouter, {//荷载路由器
    parent: 'payload-conveyor',//荷载传送带
    requirements: ItemStack.with(
        Items.graphite, 15 / 4 * 200,
        Items.lead, 15 / 4 * 200
    ),

});
lib.addToResearch(Blocks.payloadLoader, {//荷载装载器
    parent: 'payload-router',//荷载路由器
    requirements: ItemStack.with(
        Items.graphite, 50 / 4 * 200,
        Items.silicon, 50 / 4 * 200,
        Items.copper, 100 / 4 * 200
    ),

});
lib.addToResearch(Blocks.payloadUnloader, {//荷载卸载器
    parent: 'payload-loader',//荷载装载器
    requirements: ItemStack.with(
        Items.graphite, 50 / 4 * 200,
        Items.silicon, 50 / 4 * 200,
        Items.copper, 100 / 4 * 200
    ),

});
lib.addToResearch(Blocks.constructor, {//构造器
    parent: 'payload-router',//荷载路由器
    requirements: ItemStack.with(
        Items.silicon, 50 / 4 * 200,
        Items.thorium, 70 / 4 * 200,
        Items.graphite, 50 / 4 * 200
    ),

});
lib.addToResearch(Blocks.largeConstructor, {//大型构造器
    parent: 'constructor',//构造器
    requirements: ItemStack.with(
        Items.silicon, 100 / 4 * 200,
        Items.thorium, 150 / 4 * 200,
        Items.graphite, 50 / 4 * 200,
        Items.phaseFabric, 40 / 4 * 200
    ),

});
lib.addToResearch(Blocks.deconstructor, {//解构器
    parent: 'constructor',//构造器
    requirements: ItemStack.with(
        Items.thorium, 250 / 4 * 200,
        Items.silicon, 200 / 4 * 200,
        Items.graphite, 250 / 4 * 200
    ),

});
lib.addToResearch(fashetai0, {//发射台
    parent: 'mass-driver',//质驱
    requirements: ItemStack.with(
        Items.copper, 350 * 1.8 / 4 * 200,
        Items.silicon, 140 * 1.8 / 4 * 200,
        Items.lead, 200 * 1.8 / 4 * 200,
        Items.titanium, 150 * 1.8 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.extractionOutpost),//萃取前哨
    )
});
lib.addToResearch(Blocks.interplanetaryAccelerator, {//行星发射终端
    parent: 'mass-driver',//
    requirements: ItemStack.with(
        Items.copper, 16000 * 1.8 / 4 * 200,
        Items.silicon, 11000 * 1.8 / 4 * 200,
        Items.thorium, 13000 * 1.8 / 4 * 200,
        Items.titanium, 12000 * 1.8 / 4 * 200,
        Items.surgeAlloy, 6000 * 1.8 / 4 * 200,
        Items.phaseFabric, 5000 * 1.8 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.planetaryTerminal),//行星发射终端
    )
});

Blocks.duo.alwaysUnlocked = false;//双管跑
lib.addToResearch(Blocks.duo, {
    parent: 'core-shard',
    requirements: ItemStack.with(
        Items.copper, 35 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.copperWall, {//小铜墙
    parent: 'duo',//
    requirements: ItemStack.with(
        Items.copper, 6 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.copperWallLarge, {//铜墙
    parent: 'copper-wall',//
    requirements: ItemStack.with(
        Items.copper, 24 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.titaniumWall, {//小钛墙
    parent: 'copper-wall-large',//
    requirements: ItemStack.with(
        Items.titanium, 6 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.titaniumWallLarge, {//钛墙
    parent: 'titanium-wall',//小钛墙
    requirements: ItemStack.with(
        Items.titanium, 30 / 4 * 200,
    ),

});




lib.addToResearch(Blocks.door, {//小门
    parent: 'titanium-wall',//小钛墙
    requirements: ItemStack.with(
        Items.titanium, 6 * 200, Items.silicon, 4 * 200
    ),

});
lib.addToResearch(Blocks.doorLarge, {//大门
    parent: 'door',//小门
    requirements: ItemStack.with(
        Items.titanium, 24 * 200, Items.silicon, 16 * 200
    ),

});
lib.addToResearch(moweimen, {//魔微门
    parent: 'door-large',//大门
    requirements: ItemStack.with(
        molishi, 380 / 4 * 210,
        guijingti, 120 / 4 * 210,
        shimoxi, 240 / 4 * 210,
        weijing2, 20 / 4 * 210,
    ),
});





lib.addToResearch(Blocks.plastaniumWall, {//小塑钢墙
    parent: 'titanium-wall',//小钛墙
    requirements: ItemStack.with(
        Items.plastanium, 10 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.plastaniumWallLarge, {//塑钢墙
    parent: 'plastanium-wall',//小塑钢墙
    requirements: ItemStack.with(
        Items.plastanium, 30 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.thoriumWall, {//小钍墙
    parent: 'titanium-wall',//小钛墙
    requirements: ItemStack.with(
        Items.thorium, 15 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.thoriumWallLarge, {//钍墙
    parent: 'thorium-wall',//小钛墙
    requirements: ItemStack.with(
        Items.thorium, 30 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.phaseWall, {//小布墙
    parent: 'thorium-wall',//小钍墙
    requirements: ItemStack.with(
        Items.phaseFabric, 25 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.phaseWallLarge, {//布墙
    parent: 'phase-wall',//小布墙
    requirements: ItemStack.with(
        Items.phaseFabric, 35 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.surgeWall, {//小合金墙
    parent: 'phase-wall',//小布墙
    requirements: ItemStack.with(
        Items.surgeAlloy, 30 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.surgeWallLarge, {//合金墙
    parent: 'surge-wall',//小合金墙
    requirements: ItemStack.with(
        Items.surgeAlloy, 40 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.scatter, {//分裂炮
    parent: 'duo',//
    requirements: ItemStack.with(
        Items.copper, 85 * 1.3 / 4 * 200,
        Items.lead, 45 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.scorch, {//喷火炮
    parent: 'duo',//
    requirements: ItemStack.with(
        Items.copper, 25 * 1.3 / 4 * 200,
        Items.lead, 22 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.hail, {//冰雹炮
    parent: 'scatter',//分裂炮
    requirements: ItemStack.with(
        Items.copper, 40 * 1.3 / 4 * 200,
        Items.graphite, 25 * 1.3 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.craters),//陨石带
    )
});
lib.addToResearch(Blocks.arc, {//电弧
    parent: 'scorch',//喷火炮
    requirements: ItemStack.with(
        Items.copper, 40 * 1.3 / 4 * 200,
        Items.lead, 50 * 1.3 / 4 * 200,
        Items.graphite, 25 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.wave, {//波浪
    parent: 'scatter',//分裂炮
    requirements: ItemStack.with(
        Items.copper, 30 * 1.3 / 4 * 200,
        Items.lead, 75 * 1.3 / 4 * 200,
        Items.metaglass, 45 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.lancer, {//兰瑟
    parent: 'arc',//分裂炮
    requirements: ItemStack.with(
        Items.copper, 60 * 1.3 / 4 * 200,
        Items.lead, 75 * 1.3 / 4 * 200,
        Items.silicon, 50 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.parallax, {//差绕
    parent: 'lancer',//波浪
    requirements: ItemStack.with(
        Items.lead, 75 * 1.3 / 4 * 200,
        Items.graphite, 35 * 1.3 / 4 * 200,
        Items.titanium, 90 * 1.3 / 4 * 200,
        Items.silicon, 120 * 1.3 / 4 * 200,
    ),

});

lib.addToResearch(Blocks.salvo, {//齐射
    parent: 'hail',//冰雹
    requirements: ItemStack.with(
        Items.lead, 60 * 1.3 / 4 * 200,
        Items.graphite, 80 * 1.3 / 4 * 200,
        Items.titanium, 50 * 1.3 / 4 * 200,
        Items.copper, 100 * 1.3 / 4 * 200,
    ),

});

lib.addToResearch(Blocks.swarmer, {//蜂群
    parent: 'salvo',//齐射
    requirements: ItemStack.with(
        Items.graphite, 35 * 1.3 / 4 * 200,
        Items.titanium, 35 * 1.3 / 4 * 200,
        Items.silicon, 30 * 1.3 / 4 * 200,
        Items.plastanium, 45 * 1.3 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.segment, {//裂解
    parent: 'parallax',//差绕
    requirements: ItemStack.with(
        Items.copper, 30 * 1.3 / 4 * 200,
        Items.lead, 50 * 1.3 / 4 * 200,
        Items.thorium, 80 * 1.3 / 4 * 200,
        Items.silicon, 130 * 1.3 / 4 * 200,
        Items.phaseFabric, 40 * 1.3 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.tsunami, {//海啸
    parent: 'wave',//波浪
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
lib.addToResearch(Blocks.ripple, {//浪涌
    parent: 'salvo',//齐射
    requirements: ItemStack.with(
        Items.copper, 150 * 1.3 / 4 * 200,
        Items.lead, 200 * 1.3 / 4 * 200,
        Items.graphite, 135 * 1.3 / 4 * 200,
        Items.titanium, 60 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.fuse, {//雷光
    parent: 'ripple',//浪涌
    requirements: ItemStack.with(
        Items.copper, 100 * 1.3 / 4 * 200,
        Items.lead, 225 * 1.3 / 4 * 200,
        Items.graphite, 225 * 1.3 / 4 * 200,
        Items.thorium, 100 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.cyclone, {//气旋
    parent: 'swarmer',//蜂群
    requirements: ItemStack.with(
        Items.copper, 200 * 1.3 / 4 * 200,
        Items.lead, 120 * 1.3 / 4 * 200,
        Items.titanium, 125 * 1.3 / 4 * 200,
        Items.plastanium, 80 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.spectre, {//幽灵
    parent: 'cyclone',//气旋
    requirements: ItemStack.with(
        Items.lead, 1100 * 1.3 / 4 * 200,
        Items.copper, 900 * 1.3 / 4 * 200,
        Items.graphite, 300 * 1.3 / 4 * 200,
        Items.surgeAlloy, 250 * 1.3 / 4 * 200,
        Items.plastanium, 175 * 1.3 / 4 * 200,
        Items.thorium, 250 * 1.3 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.nuclearComplex),//和列阵
    )
});
lib.addToResearch(Blocks.meltdown, {//融汇
    parent: 'lancer',//兰瑟
    requirements: ItemStack.with(
        Items.lead, 1500 * 1.3 / 4 * 200,
        Items.copper, 1200 * 1.3 / 4 * 200,
        Items.lead, 350 * 1.3 / 4 * 200,
        Items.graphite, 300 * 1.3 / 4 * 200,
        Items.surgeAlloy, 325 * 1.3 / 4 * 200,
        Items.silicon, 325 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.foreshadow, {//噩兆
    parent: 'meltdown',//融汇
    requirements: ItemStack.with(
        Items.lead, 2000 * 1.3 / 4 * 200,
        Items.copper, 1500 * 1.3 / 4 * 200,
        Items.metaglass, 600 * 1.3 / 4 * 200,
        Items.surgeAlloy, 300 * 1.3 / 4 * 200,
        Items.plastanium, 200 * 1.3 / 4 * 200,
        Items.silicon, 600 * 1.3 / 4 * 200
    ),

});
lib.addToResearch(Blocks.mender, {//小修复
    parent: 'core-shard',
    requirements: ItemStack.with(
        Items.copper, 30 / 4 * 200,
        Items.lead, 25 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.mendProjector, {//修复
    parent: 'mender',
    requirements: ItemStack.with(
        Items.lead, 100 / 4 * 200,
        Items.titanium, 25 / 4 * 200,
        Items.silicon, 40 / 4 * 200,
        Items.copper, 50 / 4 * 200
    ),

});
Blocks.overdriveProjector.speedBoost = 1.45;//超速
Blocks.overdriveProjector.speedBoostPhase = 0.55;
lib.addToResearch(Blocks.overdriveProjector, {
    parent: 'mend-projector',
    requirements: ItemStack.with(
        Items.lead, 100 / 4 * 200,
        Items.titanium, 25 / 4 * 200,
        Items.silicon, 40 / 4 * 200,
        Items.copper, 50 / 4 * 200
    ),

});
Blocks.overdriveDome.speedBoost = 1.8;//大超速
Blocks.overdriveDome.speedBoostPhase = 0.56;
Blocks.overdriveDome.hasBoost = true;
Blocks.overdriveDome.consumes.items(ItemStack.with(
    Items.phaseFabric, 2,
)).boost();
lib.addToResearch(Blocks.overdriveDome, {
    parent: 'overdrive-projector',
    requirements: ItemStack.with(
        Items.lead, 200 / 4 * 200,
        Items.titanium, 130 / 4 * 200,
        Items.silicon, 130 / 4 * 200,
        Items.plastanium, 80 / 4 * 200,
        Items.surgeAlloy, 120 / 4 * 200
    ),

});
lib.addToResearch(Blocks.forceProjector, {//护罩 力墙
    parent: 'mend-projector',
    requirements: ItemStack.with(
        Items.lead, 100 / 4 * 200,
        Items.titanium, 75 / 4 * 200,
        Items.silicon, 125 / 4 * 200
    ),
    // objectives: Seq.with(
    //     new Objectives.SectorComplete(SectorPresets.impact0078),//冲击区0078
    // )
});

lib.addToResearch(Blocks.shockMine, {//地雷
    parent: "mender",
    requirements: ItemStack.with(
        Items.lead, 30 / 4 * 200,
        Items.pyratite, 20 / 4 * 200,
        Items.silicon, 15 / 4 * 200
    ),
  
});
lib.addToResearch(bomb, {//炸弹
    parent: "shock-mine",
    requirements: ItemStack.with(
        Items.lead, 30000/4*200,
        Items.copper, 30000/4*200,
        Items.silicon, 5000/4*200,
        zhayao, 70000,
        zuanjing, 12000,
        monengjing1,1750,
    ),
});
lib.addToResearch(Blocks.combustionGenerator, {//火力电
    parent: 'core-shard',
    requirements: ItemStack.with(
        Items.lead, 25 / 4 * 200,
        Items.copper, 30 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.powerNode, {//小电节点
    parent: "combustion-generator",
    requirements: ItemStack.with(
        Items.copper, 1 / 4 * 200,
        Items.lead, 3 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.powerNodeLarge, {//电节点
    parent: "power-node",
    requirements: ItemStack.with(
        Items.silicon, 3 / 4 * 200,
        Items.lead, 10 / 4 * 200,
        Items.titanium, 5 / 4 * 200,
    ),

});
lib.addToResearch(Blocks.diode, {//二极管
    parent: "power-node-large",
    requirements: ItemStack.with(
        Items.silicon, 10 / 4 * 200,
        Items.plastanium, 5 / 4 * 200,
        Items.metaglass, 10 / 4 * 200
    ),

});
lib.addToResearch(Blocks.surgeTower, {//电塔
    parent: "diode",
    requirements: ItemStack.with(
        Items.titanium, 7 / 4 * 200,
        Items.lead, 10 / 4 * 200,
        Items.silicon, 15 / 4 * 200,
        Items.surgeAlloy, 15 / 4 * 200
    ),

});
Blocks.battery.requirements = ItemStack.with(//小电池
    Items.copper, 5,
    Items.graphite, 5,
    Items.lead, 20);
lib.addToResearch(Blocks.battery, {//小电池
    parent: "power-node",
    requirements: ItemStack.with(
        Items.copper, 5 / 4 * 200,
        Items.graphite, 5 / 4 * 200,
        Items.lead, 20 / 4 * 200
    ),

});
Blocks.batteryLarge.requirements = ItemStack.with(//大电池
    Items.titanium, 20,
    Items.lead, 40,
    Items.silicon, 20,
    Items.graphite, 50);
lib.addToResearch(Blocks.batteryLarge, {
    parent: "battery",
    requirements: ItemStack.with(
        Items.titanium, 20 / 4 * 200,
        Items.lead, 40 / 4 * 200,
        Items.silicon, 20 / 4 * 200,
        Items.graphite, 50 / 4 * 200,
    ),

});
lib.addToResearch(chongdianqi, {//充电器
    parent: "battery",
});
lib.addToResearch(fangdianqi, {//放电器
    parent: "chongdianqi",
    objectives: Seq.with(
        new Objectives.Research(Blocks.batteryLarge)
    ),
});
lib.addToResearch(Blocks.steamGenerator, {//涡轮
    parent: "power-node",
    requirements: ItemStack.with(
        Items.copper, 35 / 4 * 200,
        Items.graphite, 25 / 4 * 200,
        Items.lead, 40 / 4 * 200,
        Items.silicon, 30 / 4 * 200
    ),
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.craters),//陨石带
    )
});
lib.addToResearch(Blocks.thermalGenerator, {//地热
    parent: "steam-generator",
    requirements: ItemStack.with(
        Items.copper, 40 / 4 * 200,
        Items.graphite, 35 / 4 * 200,
        Items.lead, 50 / 4 * 200,
        Items.silicon, 35 / 4 * 200,
        Items.metaglass, 40 / 4 * 200
    ),

});
Blocks.differentialGenerator.powerProduction = 30; //温差发电机
Blocks.differentialGenerator.itemDuration = 180; //温差发电机
lib.addToResearch(Blocks.differentialGenerator, {//温差
    parent: "thermal-generator",
    requirements: ItemStack.with(
        Items.copper, 70 / 4 * 200,
        Items.titanium, 50 / 4 * 200,
        Items.lead, 100 / 4 * 200,
        Items.silicon, 65 / 4 * 200,
        Items.metaglass, 50 / 4 * 200
    ),

});
lib.addToResearch(Blocks.rtgGenerator, {//RTG
    parent: "differential-generator",
    requirements: ItemStack.with(
        Items.copper, 70 / 4 * 200,
        Items.titanium, 50 / 4 * 200,
        Items.lead, 100 / 4 * 200,
        Items.silicon, 65 / 4 * 200,
        Items.metaglass, 50 / 4 * 200
    ),

});
lib.addToResearch(Blocks.solarPanel, {//小太阳能
    parent: "power-node",
    requirements: ItemStack.with(
        Items.lead, 10 / 4 * 200,
        Items.silicon, 15 / 4 * 200
    ),

});
lib.addToResearch(Blocks.largeSolarPanel, {//太阳能
    parent: "solar-panel",
    requirements: ItemStack.with(
        Items.lead, 80 / 4 * 200,
        Items.silicon, 110 / 4 * 200,
        Items.phaseFabric, 15 / 4 * 200
    ),

});
lib.addToResearch(Blocks.thoriumReactor, {//钍堆
    parent: "rtg-generator",
    requirements: ItemStack.with(
        Items.lead, 300 / 4 * 200,
        Items.silicon, 200 / 4 * 200,
        Items.graphite, 150 / 4 * 200,
        Items.thorium, 150 / 4 * 200,
        Items.metaglass, 50 / 4 * 200
    ),

});
Blocks.impactReactor.powerProduction = 153.3333333; //冲击
lib.addToResearch(Blocks.impactReactor, {//冲击
    parent: "thorium-reactor",
    requirements: ItemStack.with(
        Items.lead, 500 / 4 * 200,
        Items.silicon, 300 / 4 * 200,
        Items.graphite, 400 / 4 * 200,
        Items.thorium, 100 / 4 * 200,
        Items.surgeAlloy, 250 / 4 * 200,
        Items.metaglass, 250 / 4 * 200
    ),

});

//传输 储藏 仓库
lib.addToResearch(weicang, {
    parent: Blocks.vault.name,
});weicang.alwaysUnlocked = true;//默认解锁
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
        new Objectives.SectorComplete(Maps235),//占领-
    ),

});
lib.addToResearch(huanchongcang, {
    parent: weicang.name,
});

lib.addToResearch(luyouqi2, {
    parent: Blocks.router.name,
});
lib.addToResearch(lianjieqi2, {
    parent: Blocks.junction.name,
});
lib.addToResearch(crouter, {//塑钢路由器
    parent: luyouqi2.name,
});


lib.addToResearch(csdq0, {
    parent: Blocks.phaseConduit.name,
});
lib.addToResearch(conveyor10, {
    parent: Blocks.conveyor.name,
});
lib.addToResearch(conveyor11, {
    parent: Blocks.titaniumConveyor.name,
});
lib.addToResearch(conveyor12, {
    parent: conveyor11.name,
});
lib.addToResearch(jibaozhuangyunshudai2, {
    parent: Blocks.plastaniumConveyor.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.nuclearComplex),//占领核列阵解锁
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
lib.addToResearch(weixingzhiqu, {
    parent: Blocks.massDriver.name,
});
lib.addToResearch(zhiqu2, {
    parent: Blocks.massDriver.name,
});
lib.addToResearch(zhiqu3, {
    parent: zhiqu2.name,
});
lib.addToResearch(conduit1, {
    parent: Blocks.platedConduit.name,
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
    parent: "thermal-pump",
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
    parent: Blocks.phaseConduit.name,
});
lib.addToResearch(wanxiangqiao, {
    parent: Blocks.phaseConduit.name,
});
lib.addToResearch(daoguanqiao, {
    parent: Blocks.phaseConduit.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps163),//占领分岭解锁
    ),
});
lib.addToResearch(daxingchuyeguan, {
    parent: Blocks.phaseConduit.name,
});

lib.addToResearch(jizhuangxieqi2, {
    parent: Blocks.unloader.name,
});
lib.addToResearch(jizhuangxieqi3, {
    parent: jizhuangxieqi2.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.desolateRift),//荒芜裂谷
    ),
});
lib.addToResearch(yetiUnloader, {
    parent: Blocks.unloader.name,
});
//墙 防御设施
lib.addToResearch(qian1, {
    parent: Blocks.copperWall.name,
});
lib.addToResearch(qian2, {
    parent: qian1.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.frozenForest),//冰冻森林
    )
});
lib.addToResearch(qian3, {
    parent: qian2.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.craters),//陨石带
    )
});
lib.addToResearch(tong3, {
    parent: Blocks.copperWallLarge.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.frozenForest),//冰冻森林
    )
});
lib.addToResearch(tai3, {
    parent: Blocks.titaniumWallLarge.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.stainedMountains),//绵延群山
    )
});
lib.addToResearch(tu3, {
    parent: Blocks.thoriumWallLarge.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.overgrowth),//增生区
    )
});
lib.addToResearch(sugang3, {
    parent: Blocks.plastaniumWallLarge.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.saltFlats),//盐碱荒滩
        new Objectives.SectorComplete(SectorPresets.coastline),//边际海湾
    )

});
lib.addToResearch(hejin3, {
    parent: Blocks.surgeWallLarge.name,
});
lib.addToResearch(moli1, {
    parent: hejin3.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.impact0078),//冲击区0078
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
});
//-----------------------
lib.addToResearch(DianHu2, {
    parent: Blocks.arc.name,
});
lib.addToResearch(DianHu, {
    parent: Blocks.arc.name,
});
lib.addToResearch(FangKong, {
    parent: Blocks.lancer.name,
});
lib.addToResearch(healere, {
    parent: FangKong.name,
});
lib.addToResearch(JueWang, {
    parent: Blocks.fuse.name,
});
lib.addToResearch(BuHuo, {
    parent: Blocks.parallax.name,
});
lib.addToResearch(LanJie, {
    parent: Blocks.segment.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps127),//占领-魔鬼三角区
    ),

});
lib.addToResearch(lieguang, {//裂光
    parent: Blocks.lancer.name,
});
lib.addToResearch(PenHuo, {//喷火器
    parent: Blocks.scorch.name,
});
lib.addToResearch(ZhengFu, {//征服
    parent: Blocks.ripple.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps267),//占领L方阵
    ),
});
lib.addToResearch(ZhengYi, {//正义
    parent: Blocks.ripple.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps267),//占领L方阵
    ),
});
lib.addToResearch(bawang, {//霸王
    parent: Blocks.ripple.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps152),//占领-
    ),
});
lib.addToResearch(huasha, {//花洒
    parent: Blocks.wave.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps76),//占领热融解锁
    ),
});
lib.addToResearch(ronghui3, {//审判
    parent: Blocks.meltdown.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps155),//占领-
    ),
});

lib.addToResearch(youling3, {//恶灵/幽灵3
    parent: Blocks.spectre.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps53),//占领- 恶灵
    ),
});
lib.addToResearch(langyong2, {//浪潮/浪涌2
    parent: Blocks.ripple.name,
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
lib.addToResearch(ronghui4, {//天谴
    parent: ronghui2.name,
    requirements: ItemStack.with(
        Items.lead, 150000,
        Items.copper, 120000,
        guijingti, 215000,
        weijing5, 2,
        monengjing3, 3,
        jin, 66000,
        weijing4, 3000
    )
});
lib.addToResearch(youling2, {//冥王
    parent: Blocks.spectre.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps237),//占领-
    ),
});
lib.addToResearch(zongjipao, {
    parent: Blocks.foreshadow.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps52),//占领-
    ),
});
lib.addToResearch(zongjipao2, {
    parent: zongjipao.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps62),//占领-三花聚顶
    ),
});


//------------------------------
lib.addToResearch(Blocks.illuminator, {
    parent: Blocks.siliconSmelter.name,
});
lib.addToResearch(deng, {
    parent: Blocks.illuminator.name,
});
lib.addToResearch(hudun2, {
    parent: Blocks.forceProjector.name,
    requirements: ItemStack.with(
        Items.titanium, 150 / 4 * 200,
        weijing1, 20 / 4 * 200,
        guijingti, 190 / 4 * 200,
        shimoxi, 170 / 4 * 200,
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
    parent: Blocks.overdriveDome.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps258),//占领-
    ),

});
lib.addToResearch(jiasu4, {//2级微晶超速
    parent: jiasu3.name,
});
lib.addToResearch(jiasu5, {//3级微晶超速
    parent: jiasu4.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps62),//占领-三花聚顶
    ),

});
lib.addToResearch(jiasu6, {//迷你加速
    parent: jiasu4.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps62),//占领-三花聚顶
    ),

});
lib.addToResearch(chaojijiasuyi, {//超级迷你加速
    parent: jiasu6.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps196),//占领-
    ),

});
lib.addToResearch(xiuli1, {//修理
    parent: Blocks.mendProjector.name,
    requirements: ItemStack.with(
        Items.copper, 300 / 4 * 200,
        Items.lead, 300 / 4 * 200,
        Items.phaseFabric, 60 / 4 * 200,
        weijing2, 33 / 4 * 200,
        guijingti, 430 / 4 * 200,
        shimoxi, 750 / 4 * 200,
    ),
});
lib.addToResearch(xiuli2, {//全图大范围修理器
    parent: Blocks.mendProjector.name,
    requirements: ItemStack.with(
        Items.copper, 2000 / 4 * 200,
        Items.lead, 2500 / 4 * 200,
        Items.phaseFabric, 150 / 4 * 200,
        weijing2, 50 / 4 * 200,
        guijingti, 200 / 4 * 200,
        shimoxi, 500 / 4 * 200,
        jin, 150 / 4 * 200,
    ),
});
lib.addToResearch(fashetai, {//大型发射台
    parent: "fashetai0",
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps52),//占领-资源分配区-2
    ),

});
lib.addToResearch(Blocks.interplanetaryAccelerator, {//行星-写在json里了
    parent: fashetai.name,
});
//钻头
lib.addToResearch(yingzhizuantou, {
    parent: Blocks.pneumaticDrill.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps189),//占领遇袭解锁
    ),
});
lib.addToResearch(weijingzuantou1, {
    parent: Blocks.blastDrill.name,
});
lib.addToResearch(weijingzuantou2, {
    parent: weijingzuantou1.name,
});
lib.addToResearch(junengzuantou, {
    parent: weijingzuantou2.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps230),//占领-强攻
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
lib.addToResearch(shiyou, {//微晶石油钻井
    parent: Blocks.oilExtractor.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.impact0078),//占领-冲击区
    ),

});
lib.addToResearch(sui, {
    parent: Blocks.waterExtractor.name,
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
    parent: Blocks.powerNodeLarge.name,
});
lib.addToResearch(nengliangta, {
    parent: Blocks.surgeTower.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps72),//占领-
    ),

});
lib.addToResearch(nengliangta2, {
    parent: nengliangta.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps72),//占领-
    ),

});
lib.addToResearch(jidianchi3, {
    parent: Blocks.batteryLarge.name,
});
lib.addToResearch(jitaiyangneng3, {
    parent: Blocks.batteryLarge.name,
});
lib.addToResearch(jitaiyangneng4, {
    parent: jitaiyangneng3.name,
});
lib.addToResearch(jitaiyangneng5, {//超级太阳能
    parent: jitaiyangneng4.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps197),//占领-
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
    parent: Blocks.thermalGenerator.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps262),//占领-雪痕
    ),

});
lib.addToResearch(shuilifadianji, {
    parent: Blocks.steamGenerator.name,
});
lib.addToResearch(shiyoufadianji, {
    parent: Blocks.differentialGenerator.name,
});
lib.addToResearch(yanjiangfadianji, {
    parent: Blocks.differentialGenerator.name,
});
lib.addToResearch(gaoxiaowolunfadianji, {
    parent: Blocks.steamGenerator.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps159),//占领极圈
    ),
});
lib.addToResearch(molichongjifadianji, {
    parent: Blocks.impactReactor.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps288),//占领-
    ),

});
lib.addToResearch(molizhifanyingdui, {
    parent: Blocks.thoriumReactor.name,
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
    parent: "graphite-press",

});
 lib.addToResearch(lajixiang, {//垃圾箱 焚化炉 
     parent: "incinerator",
 });
lib.addToResearch(guijingtichengxingji, {
    parent: "graphite-press",

});
lib.addToResearch(guilu, {
    parent: "silicon-crucible",

});
lib.addToResearch(guijingtihechengji, {
    parent: guijingtichengxingji.name,


});
lib.addToResearch(guijingtigongchang, {
    parent: guijingtihechengji.name,

});
lib.addToResearch(shimoxiji, {
    parent: "graphite-press",

});
lib.addToResearch(fensuiji, {
    parent: "pulverizer",
    requirements: ItemStack.with(
        Items.silicon, 225 / 4 * 200,
        Items.titanium, 80 / 4 * 200,
        Items.surgeAlloy, 20 / 4 * 200,
        zijing1, 10 / 4 * 200,
        guijingti, 30 / 4 * 200,

    )
});
lib.addToResearch(liuji, {
    parent: "pyratite-mixer",
    requirements: ItemStack.with(
        Items.copper, 56 / 4 * 200,
        Items.graphite, 22 / 4 * 200,
        Items.lead, 80 / 4 * 200,
        guijingti, 25 / 4 * 200,

    )
});
lib.addToResearch(xitilianji, {
    parent: guijingtichengxingji.name,
});

lib.addToResearch(hejinboliji, {
    parent: "kiln",
});
lib.addToResearch(jinhuiboliji, {
    parent: hejinboliji.name,
});
lib.addToResearch(oiljinglianchang, {
    parent: "spore-press",
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
});
lib.addToResearch(duochonbuji2, {
    parent: Blocks.phaseWeaver.name,
});
lib.addToResearch(duochonbuji3, {
    parent: duochonbuji2.name,
});
lib.addToResearch(duochongsugangji, {
    parent: Blocks.plastaniumCompressor.name,
});
lib.addToResearch(moliyeshoujiqi1, {
    parent: jinchengxingji.name,
    requirements: ItemStack.with(
        Items.plastanium, 26 / 4 * 210,
        Items.titanium, 44 / 4 * 210,
        jin, 80 / 4 * 210,
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
    parent: Blocks.cultivator.name,
}); Blocks.cultivator.floating = true;

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
    parent: Blocks.surgeSmelter.name,
});
lib.addToResearch(luzhayasuoji, {
    parent: tanbanyasuoji2.name,
});
lib.addToResearch(jitilianji3, {
    parent: Blocks.disassembler.name,
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
    parent: Blocks.melter.name,
});
lib.addToResearch(lengdongyehunheji, {
    parent: Blocks.cryofluidMixer.name,
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
    chuangshiweichen, 10,
    monengjing2, 15/4*200,
    zuanjing, 60/4*200,
    weijing5, 15,
    jin, 300/4*200,
    ),
});
lib.addToResearch(jinbigongcang, {
    parent: jinchengxingji2.name,
});




lib.addToResearch(jidianchi4, {
    parent: jidianchi3.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(SectorPresets.tarFields),//占领-焦油田
       
    ),
});//4级电池
lib.addToResearch(weichenshoujiqi, { parent: jiweijinggongchang1.name, });//微子搜集
lib.addToResearch(chuangshizhishen, { parent: chuangshiyujie.name, });//棺材
lib.addToResearch(choujiangji, { parent: jinbigongcang.name, });//抽奖机
lib.addToResearch(wupinyuan, {
    parent: chuangshizhishen.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps27),//占领-
    ),
});//物品源
lib.addToResearch(chuansongmen, {
    parent: Blocks.commandCenter.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps72),//占领-
    ),
});//传送门
lib.addToResearch(display, { parent: Blocks.largeLogicDisplay.name, });//显示器  
lib.addToResearch(weixiudian, { parent: "repair-point", });//单位维修点
lib.addToResearch(zhiliaoyi, { parent: "weixiudian", });//治疗仪
lib.addToResearch(jianshangyi, { parent: "zhiliaoyi", });//减伤仪
lib.addToResearch(geshangyi, { parent: "jianshangyi",     
requirements: ItemStack.with(
    Items.copper, 4000/4*200,
    Items.lead, 2500/4*200,
    JHhejin, 50/4*120,
    jin, 300/4*200,
    guijingti, 1700/4*200,
    shimoxi, 600/4*200,
    weijing2, 210/4*200,
    weijing3, 140
)});//割伤仪
lib.addToResearch(xuwu, {
    parent: wupinyuan.name,
    objectives: Seq.with(
        new Objectives.SectorComplete(Maps44),//占领-
    ),
    requirements: ItemStack.with(
        chuangshishenhun, 2000,
        jin, 1500,
    ),
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
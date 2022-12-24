const lib = require('lib');
const {fashetai0} = require('Blocks/Blocks-factory');
const { xuwu } = require('BlocksLibes/xuwu');
const { dongcibeng,} = require('Blocks/Blocks-ChuanShu');
const {
    DianHu, DianHu2, FangKong, healere, JueWang, BuHuo, LanJie, lieguang, ZhengFu, ZhengYi, bawang, ronghui3,
    ronghui2, youling2, ronghui4, zongjipao, zongjipao2, huasha, youling3, langyong2, bomb, Acker,
} = require('turrets/DC'); //require('wmod');//+++++++++++
const { CT_core, CoreJiangLuo, WJcore, } = require('core');
const {
    Maps173, Maps189, Maps111, Maps104, Maps83,
    Maps214, Maps76, Maps159, Maps163, Maps267,
    Maps230, Maps127, Maps234, Maps243, Maps199,
    Maps89, Maps26, Maps90, Maps235, Maps262, Maps61,
    Maps53, Maps288, Maps72, Maps260, Maps258, Maps62,
    Maps198, Maps196, Maps110, Maps193, Maps147, Maps45,
    Maps237, Maps155, Maps152, Maps52, Maps168, Maps27,
    Maps44, Maps23, Maps87, Maps64, Maps232,

    groundZero, saltFlats, frozenForest, biomassFacility,
    craters, ruinousShores, windsweptIslands, stainedMountains,
    extractionOutpost, coastline, navalFortress,
    fungalPass, overgrowth, tarFields, impact0078,
    desolateRift, nuclearComplex, planetaryTerminal
} = require('techTree/maps');


Events.on(ContentInitEvent, cons(e => {//欢迎
    lib.addToResearch(Maps173, {//
        parent: CTBlocks.coreShard.name,
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(groundZero, {//零号
        parent: 'welcome',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps173),//占领欢迎
        ),
    });
}));

Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(frozenForest, {//冰冻森林
        parent: 'groundZero-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(groundZero),
            new Objectives.SectorComplete(Maps173),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(craters, {//陨石带
        parent: 'frozenForest-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(frozenForest),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(overgrowth, {//增生区
        parent: 'frozenForest-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(frozenForest),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(biomassFacility, {//生物质合成区
        parent: 'frozenForest-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(frozenForest),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(stainedMountains, {//绵延群山
        parent: 'biomassFacility-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(biomassFacility),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(fungalPass, {//真菌通道
        parent: 'stainedMountains-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(stainedMountains),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(nuclearComplex, {//核裂阵
        parent: 'fungalPass-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(fungalPass),
            new Objectives.Research(CTBlocks.surgeSmelter)//研究巨浪合金机
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(ruinousShores, {//遗迹海岸
        parent: 'craters-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(craters),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(windsweptIslands, {//风吹群岛
        parent: 'ruinousShores-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(ruinousShores),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(extractionOutpost, {//萃取前哨
        parent: 'windsweptIslands-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(saltFlats, {//盐碱荒滩
        parent: 'windsweptIslands-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(coastline, {//边际海湾
        parent: 'saltFlats-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(saltFlats),
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(navalFortress, {//海军要塞
        parent: 'coastline-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(coastline),
        ),
    });
}));




































































Events.on(ContentInitEvent, cons(e => {// 占领后解锁硬质钻头
    lib.addToResearch(Maps189, {//遇袭
        parent: 'craters-CT',//陨石带
        objectives: Seq.with(
            new Objectives.SectorComplete(craters),//占领陨石带
        ),
    });
}));
Events.on(ContentInitEvent, cons(e => {//占领解锁金机
    lib.addToResearch(Maps111, {//弯口 
        parent: 'extractionOutpost-CT',//萃取前哨
        objectives: Seq.with(
            new Objectives.SectorComplete(extractionOutpost),//占领萃取前哨
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁霸王
    lib.addToResearch(Maps152, {//扭曲-风吹群岛
        parent: 'windsweptIslands-CT',//风吹群岛
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),//占领风吹群岛
            new Objectives.SectorComplete(desolateRift),//荒芜裂谷
            new Objectives.Research(ronghui2),//研究天煞
            new Objectives.Research(youling2)//研究冥王
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁核心定位装置
    lib.addToResearch(Maps104, {//资源分配区-1
        parent: 'overgrowth-CT',//增生区
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//占领油田
            new Objectives.Research(fashetai0)//研究发射台
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps45, {//核心转移教程
        parent: 'overgrowth-CT',//
        objectives: Seq.with(
            new Objectives.Research(CoreJiangLuo)//研究核心定位装置
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {// 解锁石油+岩浆发电机
    lib.addToResearch(Maps83, {// 融合
        parent: 'windsweptIslands-CT',//风吹群岛
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),//占领风吹群岛
            new Objectives.Research(fashetai0)//研究微晶2工厂
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(tarFields, {//原版油田
        parent: 'RongHe',//融合
        objectives: Seq.with(
            new Objectives.SectorComplete(windsweptIslands),
            new Objectives.Research(CTBlocks.coalCentrifuge),
            new Objectives.Research(CTBlocks.conduit),
            new Objectives.Research(CTBlocks.wave),
            new Objectives.SectorComplete(Maps83),//占领融合
            new Objectives.SectorComplete(Maps76),//占领热熔
        )
    });
}));

//=================
Events.on(ContentInitEvent, cons(e => {//复刻原版科技树位置
    lib.addToResearch(impact0078, {//冲击区
        parent: tarFields.name,//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//占领油田
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//复刻原版科技树位置 
    lib.addToResearch(desolateRift, {//荒芜
        parent: impact0078.name,//冲击区
        objectives: Seq.with(
            new Objectives.SectorComplete(impact0078),//占领冲击区
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//复刻原版科技树位置 
    lib.addToResearch(planetaryTerminal, {//行星发射终端  原版最后一个图  没啥用了
        parent: desolateRift.name,//荒芜
        objectives: Seq.with(
            new Objectives.SectorComplete(desolateRift),//占领荒芜
        )
    });
}));

//=================

Events.on(ContentInitEvent, cons(e => {//解锁微型质驱+万向液体桥
    lib.addToResearch(Maps214, {//落锤
        parent: 'frozenForest-CT',//冰冻森林
        objectives: Seq.with(
            new Objectives.SectorComplete(stainedMountains),//占领绵延群山
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁花洒
    lib.addToResearch(Maps76, {//热融
        parent: 'biomassFacility-CT',//生物质合成区
        objectives: Seq.with(
            new Objectives.SectorComplete(biomassFacility),//占领生物质合成区
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁高效涡轮
    lib.addToResearch(Maps159, {//极圈
        parent: 'tarFields-CT',//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//占领油田
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁微晶传送带+传送桥+导管桥
    lib.addToResearch(Maps163, {//分岭
        parent: 'nuclearComplex-CT',//核裂阵
        objectives: Seq.with(
            new Objectives.SectorComplete(nuclearComplex),//占领核裂阵
        )
    });
}));

Events.on(ContentInitEvent, cons(e => {//解锁正义+征服
    lib.addToResearch(Maps267, {//L方阵
        parent: 'fungalPass-CT',//真菌通道
        objectives: Seq.with(
            new Objectives.SectorComplete(fungalPass),//占领真菌通道
            new Objectives.Research(CTBlocks.spectre)//研究幽灵
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
        parent: 'tarFields-CT',//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//占领油田
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁抽冷冻液机
    lib.addToResearch(Maps243, {//冰海堰
        parent: 'coastline-CT',//边际海湾
        objectives: Seq.with(
            new Objectives.SectorComplete(coastline),//占领边际海湾
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
    lib.addToResearch(Maps72, {//酸腐地
        parent: 'saltFlats-CT',//盐碱荒滩
        objectives: Seq.with(
            new Objectives.SectorComplete(navalFortress),//占领海军要塞
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {////解锁力场节点
    lib.addToResearch(Maps196, {//// 磁暴区
        parent: 'SuanFuDI',//酸腐地
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁韵语+飞逝
    lib.addToResearch(Maps44, {//三相
        parent: 'CiBaoQu',//// 磁暴区
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁微晶超速2
    lib.addToResearch(Maps258, {//激流
        parent: 'navalFortress-CT',//
        objectives: Seq.with(
            new Objectives.SectorComplete(saltFlats),//盐碱荒滩
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁电磁炮1和大型发射台
    lib.addToResearch(Maps52, {//资源分配区-2"
        parent: 'ZY1',//
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps104),//资源分配区-1
        )
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
Events.on(ContentInitEvent, cons(e => {//解锁天谴
    lib.addToResearch(Maps199, {//扭曲-油田
        parent: 'tarFields-CT',//油田
        objectives: Seq.with(
            new Objectives.SectorComplete(tarFields),//占领油田
            new Objectives.Research(ronghui2)//研究天煞
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {////解锁聚合冲击发电
    lib.addToResearch(Maps288, {//行古道
        parent: 'FuSheQu',//辐射区
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps199),//占领扭曲-油田
            new Objectives.SectorComplete(planetaryTerminal),//占领荒芜裂谷
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁恶灵
    lib.addToResearch(Maps53, {//恶灵
        parent: 'nuclearComplex-CT',//核裂阵
        objectives: Seq.with(
            new Objectives.Research(CTBlocks.spectre),//研究幽灵
            new Objectives.SectorComplete(nuclearComplex),//占领荒芜裂谷
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps168, {//浪潮
        parent: 'LFangZhen',//L方阵
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps267),//占领L方阵
            new Objectives.SectorComplete(Maps45),//占领核心转移
            new Objectives.Research(CTBlocks.spectre)//研究幽灵
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
Events.on(ContentInitEvent, cons(e => {//解锁超级太阳能+8倍超速
    lib.addToResearch(Maps198, {//终极战役1-清道夫
        parent: 'SanHuaJuDing',//
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps147),//资源分配区-3 
            new Objectives.SectorComplete(Maps127),//魔鬼三角区
            new Objectives.SectorComplete(Maps62),//三花聚顶 
            new Objectives.SectorComplete(Maps193),//双子域
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {//解锁创世纪 8倍迷路超速
    lib.addToResearch(Maps232, {//终极战役2-黄昏与黎明
        parent: 'SanHuaJuDing',//
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps147),//资源分配区-3 
            new Objectives.SectorComplete(planetaryTerminal),//行星发射终端
            new Objectives.SectorComplete(Maps62),//三花聚顶
            new Objectives.SectorComplete(Maps168),//占领浪潮
        )
    });
}));


Events.on(ContentInitEvent, cons(e => {////解锁创世神 //未启用
    lib.addToResearch(Maps27, {//终极战役3-神与神
        parent: 'LiminHuanghun',//黄昏与黎明
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps198),//终极战役1
            new Objectives.SectorComplete(Maps232),//终极战役2
        )
    });
}));
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Maps64, {//囚笼
        parent: 'god',//神与神
        objectives: Seq.with(
            new Objectives.Research(xuwu),//研究虚无
            new Objectives.SectorComplete(Maps198),//终极战役1
            new Objectives.SectorComplete(Maps232),//终极战役2
            new Objectives.SectorComplete(Maps27),//终极战役3
        )
    });
}));



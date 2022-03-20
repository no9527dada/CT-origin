const lib = require('lib')

const Maps173 = new SectorPreset("welcome", Planets.serpulo, 173);//欢迎地图
Maps173.alwaysUnlocked = true;
Maps173.addStartingItems = true;
Maps173.captureWave = 2;//
Maps173.difficulty = 1;
Maps173.localizedName = "welcome";//
exports.Maps173 = Maps173; 
SectorPresets.groundZero.alwaysUnlocked = false;
/*******************************************************************************************/
/*

*/
const Maps189 = new SectorPreset("YuXi", Planets.serpulo, 189);//解锁硬质钻头
Maps189.captureWave = 30;
Maps189.difficulty = 9;
Maps189.localizedName = Core.bundle.format("YuXi");//遇袭 
exports.Maps189 = Maps189;

SectorPresets.extractionOutpost.useAI = true;//萃取前哨 占领后解锁发射台
 
const Maps111 = new SectorPreset("WanKou", Planets.serpulo, 111);//占领解锁金机
Maps111.captureWave = 50;
Maps111.difficulty = 13;
Maps111.localizedName = Core.bundle.format("WanKou");//弯口 
exports.Maps111 = Maps111;

const Maps104 = new SectorPreset("ZY1", Planets.serpulo, 104);//解锁核心定位
Maps104.captureWave = 10;//
Maps104.difficulty = 13;
Maps104.localizedName = Core.bundle.format("ZY1");//资源分配区-1
exports.Maps104 = Maps104;

const Maps83 = new SectorPreset("RongHe", Planets.serpulo, 83);//解锁石油+岩浆发电机
Maps83.captureWave = 30;//
Maps83.difficulty = 9;
Maps83.localizedName = Core.bundle.format("RongHe");//融合
exports.Maps83 = Maps83;

//SectorPresets.tarFields.useAI = true;//油田   LuoChui

const Maps214 = new SectorPreset("LuoChui", Planets.serpulo, 214);//解锁微型质驱+万向桥
Maps214.captureWave = 30;
Maps214.difficulty = 13;
Maps214.startWaveTimeMultiplier = 8;
Maps214.localizedName = Core.bundle.format("LuoChui");//落锤
exports.Maps214 = Maps214;

const Maps76 = new SectorPreset("ReRong", Planets.serpulo, 76);//解锁花洒
Maps76.captureWave = 20;//
Maps76.difficulty = 9;
Maps76.localizedName = Core.bundle.format("ReRong");//热融
exports.Maps76 = Maps76;

const Maps159 = new SectorPreset("JiQuan", Planets.serpulo, 159);//解锁高效涡轮
Maps159.captureWave = 50;//
Maps159.difficulty = 13;
Maps159.localizedName = Core.bundle.format("JiQuan");//极圈
exports.Maps159 = Maps159;

const Maps163 = new SectorPreset("FenLing", Planets.serpulo, 163);//解锁微晶传送带+传送桥+导管桥
Maps163.captureWave = 40;//
Maps163.difficulty = 13;
Maps163.localizedName = Core.bundle.format("FenLing");//分岭
exports.Maps163 = Maps163;

SectorPresets.nuclearComplex.difficulty = 13;//核列阵   解锁二级打包传送带

SectorPresets.windsweptIslands.difficulty = 9;//风吹群岛

const Maps267 = new SectorPreset("LFangZhen", Planets.serpulo, 267);//解锁正义+征服
Maps267.captureWave = 55;//
Maps267.difficulty = 13;
Maps267.localizedName = Core.bundle.format("LFangZhen");//L方阵
exports.Maps267 = Maps267;

SectorPresets.tarFields.captureWave = 59;//焦油田 占领后解锁4级电池
SectorPresets.tarFields.difficulty = 13;


SectorPresets.impact0078.captureWave = 180;//冲击区0078 占领后解锁微晶钻井
SectorPresets.impact0078.difficulty = 13;

SectorPresets.desolateRift.captureWave = 60;//荒芜裂谷 占领后解锁3级动能装卸器
SectorPresets.desolateRift.difficulty = 13;




const Maps230 = new SectorPreset("QiangGong", Planets.serpulo, 230);//解锁聚能钻头
Maps230.useAI = true;
Maps230.difficulty = 9;
Maps230.localizedName =Core.bundle.format("QiangGong")// "强攻";//
exports.Maps230 = Maps230;


const Maps127 = new SectorPreset("SanJiaoQu", Planets.serpulo, 127);//解锁4级强化钻头
Maps127.captureWave = 60;//
Maps127.difficulty = 13;
Maps127.localizedName = Core.bundle.format("SanJiaoQu")// "魔鬼三角区";//
exports.Maps127 = Maps127;

const Maps234 = new SectorPreset("YanYu", Planets.serpulo, 234);//解锁超级钻头
Maps234.captureWave = 80;//
Maps234.difficulty = 13;
Maps234.localizedName = Core.bundle.format("YanYu")// "炎狱";//
exports.Maps234 = Maps234;

const Maps243 = new SectorPreset("BingHaiYan", Planets.serpulo, 243);//解锁抽冷冻液机
Maps243.captureWave = 60;//
Maps243.difficulty = 13;
Maps243.localizedName =  Core.bundle.format("BingHaiYan")// "冰海堰";//
exports.Maps243 = Maps243;


const Maps199 = new SectorPreset("YouTian-s", Planets.serpulo, 199);//解锁虚灵单位工厂
Maps199.captureWave = 50;//
Maps199.difficulty = 13;
Maps199.localizedName =  Core.bundle.format("YouTian-s")// "扭曲-油田";//
exports.Maps199 = Maps199;


// const Maps199 = new SectorPreset("null006)", Planets.serpulo, 199);//解锁虚灵单位工厂
// Maps199.captureWave = 99;//
// Maps199.difficulty = 13;
// Maps199.localizedName = Core.bundle.format("aaaaaaaaa")//  "[red]（该地图暂未制作）";//
// exports.Maps199 = Maps199;
// Events.on(ContentInitEvent, cons(e => {//
//     lib.addToResearch(Maps199, {//
//         parent: 'null003)',//
//     });
// }));

const Maps235 = new SectorPreset("null003)", Planets.serpulo, 235);//解锁6级仓库
Maps235.captureWave = 99;//
Maps235.difficulty = 13;
Maps235.localizedName =  Core.bundle.format("aaaaaaaaa")// "[red]（该地图暂未制作）";//
exports.Maps235 = Maps235;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps235, {//
        parent: 'null003)',//
    });
}));

const Maps262 = new SectorPreset("XueHen", Planets.serpulo, 262);//解锁高级地热
Maps262.captureWave = 121;//
Maps262.difficulty = 13;
Maps262.startWaveTimeMultiplier = 10
Maps262.localizedName =  Core.bundle.format("XueHen")// "雪痕";//
exports.Maps262 = Maps262;


const Maps61 = new SectorPreset("FuSheQu", Planets.serpulo, 61);//解锁魔能核电
Maps61.captureWave = 55;//
Maps61.difficulty = 13;
Maps61.localizedName =  Core.bundle.format("FuSheQu")// "辐射区";//
exports.Maps61 = Maps61;

const Maps288 = new SectorPreset("XingGuDao", Planets.serpulo, 288);//解锁魔力爆炸冲击发电
Maps288.captureWave = 55;//
Maps288.difficulty = 13;
Maps288.localizedName = Core.bundle.format("XingGuDao")//  "行古道";//
exports.Maps288 = Maps288;


const Maps53 = new SectorPreset("null0013)", Planets.serpulo, 53);//占用
Maps53.captureWave = 99;//
Maps53.difficulty = 13;
Maps53.localizedName =  Core.bundle.format("aaaaaaaaa")// "[red]（该地图暂未制作）";//
exports.Maps53 = Maps53;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps53, {//
        parent: 'null003)',//
    });
}));


const Maps72 = new SectorPreset("SuanFuDI", Planets.serpulo, 72);//解锁高级能量塔+超级能量塔+单位门
Maps72.difficulty = 13;
Maps72.localizedName =Core.bundle.format("SuanFuDI")//   "腐酸地";//
exports.Maps72 = Maps72;


const Maps260 = new SectorPreset("ZiWeiHai", Planets.serpulo, 260);//解锁超级微晶护盾仪
Maps260.captureWave = 80;//
Maps260.difficulty = 13;
Maps260.localizedName =  Core.bundle.format("ZiWeiHai")// "紫薇海";//
exports.Maps260 = Maps260;

const Maps258 = new SectorPreset("JiLiu", Planets.serpulo, 258);//解锁微晶超速2+动磁泵
Maps258.captureWave = 179;//
Maps258.difficulty = 9;
Maps258.localizedName =  Core.bundle.format("JiLiu")// "激流";//
exports.Maps258 = Maps258;


const Maps62 = new SectorPreset("SanHuaJuDing", Planets.serpulo, 62);//解锁微晶超速3+迷你超速+电磁炮2
Maps62.captureWave = 90;//
Maps62.difficulty = 13;
Maps62.startWaveTimeMultiplier = 5;
Maps62.localizedName = Core.bundle.format("SanHuaJuDing")//  "三花聚顶";//
exports.Maps62 = Maps62;

const Maps197 = new SectorPreset("null0019)", Planets.serpulo, 197);//解锁超级太阳能
Maps197.captureWave = 99;//
Maps197.difficulty = 13;
Maps197.localizedName =Core.bundle.format("aaaaaaaaa")//   "[red]（该地图暂未制作）";//
exports.Maps197 = Maps197;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps197, {//
        parent: 'null003)',//
    });
}));

const Maps196 = new SectorPreset("null0020)", Planets.serpulo, 196);//解锁8倍迷路超速
Maps196.captureWave = 99;//
Maps196.difficulty = 13;
Maps196.localizedName = Core.bundle.format("aaaaaaaaa")//  "[red]（该地图暂未制作）";//
exports.Maps196 = Maps196;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps196, {//
        parent: 'null003)',//
    });
}));


const Maps193 = new SectorPreset("ShuangZiYu", Planets.serpulo, 193);//解锁阻电魔微墙
Maps193.captureWave = 59;//
Maps193.difficulty = 13;
Maps193.localizedName = Core.bundle.format("ShuangZiYu")//  "双子域";//
exports.Maps193 = Maps193;

const Maps147 = new SectorPreset("ZY3", Planets.serpulo, 147);//解锁聚合冲击发电机
Maps147.captureWave = 4;//
Maps147.difficulty = 13;
Maps147.startWaveTimeMultiplier = 0.8;
Maps147.localizedName = Core.bundle.format("ZY3")// "资源分配区-3";//
exports.Maps147 = Maps147;

const Maps45 = new SectorPreset("null0024)", Planets.serpulo, 45);//解锁霹雳闪2
Maps45.captureWave = 99;//
Maps45.difficulty = 13;
Maps45.localizedName = Core.bundle.format("aaaaaaaaa")//  "[red]（该地图暂未制作）";//
exports.Maps45 = Maps45;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps45, {//
        parent: 'null003)',//
    });
}));

const Maps237 = new SectorPreset("TianSha", Planets.serpulo, 237);//解锁冥王+天煞王
Maps237.difficulty = 13;
Maps237.useAI = true;
Maps237.startWaveTimeMultiplier = 10
Maps237.localizedName = Core.bundle.format("TianSha")//  "冥王与天煞";//
exports.Maps237 = Maps237;

const Maps155 = new SectorPreset("ShenPan", Planets.serpulo, 155);//解锁审判
Maps155.captureWave = 60;//
Maps155.difficulty = 13;
Maps155.localizedName = Core.bundle.format("ShenPan")//  "审判";//
exports.Maps155 = Maps155;

const Maps152 = new SectorPreset("FengCuiQunDao-s", Planets.serpulo, 152);//解锁霸王
Maps152.captureWave = 180;//
Maps152.difficulty = 13;
Maps152.localizedName = Core.bundle.format("FengCuiQunDao-s")//  "扭曲-风吹群岛";//
exports.Maps152 = Maps152;

const Maps52 = new SectorPreset("ZY2", Planets.serpulo, 52);//解锁电磁炮1和大型发射台
Maps52.difficulty = 13;
Maps52.localizedName =  Core.bundle.format("ZY2")// "资源分配区-2";//
exports.Maps52 = Maps52;


const Maps168 = new SectorPreset("null0029)", Planets.serpulo, 168);//占用
Maps168.captureWave = 99;//
Maps168.difficulty = 13;
Maps168.localizedName =  Core.bundle.format("aaaaaaaaa")// "[red]（该地图暂未制作）";//
exports.Maps168 = Maps168;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps168, {//
        parent: 'null003)',//
    });
}));


const Maps27 = new SectorPreset("null0030)", Planets.serpulo, 27);//解锁创世神
Maps27.captureWave = 99;//
Maps27.difficulty = 13;
Maps27.localizedName =Core.bundle.format("aaaaaaaaa")//   "[red]（该地图暂未制作）";//
exports.Maps27 = Maps27;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps27, {//
        parent: 'null003)',//
    });
}));

const Maps44 = new SectorPreset("null0031)", Planets.serpulo, 44);//解锁虚无
Maps44.captureWave = 99;//
Maps44.difficulty = 13;
Maps44.localizedName = Core.bundle.format("aaaaaaaaa")//  "[red]（该地图暂未制作）";//
exports.Maps44 = Maps44;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps44, {//
        parent: 'null003)',//
    });
}));


const Maps232 = new SectorPreset("null0032)", Planets.serpulo, 232);//终极战役1
Maps232.captureWave = 99;//
Maps232.difficulty = 13;
Maps232.localizedName = Core.bundle.format("aaaaaaaaa")//  "[red]（该地图暂未制作）";//
exports.Maps232 = Maps232;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps232, {//
        parent: 'null003)',//
    });
}));

const Maps87 = new SectorPreset("null0033)", Planets.serpulo, 87);//解锁终极战役2
Maps87.captureWave = 99;//
Maps87.difficulty = 13;
Maps87.localizedName =  Core.bundle.format("aaaaaaaaa")// "[red]（该地图暂未制作）";//
exports.Maps87 = Maps87;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps87, {//
        parent: 'null003)',//
    });
}));

const Maps64 = new SectorPreset("null0034)", Planets.serpulo, 64);//解锁终极战役3
Maps64.captureWave = 99;//
Maps64.difficulty = 13;
Maps64.localizedName =  Core.bundle.format("aaaaaaaaa")// "[red]（该地图暂未制作）";//
exports.Maps64 = Maps64;
Events.on(ContentInitEvent, cons(e => {//
    lib.addToResearch(Maps64, {//
        parent: 'null003)',//
    });
}));






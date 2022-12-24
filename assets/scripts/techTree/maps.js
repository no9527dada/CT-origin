const lib = require('lib')
const { NaMeiXing } = require('xingqiu');//星球 
SectorPresets.groundZero.difficulty = 330;
const groundZero = new SectorPreset("groundZero-CT", NaMeiXing, 15);//零号地区
groundZero.alwaysUnlocked = false;//
groundZero.captureWave = 30;
groundZero.difficulty = 1;
groundZero.startWaveTimeMultiplier = 3;
exports.groundZero = groundZero;

const saltFlats = new SectorPreset("saltFlats-CT", NaMeiXing, 101);//盐碱荒滩
saltFlats.difficulty = 5;
exports.saltFlats = saltFlats;

const frozenForest = new SectorPreset("frozenForest-CT", NaMeiXing, 86);//冰冻森林
frozenForest.captureWave = 20;
frozenForest.difficulty = 2;
exports.frozenForest = frozenForest;

const biomassFacility = new SectorPreset("biomassFacility-CT", NaMeiXing, 81);//生物质合成区
biomassFacility.captureWave = 20;
biomassFacility.difficulty = 3;
exports.biomassFacility = biomassFacility;

const craters = new SectorPreset("craters-CT", NaMeiXing, 18);//陨石带
craters.captureWave = 25;
craters.difficulty = 2;
exports.craters = craters;

const ruinousShores = new SectorPreset("ruinousShores-CT", NaMeiXing, 213);//遗迹海岸
ruinousShores.captureWave = 35;
ruinousShores.difficulty = 3;
exports.ruinousShores = ruinousShores;

const windsweptIslands = new SectorPreset("windsweptIslands-CT", NaMeiXing, 246);//风吹群岛
windsweptIslands.captureWave = 30;
windsweptIslands.difficulty = 9;//风吹群岛
exports.windsweptIslands = windsweptIslands;

const stainedMountains = new SectorPreset("stainedMountains-CT", NaMeiXing, 20);//绵延群山
stainedMountains.captureWave = 30;
stainedMountains.difficulty = 3;
exports.stainedMountains = stainedMountains;

const extractionOutpost = new SectorPreset("extractionOutpost-CT", NaMeiXing, 165);//萃取前哨
extractionOutpost.difficulty = 5;
exports.extractionOutpost = extractionOutpost;

const coastline = new SectorPreset("coastline-CT", NaMeiXing, 108);//边际海湾
coastline.captureWave = 30;
coastline.difficulty = 5;
exports.coastline = coastline;

const navalFortress = new SectorPreset("navalFortress-CT", NaMeiXing, 216);//海军要塞
navalFortress.difficulty = 9;
exports.navalFortress = navalFortress;

const fungalPass = new SectorPreset("fungalPass-CT", NaMeiXing, 21);//真菌通道
fungalPass.difficulty = 4;
exports.fungalPass = fungalPass;

const overgrowth = new SectorPreset("overgrowth-CT", NaMeiXing, 134);//增生区
overgrowth.difficulty = 5;
exports.overgrowth = overgrowth;

const tarFields = new SectorPreset("tarFields-CT", NaMeiXing, 23);//焦油田
tarFields.captureWave = 60;//焦油田 占领后解锁4级电池
tarFields.difficulty = 13;
exports.tarFields = tarFields;

const impact0078 = new SectorPreset("impact0078-CT", NaMeiXing, 227);//冲击区0078
impact0078.captureWave = 180;//冲击区0078 占领后解锁微晶钻井
impact0078.difficulty = 13;
exports.impact0078 = impact0078;

const desolateRift = new SectorPreset("desolateRift-CT", NaMeiXing, 123);//荒芜裂谷
desolateRift.captureWave = 60;//荒芜裂谷 占领后解锁3级动能装卸器
desolateRift.difficulty = 13;
// desolateRift.alwaysUnlocked = true;//默认解锁 调试
exports.desolateRift = desolateRift;

const nuclearComplex = new SectorPreset("nuclearComplex-CT", NaMeiXing, 130);//核裂阵
nuclearComplex.captureWave = 50;
nuclearComplex.difficulty = 13;//核列阵   解锁二级打包传送带
exports.nuclearComplex = nuclearComplex;

const planetaryTerminal = new SectorPreset("planetaryTerminal-CT", NaMeiXing, 93);//行星发射终端
planetaryTerminal.difficulty = 10;
exports.planetaryTerminal = planetaryTerminal;

/*******************************************************************************************/












const Maps173 = new SectorPreset("welcome", NaMeiXing, 173);//欢迎地图
Maps173.alwaysUnlocked = true;
Maps173.addStartingItems = true;
Maps173.captureWave = 2;//
Maps173.difficulty = 1;
Maps173.localizedName = "welcome";//
exports.Maps173 = Maps173;



const Maps37 = new SectorPreset("danwei", NaMeiXing, 37);//单位机制
Maps37.difficulty = 0;
Maps37.localizedName =Core.bundle.format("danwei");//
exports.Maps37 = Maps37;

const Maps189 = new SectorPreset("YuXi", NaMeiXing, 189);//解锁硬质钻头
Maps189.captureWave = 30;
Maps189.difficulty = 9;
Maps189.localizedName = Core.bundle.format("YuXi");//遇袭 
exports.Maps189 = Maps189;

//SectorPresets.extractionOutpost.useAI = true;//萃取前哨 占领后解锁发射台

const Maps111 = new SectorPreset("WanKou", NaMeiXing, 111);//占领解锁金机
Maps111.captureWave = 50;
Maps111.difficulty = 13;
Maps111.localizedName = Core.bundle.format("WanKou");//弯口 
exports.Maps111 = Maps111;

const Maps104 = new SectorPreset("ZY1", NaMeiXing, 104);//解锁核心定位
Maps104.captureWave = 10;//
Maps104.difficulty = 13;
Maps104.localizedName = Core.bundle.format("ZY1");//资源分配区-1
exports.Maps104 = Maps104;

const Maps83 = new SectorPreset("RongHe", NaMeiXing, 83);//解锁石油+岩浆发电机
Maps83.captureWave = 30;//
Maps83.difficulty = 9;
Maps83.localizedName = Core.bundle.format("RongHe");//融合
exports.Maps83 = Maps83;

const Maps214 = new SectorPreset("LuoChui", NaMeiXing, 214);//解锁微型质驱+万向桥
Maps214.captureWave = 30;
Maps214.difficulty = 13;
Maps214.startWaveTimeMultiplier = 8;
Maps214.localizedName = Core.bundle.format("LuoChui");//落锤
exports.Maps214 = Maps214;

const Maps76 = new SectorPreset("ReRong", NaMeiXing, 76);//解锁花洒
Maps76.captureWave = 20;//
Maps76.difficulty = 9;
Maps76.localizedName = Core.bundle.format("ReRong");//热融
exports.Maps76 = Maps76;

const Maps159 = new SectorPreset("JiQuan", NaMeiXing, 159);//解锁高效涡轮
Maps159.captureWave = 50;//
Maps159.difficulty = 13;
Maps159.localizedName = Core.bundle.format("JiQuan");//极圈
exports.Maps159 = Maps159;

const Maps163 = new SectorPreset("FenLing", NaMeiXing, 163);//解锁微晶传送带+传送桥+导管桥
Maps163.captureWave = 40;//
Maps163.difficulty = 13;
Maps163.localizedName = Core.bundle.format("FenLing");//分岭
exports.Maps163 = Maps163;



const Maps267 = new SectorPreset("LFangZhen", NaMeiXing, 267);//解锁正义+征服
Maps267.captureWave = 55;//
Maps267.difficulty = 13;
Maps267.localizedName = Core.bundle.format("LFangZhen");//L方阵
exports.Maps267 = Maps267;





const Maps230 = new SectorPreset("QiangGong", NaMeiXing, 230);//解锁聚能钻头
//Maps230.useAI = true;
Maps230.difficulty = 9;
Maps230.localizedName = Core.bundle.format("QiangGong")// "强攻";//
exports.Maps230 = Maps230;


const Maps127 = new SectorPreset("SanJiaoQu", NaMeiXing, 127);//解锁4级强化钻头
Maps127.captureWave = 60;//
Maps127.difficulty = 13;
Maps127.localizedName = Core.bundle.format("SanJiaoQu")// "魔鬼三角区";//
exports.Maps127 = Maps127;

const Maps234 = new SectorPreset("YanYu", NaMeiXing, 234);//解锁超级钻头
Maps234.captureWave = 80;//
Maps234.difficulty = 13;
Maps234.localizedName = Core.bundle.format("YanYu")// "炎狱";//
exports.Maps234 = Maps234;

const Maps243 = new SectorPreset("BingHaiYan", NaMeiXing, 243);//解锁抽冷冻液机
Maps243.captureWave = 60;//
Maps243.difficulty = 13;
Maps243.localizedName = Core.bundle.format("BingHaiYan")// "冰海堰";//
exports.Maps243 = Maps243;


const Maps199 = new SectorPreset("YouTian-s", NaMeiXing, 199);//解锁虚灵单位工厂
Maps199.captureWave = 50;//
Maps199.difficulty = 13;
Maps199.localizedName = Core.bundle.format("YouTian-s")// "扭曲-油田";//
exports.Maps199 = Maps199;

const Maps262 = new SectorPreset("XueHen", NaMeiXing, 262);//解锁高级地热
Maps262.captureWave = 121;//
Maps262.difficulty = 13;
Maps262.startWaveTimeMultiplier = 10
Maps262.localizedName = Core.bundle.format("XueHen")// "雪痕";//
exports.Maps262 = Maps262;


const Maps61 = new SectorPreset("FuSheQu", NaMeiXing, 61);//解锁魔能核电
Maps61.captureWave = 55;//
Maps61.difficulty = 5;
Maps61.localizedName = Core.bundle.format("FuSheQu")// "辐射区";//
exports.Maps61 = Maps61;

const Maps288 = new SectorPreset("XingGuDao", NaMeiXing, 288);//解锁魔力爆炸冲击发电
Maps288.captureWave = 55;//
Maps288.difficulty = 13;
Maps288.localizedName = Core.bundle.format("XingGuDao")//  "行古道";//
exports.Maps288 = Maps288;


const Maps53 = new SectorPreset("E'Ling", NaMeiXing, 53);//解锁恶灵
Maps53.captureWave = 60;//
Maps53.difficulty = 13;
Maps53.localizedName = Core.bundle.format("E'Ling")// "恶灵//
exports.Maps53 = Maps53;



const Maps72 = new SectorPreset("SuanFuDI", NaMeiXing, 72);//解锁高级能量塔+超级能量塔+单位门
Maps72.difficulty = 13;
Maps72.localizedName = Core.bundle.format("SuanFuDI")//   "酸腐地";//
exports.Maps72 = Maps72;


const Maps260 = new SectorPreset("ZiWeiHai", NaMeiXing, 260);//解锁超级微晶护盾仪
Maps260.captureWave = 80;//
Maps260.difficulty = 13;
Maps260.localizedName = Core.bundle.format("ZiWeiHai")// "紫薇海";//
exports.Maps260 = Maps260;

const Maps258 = new SectorPreset("JiLiu", NaMeiXing, 258);//解锁微晶超速2+动磁泵
Maps258.captureWave = 179;//
Maps258.difficulty = 9;
Maps258.localizedName = Core.bundle.format("JiLiu")// "激流";//
exports.Maps258 = Maps258;


const Maps62 = new SectorPreset("SanHuaJuDing", NaMeiXing, 62);//解锁微晶超速3+迷你超速+电磁炮2
Maps62.captureWave = 90;//
Maps62.difficulty = 13;
Maps62.startWaveTimeMultiplier = 5;
Maps62.localizedName = Core.bundle.format("SanHuaJuDing")//  "三花聚顶";//
exports.Maps62 = Maps62;


const Maps193 = new SectorPreset("ShuangZiYu", NaMeiXing, 193);//解锁阻电魔微墙,7级仓库
Maps193.captureWave = 59;//
Maps193.difficulty = 13;
Maps193.localizedName = Core.bundle.format("ShuangZiYu")//  "双子域";//
exports.Maps193 = Maps193;

const Maps147 = new SectorPreset("ZY3", NaMeiXing, 147);//解锁聚合冲击发电机
Maps147.captureWave = 5;//
Maps147.difficulty = 13;//Maps147.alwaysUnlocked = true;//
Maps147.startWaveTimeMultiplier = 0.8;
Maps147.localizedName = Core.bundle.format("ZY3")// "资源分配区-3";//
exports.Maps147 = Maps147;

const Maps45 = new SectorPreset("HXZY", NaMeiXing, 45);//核心转移教程
Maps45.captureWave = 3;//
Maps45.difficulty = 5;
Maps45.localizedName = Core.bundle.format("HXZY")//  "核心转移教程";//
exports.Maps45 = Maps45;

const Maps237 = new SectorPreset("TianSha", NaMeiXing, 237);//解锁冥王+天煞王
Maps237.difficulty = 13;
//Maps237.useAI = true;
Maps237.startWaveTimeMultiplier = 10
Maps237.localizedName = Core.bundle.format("TianSha")//  "冥王与天煞";//
exports.Maps237 = Maps237;

const Maps155 = new SectorPreset("ShenPan", NaMeiXing, 155);//解锁审判
Maps155.captureWave = 60;//
Maps155.difficulty = 13;
Maps155.localizedName = Core.bundle.format("ShenPan")//  "审判";//
exports.Maps155 = Maps155;

const Maps152 = new SectorPreset("FengCuiQunDao-s", NaMeiXing, 152);//解锁霸王
Maps152.captureWave = 180;//
Maps152.difficulty = 13;
Maps152.localizedName = Core.bundle.format("FengCuiQunDao-s")//  "扭曲-风吹群岛";//
exports.Maps152 = Maps152;

const Maps52 = new SectorPreset("ZY2", NaMeiXing, 52);//解锁电磁炮1和大型发射台
Maps52.difficulty = 13;
Maps52.localizedName = Core.bundle.format("ZY2")// "资源分配区-2";//
exports.Maps52 = Maps52;


const Maps168 = new SectorPreset("LangChao", NaMeiXing, 168);//解锁浪潮
Maps168.captureWave = 66;//
Maps168.difficulty = 13;
Maps168.localizedName = Core.bundle.format("LangChao")// "浪潮";//
exports.Maps168 = Maps168;



const Maps198 = new SectorPreset("QingDaoFu", NaMeiXing, 198);//解锁超级太阳能
Maps198.difficulty = 13;
Maps198.localizedName = Core.bundle.format("QingDaoFu")//   "终极战役1-清道夫";//
exports.Maps198 = Maps198;



const Maps232 = new SectorPreset("LiminHuanghun", NaMeiXing, 232);//解锁创世纪 8倍迷路超速
Maps232.startWaveTimeMultiplier = 3
Maps232.captureWave = 41;//
Maps232.difficulty = 13;
Maps232.localizedName = Core.bundle.format("LiminHuanghun")//  "终极战役2-黄昏与黎明";//
exports.Maps232 = Maps232;



const Maps27 = new SectorPreset("god", NaMeiXing, 27);//解锁创世神 
Maps27.captureWave = 60;//
Maps27.difficulty = 13;
Maps27.localizedName = Core.bundle.format("god")//   " 终极战役3-神与神";//
exports.Maps27 = Maps27;



const Maps64 = new SectorPreset("QiuLong", NaMeiXing, 64);//囚笼
Maps64.captureWave = 11;//
Maps64.difficulty = 1;
Maps64.localizedName = Core.bundle.format("QiuLong")// "囚笼";//
exports.Maps64 = Maps64;




//=================================


 const Maps196 = new SectorPreset("CiBaoQu", NaMeiXing, 196);//解锁力场节点
Maps196.captureWave = 31;//
Maps196.difficulty = 13;
Maps196.localizedName = Core.bundle.format("CiBaoQu")// 磁暴区
exports.Maps196 = Maps196;



const Maps44 = new SectorPreset("SanXiangDingYu", NaMeiXing, 44);//解锁韵语
Maps44.captureWave = 70;//
Maps44.difficulty = 13;
Maps44.localizedName = Core.bundle.format("SanXiangDingYu")//  三相
exports.Maps44 = Maps44;



const Maps87 = new SectorPreset("QiYiKongJian", NaMeiXing, 87);//解锁紫晶洗练机，高级核心基座
Maps87.captureWave = 60;//
Maps87.difficulty = 13;
Maps87.localizedName =Core.bundle.format("QiYiKongJian")//  奇异空间
exports.Maps87 = Maps87;

const Maps225 = new SectorPreset("KeLuSu", NaMeiXing, 225);//解锁高级聚能钻头
Maps225.difficulty = 13;
Maps225.localizedName =Core.bundle.format("KeLuSu")// 克鲁苏遗址
exports.Maps225 = Maps225;


/* 
//地图墙建造
Blocks.sandWall.category = Category.distribution;
Blocks.sandWall.buildVisibility = BuildVisibility.shown;
lib.addToResearch(Blocks.sandWall, {
    parent: 'core-shard',
    objectives: Seq.with(
        new Objectives.Research(Blocks.coreShard)
    )
})
 */


Planets.serpulo.orbitRadius = 25;
Planets.sun.radius = 1; //太阳大小
//     Planets.serpulo.lightSrcFrom = 0.2,
//     Planets.serpulo.lightSrcTo = 0.9,
//     Planets.serpulo.lightDstFrom = 0.05,
//     Planets.serpulo.lightDstTo = 1
// Planets.serpulo.orbitTime = 5 * 60
// Planets.serpulo.rotateTime = -5.18 * 60
const SUN2 = new JavaAdapter(Planet, {},
    "blueGiant", Planets.sun, 8);//蓝巨星
SUN2.bloom = true;
SUN2.accessible = false
SUN2.visible = true;
SUN2.localizedName = "[blue]blueGiant "
SUN2.orbitRadius = 0;
SUN2.meshLoader = () => new SunMesh(SUN2, 5, 6, 3.4, 2.8, 1.3, 0.8, 1.1,
    Color.valueOf("8FFBFFFF"),
    Color.valueOf("5AAAFF"),
    Color.valueOf("4CA3FF"),
    Color.valueOf("488CD6"),
    Color.valueOf("90C6FF"),
    Color.valueOf("B2D7FF")
);
SectorPresets.groundZero.captureWave = 20;
//------------------------------------------------------
//orbitTime = 60*60  //公转 1小时一圈
//rotateTime = 24f * 60f //自传 24分钟一圈

const sS = require("BlocksLibes/sectorSize");
const SSY3 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SSY3, 6));
        this.super$load();
    }
}, "moon", Planets.serpulo, 0.3);
sS.planetGrid(SSY3, 1);
SSY3.generator = new SerpuloPlanetGenerator();
SSY3.atmosphereColor = Color.valueOf("ffa1a1");
SSY3.atmosphereRadIn = 0.02;
SSY3.atmosphereRadOut = 0.1;
//SSY3.localizedName = Core.bundle.format("creator.SSY3");
SSY3.startSector = 1;
SSY3.orbitRadius = 5;
SSY3.accessible = true
SSY3.orbitTime = 1 * 60
SSY3.rotateTime = 1 * 60





const GThree = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(GThree, 6));
        this.super$load();
    }
}, "GradeThree", Planets.sun, 1);
sS.planetGrid(GThree, 3);
GThree.generator = new CTSerpuloPlanetGenerator();
//GThree.generator = TwinGenerator3;
GThree.atmosphereColor = Color.valueOf("9F35FF");
GThree.atmosphereRadIn = 0.05;
GThree.atmosphereRadOut = 0.2;
GThree.localizedName = Core.bundle.format("creators.GThree");
GThree.startSector = 1;
GThree.orbitRadius = 40;
GThree.alwaysUnlocked = true;
GThree.clearSectorOnLose = true;//扇区丢失时是否重置地图
GThree.enemyCoreSpawnReplace = false;//攻击图核心变刷怪点
GThree.allowLaunchSchematics = true;//开启发射核心蓝图
GThree.allowLaunchLoadout = true;//开启携带资源发射
GThree.allowSectorInvasion = false;//模拟攻击图入侵
GThree.allowWaveSimulation = true;//模拟后台波次
GThree.lightSrcFrom = 0.2,
    GThree.lightSrcTo = 0.9,
    GThree.lightDstFrom = 0.05,
    GThree.lightDstTo = 1
GThree.startSector = 173;
GThree.accessible = true;
GThree.landCloudColor = new Color(1, 1, 1, 0.5);
GThree.atmosphereColor = new Color(0.3, 0.7, 1.0);

GThree.defaultCore = CTBlocks.coreShard;

//GThree.hiddenItems.addAll(Items.serpuloItems,Items.erekirItems)/* .removeAll(Items.erekirItems) */;
GThree.unlockedOnLand.add(CTBlocks.coreShard);
/* GThree.ruleSetter = r => {
    r.waveTeam = Team.malis;
    r.placeRangeCheck = false; //TODO true or false?
    r.showSpawns = true;
    r.fog = true;//迷雾
    r.staticFog = true;//迷雾
    r.lighting = false;
    r.coreDestroyClear = true;//如果为真，在(敌人)核心半径内的每个敌人格块将在死亡时被摧毁。用于战役地图。
    r.onlyDepositCore = true; //TODO not sure
    r.showSpawns = true;//显示刷怪圈
    r.deconstructRefundMultiplier = 0.4//拆除返还
    //r.waveSpacing = 0.8 * Time.toMinutes;//统一更改波次时间
    r.staticColor = Color.valueOf("120321");
    //r. dynamicColor = new Color(0.74, 0.49, 1,0.2)//已经探索过的区域颜色
    r.dynamicColor = new Color(0, 0, 0, 0.2);
}; */
exports.NaMeiXing = GThree;
const { whiteList } = require('white_list')//白名单
Creators.setPlanet(GThree, whiteList);






//一个挑战战役类的星球
const c1 = Color.valueOf("faa14c"), c2 = Color.valueOf("ff3368"), out = Color.valueOf("bdf251");
const TiaoZan = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(TiaoZan, 6));
        this.super$load();
    }
}, "challenge", Planets.sun, 1);
sS.planetGrid(TiaoZan, 3);
TiaoZan.generator = extend(TantrosPlanetGenerator, {
    getColor(position) {
        var depth = Simplex.noise3d(2, 2, 0.56, 1.7, position.x, position.y, position.z) / 2;
        return c1.write(out).lerp(c2, Mathf.clamp(Mathf.round(depth, 0.25)));
    },
    allowLanding(sector) {
        return false;
    },//关闭数字区块
    generateSector(sector) {
        return false;
    },//无基地
});
TiaoZan.atmosphereColor = Color.valueOf("ffa1a1");
TiaoZan.atmosphereRadIn = 0.02;
TiaoZan.atmosphereRadOut = 0.1;
TiaoZan.localizedName = Core.bundle.format("creator.SY1");
//TiaoZan.startSector = 1;//开始降落区块
TiaoZan.orbitRadius = 55;
TiaoZan.accessible = true
TiaoZan.bloom = true;//花
TiaoZan.tidalLock = false;//潮汐锁定
TiaoZan.alwaysUnlocked = true;
TiaoZan.clearSectorOnLose = true;//扇区丢失时是否重置地图
TiaoZan.enemyCoreSpawnReplace = false;//攻击图核心变刷怪点
TiaoZan.allowLaunchSchematics = false;//开启发射核心蓝图
TiaoZan.allowLaunchLoadout = false;//开启携带资源发射
TiaoZan.allowSectorInvasion = false;//模拟攻击图入侵
TiaoZan.allowWaveSimulation = false;//模拟后台波次
TiaoZan.updateLighting = false;
Creators.setPlanet(TiaoZan, whiteList);
exports.SY1 = TiaoZan;

const ZiDingYi = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(ZiDingYi, 4));
        this.super$load();
    }
}, "contribute", Planets.sun, 1);
sS.planetGrid(ZiDingYi, 3);
ZiDingYi.generator = extend(SerpuloPlanetGenerator, {
    getColor(position) {
        var depth = Simplex.noise3d(2, 2, 0.56, 1.7, position.x, position.y, position.z) / 2;
        return c1.write(out).lerp(c2, Mathf.clamp(Mathf.round(depth, 0.25)));
    },
    allowLanding(sector) {
        return false;
    },//关闭数字区块
    generateSector(sector) {
        return false;
    },//无基地
});
ZiDingYi.landCloudColor = Color.valueOf("ed6542");
ZiDingYi.atmosphereColor = Color.valueOf("DCDCAA");
ZiDingYi.atmosphereRadIn = 0.02;
ZiDingYi.atmosphereRadOut = 0.4;
ZiDingYi.localizedName = Core.bundle.format("creator.ZiDingYi");
ZiDingYi.startSector = 0;//开始降落区块
ZiDingYi.orbitRadius = 70;
ZiDingYi.accessible = true
ZiDingYi.bloom = true;//花
ZiDingYi.tidalLock = false;//潮汐锁定
ZiDingYi.updateLighting = false//模拟昼夜
ZiDingYi.alwaysUnlocked = true;
ZiDingYi.clearSectorOnLose = true;//扇区丢失时是否重置地图
ZiDingYi.enemyCoreSpawnReplace = false;//攻击图核心变刷怪点
ZiDingYi.allowLaunchSchematics = false;//开启发射核心蓝图
ZiDingYi.allowLaunchLoadout = false;//开启携带资源发射
ZiDingYi.allowSectorInvasion = false;//模拟攻击图入侵
ZiDingYi.allowWaveSimulation = false;//模拟后台波次
ZiDingYi.updateLighting = false;
exports.ZiDingYi = ZiDingYi;



const SY2 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(SY2, 6));
        this.super$load();
    }
}, "satellite2", GThree, 0.2);
sS.planetGrid(SY2, 0);
SY2.generator = new SerpuloPlanetGenerator();
SY2.atmosphereColor = Color.valueOf("645bff");
SY2.atmosphereRadIn = 0.01;
SY2.atmosphereRadOut = 0.1;
//SY2.localizedName = Core.bundle.format("creator.SY2");
SY2.startSector = 1;
SY2.orbitRadius = 3;
SY2.accessible = false




/* 
const 测试1 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(测试1, 6));
        this.super$load();
    }
}, "测试1", Planets.sun, 1);
sS.planetGrid(测试1, 3);

const c1 = Color.valueOf("faa14c"), c2 = Color.valueOf("ff3368"), out = Color.valueOf("bdf251");
测试1.generator = extend(PlanetGenerator, {
    getColor(position) {
        var depth = Simplex.noise3d(2, 2, 0.56, 1.7, position.x, position.y, position.z) / 2;
        return c1.write(out).lerp(c2, Mathf.clamp(Mathf.round(depth, 0.25)));
    },
    allowLanding(sector) {
        return false;
    },//关闭数字区块
});

测试1.alwaysUnlocked = true;
测试1.accessible = true;
测试1.startSector = 1;//开始降落区块
测试1.alwaysUnlocked = true;
const Maps230 = new SectorPreset("测试", 测试1, 1);
Maps230.difficulty = 9;
Maps230.localizedName = "测试"

 */






// const verilus = Planets.makeAsteroid("创世纪", GThree, Blocks.stoneWall, Blocks.iceWall, 0.5, 12, 2, gen => {
//     gen.berylChance = 0;
//     gen.iceChance = 0.6;
//     gen.carbonChance = 0.1;
//     gen.ferricChance = 0;
// });

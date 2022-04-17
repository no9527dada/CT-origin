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
Planets.serpulo.lightSrcFrom = 0.2,
Planets.serpulo.lightSrcTo = 0.9,
Planets.serpulo.lightDstFrom = 0.05,
Planets.serpulo.lightDstTo = 1
Planets.serpulo.orbitTime = 5*60 
Planets.serpulo.rotateTime = -5.18*60 
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
//orbitTime = 60*60  公转 1小时一圈
//rotateTime = 24f * 60f 自传 24分钟一圈

// const sS = require("BlocksLibes/sectorSize");
//  const SSY3 = new JavaAdapter(Planet, {
//      load() {
//          this.meshLoader = prov(() => new HexMesh(SSY3, 6));
//          this.super$load();
//      }
//  }, "moon", Planets.serpulo, 0.3);
//  sS.planetGrid(SSY3, 1);
//  SSY3.generator = new SerpuloPlanetGenerator();
//  SSY3.atmosphereColor = Color.valueOf("ffa1a1");
//  SSY3.atmosphereRadIn = 0.02;
//  SSY3.atmosphereRadOut = 0.1;
//  //SSY3.localizedName = Core.bundle.format("planet.creator.SSY3");
//  SSY3.startSector = 1;
//  SSY3.orbitRadius = 5;
//  SSY3.accessible = true
//  SSY3.orbitTime = 1*60 
//  SSY3.rotateTime = 1 * 60
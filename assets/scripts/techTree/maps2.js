const lib = require('lib')
const { SY1 ,ZiDingYi} = require('xingqiu');//星球 
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
const { CT_core, CT_core2, CT_core3, CoreJiangLuo, WJcore, CT_core32, } = require('core');

const Map0 = new SectorPreset("zz-Map0-ChuangShiJi", SY1, 0);//创世纪
Map0.alwaysUnlocked = false;//
Map0.captureWave = 801;
Map0.difficulty = 13;
Map0.localizedName = Core.bundle.format("ChuangShiJi")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map0, {
       // parent: CTBlocks.coreShard.name,
        parent: 'god',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps27),//终极战役3
        ),
    });
}));

const Map1 = new SectorPreset("hexinzhuanyi", SY1, 1);//
Map1.alwaysUnlocked = false;//
Map1.difficulty = 7;
Map1.localizedName = Core.bundle.format("CT-1")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map1, {
        parent: 'HXZY',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps45),
        ),
    });
}));
const Map2 = new SectorPreset("hexinzhuanyiX", SY1, 2);//
Map2.alwaysUnlocked = false;//
Map2.difficulty = 13;
Map2.localizedName = Core.bundle.format("CT-2")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map2, {
        parent: 'hexinzhuanyi',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps45),
        ),
    });
}));

const Map3 = new SectorPreset("chongling0hao", SY1, 3);//
Map3.alwaysUnlocked = false;//
Map3.addStartingItems = true;
Map3.captureWave = 50;
Map3.difficulty = 13;
Map3.localizedName = Core.bundle.format("CT-3")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map3, {
        parent: 'groundZero-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(groundZero),
        ),
    });
}));
const Map4 = new SectorPreset("chongling0haoX", SY1, 4);//
Map4.alwaysUnlocked = false;//
Map4.addStartingItems = true;
Map4.captureWave = 50;
Map4.difficulty = 13;
Map4.localizedName = Core.bundle.format("CT-4")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map4, {
        parent: 'chongling0hao',
        objectives: Seq.with(
            new Objectives.SectorComplete(groundZero),
        ),
    });
}));
const Map5 = new SectorPreset("X1", SY1, 5);//
Map5.alwaysUnlocked = false;//
Map5.addStartingItems = true;
Map5.captureWave = 2;
Map5.difficulty = 1;
Map5.localizedName = Core.bundle.format("CT-5")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map5, {
        parent: 'ZY2',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps52),
        ),
    });
}));
const Map6 = new SectorPreset("X2", SY1, 6);//
Map6.alwaysUnlocked = false;//
Map6.addStartingItems = true;
Map6.captureWave = 2;
Map6.difficulty = 1;
Map6.localizedName = Core.bundle.format("CT-6")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map6, {
        parent: 'ZY3',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps147),
        ),
    });
}));
const Map7 = new SectorPreset("CT2-HuangSha", SY1, 7);//
Map7.alwaysUnlocked = false;//
Map7.addStartingItems = true;
Map7.captureWave = 50;
Map7.difficulty = 13
Map7.localizedName = Core.bundle.format("CT-7")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map7, {
        parent: 'YuXi',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps189),
        ),
    });
}));

const Map8 = new SectorPreset("CT2-SiWang", SY1, 8);//
Map8.alwaysUnlocked = false;//
Map8.addStartingItems = true;
Map8.difficulty = 13
Map8.localizedName = Core.bundle.format("CT-8")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map8, {
        parent: 'ZY1',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps104),//资源分配区1
            new Objectives.Research(CTItem.weijing2),//研究资源 微晶2
        ),
    });
}));
const Map9 = new SectorPreset("CT2-SiWang-wuxian", SY1, 9);//
Map9.alwaysUnlocked = false;//
Map9.addStartingItems = true;
Map9.difficulty = 13
Map9.localizedName = Core.bundle.format("CT-9")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map9, {
        parent: 'CT2-SiWang',
        objectives: Seq.with(
            new Objectives.SectorComplete(Maps104),
            new Objectives.Research(WJcore),//研究资源 微晶核心
        ),
    });
}));
const Map10 = new SectorPreset("CT2-ShuangGuan", SY1, 10);//
Map10.alwaysUnlocked = false;//
Map10.addStartingItems = true;
Map10.captureWave = 11;
Map10.difficulty = 13
Map10.localizedName = Core.bundle.format("CT-10")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map10, {
        parent: 'nuclearComplex-CT',
        objectives: Seq.with(
            new Objectives.SectorComplete(nuclearComplex),//占领和列阵
        ),
    });
}));
const Map11 = new SectorPreset("CT2-ShuangGuanX", SY1, 11);//
Map11.alwaysUnlocked = false;//
Map11.addStartingItems = true;
Map11.captureWave = 11;
Map11.difficulty = 13
Map11.localizedName = Core.bundle.format("CT-11")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map11, {
        parent: 'CT2-ShuangGuan',
    });
}));
/********************************************************* */




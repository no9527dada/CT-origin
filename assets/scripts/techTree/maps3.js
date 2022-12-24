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


const Map0 = new SectorPreset("X0", ZiDingYi, 0);//说明
Map0.alwaysUnlocked = true;//
//Map0.captureWave = 801;
Map0.difficulty = 13;
Map0.localizedName = Core.bundle.format("shuoming")
Events.on(ContentInitEvent, cons(e => {
    lib.addToResearch(Map0, {
        parent: CTBlocks.coreShard.name
    });
}));

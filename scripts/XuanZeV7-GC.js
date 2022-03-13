const V7 = require("XuanZeV7");

const testC = V7.MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "ResearchUnits", [
  {
    input: {
      items: ["metaglass/30", "silicon/20"],
      power: 1,
    },
    output: {
      items: ["creators-lv1/1"],
    },
    craftTime: 180,
  },

  {
    input: {
      items: ["plastanium/20", "phase-fabric/20",],//地图2或3必须要有地面石油
      liquids: ["water/6"],
      power: 2,
    },
    output: {
      items: ["creators-lv2/1"],
    },
    craftTime: 300,
  },

  {
    input: {
      items: ["surge-alloy/50", "phase-fabric/20",],
      liquids: ["cryofluid/12"],
      power: 4,
    },
    output: {
      items: ["creators-lv3/1"],
    },
    craftTime: 540,
  },

  {
    input: {
      items: ["surge-alloy/15", "creators-weijing1/10",],
      liquids: ["creators-moliye/9"],
      power: 9,
    },
    output: {
      items: ["creators-lv4/1"],
    },
    craftTime: 720,
  },

  {
    input: {
      items: ["creators-monengjing1/3", "creators-weijing2/2",],
      liquids: ["creators-molijinghuaye/6"],
      power: 15,
    },
    output: {
      items: ["creators-lv5/1"],
    },
    craftTime: 900,
  },
  {
    input: {
      items: ["creators-zhayao/3", "creators-monengjing2/1",],
      liquids: ["creators-liziye/6"],
      power: 40,
    },
    output: {
      items: ["creators-lv6/10"],
    },
    craftTime: 1080,
  },
  {
    input: {
      items: ["creators-kuangzajinghuawu/5", "creators-weijing4/1",],
      liquids: ["creators-qiangxiaolengqueye/3"],
      power: 90,
    },
    output: {
      items: ["creators-lv7/4"],
    },
    craftTime: 1200,
  },
]);
Object.assign(testC, {
  health: 2000,
  size: 5,
  buildCostMultiplier: 0.3,
  //alwaysUnlocked: true,
  canOverdrive: false,
  noParallelAffect: false,//false,
  itemCapacity: 100,
  liquidCapacity: 100,
  updateEffectChance: 1.05,
  updateEffect: Fx.steam,
  ambientSound: Sounds.machine,
  ambientSoundVolume: 0.1,
  craftEffect: Fx.steam,
});
testC.requirements = ItemStack.with(
  Items.copper, 10000,
  Items.lead, 10000,
);
testC.buildVisibility = BuildVisibility.shown;
testC.category = Category.crafting;
exports.testC = testC;
//--------------------------------------------------------------------------------
const testB = V7.MultiCrafter1(GenericCrafter, GenericCrafter.GenericCrafterBuild, "cbb", [
  {
    input: {
      liquids: ["cryofluid/30", "water/20"],
      power: 1,
    },
    output: {
      liquids: ["slag/10"],
    },
    craftTime: 180,
  },
]);
Object.assign(testB, {
  health: 2000,
  size: 2,
  buildCostMultiplier: 0.3,
  //alwaysUnlocked: true,
  canOverdrive: false,
  noParallelAffect: false,//false,
  itemCapacity: 100,
  liquidCapacity: 100,
  updateEffectChance: 1.05,
  updateEffect: Fx.steam,
  ambientSound: Sounds.machine,
  ambientSoundVolume: 0.1,
  craftEffect: Fx.steam,
});
testB.requirements = ItemStack.with(
  Items.copper, 1,
  Items.lead, 1,
);
testB.buildVisibility = BuildVisibility.shown;
testB.category = Category.crafting;
exports.testB = testB;
const items = CTItem
const lib = require('lib');
const {   // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
       molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou,dabaozhiwujingyou,
    dabaoJHLiquid,dabaojinglianlio,dabaomoli, dabaozhiwu, dabaojingmoli, 
    dabaoyedan,zhiwujingyou,jinglianlio,
    JHhejinLiquid,JHhejin,gutaiwanqin,taihejin,
} = items;
const rainbowRegions = [];
const weijing4GC = extend(GenericCrafter, "c-4jiweijinggongchang", {
    load() {
        this.super$load();
        for (var i = 0; i < 10; i++) {
            rainbowRegions[i] = Core.atlas.find("creators-gc4-" + (i + 1));
        }
    },

});
weijing4GC.buildType = prov(() => {
    const tif = 20; //贴图间的延迟变色速度，越大越不同
    const tid = 2; //贴图变色速度，越大越快
    const tr2 = new Vec2();
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            // tr2.trns(this.rotation, -this.recoil);
            Draw.blend(Blending.additive);
            for (var h = 0; h < 10; h++) {
                Draw.color(Color.valueOf("ff0000").shiftHue((Time.time * tid) + (h * (360 / tif))));
                Draw.rect(rainbowRegions[h], this.x, this.y, this.rotation - 90);
            }
            Draw.blend();
            Draw.color();
            //Draw.rect(Core.atlas.find("creators-pu-b"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-gcx"), this.x, this.y, 90 + this.totalProgress * 3.5)
            //Draw.rect(Core.atlas.find("creators-gcx2"), this.x, this.y, 90 - this.totalProgress * 3);
            // Draw.rect(Core.atlas.find("creators-pu-top"),this.x, this.y);
        },

    }, weijing4GC);
});
weijing4GC.health = 3000; //微晶工厂4
weijing4GC.size = 8;
weijing4GC.itemCapacity = 800;
weijing4GC.liquidCapacity = 150;
weijing4GC.buildCostMultiplier = 0.2;
weijing4GC.hasPower = true;
weijing4GC.hasItems = true;
weijing4GC.hasLiquid = true;
weijing4GC.craftTime = 18000;
weijing4GC.craftEffect = CreatorsFX.nuclearcloud;
weijing4GC.updateEffect = CreatorsFX.impactShockwave;
weijing4GC.coolEffect = CreatorsFX.nuclearcloud;
weijing4GC.updateEffectChance = 0.1
weijing4GC.consumePower(2000);
weijing4GC.consumeLiquid(molijinghuaye, 1);
weijing4GC.consumeItems(new ItemStack.with(
    Items.surgeAlloy, 560,
    zuanjing, 520,
    monengjing1, 60,
    weijing3, 50,
    jin, 650,
    jingliantai, 700,
    molizhi, 220,
    zijing1, 640));
weijing4GC.outputItem = new ItemStack(
    weijing4, 1,
);
weijing4GC.requirements = ItemStack.with(
    Items.copper, 1000,
    Items.lead, 1200,
    Items.silicon, 2000,
    Items.titanium, 800,
    molishi, 700,
    weijing2, 500,
    weijing3, 120,
    zuanjing, 200,
);
weijing4GC.buildVisibility = BuildVisibility.shown;
weijing4GC.category = Category.crafting;
exports.weijing4GC = weijing4GC;




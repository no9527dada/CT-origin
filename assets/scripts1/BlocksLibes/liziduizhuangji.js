const items = CTItem
const lib = require('lib');
const {
   // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
     molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou,dabaozhiwujingyou,
    dabaoJHLiquid,dabaojinglianlio,dabaomoli, dabaozhiwu, dabaojingmoli, 
    dabaoyedan,zhiwujingyou,jinglianlio,hejinboli,
    JHhejinLiquid,JHhejin,gutaiwanqin,taihejin,
} = items;
const liziduizhuangjii = extend(GenericCrafter, "z-1liziduizhuangji", {});
liziduizhuangjii.buildType = prov(() => {
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-d"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f1"), this.x, this.y, 90 + this.totalProgress * 9)
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f2"), this.x, this.y, 90 - this.totalProgress * 9);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f7"), this.x, this.y, 90 - this.totalProgress * 3)
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-top"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f3"), this.x, this.y, 45 + this.totalProgress * 4);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f4"), this.x, this.y, 45 - this.totalProgress * 4);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f5"), this.x, this.y, 90 + this.totalProgress * 4)
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f6"), this.x, this.y, 90 - this.totalProgress * 4);
        },

    }, liziduizhuangjii);
});
liziduizhuangjii.health = 2800;//粒子机
liziduizhuangjii.size = 4;
liziduizhuangjii.hasPower = true;
liziduizhuangjii.hasItems = true;;
liziduizhuangjii.buildCostMultiplier = 30;
liziduizhuangjii.itemCapacity = 3000;
liziduizhuangjii.craftTime = 10800;
liziduizhuangjii.updateEffect = Fx.mineHuge;
liziduizhuangjii.updateEffectChance = 0.1;
liziduizhuangjii.consumePower(13333.333333);
liziduizhuangjii.consumeItems(new ItemStack.with(
    monengjing3, 3,
    weijing5, 2,
    weijing4, 15,
    weijing3, 90,
    weijing2, 320,
    weijing1, 750,
    guijingti, 3000
));
liziduizhuangjii.outputItem = new ItemStack(
    chuangshilizi, 1,
);
liziduizhuangjii.requirements = ItemStack.with(
    weijing5, 8,
    monengjing, 120,
    zijing1, 340,
    zuanjing, 650,
    hejinboli,800
);
liziduizhuangjii.buildVisibility = BuildVisibility.shown;
liziduizhuangjii.category = Category.crafting;
exports.duizhuangji = liziduizhuangjii;












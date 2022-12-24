//本JS是关于地面地板和一些状态
const {
    yuanwan0, jingliantai, molishi, jin, shiying, zuanshikuang, weijing4,suan,moliye,
} = CTItem
const status = require('Status');
//---------------------@部分神魂编写
/* exports.Orejingliantai = (() => {
    const v = extend(OreBlock, "Ore-jingliantai", {});//
    v.itemDrop = jingliantai
    v.oreDefault = true//自定义地图自动生成
    v.oreScale = 24//自动生成的默认规模
    v.oreThreshold = 0.9////自动生成的默认密集度
    v.playerUnmineable = true
    v.variants = 3
    v.useColor = true
    return v;
})();
exports.Oremolishi = (() => {
    const v = extend(OreBlock, "Ore-molishi", {});//
    v.itemDrop = molishi
    v.oreDefault = true//自定义地图自动生成
    v.oreScale = 24//自动生成的默认规模
    v.oreThreshold = 0.9////自动生成的默认密集度
    v.playerUnmineable = true
    v.variants = 3
    v.useColor = true
    return v;
})();
exports.Orejin = (() => {
    const v = extend(OreBlock, "Ore-jin", {});//
    v.itemDrop = jin
    v.oreDefault = true//自定义地图自动生成
    v.oreScale = 30//自动生成的默认规模
    v.oreThreshold = 0.86////自动生成的默认密集度
    v.playerUnmineable = true
    v.variants = 3
    v.useColor = true
    return v;
})();
exports.Oreshiying = (() => {
    const v = extend(OreBlock, "Ore-shiying", {});//
    v.itemDrop = shiying
    v.oreDefault = true//自定义地图自动生成
    v.oreScale = 30//自动生成的默认规模
    v.oreThreshold = 0.84////自动生成的默认密集度
    v.playerUnmineable = true
    v.variants = 3
    v.useColor = true
    return v;
})();
exports.Orezuankuang = (() => {
    const v = extend(OreBlock, "Ore-zuankuang", {});//
    v.itemDrop = zuanshikuang
    v.oreDefault = true//自定义地图自动生成
    v.oreScale = 45//自动生成的默认规模
    v.oreThreshold = 0.92////自动生成的默认密集度
    v.playerUnmineable = true
    v.variants = 4
    v.useColor = true
    return v;
})();
exports.Oreweijing4 = (() => {
    const v = extend(OreBlock, "Ore-weijing4", {});//
    v.itemDrop = weijing4
    v.oreDefault = true//自定义地图自动生成
    v.oreScale = 40//自动生成的默认规模
    v.oreThreshold = 0.93////自动生成的默认密集度
    v.playerUnmineable = true
    v.variants = 3
    v.useColor = true
    return v;
})();
 */
exports.wusha = (() => {
    const v = extend(Floor, "wusha", {});//污沙
    v.itemDrop = Items.sand;
    v.playerUnmineable = true;
    v.variants = 3;
    v.attributes.set(Attribute.spores, 0.1,);
    v.attributes.set(Attribute.oil, 1.8);
    return v;
})();


// const molishui = extend(Floor, "molishui", {});//魔力水
// molishui.liquidDrop = moliye;
// molishui.status = StatusEffects.wet;
// molishui.cacheLayer = CacheLayer.water;
// molishui.space = false;
// molishui.isLiquid = true;
// molishui.variants = 0;
// molishui.emitLight = true;


const suanDiMian = extend(Floor, "suanshui", {});//酸水面
suanDiMian.liquidDrop = suan;
suanDiMian.drownTime = 140;
suanDiMian.status = status.suan2Effect;//状态：强酸
suanDiMian.cacheLayer = CacheLayer.water;
suanDiMian.space = false;
suanDiMian.isLiquid = true;
suanDiMian.variants = 3;
suanDiMian.emitLight = true;
suanDiMian.lightColor = Color.valueOf("53ea0064");

const At = require('Attribute');


exports.suandiban = (() => {
    const v = extend(Floor, "suandiban", {});//酸的地面
    v.status = status.suanEffect;//状态：弱酸
    v.attributes.set(At.suand,1)
    v.lightRadius = 50;
    v.variants = 3;
    return v;
})();
exports.wanfloor = (() => {
    const v = extend(Floor, "wanfloor", {});
    //v.playerUnmineable = true;
    v.attributes.set(Attribute.heat, 0.6);
    v.attributes.set(Attribute.water, -0.5);
    //v.blendGroup = basalt;
    v.emitLight = true;
    v.status = StatusEffects.burning;//状态：燃烧
    v.lightRadius = 30;
    v.lightColor = Color.valueOf("ff1c0064");
    v.variants = 3;
    return v;
})();
exports.yuanwan1 = (() => {
    const v = extend(Floor, "yuanwann", {});//沅烷地板
    v.liquidDrop = yuanwan0;
    v.drownTime = 7 * 60;
    v.status = status.burningS;//状态
    v.cacheLayer = CacheLayer.slag;
    v.emitLight = true;//发光
    v.lightRadius = 60;
    v.lightColor = Color.valueOf("ff1c0064");
    v.space = false;
    v.isLiquid = true;
    v.variants = 0;
    v.attributes.set(Attribute.heat, 0.90);
    return v;
})();

const suanqiang = extend(StaticWall, "suans", {});//
suanqiang.variants = 2;

const huoqiang = extend(StaticWall, "huoss", {});//
huoqiang.variants = 2;

const huoqiangg = extend(StaticTree, "huoqiangq", {});//
huoqiangg.variants = 0;

exports.huoshitou = (() => {//火石头
    const v = extend(Prop, "huoshitou", {});//
    v. variants = 2;
    return v;
})();
exports.huoshitou = (() => {//枯萎火松
    const v = extend(TreeBlock, "huosong-dead", {});//
    return v;
})();
exports.huoshitou = (() => {//火松
    const v = extend(TreeBlock, "huosong", {});//
    return v;
})();
 //本局禁用发电机，请使用电池放电器进行生电


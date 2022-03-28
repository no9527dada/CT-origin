
const Status = require('Status');
//白, 绿, 黄, 橙, 红, 蓝, 紫,

/* exports.白 = (() => {
    const v = extendContent(Item, 'lv1', Color.valueOf("DCE2D9"), {});
    return v;
})();
exports.绿 = (() => {
    const v = extendContent(Item, 'lv2', Color.valueOf("60F700"), {});
    return v;
})();
exports.黄 = (() => {
    const v = extendContent(Item, 'lv3', Color.valueOf("E5CF00"), {});
    return v;
})();
exports.橙 = (() => {
    const v = extendContent(Item, 'lv4', Color.valueOf("C16E29"), {});
    return v;
})();
exports.红 = (() => {
    const v = extendContent(Item, 'lv5', Color.valueOf("CF5058"), {});
    return v;
})();
exports.蓝 = (() => {
    const v = extendContent(Item, 'lv6', Color.valueOf("009FB1"), {});
    return v;
})();
exports.紫 = (() => {
    const v = extendContent(Item, 'lv7', Color.valueOf("947AE8"), {});
    return v;
})();
 */
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

exports.shiying = (() => {
    const v = extendContent(Item, 'shiying', Color.valueOf("ffffff"), {});
    v.hardness = 2
    return v;
})();
exports.guijingti = (() => {
    const v = extendContent(Item, 'guijingti', Color.valueOf("DDDDFF"), {});
    return v;
})();
exports.shimoxi = (() => {
    const v = extendContent(Item, 'shimoxi', Color.valueOf("3419ff"), {});
    return v;
})();
exports.hejinboli = (() => {
    const v = extendContent(Item, 'hejinboli', Color.valueOf("F3D272"), {});
    v.charge = 0.3;//放电性，被破坏产生电弧
    return v;
})();
exports.jinhuiboli = (() => {
    const v = extendContent(Item, 'jinhuiboli', Color.valueOf("F3D272"), {});
    v.charge = 0.3;//放电性，被破坏产生电弧
    return v;
})();
exports.xudianchi = (() => {
    const v = extendContent(Item, 'xudianchi', Color.valueOf("F3D272"), {});
    v.charge = 1;//放电性，被破坏产生电弧
    return v;
})();
exports.jingliantai = (() => {
    const v = extendContent(Item, 'jingliantai', Color.valueOf("CECEFF"), {});
    v.hardness = 3;
    return v;
})();
exports.taihejin = (() => {
    const v = extendContent(Item, 'taihejin', Color.valueOf("B8C9FF"), {});
    return v;
})();
exports.buding = (() => {
    const v = extendContent(Item, 'buding', Color.valueOf("FFD59E"), {});
    return v;
})();
exports.hua1 = (() => {
    const v = extendContent(Item, '1hua', Color.valueOf("FF0080"), {});
    v.flammability = 0.2;
    return v;
})();
exports.hua2 = (() => {
    const v = extendContent(Item, '2hua', Color.valueOf("EA0000"), {});
    v.flammability = 0.2;
    return v;
})();
exports.hua3 = (() => {
    const v = extendContent(Item, '3hua', Color.valueOf("2828FF"), {});
    v.flammability = 0.2;
    return v;
})();
exports.zhiwumo = (() => {
    const v = extendContent(Item, 'zhiwusuimo', Color.valueOf("487a51"), {});
    v.flammability = 0.5;
    return v;
})();
exports.canza = (() => {
    const v = extendContent(Item, 'canza', Color.valueOf("487a51"), {});
    v.flammability = 0.5;
    return v;
})();
exports.kuangzajinghuawu = (() => {
    const v = extendContent(Item, 'kuangzajinghuawu', Color.valueOf("842B00"), {});
    //  v.alwaysUnlocked = true;
    return v;
})();
exports.tanban = (() => {
    const v = extendContent(Item, 'tanban', Color.valueOf("2a2a27"), {});
    v.flammability = 2
    return v;
})();
exports.zuanshikuang = (() => {
    const v = extendContent(Item, 'zuankuang', Color.valueOf("006030"), {});
    v.hardness = 7
    return v;
})();
exports.zuanjing = (() => {
    const v = extendContent(Item, 'zuanjing', Color.valueOf("4EFEB3"), {});
    return v;
})();
exports.xiao = (() => {
    const v = extendContent(Item, 'xiao', Color.valueOf("E0E0E0"), {});
    v.flammability = 1;
    return v;
})();
exports.zhayao = (() => {
    const v = extendContent(Item, 'zhayao', Color.valueOf("FF2D2D"), {});
    v.flammability = 0.7;
    v.explosiveness = 5;
    return v;
})();
exports.gutaiwanqin = (() => {
    const v = extendContent(Item, 'gutaiwanqin', Color.valueOf("E598EE"), {});
    v.flammability = 0.78;
    v.explosiveness = 3;
    return v;
})();
exports.juhebaozhawu = (() => {
    const v = extendContent(Item, 'juhebaozhawu', Color.valueOf("f10fff"), {});
    v.flammability = 1.5;
    v.explosiveness = 3;
    v.radioactivity = 0.3;
    return v;
})();
exports.JHhejin = (() => {
    const v = extendContent(Item, 'JHhejin', Color.valueOf("E8D123"), {});
    return v;
})();
exports.jinfen = (() => {
    const v = extendContent(Item, 'jinfen', Color.valueOf("FFE153"), {});
    return v;
})();
exports.jin = (() => {
    const v = extendContent(Item, 'jin', Color.valueOf("FFE153"), {});
    v.hardness = 4
    return v;
})();
exports.zijing1 = (() => {
    const v = extendContent(Item, 'zijing1', Color.valueOf("9F35FF"), {});
    return v;
})();
exports.weijing1 = (() => {
    const v = extendContent(Item, 'weijing1', Color.valueOf("FFFF6F"), {});
    return v;
})();
exports.weijing2 = (() => {
    const v = extendContent(Item, 'weijing2', Color.valueOf("53FF53"), {});
    return v;
})();
exports.weijing3 = (() => {
    const v = extendContent(Item, 'weijing3', Color.valueOf("ffa6ff"), {});
    return v;
})();
exports.weijing4 = (() => {
    const v = extendContent(Item, 'weijing4', Color.valueOf("FF8000"), {});
    v.hardness = 12
    return v;
})();
exports.weijing5 = (() => {
    const v = extendContent(Item, 'weijing5', Color.valueOf("FF5809"), {});
    return v;
})();
exports.molizhi = (() => {
    const v = extendContent(Item, 'molizhi', Color.valueOf("921AFF"), {});
    v.radioactivity = 1
    return v;
})();
exports.molishi = (() => {
    const v = extendContent(Item, 'molishi', Color.valueOf("272727"), {});
    v.radioactivity = 1.4
    v.hardness = 10
    return v;
})();
exports.monengjing = (() => {
    const v = extendContent(Item, 'monengjing', Color.valueOf("3C3C3C"), {});
    v.radioactivity = 1.6
    return v;
})()
exports.monengjing1 = (() => {
    const v = extendContent(Item, 'monengjing1', Color.valueOf("28004D"), {});
    v.radioactivity = 1.8
    return v;
})();
exports.monengjing2 = (() => {
    const v = extendContent(Item, 'monengjing2', Color.valueOf("aa67ff"), {});
    v.radioactivity = 2.1
    return v;
})();
exports.monengjing3 = (() => {
    const v = extendContent(Item, 'monengjing3', Color.valueOf("f51212"), {});
    v.radioactivity = 2.5
    return v;
})();
exports.chuangshilizi = (() => {
    const v = extendContent(Item, 'chuangshilizi', Color.valueOf("E1E100"), {});
    return v;
})();
exports.chuangshiweichen = (() => {
    const v = extendContent(Item, 'chuangshiweichen', Color.valueOf("ffffff"), {});
    return v;
})();
exports.chuangshizhixing = (() => {
    const v = extendContent(Item, 'chuangshizhixing', Color.valueOf("ffffff"), {});
    return v;
})();
exports.yuanshencanpian = (() => {
    const v = extendContent(Item, 'yuanshencanpian', Color.valueOf("EA0000"), {});
    return v;
})();
exports.chuangshishenhun = (() => {
    const v = extendContent(Item, 'chuangshishenhun', Color.valueOf("EA0000"), {});
    return v;
})();
exports.zzjinbi = (() => {
    const v = extendContent(Item, 'zz-jinbi', Color.valueOf("f4bc57"), {});
    return v;
})();
exports.dabaoshui = (() => {
    const v = new Item("dabaoshui", Color.valueOf("529eff"));
    return v;
})();//
exports.dabaoleng = (() => {
    const v = new Item("dabaoleng", Color.valueOf("1fc9ff"));
    return v;
})();//
exports.dabaoshiyou = (() => {
    const v = new Item("dabaoshiyou", Color.valueOf("000000"));
    return v;
})();//
exports.dabaojinglianlio = (() => {
    const v = new Item("dabaojinglianlio", Color.valueOf("6b675f"));
    return v;
})();//
exports.dabaomoli = (() => {
    const v = new Item("dabaomoli", Color.valueOf("881fff"));
    return v;
})();//

exports.dabaozhiwujingyou = (() => {
    const v = new Item("dabaozhiwujingyou", Color.valueOf("2f5d42"));
    return v;
})();//
exports.dabaozhiwu = (() => {
    const v = new Item("dabaozhiwu", Color.valueOf("73f58a"));
    return v;
})();//
exports.dabaojingmoli = (() => {
    const v = new Item("dabaojingmoli", Color.valueOf("d296fb"));
    return v;
})();//\
exports.dabaoJHLiquid = (() => {
    const v = new Item("dabaoJHLiquid", Color.valueOf("FFE166"));
    return v;
})();//

exports.dabaoyedan = (() => {
    const v = new Item("dabaoyedan", Color.valueOf("fefefe"));
    return v;
})();//

exports.nulls = (() => {
    const v = extendContent(Item, 'null', {});
    v.alwaysUnlocked = true;
    return v;
})();
//*********************************************************/
exports.zhiwujingyou = (() => {
    const v = extendContent(Liquid, 'zhiwujingyou', Color.valueOf("2f5d42"), {});
    v.flammability = 0.2
    v.temperature = 0.6
    v.heatCapacity = 0
    v.viscosity = 0.9
    v.explosiveness = 0
    return v;
})();
exports.zhiwujinghuaye = (() => {
    const v = extendContent(Liquid, 'zhiwujinghuaye', Color.valueOf("CEFFCE"), {});
    //v.alwaysUnlocked = true
    v.flammability = 0
    v.temperature = 0
    v.heatCapacity = 0.6
    v.viscosity = 0.2
    v.explosiveness = 0
    return v;
})();
exports.jinglianlio = (() => {//精炼石油
    const v = new Liquid("jinglianlio", Color.valueOf("6b675f"));
    v.viscosity = 0;
    v.flammability = 1.2;
    v.explosiveness = 1.5;
    v.heatCapacity = 0.7;
    v.barColor = Color.valueOf("8e8e8c");
    v.effect = StatusEffects.tarred;
    return v;
})();//
exports.moliye = (() => {
    const v = extendContent(Liquid, 'moliye', Color.valueOf("28004D"), {});
    v.flammability = 0
    v.temperature = 0
    v.heatCapacity = 0.8
    v.viscosity = 0.2
    v.explosiveness = 0
    return v;
})();
exports.molijinghuaye = (() => {
    const v = extendContent(Liquid, 'molijinghuaye', Color.valueOf("BE77FF"), {});
    v.flammability = 0
    v.temperature = 0
    v.heatCapacity = 1.5
    v.viscosity = 0.2
    v.explosiveness = 0
    return v;
})();
exports.JHhejinLiquid = (() => {
    const v = new Liquid("JHLiquid", Color.valueOf("FFE166"));//金辉液体
    v.viscosity = 0.5;//气化
    v.temperature = 0.6;//高温
    v.flammability = 0;//可燃
    v.explosiveness = 0;//爆炸
    v.heatCapacity = 0;//低温
    v.effect = StatusEffects.melting;//状态：融化燃烧
    return v;
})();//

exports.suan = (() => {
    const v = new Liquid("suan", Color.valueOf("005e13"));//酸
    v.heatCapacity = 0.3
    v.effect = Status.suan2Effect//状态：强酸
    return v;
})();//
exports.yuanwan0 = (() => {
    const v = new Liquid("yuanwan", Color.valueOf("9e1c1c"));//沅烷
    v.viscosity = 0.01;//气化
    v.temperature = 2;//高温
    v.flammability = 2.5;//可燃
    v.explosiveness = 3;//爆炸
    v.heatCapacity = 0;//低温
    v.effect = StatusEffects.melting;//状态：融化燃烧
    return v;
})();//

exports.liziye = (() => {
    const v = new Liquid("liziye", Color.valueOf("ff0000"));
    v.heatCapacity = 0;
    v.temperature = 2;
    v.flammability = 2;
    v.explosiveness = 3;
    v.viscosity = 0.7;
    v.effect = Status.ionBurningEffect1;
    return v;
})();//
exports.qiangxiaolengqueye = (() => {
    const v = extendContent(Liquid, 'qiangxiaolengqueye', Color.valueOf("ffffff"), {});
    v.flammability = 0//可燃性
    v.temperature = 0//温度
    v.heatCapacity = 3.8//装弹速度
    v.viscosity = 0.8//粘度
    v.explosiveness = 0//爆炸
    v.effect = Status.effectX;
    return v;
})();



//天气
//酸雨
exports.suanyu = (() => {
    const a = extend(RainWeather, "yu", {})
    a.status = Status.suanEffect;
    a.sound = Sounds.rain;
    a.soundVol = 1.25;
    a.attrs.set(Attribute.light, -0.5);
    a.color = Color.valueOf("5fec1b");
    a.liquid = exports.suan;
    a.yspeed = 5;
    a.xspeed = 1.5;
    a.padding = 16;
    a.density = 1200;
    a.stroke = 0.75;
    a.sizeMin = 16;
    a.sizeMax = 40;
    a.splashTimeScale = 22;
    //a.splashes = new TextureRegion[12];
    return a;
})();

//黄雪 照明 单位血量减半，持续恢复血量48/s
exports.xue = (() => {
    const a = extend(ParticleWeather, "xue", {})
    a.sizeMax = 13;
    a.sizeMin = 2.6;
    a.density = 1200;
    a.particleRegion = "creators-particle1";
    a.attrs.set(Attribute.heat, -0.5);//地热效率下降
    a.attrs.set(Attribute.water, 0.3);//抽水效率上升
    a.sound = Sounds.windhowl;
    a.soundVol = 0;
    a.status = Status.huangxue;
    a.soundVolOscMag = 1.5;
    a.soundVolOscScl = 1100;
    a.soundVolMin = 0.02;
    return a;
})();
//白雾  完全遮挡视线 一般20s-60s  单位血量增加140% 持续扣血量15/s
exports.wu = (() => {
    const a = extend(ParticleWeather, "wu", {})
    a.duration = 15 * Time.toMinutes;
    a.noiseLayers = 30;//《---
    a.noiseLayerSclM = 0.8;
    a.noiseLayerAlphaM = 0.995;//《---
    a.noiseLayerSpeedM = 2;
    a.noiseLayerSclM = 100.6;
    a.baseSpeed = 0.005;
    a.color = Color.white
    a.noiseColor = Color.white
    a.noiseScale = 1100;
    a.noisePath = "fog";
    a.drawParticles = false;
    a.drawNoise = true;
    a.useWindVector = false;
    a.xspeed = 1;
    a.status = Status.baiwu;
    a.yspeed = 1;
    a.attrs.set(Attribute.light, -0.8);//照明下降
    a.opacityMultiplier = 0.47;
    return a;
})();

//风沙 抽水机-20效率
exports.fengsha = (() => {
    const a = extend(ParticleWeather, "fengsha", {})
   a.color = Color.valueOf("f89b49")
   a.noiseColor = Color.valueOf("f89b49");
   a.particleRegion = "creators-particle1";
   a.drawNoise = true;
   a.useWindVector = true;
   a.sizeMax = 140;
   a.sizeMin = 70;
   a.minAlpha = 0;
   a.maxAlpha = 0.2;
   a.density = 1500;
   a.baseSpeed = 5.4;
   a.status = Status.fengsha;
   a.attrs.set(Attribute.water, -0.2);//抽水效率下降
   a.opacityMultiplier = 0.35;
   a.force = 0.1;
   a.sound = Sounds.wind;
   a.soundVol = 0.8;
   a.duration = 7 * Time.toMinutes;
    return a;
})();

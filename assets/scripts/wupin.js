
const Status = require('Status');
CTItem.suan.effect = Status.suan2Effect//状态：强酸

CTItem.liziye.effect = Status.ionBurningEffect1;

CTItem.qiangxiaolengqueye.effect = Status.effectX;




//天气
//酸雨
exports.suanyu = (() => {
    const a = extend(RainWeather, "yu", {})
    a.status = Status.suanEffect;
    a.sound = Sounds.rain;
    a.soundVol = 1.25;
    a.attrs.set(Attribute.light, -0.5);
    a.color = Color.valueOf("5fec1b");
    a.liquid = CTItem.suan;
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
    a.noiseLayers = 15;//《---
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


const FPSChuanShu = require('Blocks/Blocks-ChuanShu');//物流
const FPSfactory = require('Blocks/Blocks-factory');//工厂
const FPSdefense = require('Blocks/Blocks-defense');//防御设施
// const FPSpower = require('Blocks/Blocks-power');
// const FPSDC = require('turrets/DC');//炮台
// const FPSunits = require('units');//单位
// const FPSdrills = require('Blocks/Blocks-drills');

const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun, mieshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, dabaocobo, cobo,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
       molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, canza, hejinboli, xudianchi,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin, jinhuiboli,
} = CTItem
const {gammaSplus,gammaSpluswwee,CT_core3Unit,
    CT_core3Unit2,
}  =require('units/gammaSplus');
//----------------------------------------------

gammaSplus.abilities.add(gammaSpluswwee);
CT_core3Unit2.abilities.add(gammaSpluswwee);
CT_core3Unit.abilities.add(gammaSpluswwee);
const rangee = 5 * 8;//明亮范围
const brightness = 0.4;//亮度
//var itemG = molizhi;//物品
CTBlocks.payloadLoader.buildType = prov(() => {
    return new JavaAdapter(PayloadLoader.PayloadLoaderBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-PayloadUnloader-1"), this.x, this.y, 90 - Time.time * 3);
        },
    }, CTBlocks.payloadLoader);
});
CTBlocks.siliconSmelter.buildType = () => {
    var transparency = 0.3
    var colors = [Color.valueOf("ffffff"), Color.valueOf("cdcddb"), Color.valueOf("7d7d7d"), Color.valueOf("242425")];
    var colorTimer = 30;
    var region = Core.atlas.find("creators-b");
    return extend(GenericCrafter.GenericCrafterBuild, CTBlocks.siliconSmelter, {
        draw() {
            this.super$draw();

            Draw.color(colors[Math.floor(this.totalProgress % (colors.length * colorTimer) / colorTimer)], transparency);
            Draw.rect(region, this.x, this.y);
        },
    })
}
CTBlocks.payloadUnloader.buildType = prov(() => {
    return new JavaAdapter(PayloadUnloader.PayloadUnloaderBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-PayloadLoader-1"), this.x, this.y, 90 - Time.time * 3);
        },
    }, CTBlocks.payloadUnloader);
});

FPSChuanShu.conveyor3.buildType = prov(() => {
    var ts = 1;
    var td = 0;
    return new JavaAdapter(Conveyor.ConveyorBuild, {
        delta() {
            return Time.delta * ts;
        },
        applyBoost(intensity, duration) {
            if (intensity >= ts) {
                td = Math.max(td, duration);
            }
            ts = Math.max(ts, intensity);
        },
        updateTile() {
            if (td > 0) {
                td -= Time.delta;
                if (td <= 0) {
                    ts = 1;
                }
            }
            this.timeScale = Math.max(ts * this.power.status, 0.001);
            this.timeScaleDuration = td / Math.max(this.power.status, 0.001);
            if (this.power.status >= 0.001) {
                this.super$updateTile();
            }
        },
        drawLight() {
            let items = this.items;
            if (items != null && items.first() != null) {
                Drawf.light(this.x, this.y, rangee, Tmp.c1.set(items.first().color), brightness);
            }
        },
        /*         drawLight(){
                    if(this.items.get(itemG)){
                        Drawf.light( this.x, this.y, rangee, Tmp.c1.set(itemG.color), brightness);
                    }
                }, */
    }, FPSChuanShu.conveyor3);
});

FPSChuanShu.conveyor31.buildType = prov(() => {
    var ts = 1;
    var td = 0;
    return new JavaAdapter(ArmoredConveyor.ArmoredConveyorBuild, {
        delta() {
            return Time.delta * ts;
        },
        applyBoost(intensity, duration) {
            if (intensity >= ts) {
                td = Math.max(td, duration);
            }
            ts = Math.max(ts, intensity);
        },
        updateTile() {
            if (td > 0) {
                td -= Time.delta;
                if (td <= 0) {
                    ts = 1;
                }
            }
            this.timeScale = Math.max(ts * this.power.status, 0.001);
            this.timeScaleDuration = td / Math.max(this.power.status, 0.001);
            if (this.power.status >= 0.001) {
                this.super$updateTile();
            }
        },
        drawLight() {
            let items = this.items;
            if (items != null && items.first() != null) {
                Drawf.light(this.x, this.y, rangee, Tmp.c1.set(items.first().color), brightness);
            }
        },

    }, FPSChuanShu.conveyor31);
});

CTBlocks.payloadLoader.buildType = prov(() => {
    return new JavaAdapter(PayloadLoader.PayloadLoaderBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-PayloadUnloader-1"), this.x, this.y, 90 - Time.time * 3);
        },
    }, CTBlocks.payloadLoader);
});
CTBlocks.siliconSmelter.buildType = () => {
    var transparency = 0.3
    var colors = [Color.valueOf("ffffff"), Color.valueOf("cdcddb"), Color.valueOf("7d7d7d"), Color.valueOf("242425")];
    var colorTimer = 30;
    var region = Core.atlas.find("creators-b");
    return extend(GenericCrafter.GenericCrafterBuild, CTBlocks.siliconSmelter, {
        draw() {
            this.super$draw();

            Draw.color(colors[Math.floor(this.totalProgress % (colors.length * colorTimer) / colorTimer)], transparency);
            Draw.rect(region, this.x, this.y);
        },
    })
}
CTBlocks.payloadUnloader.buildType = prov(() => {
    return new JavaAdapter(PayloadUnloader.PayloadUnloaderBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-PayloadLoader-1"), this.x, this.y, 90 - Time.time * 3);
        },
    }, CTBlocks.payloadUnloader);
});
FPSfactory.guijingtigongchang.buildType = prov(() => {
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-a-3guijingtigongchang-1"), this.x, this.y, 45 - Time.time * 3);
            Draw.rect(Core.atlas.find("creators-a-3guijingtigongchang-1"), this.x, this.y, 90 + Time.time * 3);
        },
    }, FPSfactory.guijingtigongchang);
});
FPSfactory.jinhuiboliji.buildType =//金辉玻璃机
    () => extend(GenericCrafter.GenericCrafterBuild, FPSfactory.jinhuiboliji, {
        draw() {
            this.super$draw();
            Draw.color(JHhejinLiquid.color);
            Draw.alpha(this.liquids.get(JHhejinLiquid) / FPSfactory.jinhuiboliji.liquidCapacity);
            Draw.rect(Core.atlas.find(FPSfactory.jinhuiboliji.name + "-liquid"), this.x, this.y);
            Draw.reset();
        }
    });

FPSfactory.jiweijinggongchang1.buildType = prov(() => {//微晶工厂
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-c-1jiweijinggongchang-1"), this.x, this.y, 90 + Time.time * 2);
            Draw.rect(Core.atlas.find("creators-c-1jiweijinggongchang-1"), this.x, this.y, 0 - Time.time * 2);
        },
    }, FPSfactory.jiweijinggongchang1);
});

FPSfactory.jiweijinggongchang2.buildType = prov(() => {//微晶工厂2
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-1"), this.x, this.y, 90 + Time.time * 2);
            Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-1"), this.x, this.y, 0 - Time.time * 2);
            Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-2"), this.x, this.y, 90 - this.totalProgress * 5);
            //Draw.rect(Core.atlas.find("creators-c-2jiweijinggongchang-4"), this.x, this.y, 0 - this.totalProgress * 5);
        },
    }, FPSfactory.jiweijinggongchang2);
});

FPSfactory.jiweijinggongchang4.buildType = prov(() => {//微晶工厂4
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
                Draw.rect(Core.atlas.find("creators-gc4-" + (h + 1)), this.x, this.y, this.rotation - 90);
            }
            Draw.blend();
            Draw.color();
            //Draw.rect(Core.atlas.find("creators-pu-b"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-gcx"), this.x, this.y, 90 + this.totalProgress * 3.5)
            //Draw.rect(Core.atlas.find("creators-gcx2"), this.x, this.y, 90 - this.totalProgress * 3);
            // Draw.rect(Core.atlas.find("creators-pu-top"),this.x, this.y);
        },

    }, FPSfactory.jiweijinggongchang4);
});
FPSfactory.jiweijinggongchang5.buildType = prov(() => { //微晶工厂5
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-1"), this.x, this.y, 90 + Time.time * 2);
            Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-1"), this.x, this.y, 0 - Time.time * 2);
            Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-2"), this.x, this.y, 90 + Time.time * 3);
            Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-2"), this.x, this.y, 90 - Time.time * 3);
            // Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-5"), this.x, this.y, 90 + Time.time * 2);
            //Draw.rect(Core.atlas.find("creators-c-5jiweijinggongchang-6"), this.x, this.y, 45 - Time.time * 2);
        },
    }, FPSfactory.jiweijinggongchang5);
});
FPSfactory.liziduizhuangji.buildType = prov(() => {
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        acceptItem(source, item) {
            if (this.block.consumers[1] instanceof ConsumeItems) {
                var itemc = this.block.consumers[1];
                for (var i = 0; i < itemc.items.length; i++) {
                    var itemss = itemc.items[i];
                    if (itemss.item == item) {
                        if (this.items.get(item) < itemss.amount * 2) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
            return false;
        },
        draw() {
            this.super$draw();
            Draw.color(Color.valueOf("b20000"));
            Draw.alpha(Mathf.sin(Time.time * 0.08));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-1"), this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0), this.rotation - 90);
            //Draw.rect(Core.atlas.find("creators-liziduizhuangji-d"), this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0), this.rotation - 90);
            Draw.color(Color.valueOf("b20000"));
            Draw.alpha(Mathf.sin(Time.time * -0.08));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-d"), this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0), this.rotation - 90);
            Draw.blend();
            Draw.color();
            //Draw.rect(Core.atlas.find("creators-liziduizhuangji-d"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f1"), this.x, this.y, 90 + this.totalProgress * 9)
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f2"), this.x, this.y, 90 - this.totalProgress * 9);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f7"), this.x, this.y, 90 - this.totalProgress * 3)
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-top"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f3"), this.x, this.y, 45 + this.totalProgress * 4);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f4"), this.x, this.y, 45 - this.totalProgress * 4);
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f5"), this.x, this.y, 90 + this.totalProgress * 4)
            Draw.rect(Core.atlas.find("creators-liziduizhuangji-f6"), this.x, this.y, 90 - this.totalProgress * 4);
        },

    }, FPSfactory.liziduizhuangji);
});
FPSfactory.oiljinglianchang.buildType =//石油精炼厂
    () => extend(GenericCrafter.GenericCrafterBuild, FPSfactory.oiljinglianchang, {
        draw() {
            this.super$draw();
            Draw.color(jinglianlio.color);
            Draw.alpha(this.liquids.get(jinglianlio) / FPSfactory.oiljinglianchang.liquidCapacity);
            Draw.rect(Core.atlas.find(FPSfactory.oiljinglianchang.name + "-liquid"), this.x, this.y);
            Draw.reset();
        }
    });
FPSfactory.hejin2.buildType = prov(() => {//高效巨浪合金工厂
    return new JavaAdapter(GenericCrafter.GenericCrafterBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-hejin-1"), this.x, this.y, 45 - Time.time * 2);
            Draw.rect(Core.atlas.find("creators-hejin-2"), this.x, this.y, 45 + Time.time * 2);
        },
    }, FPSfactory.hejin2);
});
FPSfactory.jitilianji3.buildType = prov(() => {//3级提炼机
    return new JavaAdapter(Separator.SeparatorBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();

            Draw.rect(Core.atlas.find("creators-3jitilianji-2"), this.x, this.y, 90 + this.totalProgress * 3);
            Draw.rect(Core.atlas.find("creators-3jitilianji-3"), this.x, this.y, 90 - this.totalProgress * 3);
            Draw.rect(Core.atlas.find("creators-3jitilianji-1"), this.x, this.y);
            // Draw.rect(Core.atlas.find("creators-coree4"), this.x, this.y, 45 + Time.time * 1);
        },
    }, FPSfactory.jitilianji3);
});
FPSfactory.jitilianji4.buildType = prov(() => {//4级提炼机
    return new JavaAdapter(Separator.SeparatorBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-4jitilianji-1"), this.x, this.y, 45 - this.totalProgress * 2);
            Draw.rect(Core.atlas.find("creators-4jitilianji-0"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-4jitilianji-2"), this.x, this.y, 45 - this.totalProgress * 2);
            Draw.rect(Core.atlas.find("creators-4jitilianji-2"), this.x, this.y, 90 + this.totalProgress * 2);
        },
    }, FPSfactory.jitilianji4);
});
FPSdefense.moli2.buildType = () => {
    var transparency = 0.8
    var colors = [Color.yellow, Color.green, Color.blue];
    var index = 0;
    var region = Core.atlas.find("creators-c");
    return extend(Wall.WallBuild, FPSdefense.moli2, {
        draw() {
            this.super$draw();
            if (this.timer.get(30)) index = (index + 1) % colors.length;
            Draw.color(colors[index], transparency);
            Draw.rect(region, this.x, this.y);
        },
    })
};
FPSdefense.hudun3.buildType = prov(() => {
    return new JavaAdapter(ForceProjector.ForceBuild, {
        drawShield() {
            if (!this.broken) {
                var radius = this.realRadius();
                Draw.z(Layer.shields);
                Draw.color(Color.valueOf("515151")/*这里是你要的颜色*/, Color.valueOf("ff5622"), Mathf.clamp(this.hit));

                if (Core.settings.getBool("animatedshields")) {
                    Fill.poly(this.x, this.y, 6, radius);
                } else {
                    Lines.stroke(1.5);
                    Draw.alpha(0.09 + Mathf.clamp(0.08 * this.hit));
                    Fill.poly(this.x, this.y, 6, radius);
                    Draw.alpha(1);
                    Lines.poly(this.x, this.y, 6, radius);
                    Draw.reset();
                }
            }
            Draw.reset();
        }
    }, FPSdefense.hudun3);
});






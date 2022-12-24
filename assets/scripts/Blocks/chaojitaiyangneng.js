const lib = require('lib')
const dsGlobal = require('BlocksLibes/qianzhi');
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi, xudianchi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
    dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
    dabaoyedan, zhiwujingyou, jinglianlio, hejinboli, jinhuiboli,
    JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
} = CTItem
const F = require("all/kuangjiAI");
const EFF = 1
const FFXXAA = new Color.valueOf("ff0000");
exports.jitaiyangneng5 =
    (() => {
        const a = extend(SolarGenerator, "5jitaiyangneng", {
            //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                }
            },
        }); //5级超级太阳能
        a.health = 54321;
        //a.canOverdrive = false;//不可超速 禁止超速
        a.size = 16;
        a.powerProduction = 800000 / 60;
        a.requirements = ItemStack.with(
            chuangshiweichen, 5,
            shimoxi, 20000,
            weijing2, 1000,
            guijingti, 50000,
            tanban, 25000,
            jinhuiboli, 30000,
            monengjing3, 5,
        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.power;
        return a;
    })();
lib.setBuilding(exports.jitaiyangneng5, Block => {
    return new JavaAdapter(SolarGenerator.SolarGeneratorBuild, {
        draw() {
            this.super$draw();

            Draw.color();
            Draw.rect(Core.atlas.find("creators-tyn5-4"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-tyn5-5"), this.x, this.y);

            Tmp.c1.set(F.c("#585C79")).lerp(F.c("#43475E"), Mathf.sin(Time.time * 0.1) * 2.5 + 0.5);

            Draw.mixcol(Tmp.c1, 1);
            Draw.alpha((0.35 + Mathf.sin((Time.time * 0.1) * EFF) * 0.1));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-tyn5-B2"), this.x, this.y);
            Draw.blend();
            Draw.mixcol();
            Draw.color();

            Tmp.c1.set(F.c("#9999ff")).lerp(F.c("#00bbff"), Mathf.sin(Time.time * 0.1) * 2.5 + 0.5);

            Draw.mixcol(Tmp.c1, 1);
            Draw.alpha((0.35 + Mathf.sin((Time.time * 0.1) * EFF) * 0.1));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-tyn5-AA"), this.x, this.y);
            Draw.blend();
            Draw.mixcol();
            Draw.color();

            Tmp.c1.set(F.c("#00bbff")).lerp(F.c("#9999ff"), Mathf.sin(Time.time * 0.1) * 2.5 + 0.5);

            Draw.mixcol(Tmp.c1, 1);
            Draw.alpha((0.35 + Mathf.sin((Time.time * 0.1) * EFF) * 0.1));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-tyn5-BB"), this.x, this.y);
            Draw.blend();
            Draw.mixcol();
            Draw.color();

            Tmp.c1.set(F.c("#dddddd")).lerp(F.c("#444444"), Mathf.sin(Time.time * 0.1) * 2.5 + 0.5);

            Draw.mixcol(Tmp.c1, 1);
            Draw.alpha((0.35 + Mathf.sin((Time.time * 0.1) * EFF) * 0.1));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-tyn5-AAA"), this.x, this.y);
            Draw.blend();
            Draw.mixcol();
            Draw.color();

            Tmp.c1.set(F.c("#444444")).lerp(F.c("#dddddd"), Mathf.sin(Time.time * 0.1) * 2.5 + 0.5);

            Draw.mixcol(Tmp.c1, 1);
            Draw.alpha((0.35 + Mathf.sin((Time.time * 0.1) * EFF) * 0.1));
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-tyn5-BBB"), this.x, this.y);
            Draw.blend();
            Draw.mixcol();
            Draw.color();

            Draw.color(FFXXAA.cpy().shiftHue(Time.time / 2).shiftValue(Mathf.absin(Time.time, 4, 0.15)));
            Draw.alpha(100);
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + 40, this.y + 40, -((Time.time * 1.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + -40, this.y + -40, -((Time.time * 1.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + 40, this.y + -40, -((Time.time * 1.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + -40, this.y + 40, -((Time.time * 1.5) * EFF));

            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + 40, this.y + 40, ((Time.time * 1.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + -40, this.y + -40, ((Time.time * 1.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + 40, this.y + -40, ((Time.time * 1.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1"), this.x + -40, this.y + 40, ((Time.time * 1.5) * EFF));

            Draw.rect(Core.atlas.find("creators-tyn5-1A"), this.x, this.y, ((Time.time * 2.5) * EFF));
            Draw.rect(Core.atlas.find("creators-tyn5-1A"), this.x, this.y, -((Time.time * 2.5) * EFF));
            Draw.reset();

            Draw.color(F.c("#585C79"));
            Draw.alpha(0.5 + Mathf.sin((Time.time * 0.2) * EFF) * 0.1);
            Draw.blend(Blending.additive);
            Draw.rect(Core.atlas.find("creators-tyn5-heat"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-tyn5-heat2"), this.x, this.y);
            Draw.blend();
            Draw.reset();
        }
    }, exports.jitaiyangneng5)

});
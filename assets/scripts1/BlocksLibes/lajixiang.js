/*
*@author <guiY>
*/
const lib = require("lib");
const {
    // 白, 绿, 黄, 橙, 红, 蓝, 紫,
     jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
     kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
     , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
     monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
     , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
     shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
   molijinghuaye, moliye, qiangxiaolengqueye,
     zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou, dabaozhiwujingyou,
     dabaoJHLiquid, dabaojinglianlio, dabaomoli, dabaozhiwu, dabaojingmoli,
     dabaoyedan, zhiwujingyou, jinglianlio, hejinboli, xudianchi,
     JHhejinLiquid, JHhejin, gutaiwanqin, taihejin,
 } = CTItem
 
const loadRegionCache = {};
const loadRegion = (name) => {
    if (Vars.headless === true) {
        return null
    }
    var c = loadRegionCache[name]
    if (c) {
        return c
    }
    c = Core.atlas.find('creators' + '-' + name, Core.atlas.find("error"))
    print('find ' + 'creators' + '-' + name + ' result: ' + c)
    loadRegionCache[name] = c
    return c
};

const ai = extend(Incinerator, "lajixiang", {});
ai.config(java.lang.Integer, lib.cons2((tile, value) => {
    tile.setRecord(value);
}));
ai.buildType = prov(() => {
    var cI = true;
    var cL = true;
    var choice1;
    var choice2;
    var record = 1;
    return new JavaAdapter(Incinerator.IncineratorBuild, {
        setRecord(v){
            record = v;
        },
        configured(player, value){
            this.super$configured(player, value);
            //I started with an array, but was unable to save it successfully.
            switch(value){
                case 1:
                    cI = cL = true;
                    break;
                case 2:
                    cI = cL = false;
                    break;
                case 3:
                    cI = true;
                    cL = false;
                    break;
                case 4:
                    cI = false;
                    cL = true;
                    break;
                //default :
            }
        },
        draw(){
            this.super$draw();
            choice1 = cI ? loadRegion("c1t") : loadRegion("c1f");
            choice2 = cL ? loadRegion("c2t") : loadRegion("c2f");
        },
        acceptItem(source, item){
            return this.heat > 0.5 && cI;
        },
        acceptLiquid(source,liquid){
            return this.heat > 0.5 && cL;
        },
        switchItem(){
            if(cI){
                cI = false;
            } else {
                cI = true;
            }
            this.deselect();
            if(cI == cL){
                if(cI){
                    record = 1;
                } else {
                    record = 2;
                }
            } else if(cI && !cL){
                record = 3;
            } else if(!cI && cL){
                record = 4;
            }
            this.configure(record);
            
        },
        switchLiquid(){
            if(cL){
                cL = false;
            } else {
                cL = true;
            }
            this.deselect();
            if(cI == cL){
                if(cI){
                    record = 1;
                } else {
                    record = 2;
                }
            } else if(cI && !cL){
                record = 3;
            } else if(!cI && cL){
                record = 4;
            }
            this.configure(record);
        },
        buildConfiguration(table) {
            table.button(new Packages.arc.scene.style.TextureRegionDrawable(choice1), CreatorsStyles.clearTransi, run(() => { this.switchItem() })).size(40).tooltip("switch mode");
            table.button(new Packages.arc.scene.style.TextureRegionDrawable(choice2), CreatorsStyles.clearTransi, run(() => { this.switchLiquid() })).size(40).tooltip("switch mode");
        },
        config(){
            if(cI == cL){
                if(cI){
                    record = 1;
                } else {
                    record = 2;
                }
            } else if(cI && !cL){
                record = 3;
            } else if(!cI && cL){
                record = 4;
            }
            return record;
        },
        write(write) {
            this.super$write(write);
            write.bool(cI);
            write.bool(cL);
            write.f(record);
        },
        read(read, revision) {
            this.super$read(read, revision);
            cI = read.bool();
            cL = read.bool();
            record = read.f();
        },
    }, ai);
});
//ai.saveConfig = false;
ai.sync = true;
ai.requirements = ItemStack.with(
    Items.lead, 40,
    shiying, 12,
    Items.silicon, 20
);
ai.health = 110;
ai.buildVisibility = BuildVisibility.shown;
ai.category = Category.crafting;
ai.configurable = true;
ai.consumePower(0.5);

exports.lajixiang = ai;
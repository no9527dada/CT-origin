const {
    //白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
    invalid, dabaosuan, molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou,dabaozhiwujingyou,
    dabaoJHLiquid,dabaojinglianlio,dabaomoli, dabaozhiwu, dabaojingmoli, 
    dabaoyedan,zhiwujingyou,jinglianlio,hejinboli,
    JHhejinLiquid,JHhejin,gutaiwanqin,taihejin,
} = require('wupin');

const GC = require('Blocks/Blocks-ChuanShu');
const rangee = 5*8;//明亮范围
const brightness = 0.4;//亮度
const itemG = molizhi;//物品
GC.conveyor3.buildType = prov(() => {
    var ts = 1;
    var td = 0;
    return new JavaAdapter(Conveyor.ConveyorBuild, {
        delta(){
            return Time.delta * ts;
        },
        applyBoost(intensity, duration){
            if(intensity >= ts){
                td = Math.max(td, duration);
            }
            ts = Math.max(ts, intensity);
        },
        updateTile(){
            if(td > 0){
                td -= Time.delta;
                if(td <= 0){
                    ts = 1;
                }
            }
            this.timeScale = Math.max(ts * this.power.status, 0.001);
            this.timeScaleDuration = td / Math.max(this.power.status, 0.001);
            if(this.power.status >= 0.001){
                this.super$updateTile();
            }
        },
        drawLight(){
        	let items = this.items;
            if(items != null && items.first() != null){
                Drawf.light(this.team, this.x, this.y, rangee, Tmp.c1.set(items.first().color), brightness);
            }
        },
/*         drawLight(){
            if(this.items.get(itemG)){
                Drawf.light(this.team, this.x, this.y, rangee, Tmp.c1.set(itemG.color), brightness);
            }
        }, */
    }, GC.conveyor3);
});

GC.conveyor31.buildType = prov(() => {
    var ts = 1;
    var td = 0;
    return new JavaAdapter(ArmoredConveyor.ArmoredConveyorBuild, {
        delta(){
            return Time.delta * ts;
        },
        applyBoost(intensity, duration){
            if(intensity >= ts){
                td = Math.max(td, duration);
            }
            ts = Math.max(ts, intensity);
        },
        updateTile(){
            if(td > 0){
                td -= Time.delta;
                if(td <= 0){
                    ts = 1;
                }
            }
            this.timeScale = Math.max(ts * this.power.status, 0.001);
            this.timeScaleDuration = td / Math.max(this.power.status, 0.001);
            if(this.power.status >= 0.001){
                this.super$updateTile();
            }
        },
        drawLight(){
        	let items = this.items;
            if(items != null && items.first() != null){
                Drawf.light(this.team, this.x, this.y, rangee, Tmp.c1.set(items.first().color), brightness);
            }
        },
/*         drawLight(){
            if(this.items.get(itemG)){
                Drawf.light(this.team, this.x, this.y, rangee, Tmp.c1.set(itemG.color), brightness);
            }
        }, */
    }, GC.conveyor31);
});



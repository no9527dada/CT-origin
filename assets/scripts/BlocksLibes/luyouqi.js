//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）<我没有把js加密算不错了(狗头)>
const {
    //白, 绿, 黄, 橙, 红, 蓝, 紫,
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
} = CTItem

//塑钢路由器
const dsGlobal =require('BlocksLibes/qianzhi');
const luyouqi = extend(StackConveyor, "luyouqi", {})
const crouter33 = extend(StackRouter, "luyouqi3", {

    // 是否在方块建筑栏隐藏
	// isHidden() { 
	    // return !dsGlobal.duo();
	// },
	//微晶核心限制
	canPlaceOn(tile, team, rotation){
        return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
    },
	
	drawPlace(x, y, rotation, valid){
	    let tile = Vars.world.tile(x, y);
	
        if(tile == null) return;

        if(!this.canPlaceOn(tile, Vars.player.team(), rotation)){
            let missingMsg = dsGlobal.duoQianZhi.getMissing()
                               .toString(", ", block => block.localizedName + block.emoji());
                               
            this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
        }
    },
});
crouter33.health= 120
crouter33.itemCapacity= 10
crouter33.group = BlockGroup.transportation;
crouter33.requirements = ItemStack.with(
Items.lead, 30,
Items.plastanium, 15
);
crouter33.buildVisibility = BuildVisibility.shown;
crouter33.category = Category.distribution;


crouter33.speed = 6;
crouter33.hasPower = true;
crouter33.consumesPower = true;
crouter33.conductivePower = true;
crouter33.baseEfficiency = 1;
crouter33.underBullets = true;
crouter33.solid = false;
crouter33.consumePower(3 / 60);


exports.sugangcrouter = crouter33;
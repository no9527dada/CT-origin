/*
                              _ooOoo_
                             o8888888o
                             88" . "88
                             (| -_- |)
                              O\ = /O
                           ____/`---'\____
                        .   ' \\| |// `.
                         / \\||| : |||// \
                        / _||||| -:- |||||- \
                         | | \\\ - /// | |
                       | \_| ''\---/'' | |
                        \ .-\__ `-` ___/-. /
                    ___`. .' /--.--\ `. . __
                  ."" '< `.___\_<|>_/___.' >'"".
                 | | : `- \`.;`\ _ /`;.`/ - ` : | |
                    \ \ `-. \_ __\ /__ _/ .-` / /
           ======`-.____`-.___\_____/___.-`____.-'======
                              `=---='

           .............................................
                     佛祖保佑             永无BUG
            佛曰:
                     写字楼里写字间，写字间里程序员；
                     程序人员写程序，又拿程序换酒钱。
                     酒醒只在网上坐，酒醉还来网下眠；
                     酒醉酒醒日复日，网上网下年复年。
                     但愿老死电脑间，不愿鞠躬老板前；
                     奔驰宝马贵者趣，公交自行程序员。
                     别人笑我忒疯癫，我笑自己命太贱；
                     不见满街漂亮妹，哪个归得程序员？

*/
//Java核心系统  勿删！//
function CreatorsPackage(name) {
	var p = Packages.rhino.NativeJavaPackage(name, Vars.mods.mainLoader());
	Packages.rhino.ScriptRuntime.setObjectProtoAndParent(p, Vars.mods.scripts.scope)
	return p
}
var CreatorsJavaPack = CreatorsPackage('creators')
importPackage(CreatorsJavaPack)
importPackage(CreatorsJavaPack.draw)
importPackage(CreatorsJavaPack.type)
importPackage(CreatorsJavaPack.world.block)


CreatorsModJS.RunName.add("creators")
CreatorsModJS.DawnRun.add(run(() => {
//***********************************/
//require('Attribute');

 require('xingqiu');//星球
require('floor');//地板
require('Blocks/Blocks-ChuanShu');//物流
require('Blocks/Blocks-factory');//工厂
require('Blocks/Blocks-defense');//防御设施
require('Blocks/Blocks-power');
require('turrets/DC');//炮台
require('BlocksLibes/Build');//微晶导管桥防自然
require('core');
require('units');//单位
const BS = require('invincible');//沙盒测试相关方块
require('next-wave');//跳波器
require('Blocks/Blocks-drills');

require('abomb4/dpsTesterUnit');

require('FPS');//fps优化,贴图（优化需注释
//require('FPSfx');//fps优化，工作效果（暂时没用了



//Vars.mods.locateMod("creators").meta.version += "----" +  "[violet]创世神-起源[]";//服务器
/*==================================================
*/
require('BlocksLibes/xuwu');//服务器禁虚无
require('BlocksLibes/FenNei');//分类
//require("UI/ui2");//下拉核心资源显示
require('techTree');//科技树   
require('techTree/maps2');//挑战科技树    
//require('techTree/maps3');//众神归位 
require("UI/mod");//模组描述彩色文本
require("BlocksLibes/units-factory");//沙盒兵工厂
const {} = require('units/medal');//金牌银牌
require('ui');//更新，首页按钮等
require('all/miner');//无限火力

//删除 /* 和 */ 符号开启作弊模式：

/*  
const lib = require('lib')
  lib.addToResearch(BS.BiSiPao, {
 	 parent: "duo",}); 
 BS.BiSiPao.alwaysUnlocked = true;
 BS.BiSiPao.buildVisibility = BuildVisibility.shown; 
 */

 //对话框

/*
 let mod = Vars.mods.locateMod("科技树全显示");
 if (mod == null) {
	 let bd = Vars.mods.locateMod("creators");
	 let fi = bd.root.child("mod")
		 .child("ke_ji_shu.zip");
	 Vars.mods.importMod(fi);
 };
 let mod2 = Vars.mods.locateMod("origin_blueprint3");
 if (mod2 == null) {
	 let bd = Vars.mods.locateMod("creators");
	 let fi = bd.root.child("mod")
		 .child("LanTu3.0.zip");
	 Vars.mods.importMod(fi);
 };*/
 Blocks.worldProcessor.canOverdrive = false;
 Blocks.worldProcessor.targetable = false;
 Blocks.worldProcessor.instructionsPerTick = 8;
 Blocks.worldProcessor.forceDark = true;
 Blocks.worldProcessor.privileged = true;
 Blocks.worldProcessor.size = 1;
 Blocks.worldProcessor.maxInstructionsPerTick = 500;
 CTBlocks.itemSource.itemsPerSecond = 1000;
 CTBlocks.shockMine.requirements = ItemStack.with(
    Items.lead, 60,
    Items.silicon, 80,
);
CTBlocks.shockMine.buildCostMultiplier = 5;

//Vars.state.rules.teams.get(Team.sharded).unitDamageMultiplier = 0.7;



































/* Events.on(EventType.ClientLoadEvent, cons(e => {
    var dialog = new JavaAdapter(BaseDialog, {}, "注意");
    dialog.shown(run(() => {
        dialog.cont.table(Tex.button, cons(t => {
            t.defaults().size(200, 40).left();
            t.button("知道了", Icon.trash, Styles.cleart, run(() => {
                dialog.hide();
            }));
            t.add("[yellow]本此更新重置了某些多合成工厂\n您需要重新研究，\n以及原有的地图中现已经消失 需要重新放置");
        }));
    }));
    dialog.show();
})) 
 */



//clearSectorOnLose = true;//扇区丢失时是否重置地图
//enemyCoreSpawnReplace = true;//攻击图核心变刷怪点
//PlanetDialog.debugSelect = true;调试模式
/* const 超速器测试 = new LinkAccelerator("超速器测试");
超速器测试.addpower = true
超速器测试.health = 222
超速器测试.size = 2
超速器测试.range = 8 * 10
超速器测试.consumePower(3)
超速器测试.buildVisibility = BuildVisibility.shown;
超速器测试.category = Category.effect;
 */
}));






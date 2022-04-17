
//***********************************/
require('floor');//地板
require('Blocks/Blocks-ChuanShu');//物流
require('Blocks/Blocks-factory');//工厂
require('Blocks/Blocks-defense');//防御设施
require('Blocks/Blocks-power');
require('turrets/DC');//炮台
require('BlocksLibes/Build');//微晶导管桥防自然
require('core');
require('units');//单位
const BS =require('invincible');//沙盒测试相关方块
require('next-wave');//跳波器
require('Blocks/Blocks-drills');

//Vars.mods.locateMod("creators").meta.version += "----" +  "[violet]创世神-起源[]";//服务器
//*****************************************
require('BlocksLibes/chuansongdai');//传送带发光
require('BlocksLibes/xuwu');//服务器禁虚无
require('techTree');//科技树
require('BlocksLibes/FenNei');//分类
require('xingqiu');//星球
require('ui');
require("BlocksLibes/chongzhigongju");//地图重置
Vars.mods.locateMod("creators").meta.version += "----" +  Core.bundle.format("planet.creators.MODname");//本地


//开启作弊模式：
  
/* const lib = require('lib')
 lib.addToResearch(BS.BiSiPao, {
     parent: "duo",
 }); 
  */
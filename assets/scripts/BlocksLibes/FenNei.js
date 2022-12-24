//XVX神魂
const {
    oiljinglianchang, taihejinji, zuanshiyasuoji, jinhuiyasuoji, zhiwujingyoutilianji, zhiwujingyoutiquji, jinhuiyeji,
    xitilianji, zuankuangjiagongchang, meitantiliangongchang, zhiwudaosuiji, fensuiji, liuji,
    hejinboliji, jinhuiboliji,yanbaoji,weijingxilianji4,
    shiyingronglu, guijingtichengxingji, guilu, guijingtihechengji, guijingtigongchang,
    shimoxiji, budingjiagongchang, budingjiagongchang2, jinfentilianji, jinchengxingji, jinchengxingji2,
    zijinggongchang, jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4,
    jiweijinggongchang5, weijingfenjieji, jiweijinggongchang21, liziduizhuangji, fashetai, zhisuanji,
    duochonbuji2, duochonbuji3, duochongsugangji, moliyeshoujiqi1, moliyeshoujiqi2, wenshiqi,
    zhiwucuiqugongchang, zhiwucuiqugongchang2, feiliaoji, zhuanhuantai, zizhuanTu, tanbanyasuoji, zuanjingjiagongchang,
    tanbanyasuoji2, gaojipeiyangji, molishizhizaoqi, monengjingdamoji0, jimonengjinglianzhiqi1, jimonengjinglianzhiqi2,
    jimonengjinglianzhiqi3, jimonengjinglianzhiqi4, hejin2, luzhayasuoji, jitilianji3, jitilianji4, jitilianjimoliyetilianji,
    xiaofentilianji, zhayaozhizaoji, jhgtbzwj, qianghuaronglu, lengdongyehunheji, moliyehunheji, molijinghuatilianji,
    liziyeji, yuanwanjinghuaji, qiangxiaolengqueyehunheji, chuangshiji, chuangxingjiexiyi, chuangshiyujie, jinbigongcang, weichenshoujiqi,
    chuangshizhishen, choujiangji, wupinyuan, testC, testA,
} = require('Blocks/Blocks-factory');
const { lajixiang } = require('BlocksLibes/lajixiang')
const {
    weicang, jicangku3, jicangku4, jicangku5, jicangku6, huanchongcang, csdq0, conveyor10,
    ctunitCargoLoader,ctUnitCargoUnloadPoint,
    conveyor11, conveyor12, jibaozhuangyunshudai2, conveyor2, conveyor21, conveyor3, conveyor31,
    jibaozhuangyunshudai3, weixingzhiqu, zhiqu2, zhiqu3, conduit1, conduit11, conduit2, conduit21, dabaodai,
    csdq, daoguanqiao0, daoguanqiao, daxingchuyeguan, jizhuangxieqi0, jizhuangxieqi2, jizhuangxieqi3, yetiUnloader
} = require('Blocks/Blocks-ChuanShu');const {sugangcrouter}=require('BlocksLibes/luyouqi');//塑钢路由器
const { wanxiangqiao } = require('BlocksLibes/wanxiangqiao');
const {
    qian1, qian2, qian3, tong3, tai3, tu3, sugang3, hejin3, moli1, moli2, hunhe3, hunhe4, shenwei, qiang,
    jiasu3, jiasu4, jiasu5, jiasu6, chaojijiasuyi, deng, hudun2, hudun3, xiuli1, xiuli2, display, xinxiban,
} = require('Blocks/Blocks-defense');
const { jiasu7 } = require('BlocksLibes/fanjiasu');
const { jiasu8 } = require('BlocksLibes/fanjiasu2');
const {
    yingzhizuantou, weijingzuantou1, weijingzuantou2, junengzuantou, zuantou,
    weijingzuantou3, shiyou, sui, sui2, sui3, sui4,
} = require('Blocks/Blocks-drills');
const { CT_core, CT_core2, CT_core3, CoreJiangLuo, WJcore, CT_core32, } = require('core');
const {
    DianHu, FangKong, healere, JueWang, BuHuo, LanJie, lieguang, ZhengFu, ZhengYi, bawang, ronghui3,
    ronghui2, youling2, ronghui4, BiSiPao, zongjipao, zongjipao2, huasha,
} = require('turrets/DC');
const { PenHuo } = require('turrets/PenHuo');
const {
    dianxiangan, nengliangta, nengliangta2, jidianchi3, jitaiyangneng3, jitaiyangneng4, gaojidirefadianji,
    shuilifadianji, shiyoufadianji, yanjiangfadianji, gaoxiaowolunfadianji, molichongjifadianji, molizhifanyingdui,
    monengfanyingdui, juhechongji, jidianchi4, chongdianqi, fangdianqi, jitaiyangneng5,
} = require('Blocks/Blocks-power');
const {
    origin_unitsT3,
    origin_unitsT4,
    origin_unitsT5,
    origin_unitsT6,
    origin_unitsBB,
    origin_unitsCC } = require('Blocks/origin_units');

Events.on(ClientLoadEvent, cons(() => {
    let rows = 4;//行
    let columns = 5;//列
    let iconWidth = 46;//贴图大小
    let padding = 3;//填充大小
    let marginBottom = 0;//0为右下角，数字往上走，UI往右上角走
    let marginRight = 310;//0为右下角，数字往上走，UI往左下角走

    let frag = CreatorsClassification.leftFrag(CreatorsClassification.FragConfigJS(rows, columns,
        CreatorsClassification.CategoryObjJS('creators-aa',
            //微晶
            jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4, jiweijinggongchang5,weijingxilianji4,
            weijingfenjieji, jiweijinggongchang21, liziduizhuangji, chuangshiji, chuangxingjiexiyi, chuangshiyujie,
           /* powerSource1,*/ chuangshizhishen, wupinyuan, weichenshoujiqi,
        ),
        CreatorsClassification.CategoryObjJS('creators-bb',
            //魔力石
            wenshiqi, molishizhizaoqi, monengjingdamoji0, jimonengjinglianzhiqi1,
            jimonengjinglianzhiqi2, jimonengjinglianzhiqi3, jimonengjinglianzhiqi4,
        ),
        CreatorsClassification.CategoryObjJS('creators-cc',
            //MOD液体
            moliyeshoujiqi1, moliyeshoujiqi2, oiljinglianchang, moliyehunheji, lengdongyehunheji,
            zhiwujingyoutilianji, zhisuanji, zhiwucuiqugongchang, zhiwucuiqugongchang2,
            zhiwujingyoutiquji, molijinghuatilianji, liziyeji, yuanwanjinghuaji,
            qiangxiaolengqueyehunheji, testC, testA, yanbaoji,jinhuiyeji,
            jitilianji3, jitilianji4, jitilianjimoliyetilianji, sui4
        ),
        CreatorsClassification.CategoryObjJS('creators-dd',
            //MOD工厂
            shiyingronglu, guijingtichengxingji, guijingtihechengji, guijingtigongchang, xitilianji, taihejinji, jinhuiyasuoji,
            shimoxiji, zhiwudaosuiji, budingjiagongchang, budingjiagongchang2, hejinboliji, jinhuiboliji, jinfentilianji,
            jinchengxingji, jinchengxingji2, zijinggongchang, xiaofentilianji,
            tanbanyasuoji, tanbanyasuoji2, zuanjingjiagongchang, zuanshiyasuoji, zuankuangjiagongchang,
            zhayaozhizaoji, jhgtbzwj,
        ),
        CreatorsClassification.CategoryObjJS('creators-ee',
            //原版升级工厂
            lajixiang, fensuiji, guilu, luzhayasuoji, meitantiliangongchang, liuji, duochonbuji2, duochonbuji3,
            duochongsugangji, hejin2, gaojipeiyangji, feiliaoji, qianghuaronglu, zhuanhuantai, zizhuanTu, fashetai,
        ),
        CreatorsClassification.CategoryObjJS('creators-ff',
            origin_unitsT3,
            origin_unitsT4,
            origin_unitsT5,
            origin_unitsT6,
            origin_unitsBB,
            origin_unitsCC
        ),
        CreatorsClassification.CategoryObjJS('creators-gg',
            CoreJiangLuo,CTBlocks.coreFoundation,CTBlocks.coreNucleus, CT_core, CT_core2, 
            CT_core3, WJcore, CT_core32,weicang,CTBlocks.container,
            CTBlocks.vault, jicangku3, jicangku4,jicangku5, jicangku6,
            huanchongcang, weixingzhiqu,jizhuangxieqi2, ctunitCargoLoader,ctUnitCargoUnloadPoint,
            //sugangcrouter,
        ),
    ), iconWidth, padding, marginBottom, marginRight, 'creators-ON', 'creators-OFF');
    frag.build(Vars.ui.hudGroup);
}));
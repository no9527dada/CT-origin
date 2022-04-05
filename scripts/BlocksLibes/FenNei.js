//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）<我没有把js加密算不错了(狗头)>
const {
    oiljinglianchang, taihejinji, zuanshiyasuoji, jinhuiyasuoji, zhiwujingyoutilianji, zhiwujingyoutiquji, jinhuiyeji,
    xitilianji, zuankuangjiagongchang, meitantiliangongchang, zhiwudaosuiji, fensuiji, liuji,
    hejinboliji, jinhuiboliji,
    shiyingronglu, guijingtichengxingji, guilu, guijingtihechengji, guijingtigongchang,
    shimoxiji, budingjiagongchang, budingjiagongchang2, jinfentilianji, jinchengxingji, jinchengxingji2,
    zijinggongchang, jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4,
    jiweijinggongchang5, weijingfenjieji, jiweijinggongchang21, liziduizhuangji, fashetai,
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
    conveyor11, conveyor12, jibaozhuangyunshudai2, conveyor2, conveyor21, conveyor3, conveyor31,
    jibaozhuangyunshudai3, weixingzhiqu, zhiqu2, zhiqu3, conduit1, conduit11, conduit2, conduit21, dabaodai,
    csdq, daoguanqiao0, daoguanqiao, daxingchuyeguan, jizhuangxieqi0, jizhuangxieqi2, jizhuangxieqi3, yetiUnloader
} = require('Blocks/Blocks-ChuanShu');
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

Events.on(ClientLoadEvent, cons(() => {
    let rows = 4;//行
    let columns = 5;//列
    let iconWidth = 46;//贴图大小
    let padding = 3;//填充大小
    let marginBottom = 0;//0为右下角，数字往上走，UI往右上角走
    let marginRight = 310;//0为右下角，数字往上走，UI往左下角走

    let frag = DawnClassification.leftFrag(DawnClassification.FragConfigJS(rows, columns,
        DawnClassification.CategoryObjJS('creators-aa',
            //微晶
            jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4, jiweijinggongchang5,
            weijingfenjieji, jiweijinggongchang21, liziduizhuangji, chuangshiji, chuangxingjiexiyi, chuangshiyujie,
           /* powerSource1,*/ chuangshizhishen, wupinyuan, weichenshoujiqi,
        ),
        DawnClassification.CategoryObjJS('creators-bb',
            //魔力石
            wenshiqi, molishizhizaoqi, monengjingdamoji0, jimonengjinglianzhiqi1,
            jimonengjinglianzhiqi2, jimonengjinglianzhiqi3, jimonengjinglianzhiqi4,
        ),
        DawnClassification.CategoryObjJS('creators-cc',
            //MOD液体
            moliyeshoujiqi1, moliyeshoujiqi2, oiljinglianchang, moliyehunheji, lengdongyehunheji,
            zhiwujingyoutilianji, zhiwucuiqugongchang, zhiwucuiqugongchang2,
            zhiwujingyoutiquji, molijinghuatilianji, liziyeji, yuanwanjinghuaji,
            qiangxiaolengqueyehunheji, testC, testA, jinhuiyeji,
            jitilianji3, jitilianji4, jitilianjimoliyetilianji, sui4
        ),
        DawnClassification.CategoryObjJS('creators-dd',
            //MOD工厂
            shiyingronglu, guijingtichengxingji, guijingtihechengji, guijingtigongchang, xitilianji, taihejinji, jinhuiyasuoji,
            shimoxiji, zhiwudaosuiji, budingjiagongchang, budingjiagongchang2, hejinboliji, jinhuiboliji, jinfentilianji,
            jinchengxingji, jinchengxingji2, zijinggongchang, xiaofentilianji,
            tanbanyasuoji, tanbanyasuoji2, zuanjingjiagongchang, zuanshiyasuoji, zuankuangjiagongchang,
            zhayaozhizaoji, jhgtbzwj,
        ),
        DawnClassification.CategoryObjJS('creators-ee',
           //原版升级工厂
           lajixiang, fensuiji, guilu, luzhayasuoji, meitantiliangongchang, liuji, duochonbuji2, duochonbuji3,
           duochongsugangji, hejin2, gaojipeiyangji, feiliaoji, qianghuaronglu, zhuanhuantai, zizhuanTu, fashetai,
        ),
        // DawnClassification.CategoryObjJS('creators-ff',
        //     Blocks.copperWall
        // ),
        // DawnClassification.CategoryObjJS('creators-admin',
        //     Blocks.copperWall
        // )
    ), iconWidth, padding, marginBottom, marginRight, 'creators-ON', 'creators-OFF');
    frag.build(Vars.ui.hudGroup);
}));
package creators.world.block;

import arc.graphics.*;
import arc.struct.*;
import mindustry.type.*;
import mindustry.type.Liquid;
import mindustry.content.*;
import mindustry.world.Block;
import mindustry.world.blocks.environment.*;


import static mindustry.content.Blocks.*;

/**
 * @author WOW
 * @date 2022/10/04
 * 存放全部物品
 */
public class CTItem {
    //注册物品/液体 变量
    public static Item  shiying,guijingti,shimoxi,hejinboli,jinhuiboli,xudianchi,jingliantai,taihejin,buding,hua1,hua2,hua3,zhiwumo,
        canza,kuangzajinghuawu,tanban,zuanshikuang,zuanjing,xiao,zhayao,gutaiwanqin,juhebaozhawu,JHhejin,jinfen,jin,zijing1,
        weijing1,weijing2,weijing3,weijing4,weijing5,molizhi,molishi,monengjing,monengjing1,monengjing2,monengjing3,
        chuangshilizi,chuangshiweichen,chuangshizhixing,yuanshencanpian,mieshishenhun,chuangshishenhun,zzjinbi,matrix3,
        matrix4,matrix5,matrix6,dabaoshui,dabaoleng,dabaoshiyou,dabaojinglianlio,dabaomoli,dabaozhiwujingyou,dabaozhiwu,
        dabaojingmoli,dabaoJHLiquid,dabaoyedan,dabaocobo,zishi,daboayan,tanqianwei,tangang,medal1,medal2,nulls,oreweijing4;

    public static Liquid zhiwujingyou,zhiwujinghuaye,jinglianlio,moliye,molijinghuaye,JHhejinLiquid,
        suan,yuanwan0,liziye,qiangxiaolengqueye,cobo;



    public static final Seq<Item> serpuloItems = new Seq<>(), erekirItems = new Seq<>(), erekirOnlyItems = new Seq<>();




        public static Block hua;




    public static void load() {

//        hua = new Seaweed("hua"){{
//            variants = 3;
//            snow.asFloor().decoration = ice.asFloor().decoration = iceSnow.asFloor().decoration = salt.asFloor().decoration = this;
//        }};

        //定义变量为物品/液体属性
        shiying = new Item("shiying", Color.valueOf("ffffff")){{
            hardness = 2;
        }};
        guijingti = new Item("guijingti",Color.valueOf("DDDDFF")){{
        }};
        shimoxi = new Item("shimoxi",Color.valueOf("3419ff")){{
        }};
        hejinboli = new Item("hejinboli",Color.valueOf("F3D272")){{
            charge = 0.3f;//放电性，被破坏产生电弧
        }};
        jinhuiboli = new Item("jinhuiboli",Color.valueOf("F3D272")){{
            charge = 0.3f;//放电性，被破坏产生电弧
            frames = 8;// >0时会有有动画
            transitionFrames = 1;//每帧之间生成的过渡帧的数量
            frameTime = 10f;//贴图变换之间的时间，默认5
        }};
        xudianchi = new Item("xudianchi",Color.valueOf("F3D272")){{
            charge = 1;//放电性，被破坏产生电弧
        }};
        jingliantai = new Item("jingliantai",Color.valueOf("CECEFF")){{
            hardness = 3;
        }};
        taihejin = new Item("taihejin",Color.valueOf("B8C9FF")){{

        }};
        buding = new Item("buding",Color.valueOf("FFD59E")){{

        }};
        hua1 = new Item("1hua",Color.valueOf("FF0080")){{
            flammability = 0.2f;
        }};
        hua2 = new Item("2hua",Color.valueOf("EA0000")){{
            flammability = 0.2f;
        }};
        hua3 = new Item("3hua",Color.valueOf("2828FF")){{
            flammability = 0.2f;
        }};
        zhiwumo = new Item("zhiwusuimo",Color.valueOf("487a51")){{
            flammability = 0.5f;
        }};
        canza = new Item("canza",Color.valueOf("487a51")){{
            flammability = 0.5f;
        }};
        kuangzajinghuawu = new Item("kuangzajinghuawu",Color.valueOf("842B00")){{

        }};
        tanban = new Item("tanban",Color.valueOf("2a2a27")){{
            flammability = 2;
        }};
        zuanshikuang = new Item("zuankuang",Color.valueOf("006030")){{
            hardness = 7;
        }};
        zuanjing = new Item("zuanjing",Color.valueOf("4EFEB3")){{

        }};
        xiao = new Item("xiao",Color.valueOf("E0E0E0")){{
            flammability = 1;
        }};
        zhayao = new Item("zhayao",Color.valueOf("FF2D2D")){{
            flammability = 0.7f;
            explosiveness = 5;
        }};
        gutaiwanqin = new Item("gutaiwanqin",Color.valueOf("E598EE")){{
            flammability = 0.78f;
            explosiveness = 3;
        }};
        juhebaozhawu = new Item("juhebaozhawu",Color.valueOf("f10fff")){{
            flammability = 1.5f;
            explosiveness = 3;
            radioactivity = 0.3f;
        }};
        JHhejin = new Item("JHhejin",Color.valueOf("E8D123")){{

        }};
        jinfen = new Item("jinfen",Color.valueOf("FFE153")){{

        }};
        jin = new Item("jin",Color.valueOf("FFE153")){{
            hardness = 4;
        }};
        zijing1 = new Item("zijing1",Color.valueOf("9F35FF")){{

        }};
        weijing1 = new Item("weijing1",Color.valueOf("FFFF6F")){{

        }};
        weijing2 = new Item("weijing2",Color.valueOf("53FF53")){{

        }};
        weijing3 = new Item("weijing3",Color.valueOf("ffa6ff")){{

        }};
        weijing4 = new Item("weijing4",Color.valueOf("FF8000")){{
            hardness = 12;
        }};
        weijing5 = new Item("weijing5",Color.valueOf("FF5809")){{

        }};
        molizhi = new Item("molizhi",Color.valueOf("921AFF")){{
            radioactivity = 1;
        }};
        molishi = new Item("molishi",Color.valueOf("272727")){{
            radioactivity = 1.4f;
            hardness = 10;
        }};
        monengjing = new Item("monengjing",Color.valueOf("3C3C3C")){{
            radioactivity = 1.6f;
        }};
        monengjing1 = new Item("monengjing1",Color.valueOf("28004D")){{
            radioactivity = 1.8f;
        }};
        monengjing2 = new Item("monengjing2",Color.valueOf("aa67ff")){{
            radioactivity = 2.1f;
        }};
        monengjing3 = new Item("monengjing3",Color.valueOf("f51212")){{
            radioactivity = 2.5f;
        }};
        chuangshilizi = new Item("chuangshilizi",Color.valueOf("E1E100")){{

        }};
        chuangshiweichen = new Item("chuangshiweichen",Color.valueOf("ffffff")){{

        }};
        chuangshizhixing = new Item("chuangshizhixing",Color.valueOf("ffffff")){{

        }};
        yuanshencanpian = new Item("yuanshencanpian",Color.valueOf("EA0000")){{

        }};
        mieshishenhun = new Item("mieshishenhun",Color.valueOf("EA0000")){{

        }};
        chuangshishenhun = new Item("chuangshishenhun",Color.valueOf("EA0000")){{

        }};
        zzjinbi = new Item("zz-jinbi",Color.valueOf("f4bc57")){{

        }};
        matrix3 = new Item("3matrix",Color.valueOf("ffffff")){{
            alwaysUnlocked = true;
        }};
        matrix4 = new Item("4matrix",Color.valueOf("ffffff")){{
            alwaysUnlocked = true;
        }};
        matrix5 = new Item("5matrix",Color.valueOf("ffffff")){{
            alwaysUnlocked = true;
        }};
        matrix6 = new Item("6matrix",Color.valueOf("ffffff")){{
            alwaysUnlocked = true;
        }};
        dabaoshui = new Item("dabaoshui",Color.valueOf("529eff")){{

        }};
        dabaoleng = new Item("dabaoleng",Color.valueOf("1fc9ff")){{

        }};
        dabaoshiyou = new Item("dabaoshiyou",Color.valueOf("000000")){{

        }};
        dabaojinglianlio = new Item("dabaojinglianlio",Color.valueOf("6b675f")){{

        }};
        dabaomoli = new Item("dabaomoli",Color.valueOf("881fff")){{

        }};
        dabaozhiwujingyou = new Item("dabaozhiwujingyou",Color.valueOf("2f5d42")){{

        }};
        dabaozhiwu = new Item("dabaozhiwu",Color.valueOf("73f58a")){{

        }};
        dabaojingmoli = new Item("dabaojingmoli",Color.valueOf("d296fb")){{

        }};
        dabaoJHLiquid = new Item("dabaoJHLiquid",Color.valueOf("FFE166")){{

        }};
        dabaoyedan = new Item("dabaoyedan",Color.valueOf("fefefe")){{

        }};
        dabaocobo = new Item("dabaocobo",Color.valueOf("5a73f4")){{

        }};
        zishi = new Item("zishi",Color.valueOf("983cff")){{
            hardness = 9;
        }};
        daboayan = new Item("daboayan",Color.valueOf("EA0000")){{

        }};
        oreweijing4 = new Item("oreweijing4",Color.valueOf("FF8000")){{

        }};
        tanqianwei = new Item("tanqianwei",Color.valueOf("ffffff")){{

        }};
        tangang = new Item("tangang",Color.valueOf("ffffff")){{

        }};
        medal1 = new Item("medal-silver"){{

        }};
        medal2 = new Item("medal-gold"){{

        }};
        nulls = new Item("null"){{

        }};



//液体
        zhiwujingyou = new Liquid("zhiwujingyou",Color.valueOf("2f5d42")){{
            flammability = 1f;
            temperature = 0.6f;
            heatCapacity = 0f;
            viscosity = 0.9f;
            explosiveness = 0f;
        }};
        zhiwujinghuaye = new Liquid("zhiwujinghuaye",Color.valueOf("CEFFCE")){{
            flammability = 0f;
            temperature = 0f;
            heatCapacity = 0.6f;
            viscosity = 0.2f;
            explosiveness = 0f;
        }};
        jinglianlio = new Liquid("jinglianlio",Color.valueOf("6b675f")){{
            viscosity = 0;
            flammability = 1.2f;
            explosiveness = 1.5f;
            heatCapacity = 0.7f;
            barColor = Color.valueOf("8e8e8c");
            effect = StatusEffects.tarred;
        }};
        moliye = new Liquid("moliye",Color.valueOf("28004D")){{
            flammability = 0f;
            temperature = 0f;
            heatCapacity = 0.5f;
            viscosity = 0.2f;
            explosiveness = 0f;
        }};
        molijinghuaye = new Liquid("molijinghuaye",Color.valueOf("BE77FF")){{
            flammability = 0f;
            temperature = 0f;
            heatCapacity = 1.5f;
            viscosity = 0.2f;
            explosiveness = 0f;
        }};
        JHhejinLiquid = new Liquid("JHLiquid",Color.valueOf("FFE166")){{
            viscosity = 0.5f;//气化
            temperature = 0.6f;//高温
            flammability = 0f;//可燃
            explosiveness = 0f;//爆炸
            heatCapacity = 0f;//低温
            effect = StatusEffects.melting;//状态：融化燃烧
        }};
        suan = new Liquid("suan",Color.valueOf("005e13")){{
            heatCapacity = 0.3f;
        }};
        yuanwan0 = new Liquid("yuanwan",Color.valueOf("9e1c1c")){{
            viscosity = 0.01f;//气化
            temperature = 2f;//高温
            flammability = 2.5f;//可燃
            explosiveness = 3f;//爆炸
            heatCapacity = 0f;//低温
            effect = StatusEffects.melting;//状态：融化燃烧
        }};
        liziye = new Liquid("liziye",Color.valueOf("ff0000")){{
            heatCapacity = 0f;
            temperature = 2f;
            flammability = 2f;
            explosiveness = 3f;
            viscosity = 0.7f;
        }};
        qiangxiaolengqueye = new Liquid("qiangxiaolengqueye",Color.valueOf("ffffff")){{
            flammability = 0f;//可燃性
            temperature = 0f;//温度
            heatCapacity = 3.8f;//装弹速度
            viscosity = 0.8f;//粘度
            explosiveness = 0f;//爆炸
        }};
        cobo = new Liquid("cobo",Color.valueOf("9ebbe3")){{
            flammability = 0f;//可燃性
            temperature = 0f;//温度
            heatCapacity = 0.2f;//装弹速度
            viscosity = 0.6f;//粘度
            explosiveness = 0f;//爆炸
        }};

    }
}

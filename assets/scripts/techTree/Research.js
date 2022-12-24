const XuanZeV7 = require('XuanZeV7-GC')
const lib = require('lib')
const items = CTItem
const {
    白, 绿, 黄, 橙, 红, 蓝, 紫, nulls,
} = items;


const cj000 = extend(Floor, "000", {});
cj000.localizedName = "核心科技 等级1"
cj000.alwaysUnlocked = true
cj000.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj000, {
    parent: 'core-shard',
    objectives: Seq.with(
        new Objectives.Research(Blocks.coreShard)
    )
}); exports.核心科技1 = cj000;
lib.addToResearch(XuanZeV7.testC, {
    parent: '000',
    requirements: ItemStack.with(
        Items.copper, 4000,Items.lead, 4000,
    ),
});
const cj0001 = extend(Floor, "0001", {});
cj0001.localizedName = "核心科技 等级2"
cj0001.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0001, {
    parent: '000',
    requirements: ItemStack.with(
        白, 3500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj000)
    )
}); exports.核心科技2 = cj0001;
const cj0002 = extend(Floor, "0002", {});
cj0002.localizedName = "核心科技 等级3"
cj0002.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0002, {
    parent: '0001',
    requirements: ItemStack.with(
        白, 7000, 绿, 4000,
    ),
    objectives: Seq.with(
        new Objectives.Research(Blocks.coreShard)
    )
}); exports.核心科技3 = cj0002;
const cj0003 = extend(Floor, "0003", {});
cj0003.localizedName = "核心科技 等级4"
cj0003.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0003, {
    parent: '0002',
    requirements: ItemStack.with(
        白, 12000, 绿, 7000, 黄, 5000,
    ),
    objectives: Seq.with(
        new Objectives.Research(Blocks.coreShard)
    )
}); exports.核心科技4 = cj0003;
const cj0004 = extend(Floor, "0004", {});
cj0004.localizedName = "核心科技 等级5"
cj0004.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0004, {
    parent: '0003',
    // requirements: ItemStack.with(
    //     白, 400,绿,100,黄,100,橙,
    // ),
    objectives: Seq.with(
        new Objectives.Research(Blocks.coreShard)
    )
}); exports.核心科技5 = cj0004;
//-------------------------------------------------------
const cj002 = extend(Floor, "002", {});
cj002.localizedName = "采矿技术 0"
cj002.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj002, {
    parent: '000',
    requirements: ItemStack.with(
        Items.copper, 100,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj000)
    )
}); exports.采矿技术0 = cj002;
const cj0021 = extend(Floor, "0021", {});
cj0021.localizedName = "采矿技术 1"
cj0021.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0021, {
    parent: '002',
    requirements: ItemStack.with(
        白, 800,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj002)
    )
}); exports.采矿技术1 = cj0021;
const cj0022 = extend(Floor, "0022", {});
cj0022.localizedName = "采矿技术 2"
cj0022.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0022, {
    parent: '0021',
    requirements: ItemStack.with(
        白, 1800,
        绿, 1000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0021)
    )
}); exports.采矿技术2 = cj0022;
const cj0023 = extend(Floor, "0023", {});
cj0023.localizedName = "采矿技术 3"
cj0023.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0023, {
    parent: '0022',
    requirements: ItemStack.with(
        白, 3200,
        绿, 1300,
        黄, 800,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0022)
    )
}); exports.采矿技术3 = cj0023;
//-------------------------------------------------------
const cj001 = extend(Floor, "001", {});
cj001.localizedName = "初始运输"
cj001.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj001, {
    parent: '000',
    requirements: ItemStack.with(
        Items.copper, 100,
        Items.lead, 30,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj002)
    )
}); exports.运输0 = cj001;
const cj0011 = extend(Floor, "0011", {});
cj0011.localizedName = "物流运输 等级1"
cj0011.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0011, {
    parent: '001',
    requirements: ItemStack.with(
        白, 300
    ),
    objectives: Seq.with(
        new Objectives.Research(cj001)
    )
}); exports.运输1 = cj0011;
const cj0012 = extend(Floor, "0012", {});
cj0012.localizedName = "物流运输 等级2"
cj0012.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0012, {
    parent: '0011',
    requirements: ItemStack.with(
        白, 800,
        绿, 400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0011)
    )
}); exports.运输2 = cj0012;
const cj0013 = extend(Floor, "0013", {});
cj0013.localizedName = "物流运输 等级3"
cj0013.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0013, {
    parent: '0012',
    requirements: ItemStack.with(
        白, 2500,
        绿, 1200,
        黄, 500
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0012)
    )
}); exports.运输3 = cj0013;
const cj0014 = extend(Floor, "0014", {});
cj0014.localizedName = "物流运输 等级4"
cj0014.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0014, {
    parent: '0013',
    requirements: ItemStack.with(
        白, 7500,
        绿, 5000,
        黄, 4200,
        橙, 800,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0013)
    )
}); exports.运输4 = cj0014;
const cj0015 = extend(Floor, "0015", {});
cj0015.localizedName = "物流运输 等级5"
cj0015.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0015, {
    parent: '0014',
    requirements: ItemStack.with(
        白, 25000,
        绿, 13000,
        黄, 7500,
        橙, 3000,
        红, 2000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0014)
    )
}); exports.运输5 = cj0015;
//-------------------------------------------------------
const cj003 = extend(Floor, "003", {});
cj003.localizedName = "初始工艺"
cj003.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj003, {
    parent: '000',
    requirements: ItemStack.with(
        Items.copper, 800,
        Items.lead, 1200,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj002)
    )
}); exports.工艺0 = cj003;
const cj0031 = extend(Floor, "0031", {});
cj0031.localizedName = "基础工艺 等级1"
cj0031.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0031, {
    parent: '003',
    requirements: ItemStack.with(
        白, 100,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj003)
    )
}); exports.工艺1 = cj0031;
const cj0032 = extend(Floor, "0032", {});
cj0032.localizedName = "基础工艺 等级2"
cj0032.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0032, {
    parent: '0031',
    requirements: ItemStack.with(
        白, 500,
        绿, 200,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0031)
    )
}); exports.工艺2 = cj0032;
const cj0033 = extend(Floor, "0033", {});
cj0033.localizedName = "高级工艺 等级3"
cj0033.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0033, {
    parent: '0033',
    requirements: ItemStack.with(
        白, 2000,
        绿, 800,
        黄, 400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0032)
    )
}); exports.工艺3 = cj0033;
const cj0034 = extend(Floor, "0034", {});
cj0034.localizedName = "高级工艺 等级4"
cj0034.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0034, {
    parent: '0034',
    requirements: ItemStack.with(
        白, 5000,
        绿, 2000,
        黄, 800,
        橙,300
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0033)
    )
}); exports.工艺4 = cj0034;
const cj0035 = extend(Floor, "0035", {});
cj0035.localizedName = "高级工艺 等级5"
cj0035.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0035, {
    parent: '0035',
    requirements: ItemStack.with(
        白, 5000,
        绿, 1500,
        黄, 900,橙,500,红,300
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0034)
    )
}); exports.工艺5 = cj0035;
//-------------------------------------------------------
const cj004 = extend(Floor, "004", {});
cj004.localizedName = "能源 等级1"
cj004.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj004, {
    parent: '000',
    requirements: ItemStack.with(
        Items.copper, 300,
        Items.lead, 200,
        Items.graphite, 100,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj003)
    )
}); exports.初始能源 = cj004;
const cj0041 = extend(Floor, "0041", {});
cj0041.localizedName = "能源 等级2"
cj0041.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0041, {
    parent: '004',
    requirements: ItemStack.with(
        白, 1200,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj004)
    )
}); exports.能源1 = cj0041;
const cj00412 = extend(Floor, "00412", {});
cj00412.localizedName = "能源 等级3"
cj00412.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00412, {
    parent: '0041',
    requirements: ItemStack.with(
        白, 6000,
        绿, 1500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0041)
    )
}); exports.能源2 = cj00412;
const cj00413 = extend(Floor, "00413", {});
cj00413.localizedName = "能源 等级4"
cj00413.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00413, {
    parent: '00412',
    requirements: ItemStack.with(
        白, 20000, 绿, 13000, 黄, 5000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00412)
    )
}); exports.能源3 = cj00413;
const cj00414 = extend(Floor, "00414", {});
cj00414.localizedName = "能源 等级5"
cj00414.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00414, {
    parent: '00413',
    requirements: ItemStack.with(
        白, 75000, 绿, 50000, 黄, 31000, 橙, 10000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00413)
    )
}); exports.能源4 = cj00414;
const cj00415 = extend(Floor, "00415", {});
cj00415.localizedName = "能源 等级6"
cj00415.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00415, {
    parent: '00414',
    requirements: ItemStack.with(
        白, 200000, 绿, 160000, 黄, 90000, 橙, 20000, 红, 5000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00414)
    )
}); exports.能源5 = cj00415;
const cj004101 = extend(Floor, "004101", {});
cj004101.localizedName = "热力发电 等级1"
cj004101.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj004101, {
    parent: '004',
    requirements: ItemStack.with(
        白, 400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0041)
    )
}); exports.热力1 = cj004101;
const cj004102 = extend(Floor, "004102", {});
cj004102.localizedName = "热力发电 等级2"
cj004102.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj004102, {
    parent: '004101',
    requirements: ItemStack.with(
        白, 2000, 绿, 500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00412)
    )
}); exports.热力2 = cj004102;
const cj004103 = extend(Floor, "004103", {});
cj004103.localizedName = "热力发电 等级3"
cj004103.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj004103, {
    parent: '004102',
    requirements: ItemStack.with(
        白, 15000, 绿, 9000, 黄, 2000
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00413)
    )
}); exports.热力3 = cj004103;
const cj00411 = extend(Floor, "00411", {});
cj00411.localizedName = "蒸汽涡轮 等级1"
cj00411.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00411, {
    parent: '004',
    requirements: ItemStack.with(
        白, 300,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0041)
    )
}); exports.涡轮1 = cj00411;
const cj004120 = extend(Floor, "004120", {});
cj004120.localizedName = "蒸汽涡轮 等级2"
cj004120.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj004120, {
    parent: '00411',
    requirements: ItemStack.with(
        白, 20000, 绿, 16000, 黄, 9000, 橙, 2000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00414)
    )
}); exports.涡轮2 = cj004120;
const cj0042 = extend(Floor, "0042", {});
cj0042.localizedName = "能源核电 等级1"
cj0042.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0042, {
    parent: '004',
    requirements: ItemStack.with(
        白, 13000, 绿, 8000, 黄, 3000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00413)
    )
}); exports.核电1 = cj0042;
const cj00421 = extend(Floor, "00421", {});
cj00421.localizedName = "能源核电 等级2"
cj00421.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00421, {
    parent: '0042',
    requirements: ItemStack.with(
        白, 25000, 绿, 18000, 黄, 11000, 橙, 5000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00414)
    )
}); exports.核电2 = cj00421;
const cj00422 = extend(Floor, "00422", {});
cj00422.localizedName = "能源核电 等级3"
cj00422.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00422, {
    parent: '00421',
    requirements: ItemStack.with(
        白, 400000, 绿, 150000, 黄, 70000, 橙, 30000, 红, 4000
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00415)
    )
}); exports.核电3 = cj00422;
const cj0043 = extend(Floor, "0043", {});
cj0043.localizedName = "冲击能源 等级1"
cj0043.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0043, {
    parent: '004',
    requirements: ItemStack.with(
        白, 11000, 绿, 7000, 黄, 3000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00413)
    )
}); exports.冲击1 = cj0043;
const cj00431 = extend(Floor, "00431", {});
cj00431.localizedName = "冲击能源 等级2"
cj00431.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00431, {
    parent: '0043',
    requirements: ItemStack.with(
        白, 60000, 绿, 40000, 黄, 25000, 橙, 7000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00414)
    )
}); exports.冲击2 = cj00431;
const cj00432 = extend(Floor, "00432", {});
cj00432.localizedName = "冲击能源 等级3"
cj00432.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00432, {
    parent: '00431',
    requirements: ItemStack.with(
        白, 1000000, 绿, 750000, 黄, 400000, 橙, 150000, 红, 70000, 蓝, 35000, 紫, 10000
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00415)
    )
}); exports.冲击3 = cj00432;



















//-------------------------------------------------------
const cj005 = extend(Floor, "005", {});
cj005.localizedName = " 初始防御 等级1"
cj005.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj005, {
    parent: '000',
    requirements: ItemStack.with(
        Items.copper, 800,
        Items.lead, 600,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj003)
    )
}); exports.防御1 = cj005;
const cj0051 = extend(Floor, "0051", {});
cj0051.localizedName = " 基础防御 等级2"
cj0051.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0051, {
    parent: '005',
    requirements: ItemStack.with(
        白, 200,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj005)
    )
}); exports.防御2 = cj0051;
const cj0052 = extend(Floor, "0052", {});
cj0052.localizedName = " 基础防御 等级3"
cj0052.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0052, {
    parent: '0051',
    requirements: ItemStack.with(
        白, 500,
        绿, 100,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0051)
    )
}); exports.防御3 = cj0052;
const cj0053 = extend(Floor, "0053", {});
cj0053.localizedName = " 高级防御 等级4"
cj0053.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0053, {
    parent: '0051',
    requirements: ItemStack.with(
        白, 1500,
        绿, 600,
        黄, 350,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0051)
    )
}); exports.防御4 = cj0053;

//-------------------------------------------------------
const cj006 = extend(Floor, "006", {});
cj006.localizedName = "液体工艺0"
cj006.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj006, {
    parent: '003',
    requirements: ItemStack.with(
        Items.graphite, 1500,
        Items.metaglass, 1400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj003)
    )
}); exports.液体工艺0 = cj006;
const cj0061 = extend(Floor, "0061", {});//矿渣，蓝泵，冷冻液，分离机，钛管
cj0061.localizedName = "液体工艺1"
cj0061.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0061, {
    parent: '006',
    requirements: ItemStack.with(
        白, 400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj006)
    )
}); exports.液体工艺1 = cj0061;
const cj0062 = extend(Floor, "0062", {});//石油钻井
cj0062.localizedName = "液体工艺2"
cj0062.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0062, {
    parent: '0061',
    requirements: ItemStack.with(
        白, 1000,
        绿, 200,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0061)
    )
}); exports.液体工艺2 = cj0062;
const cj0063 = extend(Floor, "0063", {});//给热能泵，解离机
cj0063.localizedName = "液体工艺3"
cj0063.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0063, {
    parent: '0062',
    requirements: ItemStack.with(
        白, 3500,
        绿, 800,
        黄, 300,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0062)
    )
}); exports.液体工艺3 = cj0063;
//-------------------------------------------------------
const cj007 = extend(Floor, "007", {});
cj007.localizedName = "火药学0"
cj007.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj007, {
    parent: '003',
    requirements: ItemStack.with(
        Items.lead, 3000,
        Items.coal, 5000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj003)
    )
}); exports.火药学0 = cj007;
const cj0071 = extend(Floor, "0071", {});
cj0071.localizedName = "火药学1"
cj0071.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0071, {
    parent: '007',
    requirements: ItemStack.with(
        白, 1000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj003)
    )
}); exports.火药学1 = cj0071;
//----------------------------------------------------------
const cj008 = extend(Floor, "008", {});
cj008.localizedName = "荷载技术 等级1"
cj008.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj008, {
    parent: '0011',//运输2
    requirements: ItemStack.with(
        白, 1700,
        绿, 500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0011)
    )
}); exports.荷载技术1 = cj008;
const cj00801 = extend(Floor, "00801", {});
cj00801.localizedName = "荷载技术之装卸"
cj00801.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00801, {
    parent: '008',//运输2
    requirements: ItemStack.with(
        白, 900,
        绿, 200,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj008)
    )
}); exports.荷载技术之装卸 = cj00801;
const cj00802 = extend(Floor, "00802", {});
cj00802.localizedName = "荷载技术之构造"
cj00802.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00802, {
    parent: '008',//运输2
    requirements: ItemStack.with(
        白, 1200,
        绿, 300,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj008)
    )
}); exports.荷载技术之构造 = cj00802;
const cj0081 = extend(Floor, "0081", {});
cj0081.localizedName = "荷载技术 等级2"
cj0081.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0081, {
    parent: '008',
    requirements: ItemStack.with(
        白, 4500,
        绿, 900,
        黄, 600,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0011)
    )

}); exports.荷载技术2 = cj0081;
//-----------------------------------------------------------------------
const cj009 = extend(Floor, "009", {});
cj009.localizedName = " 基础光学"
cj009.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj009, {
    parent: '000',
    requirements: ItemStack.with(
        Items.silicon, 500,
        Items.metaglass, 500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj000)
    )
}); exports.光学 = cj009;
const cj0091 = extend(Floor, "0091", {});
cj0091.localizedName = " 太阳能 等级1"
cj0091.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0091, {
    parent: '009',
    requirements: ItemStack.with(
        白, 500,

    ),
    objectives: Seq.with(
        new Objectives.Research(cj009),
        new Objectives.Research(cj004),
    )
}); exports.太阳能1 = cj0091;
const cj00911 = extend(Floor, "00911", {});
cj00911.localizedName = " 太阳能 等级2"
cj00911.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00911, {
    parent: '0091',
    requirements: ItemStack.with(
        白, 3500,
        绿, 400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0091),
        new Objectives.Research(cj00412),
    )
}); exports.太阳能2 = cj00911;
const cj0092 = extend(Floor, "0092", {});//兰瑟
cj0092.localizedName = " 激光学 等级1"
cj0092.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0092, {
    parent: '009',
    requirements: ItemStack.with(
        白, 1500,
        绿, 500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj009)
    )
}); exports.激光学1 = cj0092;
const cj00921 = extend(Floor, "00921", {});//融汇，
cj00921.localizedName = " 激光学 等级2"
cj00921.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00921, {
    parent: '0092',
    requirements: ItemStack.with(
        白, 8000,
        绿, 3000,
        黄, 1800
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0092)
    )
}); exports.激光学2 = cj00921;
const cj00922 = extend(Floor, "00922", {});//噩兆/海神
cj00922.localizedName = " 激光学 等级3"
cj00922.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj00922, {
    parent: '00921',
    requirements: ItemStack.with(
        白, 23000,
        绿, 10000,
        黄, 8000,
        橙, 2000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj00921)
    )
}); exports.激光学3 = cj00922;
//--------------------------------------------------------------------------
const cj010 = extend(Floor, "010", {});
cj010.localizedName = " 军事 等级1"
cj010.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj010, {
    parent: '005',
    requirements: ItemStack.with(
        Items.lead, 3000,
        Items.graphite, 2500,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj005)
    )
}); exports.军事1 = cj010;
const cj0101 = extend(Floor, "0101", {});
cj0101.localizedName = " 军事 等级2"
cj0101.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0101, {
    parent: '010',
    requirements: ItemStack.with(
        白, 500,

    ),
    objectives: Seq.with(
        new Objectives.Research(cj010)
    )
}); exports.军事2 = cj0101;
const cj0102 = extend(Floor, "0102", {});
cj0102.localizedName = " 军事 等级3"
cj0102.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0102, {
    parent: '0101',
    requirements: ItemStack.with(
        白, 2000,
        绿, 400,

    ),
    objectives: Seq.with(
        new Objectives.Research(cj0101)
    )
}); exports.军事3 = cj0102;
const cj0103 = extend(Floor, "0103", {});
cj0103.localizedName = " 军事 等级4"
cj0103.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0103, {
    parent: '0102',
    requirements: ItemStack.with(
        白, 7500,
        绿, 1000,
        黄, 500

    ),
    objectives: Seq.with(
        new Objectives.Research(cj0102)
    )
}); exports.军事4 = cj0103;
const cj0104 = extend(Floor, "0104", {});
cj0104.localizedName = " 军事 等级5"
cj0104.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0104, {
    parent: '0103',
    requirements: ItemStack.with(
        白, 35000,
        绿, 26000,
        黄, 17000,
        橙, 9000,

    ),
    objectives: Seq.with(
        new Objectives.Research(cj0103)
    )
}); exports.军事5 = cj0104;
//--------------------------------------
const cj011 = extend(Floor, "011", {});
cj011.localizedName = "初始功能"
cj011.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj011, {
    parent: '000',
    requirements: ItemStack.with(
        Items.graphite, 100,
        Items.lead, 100,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj004)
    )
}); exports.初始功能 = cj011;

const cj0111 = extend(Floor, "0111", {});
cj0111.localizedName = "功能 等级1"
cj0111.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0111, {
    parent: '011',
    requirements: ItemStack.with(
        白, 800,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0011)
    )
}); exports.功能1 = cj0111;
const cj0112 = extend(Floor, "0112", {});
cj0112.localizedName = "功能 等级2"
cj0112.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0112, {
    parent: '0111',
    requirements: ItemStack.with(
        白, 2200, 绿, 600,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0111)
    )
}); exports.功能2 = cj0112;
const cj0113 = extend(Floor, "0113", {});
cj0113.localizedName = "功能 等级3"
cj0113.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0113, {
    parent: '0112',
    requirements: ItemStack.with(
        白, 8000, 绿, 2000, 黄, 400,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0112)
    )
}); exports.功能3 = cj0113;
const cj0114 = extend(Floor, "0114", {});
cj0114.localizedName = "功能 等级4"
cj0114.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(cj0114, {
    parent: '0113',
    requirements: ItemStack.with(
        白, 40000, 绿, 23000, 黄, 7000, 橙, 2000,
    ),
    objectives: Seq.with(
        new Objectives.Research(cj0113)
    )
}); exports.功能4 = cj0114;



































const rookie = extend(Floor, "rookie", {});
rookie.buildVisibility = BuildVisibility.hidden;
lib.addToResearch(rookie, {
    parent: '0004',
    objectives: Seq.with(
        new Objectives.Research(nulls)
    )
});
 exports.rookie = rookie;
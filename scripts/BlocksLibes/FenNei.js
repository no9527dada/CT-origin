//xvxshenhun@qq.com，使用请标来源，（禁止删除本注释）<我没有把js加密算不错了(狗头)>
//@滞人 源代码特供
const {
    oiljinglianchang, taihejinji, zuanshiyasuoji, jinhuiyasuoji, zhiwujingyoutilianji, zhiwujingyoutiquji, jinhuiyeji,
    xitilianji, zuankuangjiagongchang, meitantiliangongchang, zhiwudaosuiji, fensuiji, liuji,
    hejinboliji, jinhuiboliji,
    shiyingronglu,  guijingtichengxingji, guilu, guijingtihechengji, guijingtigongchang,
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
const {lajixiang}=require('BlocksLibes/lajixiang')
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
var leftFrag = (fragConfig) => {
    const iconWidth = 35;//UI面板大小
    const padding = 3;//两条分割线的高度
    const MARGIN_RIGHT = 314;
    const b1 = Color.valueOf("26dff8")
    var currentCategory = 0;
    var menuHoverBlock;
    var selectedBlocks = new ObjectMap();
    var scrollPositions = new ObjectFloatMap();
    var blockTable;
    var blockPane;
    var toggler;
    var hide = true;
    var IconA = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-ON', Core.atlas.find("clear")));
    var IconB = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-OFF', Core.atlas.find("clear")));
    var fragment;
    function containsContent(content) {
        var found = false;
        var cs = fragConfig.categories;
        loop: for (var i = 1; i < cs.length; i++) {
            var category = cs[i];
            for (var j = 1; j < category.blocks.length; j++) {
                var block = category.blocks[j];
                if (content == block) {
                    found = true;
                    break loop;
                }
            }
        }

        return found;
    }
    function rebuild() {
        if (fragment) {
            currentCategory = 0;
            var index = toggler.getZIndex();
            var group = toggler.parent;
            toggler.remove();
            fragment.build(group);
            toggler.setZIndex(index);
        }
    }
    Events.on(WorldLoadEvent, cons(event => {
        Core.app.post(run(() => {
            rebuild();
        }));
    }));
    Events.on(UnlockEvent, cons(event => {
        if (containsContent(event.content)) {
            rebuild();
        }
    }));
    function unlocked(block) {
        return block.unlockedNow();
    }
    function getSelectedBlock(cat) {
        return selectedBlocks.get(cat, prov(() => {
            var category = fragConfig.categories[cat]
            return category.blocks.find(v => unlocked(v));
        }));
    }
    fragment = new JavaAdapter(Fragment, {
        build(parent) {
            parent.table(cons(full => {
                toggler = full;
                full.bottom().right().visibility = boolp(() => Vars.ui.hudfrag.shown);
                if (hide) {
                    full.button(IconA, run(() => {
                        hide = false;
                        rebuild();
                    })).size(50, 50);
                } else {
                    full.button(IconB, run(() => {
                        hide = true;
                        rebuild();
                    })).size(40, 50).bottom();
                    full.table(cons(frame => {

                        var rebuildCategory = run(() => {

                            blockTable.clear();
                            blockTable.top().margin(10);

                            var index = 0;
                            var group = new ButtonGroup();
                            group.setMinCheckCount(0);

                            var category = fragConfig.categories[currentCategory || 0];
                            for (var j = 0; j < category.blocks.length; j++) {
                                var block = ((sss) => category.blocks[sss])(j);
                                if (!unlocked(block)) { continue; }
                                if (index++ % fragConfig.columns == 0) {
                                    blockTable.row();
                                }
                                var button = ((block) =>
                                    blockTable.button(new TextureRegionDrawable(block.icon(Cicon.medium)), Styles.clearTogglei, run(() => {
                                        if (unlocked(block)) {
                                            if (Core.input.keyDown(Packages.arc.input.KeyCode.shiftLeft) && Fonts.getUnicode(block.name) != 0) {
                                                Core.app.setClipboardText(Fonts.getUnicode(block.name) + "");
                                                Vars.ui.showInfoFade("@copied");
                                            } else {
                                                Vars.control.input.block = Vars.control.input.block == block ? null : block;
                                                selectedBlocks.put(currentCategory, Vars.control.input.block);
                                                hide = false;
                                                // rebuild();
                                            }
                                        }
                                    })).size(iconWidth).group(group).name("block-" + block.name).get()
                                )(block);
                                button.resizeImage(Cicon.medium.size);
                                button.update(((block, button) => run(() => {
                                    var core = Vars.player.core();
                                    var color = (Vars.state.rules.infiniteResources
                                        || (core != null && (core.items.has(block.requirements, Vars.state.rules.buildCostMultiplier) || Vars.state.rules.infiniteResources)))
                                        && Vars.player.isBuilder() ? Color.white : Color.darkGray;
                                    button.forEach(cons(elem => { elem.setColor(color); }));
                                    button.setChecked(Vars.control.input.block == block);
                                    if (!block.isPlaceable()) {
                                        button.forEach(cons(elem => elem.setColor(b1)));
                                    }
                                    button.hovered(run(() => menuHoverBlock = block));
                                    button.exited(run(() => {
                                        if (menuHoverBlock == block) {
                                            menuHoverBlock = null;
                                        }
                                    }));
                                }))(block, button));
                            }
                            if (index < fragConfig.columns) {
                                for (var k = 0; k < fragConfig.columns - index; k++) {
                                    blockTable.add().size(iconWidth);
                                }
                            }
                            blockTable.act(0);
                            blockPane.setScrollYForce(scrollPositions.get(currentCategory, 0));
                            Core.app.post(() => {
                                blockPane.setScrollYForce(scrollPositions.get(currentCategory, 0));
                                blockPane.act(0);
                                blockPane.layout();
                            });
                        });
                        frame.image().color(b1).colspan(fragConfig.columns).height(padding).growX();
                        frame.row();
                        frame.table(Tex.pane2, cons(blocksSelect => {
                            blocksSelect.margin(padding).marginTop(0);
                            blockPane = blocksSelect.pane(cons(blocks => blockTable = blocks)).height(iconWidth * fragConfig.rows + padding)
                                .update(cons(pane => {
                                    if (pane.hasScroll()) {
                                        var result = Core.scene.hit(Core.input.mouseX(), Core.input.mouseY(), true);
                                        if (result == null || !result.isDescendantOf(pane)) {
                                            Core.scene.setScrollFocus(null);
                                        }
                                    }
                                })).grow().get();
                            blockPane.setStyle(Styles.smallPane);
                            blocksSelect.row();
                            blocksSelect.table(cons(table => {

                                table.image().color(b1).height(padding).colspan(fragConfig.columns).growX();
                                table.row();
                                table.left().margin(5).defaults().size(iconWidth).left();

                                var group = new ButtonGroup();
                                var index = 0;
                                var cs = fragConfig.categories;
                                for (var i = 0; i < cs.length; i++) {
                                    if (index++ % fragConfig.columns == 0) {
                                        table.row();
                                    }
                                    var category = cs[i];
                                    (cc => {
                                        table.button(category.icon(), Styles.clearToggleTransi, run(() => {
                                            currentCategory = cc;
                                            if (Vars.control.input.block != null) {
                                                Vars.control.input.block = getSelectedBlock(currentCategory);
                                            }
                                            rebuildCategory.run();
                                        })).group(group).update(cons(v => v.setChecked(currentCategory == v))).name("category-" + cc);
                                    })(i);
                                }
                                if (index < fragConfig.columns) {
                                    for (var k = 0; k < fragConfig.columns - index; k++) {
                                        table.add().size(iconWidth);
                                    }
                                }
                            })).name("[C]inputTable").growX();
                        })).fillY().bottom().touchable(Touchable.enabled);

                        rebuildCategory.run();
                    }));
                }
            }));
        },
    });

    return fragment;
};
Events.on(ClientLoadEvent, cons((e) => {

    var myIcon1 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-aa', Core.atlas.find("clear")));
    var myIcon2 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-bb', Core.atlas.find("clear")));
    var myIcon3 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-cc', Core.atlas.find("clear")));
    var myIcon4 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-dd', Core.atlas.find("clear")));
    var myIcon5 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-ee', Core.atlas.find("clear")));
    //var myIcon6 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-ff', Core.atlas.find("clear")));
    // var myIcon7 = new Packages.arc.scene.style.TextureRegionDrawable(Core.atlas.find('creators-admin', Core.atlas.find("clear")));
    var frag = leftFrag({
        rows: 4,//行
        columns: 5,//列
        categories: [
            {
                icon: () => myIcon1, blocks: [//微晶
                    jiweijinggongchang1, jiweijinggongchang2, jiweijinggongchang3, jiweijinggongchang4, jiweijinggongchang5,
                    weijingfenjieji, jiweijinggongchang21, liziduizhuangji, chuangshiji, chuangxingjiexiyi, chuangshiyujie,
                   /* powerSource1,*/ chuangshizhishen, wupinyuan, weichenshoujiqi,
                ]
            },
            {
                icon: () => myIcon2, blocks: [//魔力石
                    wenshiqi, molishizhizaoqi, monengjingdamoji0, jimonengjinglianzhiqi1,
                    jimonengjinglianzhiqi2, jimonengjinglianzhiqi3, jimonengjinglianzhiqi4,
                ]
            },
            {
                icon: () => myIcon3, blocks: [//MOD液体
                    moliyeshoujiqi1, moliyeshoujiqi2, oiljinglianchang, moliyehunheji, lengdongyehunheji,
                    zhiwujingyoutilianji, zhiwucuiqugongchang, zhiwucuiqugongchang2,
                    zhiwujingyoutiquji, molijinghuatilianji, liziyeji, yuanwanjinghuaji,
                    qiangxiaolengqueyehunheji, testC, testA, jinhuiyeji,
                    jitilianji3, jitilianji4, jitilianjimoliyetilianji, sui4
                ]
            },
            {
                icon: () => myIcon4, blocks: [//MOD工厂
                    shiyingronglu, guijingtichengxingji, guijingtihechengji, guijingtigongchang, xitilianji, taihejinji, jinhuiyasuoji,
                    shimoxiji, zhiwudaosuiji, budingjiagongchang, budingjiagongchang2, hejinboliji, jinhuiboliji, jinfentilianji,
                    jinchengxingji, jinchengxingji2, zijinggongchang, xiaofentilianji,
                    tanbanyasuoji, tanbanyasuoji2, zuanjingjiagongchang, zuanshiyasuoji, zuankuangjiagongchang,
                    zhayaozhizaoji, jhgtbzwj,
                ]
            },
            {
                icon: () => myIcon5, blocks: [//原版升级工厂
                    lajixiang, fensuiji, guilu, luzhayasuoji, meitantiliangongchang, liuji, duochonbuji2, duochonbuji3,
                    duochongsugangji, hejin2, gaojipeiyangji, feiliaoji, qianghuaronglu, zhuanhuantai, zizhuanTu, fashetai,
                ]
            },
            //  {
            //      icon: () => myIcon6, blocks: [

            //      ]
            //  },
            // {
            //     icon: () => myIcon7, blocks: [

            //     ]
            // },
        ]
    });

    var table = new Table();
    Events.run(Trigger.update, () => {
        var ui = Core.scene.find("inputTable").parent.parent.parent;
        ui.defaults().bottom().right();
        if (ui.find("FenNei") == null) {
            let child1 = ui.getChildren().get(0);
            child1.remove();

            ui.table().get().add(table).name("FenNei");
            ui.add(child1);
        }
    });

    frag.build(table);
}));


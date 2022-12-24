

/* Events.on(EventType.ClientLoadEvent,
    cons(e => {
        Vars.ui.hudGroup.fill(cons(t => {
            let style = CreatorsStyles.clearTransi;

            t.button(Icon.home, style, run(() => {
                new JoinDialog().connect("49.232.140.138", 9527);
            })).width(35).height(46).name("ores").tooltip(Core.bundle.get("9527-net2"));//国际大厅

            t.button(Icon.refresh, style, run(() => {
                Call.sendChatMessage("/sync");
            })).width(46).height(46).name("ores").tooltip(Core.bundle.get("refresh"));//联机刷新

            t.top().left().marginTop(155);
        }));
    })); */
//缩放
Vars.renderer.minZoom = 0.5;
Vars.renderer.maxZoom = 32;
//蓝图大小
Vars.maxSchematicSize = 128;
//变速  游戏速度  游戏调速 游戏变速
Events.on(EventType.ClientLoadEvent, e => {
    let first = true;
    Vars.ui.settings.game.sliderPref(Core.bundle.format("9527xiao"), 100, 0, 10000, 25, i => {
        if(first){
            first = false;
            return;
        };
        let s = i / 100; Time.setDeltaProvider(() => Math.min(Core.graphics.getDeltaTime() * 60 * s, 3 * s));
        return i + "%";
    });
});

// Events.on(EventType.ClientLoadEvent, e => {
//     let first2 = true;
//     Vars.ui.settings.game.sliderPref(Core.bundle.format("9527da"), 100, 100, 1000, 10,i => {
//         if(first2){
//             first2 = false;
//             return;
//         };
//         let s = i; Time.setDeltaProvider(() => Math.min(Core.graphics.getDeltaTime() * 60 * s, 3 * s));
//         return i + "%";
//     });
// });


//---------下列代码由 @miner 提供授权仅在（创世神）使用，任何人不得擅自盗取，要使用需通知作者：@9527或者@miner

//核心物资显示 #1
const myCoreItems = require("UI/myCoreItems2");
Events.on(EventType.ClientLoadEvent, e => {
    let ui = Vars.ui;
    let hudGroup = ui.hudGroup;
    let hudfrag = ui.hudfrag;
    let settings = Core.settings;

    myCoreItems.load();

    let myItems = myCoreItems.rebuild();
    let collapser = hudGroup.find("coreinfo").getChildren().get(1).getChildren().get(0);
    let oldItems = collapser.getChildren().get(0);

    let change = () => {
        let s = settings.getBool("mycoreitems9527", false);
        let set = s ? myItems : oldItems;
        collapser.setTable(set);
    }


    collapser.setCollapsed(boolp(() => !(hudfrag.shown && settings.getBool("coreitems", true))));
    if (Vars.mobile) collapser.touchable = Touchable.disabled;

    if (Vars.mobile) ui.settings.graphics.checkPref("coreitems", true);//原版的核心显示默认开启或关闭
    ui.settings.graphics.checkPref("mycoreitems9527", false, s => change());//默认开启或关闭

    change();
});

Events.on(ResetEvent, e => {
    myCoreItems.resetUsed();
});


// Vars.ui.hudGroup.fill(cons(t => {
//     t.button(Icon.home, Styles.defaulti, run(() => {
//         graphics.checkPref("bloom", true, val => renderer.toggleBloom(val));//粒子光效
//         graphics.checkPref("effects", true);//特效
//     })).width(46).height(46).name("ores").tooltip(Core.bundle.get("开关"));//全局特效开关
// }));



/*
bottom是下

right是右

left是左

top是上

左下角就是

left().bottom()

()里可以填值
             *
        };
    }));
}))
 */

//=========首页按钮
Events.on(EventType.ClientLoadEvent, cons(e => {
    let framer = Core.bundle.format("framer");
    let mod = Vars.mods.getMod("creators")
    let version = mod.meta.version
    let https1 = "https://jq.qq.com/?_wv=1027&k=rZ8D5XGE";
    let https12 = "https://jq.qq.com/?_wv=1027&k=oygqLbJ5";
    let https2 = "http://sd674971336.ysepan.com"
    let https3 = "https://steamcommunity.com/sharedfiles/filedetails/?id=2747061532&searchtext=%E5%88%9B%E4%B8%96%E7%A5%9E"
    let https4 = "https://pan.baidu.com/s/1tJGPpPuSLG9WMsCbEGE7aQ?pwd=9527";
    let TZ = Core.bundle.format("TZ");
    let IP = Core.bundle.format("IP");
    let TX2 = Core.bundle.format("TX2");
    let TX = Core.bundle.format("TX");
    let TX0 = Core.bundle.format("planet.creators.MODname");

    let https222 = "http://sd674971336.ysepan.com"
    let https333 = "https://github.com/no9527dada/CT-origin/releases"
    let https111 = "https://jq.qq.com/?_wv=1027&k=rZ8D5XGE";
    //**=========================================================
    //剧情↓↓↓↓↓
    var JuQing = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    JuQing.buttons.defaults().size(210, 64);
    JuQing.cont.pane((() => {
        var table = new Table();
        table.add(Core.bundle.format("JuQing_txt")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        return table;
    })()).grow().center().maxWidth(770);

    JuQing.buttons.button("@close", run(() => {
        JuQing.hide();
    })).size(210, 64);
    JuQing.addCloseListener();//按esc关闭

    //JuQing.addCloseButton();//按esc关闭
    //**=========================================================
    //独立版介绍
    var independent = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    independent.buttons.defaults().size(210, 64);
    independent.cont.pane((() => {
        var table = new Table();
        table.add(Core.bundle.format("independent_txt")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        return table;
    })()).grow().center().maxWidth(770);

    independent.buttons.button("@close", run(() => {
        independent.hide();
    })).size(210, 64);
    independent.addCloseListener();//按esc关闭

    //恰饭↓↓↓↓↓
    var love = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    love.buttons.button("@close", run(() => {
        love.hide();
    })).size(210, 64);
    love.addCloseListener();//按esc关闭
    love.cont.pane((() => {
        var table = new Table();
        table.add(Core.bundle.format("planet.creators.love")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(9);
        table.row();
        table.image(Core.atlas.find("creators-nandu")).height(210).width(440).pad(3);
        table.row();
        return table;
    })()).grow().center().maxWidth(770);
    love.buttons.button(Core.bundle.format("9527steam"), run(() => {
        if (!Core.app.openURI(https3)) {
            Vars.ui.showErrorMessage("@linkfail");
            Core.app.setClipboardText(https3);
        }
    })).size(210, 64)
    //**=========================================================
    //历史更新↓↓↓↓↓
    var GengXin = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    GengXin.buttons.button("@close", run(() => {
        GengXin.hide();
    })).size(210, 64);
    GengXin.addCloseListener();//按esc关闭
    GengXin.buttons.defaults().size(210, 64);

    GengXin.cont.pane((() => {

        var table = new Table();
        table.add(Core.bundle.format("planet.creators.MODname") + IP).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3);
        table.row();

        table.image(Core.atlas.find("creators-logo", Core.atlas.find("clear"))).height(290).width(587).pad(3);
        table.row();
        table.add(TZ).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.add(TX2).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("update2")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("notice")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        return table;
    })()).grow().center().maxWidth(770);
    //**=========================================================

    //更新器
    var update = new BaseDialog('创世神');
    update.cont.pane((() => {

        var table = new Table();
        table.add('点击下方按钮进行下载').left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.button(Core.bundle.format("9527http222"), run(() => {
            if (!Core.app.openURI(https222)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https222);
            }
        })).size(510, 64);
        table.row();
        table.button(Core.bundle.format("9527http333"), run(() => {
            if (!Core.app.openURI(https333)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https333);
            }
        })).size(510, 64).row();
        table.button(Core.bundle.format("9527http111"), run(() => {
            if (!Core.app.openURI(https1)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https1);
            }
        })).size(510, 64).row();
        table.button(Core.bundle.format("9527http112"), run(() => {
            if (!Core.app.openURI(https12)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https12);
            }
        })).size(510, 64).row();
        return table;
    })()).grow().center().maxWidth(770);
    update.addCloseListener();//按esc关闭
    update.buttons.button("@close", run(() => {
        update.hide();
    })).size(100, 64);

    //**=========================================================

    //开屏显示↓↓↓↓↓

    var kaiping = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);

  
    kaiping.addCloseListener();//按esc关闭
    kaiping.buttons.button(Core.bundle.format("9527independent"), run(() => {
        independent.show();
    })).size(150, 64);//独立版介绍
    kaiping.buttons.defaults().size(210, 64);

    kaiping.buttons.button("@close", run(() => {
        kaiping.hide();
    })).size(100, 64);
    kaiping.buttons.button(Core.bundle.format("9527JuQing"), run(() => {
        JuQing.show();
    })).size(150, 64);//剧情
    kaiping.buttons.button(Core.bundle.format("9527love"), run(() => {
        love.show();
    })).size(150, 64);
    kaiping.cont.pane((() => {

        var table = new Table();
        table.add(Core.bundle.format("planet.creators.MODname") + IP).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3);
        table.row();

        table.image(Core.atlas.find("creators-logo", Core.atlas.find("clear"))).height(290).width(587).pad(3);
        table.row();
        table.add(TZ).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.add(TX0 + "[]:[#88ff6e]" + version + "[]" + TX).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("update")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("notice")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.button(Core.bundle.format("9527fuzhuMOD"), run(() => {
            ModsDialog().show()//.addCloseButton();
        })).size(210, 80);
        return table;
    })()).grow().center().maxWidth(770);
    kaiping.buttons.button(Core.bundle.format("9527http"), run(() => {
        update.show();
    })).size(150, 64);
    kaiping.row();
    kaiping.show();
    //**=========================================================
    var dialog = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    dialog.buttons.defaults().size(210, 64);
    dialog.cont.pane(cons(t => {
        //  t.image(Core.atlas.find("dd")).scaling(Scaling.fit);//贴图
        t.button(Core.bundle.format("9527saver"),/* Styles.cleart ,*/ run(() => {
            new JoinDialog().connect("ip", 6567),
                dialog.hide();
        })).size(210, 64); t.row();
        t.button(Core.bundle.format("9527http111"), run(() => {
            if (!Core.app.openURI(https1)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https1);
            }
        })).size(210, 64);
        t.row();
        t.button(Core.bundle.format("9527http112"), run(() => {
            if (!Core.app.openURI(https12)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https12);
            }
        })).size(210, 64);
        t.row();
        t.button(Core.bundle.format("9527fuzhuMOD"), run(() => {
            ModsDialog().show()//.addCloseButton();
        })).size(210, 80);
        t.row();

        t.button(Core.bundle.format("9527http"), run(() => {
            update.show();
        })).size(210, 64);
        t.row();

        /*       t.button(Core.bundle.format("9527http"), run(() => {
                  if (!Core.app.openURI(https2)) {
                      Vars.ui.showErrorMessage("@linkfail");
                      Core.app.setClipboardText(https2);
                  }
              })).size(210, 64);
              t.row(); */

        t.button(Core.bundle.format("9527love"), run(() => {
            love.show();
        })).size(210, 64);

    }))
    dialog.buttons.button(Core.bundle.format("9527gengxin"), run(() => {
        GengXin.show();
    })).size(100, 64);
    dialog.buttons.button(Core.bundle.format("9527shouye"), run(() => {
        kaiping.show(), dialog.hide();
    })).size(100, 64);
    dialog.addCloseButton();//按esc关闭
    const imagebutton = Creators.CreatorsIcon("Betelgeuse", Styles.defaulti, dialog)
    Vars.ui.menuGroup.fill(cons(t => {
        if (Vars.mobile) {
            t.add(imagebutton).size(80.0);
            t.bottom();
        } else {
            t.add(imagebutton).size(80.0);
            t.left().bottom()
        };
    }));


    
    const kaite = new ImageButton.ImageButtonStyle();
    kaite.down = Tex.buttonDown;
    kaite.up = Styles.black3;
    kaite.over = Tex.buttonOver;
    kaite.imageDisabledColor = Color.gray;
    kaite.imageUpColor = Color.white;
    kaite.disabled = Tex.buttonDisabled;

    Vars.ui.hudGroup.fill(cons(table => {
        let shown = false;
        table.button(Icon.downSmall, Styles.defaulti, () => {
            shown = !shown;
        }).checked(b => shown).size(40).left().row();
        table.collapser(t => {
            function addButton(icon, runnable, tooltipName) {
                t.button(icon, kaite, runnable).size(35, 32).tooltip(Core.bundle.get(tooltipName));
            }
       

        let style = CreatorsStyles.clearTransi;
        t.button(Icon.home, Styles.defaulti, run(() => {
            dialog.show()
        })).width(46).height(46).name("ores").tooltip(Core.bundle.get("9527shouye"));//首页

        t.button(Icon.refresh, style, run(() => {
            Call.sendChatMessage("/sync");
        })).width(46).height(46).name("ores").tooltip(Core.bundle.get("refresh"));//联机刷新

          t.button(Icon.book, Styles.clearTogglei, run(() => {
              Creators.CTBlockBool = !Creators.CTBlockBool;//蓝图
          })).width(46).height(46).name("ores").tooltip(Core.bundle.get("9527lantu")).update(cons(tb => {
              tb.setChecked(Creators.CTBlockBool);
          }));//蓝图系统
        
        t.top().left().marginTop(5);

        /*         t.button(Icon.eye, Styles.clearTogglei, run(() => {
                    let b = Core.settings.get("bloom", false);
                    Core.settings.put("bloom", !b);
                    Vars.renderer.toggleBloom(b);
                })).size(46).tooltip(Core.bundle.get("NOFF"));//光效特效开关
        
                t.button(Icon.eye, Styles.clearTogglei, run(() => {
                    let b = Core.settings.get("effects", true);
                    Core.settings.put("effects", !b);
                })).size(46).tooltip(Core.bundle.get("NOFF2"));//粒子特效开关
        
         */
        t.button(Icon.eye, Styles.clearTogglei, run(() => {
            // let b = Core.settings.get("bloom", false);
            // Core.settings.put("bloom", !b);
            // Vars.renderer.toggleBloom(b);
            let c = Core.settings.get("effects", true);
            Core.settings.put("effects", !c);
        })).size(46).tooltip(Core.bundle.get("NOFF"));//全局特效开关


    }, false, () => shown).left();

    table.top().left().marginTop(110);
    }));

}));
Events.on(EventType.ClientLoadEvent, cons(e => {
    Vars.content.block("creators-large-payload-mass-driver").capOutlineRegion = Vars.content.block("large-payload-mass-driver").capOutlineRegion;
    Vars.content.block("creators-large-payload-mass-driver").leftOutlineRegion = Vars.content.block("large-payload-mass-driver").leftOutlineRegion;
    Vars.content.block("creators-large-payload-mass-driver").rightOutlineRegion = Vars.content.block("large-payload-mass-driver").rightOutlineRegion;
}));//事件加载
/*
//esc键落监听器:
const KeyCode = Packages.arc.input.KeyCode;
        table.keyDown(key => {
            if(key == KeyCode.escape || key == KeyCode.back){
                Core.app.post(() => table.remove());
            }
        }); */



//白名单
   //require('wmod');

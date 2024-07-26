

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
    let https4 = "https://www.bilibili.com/video/BV12u4y1Q7Ft/";
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
        table.add(Core.bundle.format("planet.creators.love")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);//难度
        table.row();
        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(9);
        table.row();
        // table.image(Core.atlas.find("creators-nandu")).height(955).width(477).pad(3);//捐赠
        table.image(Core.atlas.find("creators-nandu")).height(210).width(440).pad(3);//难度
        table.row();
        table.button("@settings", run(() => {
            Vars.ui.settings.show();//设置
            dialog.hide();
        })).size(180, 50);
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
    var update = new BaseDialog('[yellow]Creators[#7bebf2]');
    update.cont.pane((() => {

        var table = new Table();
        table.add(Core.bundle.format("dianjixiazai")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
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

    var kaiping = new BaseDialog("[yellow]Creators[#7bebf2]" + version + "[] Adapt 140+" + "\n" + framer);


    kaiping.addCloseListener();//按esc关闭
    kaiping.buttons.button(Core.bundle.format("9527independent"), run(() => {
        independent.show();//独立版介绍
        //  CTUpdater.更新弹窗.show();//更新检测
    })).size(150, 64);
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
        /*         table.button(Core.bundle.format("9527fuzhuMOD"), run(() => {
                   // ModsDialog().show()//.addCloseButton();
                                       if (!Core.app.openURI(https4)) {
                                            Vars.ui.showErrorMessage("@linkfail");
                                            Core.app.setClipboardText(https4);
                                        }
                })).size(210, 80); */  //现在已经内置科技树显示
        return table;
    })()).grow().center().maxWidth(770);
    kaiping.buttons.button(Core.bundle.format("9527http"), run(() => {
        update.show();
    })).size(150, 64);
    kaiping.row();
    kaiping.show();
    //**=========================================================
    let turnDuration = Vars.turnDuration;
    let universe = Vars.universe;
    let turnCounter = Reflect.get(universe, "turnCounter");
    let ticks = turnDuration - turnCounter;


    var locloseAnAccounve = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    locloseAnAccounve.buttons.button("@close", run(() => {
        locloseAnAccounve.hide();
    })).size(210, 64);
    locloseAnAccounve.addCloseListener();//按esc关闭

    locloseAnAccounve.cont.pane((() => {
        var table = new Table();
        table.add(Core.bundle.format("locloseAnAccounve")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(9);
        table.row();
        table.button("", () => { }).size(300, 64).update(buttonn => {
            let turnCounter = Reflect.get(universe, "turnCounter");
            let ticks = turnDuration - turnCounter;
            buttonn.setText(Core.bundle.get("jiesuan") + UI.formatTime(ticks));
        })
        table.row();
        table.button("@tongji2", Icon.info,run(() => {
            let sector = Vars.state.getSector();
            if (sector != null&&sector.save != null) {
                Reflect.invoke(CTui.CTplanet, "showStats", [Vars.state.getSector()], Sector);
               // CTui.CTplanet, "showStats", [Vars.state.getSector()], Sector
            }
        })).size(250, 64).padLeft(-400).padTop(20);
        table.button(Core.bundle.format("gonglue"), run(() => {
            if (!Core.app.openURI(https4)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https4);
            }
        })).size(250, 64).padLeft(-400).padTop(20);
/*         table.button(Icon.info, kaite, () => {
            let sector = Vars.state.getSector();
            if (sector != null&&sector.save != null) {
                Reflect.invoke(CTui.CTplanet, "showStats", [Vars.state.getSector()], Sector);
               // CTui.CTplanet, "showStats", [Vars.state.getSector()], Sector
            }
        }, null, "tongji"); //统计  */
        return table;
    })()).grow().center().maxWidth(770);

    //首页菜单
    var dialog = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 140+" + "\n" + framer);
    dialog.buttons.defaults().size(210, 64);
    dialog.cont.pane(cons(t => {
        //  t.image(Core.atlas.find("dd")).scaling(Scaling.fit);//贴图
        t.button("", () => { }).size(300, 64).update(button => {
            let turnCounter = Reflect.get(universe, "turnCounter");
            let ticks = turnDuration - turnCounter;
            button.setText(Core.bundle.get("jiesuan") + UI.formatTime(ticks));
        })

        //自定义倒计时
        /*         let ticks = 2 * 60 * 60;
                dialog.button("", () => {}).size(210, 64).update(button => {
                    ticks -= Time.delta;
                    button.setText("倒计时" + UI.formatTime(ticks));
                }) */
        t.row();


        t.button("Online",/*Core.bundle.format("9527saver"),/* Styles.cleart ,*/ run(() => {
            // new JoinDialog().connect("mindustry.fun", 6567),
            JoinDialog().show();//联机
            dialog.hide();
        })).size(100, 50).padLeft(-180);

        t.button("@loadgame", run(() => {
            Vars.ui.load.show();//加载游戏
            dialog.hide();
        })).size(100, 50).padLeft(-180);
        t.row();
        t.button("@planets", run(() => {
            Vars.ui.planet.show();//战役星球界面
            dialog.hide();
        })).size(100, 50).padLeft(-180);
        t.button("@customgame", run(() => {
            Vars.ui.custom.show();//自定义
            dialog.hide();
        })).size(100, 50).padLeft(-180);

        t.row();
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
        t.button(Core.bundle.format("mods"), run(() => {
            ModsDialog().show()//.addCloseButton();
        })).size(210, 64);
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
        /*     let t = Vars.turnDuration - Universe.turnCounter;
            let s = Mathf.floor(t / 60 % 60);
            dialog.button("后台结算xxxxxx", () => {        }).update(btn => {
                var min = Strings.fixed(Mathf.floor(t / 60 / 60), 0);;
                var sec = (s < 10 ? "0" : "") + Strings.fixed(s, 0);;
                btn.setText("后台结算" + min + ":" + sec);
            }) .size(210, 64).update; */

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


    //加速条和左上小工具按钮

    Vars.ui.hudGroup.fill(cons(table => {
        let shown = false;
        table.button(Icon.downSmall, Styles.defaulti, () => {
            shown = !shown;
        }).checked(b => shown).size(40).left().row();
        table.collapser(t => {
            t.top().left();

            let buttons = t.table().left().get();

            function addButton(icon, style, runnable, checked, tooltipName) {
                let cell = buttons.button(icon, style, 36, runnable).size(46)
                    .tooltip(Core.bundle.get(tooltipName));

                if (checked != null) {
                    cell.checked(checked);
                }
            }

            addButton(Icon.home, kaite, () => {
                dialog.show();
            }, null, "9527shouye"); // 首页

            addButton(Icon.refresh, kaite, () => {
                Call.sendChatMessage("/sync")
            }, null, "refresh"); // 刷新

            addButton(Icon.book, Styles.clearTogglei, () => {
                Creators.CTBlockBool = !Creators.CTBlockBool;
            }, b => Creators.CTBlockBool, "9527lantu"); // 蓝图

            addButton(Icon.eye, Styles.clearTogglei, () => {
                let c = Core.settings.get("effects", true);
                Core.settings.put("effects", !c);
            }, b => Core.settings.get("effects", true), "NOFF"); // 全局特效开关

            addButton(Icon.save, kaite/* Styles.defaulti */, () => {
                locloseAnAccounve.show()
            }, null, "jiesuan"); //后台结算
            addButton(Icon.info, kaite, () => {
                let sector = Vars.state.getSector();
                if (sector != null && sector.save != null) {
                    Reflect.invoke(Vars.ui.planet, "showStats", [Vars.state.getSector()], Sector);
                }
            }, null, "tongji"); //统计 

            /*              addButton(Icon.info, kaite, () => {
                            let sector = Vars.state.getSector();
                            if (sector != null&&sector.save != null) {
                                Reflect.invoke(CTui.CTplanet, "showStats", [Vars.state.getSector()], Sector);
                               // CTui.CTplanet, "showStats", [Vars.state.getSector()], Sector
                            }
                        }, null, "tongji"); //统计 
                         */


            t.row();
            //加速条
            t.table(Styles.black6, speedTable => {
                setupSpeedTable(speedTable);
            }).growX();


        }, false, () => shown).left();
        table.top().left().marginTop(110);
    }));
       Vars.ui.hudGroup.fill(cons(cundang => {//存档
           if (
               //在加载了自动存档模组后执行自动存档
               Vars.mods.locateMod("auto-saver") == null
               ) {
               //原版的存档方式
               function exportData(fi) {
                   Vars.ui.settings.exportData(fi)
               }
               cundang.button(Icon.upload, Styles.defaulti, run(() => {
                   if (Vars.ios) {
                       let file = Core.files.local("mindustry-data-export.zip");
                       try {
                           exportData(file);
                       } catch (e) {
                           Vars.showException(e)
                       }
                       Vars.platform.shareFile(file)
                   } else {
                       Vars.platform.showFileChooser(false, "zip", file => {
                           try {
                               exportData(file);
                               Vars.showInfo("@data.exported");
                           } catch (e) {
                               // e.printStackTrace()
                               // Vars.showException(e)
                           }
                       });
                   }
               })).width(40).height(40).name("ores").tooltip("@data.export");

           } else {
               //自动存档方式
               let  mod = Vars.mods.locateMod("auto-saver");
               let  dialog = Reflect.get(mod.main, "recoverDialog");
               cundang.button(Icon.upload, Styles.defaulti, run(() => {
                    dialog.show();
                   })).width(40).height(40).name("ores").tooltip("@data.export");
               //  Reflect.invoke(?????)
           }
           cundang.top().left().marginTop(110).marginLeft(40);
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
//加速条lib
function setupSpeedTable(table) {
    function getText(value) {
        let speed = Math.pow(2, Math.abs(value));

        let text = "";
        let color = null;

        if (value == 0) {
            text = "x";
        } else if (value > 0) {
            text = "{shake}[#F5F132]x";
        } else {
            text = "{wave}[#5DDC74]x";
        }

        return text + speed;
    }
    let slider = new Slider(-3, 2, 1, false);
    let label = new FLabel("");

    let effects = Reflect.get(label, "activeEffects");

    let colorSpeedUp = Color.valueOf("ffd59e");
    let colorSpeedDown = Color.valueOf("99ffff");

    slider.moved(value => {
        let speed = Math.pow(2, value);
        Time.setDeltaProvider(() => Math.min(Core.graphics.getDeltaTime() * 60 * speed, 3 * speed));

        label.restart(getText(value));
    });

    slider.setValue(0);

    table.add(label).width(52);

    table.button(Icon.refresh, Styles.clearNonei, 30, () => {
        slider.setValue(0);
    }).size(40).padLeft(6);

    table.add(slider).growX();
}
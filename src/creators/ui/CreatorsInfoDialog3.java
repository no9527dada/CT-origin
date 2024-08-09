package creators.ui;

import arc.Core;
import arc.graphics.Color;
import arc.util.Align;
import arc.util.Time;
import mindustry.Vars;
import mindustry.ui.dialogs.BaseDialog;


public class CreatorsInfoDialog3 {
    public static BaseDialog hghghg;


    public static void show() {

        String QQ群2 = "https://jq.qq.com/?_wv=1027&k=oygqLbJ5";
        String Git="https://github.com/no9527dada/CtCoreSystem/releases";
        String Steam="https://steamcommunity.com/sharedfiles/filedetails/?id=3292837678";
        hghghg = new BaseDialog("warning") {
              String toText(String str) {
                return Core.bundle.format(str);
            }
            private float leave = 8f * 60;
            private boolean canClose = false;

            {
                update(() -> {
                    leave -= Time.delta;
                    if (leave < 0 && !canClose) {
                        canClose = true;
                    }
                });
                buttons.button("", this::hide).update(b -> {
                    b.setDisabled(!canClose);
                    b.setText(canClose ? toText("close") : toText("close") + "[accent]" + Math.floor(leave / 60) + "[]s");
                }).size(140f, 50f).center();

                cont.pane((i -> {
                    i.add(Core.bundle.format("ct2ZHUYI3")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();
                    i.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3).row();
                    i.button("GitHub", (() -> {
                        if (!Core.app.openURI(Git)) {
                            Vars.ui.showErrorMessage("@linkfail");
                            Core.app.setClipboardText(Git);
                        }
                    })).size(160, 50).row();
                    i.button("Steam", (() -> {
                        if (!Core.app.openURI(Steam)) {
                            Vars.ui.showErrorMessage("@linkfail");
                            Core.app.setClipboardText(Steam);
                        }
                    })).size(160, 50).row();
                    i.button(Core.bundle.format("QQ群2"), (() -> {
                        if (!Core.app.openURI(QQ群2)) {
                            Vars.ui.showErrorMessage("@linkfail");
                            Core.app.setClipboardText(QQ群2);
                        }
                    })).update(b -> b.color.fromHsv(Time.time % 360, 1, 1)).size(250.0f, 50).row();
                }));

            }
        };
        hghghg.show();
    }
}

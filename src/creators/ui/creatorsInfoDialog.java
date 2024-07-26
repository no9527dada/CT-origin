package creators.ui;

import arc.Core;
import arc.graphics.Color;
import arc.util.Align;
import arc.util.Time;
import mindustry.ui.dialogs.BaseDialog;


public class creatorsInfoDialog {
    public static BaseDialog hghghg;


    public static void show() {
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
                    i.add(Core.bundle.format("ctBanModTxt")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();
                    i.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3).row();

                }));

            }
        };
        hghghg.show();
    }
}

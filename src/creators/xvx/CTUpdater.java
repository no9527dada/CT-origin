package creators.xvx;

import arc.*;
import arc.files.Fi;
import arc.func.Floatc;
import arc.graphics.Color;
import arc.input.KeyCode;
import arc.scene.ui.Label;
import arc.util.*;
import arc.util.io.Streams;
import arc.util.serialization.*;
import mindustry.Vars;
import mindustry.mod.Mods.*;
import mindustry.ui.Styles;
import mindustry.ui.dialogs.*;

import java.util.Objects;

import static arc.scene.actions.Actions.run;
import static creators.xvx.ImportMod.handleMod;
import static mindustry.Vars.*;

public class CTUpdater{
/*    public BaseDialog 更新弹窗(){
        return new BaseDialog("检测版本"){{
            setStyle(Styles.fullDialog);
            cont.pane(t -> {


                mod = mods.locateMod("creators");
                repo = mod.getRepo();

                Http.get(ghApi + "/repos/" + repo + "/releases/latest", res -> {
                    var json = Jval.read(res.getResultAsString());
                    String version = json.getString("tag_name")*//*.substring(1)*//*;

                    if(version.equals(mod.meta.version)) return;

                    showCustomConfirm("@miner-tools.updater.name",
                            Core.bundle.format("miner-tools.updater.info", mod.meta.version, version),
                            "@miner-tools.updater.load", "@ok", "@wangpan",() -> {
                                Reflect.invoke(ModsDialog.class, ui.mods, "githubImportJavaMod", new Object[]{repo, null}, String.class, String.class);
                            }, () -> {});
                }, e -> {});


                t.row();
                t.image().color(Color.valueOf("9370DB")).fillX().height(3).pad(3);
                t.row();
                t.button("@close", this::hide).size(!mobile ? 500 : 300 / 2, 50).scaling(Scaling.fit);
            });
            cont.row();
        }};
    }*/
    public static void showCustomConfirm(String title, String text, String yes, String no,String 网盘, Runnable confirmed, Runnable denied) {
        var https222 = "http://sd674971336.ysepan.com";
        BaseDialog dialog = new BaseDialog(title);
        ((Label)dialog.cont.add(text).width(Vars.mobile ? 400.0F : 500.0F).wrap().pad(4.0F).get()).setAlignment(1, 1);
        dialog.buttons.defaults().size(140.0F, 54.0F).pad(2.0F);
        dialog.setFillParent(false);
        dialog.buttons.button(no, () -> {
            dialog.hide();
            denied.run();
        });
        dialog.buttons.button(yes, () -> {
            dialog.hide();
            confirmed.run();
        });
        dialog.buttons.button(网盘, () -> {
           // dialog.hide();

            if (!Core.app.openURI(https222)) {
                Vars.ui.showErrorMessage("@linkfail");
                Core.app.setClipboardText(https222);
            }

        });
        KeyCode var10001 = KeyCode.escape;
        Objects.requireNonNull(dialog);
        dialog.keyDown(var10001, dialog::hide);
        var10001 = KeyCode.back;
        Objects.requireNonNull(dialog);
        dialog.keyDown(var10001, dialog::hide);
        dialog.show();
    }

    private static LoadedMod mod;
    private static String repo;
    public static void checkUpdate(){
        mod = mods.locateMod("creators");
        repo = mod.getRepo();

        Http.get(ghApi + "/repos/" + repo + "/releases/latest", res -> {
            var json = Jval.read(res.getResultAsString());
            String version = json.getString("tag_name")/*.substring(1)*/;

            if(version.equals(mod.meta.version)) return;

            showCustomConfirm("@miner-tools.updater.name",
                    Core.bundle.format("miner-tools.updater.info", mod.meta.version, version),
                    "@miner-tools.updater.load", "@close", "@wangpan",() -> {
                        Reflect.invoke(ModsDialog.class, ui.mods, "githubImportJavaMod", new Object[]{repo, null}, String.class, String.class);
                    }, () -> {});
        }, e -> {});
    }

/*
void modError(Throwable error){
    ui.loadfrag.hide();

    if(error instanceof NoSuchMethodError || Strings.getCauses(error).contains(t -> t.getMessage() != null && (t.getMessage().contains("trust anchor") || t.getMessage().contains("SSL") || t.getMessage().contains("protocol")))){
        ui.showErrorMessage("@feature.unsupported");
    }else if(error instanceof Http.HttpStatusException st){
        ui.showErrorMessage(Core.bundle.format("connectfail", Strings.capitalize(st.status.toString().toLowerCase())));
    }else{
        ui.showException(error);
    }
}
private void importFail(Throwable t){
    Core.app.post(() -> modError(t));
}
    private void githubImportJavaMod(String repo, @Nullable String release){
        //grab latest release
        Http.get(ghApi + "/repos/" + repo + "/releases/" + (release == null ? "latest" : release), res -> {
            var json = Jval.read(res.getResultAsString());
            var assets = json.get("assets").asArray();

            //prioritize dexed jar, as that's what Sonnicon's mod template outputs
            var dexedAsset = assets.find(j -> j.getString("name").startsWith("dexed") && j.getString("name").endsWith(".jar"));
            var asset = dexedAsset == null ? assets.find(j -> j.getString("name").endsWith(".jar")) : dexedAsset;

            if(asset != null){
                //grab actual file
                var url = asset.getString("browser_download_url");

                Http.get(url, result -> handleMod(repo, result), this::importFail);
            }else{
                throw new ArcRuntimeException("No JAR file found in releases. Make sure you have a valid jar file in the mod's latest Github Release.");
            }
        }, this::importFail);
    }*/

}

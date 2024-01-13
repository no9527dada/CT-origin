package creators.xvx;


import arc.Core;
import arc.files.Fi;
import arc.func.Floatc;
import arc.util.ArcRuntimeException;
import arc.util.Http;
import arc.util.Strings;
import arc.util.io.Streams;
import arc.util.serialization.Jval;

import static mindustry.Vars.*;
import static mindustry.Vars.ghApi;

//TODO 破晓在线下载模块
public class ImportMod {
    private static float modImportProgress;

    private static void importFail(Throwable t){
        Core.app.post(() -> modError(t));
    }

    private static void modError(Throwable error){
        ui.loadfrag.hide();

        if(error instanceof NoSuchMethodError || Strings.getCauses(error).contains(t -> t.getMessage() != null && (t.getMessage().contains("trust anchor") || t.getMessage().contains("SSL") || t.getMessage().contains("protocol")))){
            ui.showErrorMessage("@feature.unsupported");
        }else if(error instanceof Http.HttpStatusException){
            var st = (Http.HttpStatusException) error;
            ui.showErrorMessage(Core.bundle.format("connectfail", Strings.capitalize(st.status.toString().toLowerCase())));
        }else{
            ui.showException(error);
        }
    }

    public static void githubImportMod(String repo, boolean isJava){
        modImportProgress = 0f;
        ui.loadfrag.show("@downloading");
        ui.loadfrag.setProgress(() -> modImportProgress);

        if(isJava){
            githubImportJavaMod(repo);
        }else{
            Http.get(ghApi + "/repos/" + repo, res -> {
                var json = Jval.read(res.getResultAsString());
                String mainBranch = json.getString("default_branch");
                String language = json.getString("language", "<none>");

                if(language.equals("Java") || language.equals("Kotlin")){
                    githubImportJavaMod(repo);
                }else{
                    githubImportBranch(mainBranch, repo);
                }
            }, ImportMod::importFail);
        }
    }

    static void handleMod(String repo, Http.HttpResponse result){
        try{
            Fi file = tmpDirectory.child(repo.replace("/", "") + ".zip");
            long len = result.getContentLength();
            Floatc cons = len <= 0 ? f -> {} : p -> modImportProgress = p;

            Streams.copyProgress(result.getResultAsStream(), file.write(false), len, 4096, cons);

            var mod = mods.importMod(file);
            mod.setRepo(repo);
            file.delete();
            Core.app.post(() -> {
                try{
                    ui.loadfrag.hide();
                }catch(Throwable e){
                    ui.showException(e);
                }
            });
        }catch(Throwable e){
            modError(e);
        }
    }

    private static void githubImportJavaMod(String repo){
        Http.get(ghApi + "/repos/" + repo + "/releases/latest", res -> {
            var json = Jval.read(res.getResultAsString());
            var assets = json.get("assets").asArray();

            var dexedAsset = assets.find(j -> j.getString("name").startsWith("dexed") && j.getString("name").endsWith(".jar"));
            var asset = dexedAsset == null ? assets.find(j -> j.getString("name").endsWith(".jar")) : dexedAsset;

            if(asset != null){
                var url = asset.getString("browser_download_url");

                Http.get(url, result -> handleMod(repo, result), ImportMod::importFail);
            }else{
                throw new ArcRuntimeException("在发行版中找不到 JAR 文件. 确保你在 mod 的最新 Github 版本中有一个有效的 jar 文件.");
            }
        }, ImportMod::importFail);
    }

    private static void githubImportBranch(String branch, String repo){
        Http.get(ghApi + "/repos/" + repo + "/zipball/" + branch, loc -> {
            if(loc.getHeader("Location") != null){
                Http.get(loc.getHeader("Location"), result -> {
                    handleMod(repo, result);
                }, ImportMod::importFail);
            }else{
                handleMod(repo, loc);
            }
        }, ImportMod::importFail);
    }
}

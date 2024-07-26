package creators.world.block;

import arc.struct.Seq;
import mindustry.Vars;

//TODO 破晓附属Mod加载系统
public class CT2ModJS {
    public final static Seq<Runnable> DawnRun = new Seq<>();
    public final static Seq<String> RunName = new Seq<>();

    public static void DawnMods() {
        Run(DawnRun, RunName);
    }

    private static void Run(Seq<Runnable> Run, Seq<String> name) {
        if (name.size != 0) {
            for (var i = 0; i < name.size; i++) {
                Vars.content.setCurrentMod(Vars.mods.locateMod(name.get(i)));

                try {
                    Require(name.get(i));
                } catch (NoSuchFieldException | IllegalAccessException e) {
                    Vars.ui.showException(e);
                }

                Run.get(i).run();
            }

            Vars.content.setCurrentMod(null);

            try {
                Require(null);
            } catch (NoSuchFieldException | IllegalAccessException e) {
                Vars.ui.showException(e);
            }
        }
    }

    private static void Require(String ModName) throws NoSuchFieldException, IllegalAccessException {
        var obj = Vars.mods.getScripts();
        var field = obj.getClass().getDeclaredField("currentMod");
        field.setAccessible(true);
        if (ModName == null) {
            field.set(obj, null);
        } else {
            field.set(obj, Vars.mods.getMod(ModName));
        }
    }
}

package creators;

import arc.Core;
import arc.Events;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.TextureRegion;
import arc.scene.ui.ImageButton;
import arc.struct.ObjectMap;
import arc.struct.ObjectSet;
import arc.struct.Seq;
import arc.util.Time;
import creators.type.CTplanet;
import creators.ui.CreatorsClassification;
import creators.ui.CreatorsInfoDialog;
import creators.ui.CreatorsInfoDialog2;
import creators.ui.CreatorsInfoDialog3;
import creators.world.block.*;
import creators.xvx.XVXDawnResearchDialog.CTPausedDialog;
import mindustry.Vars;
import mindustry.game.EventType;
import mindustry.game.Team;
import mindustry.graphics.Layer;
import mindustry.mod.Mod;
import mindustry.mod.Scripts;
import mindustry.type.Planet;
import mindustry.type.UnitType;
import mindustry.ui.dialogs.BaseDialog;
import mindustry.ui.dialogs.PausedDialog;
import mindustry.world.Block;
import mindustry.world.blocks.distribution.Sorter;
import mindustry.world.blocks.sandbox.ItemSource;
import mindustry.world.blocks.sandbox.LiquidSource;
import rhino.Context;
import rhino.Scriptable;
import rhino.ScriptableObject;

import java.util.Objects;

import static CtCoreSystem.CoreSystem.compareVersions.compareVersions;
import static arc.Core.camera;
import static mindustry.Vars.*;

public class Creators extends Mod {


    static String MinVersion = "1.05";

    public Creators() {
        //地图禁用建筑隐藏
        Events.on(EventType.WorldLoadEvent.class, event -> {
            Vars.state.rules.hideBannedBlocks = false;//现在是没启用中
        });
    }

    ;

    public void loadContent() {
        if (Vars.mods.locateMod("coreunloader-mod") == null) {
            if (Vars.mods.locateMod("ctcoresystem") != null) {
                if (compareVersions(Vars.mods.getMod("ctcoresystem").meta.version, MinVersion) >= 0) {
                    //载入物品     //载入液体
                    CTplanet.load();
                    CTItem.load();
                    CTUnitTypes.load();
                    CTBlocks.load();
                    CTConveyor.load();
                    CTBullet.load();
                    MieShistatu.load();


                    new CreatorsClassification();
                    Scripts scripts = Vars.mods.getScripts();
                    Scriptable scope = scripts.scope;
                    try {
                        Object obj = Context.javaToJS(new CreatorsClassification(), scope);
                        ScriptableObject.putProperty(scope, "CreatorsClassification", obj);
                    } catch (Exception var5) {
                        Vars.ui.showException(var5);
                    }


                }
            }

        }
        CT2ModJS.DawnMods();
    }


    public static boolean CTBlockBool = true;//原版蓝图系统解锁
    public static ObjectMap<Block, Block> CTBlock = new ObjectMap<>();

    public static void setCTSchematic() {
        if ((Vars.mods.locateMod("ctcoresystem") != null)) {
            Events.run(EventType.Trigger.update, () -> {
                if (CTBlockBool && Vars.control.input.selectPlans.size != 0) {
                    for (var ct : Vars.control.input.selectPlans) {
                        if (ct.block == null) {
                            continue;
                        }

                        if (CTBlock.containsKey(ct.block)) {
                            ct.set(ct.x, ct.y, ct.rotation, CTBlock.get(ct.block));
                        }
                    }
                }
            });
        }
    }

    public static void setPlanet(Planet planet, String[] names) {

        planet.ruleSetter = r -> {
            r.teams.get(Team.sharded).unitDamageMultiplier = 0.67f;
            var B = new ObjectSet<Block>();
            for (var b : content.blocks()) {
                if (b.minfo.mod == null) {
                    B.add(b);
                    continue;
                }
                boolean yes = true;
                for (var name : names) {
                    if (Objects.equals(b.minfo.mod.meta.name, name) || Objects.equals(b.minfo.mod.name, name)) {
                        yes = false;
                        break;
                    }
                }
                if (yes) {
                    B.add(b);
                }
            }
            r.bannedBlocks.addAll(B);
            var U = new ObjectSet<UnitType>();
            for (var u : content.units()) {
                if (u.minfo.mod == null) {
                    U.add(u);
                    continue;
                }
                boolean yes = true;
                for (var name : names) {
                    if (Objects.equals(u.minfo.mod.meta.name, name) || Objects.equals(u.minfo.mod.name, name)) {
                        yes = false;
                        break;
                    }
                }
                if (yes) {
                    U.add(u);
                }
            }
            r.bannedUnits.addAll(U);
        };
    }


    public final static Seq<Runnable> BlackListRun = new Seq<>();

    public Seq<String> BaiMingDan = new Seq<>();

    @Override
    public void init() {
        if (Vars.mods.locateMod("coreunloader-mod") != null) {
            CreatorsInfoDialog.show();
        } else {
            if (Vars.mods.locateMod("ctcoresystem") == null) {
                CreatorsInfoDialog2.show();
            } else if (compareVersions(Vars.mods.getMod("ctcoresystem").meta.version, MinVersion) < 0) {//检测低版本
                CreatorsInfoDialog3.show();
            }
        }
        //new WaveSpawner();//刷怪圈显示  暂时没用
        //  new CTUnitSpawnAbility();//单位生产单位时移除动画效果
        //new CTPlacementFragment();
        //增加敌人寻路显示 //显示怪物路径
        //檢測更新
        //  Events.on(EventType.ClientLoadEvent.class, e -> Timer.schedule(CTUpdater::checkUpdate, 4));

        //战役区块资源统计信息
        /*   可以用，不过暂时不用
        CTPlanetDialog dialog3 = new CTPlanetDialog();
        PlanetDialog planet = Vars.ui.planet;
        Vars.ui.paused.shown(() -> {
            dialog3.show();
            Objects.requireNonNull(planet);
            Time.runTask(5.0F, planet::hide);
        });
*/

        //esc键显示：
        CTPausedDialog dialog2 = new CTPausedDialog();
        PausedDialog paused = Vars.ui.paused;
        Vars.ui.paused.shown(() -> {
            dialog2.show();
            Objects.requireNonNull(paused);
            Time.runTask(1.0F, paused::hide);
        });



   /*     //难度调整难度：
        Events.on(EventType.ClientLoadEvent.class, e -> {
            ui.settings.game.sliderPref(
                    "游戏难度", 3, 0, 5, 1, i -> Core.bundle.format("Difficulty-" + i)
            );
            Core.settings.get("游戏难度",true);
            new WorldDifficulty().set();
        });*/

        //区块名显示
/*        CT2PlanetDialog planet2 = new CT2PlanetDialog();
        PlanetDialog planet = Vars.ui.planet;
        planet.shown(() -> {
            planet2.show();
            Objects.requireNonNull(planet);
            Time.runTask(1.0F, planet::hide);
        });*/

        Events.on(EventType.ClientLoadEvent.class, e -> {
            if ((Vars.mods.locateMod("ctcoresystem") != null)) {
                CTBlocks.SETCT();
                setCTSchematic();


                for (var a : Vars.mods.list()) {
                    if (Objects.equals(a.meta.name, "creators")) {
                        if (!BaiMingDan.contains(a.meta.name)) {
                            BaiMingDan.add(a.meta.name);
                        }
                    }

                    if (a.meta.dependencies.size != 0) {
                        for (var d : a.meta.dependencies) {
                            if (Objects.equals(d, "creators")) {
                                if (!BaiMingDan.contains(a.meta.name)) {
                                    BaiMingDan.add(a.meta.name);
                                }
                            }
                        }
                    }

                    if (a.meta.hidden) {
                        if (!BaiMingDan.contains(a.meta.name)) {
                            BaiMingDan.add(a.meta.name);
                        }
                    }
                }

                boolean yes = false;

                for (var a : Vars.mods.list()) {
                    if (!BaiMingDan.contains(a.meta.name)) {
                        yes = true;
                    }
                }

                if (yes) {
                    for (var i = 0; i < BlackListRun.size; i++) {
                        BlackListRun.get(i).run();
                    }
                }
            }
        });

    }


    public static ImageButton CreatorsIcon(String IconName, ImageButton.ImageButtonStyle imageButtonStyle, BaseDialog dialog) {
        TextureRegion A = Core.atlas.find("creators-" + IconName);

        ImageButton buttonA = new ImageButton(A, imageButtonStyle);
        buttonA.clicked(dialog::show);
        return buttonA;
    }


}

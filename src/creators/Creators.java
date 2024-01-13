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
import arc.util.Timer;
import creators.type.CT2PlanetDialog;
import creators.type.CTUnitSpawnAbility;
import creators.type.CTplanet;
import creators.type.abomb4.DsShaders;
import creators.ui.CreatorsClassification;
import creators.world.block.*;
import creators.xvx.CTUpdater;
import creators.xvx.WorldDifficulty;
import creators.xvx.XVXDawnResearchDialog.CTPausedDialog;
import creators.xvx.XVXDawnResearchDialog.CTResearchDialog;
import creators.xvx.XVXSource;
import mindustry.Vars;
import mindustry.game.EventType;
import mindustry.game.Team;
import mindustry.graphics.Layer;
import mindustry.mod.Mod;
import mindustry.mod.Scripts;
import mindustry.type.Category;
import mindustry.type.ItemStack;
import mindustry.type.Planet;
import mindustry.type.UnitType;
import mindustry.ui.dialogs.BaseDialog;
import mindustry.ui.dialogs.PausedDialog;
import mindustry.ui.dialogs.PlanetDialog;
import mindustry.ui.dialogs.ResearchDialog;
import mindustry.world.Block;
import mindustry.world.blocks.distribution.Sorter;
import mindustry.world.blocks.sandbox.ItemSource;
import mindustry.world.blocks.sandbox.LiquidSource;
import mindustry.world.meta.BuildVisibility;
import rhino.Context;
import rhino.Scriptable;
import rhino.ScriptableObject;

import java.util.Objects;

import static arc.Core.camera;
import static mindustry.Vars.*;

public class Creators extends Mod {




    public Creators() {

        //地图禁用建筑隐藏
        Events.on(EventType.WorldLoadEvent.class, event -> {
            Vars.state.rules.hideBannedBlocks = false;//现在是没启用中
        }



            );
   //

    };
    public void loadContent(){
        //载入物品     //载入液体
        CTplanet.load();
        CTItem.load();
        CTUnitTypes.load();
        CTBlocks.load();
        CTConveyor.load();
        CTBullet.load();
        MieShistatu.load();
        DsShaders.load();//电力节点力场的动画效果
        new XVXSource("Automatic-adaptation-source") {
            {
                this.requirements(Category.distribution, BuildVisibility.sandboxOnly, ItemStack.with(new Object[0]));
                this.alwaysUnlocked = true;
            }
        };

        new CreatorsClassification();
        Scripts scripts = Vars.mods.getScripts();
        Scriptable scope = scripts.scope;
        try {
            Object obj = Context.javaToJS(new CreatorsClassification(), scope);
            ScriptableObject.putProperty(scope, "CreatorsClassification", obj);
        } catch (Exception var5) {
            Vars.ui.showException(var5);
        }

        CreatorsModJS.DawnMods();

    }



    public static boolean CTBlockBool = true;//原版蓝图系统解锁
    public static ObjectMap<Block, Block> CTBlock = new ObjectMap<>();
    public static void setCTSchematic() {
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

    public static void setPlanet(Planet planet, String[] names) {

        planet.ruleSetter = r -> {
            r.teams.get(Team.sharded).unitDamageMultiplier =  0.67f;
            var B = new ObjectSet<Block>();
            for (var b : content.blocks()) {
                if (b.minfo.mod == null) {
                    B.add(b);
                    continue;
                }
                boolean yes = true;
                for(var name : names){
                    if (Objects.equals(b.minfo.mod.meta.name, name) || Objects.equals(b.minfo.mod.name, name)) {
                        yes = false;
                        break;
                    }
                }
                if(yes){
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
                for(var name : names){
                    if (Objects.equals(u.minfo.mod.meta.name, name) || Objects.equals(u.minfo.mod.name, name)) {
                        yes = false;
                        break;
                    }
                }
                if(yes){
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
        //new WaveSpawner();//刷怪圈显示  暂时没用
        new CTUnitSpawnAbility();//单位生产单位时移除动画效果
        //new CTPlacementFragment();

        //檢測更新
        Events.on(EventType.ClientLoadEvent.class, e -> Timer.schedule(CTUpdater::checkUpdate, 4));

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

        //new CT波次();
        //esc键显示：
        CTPausedDialog dialog2 = new CTPausedDialog();
        PausedDialog paused = Vars.ui.paused;
        Vars.ui.paused.shown(() -> {
            dialog2.show();
            Objects.requireNonNull(paused);
            Time.runTask(1.0F, paused::hide);
        });


        //科技树全线：
        CTResearchDialog dialog = new CTResearchDialog();
        ResearchDialog research = Vars.ui.research;
        research.shown(() -> {
            dialog.show();
            Objects.requireNonNull(research);
            Time.runTask(1.0F, research::hide);
        });
        //难度调整难度：
        Events.on(EventType.ClientLoadEvent.class, e -> {
            ui.settings.game.sliderPref(
                    "游戏难度", 3, 0, 5, 1, i -> Core.bundle.format("Difficulty-" + i)
            );
            Core.settings.get("游戏难度",true);
            new WorldDifficulty().set();
        });

        //区块名显示
        CT2PlanetDialog planet2 = new CT2PlanetDialog();
        PlanetDialog planet = Vars.ui.planet;
        planet.shown(() -> {
            planet2.show();
            Objects.requireNonNull(planet);
            Time.runTask(1.0F, planet::hide);
        });
        //方块显示图标
        Events.on(EventType.ClientLoadEvent.class, e -> 选择方块显示图标());
        Events.on(EventType.ClientLoadEvent.class, e -> {
            CTBlocks.SETCT();
            setCTSchematic();


            for (var a : Vars.mods.list()) {
                if(Objects.equals(a.meta.name, "creators")){
                    if(!BaiMingDan.contains(a.meta.name)) {
                        BaiMingDan.add(a.meta.name);
                    }
                }

                if(a.meta.dependencies.size != 0){
                    for(var d : a.meta.dependencies){
                        if(Objects.equals(d, "creators")){
                            if(!BaiMingDan.contains(a.meta.name)) {
                                BaiMingDan.add(a.meta.name);
                            }
                        }
                    }
                }

                if(a.meta.hidden){
                    if(!BaiMingDan.contains(a.meta.name)) {
                        BaiMingDan.add(a.meta.name);
                    }
                }
            }

            boolean yes = false;

            for (var a : Vars.mods.list()) {
                if(!BaiMingDan.contains(a.meta.name)){
                    yes = true;
                }
            }

            if (yes) {
                for (var i = 0; i < BlackListRun.size; i++) {
                    BlackListRun.get(i).run();
                }
            }

        });

    }

    //选择方块显示图标
    public void 选择方块显示图标(){
        Events.run(EventType.Trigger.draw, () -> {
            if(Vars.ui != null) {
                indexer.eachBlock(null, camera.position.x, camera.position.y,  (30 * tilesize), b -> true, b -> {
                    if(b instanceof LiquidSource.LiquidSourceBuild) {
                        var source = (LiquidSource.LiquidSourceBuild) b;
                        if(source.config() != null) {
                            Draw.z(Layer.block + 1);
                            Draw.rect(source.config().fullIcon, b.x, b.y, 3, 3);
                        }
                    }
                    if(b instanceof ItemSource.ItemSourceBuild) {
                        var source = (ItemSource.ItemSourceBuild) b;
                        if(source.config() != null) {
                            Draw.z(Layer.block + 1);
                            Draw.rect(source.config().fullIcon, b.x, b.y, 3, 3);
                        }
                    }
                    if(b instanceof Sorter.SorterBuild) {
                        var sorter = (Sorter.SorterBuild) b;
                        if(sorter.config() != null) {
                            Draw.z(Layer.block + 1);
                            Draw.rect(sorter.config().fullIcon, b.x, b.y, 3, 3);
                        }
                    }
                });
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

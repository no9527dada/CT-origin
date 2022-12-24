package creators;

import arc.Core;
import arc.Events;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.TextureRegion;
import arc.math.Mathf;
import arc.scene.ui.ImageButton;
import arc.struct.ObjectMap;
import arc.struct.ObjectSet;
import arc.struct.Seq;
import arc.util.Tmp;

import creators.ui.CreatorsClassification;
import creators.world.block.*;
import creators.xvx.XVXSource;
import mindustry.Vars;
import mindustry.game.EventType;
import mindustry.graphics.Layer;
import mindustry.mod.Mod;
import mindustry.mod.Scripts;
import mindustry.type.*;
import mindustry.type.Planet;
import mindustry.ui.dialogs.BaseDialog;
import mindustry.world.Block;
import mindustry.world.blocks.distribution.Sorter;
import mindustry.world.blocks.sandbox.ItemSource;
import mindustry.world.blocks.sandbox.LiquidSource;
import rhino.Context;
import rhino.Scriptable;
import rhino.ScriptableObject;
import java.util.Objects;

import mindustry.world.meta.BuildVisibility;
import static arc.Core.camera;
import static mindustry.Vars.*;
import static mindustry.Vars.tilesize;
import static mindustry.Vars.indexer;

import creators.MyPlanet;
import creators.MySector;
public class Creators extends Mod {




    public Creators() {
        //地图禁用建筑隐藏
        Events.on(EventType.WorldLoadEvent.class, event -> {
            Vars.state.rules.hideBannedBlocks = false;
        }
    );
   //

    };

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

    public void loadContent(){
        //载入物品     //载入液体
        CTItem.load();
        CTUnitTypes.load();
        CTBlocks.load();


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

    public final static Seq<Runnable> BlackListRun = new Seq<>();

    public Seq<String> BaiMingDan = new Seq<>();

    @Override
    public void init() {

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


/*     public void ini() {
        Events.on(EventType.ClientLoadEvent.class, e -> {
            ui.settings.game.sliderPref("难度调整难度", 3, 1, 5, 1, i -> Core.bundle.format("Difficulty-" + i));
            new WorldDifficulty().set();
        });
    } */

    /*public Seq<LiquidSource.LiquidSourceBuild> liquidSource = new Seq<>();
    public Seq<ItemSource.ItemSourceBuild> itemSource = new Seq<>();
    public Seq<Sorter.SorterBuild> sorter = new Seq<>();
    public float timeMax = 0;
    public void 选择方块显示图标() {
        if (Vars.ui == null)return;
        Events.on(EventType.WorldLoadEvent.class, e -> {
            liquidSource.clear();
            itemSource.clear();
            sorter.clear();
        });
        Events.run(EventType.Trigger.update, () -> {
            if (timeMax < 300f) {
                indexer.eachBlock(
                        null,
                        camera.position.x,
                        camera.position.y,
                        50 * tilesize,
                        b -> b instanceof LiquidSource.LiquidSourceBuild ||
                                b instanceof ItemSource.ItemSourceBuild ||
                                b instanceof Sorter.SorterBuild,
                        b -> {
                            if(b instanceof LiquidSource.LiquidSourceBuild){
                                var bb = (LiquidSource.LiquidSourceBuild)b;
                                if(!liquidSource.contains(bb)){
                                    liquidSource.add(bb);
                                }
                            }
                            if(b instanceof ItemSource.ItemSourceBuild){
                                var bb = (ItemSource.ItemSourceBuild)b;
                                if(!itemSource.contains(bb)){
                                    itemSource.add(bb);
                                }
                            }
                            if(b instanceof Sorter.SorterBuild){
                                var bb = (Sorter.SorterBuild)b;
                                if(!sorter.contains(bb)){
                                    sorter.add(bb);
                                }
                            }
                        });
                timeMax = 0;
            } else {
                timeMax += Time.delta;
            }
        });
        Events.run(EventType.Trigger.draw, () -> {
            for(var source : liquidSource){
                if (source.config() != null) {
                    Draw.z(Layer.block + 1);
                    Draw.rect(source.config().fullIcon, source.x, source.y, 3, 3);
                }
            }
            for(var source : itemSource){
                if (source.config() != null) {
                    Draw.z(Layer.block + 1);
                    Draw.rect(source.config().fullIcon, source.x, source.y, 3, 3);
                }
            }
            for(var source : sorter){
                if (source.config() != null) {
                    Draw.z(Layer.block + 1);
                    Draw.rect(source.config().fullIcon, source.x, source.y, 3, 3);
                }
            };
        });
    }*/

    public static ImageButton CreatorsIcon(String IconName, ImageButton.ImageButtonStyle imageButtonStyle, BaseDialog dialog) {
        TextureRegion A = Core.atlas.find("creators-" + IconName);

        ImageButton buttonA = new ImageButton(A, imageButtonStyle);
        buttonA.clicked(dialog::show);
        return buttonA;
    }




}

package creators.ui;

import arc.Core;
import arc.Events;
import arc.func.Func;
import arc.graphics.Color;
import arc.input.KeyCode;
import arc.scene.Group;
import arc.scene.event.Touchable;
import arc.scene.style.TextureRegionDrawable;
import arc.scene.ui.ButtonGroup;
import arc.scene.ui.ScrollPane;
import arc.scene.ui.layout.Table;
import arc.struct.ObjectFloatMap;
import arc.struct.ObjectMap;
import arc.struct.Seq;
import creators.Fragment;
import mindustry.Vars;
import mindustry.ctype.UnlockableContent;
import mindustry.gen.Tex;
import mindustry.graphics.Pal;
import mindustry.ui.Fonts;
import mindustry.world.Block;

import java.util.ArrayList;

import static creators.draw.CreatorsStyles.*;
import static mindustry.game.EventType.UnlockEvent;
import static mindustry.game.EventType.WorldLoadEvent;
//分类栏ui
public class CreatorsClassification {
    public static TextureRegionDrawable clearIcon = new TextureRegionDrawable(Core.atlas.find("clear"));

    public boolean containsContent (UnlockableContent content) {
        var found = false;
        var cs = fragConfig.categories;
        loop: for (var i = 0; i < cs.size; i++) {
            var category = cs.get(i);
            for (var j = 0; j < category.blocks.size; j++) {
                var block = category.blocks.get(j);
                if (content == block) {
                    found = true;
                    break loop;
                }
            }
        }
        return found;
    }

    public FragConfig fragConfig;
    public Fragment leftFrag(FragConfig fragConfig, float iconWidth, float padding, float MB, float MR, String nameA, String nameB) {
        TextureRegionDrawable IconA,IconB;

        var defA = Core.atlas.find(nameA);
        IconA = Core.atlas.isFound(defA) ? new TextureRegionDrawable(defA) : clearIcon;
        var defB = Core.atlas.find(nameB);
        IconB = Core.atlas.isFound(defB) ? new TextureRegionDrawable(defB) : clearIcon;

        this.fragConfig = fragConfig;

        final int[] currentCategory = {0};
        final Block[] menuHoverBlock = new Block[1];
        var selectedBlocks = new ObjectMap<Integer, Block>();
        var scrollPositions = new ObjectFloatMap<>();
        Table[] blockTable = {null};
        ScrollPane[] blockPane = {null};
        Table[] toggler = {null};

        final boolean[] hide = {true};

        ArrayList<Fragment> fragment = new ArrayList<>();
        Runnable rebuild = () -> {
            if (fragment.size() > 0) {
                currentCategory[0] = 0;
                var index = toggler[0].getZIndex();
                var group = toggler[0].parent;
                toggler[0].remove();
                fragment.get(0).build(group);
                toggler[0].setZIndex(index);
            }
        };
        Events.on(WorldLoadEvent.class, event -> Core.app.post(rebuild));
        Events.on(UnlockEvent.class, event -> {
            if (containsContent(event.content)) {
                rebuild.run();
            }
        });

        Func<Block, Boolean> unlocked = UnlockableContent::unlockedNow;
        Func<Integer, Block> getSelectedBlock = cat -> selectedBlocks.get(cat, () -> {
            var category = fragConfig.categories.get(cat);
            return category.blocks.find(unlocked::get);
        });
        fragment.add(new Fragment() {
            public void build(Group parent) {
                parent.fill(full -> {
                    toggler[0] = full;
                    full.bottom().right().visibility = (() -> Vars.ui.hudfrag.shown);
                    full.marginBottom(MB);
                    full.marginRight(MR);
                    if (hide[0]) {
                        full.button(IconA, () -> {
                            hide[0] = false;
                            rebuild.run();
                        }).width(50).height(50);
                    } else {
                        full.button(IconB, () -> {
                            hide[0] = true;
                            rebuild.run();
                        }).width(50).height(250);
                        full.table(frame -> {
                            Runnable rebuildCategory = () -> {

                                blockTable[0].clear();

                                var index = 0;
                                var group = new ButtonGroup<>();
                                group.setMinCheckCount(0);

                                var category = fragConfig.categories.get(currentCategory[0]);
                                for (var j = 0; j < category.blocks.size; j++) {
                                    final var block = category.blocks.get(j);
                                    if (!unlocked.get(block)) {continue;}
                                    if (index++ % fragConfig.columns == 0) {
                                        blockTable[0].row();
                                    }

                                    final var button =
                                        blockTable[0].button(new TextureRegionDrawable(block.uiIcon), clearTogglei, (() -> {
                                            if (unlocked.get(block)) {
                                                if (Core.input.keyDown(KeyCode.shiftLeft) && Fonts.getUnicode(block.name) != 0) {
                                                    Core.app.setClipboardText(Fonts.getUnicode(block.name) + "");
                                                    Vars.ui.showInfoFade("@copied");
                                                } else {
                                                    Vars.control.input.block = Vars.control.input.block == block ? null : block;
                                                    selectedBlocks.put(currentCategory[0], Vars.control.input.block);
                                                    hide[0] = true;
                                                }
                                            }
                                        })).size(iconWidth).group(group).name("block-" + block.name).get();
                                    button.resizeImage(32);

                                    button.update(() -> {
                                        var core = Vars.player.core();
                                        var color = (Vars.state.rules.infiniteResources
                                            || (core != null && (core.items.has(block.requirements, Vars.state.rules.buildCostMultiplier) || Vars.state.rules.infiniteResources)))
                                            && Vars.player.isBuilder() ? Color.white : Color.darkGray;

                                        button.forEach(elem -> elem.setColor(color));
                                        button.setChecked(Vars.control.input.block == block);

                                        if (!block.isPlaceable()) {
                                            button.forEach(elem -> elem.setColor(Color.darkGray));
                                        }

                                        button.hovered((() -> menuHoverBlock[0] = block));
                                        button.exited((() -> {
                                            if (menuHoverBlock[0] == block) {
                                                menuHoverBlock[0] = null;
                                            }
                                        }));
                                    });
                                }

                                if (index < fragConfig.columns) {
                                    for (var k = 0; k < fragConfig.columns - index; k++) {
                                        blockTable[0].add().size(iconWidth);
                                    }
                                }
                                blockTable[0].act(0);
                                blockPane[0].setScrollYForce(scrollPositions.get(currentCategory[0], 0));
                                Core.app.post(() -> {
                                    blockPane[0].setScrollYForce(scrollPositions.get(currentCategory[0], 0));
                                    blockPane[0].act(0);
                                    blockPane[0].layout();
                                });

                            };

                            frame.image().color(Pal.spore).colspan(fragConfig.columns).height(padding).growX();
                            frame.row();
                            frame.table(Tex.pane2, blocksSelect -> {
                                blocksSelect.margin(padding).marginTop(0);
                                blockPane[0] = blocksSelect.pane(blocks -> blockTable[0] = blocks).height(iconWidth * fragConfig.rows + padding)
                                    .update(pane -> {
                                        if (pane.hasScroll()) {
                                            var result = Core.scene.hit(Core.input.mouseX(), Core.input.mouseY(), true);
                                            if (result == null || !result.isDescendantOf(pane)) {
                                                Core.scene.setScrollFocus(null);
                                            }
                                        }
                                    }).grow().get();
                                blockPane[0].setStyle(smallPane);
                                blocksSelect.row();
                                blocksSelect.table(table -> {

                                    table.image().color(Pal.spore).height(padding).colspan(fragConfig.columns).growX();
                                    table.row();
                                    table.left().margin(0).defaults().size(iconWidth).left();

                                    var group = new ButtonGroup<>();
                                    var index = 0;
                                    var cs = fragConfig.categories;
                                    for (var i = 0; i < cs.size; i++) {
                                        if (index++ % fragConfig.columns == 0) {
                                            table.row();
                                        }
                                        var category = cs.get(i);
                                        final int j = i;
                                        table.button(category.icon(), clearToggleTransi, () -> {
                                            currentCategory[0] = j;
                                            if (Vars.control.input.block != null) {
                                                Vars.control.input.block = getSelectedBlock.get(currentCategory[0]);
                                            }
                                            rebuildCategory.run();
                                        }).group(group).update(v -> v.setChecked(currentCategory[0] == j)).name("category-" + j);
                                    }
                                    if (index < fragConfig.columns) {
                                        for (var k = 0; k < fragConfig.columns - index; k++) {
                                            table.add().size(iconWidth);
                                        }
                                    }
                                }).name("inputTable").growX();
                            }).fillY().bottom().touchable(Touchable.enabled);

                            rebuildCategory.run();
                        });
                    }
                });
            }
        });

        return fragment.get(0);
    }

    public FragConfig FragConfigJS(int rows, int columns, CategoryObj ...categories){
        return new FragConfig(rows, columns, categories);
    }

    public static class FragConfig {
        //行
        public int rows;
        // 列
        public int columns;
        public Seq<CategoryObj> categories;
        public FragConfig(int rows, int columns, CategoryObj ...categories){
            this.rows = rows;
            this.columns = columns;
            this.categories =new Seq<>(categories);
        }
    }

    public CategoryObj CategoryObjJS(String name, Block ...blocks){
        return new CategoryObj(name, blocks);
    }

    public static class CategoryObj {
        private final TextureRegionDrawable icon;
        Seq<Block> blocks = new Seq<>();
        public CategoryObj(String name, Block ...blocks){
            var def = Core.atlas.find(name);
            this.icon = Core.atlas.isFound(def) ? new TextureRegionDrawable(def) : clearIcon;;
            this.blocks.addAll(blocks);
        }

        public TextureRegionDrawable icon(){
            return icon;
        }
    }
}

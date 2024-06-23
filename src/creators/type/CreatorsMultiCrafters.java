package creators.type;
/*选择多合成,无输出贴图显示*/
import arc.Core;
import arc.func.Prov;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.TextureRegion;
import arc.math.Mathf;
import arc.scene.style.TextureRegionDrawable;
import arc.scene.ui.Button;
import arc.scene.ui.ButtonGroup;
import arc.scene.ui.ImageButton;
import arc.scene.ui.layout.Table;
import arc.struct.ObjectSet;
import arc.util.Strings;
import arc.util.io.Reads;
import arc.util.io.Writes;
import creators.draw.CreatorsNumberValue;
import mindustry.content.Fx;
import mindustry.ctype.UnlockableContent;
import mindustry.entities.Effect;
import mindustry.gen.Building;
import mindustry.gen.Icon;
import mindustry.gen.Tex;
import mindustry.graphics.Pal;
import mindustry.type.Item;
import mindustry.type.ItemStack;
import mindustry.type.Liquid;
import mindustry.type.LiquidStack;
import mindustry.ui.*;
import mindustry.world.blocks.production.GenericCrafter;
import mindustry.world.consumers.ConsumePower;
import mindustry.world.draw.DrawBlock;
import mindustry.world.draw.DrawDefault;
import mindustry.world.draw.DrawMulti;
import mindustry.world.meta.Stat;
import mindustry.world.meta.StatUnit;

import java.util.Objects;

import static arc.Core.bundle;
import static arc.Core.scene;
import static creators.draw.CreatorsStyles.clearToggleTransi;
import static mindustry.Vars.headless;

public class CreatorsMultiCrafters extends GenericCrafter {
    public int RecipeShowIS = 0;

    public final CreatorsRecipe[] recs;
    private int index = 0;

    public Color TableColor = Color.white;

    public boolean[] ItemLiquid = null;

    public final ObjectSet<Item> inputItemSet = new ObjectSet<>();
    public final ObjectSet<Liquid> inputLiquidSet = new ObjectSet<>(), liquidSet = new ObjectSet<>();

    private boolean powerBarI, powerBarO;
    private Button.ButtonStyle infoStyle;

    public Effect craftEffect = Fx.none;
    public Effect updateEffect = Fx.none;
    public float updateEffectChance = 0.04f;

    public CreatorsMultiCrafters(String name, CreatorsRecipe[] recs) {
        super(name);
        this.recs = recs;

        saveConfig = true;
        configurable = true;

        config(Integer.class, (ChooseMultiCrafterBuild b, Integer i) ->{
            b.IDD = i;
        });

        this.buildType = ChooseMultiCrafterBuild::new;

    }

    public CreatorsMultiCrafters(String name, int recLen){
        this(name, new CreatorsRecipe[recLen]);
    }

    @Override
    public void setBars() {
        super.setBars();
        /*removeBar("power");

        addBar("power", (ChooseMultiCrafter.ChooseMultiCrafterBuild entity) ->
                new Bar(() -> bundle.format("bar.powerA", Strings.fixed(entity.block.consPower.requestedPower(entity) * 60 * entity.timeScale(), 1)),
                        () -> Pal.powerBar,
                        () -> entity.power.status)
        );*/

        removeBar("liquid");
        removeBar("items");
        if (!powerBarI && hasPower) removeBar("power");
        if (powerBarO) {
            addBar("poweroutput", (CreatorsMultiCrafter.ChooseMultiCrafterBuild entity) ->
                    new Bar(() -> bundle.format("bar.poweroutputB", Strings.fixed(entity.getPowerProduction() * 60 * entity.timeScale(), 1)),
                            () -> Pal.powerBar,
                            () -> entity.power.status)
            );
        }
        if (!liquidSet.isEmpty()) {
            liquidSet.each(k -> addBar(k.localizedName, entity -> new Bar(() -> k.localizedName + "[" + entity.liquids.get(k) + "]", k::barColor, () -> entity.liquids.get(k) / liquidCapacity)));
        }

        addBar("配方条", (ChooseMultiCrafterBuild e) ->
                new Bar(
                        () -> bundle.format("bar.warmup", Math.floor(e.进度条(e.IDD) * 100.0f) + " %"),
                        () -> Pal.powerBar,
                        () -> e.进度条(e.IDD)
                )
        );
    }
    @Override
    public void setStats() {
        super.setStats();

        stats.remove(Stat.powerUse);
        stats.remove(Stat.productionTime);

        stats.add(Stat.input, table -> {
            table.row();
            int recLen = recs.length;
            for (int i = 0; i < recLen; i++) {
                CreatorsRecipe rec = recs[i];
                ItemStack[] inputItems = rec.input.items;
                ItemStack[] outputItems = rec.output.items;
                LiquidStack[] inputLiquids = rec.input.liquids;
                LiquidStack[] outputLiquids = rec.output.liquids;
                float inputPower = rec.input.power;
                float outputPower = rec.output.power;
                int ii = i;
                table.table(infoStyle.up, part -> {
                    part.add("[accent]" + Stat.input.localized()).expandX().left().row();
                    part.table(row -> {
                        for (int l = 0, len = inputItems.length; l < len; l++)
                            row.add(new ItemDisplay(inputItems[l].item, inputItems[l].amount, true)).padRight(5f);
                    }).left().row();
                    part.table(row -> {
                        for (int l = 0, len = inputLiquids.length; l < len; l++)
                            row.add(new LiquidDisplay(inputLiquids[l].liquid, inputLiquids[l].amount, false));
                    }).left().row();
                    if (inputPower > 0f) {
                        part.table(row -> {
                            row.add("[lightgray]" + Stat.powerUse.localized() + ":[]").padRight(4f);
                            (new CreatorsNumberValue(inputPower * 60f, StatUnit.powerSecond)).display(row);
                        }).left().row();
                    }
                    part.add("[accent]" + Stat.output.localized()).left().row();
                    part.table(row -> {
                        for (int jj = 0, len = outputItems.length; jj < len; jj++)
                            row.add(new ItemDisplay(outputItems[jj].item, outputItems[jj].amount, true)).padRight(5f);
                    }).left().row();
                    part.table(row -> {
                        for (int jj = 0, len = outputLiquids.length; jj < len; jj++)
                            row.add(new LiquidDisplay(outputLiquids[jj].liquid, outputLiquids[jj].amount, false));
                    }).left().row();
                    if (outputPower > 0f) {
                        part.table(row -> {
                            row.add("[lightgray]" + Stat.basePowerGeneration.localized() + ":[]").padRight(4f);
                            (new CreatorsNumberValue(outputPower * 60f, StatUnit.powerSecond)).display(row);
                        }).left().row();
                    }
                    part.table(row -> {
                        row.add("[lightgray]" + Stat.productionTime.localized() + ":[]").padRight(4f);
                        (new CreatorsNumberValue(rec.craftTime / 60f, StatUnit.seconds)).display(row);
                    }).left().row();
                }).color(TableColor).left().growX();
                table.add().size(18f).row();
            }
        });
    }

    @Override
    public void init(){
        for (CreatorsRecipe rec : recs) {
            if (rec.input.power > 0f) {
                powerBarI = true;
            }
            if (rec.output.power > 0f) {
                powerBarO = true;
            }

            if (rec.input.items.length > 0) {
                hasItems = true;
                for (int i = 0; i < rec.input.items.length; i++) {
                    inputItemSet.add(rec.input.items[i].item);
                }
            }
            if (rec.input.liquids.length > 0) {
                hasLiquids = true;
                for (int i = 0; i < rec.input.liquids.length; i++) {
                    liquidSet.add(rec.input.liquids[i].liquid);
                    inputLiquidSet.add(rec.input.liquids[i].liquid);
                }
            }
            if (rec.output.items.length > 0) {
                hasItems = true;
            }
            if (rec.output.liquids.length > 0) {
                hasLiquids = true;
                for (int i = 0; i < rec.output.liquids.length; i++) {
                    liquidSet.add(rec.output.liquids[i].liquid);
                }
            }
        }

        hasPower = powerBarI || powerBarO;
        if(powerBarI) consPower = new MultiConsumePower();
        consumesPower = powerBarI;
        outputsPower = powerBarO;

        hasLiquids = liquidSet.size != 0;

        super.init();

        if(!headless) infoStyle = scene.getStyle(Button.ButtonStyle.class);
    }

    public void addRecipe(CreatorsRecipe.InputContents input, CreatorsRecipe.OutputContents output, float craftTime){
        recs[index++] = new CreatorsRecipe(input, output, craftTime);
    }

    public class MultiConsumePower extends ConsumePower {
        public float requestedPower(Building entity){
            if(entity instanceof ChooseMultiCrafterBuild) {
                var build = (ChooseMultiCrafterBuild) entity;
                if (build.IDD != -1) {
                    if (recs[build.IDD].input.power > 0) {
                        if (build.生产状态[build.IDD]) {
                            return recs[build.IDD].input.power;
                        }
                    }
                }
            }
            return 0;
        }
    }

    public boolean allRecShow = true;

    public class ChooseMultiCrafterBuild extends GenericCrafterBuild{
        public int IDD = 0;
        public boolean[] 生产状态 = new boolean[recs.length];
        public float[] 加工时间 = new float[recs.length];

        @Override
        public void draw(){
            super.draw();
        }

        @Override
        public void buildConfiguration(Table table) {
            ButtonGroup<ImageButton> group = new ButtonGroup<>();
            group.setMinCheckCount(0);
            group.setMaxCheckCount(1);

            int A = 0;

            for(var i = 0; i < recs.length; i++) {
                int finalI = i;

                ImageButton button = table.button(Tex.whiteui, clearToggleTransi, 40, () -> {
                }).group(group).get();
                button.clicked(() -> configure(button.isChecked() ? finalI : -1));

                TextureRegion icon;
                if (ItemLiquid == null) {
                    icon = recs[i].output.items.length > 0 ?
                            recs[i].output.items[0].item.uiIcon :
                            recs[i].output.liquids.length > 0 ? recs[i].output.liquids[0].liquid.uiIcon : region;
                } else {
                    icon = ItemLiquid[finalI] ?
                            recs[i].output.items[0].item.uiIcon : recs[i].output.liquids[0].liquid.uiIcon;
                }

                if(icon == Core.atlas.find("error")){
                    icon = (TextureRegion) Icon.power.tint(Color.white);
                }

                button.getStyle().imageUp = new TextureRegionDrawable(icon);
                button.update(() -> button.setChecked(IDD == finalI));

                A += 1;
                if (A == (RecipeShowIS != 0 ? RecipeShowIS : size+1)) {
                    A = 0;
                    table.row();
                }
            }
        }

        @Override
        public void displayConsumption(Table table){
            if (IDD == -1) {
                return;
            }

            if (allRecShow) {
                int recLen = recs.length;
                if (recLen <= 0) return;
                int z = 0, y = 0, x = 0;

                table.left();
                for (int i = 0; i < recLen; i++) {
                    ItemStack[] itemStacks = recs[i].input.items;
                    LiquidStack[] liquidStacks = recs[i].input.liquids;
                    for (ItemStack stack : itemStacks) {
                        table.add(new ReqImage(new ItemImage(stack.item.uiIcon, stack.amount), () -> items != null && items.has(stack.item, stack.amount))).size(8 * 4);//.padRight(8);
                    }
                    z += itemStacks.length;
                    for (LiquidStack stack : liquidStacks) {
                        table.add(new ReqImage(stack.liquid.uiIcon, () -> liquids != null && liquids.get(stack.liquid) > stack.amount)).size(8 * 4);
                    }
                    z += liquidStacks.length;
                    if (z == 0) {
                        table.image(Icon.cancel).size(8f * 4f);
                        x += 1;
                    }
                    if (i < recLen - 1) {
                        CreatorsRecipe.InputContents next = recs[i + 1].input;
                        y += next.items.length + next.liquids.length;
                        x += z;
                        if ((x + y <= 8 && y != 0) || (x + y <= 7 && y == 0)) {
                            table.image(Icon.pause).size(8f * 4f);
                            x += 1;
                        } else {
                            table.row();
                            x = 0;
                        }
                    }
                    y = 0;
                    z = 0;
                }
            }else{
                int z = 0;

                table.left();

                ItemStack[] itemStacks = recs[IDD].input.items;
                LiquidStack[] liquidStacks = recs[IDD].input.liquids;
                for (ItemStack stack : itemStacks) {
                    table.add(new ReqImage(new ItemImage(stack.item.uiIcon, stack.amount), () -> items != null && items.has(stack.item, stack.amount))).size(8 * 4);//.padRight(8);
                }
                z += itemStacks.length;
                for (LiquidStack stack : liquidStacks) {
                    table.add(new ReqImage(stack.liquid.uiIcon, () -> liquids != null && liquids.get(stack.liquid) > stack.amount)).size(8 * 4);
                }
                z += liquidStacks.length;
                if (z == 0) {
                    table.image(Icon.cancel).size(8f * 4f);
                }
            }
        }

        @Override
        public Integer config(){
            return IDD;
        }

        public float 进度条(int i){
            if(i == -1){
                return 0f;
            }
            return 加工时间[i] / recs[i].craftTime;
        }

        public boolean 检测消耗(CreatorsRecipe.InputContents a){
            if(a.items != null) {
                for (var A : a.items) {
                    if (items.get(A.item) < A.amount) {
                        return false;
                    }
                }
            }
            if(a.liquids != null) {
                for (var A : a.liquids) {
                    if (liquids.get(A.liquid) < A.amount) {
                        return false;
                    }
                }
            }

            return true;
        }

        public void 资源消耗(CreatorsRecipe.InputContents a){
            if(a.items != null) {
                for (var A : a.items) {
                    items.remove(A.item, A.amount);
                }
            }
            if(a.liquids != null) {
                for (var A : a.liquids) {
                    liquids.remove(A.liquid, A.amount);
                }
            }
        }

        public float 副检测器(CreatorsRecipe.InputContents a, CreatorsRecipe.OutputContents b){
            for(var i : b.items){
                if(items.get(i.item) >= this.block.itemCapacity){
                    return 0;
                }
            }
            for(var i : b.liquids){
                if(liquids.get(i.liquid) >= this.block.liquidCapacity){
                    return 0;
                }
            }

            if(a.power > 0){
                return power.status * edelta();
            }
            return delta();
        }

        public void 存储资源输出(CreatorsRecipe.OutputContents a){
            if(a.items != null) {
                for (var A : a.items) {
                    for(var i = 0; i < A.amount; i++) {
                        dump(A.item);
                    }
                }
            }
            if(a.liquids != null) {
                for (var A : a.liquids) {
                    for(var i = 0; i < A.amount; i++) {
                        dumpLiquid(A.liquid);
                    }
                }
            }
        }

        public void 资源输出(CreatorsRecipe.OutputContents a){
            if(wasVisible){
                craftEffect.at(x, y);
            }

            if(a.items != null) {
                for (var A : a.items) {
                    for(var i = 0; i < A.amount; i++) {
                        offload(A.item);
                    }
                }
            }
            if(a.liquids != null) {
                for (var A : a.liquids) {
                    liquids.add(A.liquid, A.amount);
                }
            }
        }

        @Override
        public void updateTile() {
            if(IDD != -1 ){
                if(生产状态[IDD]){
                    加工时间[IDD] += 副检测器(recs[IDD].input, recs[IDD].output);
                    if(加工时间[IDD] >= recs[IDD].craftTime){
                        资源输出(recs[IDD].output);
                        生产状态[IDD] = false;
                        加工时间[IDD] = 0;
                    }

                    if(wasVisible && (Mathf.chanceDelta(updateEffectChance * 副检测器(recs[IDD].input, recs[IDD].output)))){
                        updateEffect.at(x + Mathf.range(size * 4f), y + Mathf.range(size * 4));
                    }
                }else{
                    if(cheating()){
                        生产状态[IDD] = true;
                    }else {
                        if (检测消耗(recs[IDD].input)) {
                            资源消耗(recs[IDD].input);
                            生产状态[IDD] = true;
                        }
                    }
                }
            }

            if(timer(timerDump, dumpTime)) {
                for (CreatorsRecipe rec : recs) {
                    存储资源输出(rec.output);
                }
            }
        }

        @Override
        public float getPowerProduction(){
            if(IDD != -1 ){
                if(recs[IDD].output.power > 0) {
                    if (生产状态[IDD]) {
                        return recs[IDD].output.power;
                    }
                }
            }
            return 0f;
        }

        @Override
        public void write(Writes write) {
            super.write(write);

            write.i(IDD);

            for(var i = 0; i < recs.length; i++) {
                write.bool(生产状态[i]);
                write.f(加工时间[i]);
            }
        }

        @Override
        public void read(Reads read, byte revision) {
            super.read(read, revision);

            IDD = read.i();

            for(var i = 0; i < recs.length; i++) {
                生产状态[i] = read.bool();
                加工时间[i] = read.f();
            }
        }

        public boolean accept(UnlockableContent content){
            if(IDD != -1 ){
                for(var i : recs[IDD].input.items){
                    if(i.item == content){
                        return true;
                    }
                }
                for(var l : recs[IDD].input.liquids){
                    if(l.liquid == content){
                        return true;
                    }
                }
            }
            return false;
        }

        @Override
        public boolean acceptItem(Building source, Item item) {
            if(items.get(item) < this.block.itemCapacity) {
                return accept(item);
            }else{
                return false;
            }
        }
        @Override
        public boolean acceptLiquid(Building source, Liquid liquid){
            if(liquids != null && liquids.get(liquid) < this.block.liquidCapacity) {
                return accept(liquid);
            }else{
                return false;
            }
        }
    }
}

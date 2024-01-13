package creators.type;
/*多合成并行*/
import arc.Core;
import arc.graphics.Color;
import arc.math.Mathf;
import arc.scene.ui.Button;
import arc.struct.ObjectSet;
import arc.util.Log;
import arc.util.Scaling;
import arc.util.Strings;
import arc.util.io.Reads;
import arc.util.io.Writes;
import mindustry.content.Fx;
import mindustry.entities.Effect;
import mindustry.gen.Building;
import mindustry.gen.Icon;
import mindustry.graphics.Pal;
import mindustry.type.Item;
import mindustry.type.ItemStack;
import mindustry.type.Liquid;
import mindustry.type.LiquidStack;
import mindustry.ui.Bar;
import mindustry.ui.ItemDisplay;
import mindustry.ui.LiquidDisplay;
import mindustry.world.blocks.production.GenericCrafter;
import mindustry.world.consumers.ConsumePower;
import mindustry.world.meta.Stat;

import static arc.Core.bundle;
import static arc.Core.scene;
import static mindustry.Vars.headless;

public class CreatorsNoChooseMulti extends GenericCrafter {
    public final CreatorsRecipe[] recs;
    private int index = 0;
    public Color TableColor = Color.yellow;

    public final ObjectSet<Item> inputItemSet = new ObjectSet<>();
    public final ObjectSet<Liquid> inputLiquidSet = new ObjectSet<>(), liquidSet = new ObjectSet<>();

    private boolean powerBarI, powerBarO;
    private Button.ButtonStyle infoStyle;

    public Effect craftEffect = Fx.none;
    public Effect updateEffect = Fx.none;
    public float updateEffectChance = 0.04f;

    public CreatorsNoChooseMulti(String name, CreatorsRecipe[] recs) {
        super(name);
        this.recs = recs;

        this.buildType = CreatorsNoChooseMultiBuild::new;

    }

    public CreatorsNoChooseMulti(String name, int recLen){
        this(name, new CreatorsRecipe[recLen]);
    }

    @Override
    public void setBars() {
        super.setBars();
        removeBar("power");

        if (consPower != null) {
            addBar("power", (CreatorsNoChooseMulti.CreatorsNoChooseMultiBuild entity) ->
                new Bar(() -> bundle.format("bar.powerA", Strings.fixed(entity.block.consPower.requestedPower(entity) * 60 * entity.timeScale(), 1)),
                    () -> Pal.powerBar,
                    () -> entity.power.status)
            );
        }

        removeBar("liquid");
        removeBar("items");
        if (!powerBarI && hasPower) removeBar("power");
        if (powerBarO) {
            addBar("poweroutput", (CreatorsNoChooseMulti.CreatorsNoChooseMultiBuild entity) ->
                new Bar(() -> bundle.format("bar.poweroutputA", Strings.fixed(entity.getPowerProduction() * 60 * entity.timeScale(), 1)),
                    () -> Pal.powerBar,
                    () -> entity.getPowerProduction() == 0 ? 0f : 1f)
            );
        }
        if (!liquidSet.isEmpty()) {
            liquidSet.each(k -> addBar(k.localizedName, entity -> new Bar(() -> k.localizedName + "[" + entity.liquids.get(k) + "]", k::barColor, () -> entity.liquids.get(k) / liquidCapacity)));
        }

        for(var i = 0; i < recs.length; i++){
            int finalI = i;
            addBar("配方条" + i, (CreatorsNoChooseMulti.CreatorsNoChooseMultiBuild e) ->
                new Bar(
                    () -> bundle.format("bar.warmup", Math.floor(e.进度条(finalI) * 100.0f) + " %"),
                    () -> Pal.powerBar,
                    () -> e.进度条(finalI)
                )
            );
        }
    }

    @Override
    public void setStats() {
        super.setStats();

        stats.remove(Stat.powerUse);
        stats.remove(Stat.productionTime);

        stats.add(Stat.input, table -> {
            table.row();
            table.table(infoStyle.up, part -> {
                for (CreatorsRecipe rec : recs) {
                    boolean jj = false;
                    for (ItemStack inputItem : rec.input.items) {
                        jj = true;
                        part.add(new ItemDisplay(inputItem.item, inputItem.amount, false)).scaling(Scaling.fill);;
                    }
                    for (LiquidStack inputLiquid : rec.input.liquids) {
                        jj = true;
                        part.add(new LiquidDisplay(inputLiquid.liquid, inputLiquid.amount, false)).scaling(Scaling.fill);;
                    }
                    if (rec.input.power != 0) {
                        part.add((jj ? "+ " : "") + rec.input.power * 60f).scaling(Scaling.fill);;
                        part.image(Icon.power).scaling(Scaling.fill);
                    }
                    part.image(Core.atlas.find("creators-arrows")).scaling(Scaling.fill);

                    boolean jjj = false;
                    for (ItemStack outputItem : rec.output.items) {
                        jjj = true;
                        part.add(new ItemDisplay(outputItem.item, outputItem.amount, false)).scaling(Scaling.fill);;
                    }
                    for (LiquidStack outputLiquid : rec.output.liquids) {
                        jjj = true;
                        part.add(new LiquidDisplay(outputLiquid.liquid, outputLiquid.amount, false)).scaling(Scaling.fill);;
                    }
                    if (rec.output.power != 0) {
                        part.add((jjj ? "+ " : "") + rec.output.power * 60f).scaling(Scaling.fill);;
                        part.image(Icon.power).scaling(Scaling.fill);
                    }
                    part.add(" [" + display(rec.craftTime / 60.0f) + "s]").scaling(Scaling.fill);;
                    part.row();
                }
            }).color(TableColor);
        });
    }

    public String display(float value){
        int precision = Math.abs((int)value - value) <= 0.001f ? 0 : Math.abs((int)(value * 10) - value * 10) <= 0.001f ? 1 : 2;

        return Strings.fixed(value, precision);
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

        super.init();

        if(!headless) infoStyle = scene.getStyle(Button.ButtonStyle.class);
    }

    public void addRecipe(CreatorsRecipe.InputContents input, CreatorsRecipe.OutputContents output, float craftTime){
        recs[index++] = new CreatorsRecipe(input, output, craftTime);
    }

    public class MultiConsumePower extends ConsumePower {
        public float requestedPower(Building entity){
            float power = 0.0f;
            if(entity instanceof CreatorsNoChooseMultiBuild){
                var build = (CreatorsNoChooseMultiBuild)entity;
                for(var i = 0; i < recs.length; i++){
                    if(recs[i].input.power > 0) {
                        if (build.生产状态[i]) {
                            power += recs[i].input.power;
                        }
                    }
                }
            }
            return power;
        }
    }

    public class CreatorsNoChooseMultiBuild extends GenericCrafterBuild{
        public boolean[] 生产状态 = new boolean[recs.length];
        public float[] 加工时间 = new float[recs.length];

        public float 进度条(int i){
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
            for(var i = 0; i < recs.length;  i++){
                if(生产状态[i]){
                    加工时间[i] += 副检测器(recs[i].input, recs[i].output);
                    if(加工时间[i] >= recs[i].craftTime){
                        资源输出(recs[i].output);
                        生产状态[i] = false;
                        加工时间[i] = 0;
                    }

                    if(wasVisible && (Mathf.chanceDelta(updateEffectChance * 副检测器(recs[i].input, recs[i].output)))){
                        updateEffect.at(x + Mathf.range(size * 4f), y + Mathf.range(size * 4));
                    }
                }else{
                    if(cheating()){
                        生产状态[i] = true;
                    }else {
                        if (检测消耗(recs[i].input)) {
                            资源消耗(recs[i].input);
                            生产状态[i] = true;
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
            float power = 0f;
            for(var i = 0; i < recs.length; i++){
                if(recs[i].output.power > 0) {
                    if (生产状态[i]) {
                        power += recs[i].output.power;
                    }
                }
            }
            return power;
        }

        @Override
        public void write(Writes write) {
            super.write(write);

            for(var i = 0; i < recs.length; i++) {
                write.bool(生产状态[i]);
                write.f(加工时间[i]);
            }
        }

        @Override
        public void read(Reads read, byte revision) {
            super.read(read, revision);

            for(var i = 0; i < recs.length; i++) {
                生产状态[i] = read.bool();
                加工时间[i] = read.f();
            }
        }

        @Override
        public boolean acceptItem(Building source, Item item) {
            if(items.get(item) < this.block.itemCapacity) {
                return inputItemSet.contains(item);
            }else{
                return false;
            }
        }

        @Override
        public boolean acceptLiquid(Building source, Liquid liquid){
            if(liquids != null && liquids.get(liquid) < this.block.liquidCapacity) {
                return inputLiquidSet.contains(liquid);
            }else{
                return false;
            }
        }
    }
}

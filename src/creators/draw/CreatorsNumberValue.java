package creators.draw;

import arc.scene.ui.layout.*;
import arc.util.*;
import mindustry.world.meta.*;

public class CreatorsNumberValue implements StatValue{
    private final StatUnit unit;
    private final float value;

    public CreatorsNumberValue(float value, StatUnit unit){
        this.unit = unit;
        this.value = value;
    }

    @Override
    public void display(Table table){
        int precision = Math.abs((int)value - value) <= 0.001f ? 0 : Math.abs((int)(value * 10) - value * 10) <= 0.001f ? 1 : 2;

        table.add(Strings.fixed(value, precision));
        table.add((unit.space ? " " : "") + unit.localized());
    }
}

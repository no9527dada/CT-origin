package creators.type;

import arc.Events;
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Lines;
import arc.math.Mathf;
import arc.util.Time;
import mindustry.Vars;
import mindustry.content.Liquids;
import mindustry.game.EventType;
import mindustry.graphics.Layer;
import mindustry.graphics.Pal;
import mindustry.world.Tile;

/*
 *@Date  :2024/5/13
 */
public class CTSpawnDraw {
    //0 陆军
    //1 蜘蛛
    //2 海军
    // public static boolean[] enables = new boolean[]{true, true, true};


    public static boolean[] enables = new boolean[]{true, true, true};


    public static Color[] colors = new Color[]{Color.red, Pal.reactorPurple, Liquids.water.color};

    public static void init() {
        Events.run(EventType.Trigger.draw, () -> Draw.draw(Layer.flyingUnit + 2.5f, draw));
    }

    public static boolean isEnable(int index) {
        return enables[index];
    }

    public static void setEnable(int index, boolean enable) {
        CTSpawnDraw.enables[index] = enable;
    }

    public static void setEnable2(boolean enable0, boolean enable1, boolean enable2) {
        CTSpawnDraw.enables[0] = enable0;
        CTSpawnDraw.enables[1] = enable1;
        CTSpawnDraw.enables[2] = enable2;

    }

    static Runnable draw = () -> {
        //0 陆军
        //1 蜘蛛
        //2 海军
        for (int i = 0; i <= 2; i++) {
            if (!enables[i]) continue;
            for (var tile : Vars.spawner.getSpawns()) {
                Draw.z(Layer.flyingUnit + 2.5f);//+ 2.5f);
                Lines.stroke(2, Vars.state.rules.waveTeam.color);
                Draw.color(colors[i], Mathf.absin(Time.time, 8.0F, 1.0F));
                while (true) {
                    Tile nextTile = Vars.pathfinder.getTargetTile(tile, Vars.pathfinder.getField(Vars.state.rules.waveTeam, i, 0));
                    if (nextTile == null || tile == nextTile) {
                        break;
                    }
                    Lines.dashLine(tile.worldx(), tile.worldy(), nextTile.worldx(), nextTile.worldy(),
                            (int) (Mathf.len(nextTile.worldx() - tile.worldx(), nextTile.worldy() - tile.worldy()) / 4f));
                    tile = nextTile;
                }
                Draw.reset();
            }

        }
    };

}


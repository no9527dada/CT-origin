package creators.xvx;

import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Lines;
import arc.math.Mathf;
import mindustry.graphics.OverlayRenderer;
import mindustry.world.Tile;

import static mindustry.Vars.*;

public class WaveSpawner extends OverlayRenderer {
    private static final float spawnerMargin = tilesize*500f;

    public static void drawSpawner() {
        if(state.hasSpawns()){
            for(Tile tile : spawner.getSpawns()){
                if(tile.within(player.x, player.y, state.rules.dropZoneRadius + spawnerMargin)){
                    Draw.alpha(Mathf.clamp(1f - (player.dst(tile) - state.rules.dropZoneRadius) / spawnerMargin));
                    Lines.dashCircle(tile.worldx(), tile.worldy(), state.rules.dropZoneRadius);
                }
            }
        }



        }
    }








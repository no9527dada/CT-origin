package creators.world.block;

import arc.graphics.Color;
import arc.math.Mathf;
import creators.type.PowerNetTower;
import mindustry.content.Items;
import mindustry.type.Category;
import mindustry.type.ItemStack;
import mindustry.world.Block;
import mindustry.world.Tile;
import mindustry.world.blocks.distribution.*;
import mindustry.world.blocks.production.GenericCrafter;
import mindustry.world.draw.DrawDefault;
import mindustry.world.draw.DrawFlame;
import mindustry.world.draw.DrawMulti;

import static mindustry.Vars.world;
import static mindustry.content.Fx.smoke;
import static mindustry.content.Items.metaglass;
import static mindustry.gen.Sounds.respawning;
import static mindustry.type.Category.crafting;
import static mindustry.type.ItemStack.with;
import static mindustry.world.meta.BlockGroup.transportation;

public class CTConveyor {
    public static Block
    csdq, csdq0,lianjieqi2,  conveyor1,conveyor12,conveyor2,conveyor21,nengliangtas,nengliangtas2
            ;

    public static void load() {
        csdq0 = new ItemBridge("csqd0") {{}};
        lianjieqi2 = new Junction("lianjieqi2") {{}};

        conveyor1 = new Conveyor("1-conveyor") {{}
            @Override
            public void init() {
                super.init();

                junctionReplacement = CTBlocks.junction;
                bridgeReplacement = csdq0;
            }
        };
        conveyor12 = new ArmoredConveyor("1-conveyor1") {{}
            @Override
            public void init() {
                super.init();

                junctionReplacement = CTBlocks.junction;
                bridgeReplacement = csdq0;
            }
        };
        conveyor2 = new Conveyor("2-conveyor") {{}
            @Override
            public void init() {
                super.init();

                junctionReplacement = lianjieqi2;
                bridgeReplacement = csdq0;
            }
        };
        conveyor21 = new ArmoredConveyor("2-conveyor1") {{}
            @Override
            public void init() {
                super.init();

                junctionReplacement = lianjieqi2;
                bridgeReplacement = csdq0;
            }
        };

        csdq = new BufferedItemBridge("csdq2") {{
            buildType = Build::new;
           // transportTime = 1f;
        }
        class Build extends BufferedItemBridgeBuild {
               public boolean timer(int index, float time) {
                   return super.timer(index, time / 1000f);
               }
                public void updateTile(){
                    if(timer(timerCheckMoved, 20f)){
                        wasMoved = moved;
                        moved = false;
                    }

                    //smooth out animation, so it doesn't stop/start immediately
                    timeSpeed = Mathf.approachDelta(timeSpeed, wasMoved ? 1f : 0f, 1f / 600f);

                    time += timeSpeed * delta();

                    checkIncoming();

                    Tile other = world.tile(link);
                    if(!linkValid(tile, other)){
                        doDump();
                        warmup = 0f;
                    }else{
                        var inc = ((ItemBridgeBuild)other.build).incoming;
                        int pos = tile.pos();
                        if(!inc.contains(pos)){
                            inc.add(pos);
                        }

                        warmup = Mathf.approachDelta(warmup, efficiency, 1f / 300f);
                        updateTransport(other.build);
                    }
                }

            }
         };



        nengliangtas = new PowerNetTower("nengliangtas") {{}};

        nengliangtas2 = new PowerNetTower("nengliangtas2") {{}};







    }
}


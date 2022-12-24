//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package creators.xvx;

import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.util.Time;
import java.util.Iterator;
import mindustry.Vars;
import mindustry.gen.Building;
import mindustry.type.Item;
import mindustry.type.Liquid;
import mindustry.world.blocks.power.PowerNode;

public class XVXSource extends PowerNode {
    public XVXSource(String name) {
        super(name);
        this.maxNodes = 1;
        this.outputsPower = true;
        this.consumesPower = false;
        this.envEnabled = -1;
        this.update = true;
        this.laserRange = 25;
        this.buildType = () -> {
            return new XVXSourceBuild();
        };
    }

    public class XVXSourceBuild extends PowerNode.PowerNodeBuild {
        public XVXSourceBuild() {
            super();
        }

        public void updateTile() {
            super.updateTile();
            Iterator var1 = this.proximity.iterator();

            while(var1.hasNext()) {
                Building p = (Building)var1.next();
                Iterator var3 = Vars.content.items().iterator();

                while(var3.hasNext()) {
                    Item a = (Item)var3.next();
                    if (!p.block.hasItems || p.items == null) {
                        break;
                    }

                    if (p.acceptItem(this, a)) {
                        p.handleItem(p, a);
                    }
                }

                var3 = Vars.content.liquids().iterator();

                while(var3.hasNext()) {
                    Liquid ax = (Liquid)var3.next();
                    if (!p.block.hasLiquids || p.liquids == null) {
                        break;
                    }

                    if (p.acceptLiquid(this, ax)) {
                        p.handleLiquid(p, ax, 2.0F);
                    }
                }
            }

        }

        public float getPowerProduction() {
            return this.enabled ? 1000000.0F/60 : 0.0F;
        }

        public void draw() {
            super.draw();
            Color RGB = new Color(1.0F, 1.0F, 1.0F, 1.0F);
            RGB.fromHsv(Time.globalTime * 3.0F % 360.0F, 1.0F, 1.0F);
            Draw.color(RGB);
            Draw.rect("center", this.x, this.y);
            Draw.color();
            XVXSource.this.laserColor1 = RGB;
            XVXSource.this.laserColor2 = RGB;
        }
    }
}

package creators.xvx;

import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Lines;
import arc.math.Mathf;
import arc.scene.ui.layout.Scl;
import arc.util.Time;
//import dawn.core.CoreDawn;
import mindustry.ui.BorderImage;

import static arc.Core.settings;

//TODO 破晓加强动态Icon模块
public class DawnBorderImage extends BorderImage {
    public DawnBorderImage() {
    }
    public static Color RGB(){
        Color RGB = new Color(1.0F, 1.0F, 1.0F, 1.0F);
        RGB.fromHsv(Time.globalTime * 3.0F % 360.0F, 1.0F, 1.0F);
        return RGB;
    };
    @Override
    public DawnBorderImage border(Color color) {
        borderColor = color;
        return this;
    }

    @Override
    public void draw() {
        super.draw();

        if (settings.getBool("测试功能")) {
            Draw.color(RGB());
        } else {
            Draw.color(borderColor.cpy().shiftHue(Time.time).shiftValue(Mathf.absin(Time.time, 4f, 0.15f)));
        }
        Draw.alpha(parentAlpha);
        Lines.stroke(Scl.scl(thickness));
        Lines.rect(x + imageX - pad, y + imageY - pad, imageWidth * scaleX + pad * 2, imageHeight * scaleY + pad * 2);
        Draw.reset();
    }
}
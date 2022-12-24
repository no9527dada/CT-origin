package creators;

import arc.graphics.Color;
import arc.graphics.g2d.Fill;
import arc.graphics.g2d.Lines;
import mindustry.entities.Effect;
import mindustry.graphics.Pal;

import static arc.graphics.g2d.Draw.color;
import static arc.graphics.g2d.Lines.stroke;
import static arc.math.Angles.randLenVectors;

public class CreatorsFX {
    public static Effect nuclearcloud = new Effect(90, 200f, e -> {
        randLenVectors(e.id, 10, e.finpow() * 90f, (x, y) -> {
            float size = e.fout() * 14f;
            color(Color.lime, Color.gray, e.fin());
            Fill.circle(e.x + x, e.y + y, size/2f);
        });
    });

    public static Effect impactShockwave = new Effect(13f, 300f, e -> {
        color(Pal.lighterOrange, Color.lightGray, e.fin());
        stroke(e.fout() * 4f + 0.2f);
        Lines.circle(e.x, e.y, e.fin() * 200f);
    });
}

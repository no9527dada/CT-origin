package creators;

import arc.Core;
import arc.graphics.Color;
import arc.math.Mathf;
import arc.util.Tmp;
import mindustry.content.Planets;
import mindustry.type.Sector;
import org.jetbrains.annotations.NotNull;


public class MySector extends Sector {

    public MySector(@NotNull Sector sector) {
        super(sector.planet, sector.tile);
        threat = sector.threat;
        generateEnemyBase = sector.generateEnemyBase;
        save = sector.save;
        preset = sector.preset;
        info = sector.info;
        // Planets.serpulo.sectors.set(171,new MySector(Planets.serpulo.sectors.get(171)){{
        //     threat = 10;
        // }});
    }
    /**
     * Displays threat as a formatted string.
     */
    public String displayThreat() {
        float step = 0.25f;
        String color = Tmp.c1.set(Color.white).lerp(Color.scarlet, Mathf.round(threat, step)).toString();
        String[] threats = {"low", "medium", "high", "extreme", "eradication", "difficulty6", "difficulty7",
            "difficulty8", "difficulty9", "difficulty10", "difficulty11", "difficulty12", "difficulty13", "difficulty14",
            "difficulty15", "difficulty16", "difficulty17", "difficulty18", "difficulty19", "difficulty20"};
        int index = Math.min((int) (threat / step), threats.length - 1);
        return "[#" + color + "]" + Core.bundle.get("threat." + threats[index]);
    };

}

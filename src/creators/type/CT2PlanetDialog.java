package creators.type;


//区块名显示
import arc.graphics.Color;
import arc.graphics.g2d.Draw;
import arc.graphics.g2d.Font;
import arc.graphics.g2d.GlyphLayout;
import arc.math.Mathf;
import arc.util.pooling.Pools;
import mindustry.content.TechTree;
import mindustry.game.Team;
import mindustry.graphics.Pal;
import mindustry.type.Planet;
import mindustry.type.Sector;
import mindustry.type.SectorPreset;
import mindustry.ui.Fonts;
import mindustry.ui.dialogs.PlanetDialog;

import static mindustry.ui.dialogs.PlanetDialog.Mode.planetLaunch;
import static mindustry.ui.dialogs.PlanetDialog.Mode.select;

public class CT2PlanetDialog extends PlanetDialog   {
    public static float arcDrawText(String text, float scl, float dx, float dy, int halign) {
        Font font = Fonts.outline;
        GlyphLayout layout = Pools.obtain(GlyphLayout.class, GlyphLayout::new);
        boolean ints = font.usesIntegerPositions();
        font.setUseIntegerPositions(false);
        font.getData().setScale(scl);
        layout.setText(font, text);

        float height = layout.height;

        font.draw(text, dx + layout.width / 2, dy + layout.height / 2, halign);

        font.setUseIntegerPositions(ints);
        font.setColor(Color.white);
        font.getData().setScale(1f);
        Draw.reset();
        Pools.free(layout);

        return height;
    }


    boolean canSelect(Sector sector){
        if(mode == select) return sector.hasBase() && launchSector != null && sector.planet == launchSector.planet;
        //cannot launch to existing sector w/ accelerator TODO test
        if(mode == planetLaunch) return sector.id == sector.planet.startSector;
        if(sector.hasBase() || sector.id == sector.planet.startSector) return true;
        //preset sectors can only be selected once unlocked
        if(sector.preset != null){
            TechTree.TechNode node = sector.preset.techNode;
            return node == null || node.parent == null || (node.parent.content.unlocked() && (!(node.parent.content instanceof SectorPreset preset) || preset.sector.hasBase()));
        }

        return sector.planet.generator != null ?
                //use planet impl when possible
                sector.planet.generator.allowLanding(sector) :
                sector.hasBase() || sector.near().contains(Sector::hasBase); //near an occupied sector
    }
    @Override
    public void renderProjections(Planet planet){
        float iw = 48f/4f;

        for(Sector sec : planet.sectors){
            if(sec != hovered){
                var preficon = sec.icon();
                var icon =
                        sec.isAttacked() ? Fonts.getLargeIcon("warning") :
                                !sec.hasBase() && sec.preset != null && sec.preset.unlocked() && preficon == null ?
                                        Fonts.getLargeIcon("terrain") :
                                        sec.preset != null && sec.preset.locked() && sec.preset.techNode != null && !sec.preset.techNode.parent.content.locked() ? Fonts.getLargeIcon("lock") :
                                                preficon;
                var color = sec.preset != null && !sec.hasBase() ? Team.derelict.color : Team.sharded.color;

                if(icon != null){
                    planets.drawPlane(sec, () -> {
                        //use white for content icons
                        Draw.color(preficon == icon && sec.info.contentIcon != null ? Color.white : color, state.uiAlpha);
                        Draw.rect(icon, 0, 0, iw, iw * icon.height / icon.width);
                    });
                }
                planets.drawPlane(sec,()->{
                    if((canSelect(sec) || sec.hasBase()) && true) arcDrawText((sec.preset !=null ? "" : "[#ff8c8c]") +  sec.name(),0.5f,0,0,0);
                });
            }
        }

        Draw.reset();

        if(hovered != null && state.uiAlpha > 0.01f){
            planets.drawPlane(hovered, () -> {
                Draw.color(hovered.isAttacked() ? Pal.remove : Color.white, Pal.accent, Mathf.absin(5f, 1f));
                Draw.alpha(state.uiAlpha);

                var icon = hovered.locked() && !canSelect(hovered) ? Fonts.getLargeIcon("lock") : hovered.isAttacked() ? Fonts.getLargeIcon("warning") : hovered.icon();

                if(icon != null){
                    Draw.rect(icon, 0, 0, iw, iw * icon.height / icon.width);
                }

                Draw.reset();
            });
        }

        Draw.reset();
    }
}

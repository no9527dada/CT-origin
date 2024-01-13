package creators.type;
import arc.*;
import arc.audio.Sound;
import arc.graphics.*;
import arc.graphics.g2d.*;
import arc.math.*;
import arc.math.geom.*;
import arc.struct.*;
import arc.util.*;
import mindustry.Vars;
import mindustry.entities.*;
import mindustry.entities.abilities.*;
import mindustry.game.Team;
import mindustry.gen.*;
import mindustry.graphics.*;
import mindustry.type.*;
import mindustry.world.*;
import mindustry.world.blocks.units.UnitAssembler.*;

import static arc.graphics.g2d.Draw.rect;
import static arc.graphics.g2d.Draw.*;
import static arc.graphics.g2d.Lines.*;
import static arc.math.Angles.*;
import static mindustry.Vars.*;
public class CTLIB {
    public static final Rand rand = new Rand();
    public static final Vec2 v = new Vec2();

    public static final Effect


    CTmissileTrailSmoke = new Effect(90f, 300f, b -> {
        float intensity = 2f;
       // color(b.color, 0.7f);
        color(b.color, Color.valueOf("656565"), Color.gray, b.fin());
        for(int i = 0; i < 4; i++){
            rand.setSeed(b.id*2 + i);
            float lenScl = rand.random(0.5f, 1f);
            int fi = i;
            b.scaled(b.lifetime * lenScl, e -> {
                randLenVectors(e.id + fi - 1, e.fin(Interp.pow10Out), (int)(2.9f * intensity), 13f * intensity, (x, y, in, out) -> {
                    float fout = e.fout(Interp.pow5Out) * rand.random(0.5f, 1f);
                    float rad = fout * ((2f + intensity) * 2.35f);

                    Fill.circle(e.x + x, e.y + y, rad);
                    Drawf.light(e.x + x, e.y + y, rad * 2.5f, b.color, 0.5f);
                });
            });
        }
    }).layer(Layer.bullet - 1f);


    /** name */
    public static final String modName = "creators";

    /**
     * 从 bundle 中拼装信息
     *
     * @param type 类型
     * @param key  前缀
     * @param msgs 参数
     * @return 信息
     */
    public static String getMessage(String type, String key, String... msgs) {
        return Vars.headless ? "" : Core.bundle.format(type + "." + modName + "." + key, (Object[]) msgs);
    }

    /**
     * 读取一个贴图
     *
     * @param name 贴图名称
     * @return 贴图
     */
    public static TextureRegion loadRegion(String name) {
        return Vars.headless ? null : Core.atlas.find(modName + '-' + name, Core.atlas.find("clear"));
    }

    /**
     * 读取一个音效
     *
     * @param name 名称
     * @return 音效
     */
    public static Sound loadSound(String name) {
        return Vars.headless ? Sounds.none : Vars.tree.loadSound(name);
    }

    /**
     * 获取当前 Mod 版本
     *
     * @return Mod 信息
     */
    public static String getModVersion() {
        return Vars.mods.locateMod(modName).meta.version;
    }

    /**
     * 判断当前 mod 是否为 dev 版本
     *
     * @return 是否为 dev 版本
     */
    public static boolean isDev() {
        return getModVersion().contains("dev");
    }

    private static Vec2 tr = new Vec2();
    private static IntSet collidedBlocks = new IntSet();
    private static Vec2 seg1 = new Vec2();
    private static Vec2 seg2 = new Vec2();
    private static Rect rect = new Rect();
    private static Seq units = new Seq();
    private static Rect hitrect = new Rect();

    public enum PierceType {
        /** 贯穿，塑钢也不好使 */
        PIERCE,
        /** 贯穿不了 */
        BLOCKING,
        /** 普通，被塑钢阻塞 */
        NORMAL,
    }

    public static void damageLine(Bullet hitter, Team team, Effect effect, float x, float y, float angle, float length,
                                  boolean large, PierceType pierce) {
        if (pierce == PierceType.NORMAL) {
            Damage.collideLine(hitter, team, effect, x, y, angle, length, large, true);
        } else if (pierce == PierceType.BLOCKING) {
            Damage.collideLine(hitter, team, effect, x, y, angle, length, large, true, 1);
        } else {
            Damage.collideLine(hitter, team, effect, x, y, angle, length, large, false);
        }
    }
}

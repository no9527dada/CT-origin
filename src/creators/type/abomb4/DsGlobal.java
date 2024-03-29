package creators.type.abomb4;

import creators.type.CTLIB;
import mindustry.Vars;

/**
 * @author abomb4 2022-10-07
 */
public final class DsGlobal {

    /** mod */
   // public static DimensionShardMod mod;

    /**
     * 判断次元科技是否可以使用，需要存在对应的核心才可以，或者作弊模式也行
     *
     * @return 是否可用次元科技
     */
    public static boolean techDsAvailable() {
        return Vars.state == null
            || Vars.state.rules.infiniteResources
            || Vars.player == null
            ||
            Vars.player.team().cores().contains(v -> v.block.name.equals(CTLIB.modName + "-dimension-technology-core-6"))
            ||
            Vars.player.team().cores().contains(v -> v.block.name.equals(CTLIB.modName + "-dimension-technology-core-5"));
    }
}

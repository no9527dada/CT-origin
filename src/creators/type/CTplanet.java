package creators.type;

import arc.Core;
import arc.graphics.Color;
import mindustry.graphics.Pal;
import mindustry.graphics.g3d.HexMesh;
import mindustry.graphics.g3d.HexSkyMesh;
import mindustry.graphics.g3d.MultiMesh;
import mindustry.maps.planet.SerpuloPlanetGenerator;
import mindustry.type.Planet;

public class CTplanet{
    public static Planet

            CTGThree;

    public static void load(){
        CTGThree = new Planet("GradeThree", mindustry.content.Planets.sun, 1f, 3){{
            generator = new CTSerpuloPlanetGenerator();
            meshLoader = () -> new HexMesh(this, 6);
            cloudMeshLoader = () -> new MultiMesh(
                    new HexSkyMesh(this, 11, 0.15f, 0.13f, 5, new Color().set(Pal.spore).mul(0.9f).a(0.75f), 2, 0.45f, 0.9f, 0.38f),
                    new HexSkyMesh(this, 1, 0.6f, 0.16f, 5, Color.white.cpy().lerp(Pal.spore, 0.55f).a(0.75f), 2, 0.45f, 1f, 0.41f)
            );
            atmosphereColor = Color.valueOf("9F35FF");
            atmosphereRadIn = 0.05f;
            atmosphereRadOut = 0.2f;
            localizedName = Core.bundle.format("creators.GThree");
            orbitRadius = 40;
            alwaysUnlocked = true;
            clearSectorOnLose = true;//扇区丢失时是否重置地图
            enemyCoreSpawnReplace = false;//攻击图核心变刷怪点
            allowLaunchSchematics = true;//开启发射核心蓝图
            allowLaunchLoadout = true;//开启携带资源发射
            allowSectorInvasion = false;//模拟攻击图入侵
            allowWaveSimulation = true;//模拟后台波次
            lightSrcFrom = 0.2f;
            lightSrcTo = 0.9f;
            lightDstFrom = 0.05f;
            lightDstTo = 1f;
            startSector = 173;
            accessible = true;
            landCloudColor = new Color(1f, 1f, 1f, 0.5f);
            atmosphereColor = new Color(0.3f, 0.7f, 1.0f);


        }};
    }
}



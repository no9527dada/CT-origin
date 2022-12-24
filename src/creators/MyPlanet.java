package creators;
import arc.math.Mathf;
import mindustry.type.Planet;
import mindustry.type.Sector;


public class MyPlanet  extends Planet{


    public MyPlanet(String name, Planet parent, float radius, int sectorSize) {
        super(name, parent, radius, sectorSize);
    }

    public void updateBaseCoverage(){
        for(Sector sector : sectors){
            float sum = 1f;
            for(Sector other : sector.near()){
                if(other.generateEnemyBase){
                    sum += 0.9f;
                }
            }

            if(sector.hasEnemyBase()){
                sum += 0.88f;
            }

            sector.threat = sector.preset == null ? Math.min(sum / 5f, 1.2f) : Mathf.clamp(sector.preset.difficulty / 10f,0,100);
        }
    }
}

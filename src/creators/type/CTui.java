package creators.type;
import arc.ApplicationListener;
import arc.assets.Loadable;
public class CTui implements ApplicationListener, Loadable {
    public final static CTPlanetDialog CTplanet = new CTPlanetDialog();

    public void init(){
        Run(CTplanet);
    }
    private static void Run(CTPlanetDialog cTplanet) {
    }
}

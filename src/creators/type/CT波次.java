package creators.type;

import arc.Events;
import arc.graphics.Color;
import arc.math.Mathf;
import arc.scene.event.Touchable;
import arc.scene.ui.layout.Table;
import arc.util.Log;
import arc.util.Time;
import mindustry.Vars;
import mindustry.entities.Units;
import mindustry.game.EventType;
import mindustry.game.Team;
import mindustry.gen.Groups;
import mindustry.ui.Styles;

import java.util.concurrent.atomic.AtomicReference;

public class CT波次 {

    public boolean 检测器=false;
    public CT波次() {

        Events.on(EventType.WorldLoadEvent.class, (ea) -> {
            if (!检测器) {
                检测器 = true;
                Vars.ui.hudGroup.find("skip").clicked(() -> {

                    float 倍数 = Float.parseFloat(Vars.state.rules.tags.get("增加敌对伤害生命倍数") == null ? "0.2" : Vars.state.rules.tags.get("增加敌对伤害生命倍数"));
                    if (倍数 >= 0) {
                        Vars.state.rules.tags.put("增加敌对伤害生命倍数", String.valueOf(倍数 + 0.2f));
                    }
                    ;
                    Vars.state.rules.teams.get(Team.crux).unitDamageMultiplier = 倍数;
                    Vars.state.rules.teams.get(Team.crux).unitHealthMultiplier = 倍数;

                    信息提醒(5, "敌人攻击血量已增加" + String.format("%.2f",倍数 * 10) + "%", Color.white, Color.red);
              /*      float final倍数 = 倍数;
                    Groups.unit.each((e) -> {
                        if (e.team.equals(Team.crux)) {
                            e.health += e.health * final倍数;
                        }
                    });*/
                });
            }
        });

/*        Events.on(EventType.WorldLoadEvent.class, (ea) -> {

            Vars.ui.hudGroup.find("skip").clicked(()->{

                float 倍数 = Float.parseFloat(Vars.state.rules.tags.get("增加敌对伤害生命倍数") == null ? "0.1" : Vars.state.rules.tags.get("增加敌对伤害生命倍数"));
                if (倍数 >= 0){
                    Vars.state.rules.tags.put("增加敌对伤害生命倍数", String.valueOf(倍数 += 0.1f));
                };
                Vars.state.rules.teams.get(Team.crux).unitDamageMultiplier = 倍数;
                Vars.state.rules.teams.get(Team.crux).unitHealthMultiplier = 倍数;

                信息提醒(3,"敌方攻击血量已增加" + String.format("%.2f", Vars.state.rules.teams.get(Team.crux).unitHealthMultiplier)+ "%",Color.cyan,Color.cyan);
               float final倍数 = 倍数;
                Groups.unit.each((e) ->{
                    if (e.team.equals(Team.crux)){
                        e.health += e.health * final倍数;
                    }
                });
            });
        });*/

/*        Events.on(EventType.WorldLoadEvent.class, (ea) -> {

            Vars.ui.hudGroup.find("skip").clicked(()->{
                //
                Vars.state.rules.teams.get(Team.crux).unitDamageMultiplier += 0.2f;
                Vars.state.rules.teams.get(Team.crux).unitHealthMultiplier += 0.2f;
                信息提醒(3,"敌方攻击血量已增加" + Vars.state.rules.teams.get(Team.crux).unitHealthMultiplier+ "%",Color.cyan,Color.cyan);
            });
        });*/


    }
    private void 信息提醒(float sec, String msg, Color color, Color color2) {
        sec *= 60.0F;
        AtomicReference<Float> lifeTime2 = new AtomicReference(sec);
        Table tab = new Table();
        tab.setFillParent(true);
        Table tabl = new Table();
        tabl.collapser((top) -> {
            top.background(Styles.black6).add(msg).pad(8.0F).update((label) -> {
                label.color.set(color).lerp(color2, Mathf.absin(Time.time, 4.0F, 2.0F));
            });
        }, true, () -> {
            if (Vars.state.isPaused()) {
                return false;
            } else if (Vars.state.isMenu()) {
                return false;
            } else {
                lifeTime2.updateAndGet((v) -> {
                    return v - Time.delta;
                });
                return (Float)lifeTime2.get() > 0.0F;
            }
        }).touchable(Touchable.disabled).fillX().row();
        tab.center().bottom().visibility = () -> {
            return Vars.ui.hudfrag.shown;
        };
        tab.marginBottom(350.0F);
        tab.add(tabl);
        Vars.ui.hudGroup.addChild(tab);
    }



}
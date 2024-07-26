package creators.world.block;

import arc.Core;
import arc.math.Angles;
import arc.util.Time;
import mindustry.content.Fx;
import mindustry.entities.Effect;
import mindustry.entities.Units;
import mindustry.entities.abilities.Ability;
import mindustry.game.Team;
import mindustry.gen.Unit;
import mindustry.graphics.Pal;
import mindustry.type.StatusEffect;
//灭世神的暴走状态
public class MieShistatu {

    public static StatusEffect fury;
    public static void load() {

        fury = new StatusEffect("fury") {
            {
              //  color = Pal.lightishGray;
                damageMultiplier = 1.3F;//伤害倍率
                reloadMultiplier = 1.7f;//射击速度
                damage = -90000000 / 60f/3;
                effectChance = 1F;
                effect = Fx.overclocked;
                color = Pal.accent;
            }
        };
    }

    public static class CTStatusFieldAbility extends Ability {
        public StatusEffect effect;
        public float duration = 60.0F;
        public float reload = 100.0F;
        public float range = 20.0F;
        public boolean onShoot = false;
        public Effect applyEffect;
        public Effect activeEffect;
        public float effectX;
        public float effectY;
        public boolean parentizeEffects;
        public boolean effectSizeParam;
        protected float timer;

        CTStatusFieldAbility() {
            applyEffect = Fx.none;
            activeEffect = Fx.none;
            effectSizeParam = true;
        }

        public CTStatusFieldAbility(StatusEffect 状态, float 持续时间, float CD, float 范围) {
            applyEffect = Fx.none;
            activeEffect = Fx.none;
            effectSizeParam = true;
            duration = 持续时间;
            reload = CD;
            range = 范围;
            effect = 状态;
        }

        public String localized() {
            return Core.bundle.format("ability.CTstatusfield", new Object[]{this.effect.emoji()});
        }

        public void update(Unit unit) {
            this.timer += Time.delta;
            if (this.timer >= this.reload && (!this.onShoot || unit.isShooting)) {
                Units.nearby(unit.team, unit.x, unit.y, this.range, (other) -> {
                    other.apply(this.effect, this.duration);
                    this.applyEffect.at(other, this.parentizeEffects);
                });
                float x = unit.x + Angles.trnsx(unit.rotation, this.effectY, this.effectX);
                float y = unit.y + Angles.trnsy(unit.rotation, this.effectY, this.effectX);
                this.activeEffect.at(x, y, this.effectSizeParam ? this.range : unit.rotation, this.parentizeEffects ? unit : null);
                this.timer = 0.0F;
            }

        };
}}

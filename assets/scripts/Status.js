
StatusEffects.boss.healthMultiplier = 1.13
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const DrawS = require('BlocksLibes/DrawS');
//离子液
exports.ionBurningEffect1 = (() => {
    const fxIonBurning = new Effect(35, cons(e => {
        Draw.color(Color.valueOf("ff0000"));
        Lines.stroke(0.3 + e.fout() * 0.5);
        Angles.randLenVectors(e.id, 5, e.fin() * 22, new Floatc2({
            get: (x, y) => {
                var ang = Mathf.angle(x, y);
                Lines.lineAngle(e.x + x, e.y + y, ang, e.fin() * 0.5 + 1);
            }
        }));
    }));
    const v = new JavaAdapter(StatusEffect, {
    }, "ion-burning");
    v.color = Color.valueOf("ff0000");
    v.damage = 0.6;
    v.transitionDamage = 7;
    v.healthMultiplier = 0.5;//血量倍率
    v.damageMultiplier = 0.8;//攻击倍率
    v.effect = fxIonBurning;
    v.init(run(() => {
        v.opposite(StatusEffects.wet, StatusEffects.freezing);
        v.affinity(StatusEffects.burning, (unit, result, time) => {

        });
    }));

    return v;
})();

var effectL = new StatusEffect("ZT3");
effectL.color = Color.valueOf("ffffff");
effectL.damage = 1.6666667
effectL.reloadMultiplier = 0;//射击速度
//effectL.effect = FxL;
effectL.effect = Fx.bubble;
exports.effectL=effectL
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
exports.burning2 = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "burning2");
    v.damage = 20 / 60
    v.transitionDamage = 4;
    v.init(run(() => {
        v.opposite(StatusEffects.wet, StatusEffects.freezing);
        v.affinity(StatusEffects.melting, (unit, result, time) => {
        });
    }));
    return v;
})();

exports.burning3 = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "burning3");
    v.damage = 32 / 60
    v.transitionDamage = 4;
    v.init(run(() => {
        v.affinity(exports.burning2, (unit, result, time) => {
        });
    }));
    return v;
})();
exports.burning4 = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "burning4");
    v.damage = 55 / 60
    v.transitionDamage = 5;
    v.init(run(() => {
        v.affinity(exports.burning3, (unit, result, time) => {
        });
    }));
    return v;
})();

exports.zhenhan = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "zhenhan");
    v.speedMultiplier = 0.2;//移速
    return v;
})();
exports.accelerate = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "accelerate");
    v.speedMultiplier = 3;//移速
    v.effect =  new Effect(38, cons(e => {
        const radius = 5 * 8 * 1.25;
        const BLUE = Color.valueOf("#3ebdfc");
        Draw.color(BLUE);
        Angles.randLenVectors(e.id, 1, radius * e.fout(), 0, 360, new Floatc2({
            get: (x, y) => {
                var angle = Angles.angle(0, 0, x, y);
                var trnsx = Angles.trnsx(angle, 4);
                var trnsy = Angles.trnsy(angle, 4);
                var trnsx2 = Angles.trnsx(angle, 8);
                var trnsy2 = Angles.trnsy(angle, 8);
                Fill.circle(
                    e.x + trnsx + x + trnsx2 * e.fout(),
                    e.y + trnsy + y + trnsy2 * e.fout(),
                    e.fslope() * 0.8
                );
            }
        }));
    }));
    return v;
})();

exports.qiege = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "qiege");
    v.damage = 200 / 60;
    //v.effect = DrawS.shitassDeathEffect
    return v;
})();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//弱酸
exports.suanEffect = (() => {
    var lifetime = 120;//持续时间
    const fxsuan = new Effect(lifetime, cons(e => {
        Draw.color(Color.valueOf("005e13"));
        Fill.square(e.x, e.y, e.fslope() * 2, 45);
    }));
    const v = new JavaAdapter(StatusEffect, {
    }, "suan-buff");
    v.color = Color.valueOf("005e13");
    v.damage = 0.1;
    v.statusDuration = 120
    v.transitionDamage = 18;
    v.effect = fxsuan;
    v.init(run(() => {
        v.affinity(StatusEffects.tarred, ((unit, result, time) => {

            Fx.burning.at(unit.x + Mathf.range(unit.bounds() / 2), unit.y + Mathf.range(unit.bounds() / 2));
            result.set(burning, Math.min(time + result.time, 300));
        }));
    }));
    return v;
})();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//强酸
exports.suan2Effect = (() => {
    var lifetime = 180;//持续时间
    const fxsuan2 = new Effect(lifetime, cons(e => {
        Draw.color(Color.valueOf("aefe5e"));
        Fill.square(e.x, e.y, e.fslope() * 2, 45);
    }));
    const v = new JavaAdapter(StatusEffect, {
    }, "suan2-buff");
    v.color = Color.valueOf("aefe5e");
    v.damage = 0.6;
    v.speedMultiplier = 0.3;
    v.statusDuration = 120
    v.transitionDamage = 18;
    v.effect = fxsuan2;
    v.init(run(() => {
        v.affinity(StatusEffects.tarred, ((unit, result, time) => {

            Fx.burning.at(unit.x + Mathf.range(unit.bounds() / 2), unit.y + Mathf.range(unit.bounds() / 2));
            result.set(burning, Math.min(time + result.time, 300));
        }));
    }));
    return v;
})();
exports.superBoss = (() => {//超级BOSS
    var D = new Effect(20, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 50, (x, y) => {
            Draw.color(Color.valueOf("e8d123"), e.color, e.fin());
            Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 450);
        });
    });
    const v = new JavaAdapter(StatusEffect, {
    }, "superBoss");
    v.color = Team.crux.color;
    //v.permanent = true;//状态永久持续
    v.statusDuration = 300;//状态持续时间
    v.healthMultiplier = 2.2;//血量倍率
    v.damageMultiplier = 1.4;//攻击倍率
    v.speedMultiplier = 0.5;//移速
    v.damageMultiplier = 1.4;//伤害倍率
    v.damage = -1; //负数为治疗
    v.reloadMultiplier = 1.25;//射击速度
    v.effect = D;
    return v;
})();
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const steam = new Effect(35, cons(e => {
    Draw.color(Color.valueOf("3769f6"));

    Angles.randLenVectors(e.id, 2, 2 + e.fin() * 7, (x, y) => {
        Fill.circle(e.x + x, e.y + y, 0.2 + e.fslope() * 1.5);
    });
}));
const speedUp = extend(StatusEffect, "speedUp", {
    /*init(){
        this.opposite(speedDown);
    },*/
});
speedUp.buildDamageMultiplier = 2;
speedUp.damageMultiplier = 2.5;
speedUp.reloadMultiplier = 1.5;
speedUp.effect = steam;
speedUp.statusDuration = 8;//状态持续时间
exports.speedUp = speedUp;

const speedDown = extend(StatusEffect, "speedDown", {
    /*init(){
        this.opposite(speedUp);
    },*/
});
speedDown.damageMultiplier = 0.5;
speedDown.reloadMultiplier = 0.5;
speedDown.effect = Fx.steam;
exports.speedDown = speedDown;

exports.burningS = (() => {
    const v = new JavaAdapter(StatusEffect, {}, "superBurning-buff");
    v.speedMultiplier = 0.8;
    v.damage = 0.5;
    v.effect = Fx.melting;
    v.init(run(() => {
        v.opposite(StatusEffects.wet, StatusEffects.freezing/* exports.timeFreezingEffect */);
    }));
    return v;
})();

exports.huangxue = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "huangxue");
    v.color = Color.valueOf("ff0000");
    v.damage = -0.8;
    v.healthMultiplier = 0.5;//血量倍率
    return v;
})();

exports.baiwu = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "baiwu");
    v.color = Color.valueOf("ff0000");
    v.damage = 15 / 60;
    v.healthMultiplier = 1.4;//血量倍率
    return v;
})();

exports.fengsha = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "fengshabuff");
    v.color = Color.valueOf("ff0000");
    v.speedMultiplier = 0.75;//移速
    // v.init(run(() => {
    //     v.opposite(exports.cure);
    // }));
    return v;
})();

exports.pilishan = (() => {
    const v = new JavaAdapter(StatusEffect, {
    }, "pilishan");
    v.healthMultiplier = 0.5;//血量倍率
    v.init(run(() => {
        v.opposite(exports.ionBurningEffect1);
    }));
    return v;
})();

const cure = extend(StatusEffect, "cure", {});
cure.damage = -4;
cure.effect = Fx.heal;
/* cure.init(run(() => {
    cure.opposite(exports.baiwu, exports.fengsha, exports.huangxue, exports.suanEffect,);
})); */
exports.cure = cure;


const FxX = new Effect(40, e => {
    Draw.color(Color.valueOf("a775f6"));
    Angles.randLenVectors(e.id, 2, 1 + e.fin() * 2, (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fout() * 1.2);
    });
});
const effectX = new StatusEffect("ZT2");
effectX.color = Color.valueOf("ffffff");
effectX.speedMultiplier = 0;//移动速度
effectX.damage = 0
effectX.reloadMultiplier = 0.5;//射击速度
effectX.effect = FxX;
exports.effectX = effectX;




/*
源码 方便查询：
public class StatusEffects implements ContentList{
    public static StatusEffect none, burning, freezing, unmoving, slow, wet, muddy, melting, sapped, tarred, overdrive, overclock, shielded, shocked, blasted, corroded, boss, sporeSlowed, disarmed, electrified, invincible;

    @Override
    public void load(){

        none = new StatusEffect("none"); 无

        burning = new StatusEffect("burning"){{------燃烧
            color = Color.valueOf("ffc455");
            damage = 0.167f;
            effect = Fx.burning;
            transitionDamage = 8f;

            init(() -> {
                opposite(wet, freezing);
                affinity(tarred, (unit, result, time) -> {
                    
                    Fx.burning.at(unit.x + Mathf.range(unit.bounds() / 2f), unit.y + Mathf.range(unit.bounds() / 2f));
                    result.set(burning, Math.min(time + result.time, 300f));
                });
            });
        }};

        freezing = new StatusEffect("freezing"){{-------冻结
            color = Color.valueOf("6ecdec");
            speedMultiplier = 0.6f;
            healthMultiplier = 0.8f;
            effect = Fx.freezing;
            transitionDamage = 18f;

            init(() -> {
                opposite(melting, burning);

                affinity(blasted, (unit, result, time) -> {
                    
                });
            });
        }};

        unmoving = new StatusEffect("unmoving"){{------定身
            color = Pal.gray;
            speedMultiplier = 0.001f;
        }};

        slow = new StatusEffect("slow"){{-----潮湿
            color = Pal.lightishGray;
            speedMultiplier = 0.4f;
        }};

        wet = new StatusEffect("wet"){{-----融化
            color = Color.royal;
            speedMultiplier = 0.94f;
            effect = Fx.wet;
            effectChance = 0.09f;
            transitionDamage = 14;

            init(() -> {
                affinity(shocked, (unit, result, time) -> {
                    
                    if(unit.team == state.rules.waveTeam){
                        Events.fire(Trigger.shock);
                    }
                });
                opposite(burning, melting);
            });
        }};
    	
        muddy = new StatusEffect("muddy"){{----------
            color = Color.valueOf("46382a");
            speedMultiplier = 0.94f;
            effect = Fx.muddy;
            effectChance = 0.09f;
            show = false;
        }};

        melting = new StatusEffect("melting"){{------
            color = Color.valueOf("ffa166");
            speedMultiplier = 0.8f;
            healthMultiplier = 0.8f;
            damage = 0.3f;
            effect = Fx.melting;

            init(() -> {
                opposite(wet, freezing);
                affinity(tarred, (unit, result, time) -> {
                    unit.damagePierce(8f);
                    Fx.burning.at(unit.x + Mathf.range(unit.bounds() / 2f), unit.y + Mathf.range(unit.bounds() / 2f));
                    result.set(melting, Math.min(time + result.time, 200f));
                });
            });
        }};

        sapped = new StatusEffect("sapped"){{ ----------
            color = Pal.sap;
            speedMultiplier = 0.7f;
            healthMultiplier = 0.8f;
            effect = Fx.sapped;
            effectChance = 0.1f;
        }};

        electrified = new StatusEffect("electrified"){{----------
            color = Pal.heal;
            speedMultiplier = 0.7f;
            reloadMultiplier = 0.6f;
            effect = Fx.electrified;
            effectChance = 0.1f;
        }};

        sporeSlowed = new StatusEffect("spore-slowed"){{------
            color = Pal.spore;
            speedMultiplier = 0.8f;
            effect = Fx.sapped;
            effectChance = 0.04f;
        }};

        tarred = new StatusEffect("tarred"){{--------
            color = Color.valueOf("313131");
            speedMultiplier = 0.6f;
            effect = Fx.oily;

            init(() -> {
                affinity(melting, (unit, result, time) -> result.set(melting, result.time + time));
                affinity(burning, (unit, result, time) -> result.set(burning, result.time + time));
            });
        }};

        overdrive = new StatusEffect("overdrive"){{
            color = Pal.accent;
            healthMultiplier = 0.95f;
            speedMultiplier = 1.15f;
            damageMultiplier = 1.4f;
            damage = -0.01f;
            effect = Fx.overdriven;
            permanent = true;
        }};

        overclock = new StatusEffect("overclock"){{
            color = Pal.accent;
            speedMultiplier = 1.15f;
            damageMultiplier = 1.15f;
            reloadMultiplier = 1.25f;
            effectChance = 0.07f;
            effect = Fx.overclocked;
        }};

        shielded = new StatusEffect("shielded"){{
            color = Pal.accent;
            healthMultiplier = 3f;
        }};

        boss = new StatusEffect("boss"){{----boss
            color = Team.crux.color;
            permanent = true;
            damageMultiplier = 1.3f;
            healthMultiplier = 1.5f;
        }};

        shocked = new StatusEffect("shocked"){{
            color = Pal.lancerLaser;
            reactive = true;
        }};

        blasted = new StatusEffect("blasted"){{
            color = Color.valueOf("ff795e");
            reactive = true;
        }};

        corroded = new StatusEffect("corroded"){{
            color = Pal.plastanium;
            damage = 0.1f;
        }};

        disarmed = new StatusEffect("disarmed"){{
            color = Color.valueOf("e9ead3");
            disarm = true;
        }};

        invincible = new StatusEffect("invincible"){{
            healthMultiplier = Float.POSITIVE_INFINITY;
        }};
    }
}

*/


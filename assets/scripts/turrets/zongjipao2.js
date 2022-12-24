//---------------------@滞人编写

function percent(x, y, tx, ty, radius) {
    var dst = Mathf.dst(x, y, tx, ty);
    var falloff = 0.4;
    var scaled = Mathf.lerp(1 - dst / radius, 1, falloff);
    return scaled;
}
var fxHole2Bomb = new Effect(8, 80, cons(e => {
    e.scaled(7, cons(i => {
        Lines.stroke(3 * i.fout());
        Lines.circle(e.x, e.y, 3 + i.fin() * 60);
    }));

    Draw.color(Color.orange);

    Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), new Floatc2({get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fout() * 5 + 0.5);
        Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 2);
    }}));


   // Draw.color(Color. Color.valueOf("515151"), Color.gray, Color.gray, e.fin());
    Draw.color(Color.orange, Color.gray, Color.gray, e.fin());
    Lines.stroke(1.5 * e.fout());

    Angles.randLenVectors(e.id + 1, 8, 1 + 46 * e.finpow(), new Floatc2({get: (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 6);
    }}));
}));
var fxHole2 = new Effect(70, 80, cons(e => {
    Draw.color(Color.orange, Color.gray, e.fout());
    Draw.alpha(0.5 * e.fin() + 0.5);
    Lines.stroke(e.fin() * 3);
    Lines.circle(e.x, e.y, Mathf.sin(e.fout()) * 60);

    Draw.color(Color.orange);
    Draw.alpha(0.8 * e.fout() + 0.2);
    Fill.circle(e.x, e.y, (1 - Math.abs(0.3 - e.fin())) * 6)
    Draw.alpha(Mathf.clamp(9 * e.fout(), 0, 1));
    Fill.circle(e.x, e.y, e.fout() * 1 + 5)
}));
var fxorangeTrail = new Effect(30, cons(e => {
    for(var i = 0; i < 2; i++){
        Draw.color(i == 0 ? Pal.darkerMetal : Color.orange);

        var m = i == 0 ? 1 : 0.5;

        var rot = e.rotation + 180;
        var w = 15 * e.fout() * m;
        Drawf.tri(e.x, e.y, w, (30 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
        Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
    }
}));


var fsb4 = new JavaAdapter(PointBulletType, {
    despawned(b) {
        if (b) {
            var counter = { count: 60 };
            var x = b.x;
            var y = b.y;
            var team = b.team;
            var rect = new Rect();
            rect.setSize(this.splashDamageRadius * 2).setCenter(x, y);
            var con = cons(unit => {
                if (unit.team == team || !unit.within(x, y, this.splashDamageRadius)) {
                    return;
                }
                var p = percent(x, y, unit.getX(), unit.getY(), this.splashDamageRadius);
                var amount = this.splashDamage / 60 * 1.5 * p
                unit.damage(amount);

                // drag
                unit.impulse(Tmp.v3.set(unit).sub(x, y).nor().scl(this.knockback * p * 80));
                unit.vel.limit(3);
            });

            var poo = run(() => {
                if (counter.count > 0) {
                    Units.nearbyEnemies(team, rect, con);
                    Timer.schedule(poo, 0);
                }
                counter.count--;
            });
            poo.run();
            // Timer.schedule(run(() => Units.nearbyEnemies(b.team, rect, con)), 0, 0.02, 40);
            this.super$despawned(b);
        }
    }
});
fsb4.shootEffect = Fx.instShoot;
fsb4.hitEffect = fxHole2Bomb;
fsb4.smokeEffect = Fx.smokeCloud;
fsb4.trailEffect = fxorangeTrail;
fsb4.despawnEffect = fxHole2;
fsb4.trailSpacing = 20;
fsb4.damage = 50;
fsb4.tileDamageMultiplier = 0.3;
fsb4.buildingDamageMultiplier =2.5;//对建筑的伤害
fsb4.speed = 500;
fsb4.hitShake = 8;
fsb4.ammoMultiplier = 1;
fsb4.reloadMultiplier = 1.8;//装弹速度
fsb4.hitSize = 100;
fsb4.splashDamageRadius = 160;
fsb4.splashDamage = 3500;
fsb4.knockback = 2.5;

var fxHole1Bomb = new Effect(8, 80, cons(e => {
    e.scaled(7, cons(i => {
        Lines.stroke(3 * i.fout());
        Lines.circle(e.x, e.y, 3 + i.fin() * 60);
    }));

    Draw.color(Color.violet);

    Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), new Floatc2({get: (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fout() * 5 + 0.5);
        Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 2);
    }}));

    Draw.color(Color.violet, Color.gray, Color.gray, e.fin());
    Lines.stroke(1.5 * e.fout());

    Angles.randLenVectors(e.id + 1, 8, 1 + 46 * e.finpow(), new Floatc2({get: (x, y) => {
        Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 6);
    }}));
}));
var fxHole1 = new Effect(70, 80, cons(e => {
    Draw.color(Color.violet, Color.gray, e.fout());
    Draw.alpha(0.5 * e.fin() + 0.5);
    Lines.stroke(e.fin() * 3);
    Lines.circle(e.x, e.y, Mathf.sin(e.fout()) * 60);

    Draw.color(Color.violet);
    Draw.alpha(0.8 * e.fout() + 0.2);
    Fill.circle(e.x, e.y, (1 - Math.abs(0.3 - e.fin())) * 6)
    Draw.alpha(Mathf.clamp(9 * e.fout(), 0, 1));
    Fill.circle(e.x, e.y, e.fout() * 1 + 5)
}));
var fxvioletTrail1 = new Effect(30, cons(e => {
    for(var i = 0; i < 2; i++){
        Draw.color(i == 0 ? Pal.darkerMetal : Color.violet);

        var m = i == 0 ? 1 : 0.5;

        var rot = e.rotation + 180;
        var w = 15 * e.fout() * m;
        Drawf.tri(e.x, e.y, w, (30 + Mathf.randomSeedRange(e.id, 15)) * m, rot);
        Drawf.tri(e.x, e.y, w, 10 * m, rot + 180);
    }
}));
var fsb3 = new JavaAdapter(PointBulletType, {
    despawned(b) {
        if (b) {
            var counter = { count: 60 };
            var x = b.x;
            var y = b.y;
            var team = b.team;
            var rect = new Rect();
            rect.setSize(this.splashDamageRadius * 2).setCenter(x, y);
            var con = cons(unit => {
                if (unit.team == team || !unit.within(x, y, this.splashDamageRadius)) {
                    return;
                }
                var p = percent(x, y, unit.getX(), unit.getY(), this.splashDamageRadius);
                var amount = this.splashDamage / 60 * 1.5 * p
                unit.damage(amount);

                // drag
                unit.impulse(Tmp.v3.set(unit).sub(x, y).nor().scl(this.knockback * p * 80));
                unit.vel.limit(3);
            });

            var poo = run(() => {
                if (counter.count > 0) {
                    Units.nearbyEnemies(team, rect, con);
                    Timer.schedule(poo, 0);
                }
                counter.count--;
            });
            poo.run();
            // Timer.schedule(run(() => Units.nearbyEnemies(b.team, rect, con)), 0, 0.02, 40);
            this.super$despawned(b);
        }
    }
});


fsb3.shootEffect = Fx.instShoot;
fsb3.hitEffect = fxHole1Bomb;
fsb3.smokeEffect = Fx.smokeCloud;
fsb3.trailEffect = fxvioletTrail1;
fsb3.despawnEffect = fxHole1;
fsb3.trailSpacing = 20;
fsb3.damage = 80;
fsb3.tileDamageMultiplier = 0.3;
fsb3.buildingDamageMultiplier =2.5;//对建筑的伤害
fsb3.speed = 500;
fsb3.hitShake = 8;
fsb3.ammoMultiplier = 1;
fsb3.ammoPerShot = 2;
fsb3.reloadMultiplier = 2.2;
fsb3.hitSize = 100;
fsb3.splashDamageRadius = 80;
fsb3.splashDamage = 1800;
fsb3.knockback = 7;
const DGA = CTItem
const rainbowRegions = [];
//Blocks.xipao.targetInterval = 0;
var xipao2 = extend(ItemTurret, 'xipao2', {
    load() {
        this.super$load();
        for (var i = 0; i < 3; i++) {
            rainbowRegions[i] = Core.atlas.find("creators-xipao2-w-" + (i + 1));
        }
    },
})
xipao2.buildType = prov(() => {
    const tif = 3;//贴图间的延迟变色速度，越大越不同
    const tid = 2;//贴图变色速度，越大越快
    const tr2 = new Vec2();
    return new JavaAdapter(ItemTurret.ItemTurretBuild, {
        draw(){
            this.super$draw();
           // tr2.trns(this.rotation, -this.recoil);
            Draw.blend(Blending.additive);
            for(var h = 0; h < 3; h++){
                Draw.color(Color.valueOf("ff0000").shiftHue((Time.time * tid) + (h * (360 / tif))));
                Draw.rect(rainbowRegions[h], this.x,this.y, this.rotation - 90);
            }
            Draw.blend();
            Draw.color();
        },

    }, xipao2);
});
xipao2.ammoTypes.put(DGA.weijing4, fsb4)
xipao2.ammoTypes.put(DGA.weijing3, fsb3)
xipao2.health = 10800;
xipao2.size = 6;
//xipao2.ammoPerShot = 2;
xipao2.targetAir = true;
xipao2.targetGround = true;
xipao2.coolantMultiplier = 1.5;
xipao2.itemCapacity = 30;
xipao2.reload = 600;
xipao2.range = 90*8;
xipao2.ammoPerShot=2;//每发消耗的资源
xipao2.liquidCapacity = 15;
xipao2.shootSound = Sounds.railgun;
xipao2.consumePower(533.3334);
xipao2.consume(new ConsumeCoolant(9/60));
//xipao2.consumeLiquid(DGA.qiangxiaolengqueye, 0.025);
xipao2.requirements = ItemStack.with(
    DGA.jingliantai, 2600,
    DGA.jinhuiboli, 400,
    DGA.guijingti, 4300,
    DGA.monengjing1, 550,
    DGA.weijing3, 30,
    DGA.weijing4, 100,
);
xipao2.buildVisibility = BuildVisibility.shown;
xipao2.category = Category.turret;
var haloY = -15,circleY=-25,circleStroke = 1.6,circleRad = 11,
haloRotSpeed = 1,circleRotSpeed = 3.5,
circleProgress = DrawPart.PartProgress.warmup.delay(0.9),
haloProgress = DrawPart.PartProgress.warmup.delay(0.5),
LColor = Color.valueOf("4e7df8");
xipao2.restitution = 120;//
xipao2.drawer = ((() => {
    const b = new DrawTurret("") //炮塔底座    
    b.parts.addAll(
        (() => {
            const c = new RegionPart("");
            return c;
        })(),

        (() => {
            const c = new ShapePart();
           c.progress = circleProgress;
           c.color = LColor;
           c.circle = true;
           c.hollow = true;
           c.stroke = 0;
           c.strokeTo = circleStroke;
           c.radius = circleRad;
           c.layer = Layer.effect;
           c.y = circleY;
            return c;
        })(),
    
        (() => {
            const c = new ShapePart();
           c.progress = circleProgress;
           c.rotateSpeed = -circleRotSpeed;
           c.color = LColor;
           c.sides = 4;
           c.hollow = true;
           c.stroke = 0;
           c.strokeTo = circleStroke;
           c.radius = circleRad - 1;
           c.layer = Layer.effect;
           c.y = circleY;
            return c;
        })(),
    
        (() => {
            const c = new ShapePart();
           c.progress = circleProgress;
           c.rotateSpeed = -circleRotSpeed;
           c.color = LColor;
           c.sides = 4;
           c.hollow = true;
           c.stroke = 0;
           c.strokeTo = circleStroke;
           c.radius = circleRad - 1;
           c.layer = Layer.effect;
           c.y = circleY;
            return c;
        })(),
    
        (() => {
            const c = new ShapePart();
           c.progress = circleProgress;
           c.rotateSpeed = -circleRotSpeed/2;
           c.color = LColor;
           c.sides = 4;
           c.hollow = true;
           c.stroke = 0;
           c.strokeTo = 2;
           c.radius = 3;
           c.layer = Layer.effect;
           c.y = circleY;
            return c;
        })(),
    

        //-----------------------
    )
    return b;
})());
exports.xipao2 = xipao2;
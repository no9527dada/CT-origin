// const 角度 = 8
// const 火焰粒子大小 = 0.65
// const 火焰粒子移速 = 32
// const 火焰粒子密度 = 200
// const 火焰喷射长度 = 230
// const FXpen = new Effect(火焰粒子移速, 80,cons( e => {
//     Draw.color(Pal.lightFlame, Pal.darkFlame, Color.gray, e.fin());
//     Angles.randLenVectors(e.id, 火焰粒子密度, e.finpow() * 火焰喷射长度, e.rotation, 角度, (x, y) => {
//         Fill.circle(e.x + x, e.y + y, 火焰粒子大小 + e.fout() * 1.5);
//     });
// }));

//-----------------------------------------------------------------------
/* const FXpen = new Effect(32, 80, cons(e => {
    Draw.color(Pal.lightFlame, Pal.darkFlame, Color.gray, e.fin());
    Angles.randLenVectors(e.id, 150, e.finpow() * 230, e.rotation, 8, (x, y) => {
        Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
    });
}));

const FXpen2 = new Effect(32, 80, cons(e => {
    Draw.color(Color.valueOf("783dff"), Color.valueOf("bc89ff"), Color.gray, e.fin());
    Angles.randLenVectors(e.id, 150, e.finpow() * 230, e.rotation, 8, (x, y) => {
        Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
    });
}));
 */
const { ionBurningEffect1 ,burning2,burning3,burning4} = require('Status');
const lib = require('lib');
const items = CTItem
const {
    //, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
      molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou,dabaozhiwujingyou,
    dabaoJHLiquid,dabaojinglianlio,dabaomoli, dabaozhiwu, dabaojingmoli, 
    dabaoyedan,zhiwujingyou,jinglianlio,
    JHhejinLiquid,JHhejin,gutaiwanqin,taihejin,
} = items;

/*
* @author <guiY>
* @readme <效果可以在子弹里定义子弹射击效果，用这个方程就行，具体看下面>
*/
//const length = 100;

function flameShoot(colorBegin, colorTo, colorEnd, length, cone, number, lifetime) {
    return new Effect(lifetime, 80, cons(e => {
        Draw.color(colorBegin, colorTo, colorEnd, e.fin());
        Angles.randLenVectors(e.id, number, e.finpow() * length, e.rotation, cone, (x, y) => {
            Fill.circle(e.x + x, e.y + y, 0.65 + e.fout() * 1.5);
        });
    }));
}

//flameBullet
const flame = (() => {
    return (object) => {
        const options = Object.assign({
            //not in bullet
            flameLength: 190,//真实火焰范围
            flameCone: 10,//火焰角度
            particleNumber: 150,//粒子效果数量，原来是150
            //flameColors▼
            colorBegin: Pal.lightFlame,
            colorTo: Pal.darkFlame,
            colorEnd: Color.gray,
            //in bullet
            ammoMultiplier: 3,
            lifetime: 20,
            hitEffect: Fx.none,
            smokeEffect: Fx.none,
            trailEffect: Fx.none,
            despawnEffect: Fx.none,
            damage: 20,
            speed: 0,
            pierce: true,
            collidesAir: false,
            absorbable: true,
            hittable: false,
            keepVelocity: false,
            status: StatusEffects.burning,
            statusDuration: 60 * 4,
        }, object);
        options.shootEffect = flameShoot(options.colorBegin, options.colorTo, options.colorEnd, options.flameLength / 0.75, options.flameCone, options.particleNumber, options.lifetime + 10);
        //Define a bullet▼
        const f = extend(BulletType, {
            //draw hitsize
            hit(b) {
                if (this.absorbable && b.absorbed) return;
                //let's step by step
                //unit▼
                Units.nearbyEnemies(b.team, b.x, b.y, options.flameLength, cons(unit => {
                    if (Angles.within(b.rotation(), b.angleTo(unit), options.flameCone) && unit.checkTarget(this.collidesAir, this.collidesGround)) {
                        Fx.hitFlameSmall.at(unit);
                        unit.damage(this.damage * this.ammoMultiplier);
                        unit.apply(this.status, this.statusDuration);
                    }
                }));
                //block▼
                Vars.indexer.allBuildings(b.x, b.y, options.flameLength, cons(other => {
                    if (other.team != b.team && Angles.within(b.rotation(), b.angleTo(other), options.flameCone)) {
                        Fx.hitFlameSmall.at(other);
                        other.damage(this.damage * this.buildingDamageMultiplier * this.ammoMultiplier);
                    }
                }));
            },
        });
        f.ammoMultiplier = options.ammoMultiplier;
        f.lifetime = options.lifetime;
        f.shootEffect = options.shootEffect;
        f.hitEffect = options.hitEffect;
        f.smokeEffect = options.smokeEffect;
        f.trailEffect = options.trailEffect;
        f.despawnEffect = options.despawnEffect;
        f.damage = options.damage;
        f.speed = options.speed;
        f.pierce = options.pierce;
        f.collidesAir = options.collidesAir;
        f.absorbable = options.absorbable;
        f.hittable = options.hittable;
        f.keepVelocity = options.keepVelocity;
        f.status = options.status;
        f.statusDuration = options.statusDuration;
        f.despawnHit = true;
        return f;
    }
})();
const flame2 = (() => {
    return (object) => {
        const options = Object.assign({
            //not in bullet
            flameLength: 190,//真实火焰范围
            flameCone: 10,//火焰角度
            particleNumber: 150,//粒子效果数量，原来是150
            //flameColors▼
            colorBegin: Pal.lightFlame,
            colorTo: Pal.darkFlame,
            colorEnd: Color.gray,
            //in bullet
            ammoMultiplier: 3,
            lifetime: 20,
            hitEffect: Fx.none,
            smokeEffect: Fx.none,
            trailEffect: Fx.none,
            despawnEffect: Fx.none,
            damage: 20,
            speed: 0,
            pierce: true,
            collidesAir: false,
            absorbable: true,
            hittable: false,
            keepVelocity: false,
            status: ionBurningEffect1,
            statusDuration: 60 * 4,
        }, object);
        options.shootEffect = flameShoot(options.colorBegin, options.colorTo, options.colorEnd, options.flameLength / 0.75, options.flameCone, options.particleNumber, options.lifetime + 10);
        //Define a bullet▼
        const f = extend(BulletType, {
            //draw hitsize
            hit(b) {
                if (this.absorbable && b.absorbed) return;
                //let's step by step
                //unit▼
                Units.nearbyEnemies(b.team, b.x, b.y, options.flameLength, cons(unit => {
                    if (Angles.within(b.rotation(), b.angleTo(unit), options.flameCone) && unit.checkTarget(this.collidesAir, this.collidesGround)) {
                        Fx.hitFlameSmall.at(unit);
                        unit.damage(this.damage * this.ammoMultiplier);
                        unit.apply(this.status, this.statusDuration);
                    }
                }));
                //block▼
                Vars.indexer.allBuildings(b.x, b.y, options.flameLength, cons(other => {
                    if (other.team != b.team && Angles.within(b.rotation(), b.angleTo(other), options.flameCone)) {
                        Fx.hitFlameSmall.at(other);
                        other.damage(this.damage * this.buildingDamageMultiplier * this.ammoMultiplier);
                    }
                }));
            },
        });
        f.ammoMultiplier = options.ammoMultiplier;
        f.lifetime = options.lifetime;
        f.shootEffect = options.shootEffect;
        f.hitEffect = options.hitEffect;
        f.smokeEffect = options.smokeEffect;
        f.trailEffect = options.trailEffect;
        f.despawnEffect = options.despawnEffect;
        f.damage = options.damage;
        f.speed = options.speed;
        f.pierce = options.pierce;
        f.collidesAir = options.collidesAir;
        f.absorbable = options.absorbable;
        f.hittable = options.hittable;
        f.keepVelocity = options.keepVelocity;
        f.status = options.status;
        f.statusDuration = options.statusDuration;
        f.despawnHit = true;
        return f;
    }
})();
exports.PenHuo = (() => {
    const v = extend(ItemTurret, "PenHuo", {});//喷火器
    v.health = 2100;
    v.inaccuracy = 0; //精准
    v.size = 3;
    v.targetAir = false; //空
    v.targetGround = true; //地
    v.coolantMultiplier = 0.7; //液体冷却倍率
    v.itemCapacity = 30; //资源容量
    v.reload = 5; //每秒发射数
    v.range = 200;
    v.shootSound = Sounds.flame; //统一射击音效
    v.requirements = ItemStack.with(
        Items.lead, 1120,
        Items.copper, 1260,
        Items.graphite, 120,
        Items.surgeAlloy, 180,
        zuanjing, 50,
    );
    v.buildVisibility = BuildVisibility.shown;
    v.category = Category.turret;
    v.ammoTypes.put(Items.coal, flame({
        ammoMultiplier: 1,
        damage: 16,
    }));
    v.ammoTypes.put(Items.pyratite, flame({
        ammoMultiplier: 2,
        damage: 25,
        status:burning2
    }));
    v.ammoTypes.put(gutaiwanqin, flame({
        ammoMultiplier: 4,
        damage: 40,
        status:burning3
    }));
    v.ammoTypes.put(Items.blastCompound, flame({
        ammoMultiplier: 3,
        damage: 55,
        status:burning4
    }));
    v.ammoTypes.put(juhebaozhawu, flame2({
        flameLength: 220,//真实火焰范围
        flameCone: 12,//火焰角度
        particleNumber: 150,//粒子效果数量，原来是150
        ammoMultiplier: 6,
        damage: 120,
        //status = ionBurningEffect1,
        colorBegin: Color.valueOf("783dff"),
        colorTo: Color.valueOf("bc89ff"),
    }));
    return v;
})();//





//单位武器子弹
/* const PenHuo = extend(ItemTurret, '喷火器', {})//喷火器
PenHuo.ammoTypes.put(Items.copper, mei);
PenHuo.health = 2100;
PenHuo.inaccuracy = 5; //精准
PenHuo.size = 4;
PenHuo.targetAir = true; //空
PenHuo.targetGround = true; //地
PenHuo.coolantMultiplier = 0.7; //液体冷却倍率
PenHuo.itemCapacity = 30; //资源容量
PenHuo.reload = 5; //每秒发射数
PenHuo.range = 200;
PenHuo.shootSound = Sounds.flame; //统一射击音效
PenHuo.requirements = ItemStack.with(
    Items.lead, 1120,
    Items.copper, 1260,
);
PenHuo.buildVisibility = BuildVisibility.shown;
PenHuo.category = Category.turret;
exports.PenHuo = PenHuo;
 */






// exports.PenHuo = (() => {
//     const v = new ItemTurret("喷火器",);
//     v.health = 2100;
//     v.inaccuracy = 5; //精准
//     v.size = 4;
//     v.targetAir = true; //空
//     v.targetGround = true; //地
//     v.coolantMultiplier = 0.7; //液体冷却倍率
//     v.itemCapacity = 30; //资源容量
//     v.reload = 5; //每秒发射数
//     v.range = 200;
//     v.shootSound = Sounds.flame; //统一射击音效
//     v.requirements = ItemStack.with(
//         Items.lead, 1120,
//         Items.copper, 1260,
//     );
//     v.buildVisibility = BuildVisibility.shown;
//     v.category = Category.turret;
//     v.ammoTypes.put(Items.copper, mei);
//     return v;
// })();//


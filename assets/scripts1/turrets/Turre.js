const turret = new JavaAdapter(ItemTurret, {
}, 'fan');

turrett.cooldownTime = 80;
turrett.recoilAmount = 1.5;
turrett.liquidCapacity = 10;
turrett.buildVisibility = BuildVisibility.shown;
turrett.category = Category.turret;
turrett.health = 1800;
turrett.size = 3;
turrett.reload = 30 - 1;
turrett.range = 320;
turrett.rotateSpeed = 15;
turrett.inaccuracy = 2;
turrett.shots = 1;
turrett.burstSpacing = 0;
turrett.xRand = 0;
turrett.requirements = ItemStack.with(
    Items.copper, 200,
    Items.silicon, 130,
    Items.thorium, 110,
);
turrett.ammo(Items.coal, (() => {
    const SPEED = 4;

    const laser1 = new JavaAdapter(ContinuousLaserBulletType, {
    }, 70);
    laser1.colors = [Color.valueOf("ec555555"), Color.valueOf("ec8888aa"), Color.valueOf("ff6c6a"), Color.white];
    laser1.width = 14;
    laser1.largeHit = true;
    laser1.length = 180
    laser1.hitEffect = Fx.hitMeltdown
    laser1.hitColor = Pal.meltdownHit
    laser1.drawSize = 420
    laser1.incendChance = 0.4
    laser1.incendSpread = 5
    laser1.incendAmount = 1

    const laser2 = new JavaAdapter(ContinuousLaserBulletType, {
    }, 40);
    laser2.colors = [Color.valueOf("ec745855"), Color.valueOf("ec7458aa"), Color.valueOf("ff9c5a"), Color.white];
    laser2.width = 9;
    laser2.largeHit = true;
    laser2.length = 90
    laser2.hitEffect = Fx.hitMeltdown
    laser2.hitColor = Pal.meltdownHit
    laser2.drawSize = 420
    laser2.incendChance = 0.4
    laser2.incendSpread = 5
    laser2.incendAmount = 1

    const bt = new JavaAdapter(BasicBulletType, {
        init(b) {
            if (!b) { return; }
            if (!b.data) { b.data = {}; }
            b.data.bullet1 = laser1.create(b, b.x, b.y, 0);
            b.data.bullet2 = laser1.create(b, b.x, b.y, 120);
            b.data.bullet3 = laser1.create(b, b.x, b.y, 240);
            b.data.bullet4 = laser2.create(b, b.x, b.y, 0);
            b.data.bullet5 = laser2.create(b, b.x, b.y, 120);
            b.data.bullet6 = laser2.create(b, b.x, b.y, 240);
            b.data.bulletRot = 0;
            b.data.direction = b.id % 2 == 0;
        },
        update(b) {
            this.super$update(b);
            b.data.bulletRot += SPEED;
            b.data.bullet1.time = 0;
            b.data.bullet2.time = 0;
            b.data.bullet3.time = 0;
            b.data.bullet4.time = 0;
            b.data.bullet5.time = 0;
            b.data.bullet6.time = 0;
            b.data.bullet1.set(b.x, b.y);
            b.data.bullet2.set(b.x, b.y);
            b.data.bullet3.set(b.x, b.y);
            b.data.bullet4.set(b.x, b.y);
            b.data.bullet5.set(b.x, b.y);
            b.data.bullet6.set(b.x, b.y);
            if (b.data.direction) {
                b.data.bullet1.rotation(b.rotation() + b.data.bulletRot);
                b.data.bullet2.rotation(b.rotation() + b.data.bulletRot + 120);
                b.data.bullet3.rotation(b.rotation() + b.data.bulletRot + 240);
                b.data.bullet4.rotation(b.rotation() + b.data.bulletRot + 60);
                b.data.bullet5.rotation(b.rotation() + b.data.bulletRot + 180);
                b.data.bullet6.rotation(b.rotation() + b.data.bulletRot + 300);
            } else {
                b.data.bullet1.rotation(b.rotation() - b.data.bulletRot);
                b.data.bullet2.rotation(b.rotation() - b.data.bulletRot + 120);
                b.data.bullet3.rotation(b.rotation() - b.data.bulletRot + 240);
                b.data.bullet4.rotation(b.rotation() - b.data.bulletRot + 60);
                b.data.bullet5.rotation(b.rotation() - b.data.bulletRot + 180);
                b.data.bullet6.rotation(b.rotation() - b.data.bulletRot + 300);
            }
        },
    });
    bt.sprite = "";
    bt.width = 6;
    bt.height = 6;
    bt.shrinkY = 0;
    bt.shrinkX = 0;
    bt.spin = 0;
    bt.lifetime = 240;
    bt.backColor = Color.valueOf("ffffff00");
    bt.frontColor = Pal.meltdownHit;
    bt.despawnEffect = Fx.none;
    bt.speed = 2.5;
    bt.collides = false;
    bt.reflectable = false;
    bt.absorbable = false;
    return bt;
})())

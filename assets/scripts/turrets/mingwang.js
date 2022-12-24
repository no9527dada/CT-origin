exports.youling2 = (//冥王
    (() => {
        const a = extend(PowerTurret, "youling2", {
            //微晶核心限制
            canPlaceOn(tile, team, rotation) {
                return this.super$canPlaceOn(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
            },
            drawPlace(x, y, rotation, valid) {
                let tile = Vars.world.tile(x, y);
                if (tile == null) return;
                if (!this.canPlaceOn(tile, Vars.player.team(), rotation)) {
                    let missingMsg = dsGlobal.duoQianZhi.getMissing()
                        .toString(", ", block => block.localizedName + block.emoji());
                    this.drawPlaceText(Core.bundle.format("message.creators.weijinghexinxianzhi") + missingMsg, x, y, valid);
                }
            },  
            load() {
                this.super$load();
                for (var q = 0; q < 9; q++) {
                    rainbowRegions[q] = Core.atlas.find("creators-youling22-" + (q + 1));
                }
            },
        });
        a.buildType = prov(() => {
            const tif = 9;//贴图间的延迟变色速度，越大越不同
            const tid = 4;//贴图变色速度，越大越快
            const tr2 = new Vec2();
            return new JavaAdapter(PowerTurret.PowerTurretBuild, {
                draw() {
                    this.super$draw();
                    // tr2.trns(this.rotation, -this.recoil);
                    Draw.blend(Blending.additive);
                    for (var h = 0; h < ti; h++) {
                        Draw.color(F.c("ff0000").shiftHue((Time.time * tid) + (h * (360 / tif))));
                        Draw.rect(rainbowRegions[h],
                            this.x + Angles.trnsx(this.rotation, 0, 0), this.y + Angles.trnsy(this.rotation, 0, 0), this.rotation - 90);
                    }
                    Draw.blend();
                    Draw.color();
                },
            }, a);
        });
        a.size = 5;
        a.shootSound = CreatorsSound.loadSound("youling22");
        a. consumePower(220 / 60);
        a.reload = 150;//130
        a.canOverdrive = true;
        a.liquidCapacity = 10;
        a.health = 4200;
        a.buildCostMultiplier = 0.5;
        a.heatColor = F.c("d98686");
        a.shootEffect = Fx.shootBig;
        a.coolantMultiplier = 77; //液体增强射速倍率
        a.range = 320;
        a.inaccuracy = 0;
        a.rotateSpeed = 6; //旋转速度
        a.chargeTime = 30;
        a.chargeMaxDelay = 300;
        a.recoilAmount = 7;
        a.shootShake = 1;
        a.shootCone = 5;
        a.coolEffect = Fx.steam;
        a.cooldown = 35;
        a.consumeLiquid(zhiwujinghuaye, 6 / 60).update = false;
        a.requirements = ItemStack.with(
            Items.lead, 4500,
            Items.copper, 3200,
            zuanjing, 1800,
            guijingti, 2500,
            shimoxi, 180,
            weijing2, 15,
            molishi, 400,
            jin, 1300,
            weijing1, 150
        );
        a.shootType = (
            (() => {
                const b = new JavaAdapter(BasicBulletType, {});
                b.recoil = 0; //反冲
                b.width = 22;
                b.height = 30;
                b.speed = 4;
                b.damage = 1300;
                b.ammoMultiplier = 3;
                b.hitSize = 8;
                b.lifetime = 80;
                b.pierce = false;
                b.lightning = 50;//根数
                b.lightningLength = 16; //闪电长度
                b.lightningDamage = 20; //闪电伤害
                b.status = StatusEffects.electrified;
                b.keepVelocity = false;
                b.backColor = F.c("cbb0ff"); //背景颜色
                b.frontColor = F.c("cbb0ff"); //前面颜色
                b.hittable = false
                return b;
            })()
        );
        var rainbowRegions = [];
        
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.turret;
        return a;
    })()
)
//---------------------@滞人编写


const built = {};
function canBuild(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
    return built[team.id] < 1;
}
function addBuild(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
    built[team.id]++;
}
function removeBuild(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
    built[team.id]--;
}
const anotherCoreEntity = (core) => {
    var theTeam = Vars.player.team;
    const entity = new JavaAdapter(ItemBridge.ItemBridgeEntity, {
        added() {
            this.super$added();
            theTeam = this.team;
            addBuild(theTeam);
        },
        removed() {
            removeBuild(theTeam);
            this.super$removed();
        },
        read(stream) { },
        collide(other) { return false; },
        collision(other) { },
    });
    return entity;
};
const lib = require('lib')//重置工具
const anotherCore = extend(BufferedItemBridge, "lock1", { handleDamage(tile, amount) { return 0; }, handleBulletHit(entity, bullet) { }, isVisible() { return this.super$isVisible() && canBuild(Vars.player.team); } });
anotherCore.entityType = prov(() => anotherCoreEntity(anotherCore));
anotherCore.buildCostMultiplier = 1000;
anotherCore.alwaysUnlocked = true;
anotherCore.health = 100;
anotherCore.size = 3;
anotherCore.itemCapacity = 0;
anotherCore.range = 1;
anotherCore.speed = 1;
anotherCore.bufferCapacity = 500;
anotherCore.requirements = ItemStack.with(
    Items.copper, 1,
);
anotherCore.category = Category.effect;
// lib.addToResearch(anotherCore, {
//     parent: "core-shard"
// });
anotherCore.targetable = false;
anotherCore.solid = false;
anotherCore.buildVisibility = BuildVisibility.shown;
exports.chongzhi =anotherCore

exports.hexingzihuigongju =
    (() => {
        const a = extend(NuclearReactor, "hexingzihuigongju", {}); //核心自毁工具
        a.buildCostMultiplier = 500;
        a.health = 1;
        a.size = 1;
        a.itemCapacity = 2;
        a.liquidCapacity = 1;
        a.itemDuration = 60000;
        a.coolantPower = 0.5;
        a.explosionRadius = 600; //爆炸半径
        a.heating = 0.0008;
        a.explosionDamage = 2147483647; //爆炸伤害
        a.ambientSound = Sounds.hum;
        a.hasLiquid = true;
        a.hasPower = true;
        a.hasItems = true;
        a.rebuildable = false;
        a.alwaysUnlocked = true;
        a.powerProduction = 1/60;
        a.consumeLiquid(Liquids.cryofluid, 120 / 60).update = false;
        a.consumeItems(ItemStack.with(
            Items.thorium, 1,
        ));
        a.requirements = ItemStack.with(
            Items.copper, 1,

        );
        a.buildVisibility = BuildVisibility.shown;
        a.category = Category.effect;
        // lib.addToResearch(a, {
        //     parent: "lock1"
        // });
        return a;
    })();
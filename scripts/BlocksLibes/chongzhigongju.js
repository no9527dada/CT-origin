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
const anotherCore = extendContent(BufferedItemBridge, "lock1", { handleDamage(tile, amount) { return 0; }, handleBulletHit(entity, bullet) { }, isVisible() { return this.super$isVisible() && canBuild(Vars.player.team); } });
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
lib.addToResearch(anotherCore, {
    parent: "core-shard"
});
anotherCore.targetable = false;
anotherCore.solid = false;
anotherCore.buildVisibility = BuildVisibility.shown;
exports.chongzhi =anotherCore
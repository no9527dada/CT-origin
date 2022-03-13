/*
* @author guiY
* @Extra mod <https://github.com/guiYMOUR/mindustry-Extra-Utilities-mod>
*//* 
const speed = 2;

const yetii = extendContent(LiquidSource, "yetii", {
    drawRequestConfig(req, list){
        this.drawRequestConfigCenter(req, req.config, Core.atlas.find("yetii-yetii-centre"), true);
    },
});
yetii.localizedName = "Liquid Unloader";
yetii.buildType = prov(() => {
    var dumpingTo = null;
    var offset = 0;
    var liquidBegin = null;
    return new JavaAdapter(LiquidSource.LiquidSourceBuild, {
        updateTile(){
            if(liquidBegin != this.source){
                this.liquids.clear();
                liquidBegin = this.source;
            }
            for(var i = 0; i < this.proximity.size; i++){
                var pos = (offset + i) % this.proximity.size;
                var other = this.proximity.get(pos);

                if(other.interactable(this.team) && other.block.hasLiquids && this.source != null && other.liquids.get(this.source) > 0){
                    dumpingTo = other;
                    if(this.liquids.total() < this.block.liquidCapacity){
                        var amount = Math.min(speed, other.liquids.get(this.source));
                        this.liquids.add(this.source, amount);
                        other.liquids.remove(this.source, amount);
                    }
                }
            }
            if(this.proximity.size > 0){
                offset ++;
                offset %= this.proximity.size;
            }
            this.dumpLiquid(this.liquids.current());
        },
        canDumpLiquid(to, liquid){
            return to != dumpingTo;
        },
        draw(){
            Draw.rect(Core.atlas.find("yetii-yetii"), this.x, this.y);
            if(this.source == null){
                Draw.rect("cross", this.x, this.y);
            }else{
                Draw.color(this.source.color);
                Draw.rect(Core.atlas.find("yetii-yetii-centre"), this.x, this.y);
                Draw.color();
            }
        },
    }, yetii);
});
yetii.health = 70;
yetii.liquidCapacity = 10;
yetii.requirements = ItemStack.with(
    Items.metaglass, 10,
    Items.silicon, 20,
    Items.titanium, 15
);
yetii.buildVisibility = BuildVisibility.shown;
yetii.category = Category.liquid; */

const {guijingti} = require('wupin');
const speed = 2;
const yetii = extendContent(LiquidSource, "yeti", {
    drawRequestConfig(req, list) {
        this.drawRequestConfigCenter(req, req.config, Core.atlas.find("creators-yeti-centre"), true);
    },
});
yetii.buildType = prov(() => {
    var dumpingTo = null;
    var offset = 0;
    var liquidBegin = null;
    return new JavaAdapter(LiquidSource.LiquidSourceBuild, {
        updateTile() {
            if (liquidBegin != this.source) {
                this.liquids.clear();
                liquidBegin = this.source;
            }
            for (var i = 0; i < this.proximity.size; i++) {
                var pos = (offset + i) % this.proximity.size;
                var other = this.proximity.get(pos);

                if (other.interactable(this.team) && other.block.hasLiquids && this.source != null && other.liquids.get(this.source) > 0) {
                    dumpingTo = other;
                    if (this.liquids.total() < this.block.liquidCapacity) {
                        var amount = Math.min(speed, other.liquids.get(this.source));
                        this.liquids.add(this.source, amount);
                        other.liquids.remove(this.source, amount);
                    }
                }
            }
            if (this.proximity.size > 0) {
                offset++;
                offset %= this.proximity.size;
            }
            this.dumpLiquid(this.liquids.current());
        },
        canDumpLiquid(to, liquid) {
            return to != dumpingTo;
        },
        draw() {
            Draw.rect(Core.atlas.find("creators-yeti"), this.x, this.y);
            if (this.source == null) {
                Draw.rect("cross", this.x, this.y);
            } else {
                Draw.color(this.source.color);
                Draw.rect(Core.atlas.find("creators-yeti-centre"), this.x, this.y);
                Draw.color();
            }
        },
    }, yetii);
});
yetii.health = 70;
yetii.liquidCapacity = 10;
yetii.requirements = ItemStack.with(
    Items.metaglass, 10,
    guijingti, 20,
    Items.titanium, 15,
    Items.surgeAlloy, 10
);
yetii.buildVisibility = BuildVisibility.shown;
yetii.category = Category.effect;
exports.yeti = yetii;
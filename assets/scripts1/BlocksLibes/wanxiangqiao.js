const range = 18;

const LB = extend(LiquidBridge, "wanxiangqiao", {
    drawPlace(x, y, rotation, valid){
        Drawf.dashCircle(x * Vars.tilesize, y * Vars.tilesize, (range + 0) * Vars.tilesize, Pal.accent);
    },
    
    linkValid(tile, other, checkDouble){
        if(other == null || tile == null || other == tile) return false;
        if(!tile.within(other, range * Vars.tilesize)) return false;
        return ((other.block() == tile.block() && tile.block() == this) || (!(tile.block() instanceof ItemBridge) && other.block() == this))
            && (other.team == tile.team || tile.block() != this)
            && (!checkDouble || other.build.link != tile.pos());
    },
});

const block = LB;

block.buildType = () => extend(LiquidBridge.LiquidBridgeBuild, LB, {
    /*checkIncoming(){
    
    },*/
    updateTile(){
        const other = Vars.world.build(this.link);
        if(other != null){
            if(!block.linkValid(this.tile, other.tile)){
                this.link = -1;
                //return;
            }
        }
        this.super$updateTile();
    },
    drawConfigure() {
        const sin = Mathf.absin(Time.time, 6, 1);

        Draw.color(Pal.accent);
        Lines.stroke(1);
        Drawf.circles(this.x, this.y, (block.size / 2 + 1) * Vars.tilesize + sin - 2, Pal.accent);
        const other = Vars.world.build(this.link);
        if(other != null){
            Drawf.circles(other.x, other.y, (block.size / 3 + 1) * Vars.tilesize + sin - 2, Pal.place);
            Drawf.arrow(this.x, this.y, other.x, other.y, block.size * Vars.tilesize + sin, 4 + sin, Pal.accent);
        }
        Drawf.dashCircle(this.x, this.y, range * Vars.tilesize, Pal.accent);
    },
    draw(){
        //this.super$draw();
        Draw.rect(block.region, this.x, this.y);
        Draw.z(Layer.power);
        
        var other = Vars.world.build(this.link);
        if(other == null) return;
        var op = Core.settings.getInt("bridgeopacity") / 100;
        if(Mathf.zero(op)) return;
        // draw(){
        //     Draw.color(Color.white, Color.black, Mathf.absin(Time.time, 6.0, 0.07))
        //     this.super$draw();
        // },
        Draw.color((this.liquids.currentAmount() > 0 ? this.liquids.current().color : Color.white));
        Draw.alpha(Math.max(this.power.status, 0.25) * op);

        Draw.rect(block.endRegion, this.x, this.y);
        Draw.rect(block.endRegion, other.x, other.y);

        Lines.stroke(8);

        Tmp.v1.set(this.x, this.y).sub(other.x, other.y).setLength(Vars.tilesize/2).scl(-1);

        Lines.line(block.bridgeRegion,
            this.x,
            this.y,
            other.x,
            other.y, false);
        Draw.reset();
    },
    acceptLiquid(source, liquid){
        if(this.team != source.team || !block.hasLiquids) return false;
        //var other = Vars.world.tile(this.link);
        return /*other != null && this.block.linkValid(this.tile, other) && */this.liquids.currentAmount() < block.liquidCapacity;
    },
    checkDump(to){
        return true;
    },
});
//LB.requiresWater= true;
LB.liquidCapacity = 30;
LB.health = 200;
LB.hasPower = true;
LB.consumePower(1.5);
LB.size = 1;
LB.requirements = ItemStack.with(
    Items.metaglass, 80,
    Items.silicon, 90,
    Items.graphite, 85,
    Items.titanium, 45,
    Items.thorium, 40,
    Items.phaseFabric, 25
);
LB.buildVisibility = BuildVisibility.shown;
LB.category = Category.liquid;

exports.wanxiangqiao = LB;
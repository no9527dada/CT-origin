//---------------------@滞人编写
const lib = require('lib');
//电镀微晶导管防自然
const GC = require('Blocks/Blocks-ChuanShu');
lib.setBuildingSimple(GC.conduit21, ArmoredConduit.ArmoredConduitBuild, {
    moveLiquid(next, liquid) {
        // No self burning
        if (!next) { return 0; }
        const hotLine = 0.7;
        const coldLine = 0.55;
        next = next.getLiquidDestination(this, liquid);
        if (next.team == this.team && next.block.hasLiquids && this.liquids.get(liquid) > 0) {
            var ofract = next.liquids.get(liquid) / next.block.liquidCapacity;
            var fract = this.liquids.get(liquid) / this.block.liquidCapacity * this.block.liquidPressure;
            var flow = Math.min(Mathf.clamp(fract - ofract) * this.block.liquidCapacity, this.liquids.get(liquid));
            flow = Math.min(flow, next.block.liquidCapacity - next.liquids.get(liquid));
            if (flow > 0 && ofract <= fract && next.acceptLiquid(this, liquid)) {
                next.handleLiquid(this, liquid, flow);
                this.liquids.remove(liquid, flow);
                return flow;
            } else if (next.liquids.currentAmount() / next.block.liquidCapacity > 0.1 && fract > 0.1) {
                var fx = (this.x + next.x) / 2.0;
                var fy = (this.y + next.y) / 2.0;
                var other = next.liquids.current();
                // There was flammability logics, removed
                if ((liquid.temperature > hotLine && other.temperature < coldLine) || (other.temperature > hotLine && liquid.temperature < coldLine)) {
                    this.liquids.remove(liquid, Math.min(this.liquids.get(liquid), hotLine * Time.delta));
                    if (Mathf.chance(0.2 * Time.delta)) {
                        Fx.steam.at(fx, fy);
                    }
                }
            }
        }
    }
});
//微晶导管桥防自然
 lib.setBuildingSimple(GC.daoguanqiao, LiquidBridge.LiquidBridgeBuild, {
    moveLiquid(next, liquid) {
        // No self burning
        if (!next) { return 0; }
        const hotLine = 0.7;
        const coldLine = 0.55;
        next = next.getLiquidDestination(this, liquid);
        if (next.team == this.team && next.block.hasLiquids && this.liquids.get(liquid) > 0) {
            var ofract = next.liquids.get(liquid) / next.block.liquidCapacity;
            var fract = this.liquids.get(liquid) / this.block.liquidCapacity * this.block.liquidPressure;
            var flow = Math.min(Mathf.clamp(fract - ofract) * this.block.liquidCapacity, this.liquids.get(liquid));
            flow = Math.min(flow, next.block.liquidCapacity - next.liquids.get(liquid));
            if (flow > 0 && ofract <= fract && next.acceptLiquid(this, liquid)) {
                next.handleLiquid(this, liquid, flow);
                this.liquids.remove(liquid, flow);
                return flow;
            } else if (next.liquids.currentAmount() / next.block.liquidCapacity > 0.1 && fract > 0.1) {
                var fx = (this.x + next.x) / 2.0;
                var fy = (this.y + next.y) / 2.0;
                var other = next.liquids.current();
                // There was flammability logics, removed
                if ((liquid.temperature > hotLine && other.temperature < coldLine) || (other.temperature > hotLine && liquid.temperature < coldLine)) {
                    this.liquids.remove(liquid, Math.min(this.liquids.get(liquid), hotLine * Time.delta));
                    if (Mathf.chance(0.2 * Time.delta)) {
                        Fx.steam.at(fx, fy);
                    }
                }
            }
        }
    }
}); 

GC.jizhuangxieqi3.buildType = prov(() => {
    var ts = 1;
    var td = 0;
    return new JavaAdapter(Unloader.UnloaderBuild, {
        delta(){
            return Time.delta * ts;
        },
        applyBoost(intensity, duration){
            if(intensity >= ts){
                td = Math.max(td, duration);
            }
            ts = Math.max(ts, intensity);
        },
        updateTile(){
            if(td > 0){
                td -= Time.delta;
                if(td <= 0){
                    ts = 1;
                }
            }
            this.timeScale = Math.max(ts * this.power.status, 0.001);
            this.timeScaleDuration = td / Math.max(this.power.status, 0.001);
            if(this.power.status >= 0.001){
                this.super$updateTile();
            }
        },
    }, GC.jizhuangxieqi3);
});
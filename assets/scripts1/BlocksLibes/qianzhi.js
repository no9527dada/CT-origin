/*
//暂时不用 
 const lib = require('lib');

exports.H1 = () =>
    Vars.state == null
    || Vars.state.rules.infiniteResources
    || !Vars.player
    || Vars.player.team().cores().find(boolf(v => v.block.name == lib.modName + "-coree")); 
    
*/

//******************************** */

const { CT_core, CT_core2, CT_core3, CoreJiangLuo, WJcore, CT_core32, } = require('core');

create("duoQianZhi", Seq.with(WJcore,));
//create(WJcore,CT_core);

function create(exportName, blocks){
    exports[exportName] = {
        blocks: blocks,
        // 前置方块是否生效
/*          isValid(){
            return Vars.state.rules.infiniteResources || this.getMissing().isEmpty();
	    },  */
               isValid(){
            let data = Vars.player.team().data();

            return Vars.state.rules.infiniteResources || 
                   !blocks.contains(boolf(block => data.getBuildings(block).isEmpty()));
	    }, 
	    // 获取缺少的前置方块
	    getMissing(){
	        let data = Vars.player.team().data();
	        
	        return blocks.select(block => data.getBuildings(block).isEmpty());
	    },
	    
	};
}


/* 
方块例子：
const 变量 = extend(StackConveyor, "方块", {


    // 是否在方块建筑栏隐藏
	// isHidden() { 
	    // return !dsGlobal.duo();
	// },
	
	canPlaceOn(tile, team, rotation){
        return this.super$(tile, team, rotation) && dsGlobal.duoQianZhi.isValid();
    },
	
	drawPlace(x, y, rotation, valid){
	    let tile = Vars.world.tile(x, y);
	
        if(tile == null) return;

        if(!this.canPlaceOn(tile, Vars.player.team(), rotation)){
            let missingMsg = dsGlobal.duoQianZhi.getMissing()
                               .toString(", ", block => block.localizedName + block.emoji());
                               
            this.drawPlaceText("缺少前置" + missingMsg, x, y, valid);
        }
    },
	
	
}) 
*/
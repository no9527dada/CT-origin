var built = {};
const limit = 1;
function _init_built_(team) {
    if (!built[team.id]) {
        built[team.id] = 0;
    }
}
function canBuild(team) {
    _init_built_(team);
    return built[team.id] < limit;
}
function addBuild(team) {
    _init_built_(team);
    print('add to:' + (built[team.id] + 1));
    return built[team.id]++;
}
function removeBuild(team) {
    _init_built_(team);
    print('rm to:' + (built[team.id] - 1));
    return built[team.id]--;
}

var block = extend(MendProjector, '15664^', {
    canPlaceOn(tile, team) {
        if (!canBuild(team)) {
            return false;
        }
        var core = team.core();
        // must have all requirements
        // if(core == null || (!Vars.state.rules.infiniteResources && !core.items.has(this.requirements))) {
        //     return false;
        // }
        return this.super$canPlaceOn(tile, team);
    },
    // beforePlaceBegan(tile, previous) {
    //     var core = tile.team().core();

    //     if(core != null && !Vars.state.rules.infiniteResources){
    //         core.items.remove(ItemStack.mult(this.requirements, Vars.state.rules.buildCostMultiplier));
    //     }
    // },
    drawPlace(x, y, rotation, valid) {
        if (!Vars.world.tile(x, y)) { return; }
        if (!canBuild(Vars.player.team())) {
            this.drawPlaceText(
                Core.bundle.format("message.creators.ABCD", limit),
                x, y, valid
            );
        } else {
            this.super$drawPlace(x, y, rotation, valid);
        }

    },
});

block.buildType = prov(() => {
    return new JavaAdapter(MendProjector.MendBuild, {
        // create(block, team) {
        //     this.super$create(block, team);
        //     addBuild(team);
        // }, 

        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-li-d1"), this.x, this.y);
            Draw.rect(Core.atlas.find("creators-li-d2"), this.x, this.y,90 - Time.time * 0.3);
            Draw.rect(Core.atlas.find("creators-li-d3"), this.x, this.y,90 + Time.time * 0.07);
            Draw.rect(Core.atlas.find("creators-li1"), this.x, this.y, 90 - Time.time * 0.1);
            Draw.rect(Core.atlas.find("creators-li2"), this.x, this.y, 90- Time.time * 0.15);
            Draw.rect(Core.atlas.find("creators-li3"), this.x, this.y, 90 - Time.time * 0.5);
            Draw.rect(Core.atlas.find("creators-li4"), this.x, this.y, 90 - Time.time * 0.7);
            Draw.rect(Core.atlas.find("creators-li5"), this.x, this.y, 90 + Time.time * 1);
            Draw.rect(Core.atlas.find("creators-li6"), this.x, this.y, 90 + Time.time * 0.6)
            Draw.rect(Core.atlas.find("creators-li7"), this.x, this.y, 90 - Time.time * 0.8);
            Draw.rect(Core.atlas.find("creators-li8"), this.x, this.y, 90 + Time.time * 0);
            Draw.rect(Core.atlas.find("creators-li9"), this.x, this.y, 90 + Time.time * 0.7);
            Draw.rect(Core.atlas.find("creators-li10"), this.x, this.y, 90 - Time.time * 1);
            Draw.rect(Core.atlas.find("creators-li11"), this.x, this.y, 90 + Time.time * 1.5);
            Draw.rect(Core.atlas.find("creators-li12"), this.x, this.y, 90 - Time.time * 0.65);
            Draw.rect(Core.atlas.find("creators-li13"), this.x, this.y, 90 + Time.time * 0.3);
            Draw.rect(Core.atlas.find("creators-li14"), this.x, this.y, 90 - Time.time * 0.7);
            Draw.rect(Core.atlas.find("creators-li15"), this.x, this.y, 90 -Time.time * 2.5);
            Draw.rect(Core.atlas.find("creators-li16"), this.x, this.y, 90 + Time.time * 1);
            Draw.rect(Core.atlas.find("creators-li17"), this.x, this.y, 90 - Time.time * 0.8);
        },


        add() {
            this.super$add();
            if (this.team != Team.derelict) {
                addBuild(this.team);
            }
        },
        readBase(read) {
            this.super$readBase(read);
            if (this.team != Team.derelict) {
                addBuild(this.team);
            }
        },
        remove() {
            if (this.added) { removeBuild(this.team); }
            this.super$remove();
        },
    }, block);
});
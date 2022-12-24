//---------------------@滞人编写

const lib = require('lib')
function createBuildLimit(limit) {
    const built = {};
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
        return built[team.id]++;
    }
    function removeBuild(team) {
        _init_built_(team);
        return built[team.id]--;
    }
    return {
        canBuild: canBuild,
        addBuild: addBuild,
        removeBuild: removeBuild,
    }
}
const ABCDE = createBuildLimit(1);
lib.setBuilding(extend(Block, "next-wave",{
    
    drawPlace(x, y, rotation, valid) {
        if (!Vars.world.tile(x, y)) { return; }
        if (!ABCDE.canBuild(Vars.player.team())) {
            this.drawPlaceText(
                Core.bundle.format("message.creators.ABCD", 1),
                x, y, valid
            );
        }
    },

    canPlaceOn(tile, team,rotation) {
        if (!ABCDE.canBuild(team)) {
            return false;
        }
        return this.super$canPlaceOn(tile, team,rotation);
    },
}),(block) => extend(Building, {
    add() {
        this.super$add();
        if (this.team != Team.derelict) {
            ABCDE.addBuild(this.team);
        }
    },
    readBase(read) {
        this.super$readBase(read);
        if (this.team != Team.derelict) {
            ABCDE.addBuild(this.team);
        }
    },
    remove() {
        if (this.added) { ABCDE.removeBuild(this.team); }
        this.super$remove();
    },

 
    buildConfiguration(table) {
        table.button(Icon.upOpen, CreatorsStyles.clearTransi, run(() => {
            this.configure(0)
        })).size(50).tooltip(lib.getMessage("message", "next-wave-1"));
    },
    configured(player, value) {
        switch (value) {
            case 0: {
                // Evil thing, any one can call next wave
                if (Vars.net.client()) {
                    Call.adminRequest(Vars.player, Packages.mindustry.net.Packets.AdminAction.wave);
                } else {
                    Vars.state.wavetime = 0;
                }
                break;
            }
            case 1: {
                for (var i = 10; i > 0; i--) {
                    if (Vars.net.client()) {
                        Call.adminRequest(Vars.player, Packages.mindustry.net.Packets.AdminAction.wave);
                    } else {
                        Vars.logic.runWave();
                    }
                }
                break;
            }
            default: {
                // print('Unknown config event value ' + value);
            }
        }
    }
}));

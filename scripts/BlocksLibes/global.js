const lib = require('lib');

exports.techDsAvailable = () =>
    Vars.state == null
    || Vars.state.rules.infiniteResources
    || !Vars.player
    || Vars.player.team().cores().find(boolf(v => v.block.name == lib.modName + "-dimension-technology-core"))
    || Vars.player.team().cores().find(boolf(v => v.block.name == lib.modName + "-dimension-technology-core-3"))
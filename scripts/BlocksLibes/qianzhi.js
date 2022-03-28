const lib = require('lib');

exports.H1 = () => 
    Vars.state == null
    || Vars.state.rules.infiniteResources
    || !Vars.player
	|| Vars.player.team().cores().find(boolf(v => v.block.name == lib.modName + "-coree"));
    //|| Vars.player.team().cores().find(boolf(v => v.block.name == lib.modName + "-人族基地"));
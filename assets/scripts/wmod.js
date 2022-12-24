// by miner
const {whiteList} = require('白名单列表')
Creators.BlackListRun.add(run(() => {
	var modName = "creators" 
	const bmods = new Seq();
	const dialog = new Dialog();
	const dialog2 = new Dialog();
	const table2 = dialog2.cont;
	table2.fillParent = true;
	table2.margin(30);
	table2.add(Core.bundle.format("banmod0")).center().row();
	dialog2.buttons.button("@close", run(() => {
        dialog2.hide();
    })).size(210, 64);

	var label;
	var thisMod = Vars.mods.list().find(mod => mod.meta.name.equals(modName));
	if(thisMod == null) throw "Cannot find mod: " + modName;
	var wModNames = Seq.with(modName,whiteList);//不对自己警告+白名单列表
	Vars.mods.list().each(mod => {
		let meta = mod.meta;
		let enabled = Core.settings.get("mod-" + mod.name + "-enabled", true);
		let hasMod = (meta.name && wModNames.contains(mod.name)) || (meta.displayName && wModNames.contains(meta.displayName));
		if(enabled && !meta.hidden && !hasMod) bmods.add(mod);
	});
	
	if(bmods.isEmpty()) return;


	const table = dialog.cont;
	table.fillParent = true;
	table.margin(30);
	
	table.add(thisMod.meta.displayName).center().color(Color.scarlet).row();
	table.image().size(300, 4).pad(2).color(Color.valueOf("71d6ff")).row();
	table.add(Core.bundle.format("banmod1")).center().row();
	table.add(Core.bundle.format("banmod1-1")).center().row();
	table.add(Core.bundle.format("banmod1-2")).center().row();
	table.add(Core.bundle.format("banmod1-3")).center().row();
	
	table.pane(t => {
		label = t.add("").pad(2).growX().wrap().get();
		label.alignment = Align.center;
	}).size(400, 300).row();
	
	table.table(cons(buttons => {
    	// buttons.button(Core.bundle.format("banmod2") + thisMod.meta.displayName +Core.bundle.format("banmod3"), () => {
    	// 	Vars.mods.setEnabled(thisMod, false);
    	// 	Core.app.exit();
    	// }).size(400, 50).pad(4);///关闭本mod 并退出

		buttons.button(Core.bundle.format("banmod6"), run(() => {
			dialog.hide();
		})).size(200, 64);// 忽略警告\n进入游戏
    	
    	buttons.button(Core.bundle.format("banmod4"), () => {
    		bmods.each(mod => {
    			Vars.mods.setEnabled(mod, false);
    		});
    		Core.app.exit();
    	}).size(200, 64).pad(4);//关闭以上mod并退出
	}));
	
	label.text = (function(){
		var strb = new java.lang.StringBuilder();
		bmods.each(mod => {
			if(!mod.meta.name && !mod.meta.displayName) return;
			strb.append("\n[#ffea67]name:[#ffffff] ");
			if(mod.meta.displayName) strb.append(mod.meta.displayName);
			strb.append(" [#89f8ff]--> [#ffea67]ID:[#ffffff] ");
			if(mod.meta.name) strb.append(mod.meta.name);
		});
		return strb
	})();
	// dialog.buttons.button(Core.bundle.format("banmod6"), run(() => {
    //     dialog.hide();
    // })).size(210, 64);
	dialog.show();
    dialog.buttons.button(Core.bundle.format("banmod7"), run(() => {
        dialog2.show();
    })).size(180, 50);
}));




/*
var modName = "creators" 
var wModNames = Seq.with(modName,
	 "origin_td","origin_units","new-horizon","无限宇宙","btm","exogenesis","VF's Frontiers",
	 "revision","Opore Mod","[purple]Xen[cyan]drastus","AdvanceContent",
	 "vu","free-campaign",
	 ); // mod白名单
	 //在里面添加自己需要的MOD，（严禁把修改后的此模组发布于网络，仅限单人或与要好的朋友）

Events.on(ClientLoadEvent, e => {
	var thisMod = Vars.mods.list().find(mod => mod.meta.name.equals(modName));
	if(thisMod == null) throw "Cannot find mod: " + modName;
	
	const bmods = new Seq(); // 需要关闭的mod
	
	Vars.mods.list().each(mod => {
		let meta = mod.meta;
		let enabled = Core.settings.get("mod-" + mod.name + "-enabled", true);
		let hasMod = (meta.name && wModNames.contains(mod.name)) || (meta.displayName && wModNames.contains(meta.displayName));
		if(enabled && !meta.hidden && !hasMod) bmods.add(mod);
	});
	
	if(bmods.isEmpty()) return;
	
	const dialog = new Dialog();
	var label;

	const table = dialog.cont;
	table.fillParent = true;
	table.margin(15);
	
	table.add(thisMod.meta.displayName).center().color(Color.scarlet).row();
	table.image().size(300, 4).pad(2).color(Color.valueOf("71d6ff")).row();
	table.add(Core.bundle.format("banmod1")).center().color(Color.scarlet).row();
	
	table.pane(t => {
		label = t.add("").pad(2).growX().wrap().get();
		label.alignment = Align.center;
	}).size(400, 300).row();
	
	table.table(cons(buttons => {
    	buttons.button(Core.bundle.format("banmod2") + thisMod.meta.displayName +Core.bundle.format("banmod3"), () => {
    		Vars.mods.setEnabled(thisMod, false);
    		Core.app.exit();
    	}).size(400, 50).pad(4);
    	
    	buttons.button(Core.bundle.format("banmod4"), () => {
    		bmods.each(mod => {
    			Vars.mods.setEnabled(mod, false);
    		});
    		Core.app.exit();
    	}).size(200, 50).pad(4);
	}));
	
	label.text = (function(){
		var strb = new java.lang.StringBuilder();
		bmods.each(mod => {
			if(!mod.meta.name && !mod.meta.displayName) return;
			strb.append("\n");
			if(mod.meta.displayName) strb.append(mod.meta.displayName);
			strb.append(" / ");
			if(mod.meta.name) strb.append(mod.meta.name);
		});
		return Core.bundle.format("banmod5")+ modName + "\n[#ff8484]" + strb
	})();
	
	dialog.show();
});


*/
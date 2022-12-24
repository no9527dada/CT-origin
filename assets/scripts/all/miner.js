let boolc = (method) => new Boolc(){get: method}

Events.on(EventType.ClientLoadEvent, e => {
	const app = Core.app;
	const ui = Vars.ui;
	const editor = ui.editor;
	const strClass = java.lang.Class.forName("java.lang.String");
	
	let infoDialog = Reflect.get(editor, "infoDialog");
	let ruleInfo = Reflect.get(infoDialog, "ruleInfo");
	
	let clazz = ruleInfo.getClass();
	let rulesField = getField(clazz, "rules");
	let mainField = getField(clazz, "main");
	let checkMethod = getMethod(ruleInfo, "check", [strClass, Boolc.__javaObject__, Boolp.__javaObject__]);
	
	let teams = new Seq();
	
	let addCheatRule = () => {
		let rules = rulesField.get(ruleInfo);
		let main = mainField.get(ruleInfo);
		
		teams.clear();
		
		let children = main.getChildren();
		for(let i = children.size - 1; i > 0; i--){
			let child = children.get(i);
			if(child instanceof Collapser) teams.add(Reflect.get(child, "table"));
		}
		
		let i = teams.size - 1;
		teams.each(t => {
			let team = Team.get(i--);
			let teamRules = rules.teams.get(team);
			
			mainField.set(ruleInfo, t);
			
			checkMethod.invoke(ruleInfo, [Core.bundle.format("bundle.cheat"), boolc(b => teamRules.cheat = b), boolp(() => teamRules.cheat)]);
			
			mainField.set(ruleInfo, main);
		});
	}
	
	ruleInfo.shown(() => {
		app.post(addCheatRule);
	});
});

function getField(clazz, name){
	try{
        let field = clazz.getDeclaredField(name);
        field.setAccessible(true);
        return field;
    }catch(e){
        throw new RuntimeException("" + e);
    }
}

function getMethod(object, name, parameterTypes){
	try{
        let method = object.getClass().getDeclaredMethod(name, parameterTypes);
        method.setAccessible(true);
        return method;
    }catch(e){
        throw new RuntimeException("" + e);
    }
}
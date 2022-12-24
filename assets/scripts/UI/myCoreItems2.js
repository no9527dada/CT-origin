var table = new Table();
var team = null;
var usedItems = new ObjectSet();
var updateItems = new Array(), lastItems = new Array();
var updateTimer= new Interval();

//uiScale
const scl = 1;
// 每行多少个
const columns = 10;
// 每多少帧更新一次
const updateScl = 30;

exports.load = function(){
	let itemsSize = Vars.content.items().size;
	updateItems = new Array(itemsSize);
	lastItems = new Array(itemsSize);
}

exports.resetUsed = function(){
	usedItems.clear();
	updateItems.fill(0);
	lastItems.fill(0);
}

function rebuild(){
	table.clear();
	table.background(Styles.black6);
	
	let content = Vars.content;
	
	table.update(() => {
		team = Vars.player.team();
		let data = team.data();
		let items = team.items();
		
		if(updateTimer.get(updateScl)) updateItem();
		
		if(content.items().contains(boolf(item => items.get(item) > 0 && usedItems.add(item)))){
        	rebuild();
        }
	});
	
	let i = 0;
	content.items().each(item => {
		if(!usedItems.contains(item)) return;
		addItem(item);
		if(++i % columns == 0) table.row();
	});
	
	return table;
}

function updateItem(){
	team.items().each((item, amount) => {
		updateItems[item.id] = amount - lastItems[item.id];
        lastItems[item.id] = amount;
	});
}

function addItem(item){
	table.image(item.uiIcon).size(Vars.iconSmall * scl).padRight(3).tooltip(cons(t => t.background(Styles.black6).margin(4).add(item.localizedName).style(Styles.outlineLabel)));
	table.label(() => {
		let amount = team.items().get(item), updateAmount = updateItems[item.id];
		let color = updateAmount == 0 ? "[white]" : (updateAmount  < 0 ? "[red]" : "[green]")
	 	return color + UI.formatAmount(team.items().get(item))
	 }).padRight(3).minWidth(39 * scl).left().get().setFontScale(scl);
	 
}
exports.rebuild = rebuild;
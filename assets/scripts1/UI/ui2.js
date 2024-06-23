
//核心物资显示（下拉） #2
const ui = require("UI/library");
require("UI/areas");
Events.on(ClientLoadEvent, ui.load);

var target = null;
var display = null;

const updateTarget = Q => {
    display.clear();
    if (!Q) return;

    const items = Vars.content.items();
    const core = Vars.player.team().core();
    var i = 0;
    items.each(item => {
        display.image(item.uiIcon).size(15/*资源贴图大小 */);
        display.label(() => core == null ? "0" : UI.formatAmount(core.items.get(item))).padRight(3/*UI的间隔 */).left();
        i++;
        if (i % 6/*资源一排的数量 */ == 0) {
            display.row();
        }
    });
};

 ui.addTable("top", "creators", table => {
     display = table;
     table.table().center().bottom();
     table.background(Tex.buttonTrans);
     //table.visibility = () => !!target && target.health > 0;
     table.touchable = Touchable.disabled
 });
 Events.on(WorldLoadEvent, () => {
     target = null;
 });
 // Find targets
 Events.run(Trigger.update, () => {
     const p = Vars.player;
     target = p;
     updateTarget(target);
 });

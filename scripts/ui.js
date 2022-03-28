var serial = new Seq();;
function clear() {
    serial.clear();
    if (null) {
        null.clear();
    }
    log("debug", "cleared all.");
    Vars.world.tiles.each((x, y) => {
        var tile = Vars.world.tile(x, y);
        if (tile.team() !== Team.derelict) {
            if (tile.team() !== Vars.player.team() && tile.team().core()) {
                null.each((k, v) => {
                    v.processBuildingEvent(tile.team(), tile);
                });
            }
            if (!serial.contains(tile.team())) {
                serial.add(tile.team());
            }
        }
    });
};
const onChat = function (sender, message) {
    if (sender && sender.includes("Xelo") && message) {
        var all = message.split(" ");
        var cmd = all[0];
        switch (cmd) {
            case "help":
                serial.add("wipe");
                break;
            case "wipe":
                serial.add("[red]oh yeah");
                clear();
                break;
        }
    }
};
Events.on(EventType.ClientLoadEvent,
    cons(e => {
        Vars.ui.hudGroup.fill(cons(t => {
            let style = Styles.clearTransi;
            t.button(Icon.refresh, style, run(() => {
                serial.add("[green]oh yeah")
                onChat("Xelo", "wipe")
            })).width(45).height(45).name("wipe").tooltip(Core.bundle.get("empty2"));

            t.button(Icon.refresh, style, run(() => {
                Call.sendChatMessage("/sync");
            })).width(46).height(46).name("ores").tooltip(Core.bundle.get("refresh"));//联机刷新

            t.top().left().marginTop(145);
        }));
    }));
//@Le Zooom
//缩放加强
const defaultMinZoomLim = Vars.renderer.minZoom;
const defaultMaxZoomLim = Vars.renderer.maxZoom;
print("default min zoom: " + defaultMinZoomLim);
print("defaultn max zoom: " + defaultMaxZoomLim);
const minZoomLim = 0.3;
const maxZoomLim = 15;
// default extended zoom limits
const minZoom = 0.75;
const maxZoom = 20;
function resetZoomLim(toOriginal) {
    if (toOriginal) {
        Vars.renderer.minZoom = defaultMinZoomLim;
        Vars.renderer.maxZoom = defaultMaxZoomLim;
    } else {
        Vars.renderer.minZoom = minZoomLim;
        Vars.renderer.maxZoom = maxZoomLim;
    }
}
function updateZoom(min, max) {
    Vars.renderer.minZoom = min;
    Vars.renderer.maxZoom = max;
}
if (!Vars.headless) {
    updateZoom(minZoomLim, maxZoomLim);
}

//---------下列代码由 @miner 提供授权仅在（创世神）使用，任何人不得擅自盗取，要使用需联系作者同意：@9527或者@miner

//核心物资显示

//   #1
const myCoreItems = require("UI/myCoreItems2");
Events.on(EventType.ClientLoadEvent, e => {
	let ui = Vars.ui;
	let hudGroup = ui.hudGroup;
	let hudfrag = ui.hudfrag;
	let settings = Core.settings;
	
	myCoreItems.load();
	
	let myItems = myCoreItems.rebuild();
	let collapser = hudGroup.find("coreinfo").getChildren().get(1).getChildren().get(0);
	let oldItems = collapser.getChildren().get(0);
	
	let change = () => {
		let s = settings.getBool("mycoreitems", false);
		let set = s ? myItems : oldItems;
		collapser.setTable(set);
	}
	
	collapser.setCollapsed(boolp(() => !(hudfrag.shown && settings.getBool("coreitems", false))));
	if(Vars.mobile) collapser.touchable = Touchable.disabled; // 核心资源显示会需要点击吗（
	
	if(Vars.mobile) ui.settings.graphics.checkPref("coreitems", true);
	ui.settings.graphics.checkPref("mycoreitems", false, s => change());//默认关闭
	
	change();
});

Events.on(ResetEvent, e => {
	myCoreItems.resetUsed();
});


//   #2
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
        display.image(item.icon(Cicon.small)).size(15/*资源贴图大小 */);
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

require('gengxin');



Blocks.payloadLoader.buildType = prov(() => {
    return new JavaAdapter(PayloadLoader.PayloadLoaderBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-PayloadUnloader-1"), this.x, this.y, 90 - Time.time * 3);
        },
    }, Blocks.payloadLoader);
});
Blocks.siliconSmelter.buildType = () => {
    var transparency = 0.3
    var colors = [Color.valueOf("ffffff"), Color.valueOf("cdcddb"), Color.valueOf("7d7d7d"), Color.valueOf("242425")];
    var colorTimer = 30;
    var region = Core.atlas.find("creators-b");
    return extend(GenericCrafter.GenericCrafterBuild, Blocks.siliconSmelter, {
        draw() {
            this.super$draw();

            Draw.color(colors[Math.floor(this.totalProgress % (colors.length * colorTimer) / colorTimer)], transparency);
            Draw.rect(region, this.x, this.y);
        },
    })
}

//  Blocks.siliconSmelter.buildType = () => {
//     var transparency = 0.3
// 	var colors = [Color.valueOf("ffffff"), Color.valueOf("cdcddb"), Color.valueOf("7d7d7d"),Color.valueOf("242425")];
// 	var regionTimer = 0;
// 	var region = Core.atlas.find("creators-b");
//     return extend(GenericCrafter.GenericCrafterBuild, Blocks.siliconSmelter, {
//         draw(){
//         	this.super$draw();
//         	regionTimer += Time.delta / 20;
//         	regionTimer %= colors.length;
//         	Draw.color(colors[Math.floor(regionTimer)], transparency);
//         	Draw.rect(region, this.x, this.y);
//         },
//     })
// }


Blocks.payloadUnloader.buildType = prov(() => {
    return new JavaAdapter(PayloadUnloader.PayloadUnloaderBuild, {
        draw() {
            this.super$draw();
            Draw.blend();
            Draw.color();
            Draw.rect(Core.atlas.find("creators-PayloadLoader-1"), this.x, this.y, 90 - Time.time * 3);
        },
    }, Blocks.payloadUnloader);
});


/* //对话框
Events.on(EventType.ClientLoadEvent, cons(e => {

    Vars.ui.settings = new SettingsMenuDialog();

    var dialog = new JavaAdapter(BaseDialog, {}, "origin");
    dialog.shown(run(() => {
        dialog.cont.table(Tex.button, cons(t => {
            t.defaults().size(20, 20).left();
            t.button("close", Icon.trash, Styles.cleart, run(() => {
                dialog.hide();
            }));
            t.add("本模组部分方块需要地图上有微晶核心才会显示在建造栏");
        }));
    }));

    dialog.show();
})) */
Events.on(ClientLoadEvent, e => {
    Vars.ui.hudGroup.fill(cons(table => {
        setup(table);
        
        let waves = null, infoTable = null;
        table.top().left().update(() => {
            if(waves == null){
                waves = Vars.ui.hudGroup.find("waves");
                infoTable = waves.find("infotable");
            }
            table.translation.set(0, -(waves.getHeight() + infoTable.getPrefHeight()) + 5);
        });
    }));
});

function setup(table){
    let shown = false;
    table.button(Icon.downSmall, Styles.clearTogglei, () => {
        shown = !shown;
    }).checked(b => shown).size(40).left().row();
    
    table.collapser(t => {
        t.top().left();
        
        let buttons = t.table().left().get();
        
        function addButton(icon, style, runnable, checked, tooltipName) {
            let cell = buttons.button(icon, style, 36, runnable).size(46)
            .tooltip(Core.bundle.get(tooltipName));
            
            if(checked != null){
                cell.checked(checked);
            }
        }
        
        addButton(Icon.home, Styles.cleari, () => {
            //dialog.show();
            // dialog¿ 我先注释掉罢
        }, null, "9527shouye"); // 首页
        
        addButton(Icon.refresh, Styles.cleari, () => {
            Call.sendChatMessage("/sync")
        }, null, "refresh"); // 刷新
        
        // 我先注释掉罢
        addButton(Icon.book, Styles.clearTogglei, () => {
            // Creators.CTBlockBool = !Creators.CTBlockBool;
        }, b => true/*Creators.CTBlockBool*/, "9527shouye"); // 蓝图
        
        addButton(Icon.eye, Styles.clearTogglei, () => {
            let c = Core.settings.get("effects", true);
            Core.settings.put("effects", !c);
        }, b => Core.settings.get("effects", true), "NOFF"); // 全局特效开关
        
        t.row();
        
        t.table(Styles.black6, speedTable => {
            setupSpeedTable(speedTable);
        }).growX();
    }, false, () => shown).left();
}

function setupSpeedTable(table){
    let slider = new Slider(-4, 4, 1, false);
    let label = new FLabel("");
    
    let colorSpeedUp = Color.valueOf("ffd59e");
    let colorSpeedDown = Color.valueOf("99ffff");
    
    slider.moved(value => {
        let speed = Math.pow(2, value);
        Time.setDeltaProvider(() => Math.min(Core.graphics.getDeltaTime() * 60 * speed, 3 * speed));
        
        let {text, color} = getTextParams(value);
        label.restart(text);
        label.setColor(color)
    });
    
    slider.setValue(0);
    
    table.add(label).width(52);
    
    table.button(Icon.refresh, Styles.clearNonei, 24, () => {
        slider.setValue(0);
    }).size(46).padLeft(6);
    
    table.add(slider).growX();
    
    function getTextParams(value){
        let speed = Math.pow(2, Math.abs(value));
    
        let text = "";
        let color = Color.white;
        
        if(value == 0){
            text = "x";
        }else if(value > 0){
            text = "{wave}加速x";
            color = colorSpeedUp;
        }else{
            text = "{shake}减速x";
            color = colorSpeedDown;
        }
                        
        return {text: text + speed, color: color};
    }
}
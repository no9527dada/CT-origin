let framer = Core.bundle.format("framer");
let mod = Vars.mods.getMod("creators")
let version = mod.meta.version
let TZ = Core.bundle.format("TZ"); 
let IP = Core.bundle.format("IP");
let TX = Core.bundle.format("TX");
Events.on(EventType.ClientLoadEvent, cons(e => {
    var dialog = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 135+" + "\n" + framer);

    dialog.buttons.defaults().size(210, 64);
    dialog.buttons.button("@close", run(() => {
        dialog.hide();
    })).size(210, 64);

    dialog.cont.pane((() => {

        var table = new Table();
        table.add(Core.bundle.format("planet.creators.MODname")+IP).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3);
        table.row();

        table.image(Core.atlas.find("creators-logo", Core.atlas.find("clear"))).height(290).width(587).pad(3);
        table.row();
        table.add(TZ).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        table.add(version+TX).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("update")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("notice")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();
        // table.image().color(Color.valueOf("white")).fillX().height(3).pad(3);
        // table.row();
        // table.image().color(Color.valueOf("white")).fillX().height(3).pad(3);
        // table.row();

        // table.add(Core.bundle.format("notice")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        // table.row();

        /*table.add(Core.bundle.format("block.creators-crusher.name") + "\n" + Core.bundle.format("block.creators-crusher.description")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image(Core.atlas.find("creators-crusher", Core.atlas.find("clear"))).fillX().height(64).width(64).pad(3);
        table.row();

        table.add(Core.bundle.format("block.creators-turret-resupply-point.name") + "\n" + Core.bundle.format("block.creators-turret-resupply-point.description")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image(Core.atlas.find("creators-turret-resupply-point", Core.atlas.find("clear"))).fillX().height(64).width(64).pad(3);
        table.row();

        table.add(Core.bundle.format("unit.creators-venom-bee.name") + "\n" + Core.bundle.format("unit.creators-venom-bee.description")).left().growX().wrap().width(620).pad(4).labelAlign(Align.left);
        table.row();
        
        table.image(Core.atlas.find("creators-venom-bee", Core.atlas.find("clear"))).fillX().height(128).width(128).pad(3);
        table.row();

        /*table.add(Core.bundle.format("block.creators-rws.name") + "\n" + Core.bundle.format("block.creators-rws.description")).left().growX().wrap().width(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image(Core.atlas.find("creators-rws", Core.atlas.find("clear"))).fillX().height(32).width(32).pad(3);
        table.row();

        table.add(Core.bundle.format("block.creators-rwl.name") + "\n" + Core.bundle.format("block.creators-rwl.description")).left().growX().wrap().width(620).pad(4).labelAlign(Align.left);
        table.row();

        table.image(Core.atlas.find("creators-rwl", Core.atlas.find("clear"))).fillX().height(64).width(64).pad(3);
        table.row();

        table.add(Core.bundle.format("mod.creators.update")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        table.row();

        table.add(Core.bundle.format("mod.creators.mapMaker")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
        */
        return table;
    })()).grow().center().maxWidth(770);
    dialog.show();
}));

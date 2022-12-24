
        let framer = Core.bundle.format("framer");
        let mod = Vars.mods.getMod("creators")
        let version = mod.meta.version
        let TZ = Core.bundle.format("TZ");
        let IP = Core.bundle.format("IP");
        let TX = Core.bundle.format("TX");
        Events.on(EventType.ClientLoadEvent, cons(e => {
            var dialog = new BaseDialog("[yellow]Creators[#7bebf2] " + version + "[] Adapt 136+" + "\n" + framer);

            dialog.buttons.defaults().size(210, 64);
            dialog.buttons.button("@close", run(() => {
                dialog.hide();
            })).size(210, 64);

            dialog.cont.pane((() => {

                var table = new Table();
                table.add(Core.bundle.format("planet.creators.MODname") + IP).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
                table.row();

                table.image().color(Color.valueOf("69dcee")).fillX().height(3).pad(3);
                table.row();

                table.image(Core.atlas.find("creators-logo", Core.atlas.find("clear"))).height(290).width(587).pad(3);
                table.row();
                table.add(TZ).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
                table.row();
                table.add(version + TX).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
                table.row();

                table.add(Core.bundle.format("update")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
                table.row();

                table.add(Core.bundle.format("notice")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
                table.row();
                return table;
            })()).grow().center().maxWidth(770);
            dialog.show();
        }));

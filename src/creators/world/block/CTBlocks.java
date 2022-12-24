package creators.world.block;

import arc.graphics.Color;
import arc.struct.EnumSet;
import arc.struct.Seq;
import creators.Creators;
import mindustry.content.*;
import mindustry.entities.UnitSorts;
import mindustry.entities.bullet.*;
import mindustry.entities.effect.MultiEffect;
import mindustry.entities.pattern.ShootAlternate;
import mindustry.entities.pattern.ShootBarrel;
import mindustry.entities.pattern.ShootSpread;
import mindustry.gen.Sounds;
import mindustry.graphics.Pal;
import mindustry.type.Category;
import mindustry.type.ItemStack;
import mindustry.type.LiquidStack;
import mindustry.type.UnitType;
import mindustry.world.Block;
import mindustry.world.blocks.campaign.Accelerator;
import mindustry.world.blocks.defense.*;
import mindustry.world.blocks.defense.turrets.*;
import mindustry.world.blocks.distribution.*;
import mindustry.world.blocks.heat.HeatProducer;
import mindustry.world.blocks.liquid.*;
import mindustry.world.blocks.logic.*;
import mindustry.world.blocks.payloads.*;
import mindustry.world.blocks.power.*;
import mindustry.world.blocks.production.*;
import mindustry.world.blocks.sandbox.*;
import mindustry.world.blocks.storage.CoreBlock;
import mindustry.world.blocks.storage.StorageBlock;
import mindustry.world.blocks.storage.Unloader;
import mindustry.world.blocks.units.Reconstructor;
import mindustry.world.blocks.units.RepairTurret;
import mindustry.world.blocks.units.UnitFactory;
import mindustry.world.consumers.ConsumeItemExplode;
import mindustry.world.consumers.ConsumeItemFlammable;
import mindustry.world.consumers.ConsumeItemRadioactive;
import mindustry.world.draw.*;
import mindustry.world.meta.*;

import static mindustry.type.ItemStack.with;

public class CTBlocks{
    public static Block
    siliconSmelter, siliconCrucible, kiln, graphitePress, plastaniumCompressor, multiPress, phaseWeaver, surgeSmelter, pyratiteMixer, blastMixer, cryofluidMixer,
    melter, separator, disassembler, sporePress, pulverizer, incinerator, coalCentrifuge,

    //sandbox
    powerSource, powerVoid, itemSource, itemVoid, liquidSource, liquidVoid, payloadSource, payloadVoid, illuminator,

    //defense
    copperWall, copperWallLarge, titaniumWall, titaniumWallLarge, plastaniumWall, plastaniumWallLarge, thoriumWall, thoriumWallLarge, door, doorLarge,
    phaseWall, phaseWallLarge, surgeWall, surgeWallLarge,

    shieldedWall,

    mender, mendProjector, overdriveProjector, overdriveDome, forceProjector, shockMine,

    conveyor, titaniumConveyor, plastaniumConveyor, armoredConveyor, distributor, junction, itemBridge, phaseConveyor, sorter, invertedSorter, router,
    overflowGate, underflowGate, massDriver,

    mechanicalPump, rotaryPump, impulsePump, conduit, pulseConduit, platedConduit, liquidRouter, liquidContainer, liquidTank, liquidJunction, bridgeConduit, phaseConduit,

    combustionGenerator, thermalGenerator, steamGenerator, differentialGenerator, rtgGenerator, solarPanel, largeSolarPanel, thoriumReactor,
    impactReactor, battery, batteryLarge, powerNode, powerNodeLarge, surgeTower, diode,

    mechanicalDrill, pneumaticDrill, laserDrill, blastDrill, waterExtractor, oilExtractor, cultivator,

    coreShard, coreFoundation, coreNucleus, vault, container, unloader,

    duo, scatter, scorch, hail, arc, wave, lancer, swarmer, salvo, fuse, ripple, cyclone, foreshadow, spectre, meltdown, segment, parallax, tsunami,

    groundFactory, airFactory, navalFactory,
    additiveReconstructor, multiplicativeReconstructor, exponentialReconstructor, tetrativeReconstructor,
    repairPoint, repairTurret,

    payloadConveyor, payloadRouter,

    message, switchBlock, microProcessor, logicProcessor, hyperProcessor, largeLogicDisplay, logicDisplay, memoryCell, memoryBank,

    interplanetaryAccelerator,hyperProcessor2,
    largePayloadMassDriver,payloadLoader, payloadUnloader,constructor,largeConstructor,smallDeconstructor,deconstructor;

    public static void SETCT() {
        Creators.CTBlock.put(Blocks.siliconSmelter, siliconSmelter);
        Creators.CTBlock.put(Blocks.siliconCrucible, siliconCrucible);
        Creators.CTBlock.put(Blocks.kiln, kiln);
        Creators.CTBlock.put(Blocks.graphitePress, graphitePress);
        Creators.CTBlock.put(Blocks.plastaniumCompressor, plastaniumCompressor);
        Creators.CTBlock.put(Blocks.multiPress, multiPress);
        Creators.CTBlock.put(Blocks.phaseWeaver, phaseWeaver);
        Creators.CTBlock.put(Blocks.surgeSmelter, surgeSmelter);
        Creators.CTBlock.put(Blocks.pyratiteMixer, pyratiteMixer);
        Creators.CTBlock.put(Blocks.blastMixer, blastMixer);
        Creators.CTBlock.put(Blocks.cryofluidMixer, cryofluidMixer);
        Creators.CTBlock.put(Blocks.melter, melter);
        Creators.CTBlock.put(Blocks.separator, separator);
        Creators.CTBlock.put(Blocks.disassembler, disassembler);
        Creators.CTBlock.put(Blocks.sporePress, sporePress);
        Creators.CTBlock.put(Blocks.pulverizer, pulverizer);
        Creators.CTBlock.put(Blocks.incinerator, incinerator);
        Creators.CTBlock.put(Blocks.coalCentrifuge, coalCentrifuge);
        Creators.CTBlock.put(Blocks.powerSource, powerSource);
        Creators.CTBlock.put(Blocks.powerVoid, powerVoid);
        Creators.CTBlock.put(Blocks.itemSource, itemSource);
        Creators.CTBlock.put(Blocks.itemVoid, itemVoid);
        Creators.CTBlock.put(Blocks.liquidSource, liquidSource);
        Creators.CTBlock.put(Blocks.liquidVoid, liquidVoid);
        Creators.CTBlock.put(Blocks.payloadSource, payloadSource);
        Creators.CTBlock.put(Blocks.payloadVoid, payloadVoid);
        Creators.CTBlock.put(Blocks.illuminator, illuminator);
        Creators.CTBlock.put(Blocks.copperWall, copperWall);
        Creators.CTBlock.put(Blocks.copperWallLarge, copperWallLarge);
        Creators.CTBlock.put(Blocks.titaniumWall, titaniumWall);
        Creators.CTBlock.put(Blocks.titaniumWallLarge, titaniumWallLarge);
        Creators.CTBlock.put(Blocks.plastaniumWall, plastaniumWall);
        Creators.CTBlock.put(Blocks.plastaniumWallLarge, plastaniumWallLarge);
        Creators.CTBlock.put(Blocks.thoriumWall, thoriumWall);
        Creators.CTBlock.put(Blocks.thoriumWallLarge, thoriumWallLarge);
        Creators.CTBlock.put(Blocks.door, door);
        Creators.CTBlock.put(Blocks.doorLarge, doorLarge);
        Creators.CTBlock.put(Blocks.phaseWall, phaseWall);
        Creators.CTBlock.put(Blocks.phaseWallLarge, phaseWallLarge);
        Creators.CTBlock.put(Blocks.surgeWall, surgeWall);
        Creators.CTBlock.put(Blocks.surgeWallLarge, surgeWallLarge);
        Creators.CTBlock.put(Blocks.shieldedWall, shieldedWall);
        Creators.CTBlock.put(Blocks.mender, mender);
        Creators.CTBlock.put(Blocks.mendProjector, mendProjector);
        Creators.CTBlock.put(Blocks.overdriveProjector, overdriveProjector);
        Creators.CTBlock.put(Blocks.overdriveDome, overdriveDome);
        Creators.CTBlock.put(Blocks.forceProjector, forceProjector);
        Creators.CTBlock.put(Blocks.shockMine, shockMine);
        Creators.CTBlock.put(Blocks.conveyor, conveyor);
        Creators.CTBlock.put(Blocks.titaniumConveyor, titaniumConveyor);
        Creators.CTBlock.put(Blocks.plastaniumConveyor, plastaniumConveyor);
        Creators.CTBlock.put(Blocks.armoredConveyor, armoredConveyor);
        Creators.CTBlock.put(Blocks.distributor, distributor);
        Creators.CTBlock.put(Blocks.junction, junction);
        Creators.CTBlock.put(Blocks.itemBridge, itemBridge);
        Creators.CTBlock.put(Blocks.phaseConveyor, phaseConveyor);
        Creators.CTBlock.put(Blocks.sorter, sorter);
        Creators.CTBlock.put(Blocks.invertedSorter, invertedSorter);
        Creators.CTBlock.put(Blocks.router, router);
        Creators.CTBlock.put(Blocks.overflowGate, overflowGate);
        Creators.CTBlock.put(Blocks.underflowGate, underflowGate);
        Creators.CTBlock.put(Blocks.massDriver, massDriver);
        Creators.CTBlock.put(Blocks.mechanicalPump, mechanicalPump);
        Creators.CTBlock.put(Blocks.rotaryPump, rotaryPump);
        Creators.CTBlock.put(Blocks.impulsePump, impulsePump);
        Creators.CTBlock.put(Blocks.conduit, conduit);
        Creators.CTBlock.put(Blocks.pulseConduit, pulseConduit);
        Creators.CTBlock.put(Blocks.platedConduit, platedConduit);
        Creators.CTBlock.put(Blocks.liquidRouter, liquidRouter);
        Creators.CTBlock.put(Blocks.liquidContainer, liquidContainer);
        Creators.CTBlock.put(Blocks.liquidTank, liquidTank);
        Creators.CTBlock.put(Blocks.liquidJunction, liquidJunction);
        Creators.CTBlock.put(Blocks.bridgeConduit, bridgeConduit);
        Creators.CTBlock.put(Blocks.phaseConduit, phaseConduit);
        Creators.CTBlock.put(Blocks.combustionGenerator, combustionGenerator);
        Creators.CTBlock.put(Blocks.thermalGenerator, thermalGenerator);
        Creators.CTBlock.put(Blocks.steamGenerator, steamGenerator);
        Creators.CTBlock.put(Blocks.differentialGenerator, differentialGenerator);
        Creators.CTBlock.put(Blocks.rtgGenerator, rtgGenerator);
        Creators.CTBlock.put(Blocks.solarPanel, solarPanel);
        Creators.CTBlock.put(Blocks.largeSolarPanel, largeSolarPanel);
        Creators.CTBlock.put(Blocks.thoriumReactor, thoriumReactor);
        Creators.CTBlock.put(Blocks.impactReactor, impactReactor);
        Creators.CTBlock.put(Blocks.battery, battery);
        Creators.CTBlock.put(Blocks.batteryLarge, batteryLarge);
        Creators.CTBlock.put(Blocks.powerNode, powerNode);
        Creators.CTBlock.put(Blocks.powerNodeLarge, powerNodeLarge);
        Creators.CTBlock.put(Blocks.surgeTower, surgeTower);
        Creators.CTBlock.put(Blocks.diode, diode);
        Creators.CTBlock.put(Blocks.mechanicalDrill, mechanicalDrill);
        Creators.CTBlock.put(Blocks.pneumaticDrill, pneumaticDrill);
        Creators.CTBlock.put(Blocks.laserDrill, laserDrill);
        Creators.CTBlock.put(Blocks.blastDrill, blastDrill);
        Creators.CTBlock.put(Blocks.waterExtractor, waterExtractor);
        Creators.CTBlock.put(Blocks.oilExtractor, oilExtractor);
        Creators.CTBlock.put(Blocks.cultivator, cultivator);
        Creators.CTBlock.put(Blocks.coreShard, coreShard);
        Creators.CTBlock.put(Blocks.coreFoundation, coreFoundation);
        Creators.CTBlock.put(Blocks.coreNucleus, coreNucleus);
        Creators.CTBlock.put(Blocks.vault, vault);
        Creators.CTBlock.put(Blocks.container, container);
        Creators.CTBlock.put(Blocks.unloader, unloader);
        Creators.CTBlock.put(Blocks.duo, duo);
        Creators.CTBlock.put(Blocks.scatter, scatter);
        Creators.CTBlock.put(Blocks.scorch, scorch);
        Creators.CTBlock.put(Blocks.hail, hail);
        Creators.CTBlock.put(Blocks.arc, arc);
        Creators.CTBlock.put(Blocks.wave, wave);
        Creators.CTBlock.put(Blocks.lancer, lancer);
        Creators.CTBlock.put(Blocks.swarmer, swarmer);
        Creators.CTBlock.put(Blocks.salvo, salvo);
        Creators.CTBlock.put(Blocks.fuse, fuse);
        Creators.CTBlock.put(Blocks.ripple, ripple);
        Creators.CTBlock.put(Blocks.cyclone, cyclone);
        Creators.CTBlock.put(Blocks.foreshadow, foreshadow);
        Creators.CTBlock.put(Blocks.spectre, spectre);
        Creators.CTBlock.put(Blocks.meltdown, meltdown);
        Creators.CTBlock.put(Blocks.segment, segment);
        Creators.CTBlock.put(Blocks.parallax, parallax);
        Creators.CTBlock.put(Blocks.tsunami, tsunami);
        Creators.CTBlock.put(Blocks.groundFactory, groundFactory);
        Creators.CTBlock.put(Blocks.airFactory, airFactory);
        Creators.CTBlock.put(Blocks.navalFactory, navalFactory);
        Creators.CTBlock.put(Blocks.additiveReconstructor, additiveReconstructor);
        Creators.CTBlock.put(Blocks.multiplicativeReconstructor, multiplicativeReconstructor);
        Creators.CTBlock.put(Blocks.exponentialReconstructor, exponentialReconstructor);
        Creators.CTBlock.put(Blocks.tetrativeReconstructor, tetrativeReconstructor);
        Creators.CTBlock.put(Blocks.repairPoint, repairPoint);
        Creators.CTBlock.put(Blocks.repairTurret, repairTurret);
        Creators.CTBlock.put(Blocks.payloadConveyor, payloadConveyor);
        Creators.CTBlock.put(Blocks.payloadRouter, payloadRouter);
        Creators.CTBlock.put(Blocks.message, message);
        Creators.CTBlock.put(Blocks.switchBlock, switchBlock);
        Creators.CTBlock.put(Blocks.microProcessor, microProcessor);
        Creators.CTBlock.put(Blocks.logicProcessor, logicProcessor);
        Creators.CTBlock.put(Blocks.hyperProcessor, hyperProcessor);
        Creators.CTBlock.put(Blocks.largeLogicDisplay, largeLogicDisplay);
        Creators.CTBlock.put(Blocks.logicDisplay, logicDisplay);
        Creators.CTBlock.put(Blocks.memoryCell, memoryCell);
        Creators.CTBlock.put(Blocks.memoryBank, memoryBank);
        Creators.CTBlock.put(Blocks.interplanetaryAccelerator, interplanetaryAccelerator);
        Creators.CTBlock.put(Blocks.largePayloadMassDriver, largePayloadMassDriver);
        Creators.CTBlock.put(Blocks.payloadLoader, payloadLoader);
        Creators.CTBlock.put(Blocks.payloadUnloader, payloadUnloader);
        Creators.CTBlock.put(Blocks.constructor, constructor);
        Creators.CTBlock.put(Blocks.largeConstructor, largeConstructor);
        Creators.CTBlock.put(Blocks.smallDeconstructor, smallDeconstructor);
        Creators.CTBlock.put(Blocks.deconstructor, deconstructor);
    }

    public static void load(){
        pyratiteMixer = new GenericCrafter("pyratite-mixer"){{
            requirements(Category.crafting, with(Items.copper, 50, Items.lead, 25));
            hasItems = true;
            hasPower = true;
            outputItem = new ItemStack(Items.pyratite, 1);
            envEnabled |= Env.space;

            size = 2;

            consumePower(0.20f);
            consumeItems(with(Items.coal, 1, Items.lead, 2, Items.sand, 2));
        }};

        graphitePress = new GenericCrafter("graphite-press"){{
            requirements(Category.crafting, with(Items.copper, 75, Items.lead, 30));

            craftEffect = Fx.pulverizeMedium;
            outputItem = new ItemStack(Items.graphite, 1);
            craftTime = 50;
            size = 2;
            hasItems = true;

            consumeItem(Items.coal, 2);
        }};

        multiPress = new GenericCrafter("multi-press"){{
            requirements(Category.crafting, with(Items.titanium, 100, Items.silicon, 25, Items.lead, 100, Items.graphite, 50));

            craftEffect = Fx.pulverizeMedium;
            outputItem = new ItemStack(Items.graphite, 2);
            craftTime = 30f;
            itemCapacity = 20;
            size = 3;
            hasItems = true;
            hasLiquids = true;
            hasPower = true;

            consumePower(1.8f);
            consumeItem(Items.coal, 3);
            consumeLiquid(Liquids.water, 0.1f);
        }};

        siliconSmelter = new GenericCrafter("silicon-smelter"){{
            requirements(Category.crafting, with(Items.copper, 30, Items.lead, 25));
            craftEffect = Fx.smeltsmoke;
            outputItem = new ItemStack(Items.silicon, 1);
            craftTime = 40f;
            size = 2;
            hasPower = true;
            hasLiquids = false;
            drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffef99")));
            ambientSound = Sounds.smelter;
            ambientSoundVolume = 0.07f;

            consumeItems(with(Items.coal, 1, Items.sand, 2));
            consumePower(0.50f);
        }};

       siliconCrucible = new AttributeCrafter("silicon-crucible"){{
            requirements(Category.crafting, with(Items.titanium, 120, Items.metaglass, 80, Items.plastanium, 35, Items.silicon, 60));
            craftEffect = Fx.smeltsmoke;
            outputItem = new ItemStack(Items.silicon, 8);
            craftTime = 90f;
            size = 3;
            hasPower = true;
            hasLiquids = false;
            itemCapacity = 30;
            boostScale = 0.15f;
            drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffef99")));
            ambientSound = Sounds.smelter;
            ambientSoundVolume = 0.07f;

            consumeItems(with(Items.coal, 4, Items.sand, 6, Items.pyratite, 1));
            consumePower(4f);
        }};

        kiln = new GenericCrafter("kiln"){{
            requirements(Category.crafting, with(Items.copper, 60, Items.graphite, 30, Items.lead, 30));
            craftEffect = Fx.smeltsmoke;
            outputItem = new ItemStack(Items.metaglass, 1);
            craftTime = 24;
            size = 2;
            hasPower = hasItems = true;
            drawer = new DrawMulti(new DrawDefault(), new DrawFlame(Color.valueOf("ffc099")));
            ambientSound = Sounds.smelter;
            ambientSoundVolume = 0.07f;

            consumeItems(with(Items.lead, 1, Items.sand, 1));
            consumePower(0.60f);
        }};

        plastaniumCompressor = new GenericCrafter("plastanium-compressor"){{
            requirements(Category.crafting, with(Items.silicon, 80, Items.lead, 115, Items.graphite, 60, Items.titanium, 80));
            hasItems = true;
            liquidCapacity = 60f;
            craftTime = 60f;
            outputItem = new ItemStack(Items.plastanium, 1);
            size = 2;
            health = 320;
            hasPower = hasLiquids = true;
            craftEffect = Fx.formsmoke;
            updateEffect = Fx.plasticburn;
            drawer = new DrawMulti(new DrawDefault(), new DrawFade());

            consumeLiquid(Liquids.oil, 0.25f);
            consumePower(3f);
            consumeItem(Items.titanium, 2);
        }};

        phaseWeaver = new GenericCrafter("phase-weaver"){{
            requirements(Category.crafting, with(Items.silicon, 130, Items.lead, 120, Items.thorium, 75));
            craftEffect = Fx.smeltsmoke;
            outputItem = new ItemStack(Items.phaseFabric, 1);
            craftTime = 120f;
            size = 2;
            hasPower = true;
            drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawWeave(), new DrawDefault());
            envEnabled |= Env.space;

            ambientSound = Sounds.techloop;
            ambientSoundVolume = 0.02f;

            consumeItems(with(Items.thorium, 4, Items.sand, 10));
            consumePower(5f);
            itemCapacity = 20;
        }};

        surgeSmelter = new GenericCrafter("surge-smelter"){{
            requirements(Category.crafting, with(Items.silicon, 80, Items.lead, 80, Items.thorium, 70));
            craftEffect = Fx.smeltsmoke;
            outputItem = new ItemStack(Items.surgeAlloy, 1);
            craftTime = 62f;
            size = 3;
            hasPower = true;
            itemCapacity = 20;
            drawer = new DrawMulti(new DrawDefault(), new DrawFlame());

            consumePower(4f);
            consumeItems(with(Items.copper, 3, Items.lead, 4, Items.titanium, 2, Items.silicon, 3));
        }};

        cryofluidMixer = new GenericCrafter("cryofluid-mixer"){{
            requirements(Category.crafting, with(Items.lead, 65, Items.silicon, 40, Items.titanium, 60));
            outputLiquid = new LiquidStack(Liquids.cryofluid, 12f / 60f);
            size = 2;
            hasPower = true;
            hasItems = true;
            hasLiquids = true;
            rotate = false;
            solid = true;
            outputsLiquid = true;
            envEnabled = Env.any;
            drawer = new DrawMulti(new DrawRegion("-bottom"), new DrawLiquidTile(Liquids.cryofluid), new DrawDefault());
            liquidCapacity = 24f;
            craftTime = 120;

            consumePower(1f);
            consumeItem(Items.titanium);
            consumeLiquid(Liquids.water, 12f / 60f);
        }};

        blastMixer = new GenericCrafter("blast-mixer"){{
            requirements(Category.crafting, with(Items.lead, 30, Items.titanium, 20));
            hasItems = true;
            hasPower = true;
            outputItem = new ItemStack(Items.blastCompound, 3);
            size = 2;
            craftTime = 140f;
            envEnabled |= Env.space;
            craftEffect = Fx.explosion;
            consumeItems(with(Items.pyratite, 3, Items.sporePod, 4));
            consumePower(1.2f);
        }};

        melter = new GenericCrafter("melter"){{
            requirements(Category.crafting, with(Items.copper, 30, Items.lead, 35, Items.graphite, 45));
            health = 200;
            outputLiquid = new LiquidStack(Liquids.slag, 12f / 60f);

            craftTime = 10f;
            hasLiquids = hasPower = true;
            drawer = new DrawMulti(new DrawDefault(), new DrawLiquidRegion());

            consumePower(1f);
            consumeItem(Items.scrap, 1);
        }};

        separator = new Separator("separator"){{
            requirements(Category.crafting, with(Items.copper, 30, Items.titanium, 25));
            results = with(
                Items.copper, 5,
                Items.lead, 3,
                Items.graphite, 2,
                Items.titanium, 2
            );
            hasPower = true;
            craftTime = 35f;
            size = 2;

            consumePower(1.1f);
            consumeLiquid(Liquids.slag, 4f / 60f);
        }};

        disassembler = new Separator("disassembler"){{
            requirements(Category.crafting, with(Items.plastanium, 40, Items.titanium, 100, Items.silicon, 150, Items.thorium, 80));
            results = with(
                Items.sand, 2,
                Items.graphite, 1,
                Items.titanium, 1,
                Items.thorium, 1
            );
            hasPower = true;
            craftTime = 15f;
            size = 3;
            itemCapacity = 20;

            consumePower(4f);
            consumeItem(Items.scrap);
            consumeLiquid(Liquids.slag, 0.12f);
        }};

        sporePress = new GenericCrafter("spore-press"){{
            requirements(Category.crafting, with(Items.lead, 35, Items.silicon, 30));
            liquidCapacity = 60f;
            outputLiquid = new LiquidStack(Liquids.oil, 18f / 60f);
            size = 2;
            craftTime = 15;
            health = 320;
            hasLiquids = true;
            hasPower = true;
            craftEffect = Fx.none;
            drawer = new DrawMulti(
            new DrawRegion("-bottom"),
            new DrawPistons(){{
                sinMag = 1f;
            }},
            new DrawDefault(),
            new DrawLiquidRegion(),
            new DrawRegion("-top")
            );

            consumeItem(Items.sporePod, 1);
            consumePower(0.7f);
        }};

        pulverizer = new GenericCrafter("pulverizer"){{
            requirements(Category.crafting, with(Items.copper, 30, Items.lead, 25));
            outputItem = new ItemStack(Items.sand, 1);
            craftEffect = Fx.pulverize;
            craftTime = 40f;
            updateEffect = Fx.pulverizeSmall;
            hasItems = hasPower = true;
            drawer = new DrawMulti(new DrawDefault(), new DrawRegion("-rotator"){{
                spinSprite = true;
                rotateSpeed = 2f;
            }}, new DrawRegion("-top"));
            ambientSound = Sounds.grinding;
            ambientSoundVolume = 0.025f;

            consumeItem(Items.scrap, 1);
            consumePower(0.50f);
        }};

        coalCentrifuge = new GenericCrafter("coal-centrifuge"){{
            requirements(Category.crafting, with(Items.titanium, 20, Items.graphite, 40, Items.lead, 30));
            craftEffect = Fx.coalSmeltsmoke;
            outputItem = new ItemStack(Items.coal, 1);
            craftTime = 30f;
            size = 2;
            hasPower = hasItems = hasLiquids = true;
            rotateDraw = false;

            consumeLiquid(Liquids.oil, 0.1f);
            consumePower(0.7f);
        }};

        incinerator = new Incinerator("incinerator"){{
            requirements(Category.crafting, with(Items.graphite, 5, Items.lead, 15));
            health = 90;
            envEnabled |= Env.space;
            consumePower(0.50f);
        }};

        //erekir

        //endregion
        //region defense

        int wallHealthMultiplier = 4;

        copperWall = new Wall("copper-wall"){{
            requirements(Category.defense, with(Items.copper, 6));
            health = 80 * wallHealthMultiplier;
            envDisabled |= Env.scorching;
        }};

        copperWallLarge = new Wall("copper-wall-large"){{
            requirements(Category.defense, ItemStack.mult(copperWall.requirements, 4));
            health = 80 * 4 * wallHealthMultiplier;
            size = 2;
            envDisabled |= Env.scorching;
        }};

        titaniumWall = new Wall("titanium-wall"){{
            requirements(Category.defense, with(Items.titanium, 6));
            health = 110 * wallHealthMultiplier;
            envDisabled |= Env.scorching;
        }};

        titaniumWallLarge = new Wall("titanium-wall-large"){{
            requirements(Category.defense, ItemStack.mult(titaniumWall.requirements, 4));
            health = 110 * wallHealthMultiplier * 4;
            size = 2;
            envDisabled |= Env.scorching;
        }};

        plastaniumWall = new Wall("plastanium-wall"){{
            requirements(Category.defense, with(Items.plastanium, 5, Items.metaglass, 2));
            health = 125 * wallHealthMultiplier;
            insulated = true;
            absorbLasers = true;
            schematicPriority = 10;
            envDisabled |= Env.scorching;
        }};

        plastaniumWallLarge = new Wall("plastanium-wall-large"){{
            requirements(Category.defense, ItemStack.mult(plastaniumWall.requirements, 4));
            health = 125 * wallHealthMultiplier * 4;
            size = 2;
            insulated = true;
            absorbLasers = true;
            schematicPriority = 10;
            envDisabled |= Env.scorching;
        }};

        //TODO all these should be hidden from view completely
        thoriumWall = new Wall("thorium-wall"){{
            requirements(Category.defense, with(Items.thorium, 6));
            health = 200 * wallHealthMultiplier;
            envDisabled |= Env.scorching;
        }};

        thoriumWallLarge = new Wall("thorium-wall-large"){{
            requirements(Category.defense, ItemStack.mult(thoriumWall.requirements, 4));
            health = 200 * wallHealthMultiplier * 4;
            size = 2;
            envDisabled |= Env.scorching;
        }};

        phaseWall = new Wall("phase-wall"){{
            requirements(Category.defense, with(Items.phaseFabric, 6));
            health = 150 * wallHealthMultiplier;
            chanceDeflect = 10f;
            flashHit = true;
            envDisabled |= Env.scorching;
        }};

        phaseWallLarge = new Wall("phase-wall-large"){{
            requirements(Category.defense, ItemStack.mult(phaseWall.requirements, 4));
            health = 150 * 4 * wallHealthMultiplier;
            size = 2;
            chanceDeflect = 10f;
            flashHit = true;
            envDisabled |= Env.scorching;
        }};

        surgeWall = new Wall("surge-wall"){{
            requirements(Category.defense, with(Items.surgeAlloy, 6));
            health = 230 * wallHealthMultiplier;
            lightningChance = 0.05f;
            envDisabled |= Env.scorching;
        }};

        surgeWallLarge = new Wall("surge-wall-large"){{
            requirements(Category.defense, ItemStack.mult(surgeWall.requirements, 4));
            health = 230 * 4 * wallHealthMultiplier;
            size = 2;
            lightningChance = 0.05f;
            envDisabled |= Env.scorching;
        }};

        door = new Door("door"){{
            requirements(Category.defense, with(Items.titanium, 6, Items.silicon, 4));
            health = 100 * wallHealthMultiplier;
            envDisabled |= Env.scorching;
        }};

        doorLarge = new Door("door-large"){{
            requirements(Category.defense, ItemStack.mult(door.requirements, 4));
            openfx = Fx.dooropenlarge;
            closefx = Fx.doorcloselarge;
            health = 100 * 4 * wallHealthMultiplier;
            size = 2;
            envDisabled |= Env.scorching;
        }};

        shieldedWall = new ShieldWall("shielded-wall"){{
            requirements(Category.defense, ItemStack.with(Items.phaseFabric, 20, Items.surgeAlloy, 12));
            consumePower(3f / 60f);

            outputsPower = false;
            hasPower = true;
            consumesPower = true;
            conductivePower = true;

            chanceDeflect = 8f;

            health = 260 * wallHealthMultiplier * 4;
            armor = 15f;
            size = 2;
        }};

        mender = new MendProjector("mender"){{
            requirements(Category.effect, with(Items.lead, 30, Items.copper, 25));
            consumePower(0.3f);
            size = 1;
            reload = 200f;
            range = 40f;
            healPercent = 4f;
            phaseBoost = 4f;
            phaseRangeBoost = 20f;
            health = 80;
            consumeItem(Items.silicon).boost();
        }};

        mendProjector = new MendProjector("mend-projector"){{
            requirements(Category.effect, with(Items.lead, 100, Items.titanium, 25, Items.silicon, 40, Items.copper, 50));
            consumePower(1.5f);
            size = 2;
            reload = 250f;
            range = 85f;
            healPercent = 11f;
            phaseBoost = 15f;
            scaledHealth = 80;
            consumeItem(Items.phaseFabric).boost();
        }};

        overdriveProjector = new OverdriveProjector("overdrive-projector"){{
            requirements(Category.effect, with(Items.lead, 100, Items.titanium, 75, Items.silicon, 75, Items.plastanium, 30));
            consumePower(3.50f);
            speedBoost = 1.45f;
            speedBoostPhase = 0.55f;
            size = 2;
            consumeItem(Items.phaseFabric).boost();
        }};

        overdriveDome = new OverdriveProjector("overdrive-dome"){{
            requirements(Category.effect, with(Items.lead, 200, Items.titanium, 130, Items.silicon, 130, Items.plastanium, 80, Items.surgeAlloy, 120));
            consumePower(10f);
            size = 3;
            range = 200f;
            useTime = 300f;
            speedBoost = 1.8f;
            speedBoostPhase = 0.56f;
            //hasBoost = true;
            consumeItems(with(Items.phaseFabric, 2)).boost();
        }};

        forceProjector = new ForceProjector("force-projector"){{
            requirements(Category.effect, with(Items.lead, 100, Items.titanium, 75, Items.silicon, 125));
            size = 3;
            phaseRadiusBoost = 80f;
            radius = 101.7f;
            shieldHealth = 750f;
            cooldownNormal = 1.5f;
            cooldownLiquid = 1.2f;
            cooldownBrokenBase = 0.35f;

            itemConsumer = consumeItem(Items.phaseFabric).boost();
            consumePower(4f);
        }};

        shockMine = new ShockMine("shock-mine"){{
            requirements(Category.effect, with(Items.lead, 25, Items.silicon, 12));
            hasShadow = false;
            health = 50;
            damage = 25;
            tileDamage = 7f;
            length = 10;
            tendrils = 4;
        }};

        //endregion
        //region distribution

        conveyor = new Conveyor("conveyor"){{
            requirements(Category.distribution, with(Items.copper, 1), true);
            health = 45;
            speed = 0.045f;
            displayedSpeed = 6.5f;
            buildCostMultiplier = 2f;
        }
            @Override
            public void init(){
                super.init();

                junctionReplacement = CTBlocks.junction;
                bridgeReplacement = CTBlocks.itemBridge;
            }
        };

        titaniumConveyor = new Conveyor("titanium-conveyor"){{
            requirements(Category.distribution, with(Items.copper, 1, Items.lead, 1, Items.titanium, 1));
            health = 65;
            speed = 0.08f;
            displayedSpeed = 11f;
        }
            @Override
            public void init(){
                super.init();

                junctionReplacement = CTBlocks.junction;
                bridgeReplacement = CTBlocks.itemBridge;
            }
        };

        plastaniumConveyor = new StackConveyor("plastanium-conveyor"){{
            requirements(Category.distribution, with(Items.plastanium, 1, Items.silicon, 1, Items.graphite, 1));
            health = 75;
            speed = 4f / 60f;
            itemCapacity = 10;
        }};

        armoredConveyor = new ArmoredConveyor("armored-conveyor"){{
            requirements(Category.distribution, with(Items.plastanium, 1, Items.thorium, 1, Items.metaglass, 1));
            health = 180;
            speed = 0.08f;
            displayedSpeed = 11f;
        }
            @Override
            public void init(){
                super.init();

                junctionReplacement = CTBlocks.junction;
                bridgeReplacement = CTBlocks.itemBridge;
            }
        };

        junction = new Junction("junction"){{
            requirements(Category.distribution, with(Items.copper, 2), true);
            speed = 26;
            capacity = 6;
            health = 30;
            buildCostMultiplier = 6f;
        }};

        itemBridge = new BufferedItemBridge("bridge-conveyor"){{
            requirements(Category.distribution, with(Items.lead, 6, Items.copper, 6));
            fadeIn = moveArrows = false;
            range = 4;
            speed = 74f;
            arrowSpacing = 6f;
            bufferCapacity = 14;
        }};

        phaseConveyor = new ItemBridge("phase-conveyor"){{
            requirements(Category.distribution, with(Items.phaseFabric, 5, Items.silicon, 7, Items.lead, 10, Items.graphite, 10));
            range = 12;
            arrowPeriod = 0.9f;
            arrowTimeScl = 2.75f;
            hasPower = true;
            pulse = true;
            envEnabled |= Env.space;
            consumePower(0.30f);
        }};

        sorter = new Sorter("sorter"){{
            requirements(Category.distribution, with(Items.lead, 2, Items.copper, 2));
            buildCostMultiplier = 3f;
        }};

        invertedSorter = new Sorter("inverted-sorter"){{
            requirements(Category.distribution, with(Items.lead, 2, Items.copper, 2));
            buildCostMultiplier = 3f;
            invert = true;
        }};

        router = new Router("router"){{
            requirements(Category.distribution, with(Items.copper, 3));
            buildCostMultiplier = 4f;
        }};

        distributor = new Router("distributor"){{
            requirements(Category.distribution, with(Items.lead, 4, Items.copper, 4));
            buildCostMultiplier = 3f;
            size = 2;
        }};

        overflowGate = new OverflowGate("overflow-gate"){{
            requirements(Category.distribution, with(Items.lead, 2, Items.copper, 4));
            buildCostMultiplier = 3f;
        }};

        underflowGate = new OverflowGate("underflow-gate"){{
            requirements(Category.distribution, with(Items.lead, 2, Items.copper, 4));
            buildCostMultiplier = 3f;
            invert = true;
        }};

        massDriver = new MassDriver("mass-driver"){{
            requirements(Category.distribution, with(Items.titanium, 125, Items.silicon, 75, Items.lead, 125, Items.thorium, 50));
            size = 3;
            itemCapacity = 120;
            reload = 200f;
            range = 440f;
            consumePower(1.75f);
        }};

        //erekir transport blocks

        //endregion
        //region liquid

        mechanicalPump = new Pump("mechanical-pump"){{
            requirements(Category.liquid, with(Items.copper, 15, Items.metaglass, 10));
            pumpAmount = 7f / 60f;
        }};

        rotaryPump = new Pump("rotary-pump"){{
            requirements(Category.liquid, with(Items.copper, 70, Items.metaglass, 50, Items.silicon, 20, Items.titanium, 35));
            pumpAmount = 0.2f;
            consumePower(0.3f);
            liquidCapacity = 30f;
            hasPower = true;
            size = 2;
        }};

        impulsePump = new Pump("impulse-pump"){{
            requirements(Category.liquid, with(Items.copper, 80, Items.metaglass, 90, Items.silicon, 30, Items.titanium, 40, Items.thorium, 35));
            pumpAmount = 0.22f;
            consumePower(1.3f);
            liquidCapacity = 40f;
            hasPower = true;
            size = 3;
        }};

        conduit = new Conduit("conduit"){{
            requirements(Category.liquid, with(Items.metaglass, 1));
            health = 45;
        }
            @Override
            public void init(){
                super.init();

                junctionReplacement = CTBlocks.liquidJunction;
                bridgeReplacement = CTBlocks.bridgeConduit;
            }
        };

        pulseConduit = new Conduit("pulse-conduit"){{
            requirements(Category.liquid, with(Items.titanium, 2, Items.metaglass, 1));
            liquidCapacity = 16f;
            liquidPressure = 1.025f;
            health = 90;
        }
            @Override
            public void init(){
                super.init();

                junctionReplacement = CTBlocks.liquidJunction;
                bridgeReplacement = CTBlocks.bridgeConduit;
            }
        };

        platedConduit = new ArmoredConduit("plated-conduit"){{
            requirements(Category.liquid, with(Items.thorium, 2, Items.metaglass, 1, Items.plastanium, 1));
            liquidCapacity = 16f;
            liquidPressure = 1.025f;
            health = 220;
        }
            @Override
            public void init(){
                super.init();

                junctionReplacement = CTBlocks.liquidJunction;
                bridgeReplacement = CTBlocks.bridgeConduit;
            }
        };

        liquidRouter = new LiquidRouter("liquid-router"){{
            requirements(Category.liquid, with(Items.graphite, 4, Items.metaglass, 2));
            liquidCapacity = 30f;
        }};

        liquidContainer = new LiquidRouter("liquid-container"){{
            requirements(Category.liquid, with(Items.titanium, 10, Items.metaglass, 15));
            liquidCapacity = 700f;
            size = 2;
        }};

        liquidTank = new LiquidRouter("liquid-tank"){{
            requirements(Category.liquid, with(Items.titanium, 30, Items.metaglass, 40));
            size = 3;
            liquidCapacity = 1800f;
            health = 500;
        }};

        liquidJunction = new LiquidJunction("liquid-junction"){{
            requirements(Category.liquid, with(Items.graphite, 4, Items.metaglass, 8));
        }};

        bridgeConduit = new LiquidBridge("bridge-conduit"){{
            requirements(Category.liquid, with(Items.graphite, 4, Items.metaglass, 8));
            fadeIn = moveArrows = false;
            arrowSpacing = 6f;
            range = 4;
            hasPower = false;
        }};

        phaseConduit = new LiquidBridge("phase-conduit"){{
            requirements(Category.liquid, with(Items.phaseFabric, 5, Items.silicon, 7, Items.metaglass, 20, Items.titanium, 10));
            range = 12;
            arrowPeriod = 0.9f;
            arrowTimeScl = 2.75f;
            hasPower = true;
            liquidCapacity = 35;
            canOverdrive = false;
            pulse = true;
            consumePower(0.30f);
        }};

        //endregion
        //region power

        powerNode = new PowerNode("power-node"){{
            requirements(Category.power, with(Items.copper, 1, Items.lead, 3));
            maxNodes = 10;
            laserRange = 6;
        }};

        powerNodeLarge = new PowerNode("power-node-large"){{
            requirements(Category.power, with(Items.titanium, 5, Items.lead, 10, Items.silicon, 3));
            size = 2;
            maxNodes = 15;
            laserRange = 15f;
        }};

        surgeTower = new PowerNode("surge-tower"){{
            requirements(Category.power, with(Items.titanium, 7, Items.lead, 10, Items.silicon, 15, Items.surgeAlloy, 15));
            size = 2;
            maxNodes = 2;
            laserRange = 40f;
            schematicPriority = -15;
        }};

        diode = new PowerDiode("diode"){{
            requirements(Category.power, with(Items.silicon, 10, Items.plastanium, 5, Items.metaglass, 10));
        }};

        battery = new Battery("battery"){{
            requirements(Category.power, with(Items.copper, 5,  Items.graphite, 5,Items.lead, 20));
            consumePowerBuffered(4000f);
            baseExplosiveness = 1f;
        }};

        batteryLarge = new Battery("battery-large"){{
            requirements(Category.power, with( Items.titanium, 20,
            Items.lead, 40,
            Items.silicon, 20,
            Items.graphite, 50));
            size = 3;
            consumePowerBuffered(50000f);
            baseExplosiveness = 5f;
        }};

        combustionGenerator = new ConsumeGenerator("combustion-generator"){{
            requirements(Category.power, with(Items.copper, 25, Items.lead, 15));
            powerProduction = 1f;
            itemDuration = 120f;

            ambientSound = Sounds.smelter;
            ambientSoundVolume = 0.03f;
            generateEffect = Fx.generatespark;

            consume(new ConsumeItemFlammable());
            consume(new ConsumeItemExplode());

            drawer = new DrawMulti(new DrawDefault(), new DrawWarmupRegion());
        }};

        thermalGenerator = new ThermalGenerator("thermal-generator"){{
            requirements(Category.power, with(Items.copper, 40, Items.graphite, 35, Items.lead, 50, Items.silicon, 35, Items.metaglass, 40));
            powerProduction = 1.8f;
            generateEffect = Fx.redgeneratespark;
            effectChance = 0.011f;
            size = 2;
            floating = true;
            ambientSound = Sounds.hum;
            ambientSoundVolume = 0.06f;
        }};

        steamGenerator = new ConsumeGenerator("steam-generator"){{
            requirements(Category.power, with(Items.copper, 35, Items.graphite, 25, Items.lead, 40, Items.silicon, 30));
            powerProduction = 5.5f;
            itemDuration = 90f;
            consumeLiquid(Liquids.water, 0.1f);
            hasLiquids = true;
            size = 2;
            generateEffect = Fx.generatespark;

            ambientSound = Sounds.smelter;
            ambientSoundVolume = 0.06f;

            consume(new ConsumeItemFlammable());
            consume(new ConsumeItemExplode());

            drawer = new DrawMulti(
            new DrawDefault(),
            new DrawWarmupRegion(),
            new DrawRegion("-turbine"){{
                rotateSpeed = 2f;
            }},
            new DrawRegion("-turbine"){{
                rotateSpeed = -2f;
                rotation = 45f;
            }},
            new DrawRegion("-cap"),
            new DrawLiquidRegion()
            );
        }};

        differentialGenerator = new ConsumeGenerator("differential-generator"){{
            requirements(Category.power, with(Items.copper, 70, Items.titanium, 50, Items.lead, 100, Items.silicon, 65, Items.metaglass, 50));
            powerProduction =  1300f / 60f;
            itemDuration = 180f;
            hasLiquids = true;
            hasItems = true;
            size = 3;
            ambientSound = Sounds.steam;
            generateEffect = Fx.generatespark;
            ambientSoundVolume = 0.03f;

            drawer = new DrawMulti(new DrawDefault(), new DrawWarmupRegion(), new DrawLiquidRegion());

            consumeItem(Items.pyratite);
            consumeLiquid(Liquids.cryofluid, 0.1f);
        }};

        rtgGenerator = new ConsumeGenerator("rtg-generator"){{
            requirements(Category.power, with(Items.lead, 100, Items.silicon, 75, Items.phaseFabric, 25, Items.plastanium, 75, Items.thorium, 50));
            size = 2;
            powerProduction = 4.5f;
            itemDuration = 60 * 14f;
            envEnabled = Env.any;
            generateEffect = Fx.generatespark;

            drawer = new DrawMulti(new DrawDefault(), new DrawWarmupRegion());
            consume(new ConsumeItemRadioactive());
        }};

        solarPanel = new SolarGenerator("solar-panel"){{
            requirements(Category.power, with(Items.lead, 10, Items.silicon, 15));
            powerProduction = 0.1f;
        }};

        largeSolarPanel = new SolarGenerator("solar-panel-large"){{
            requirements(Category.power, with(Items.lead, 80, Items.silicon, 110, Items.phaseFabric, 15));
            size = 3;
            powerProduction = 1.3f;
        }};

        thoriumReactor = new NuclearReactor("thorium-reactor"){{
            requirements(Category.power, with(Items.lead, 300, Items.silicon, 200, Items.graphite, 150, Items.thorium, 150, Items.metaglass, 50));
            ambientSound = Sounds.hum;
            ambientSoundVolume = 0.24f;
            size = 3;
            health = 700;
            itemDuration = 360f;
            powerProduction = 15f;
            heating = 0.02f;

            consumeItem(Items.thorium);
            //TODO how to non update
            consumeLiquid(Liquids.cryofluid, heating / coolantPower).update(false);
        }};

        impactReactor = new ImpactReactor("impact-reactor"){{
            requirements(Category.power, with(Items.lead, 500, Items.silicon, 300, Items.graphite, 400, Items.thorium, 100, Items.surgeAlloy, 250, Items.metaglass, 250));
            size = 4;
            health = 900;
            powerProduction = 9200f/60f;
            itemDuration = 140f;
            ambientSound = Sounds.pulse;
            ambientSoundVolume = 0.07f;

            consumePower(25f);
            consumeItem(Items.blastCompound);
            consumeLiquid(Liquids.cryofluid, 0.25f);
        }};

        //endregion power
        //region production

        mechanicalDrill = new Drill("mechanical-drill"){{
            requirements(Category.production, with(Items.copper, 12), true);
            tier = 2;
            drillTime = 350;
            size = 2;
            //mechanical drill doesn't work in space
            envEnabled ^= Env.space;

            consumeLiquid(Liquids.water, 0.05f).boost();
        }};

        pneumaticDrill = new Drill("pneumatic-drill"){{
            requirements(Category.production, with(Items.copper, 18, Items.graphite, 10));
            tier = 3;
            drillTime = 180;
            size = 2;

            consumeLiquid(Liquids.water, 0.06f).boost();
        }};

        laserDrill = new Drill("laser-drill"){{
            requirements(Category.production, with(Items.copper, 35, Items.graphite, 30, Items.silicon, 30, Items.titanium, 20));
            drillTime = 240;
            size = 3;
            hasPower = true;
            tier = 4;
            updateEffect = Fx.pulverizeMedium;
            drillEffect = Fx.mineBig;

            consumePower(1.10f);
            consumeLiquid(Liquids.water, 0.08f).boost();
        }};

        blastDrill = new Drill("blast-drill"){{
            requirements(Category.production, with(Items.copper, 65, Items.silicon, 60, Items.titanium, 50, Items.thorium, 75));
            drillTime = 240;
            size = 4;
            drawRim = true;
            hasPower = true;
            tier = 4;
            updateEffect = Fx.pulverizeRed;
            updateEffectChance = 0.03f;
            drillEffect = Fx.mineHuge;
            rotateSpeed = 6f;
            warmupSpeed = 0.01f;
            itemCapacity = 20;

            //more than the laser drill
            liquidBoostIntensity = 1.8f;

            consumePower(3f);
            consumeLiquid(Liquids.water, 0.1f).boost();
        }};

        waterExtractor = new SolidPump("water-extractor"){{
            requirements(Category.production, with(Items.metaglass, 30, Items.graphite, 30, Items.lead, 30, Items.copper, 30));
            result = Liquids.water;
            pumpAmount = 0.131f;
            size = 2;
            liquidCapacity = 30f;
            rotateSpeed = 1.4f;
            attribute = Attribute.water;
            envRequired |= Env.groundWater;

            consumePower(1.5f);
        }};

        cultivator = new AttributeCrafter("cultivator"){{
            requirements(Category.production, with(Items.copper, 25, Items.lead, 25, Items.silicon, 10));
            outputItem = new ItemStack(Items.sporePod, 1);
            craftTime = 100;
            size = 2;
            hasLiquids = true;
            hasPower = true;
            hasItems = true;
            floating = true;
            craftEffect = Fx.none;
            envRequired |= Env.spores;
            attribute = Attribute.spores;

            legacyReadWarmup = true;
            drawer = new DrawMulti(
            new DrawDefault(),
            new DrawCultivator(),
            new DrawRegion("-top")
            );
            maxBoost = 2f;

            consumePower(80f / 60f);
            consumeLiquid(Liquids.water, 18f / 60f);
        }};

        oilExtractor = new Fracker("oil-extractor"){{
            requirements(Category.production, with(Items.copper, 150, Items.graphite, 175, Items.lead, 115, Items.thorium, 115, Items.silicon, 75));
            result = Liquids.oil;
            updateEffect = Fx.pulverize;
            updateEffectChance = 0.05f;
            pumpAmount = 0.25f;
            size = 3;
            liquidCapacity = 30f;
            attribute = Attribute.oil;
            baseEfficiency = 0f;
            itemUseTime = 60f;

            consumeItem(Items.sand);
            consumePower(3f);
            consumeLiquid(Liquids.water, 0.15f);
        }};

        //endregion
        //region storage

        coreShard = new CoreBlock("core-shard"){{
            requirements(Category.effect, BuildVisibility.editorOnly, with(Items.copper, 6500));
            alwaysUnlocked = true;

            isFirstTier = true;
            unitType = CTUnitTypes.alpha;
            health = 1100;
            itemCapacity = 6000;
            size = 3;

            unitCapModifier = 8;
        }};

        coreFoundation = new CoreBlock("core-foundation"){{
            requirements(Category.effect, with(Items.copper, 3000, Items.lead, 3000, Items.silicon, 2000));

            unitType = CTUnitTypes.beta;
            health = 3500;
            itemCapacity = 13000;
            size = 4;
            thrusterLength = 34/4f;

            unitCapModifier = 12;
            researchCostMultiplier = 0.07f;
        }};

        coreNucleus = new CoreBlock("core-nucleus"){{
            requirements(Category.effect, with(Items.copper, 8000, Items.lead, 8000, Items.silicon, 5000, Items.thorium, 4000));

            unitType = CTUnitTypes.gamma;
            health = 6000;
            itemCapacity = 21000;
            size = 5;
            thrusterLength = 40/4f;

            unitCapModifier = 16;
            researchCostMultiplier = 0.11f;
        }};
        container = new StorageBlock("container"){{
            requirements(Category.effect, with(Items.titanium, 100));
            size = 2;
            itemCapacity = 300;
            scaledHealth = 55;
        }};

        vault = new StorageBlock("vault"){{
            requirements(Category.effect, with(Items.titanium, 250, Items.thorium, 125));
            size = 3;
            itemCapacity = 1000;
            scaledHealth = 55;
        }};

        //TODO move tabs?
        unloader = new Unloader("unloader"){{
            requirements(Category.effect, with(Items.titanium, 25, Items.silicon, 30));
            speed = 60f / 11f;
            group = BlockGroup.transportation;
        }};

        //endregion
        //region turrets

        duo = new ItemTurret("duo"){{
            requirements(Category.turret, with(Items.copper, 35), true);
            ammo(
                Items.copper,  new BasicBulletType(2.5f, 9){{
                    width = 7f;
                    height = 9f;
                    lifetime = 60f;
                    ammoMultiplier = 2;
                }},
                Items.graphite, new BasicBulletType(3.5f, 18){{
                    width = 9f;
                    height = 12f;
                    reloadMultiplier = 0.6f;
                    ammoMultiplier = 4;
                    lifetime = 60f;
                }},
                Items.silicon, new BasicBulletType(3f, 12){{
                    width = 7f;
                    height = 9f;
                    homingPower = 0.1f;
                    reloadMultiplier = 1.5f;
                    ammoMultiplier = 5;
                    lifetime = 60f;
                }}
            );

            shoot = new ShootAlternate(3.5f);

            shootY = 3f;
            reload = 20f;
            range = 110;
            shootCone = 15f;
            ammoUseEffect = Fx.casing1;
            health = 250;
            inaccuracy = 2f;
            rotateSpeed = 10f;
            coolant = consumeCoolant(0.1f);

            limitRange();
        }};

        scatter = new ItemTurret("scatter"){{
            requirements(Category.turret, with(Items.copper, 85, Items.lead, 45));
            ammo(
                Items.scrap, new FlakBulletType(4f, 3){{
                    lifetime = 60f;
                    ammoMultiplier = 5f;
                    shootEffect = Fx.shootSmall;
                    reloadMultiplier = 0.5f;
                    width = 6f;
                    height = 8f;
                    hitEffect = Fx.flakExplosion;
                    splashDamage = 22f * 1.5f;
                    splashDamageRadius = 24f;
                }},
                Items.lead, new FlakBulletType(4.2f, 3){{
                    lifetime = 60f;
                    ammoMultiplier = 4f;
                    shootEffect = Fx.shootSmall;
                    width = 6f;
                    height = 8f;
                    hitEffect = Fx.flakExplosion;
                    splashDamage = 27f * 1.5f;
                    splashDamageRadius = 15f;
                }},
                Items.metaglass, new FlakBulletType(4f, 3){{
                    lifetime = 60f;
                    ammoMultiplier = 5f;
                    shootEffect = Fx.shootSmall;
                    reloadMultiplier = 0.8f;
                    width = 6f;
                    height = 8f;
                    hitEffect = Fx.flakExplosion;
                    splashDamage = 30f * 1.5f;
                    splashDamageRadius = 20f;
                    fragBullets = 6;
                    fragBullet = new BasicBulletType(3f, 5){{
                        width = 5f;
                        height = 12f;
                        shrinkY = 1f;
                        lifetime = 20f;
                        backColor = Pal.gray;
                        frontColor = Color.white;
                        despawnEffect = Fx.none;
                        collidesGround = false;
                    }};
                }}
            );
            reload = 18f;
            range = 220f;
            size = 2;
            targetGround = false;

            shoot.shotDelay = 5f;
            shoot.shots = 2;

            recoil = 2f;
            rotateSpeed = 15f;
            inaccuracy = 17f;
            shootCone = 35f;

            scaledHealth = 200;
            shootSound = Sounds.shootSnap;
            coolant = consumeCoolant(0.2f);

            limitRange(2);
        }};

        scorch = new ItemTurret("scorch"){{
            requirements(Category.turret, with(Items.copper, 25, Items.graphite, 22));
            ammo(
                Items.coal, new BulletType(3.35f, 17f){{
                    ammoMultiplier = 3f;
                    hitSize = 7f;
                    lifetime = 18f;
                    pierce = true;
                    collidesAir = false;
                    statusDuration = 60f * 4;
                    shootEffect = Fx.shootSmallFlame;
                    hitEffect = Fx.hitFlameSmall;
                    despawnEffect = Fx.none;
                    status = StatusEffects.burning;
                    keepVelocity = false;
                    hittable = false;
                }},
                Items.pyratite, new BulletType(4f, 60f){{
                    ammoMultiplier = 6f;
                    hitSize = 7f;
                    lifetime = 18f;
                    pierce = true;
                    collidesAir = false;
                    statusDuration = 60f * 10;
                    shootEffect = Fx.shootPyraFlame;
                    hitEffect = Fx.hitFlameSmall;
                    despawnEffect = Fx.none;
                    status = StatusEffects.burning;
                    hittable = false;
                }}
            );
            recoil = 0f;
            reload = 6f;
            coolantMultiplier = 1.5f;
            range = 60f;
            shootCone = 50f;
            targetAir = false;
            ammoUseEffect = Fx.none;
            health = 400;
            shootSound = Sounds.flame;
            coolant = consumeCoolant(0.1f);
        }};

        hail = new ItemTurret("hail"){{
            requirements(Category.turret, with(Items.copper, 40, Items.graphite, 17));
            ammo(
                Items.graphite, new ArtilleryBulletType(3f, 20){{
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 11f;
                    collidesTiles = false;
                    splashDamageRadius = 25f * 0.75f;
                    splashDamage = 33f;
                }},
                Items.silicon, new ArtilleryBulletType(3f, 20){{
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 11f;
                    collidesTiles = false;
                    splashDamageRadius = 25f * 0.75f;
                    splashDamage = 33f;
                    reloadMultiplier = 1.2f;
                    ammoMultiplier = 3f;
                    homingPower = 0.08f;
                    homingRange = 50f;
                }},
                Items.pyratite, new ArtilleryBulletType(3f, 25){{
                    hitEffect = Fx.blastExplosion;
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 13f;
                    collidesTiles = false;
                    splashDamageRadius = 25f * 0.75f;
                    splashDamage = 45f;
                    status = StatusEffects.burning;
                    statusDuration = 60f * 12f;
                    frontColor = Pal.lightishOrange;
                    backColor = Pal.lightOrange;
                    makeFire = true;
                    trailEffect = Fx.incendTrail;
                    ammoMultiplier = 4f;
                }}
            );
            targetAir = false;
            reload = 60f;
            recoil = 2f;
            range = 235f;
            inaccuracy = 1f;
            shootCone = 10f;
            health = 260;
            shootSound = Sounds.bang;
            coolant = consumeCoolant(0.1f);
            limitRange(0f);
        }};

        wave = new LiquidTurret("wave"){{
            requirements(Category.turret, with(Items.metaglass, 45, Items.lead, 75, Items.copper, 25));
            ammo(
                Liquids.water,new LiquidBulletType(Liquids.water){{
                    knockback = 0.7f;
                    drag = 0.01f;
                }},
                Liquids.slag, new LiquidBulletType(Liquids.slag){{
                    damage = 4;
                    drag = 0.01f;
                }},
                Liquids.cryofluid, new LiquidBulletType(Liquids.cryofluid){{
                    drag = 0.01f;
                }},
                Liquids.oil, new LiquidBulletType(Liquids.oil){{
                    drag = 0.01f;
                }}
            );
            size = 2;
            recoil = 0f;
            reload = 3f;
            inaccuracy = 5f;
            shootCone = 50f;
            liquidCapacity = 10f;
            shootEffect = Fx.shootLiquid;
            range = 110f;
            scaledHealth = 250;
            flags = EnumSet.of(BlockFlag.turret, BlockFlag.extinguisher);
        }};

        //TODO these may work in space, but what's the point?
        lancer = new PowerTurret("lancer"){{
            requirements(Category.turret, with(Items.copper, 60, Items.lead, 70, Items.silicon, 60, Items.titanium, 30));
            range = 165f;

            shoot.firstShotDelay = 40f;

            recoil = 2f;
            reload = 80f;
            shake = 2f;
            shootEffect = Fx.lancerLaserShoot;
            smokeEffect = Fx.none;
            heatColor = Color.red;
            size = 2;
            scaledHealth = 280;
            targetAir = false;
            moveWhileCharging = false;
            accurateDelay = false;
            shootSound = Sounds.laser;
            coolant = consumeCoolant(0.2f);

            consumePower(6f);

            shootType = new LaserBulletType(140){{
                colors = new Color[]{Pal.lancerLaser.cpy().a(0.4f), Pal.lancerLaser, Color.white};
                //TODO merge
                chargeEffect = new MultiEffect(Fx.lancerLaserCharge, Fx.lancerLaserChargeBegin);

                buildingDamageMultiplier = 0.25f;
                hitEffect = Fx.hitLancer;
                hitSize = 4;
                lifetime = 16f;
                drawSize = 400f;
                collidesAir = false;
                length = 173f;
                ammoMultiplier = 1f;
                pierceCap = 4;
            }};
        }};

        arc = new PowerTurret("arc"){{
            requirements(Category.turret, with(Items.copper, 50, Items.lead, 50));
            shootType = new LightningBulletType(){{
                damage = 20;
                lightningLength = 25;
                collidesAir = false;
                ammoMultiplier = 1f;

                //for visual stats only.
                buildingDamageMultiplier = 0.25f;

                lightningType = new BulletType(0.0001f, 0f){{
                    lifetime = Fx.lightning.lifetime;
                    hitEffect = Fx.hitLancer;
                    despawnEffect = Fx.none;
                    status = StatusEffects.shocked;
                    statusDuration = 10f;
                    hittable = false;
                    lightColor = Color.white;
                    collidesAir = false;
                    buildingDamageMultiplier = 0.25f;
                }};
            }};
            reload = 35f;
            shootCone = 40f;
            rotateSpeed = 8f;
            targetAir = false;
            range = 90f;
            shootEffect = Fx.lightningShoot;
            heatColor = Color.red;
            recoil = 1f;
            size = 1;
            health = 260;
            shootSound = Sounds.spark;
            consumePower(3.3f);
            coolant = consumeCoolant(0.1f);
        }};

        parallax = new TractorBeamTurret("parallax"){{
            requirements(Category.turret, with(Items.silicon, 120, Items.titanium, 90, Items.graphite, 30));

            hasPower = true;
            size = 2;
            force = 12f;
            scaledForce = 6f;
            range = 240f;
            damage = 0.3f;
            scaledHealth = 160;
            rotateSpeed = 10;

            consumePower(3f);
        }};

        swarmer = new ItemTurret("swarmer"){{
            requirements(Category.turret, with(Items.graphite, 35, Items.titanium, 35, Items.plastanium, 45, Items.silicon, 30));
            ammo(
                Items.blastCompound, new MissileBulletType(3.7f, 10){{
                    width = 8f;
                    height = 8f;
                    shrinkY = 0f;
                    splashDamageRadius = 30f;
                    splashDamage = 30f * 1.5f;
                    ammoMultiplier = 5f;
                    hitEffect = Fx.blastExplosion;
                    despawnEffect = Fx.blastExplosion;

                    status = StatusEffects.blasted;
                    statusDuration = 60f;
                }},
                Items.pyratite, new MissileBulletType(3.7f, 12){{
                    frontColor = Pal.lightishOrange;
                    backColor = Pal.lightOrange;
                    width = 7f;
                    height = 8f;
                    shrinkY = 0f;
                    homingPower = 0.08f;
                    splashDamageRadius = 20f;
                    splashDamage = 30f * 1.5f;
                    makeFire = true;
                    ammoMultiplier = 5f;
                    hitEffect = Fx.blastExplosion;
                    status = StatusEffects.burning;
                }},
                Items.surgeAlloy, new MissileBulletType(3.7f, 18){{
                    width = 8f;
                    height = 8f;
                    shrinkY = 0f;
                    splashDamageRadius = 25f;
                    splashDamage = 25f * 1.4f;
                    hitEffect = Fx.blastExplosion;
                    despawnEffect = Fx.blastExplosion;
                    ammoMultiplier = 4f;
                    lightningDamage = 10;
                    lightning = 2;
                    lightningLength = 10;
                }}
            );

            shoot = new ShootAlternate(){{
                shots = 4;
                barrels = 3;
                spread = 3.5f;
                shotDelay = 5f;
            }};

            shootY = 7f;
            reload = 30f;
            inaccuracy = 10f;
            range = 240f;
            size = 2;
            scaledHealth = 300;
            shootSound = Sounds.missile;
            envEnabled |= Env.space;

            limitRange(5f);
            coolant = consumeCoolant(0.3f);
        }};

        salvo = new ItemTurret("salvo"){{
            requirements(Category.turret, with(Items.copper, 100, Items.graphite, 80, Items.titanium, 50));
            ammo(
                Items.copper,  new BasicBulletType(2.5f, 11){{
                    width = 7f;
                    height = 9f;
                    lifetime = 60f;
                    ammoMultiplier = 2;
                }},
                Items.graphite, new BasicBulletType(3.5f, 20){{
                    width = 9f;
                    height = 12f;
                    reloadMultiplier = 0.6f;
                    ammoMultiplier = 4;
                    lifetime = 60f;
                }},
                Items.pyratite, new BasicBulletType(3.2f, 18){{
                    width = 10f;
                    height = 12f;
                    frontColor = Pal.lightishOrange;
                    backColor = Pal.lightOrange;
                    status = StatusEffects.burning;
                    hitEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);

                    ammoMultiplier = 5;

                    splashDamage = 12f;
                    splashDamageRadius = 22f;

                    makeFire = true;
                    lifetime = 60f;
                }},
                Items.silicon, new BasicBulletType(3f, 15, "bullet"){{
                    width = 7f;
                    height = 9f;
                    homingPower = 0.1f;
                    reloadMultiplier = 1.5f;
                    ammoMultiplier = 5;
                    lifetime = 60f;
                }},
                Items.thorium, new BasicBulletType(4f, 29, "bullet"){{
                    width = 10f;
                    height = 13f;
                    shootEffect = Fx.shootBig;
                    smokeEffect = Fx.shootBigSmoke;
                    ammoMultiplier = 4;
                    lifetime = 60f;
                }}
            );

            size = 2;
            range = 190f;
            reload = 31f;
            ammoEjectBack = 3f;
            recoil = 3f;
            shake = 1f;
            shoot.shots = 4;
            shoot.shotDelay = 3f;

            ammoUseEffect = Fx.casing2;
            scaledHealth = 240;
            shootSound = Sounds.shootBig;

            limitRange();
            coolant = consumeCoolant(0.2f);
        }};

        segment = new PointDefenseTurret("segment"){{
            requirements(Category.turret, with(Items.silicon, 130, Items.thorium, 80, Items.phaseFabric, 40, Items.titanium, 40));

            scaledHealth = 250;
            range = 180f;
            hasPower = true;
            consumePower(8f);
            size = 2;
            shootLength = 5f;
            bulletDamage = 30f;
            reload = 8f;
            envEnabled |= Env.space;
        }};

        tsunami = new LiquidTurret("tsunami"){{
            requirements(Category.turret, with(Items.metaglass, 100, Items.lead, 400, Items.titanium, 250, Items.thorium, 100));
            ammo(
                Liquids.water, new LiquidBulletType(Liquids.water){{
                    lifetime = 49f;
                    speed = 4f;
                    knockback = 1.7f;
                    puddleSize = 8f;
                    orbSize = 4f;
                    drag = 0.001f;
                    ammoMultiplier = 0.4f;
                    statusDuration = 60f * 4f;
                    damage = 0.2f;
                }},
                Liquids.slag,  new LiquidBulletType(Liquids.slag){{
                    lifetime = 49f;
                    speed = 4f;
                    knockback = 1.3f;
                    puddleSize = 8f;
                    orbSize = 4f;
                    damage = 4.75f;
                    drag = 0.001f;
                    ammoMultiplier = 0.4f;
                    statusDuration = 60f * 4f;
                }},
                Liquids.cryofluid, new LiquidBulletType(Liquids.cryofluid){{
                    lifetime = 49f;
                    speed = 4f;
                    knockback = 1.3f;
                    puddleSize = 8f;
                    orbSize = 4f;
                    drag = 0.001f;
                    ammoMultiplier = 0.4f;
                    statusDuration = 60f * 4f;
                    damage = 0.2f;
                }},
                Liquids.oil, new LiquidBulletType(Liquids.oil){{
                    lifetime = 49f;
                    speed = 4f;
                    knockback = 1.3f;
                    puddleSize = 8f;
                    orbSize = 4f;
                    drag = 0.001f;
                    ammoMultiplier = 0.4f;
                    statusDuration = 60f * 4f;
                    damage = 0.2f;
                }}
            );
            size = 3;
            reload = 3f;
            shoot.shots = 2;
            velocityRnd = 0.1f;
            inaccuracy = 4f;
            recoil = 1f;
            shootCone = 45f;
            liquidCapacity = 40f;
            shootEffect = Fx.shootLiquid;
            range = 190f;
            scaledHealth = 250;
            flags = EnumSet.of(BlockFlag.turret, BlockFlag.extinguisher);
        }};

        fuse = new ItemTurret("fuse"){{
            requirements(Category.turret, with(Items.copper, 225, Items.graphite, 225, Items.thorium, 100));

            reload = 35f;
            shake = 4f;
            range = 90f;
            recoil = 5f;

            shoot = new ShootSpread(3, 20f);

            shootCone = 30;
            size = 3;
            envEnabled |= Env.space;

            scaledHealth = 220;
            shootSound = Sounds.shotgun;
            coolant = consumeCoolant(0.3f);

            float brange = range + 10f;

            ammo(
                Items.titanium, new ShrapnelBulletType(){{
                    length = brange;
                    damage = 66f;
                    ammoMultiplier = 4f;
                    width = 17f;
                    reloadMultiplier = 1.3f;
                }},
                Items.thorium, new ShrapnelBulletType(){{
                    length = brange;
                    damage = 105f;
                    ammoMultiplier = 5f;
                    toColor = Pal.thoriumPink;
                    shootEffect = smokeEffect = Fx.thoriumShoot;
                }}
            );
        }};

        ripple = new ItemTurret("ripple"){{
            requirements(Category.turret, with(Items.copper, 150, Items.graphite, 135, Items.titanium, 60));
            ammo(
                Items.graphite, new ArtilleryBulletType(3f, 20){{
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 11f;
                    collidesTiles = false;
                    splashDamageRadius = 25f * 0.75f;
                    splashDamage = 33f;
                }},
                Items.silicon, new ArtilleryBulletType(3f, 20){{
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 11f;
                    collidesTiles = false;
                    splashDamageRadius = 25f * 0.75f;
                    splashDamage = 33f;
                    reloadMultiplier = 1.2f;
                    ammoMultiplier = 3f;
                    homingPower = 0.08f;
                    homingRange = 50f;
                }},
                Items.pyratite, new ArtilleryBulletType(3f, 24){{
                    hitEffect = Fx.blastExplosion;
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 13f;
                    collidesTiles = false;
                    splashDamageRadius = 25f * 0.75f;
                    splashDamage = 45f;
                    status = StatusEffects.burning;
                    statusDuration = 60f * 12f;
                    frontColor = Pal.lightishOrange;
                    backColor = Pal.lightOrange;
                    makeFire = true;
                    trailEffect = Fx.incendTrail;
                    ammoMultiplier = 4f;
                }},
                Items.blastCompound, new ArtilleryBulletType(2f, 20, "shell"){{
                    hitEffect = Fx.blastExplosion;
                    knockback = 0.8f;
                    lifetime = 80f;
                    width = height = 14f;
                    collidesTiles = false;
                    ammoMultiplier = 4f;
                    splashDamageRadius = 45f * 0.75f;
                    splashDamage = 55f;
                    backColor = Pal.missileYellowBack;
                    frontColor = Pal.missileYellow;

                    status = StatusEffects.blasted;
                }},
                Items.plastanium, new ArtilleryBulletType(3.4f, 20, "shell"){{
                    hitEffect = Fx.plasticExplosion;
                    knockback = 1f;
                    lifetime = 80f;
                    width = height = 13f;
                    collidesTiles = false;
                    splashDamageRadius = 35f * 0.75f;
                    splashDamage = 45f;
                    fragBullet = new BasicBulletType(2.5f, 10, "bullet"){{
                        width = 10f;
                        height = 12f;
                        shrinkY = 1f;
                        lifetime = 15f;
                        backColor = Pal.plastaniumBack;
                        frontColor = Pal.plastaniumFront;
                        despawnEffect = Fx.none;
                        collidesAir = false;
                    }};
                    fragBullets = 10;
                    backColor = Pal.plastaniumBack;
                    frontColor = Pal.plastaniumFront;
                }}
            );

            targetAir = false;
            size = 3;
            shoot.shots = 4;
            inaccuracy = 12f;
            reload = 60f;
            ammoEjectBack = 5f;
            ammoUseEffect = Fx.casing3Double;
            ammoPerShot = 2;
            velocityRnd = 0.2f;
            recoil = 6f;
            shake = 2f;
            range = 290f;
            minRange = 50f;
            coolant = consumeCoolant(0.3f);

            scaledHealth = 130;
            shootSound = Sounds.artillery;
        }};

        cyclone = new ItemTurret("cyclone"){{
            requirements(Category.turret, with(Items.copper, 200, Items.titanium, 125, Items.plastanium, 80));
            ammo(
                Items.metaglass, new FlakBulletType(4f, 9){{
                    ammoMultiplier = 3f;
                    shootEffect = Fx.shootSmall;
                    reloadMultiplier = 0.8f;
                    width = 6f;
                    height = 8f;
                    hitEffect = Fx.flakExplosion;
                    splashDamage = 32f * 1.5f;
                    splashDamageRadius = 25f;
                    fragBullet = new BasicBulletType(3f, 8, "bullet"){{
                        width = 5f;
                        height = 12f;
                        shrinkY = 1f;
                        lifetime = 20f;
                        backColor = Pal.gray;
                        frontColor = Color.white;
                        despawnEffect = Fx.none;
                    }};
                    fragBullets = 4;
                    explodeRange = 20f;
                    collidesGround = true;
                }},
                Items.blastCompound, new FlakBulletType(4f, 5){{
                    shootEffect = Fx.shootBig;
                    ammoMultiplier = 5f;
                    splashDamage = 26f * 1.5f;
                    splashDamageRadius = 60f;
                    collidesGround = true;

                    status = StatusEffects.blasted;
                    statusDuration = 60f;
                }},
                Items.plastanium, new FlakBulletType(4f, 6){{
                    splashDamageRadius = 40f;
                    splashDamage = 25f * 1.5f;
                    fragBullet = new BasicBulletType(2.5f, 12, "bullet"){{
                        width = 10f;
                        height = 12f;
                        shrinkY = 1f;
                        lifetime = 15f;
                        backColor = Pal.plastaniumBack;
                        frontColor = Pal.plastaniumFront;
                        despawnEffect = Fx.none;
                    }};
                    fragBullets = 6;
                    hitEffect = Fx.plasticExplosion;
                    frontColor = Pal.plastaniumFront;
                    backColor = Pal.plastaniumBack;
                    shootEffect = Fx.shootBig;
                    collidesGround = true;
                    explodeRange = 20f;
                }},
                Items.surgeAlloy, new FlakBulletType(4.5f, 13){{
                    ammoMultiplier = 5f;
                    splashDamage = 50f * 1.5f;
                    splashDamageRadius = 38f;
                    lightning = 2;
                    lightningLength = 7;
                    shootEffect = Fx.shootBig;
                    collidesGround = true;
                    explodeRange = 20f;
                }}
            );
            shootY = 8.75f;
            shoot = new ShootBarrel(){{
                barrels = new float[]{
                0f, 1f, 0f,
                3f, 0f, 0f,
                -3f, 0f, 0f,
                };
            }};
            reload = 8f;
            range = 200f;
            size = 3;
            recoil = 3f;
            rotateSpeed = 10f;
            inaccuracy = 10f;
            shootCone = 30f;
            shootSound = Sounds.shootSnap;
            coolant = consumeCoolant(0.3f);

            scaledHealth = 145;
            limitRange();
        }};

        foreshadow = new ItemTurret("foreshadow"){{
            float brange = range = 500f;

            requirements(Category.turret, with(Items.copper, 1000, Items.metaglass, 600, Items.surgeAlloy, 300, Items.plastanium, 200, Items.silicon, 600));
            ammo(
                Items.surgeAlloy, new PointBulletType(){{
                    shootEffect = Fx.instShoot;
                    hitEffect = Fx.instHit;
                    smokeEffect = Fx.smokeCloud;
                    trailEffect = Fx.instTrail;
                    despawnEffect = Fx.instBomb;
                    trailSpacing = 20f;
                    damage = 1350;
                    buildingDamageMultiplier = 0.2f;
                    speed = brange;
                    hitShake = 6f;
                    ammoMultiplier = 1f;
                }}
            );

            maxAmmo = 40;
            ammoPerShot = 5;
            rotateSpeed = 2f;
            reload = 200f;
            ammoUseEffect = Fx.casing3Double;
            recoil = 5f;
            cooldownTime = reload;
            shake = 4f;
            size = 4;
            shootCone = 2f;
            shootSound = Sounds.railgun;
            unitSort = UnitSorts.strongest;
            envEnabled |= Env.space;

            coolantMultiplier = 0.4f;
            scaledHealth = 150;

            coolant = consumeCoolant(1f);
            consumePower(10f);
        }};

        spectre = new ItemTurret("spectre"){{
            requirements(Category.turret, with(Items.copper, 900, Items.graphite, 300, Items.surgeAlloy, 250, Items.plastanium, 175, Items.thorium, 250));
            ammo(
                Items.graphite, new BasicBulletType(7.5f, 50){{
                    hitSize = 4.8f;
                    width = 15f;
                    height = 21f;
                    shootEffect = Fx.shootBig;
                    ammoMultiplier = 4;
                    reloadMultiplier = 1.7f;
                    knockback = 0.3f;
                }},
                Items.thorium, new BasicBulletType(8f, 80){{
                    hitSize = 5;
                    width = 16f;
                    height = 23f;
                    shootEffect = Fx.shootBig;
                    pierceCap = 2;
                    pierceBuilding = true;
                    knockback = 0.7f;
                }},
                Items.pyratite, new BasicBulletType(7f, 70){{
                    hitSize = 5;
                    width = 16f;
                    height = 21f;
                    frontColor = Pal.lightishOrange;
                    backColor = Pal.lightOrange;
                    status = StatusEffects.burning;
                    hitEffect = new MultiEffect(Fx.hitBulletSmall, Fx.fireHit);
                    shootEffect = Fx.shootBig;
                    makeFire = true;
                    pierceCap = 2;
                    pierceBuilding = true;
                    knockback = 0.6f;
                    ammoMultiplier = 3;
                    splashDamage = 20f;
                    splashDamageRadius = 25f;
                }}
            );
            reload = 7f;
            recoilTime = reload * 2f;
            coolantMultiplier = 0.5f;
            ammoUseEffect = Fx.casing3;
            range = 260f;
            inaccuracy = 3f;
            recoil = 3f;
            shoot = new ShootAlternate(8f);
            shake = 2f;
            size = 4;
            shootCone = 24f;
            shootSound = Sounds.shootBig;

            scaledHealth = 160;
            coolant = consumeCoolant(1f);

            limitRange();
        }};

        meltdown = new LaserTurret("meltdown"){{
            requirements(Category.turret, with(Items.copper, 1200, Items.lead, 350, Items.graphite, 300, Items.surgeAlloy, 325, Items.silicon, 325));
            shootEffect = Fx.shootBigSmoke2;
            shootCone = 40f;
            recoil = 4f;
            size = 4;
            shake = 2f;
            range = 195f;
            reload = 90f;
            firingMoveFract = 0.5f;
            shootDuration = 230f;
            shootSound = Sounds.laserbig;
            loopSound = Sounds.beam;
            loopSoundVolume = 2f;
            envEnabled |= Env.space;

            shootType = new ContinuousLaserBulletType(78){{
                length = 200f;
                hitEffect = Fx.hitMeltdown;
                hitColor = Pal.meltdownHit;
                status = StatusEffects.melting;
                drawSize = 420f;

                incendChance = 0.4f;
                incendSpread = 5f;
                incendAmount = 1;
                ammoMultiplier = 1f;
            }};

            scaledHealth = 200;
            coolant = consumeCoolant(0.5f);
            consumePower(17f);
        }};

        //endregion
        //region units

        groundFactory = new UnitFactory("ground-factory"){{
            requirements(Category.units, with(Items.copper, 50, Items.lead, 120, Items.silicon, 80));
            plans = Seq.with(
                new UnitPlan(CTUnitTypes.dagger, 60f * 15, with(Items.silicon, 10, Items.lead, 10)),
                new UnitPlan(CTUnitTypes.crawler, 60f * 10, with(Items.silicon, 8, Items.coal, 10)),
                new UnitPlan(CTUnitTypes.nova, 60f * 40, with(Items.silicon, 30, Items.lead, 20, Items.titanium, 20))
            );
            size = 3;
            consumePower(1.2f);floating = true;
        }};

        airFactory = new UnitFactory("air-factory"){{
            requirements(Category.units, with(Items.copper, 60, Items.lead, 70));
            plans = Seq.with(
                new UnitPlan(CTUnitTypes.flare, 60f * 15, with(Items.silicon, 15)),
                new UnitPlan(CTUnitTypes.mono, 60f * 35, with(Items.silicon, 30, Items.lead, 15))
            );
            size = 3;
            consumePower(1.2f);floating = true;
        }};

        navalFactory = new UnitFactory("naval-factory"){{
            requirements(Category.units, with(Items.copper, 150, Items.lead, 130, Items.metaglass, 120));
            plans = Seq.with(
                new UnitPlan(CTUnitTypes.risso, 60f * 45f, with(Items.silicon, 20, Items.metaglass, 35)),
                new UnitPlan(CTUnitTypes.retusa, 60f * 50f, with(Items.silicon, 15, Items.metaglass, 25, Items.titanium, 20))
            );
            size = 3;
            consumePower(1.2f);
            floating = true;
        }};

        additiveReconstructor = new Reconstructor("additive-reconstructor"){{
            requirements(Category.units, with(Items.copper, 200, Items.lead, 120, Items.silicon, 90));

            size = 3;
            consumePower(3f);
            consumeItems(with(Items.silicon, 40, Items.graphite, 40));

            constructTime = 60f * 10f;

            upgrades.addAll(
                new UnitType[]{CTUnitTypes.nova, CTUnitTypes.pulsar},
                new UnitType[]{CTUnitTypes.dagger, CTUnitTypes.mace},
                new UnitType[]{CTUnitTypes.crawler, CTUnitTypes.atrax},
                new UnitType[]{CTUnitTypes.flare, CTUnitTypes.horizon},
                new UnitType[]{CTUnitTypes.mono, CTUnitTypes.poly},
                new UnitType[]{CTUnitTypes.risso, CTUnitTypes.minke},
                new UnitType[]{CTUnitTypes.retusa, CTUnitTypes.oxynoe}
            );
        }};

        multiplicativeReconstructor = new Reconstructor("multiplicative-reconstructor"){{
            requirements(Category.units, with(Items.lead, 650, Items.silicon, 450, Items.titanium, 350, Items.thorium, 650));

            size = 5;
            consumePower(6f);
            consumeItems(with(Items.silicon, 130, Items.titanium, 80, Items.metaglass, 40));

            constructTime = 60f * 30f;

            upgrades.addAll(
                new UnitType[]{CTUnitTypes.horizon, CTUnitTypes.zenith},
                new UnitType[]{CTUnitTypes.mace, CTUnitTypes.fortress},
                new UnitType[]{CTUnitTypes.poly, CTUnitTypes.mega},
                new UnitType[]{CTUnitTypes.minke, CTUnitTypes.bryde},
                new UnitType[]{CTUnitTypes.pulsar, CTUnitTypes.quasar},
                new UnitType[]{CTUnitTypes.atrax, CTUnitTypes.spiroct},
                new UnitType[]{CTUnitTypes.oxynoe, CTUnitTypes.cyerce}
            );
        }};

        exponentialReconstructor = new Reconstructor("exponential-reconstructor"){{
            requirements(Category.units, with(Items.lead, 2000, Items.silicon, 1000, Items.titanium, 2000, Items.thorium, 750, Items.plastanium, 450, Items.phaseFabric, 600));

            size = 7;
            consumePower(13f);
            consumeItems(with(Items.silicon, 850, Items.titanium, 750, Items.plastanium, 650));
            consumeLiquid(Liquids.cryofluid, 1f);

            constructTime = 60f * 60f * 1.5f;
            liquidCapacity = 60f;

            upgrades.addAll(
                new UnitType[]{CTUnitTypes.zenith, CTUnitTypes.antumbra},
                new UnitType[]{CTUnitTypes.spiroct, CTUnitTypes.arkyid},
                new UnitType[]{CTUnitTypes.fortress, CTUnitTypes.scepter},
                new UnitType[]{CTUnitTypes.bryde, CTUnitTypes.sei},
                new UnitType[]{CTUnitTypes.mega, CTUnitTypes.quad},
                new UnitType[]{CTUnitTypes.quasar, CTUnitTypes.vela},
                new UnitType[]{CTUnitTypes.cyerce, CTUnitTypes.aegires}
            );
        }};

        tetrativeReconstructor = new Reconstructor("tetrative-reconstructor"){{
            requirements(Category.units, with(Items.lead, 4000, Items.silicon, 3000, Items.thorium, 1000, Items.plastanium, 600, Items.phaseFabric, 600, Items.surgeAlloy, 800));

            size = 9;
            consumePower(25f);
            consumeItems(with(Items.silicon, 1000, Items.plastanium, 600, Items.surgeAlloy, 500, Items.phaseFabric, 350));
            consumeLiquid(Liquids.cryofluid, 3f);

            constructTime = 60f * 60f * 4;
            liquidCapacity = 180f;

            upgrades.addAll(
                new UnitType[]{CTUnitTypes.antumbra, CTUnitTypes.eclipse},
                new UnitType[]{CTUnitTypes.arkyid, CTUnitTypes.toxopid},
                new UnitType[]{CTUnitTypes.scepter, CTUnitTypes.reign},
                new UnitType[]{CTUnitTypes.sei, CTUnitTypes.omura},
                new UnitType[]{CTUnitTypes.quad, CTUnitTypes.oct},
                new UnitType[]{CTUnitTypes.vela, CTUnitTypes.corvus},
                new UnitType[]{CTUnitTypes.aegires, CTUnitTypes.navanax}
            );
        }};

        repairPoint = new RepairTurret("repair-point"){{
            requirements(Category.units, with(Items.lead, 30, Items.copper, 30, Items.silicon, 20));
            repairSpeed = 0.45f;
            repairRadius = 60f;
            beamWidth = 0.73f;
            powerUse = 1f;
            pulseRadius = 5f;
        }};

        repairTurret = new RepairTurret("repair-turret"){{
            requirements(Category.units, with(Items.silicon, 90, Items.thorium, 80, Items.plastanium, 60));
            size = 2;
            length = 6f;
            repairSpeed = 3f;
            repairRadius = 145f;
            powerUse = 5f;
            beamWidth = 1.1f;
            pulseRadius = 6.1f;
            coolantUse = 0.16f;
            coolantMultiplier = 1.6f;
            acceptCoolant = true;
        }};

        //endregion
        //region units - erekir

        //endregion
        //region payloads

        payloadConveyor = new PayloadConveyor("payload-conveyor"){{
            requirements(Category.units, with(Items.graphite, 10, Items.copper, 10));
            canOverdrive = false;
        }};

        payloadRouter = new PayloadRouter("payload-router"){{
            requirements(Category.units, with(Items.graphite, 15, Items.copper, 10));
            canOverdrive = false;
        }};
        largePayloadMassDriver = new PayloadMassDriver("large-payload-mass-driver"){{
            requirements(Category.units, with(Items.thorium, 300, Items.silicon, 200, Items.plastanium, 200, Items.phaseFabric, 50));
            regionSuffix = "-dark";
            size = 5;
            reload = 130f;
            chargeTime = 100f;
            range = 1100f;
            maxPayloadSize = 3.5f;
            consumePower(6f);
        }};
/*        140版本已经更换
            payloadPropulsionTower = new PayloadMassDriver("payload-propulsion-tower"){{
            requirements(Category.units, with(Items.thorium, 300, Items.silicon, 200, Items.plastanium, 200, Items.phaseFabric, 50));
            regionSuffix = "-dark";
            size = 5;
            reload = 130f;
            chargeTime = 100f;
            range = 1100f;
            maxPayloadSize = 3.5f;
            consumePower(6f);
        }}; */
        payloadLoader = new PayloadLoader("payload-loader"){{
            requirements(Category.units, with(Items.graphite, 50, Items.silicon, 50, Items.plastanium, 80));
            regionSuffix = "-dark";
            hasPower = true;
            consumePower(2f);
            size = 3;
            fogRadius = 5;
            maxBlockSize = 2;
        }};

        payloadUnloader = new PayloadUnloader("payload-unloader"){{
            requirements(Category.units, with(Items.graphite, 50, Items.silicon, 50, Items.plastanium, 30));
            regionSuffix = "-dark";
            hasPower = true;
            consumePower(3f);
            size = 3;
            fogRadius = 5;
            maxBlockSize = 2;
        }};

        constructor = new Constructor("constructor"){{
            requirements(Category.units, with(Items.silicon, 100, Items.graphite, 150, Items.plastanium, 80));
            regionSuffix = "-dark";
            hasPower = true;
            buildSpeed = 0.3f;
            consumePower(2f);
            size = 3;
            //TODO expand this list
            filter = Seq.with(CTBlocks.plastaniumWallLarge, Blocks.berylliumWallLarge, Blocks.carbideWallLarge, Blocks.reinforcedSurgeWallLarge, Blocks.reinforcedLiquidContainer, Blocks.reinforcedContainer, Blocks.beamNode);
        }};


/*         largeConstructor = new Constructor("large-constructor"){{
            requirements(Category.units, with(Items.silicon, 150, Items.graphite, 450, Items.plastanium, 200, Items.phaseFabric, 40));
            regionSuffix = "-dark";
            hasPower = true;
            buildSpeed = 0.3f;
            maxBlockSize = 4;
            minBlockSize = 3;
            size = 5;
            consumePower(2f);
        }}; */
        smallDeconstructor = new PayloadDeconstructor("small-deconstructor"){{
            requirements(Category.units, with( Items.phaseFabric, 20, Items.silicon, 100, Items.plastanium, 100, Items.graphite, 80));
            regionSuffix = "-dark";
            itemCapacity = 100;
            consumePower(1f);
            size = 3;
            deconstructSpeed = 1f;
        }};

        deconstructor = new PayloadDeconstructor("deconstructor"){{
            requirements(Category.units, with( Items.surgeAlloy, 150, Items.phaseFabric, 50, Items.silicon, 250, Items.plastanium, 250));
            regionSuffix = "-dark";
            itemCapacity = 250;
            consumePower(3f);
            size = 5;
            deconstructSpeed = 2f;
        }};

        //endregion
        //region sandbox

        powerSource = new PowerSource("power-source"){{
            requirements(Category.power, BuildVisibility.sandboxOnly, with());
            powerProduction = 5000000f / 60f;
            laserRange = 20;
            maxNodes = 100;
            health = 100000;
            alwaysUnlocked = true;
        }};

        powerVoid = new PowerVoid("power-void"){{
            requirements(Category.power, BuildVisibility.sandboxOnly, with());
            alwaysUnlocked = true;
        }};

        itemSource = new ItemSource("item-source"){{
            requirements(Category.distribution, BuildVisibility.sandboxOnly, with());
            alwaysUnlocked = true;
            health = 100000;
        }};

        itemVoid = new ItemVoid("item-void"){{
            requirements(Category.distribution, BuildVisibility.sandboxOnly, with());
            alwaysUnlocked = true;
        }};

        liquidSource = new LiquidSource("liquid-source"){{
            requirements(Category.liquid, BuildVisibility.sandboxOnly, with());
            alwaysUnlocked = true;
            health = 100000;
        }};

        liquidVoid = new LiquidVoid("liquid-void"){{
            requirements(Category.liquid, BuildVisibility.sandboxOnly, with());
            alwaysUnlocked = true;
        }};

        payloadSource = new PayloadSource("payload-source"){{
            requirements(Category.units, BuildVisibility.sandboxOnly, with());
            size = 5;
            alwaysUnlocked = true;
            health = 100000;
        }};

        payloadVoid = new PayloadVoid("payload-void"){{
            requirements(Category.units, BuildVisibility.sandboxOnly, with());
            size = 5;
            alwaysUnlocked = true;
        }};
        HeatProducer heatVoid = new HeatProducer("heat-void"){{//�������½����� ����Դ
            requirements(Category.crafting, BuildVisibility.sandboxOnly, with());
            size = 1;
            alwaysUnlocked = true;
            drawer = new DrawMulti(
                new DrawDefault(),
                new DrawHeatOutput(),
                new DrawHeatInput("-heat")
                );
            regionRotated1 = 1;
            warmupRate = 10000;
            health = 120;
            heatOutput = 100000;
        }};


        //TODO move
        illuminator = new LightBlock("illuminator"){{
            requirements(Category.effect, BuildVisibility.lightingOnly, with(Items.graphite, 12, Items.silicon, 8, Items.lead, 8));
            brightness = 0.75f;
            radius = 140f;
            consumePower(0.05f);
        }};

        interplanetaryAccelerator = new Accelerator("interplanetary-accelerator"){{
            requirements(Category.effect, BuildVisibility.hidden, with(Items.copper, 16000, Items.silicon, 11000, Items.thorium, 13000, Items.titanium, 12000, Items.surgeAlloy, 6000, Items.phaseFabric, 5000));
            researchCostMultiplier = 0.1f;
            size = 7;
            hasPower = true;
            consumePower(10f);
            buildCostMultiplier = 0.5f;
            scaledHealth = 80;
        }};

        message = new MessageBlock("message"){{
            requirements(Category.logic, with(Items.graphite, 5, Items.copper, 5));
        }};

        switchBlock = new SwitchBlock("switch"){{
            requirements(Category.logic, with(Items.graphite, 5, Items.copper, 5));
        }};

        microProcessor = new LogicBlock("micro-processor"){{
            requirements(Category.logic, with(Items.copper, 90, Items.lead, 50, Items.silicon, 50));

            instructionsPerTick = 2;

            size = 1;
        }};

        logicProcessor = new LogicBlock("logic-processor"){{
            requirements(Category.logic, with(Items.lead, 320, Items.silicon, 80, Items.graphite, 60, Items.thorium, 50));

            instructionsPerTick = 8;

            range = 8 * 22;

            size = 2;
        }};

        hyperProcessor = new LogicBlock("hyper-processor"){{
            requirements(Category.logic, with(Items.lead, 450, Items.silicon, 150, Items.thorium, 75, Items.surgeAlloy, 50));

            consumeLiquid(Liquids.cryofluid, 0.08f);
            hasLiquids = true;

            instructionsPerTick = 25;
            range = 8 * 42;
            size = 3;
        }};
        hyperProcessor2 = new LogicBlock("hyper-processor2"){{
            requirements(Category.logic, with(Items.lead, 450, Items.silicon, 150, Items.thorium, 75, Items.surgeAlloy, 50));

            
            hasLiquids = true;

            instructionsPerTick = 60;
            range = 8 * 65;
            size = 5;
        }};

        memoryCell = new MemoryBlock("memory-cell"){{
            requirements(Category.logic, with(Items.graphite, 30, Items.silicon, 30, Items.copper, 30));

            memoryCapacity = 64;
        }};

        memoryBank = new MemoryBlock("memory-bank"){{
            requirements(Category.logic, with(Items.graphite, 80, Items.silicon, 80, Items.phaseFabric, 30, Items.copper, 30));

            memoryCapacity = 512;
            size = 2;
        }};

        logicDisplay = new LogicDisplay("logic-display"){{
            requirements(Category.logic, with(Items.lead, 100, Items.silicon, 50, Items.metaglass, 50));

            displaySize = 80;

            size = 3;
        }};

        largeLogicDisplay = new LogicDisplay("large-logic-display"){{
            requirements(Category.logic, with(Items.lead, 200, Items.silicon, 150, Items.metaglass, 100, Items.phaseFabric, 75));

            displaySize = 176;

            size = 6;
        }};
       //endregion
    }
}

package creators.world.block;

import arc.audio.Sound;
import arc.math.Mathf;
import arc.struct.EnumSet;
import arc.util.io.Reads;
import arc.util.io.Writes;
import mindustry.content.Fx;
import mindustry.entities.Effect;
import mindustry.gen.Building;
import mindustry.gen.Sounds;
import mindustry.world.blocks.power.PowerDistributor;
import mindustry.world.meta.BlockFlag;
import mindustry.world.meta.BlockStatus;
import mindustry.world.meta.Env;

/**
 * @author xiaoyuyu
 * @create 2022-07-15-08-24
 * 电力墙
 */
public class BatteryWall extends PowerDistributor {
    //scale 1:1
    public float percentage = 1;
    public Effect effect = Fx.none;
    public Sound sound = Sounds.none;

    public BatteryWall(String name) {
        super(name);
        outputsPower = true;
        consumesPower = true;
        canOverdrive = false;
        flags = EnumSet.of(BlockFlag.battery);
        envEnabled |= Env.space;
        destructible = true;
        update = true;
    }

    public class BatteryWallBuild extends Building {

        public Building building;

        @Override
        public void updateTile() {
            super.updateTile();
            //1 = 100 ?
            if (getpower() >= this.maxHealth - this.health && this.health < this.maxHealth) {
                this.power.status -= getreomve();
                this.heal(this.maxHealth - this.health);
                effect.at(this);
                BatteryWall.this.sound.at(this);
            }
        }

        @Override
        public BlockStatus status(){
            if(Mathf.equal(power.status, 0f, 0.001f)) return BlockStatus.noInput;
            if(Mathf.equal(power.status, 1f, 0.001f)) return BlockStatus.active;
            return BlockStatus.noOutput;
        }

        public float getpower() {
            return this.power.status * consPower.capacity * percentage;
        }

        public float getreomve() {
            return (this.maxHealth - this.health) / consPower.capacity * percentage;
        }

        @Override
        public void write(Writes write) {
            super.write(write);
        }

        @Override
        public void read(Reads read, byte revision) {
            super.read(read, revision);
        }
    }
}

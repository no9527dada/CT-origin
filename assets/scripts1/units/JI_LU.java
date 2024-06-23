    单位的攻击目标:
    public enum BlockFlag {
        /*
         * *敌人的核心; 所有单位的首要目标。 *／
         * 核心,core
         * / * *库/集装箱/等* /
         * 存储,storage
         * /**能产生能量的东西。 *／
         * 发电机,generator
         * / * *任何炮塔。 *／
         * 炮塔,turret
         * /**转换资源的块。 *／
         * 工厂,factory
         * / * *修复点。 *／
         * 修复,repair
         * / * *集结点。 *／
         * 集会上,rally
         * /**块存储电源再供给。 *／
         * 电池,battery
         * /**任何反应堆块。 *／
         * 反应堆,reactor
         * /**熄灭火焰的方块。 *／
         * 灭火器,extinguisher
         * /**只是一个发射台。 *／
         * 发射台;launchPad
    }
写法:
  多个  muchao1.targetFlags =new ObjectSet.with(BlockFlag.launchPad, BlockFlag.storage, BlockFlag.battery);
  单个  muchao1.targetFlags =[ BlockFlag.core ];
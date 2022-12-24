//---------------------@滞人编写

const items = CTItem
const lib = require('lib');
const ORANGE = Color.valueOf("#fea947");
const BLUE = Color.valueOf("#3ebdfc");
const {
   // 白, 绿, 黄, 橙, 红, 蓝, 紫,
    jingliantai, zuanshikuang, zuanjing, hua1, hua2, hua3, tanban, zhiwumo,
    kuangzajinghuawu, weijing1, weijing2, xiao, liziye, juhebaozhawu, weijing3
    , weijing4, weijing5, guijingti, molishi, monengjing, monengjing1,
    monengjing2, monengjing3, buding, chuangshilizi, chuangshishenhun
    , chuangshiweichen, chuangshizhixing, jin, jinfen, molizhi,
    shimoxi, shiying, yuanshencanpian, zhayao, zijing1, zzjinbi,
   molijinghuaye, moliye, qiangxiaolengqueye,
    zhiwujinghuaye, suan, yuanwan0, dabaoshui, dabaoleng, dabaoshiyou,dabaozhiwujingyou,
    dabaoJHLiquid,dabaojinglianlio,dabaomoli, dabaozhiwu, dabaojingmoli, 
    dabaoyedan,zhiwujingyou,jinglianlio,
    JHhejinLiquid,JHhejin,gutaiwanqin,taihejin,
} = items;

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// Copyright (C) 2020 abomb4
//
// This file is part of Dimension Shard.
//
// Dimension Shard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Dimension Shard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Dimension Shard.  If not, see <http://www.gnu.org/licenses/>.

//单位传送门
const unitInEffect = new Effect(8, cons(e => {
    const unitSize = e.data.getUnitSize();
    Draw.color(BLUE);
    Draw.alpha(0.7);
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 2 + e.finpow() * unitSize * 0.8);
}));

const unitOutEffect = new Effect(8, cons(e => {
    const unitSize = e.data.getUnitSize();
    Draw.color(ORANGE);
    Draw.alpha(0.7);
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 2 + e.finpow() * unitSize * 0.8);
}));

const inEffect = new Effect(38, cons(e => {
    const radius = 2 * 8 * 1.25;
    Draw.color(BLUE);

    Angles.randLenVectors(e.id, 1, radius * e.fout(), 0, 360, new Floatc2({
        get: (x, y) => {
            var angle = Angles.angle(0, 0, x, y);
            var trnsx = Angles.trnsx(angle, 2);
            var trnsy = Angles.trnsy(angle, 2);
            var trnsx2 = Angles.trnsx(angle, 4);
            var trnsy2 = Angles.trnsy(angle, 4);
            Fill.circle(
                e.x + trnsx + x + trnsx2 * e.fout(),
                e.y + trnsy + y + trnsy2 * e.fout(),
                e.fslope() * 0.8
            );
        }
    }));
}));

const outEffect = new Effect(38, cons(e => {
    const radius = 2 * 8 * 1.25;
    Draw.color(ORANGE);
    Angles.randLenVectors(e.id, 1, radius * e.fin(), 0, 360, new Floatc2({
        get: (x, y) => {
            var angle = Angles.angle(0, 0, x, y);
            var trnsx = Angles.trnsx(angle, 2);
            var trnsy = Angles.trnsy(angle, 2);
            var trnsx2 = Angles.trnsx(angle, 4);
            var trnsy2 = Angles.trnsy(angle, 4);
            Fill.circle(
                e.x + trnsx + x + trnsx2 * e.fin(),
                e.y + trnsy + y + trnsy2 * e.fin(),
                e.fslope() * 0.8
            );
        }
    }));
}));

const { accelerate } = require('Status');
const shieldConsumer = (paramEntity) => cons(trait => {
    if (trait.team == paramEntity.team
        &&Intersector.isInsideHexagon(paramEntity.x, paramEntity.y, paramEntity.realRadius() * 2, trait.x, trait.y)) {
        trait.apply(accelerate, 30);
    }
});

const blockType = extend(ForceProjector, "jiasuyi", {});//加速仪
blockType.buildVisibility = BuildVisibility.shown;
blockType.category = Category.effect;
blockType.size = 3;
blockType.health = 750;
blockType.hasPower = true;
blockType.consumePower(800 / 60);
blockType.repairRadius = 240;
blockType.repairSpeed = 1.8;
blockType.solid = true;
blockType.update = true;
blockType.targetable = true;
blockType.hasPower = true;
blockType.hasLiquids = false;
blockType.phaseUseTime = 1.3 * 60;
blockType.shieldHealth = 0;
blockType.phaseShieldBoost = 0;
blockType.radius = 15 * 8;
blockType.phaseRadiusBoost = 20 * 8;
blockType.itemConsumer = blockType.consumeItem(items.hejinboli,2).boost();

blockType.requirements = ItemStack.with(
    Items.copper, 60,
    Items.lead, 120,
    Items.metaglass, 120,
    items.jin, 120,
    items.guijingti, 150,
    items.shimoxi, 180,
    items.weijing1, 80
);

lib.setBuildingSimple(blockType, ForceProjector.ForceBuild, {
    updateTile() {
        var phaseValid = this.block.findConsumer(cons => cons instanceof ConsumeItems).efficiency(this);

        this.phaseHeat = Mathf.lerpDelta(this.phaseHeat, phaseValid, 0.1);

        if (phaseValid && !this.broken && this.timer.get(blockType.timerUse, blockType.phaseUseTime) && this.efficiency > 0) {
            this.consume();
        }

        this.radscl = Mathf.lerpDelta(this.radscl, this.broken ? 0 : this.warmup, 0.05);

        if (Mathf.chanceDelta(this.buildup / this.breakage * 0.1)) {
            Fx.reactorsmoke.at(this.x + Mathf.range(tilesize / 2), this.y + Mathf.range(tilesize / 2));
        }

        this.warmup = Mathf.lerpDelta(this.warmup, this.efficiency, 0.1);

        if (this.buildup > 0) {
            var scale = !this.broken ? cooldownNormal : this.cooldownBrokenBase;
            var cons = this.block.findConsumer(cons => cons instanceof ConsumeLiquid).efficiency(this);
            if (cons.valid(this)) {
                cons.update(this);
                scale *= (cooldownLiquid * (1 + (this.liquids.current().heatCapacity - 0.4) * 0.9));
            }

            this.buildup -= delta() * scale;
        }

        if (this.broken && this.buildup <= 0) {
            this.broken = false;
        }

        if (this.buildup >= this.breakage + this.phaseShieldBoost && !this.broken) {
            this.broken = true;
            this.buildup = this.breakage;
            Fx.shieldBreak.at(this.x, this.y, this.realRadius(), this.team.color);
        }

        if (this.hit > 0) {
            this.hit -= 1 / 5 * Time.delta;
        }

        var realRadius = this.realRadius();

        if (realRadius > 0 && !this.broken) {
            Groups.unit.intersect(this.x - realRadius, this.y - realRadius, realRadius * 2, realRadius * 2, shieldConsumer(this));
        }
    },
    drawShield() {
        var COLOR = new Color.valueOf("7de5ff");
        var COLOR2 = new Color.valueOf("7de5ff");
        var x = this.x;
        var y = this.y;
        var hit = this.hit;
        if (!this.broken) {
            var radius = this.realRadius();

            Draw.z(Layer.shields);


            if (Core.settings.getBool("animatedshields")) {
                Draw.color(COLOR, COLOR2, Mathf.clamp(hit));
                Fill.poly(x, y, 6, radius);
                Draw.color(this.team.color, COLOR2, Mathf.clamp(hit));
                Lines.poly(x, y, 6, radius);
            } else {
                Lines.stroke(1.5);
                Draw.color(COLOR, COLOR2, Mathf.clamp(hit));
                Draw.alpha(0.09 + Mathf.clamp(0.08 * hit));
                Fill.poly(x, y, 6, radius);
                Draw.color(this.team.color, COLOR2, Mathf.clamp(hit));
                Draw.alpha(1);
                Lines.poly(x, y, 6, radius);
                Draw.reset();
            }
        }

        Draw.reset();
    },

});

//const a = extend(Wall, "2qian2"); 
exports.jiasuyi = blockType;
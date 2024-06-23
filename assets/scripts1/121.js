

const lib = require('lib');
var WsurgeAlloy = new JavaAdapter(BasicBulletType, {});
WsurgeAlloy.collidesTiles = true
WsurgeAlloy.collides = true;
WsurgeAlloy.collidesAir = false;
WsurgeAlloy.damage = 15; //伤害
WsurgeAlloy.splashDamageRadius = 48; //分裂范围
WsurgeAlloy.splashDamage = 50; //分裂的伤害
WsurgeAlloy.width = 11; //宽
WsurgeAlloy.height = 15; //高
WsurgeAlloy.speed = 6;
WsurgeAlloy.lifetime = 60; //子弹最远距离
WsurgeAlloy.hitEffect = Fx.plasticExplosion;
WsurgeAlloy.backColor = Color.valueOf("F9F900"); //背景颜
WsurgeAlloy.frontColor = Color.valueOf("F9F900"); //前面颜
WsurgeAlloy.reloadMultiplier = 2; //装弹速
WsurgeAlloy.ammoMultiplier = 4; //装弹数
WsurgeAlloy.lightning = 8; //闪电根数
WsurgeAlloy.lightningLength = 7; //闪电长度
WsurgeAlloy.lightningDamage = 10;//闪电伤害
const 测试炮 = extend(Turret, '测试炮', {})
lib.setBuildingSimple(测试炮, Turret.TurretBuild, {
    hasAmmo() { return true; },
   // canPickup() { return false },
    peekAmmo() { return WsurgeAlloy; },
    useAmmo() { return WsurgeAlloy; },
});
测试炮.buildVisibility = BuildVisibility.shown;
测试炮.category = Category.turret;
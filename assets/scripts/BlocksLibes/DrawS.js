exports.none = (() => { //无
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("1d1d1d");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 0; //外圈大小
    D.flameRadiusIn = 0; //内圈大小
    D.flameRadiusScl = 5; //总体收缩速度
    D.flameRadiusMag = 0; //外圈扩张大小
    D.flameRadiusInMag = 0; //内圈扩张大小
    return D;
})();
exports.shiyingronglu = (() => { //石英
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("DADADA");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 1; //外圈大小
    D.flameRadiusIn = 0.5; //内圈大小
    D.flameRadiusScl = 3; //总体收缩速度
    D.flameRadiusMag = 2; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.hejinboli = (() => { //合金玻璃机
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("ecf17f");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 0.7; //外圈大小
    D.flameRadiusIn = 0.3; //内圈大小
    D.flameRadiusScl = 3; //总体收缩速度
    D.flameRadiusMag = 2; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.jiweijinggongchang1 = (() => { //微晶工厂
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("E6EC94");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 1; //外圈大小
    D.flameRadiusIn = 0.5; //内圈大小
    D.flameRadiusScl = 3; //总体收缩速度
    D.flameRadiusMag = 1.5; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.jiweijinggongchang2 = (() => { //微晶工厂2
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("96E47F");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 3; //外圈大小
    D.flameRadiusIn = 2.2; //内圈大小
    D.flameRadiusScl = 3.5; //总体收缩速度
    D.flameRadiusMag = 1.5; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.jiweijinggongchang5 = (() => { //微晶工厂5
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("FF8F8D");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 3; //外圈大小
    D.flameRadiusIn = 2.3; //内圈大小
    D.flameRadiusScl = 2.5; //总体收缩速度
    D.flameRadiusMag = 1; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.jiweijinggongchang21 = (() => { //超级微晶工厂2
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("e47f7f");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 6; //外圈大小
    D.flameRadiusIn = 4.3; //内圈大小
    D.flameRadiusScl = 2; //总体收缩速度
    D.flameRadiusMag = 2; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.budingjiagongchang2 = (() => { //布丁2
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("FFD59E");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 4.9; //外圈大小
    D.flameRadiusIn = 3; //内圈大小
    D.flameRadiusScl = 2; //总体收缩速度
    D.flameRadiusMag = 2; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.weijingfenjieji = (() => { //微晶分解机
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("E6EC94");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 3; //外圈大小
    D.flameRadiusIn = 2.2; //内圈大小
    D.flameRadiusScl = 3.5; //总体收缩速度
    D.flameRadiusMag = 1.5; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.zijinggongchang = (() => { //紫晶
    const D = extend(DrawFlame, {});
    D.flameColor = Color.valueOf("c19cef");
    D.lightRadius = 60;
    D.lightAlpha = 0.65;
    D.lightSinScl = 10;
    D.lightSinMag = 5;
    D.flameRadius = 4; //外圈大小
    D.flameRadiusIn = 2.5; //内圈大小
    D.flameRadiusScl = 4; //总体收缩速度
    D.flameRadiusMag = 1.5; //外圈扩张大小
    D.flameRadiusInMag = 1; //内圈扩张大小
    return D;
})();
exports.guijingtihechengjiSteam = (() => {
    var D = new Effect(35, e => {
        Draw.color(Color.valueOf("A2B4DD"));
        Angles.randLenVectors(e.id, 2, 0.2 + e.fin() * 3, (x, y) => {
            Fill.circle(e.x + x, e.y + y, 0.2 + e.fslope() * 1.5);
        });
    });
    return D;
})();
exports.jinfentilianjiSmoke = (() => {
    var D = new Effect(50, e => {
        Draw.color(Color.valueOf("D79A56"), Pal.darkishGray, e.fin());
        Fill.circle(e.x, e.y, (7 - e.fin() * 7) / 2);
    });
    return D;
})();
exports.Magmasmoke = (() => {
    var D = new Effect(110, e => {
            Draw.color(Color.gray);
            Fill.circle(e.x, e.y, e.fslope() * 2);

        });
return D;
})();
exports.tuSmeltsmoke = (() => {
    var D= new Effect(15, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, (x, y)=> {
        Draw.color(Color.valueOf("F8A3C7"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 45);
    });
});
return D;
})();
exports.taiSmeltsmoke = (() => {
    var D= new Effect(15, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, (x, y)=> {
        Draw.color(Color.valueOf("A4B8FA"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 45);
    });
});
return D;
})();
exports.jinhuiboliSmeltsmoke = (() => {
    var D= new Effect(50, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 50, (x, y)=> {
        Draw.color(Color.valueOf("e8d123"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 450);
    });
});
return D;
})();
exports.jinSmeltsmoke = (() => {
    var D= new Effect(15, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, (x, y)=> {
        Draw.color(Color.valueOf("FFE671"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 45);
    });
});
return D;
})();
exports.oilSmeltsmoke = (() => {
    var D= new Effect(15, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, (x, y)=> {
        Draw.color(Color.valueOf("1E1E1E"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 45);
    });
});
return D;
})();
exports.zuanSmeltsmoke = (() => {
    var D= new Effect(70, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, (x, y)=> {
        Draw.color(Color.valueOf("7affff"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 45);
    });
});
return D;
})();
exports.zhiwuSmeltsmoke = (() => {
    var D= new Effect(15, e => {
        Angles.randLenVectors(e.id, 6, 4 + e.fin() * 5, (x, y)=> {
        Draw.color(Color.valueOf("61bb66"), e.color, e.fin());
        Fill.square(e.x + x, e.y + y, 0.5 + e.fout() * 2, 45);
    });
});
return D;
})();
exports.chuangshiyujieBubble = (() => {
    var D= new Effect(20, e => {
        Draw.color(Color.valueOf("f9f9ca"));Lines.stroke(e.fout() + 0.2);
        Angles.randLenVectors(e.id, 2, 1 + 20 * e.fout(), e.rotation, 120, (x, y) => {
            Lines.circle(e.x + x, e.y + y, 1 + e.fin() * 3);
            Drawf.tri(e.x + x, e.y + y, e.fslope() * 3 + 1, e.fslope() * 3 + 1, Mathf.angle(x, y));
        });
    });
    return D;
    })();







//-----------------------------

    
const destruction = new Effect(60, e => {
    Draw.color(Pal.remove);
    Draw.alpha(e.fout());
    Lines.stroke(25 * e.fout());
    Lines.circle(e.x, e.y, e.fin()*300);
    Draw.alpha(1);
    Lines.stroke(50 * e.fout());
    Lines.circle(e.x, e.y, e.fin()*100);
    Angles.randLenVectors(e.id, 50, e.fin()*200, ( x, y ) => {
      Draw.color(Pal.remove, Color.black, e.finpow());
      Fill.circle(e.x + x, e.y + y, 25 * e.fout());
    });
    Angles.randLenVectors(e.id, 50, 200 * e.fin(), e.rotation, 360,(x, y) => {
      Draw.color(Pal.remove);
      Lines.stroke(1);
      Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), e.fout() * 20);
    });
  });
  exports.destruction =destruction

  const shitassDeathEffect = new Effect(60, e => {
    Draw.color(Pal.remove);
    Lines.stroke(4 - (4 * e.finpow()));
    Lines.poly(e.x, e.y, 3, e.finpow() * 100, e.finpow() * 360);
    Lines.poly(e.x, e.y, 3, e.finpow() * 100, (0 - e.finpow()) * 360);
  });
  exports.shitassDeathEffect =shitassDeathEffect

  const deathBulletTrail = new Effect(20, e => {
    Draw.color(Pal.remove);
    Angles.randLenVectors(e.id, 4, 4, (x, y) => {
       Fill.circle(e.x + x, e.y + y, e.fout() * 2);
    });
  });
  exports.deathBulletTrail =deathBulletTrail

  const deathMissileTrail = new Effect(20, e => {
    Draw.color(Pal.remove, Color.black, e.fin());
    Fill.circle(e.x, e.y, e.fout() * 5);
  });
  exports.deathMissileTrail =deathMissileTrail

  const deathMissileHit = new Effect(30, e =>{ 
    Angles.randLenVectors(e.id, 20, 50 * e.finpow(), 
    e.rotation, 200, (x, y) => {
      Draw.color(Pal.remove, Color.black, e.fin());
      Fill.circle(e.x + x, e.y + y, e.fout() * 5);
      Lines.lineAngle(e.x + x * 2, e.y + y * 2, Mathf.angle(x, y), e.fout() * 10 );
    });
  
    Lines.stroke(5 - e.finpow() * 5);
    Lines.circle(e.x, e.y, e.finpow() * 100);
  })
  exports.deathMissileHit =deathMissileHit

  const deathLaserShoot = new Effect(20, e => {
    Draw.color(Color.black);
    Fill.circle(e.x, e.y, 10 * e.fslope());
  
    Angles.randLenVectors(e.id, 10, 30 - (e.finpow() * 30), (x, y) => {
      Draw.color(Color.black, Pal.remove, e.finpow());
      Fill.circle(e.x + x, e.y + y, e.fin() * 8);
    });
    Draw.color(Pal.remove);
    Fill.circle(e.x, e.y, 8 * e.fslope());
  })
  exports.deathLaserShoot =deathLaserShoot

  const deathHaloShoot = new Effect(45, e => {
    Draw.color(Color.valueOf("9B61FFFF"))
    Lines.stroke(e.fout()*2)
    Lines.poly(e.x, e.y, 3, e.fin() * 100, e.fin() * 360)
    Lines.poly(e.x, e.y, 3, e.fin() * 100, e.fout() * 360)
  
    Draw.alpha(1)
    Fill.poly(e.x, e.y, 3, e.fslope() * 20, e.fout() * 720)
    Fill.poly(e.x, e.y, 3, e.fslope() * 20, e.fin() * 360)
  });
  exports.deathHaloShoot =deathHaloShoot

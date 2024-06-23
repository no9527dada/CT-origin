var transparency = 0.9//透明度
var framesCount = 2;//贴图数
var frames = new Array();
var colors = [Color.valueOf("3E5582"), Color.valueOf("89BAEE")];
const shimoxiji = extend(GenericCrafter, "shimoxiji", {
	load(){
		this.super$load();
		for(let i = 0; i < framesCount; i++){
			frames[i] = Core.atlas.find(this.name + "-frame" + i);
		}
	},
});
shimoxiji.buildType = () => {
 	 var colorTimer = 59;
     return extend(GenericCrafter.GenericCrafterBuild, shimoxiji, {
         draw(){
         	this.super$draw();
         	var index = Math.floor(this.totalProgress % (colors.length * colorTimer) / colorTimer);
         	if(frames.length > 0) frames.forEach((frame, i) => {
         		Draw.color(colors[(index + i) % colors.length], transparency);
         		Draw.rect(frame, this.x, this.y);
         	});
         },
     })
 }

exports.shimoxiji = shimoxiji;
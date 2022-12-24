
exports.modName = "creators";
 exports.setBuilding = function(blockType, buildingCreator) {
    blockType.buildType = prov(() => buildingCreator(blockType));
}
exports.cons2 = (func) => new Cons2({
    get: (v1, v2) => func(v1, v2)
});
exports.int = (v) => new java.lang.Integer(v);

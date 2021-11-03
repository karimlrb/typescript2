"use strict";
// TUple
var tuple;
tuple = [false, 48];
// Le push marche toujours avec le Tuple Warning
tuple.push(4);
// console.log(tuple);
// Enum
// const Roles = {
//     JAVASCRIPT : 1,
//     CSS: 2,
//     VUE : 3
// }
// console.log(Roles.VUE);
// Commence à 0 mais on peut le faire commencer ou on veut
var Roles;
(function (Roles) {
    Roles[Roles["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    Roles[Roles["CSS"] = 2] = "CSS";
    Roles[Roles["VUE"] = 3] = "VUE";
})(Roles || (Roles = {}));
console.log(Roles.JAVASCRIPT);

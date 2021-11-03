// TUple

let tuple: [boolean,number];
tuple = [false,48];

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
enum Roles{JAVASCRIPT = 1, CSS, VUE}
console.log(Roles.JAVASCRIPT);

"use strict";
// L'opérateur !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// container peut être Element|null, ici on garantie qu'il sera jamais null
var container = document.querySelector('.container');
var employé1 = {
    title: "dev Front",
    // description: "Sites vitrines",
    salary: 45
};
//  on lit que si employé1 n'est pas null
console.log(employé1 === null || employé1 === void 0 ? void 0 : employé1.title);
// Paramètres optionnel
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log('Pas de message');
    }
}
;
message();
// Operateur ?? 
var data = ""; // Si data ="" ou data=0 ici on renvoie Hello W
var display = data || "Hello W";
console.log(display);
// Si on veut renvoyer "" ou 0 on doit use ?? à la place du ||
var data1 = 0;
var display1 = data1 !== null && data1 !== void 0 ? data1 : "Hello W";
console.log(display1);
// Never
function alerUser(msg) {
    throw (msg);
}
alerUser("Fermer la console");

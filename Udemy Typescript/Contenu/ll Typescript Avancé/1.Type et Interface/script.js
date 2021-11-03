"use strict";
var shark1 = {
    nageoire: 2,
    element: "water",
    branchies: true,
    poids: 800,
    longueur: 4.5
};
console.log(shark1);
var redRose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true
};
console.log(redRose);
var repAuto = function (country) {
    if (country.lang === "JA") {
        console.log("Japan");
    }
    else if (country.lang === "IT") {
        console.log("Italy");
    }
};
var Japanese1 = {
    lang: "JA",
    food: ["Noodles", "Ramen"]
};
repAuto(Japanese1);
var chinaTrip = {
    wang: { id: 1, name: "wang" },
    wun: { id: 2, name: "wun" },
    woyang: { id: 3, name: "woyang" }
};
console.log(chinaTrip);

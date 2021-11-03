"use strict";
//  On implémente l'interface à notre classe
var RocketFactory = /** @class */ (function () {
    // Attrention pas de fonctions fléchées =>
    function RocketFactory(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    RocketFactory.prototype.takeOff = function (action) {
        console.log(action);
    };
    return RocketFactory;
}());
var FalconX = new RocketFactory(12, 800, 4, 75);
console.log(FalconX);
FalconX.takeOff("Décollage Efféctué");

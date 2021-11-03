"use strict";
// Overload, permet de spécifié quel type de retour on a
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(combine(78, 75));

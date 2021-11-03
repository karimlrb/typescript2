"use strict";
// tsc --init pour créer le tsconfig.json
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [1, 2, 3];
var newArr = __spreadArray(__spreadArray([], arr, true), [4, 5], false);
console.log(newArr);
var pNodeList = document.querySelectorAll('p');
// PAs possible de faire un spread avec es5 par exemple
// dans le tsconfig.json on peut compiler en es6 et c'est ok 
// const arrFromNodeList = [...pNodeList];
// Ici dans le js let et const sont traduit en var
var text = "abc";
var strictVar = 10;
// ---------------------------------------
// Si on ne veut pas compiler certains (ici analytics.ts) fichiers ->
// "exclude":["./analytics.ts"]
// De base "./node_modules" est exclu car on veut pas compiler ses fichiers ts
// on met les .ts dans src et on veut compiler que les .ts de src
// Grace à cette ligne on compile que les ts dans src
// "include": ["src"]

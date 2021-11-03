"use strict";
function multiply(num1, num2, action) {
    if (num2 === void 0) { num2 = 10; }
    if (action)
        console.log(action);
    return num1 * num2;
}
// console.log(multiply(4,7, "work"));
// let foo: Function;
// foo = () => { return "hello"}
// console.log(foo());
// fUNCTIONS SIGANTURES
// Ne pas mettre un point mais une => / Utile quand on a une fonction compliqué
var basic;
basic = function (a, b) { return a * b; };
// Functions CallBack qui vont se faire appeler par d'autres functions
function greetings(fn) {
    fn("Hello World");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole);

// Overload, permet de spécifié quel type de retour on a

type NumberOrString = string | number;


function combine(a:number, b:number):number
function combine(a:number, b:string):string
function combine(a:string, b:number):string
function combine(a:string, b:string):string
function combine(a:NumberOrString, b:NumberOrString){
    if (typeof a === "string" || typeof b ==="string") {
        return a.toString() + b.toString();
    } else {
        return a+b;
    }
}
console.log(combine(78,75));

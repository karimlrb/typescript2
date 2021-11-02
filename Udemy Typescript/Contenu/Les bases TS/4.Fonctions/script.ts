function multiply (num1: number,num2 = 10, action?:string){
    if(action) console.log(action);  
    return num1 * num2
}
// console.log(multiply(4,7, "work"));

// let foo: Function;

// foo = () => { return "hello"}

// console.log(foo());

// fUNCTIONS SIGANTURES
// Ne pas mettre un point mais une => / Utile quand on a une fonction compliqué

let basic : (a:number, b:number) => number;

basic = (a,b) => {return a * b};

// Functions CallBack qui vont se faire appeler par d'autres functions

function greetings(fn: (a:string) => void){
    fn("Hello World");
}

function printToConsole(msg:string){
    console.log(msg);
}

greetings(printToConsole);
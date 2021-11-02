//  Unions

let code: number | boolean | number;

code = 9;

let array:(number|boolean)[];

array = [45];

const foo = (param: number|string) => {
    console.log(param);   
}
foo(47);

// Types personalisés

type mixedNumStr = number | string;
type booleanOrObject = Object | boolean;


const baz = (param: mixedNumStr | booleanOrObject) => {
    console.log(param);   
}

baz(true);

type element = {
    x:number;
    y:number;
    id:number|string;
    visible:boolean;
}

const button: element = {
    x:45,
    y:75,
    id:1,
    visible:true
}
console.log(button);


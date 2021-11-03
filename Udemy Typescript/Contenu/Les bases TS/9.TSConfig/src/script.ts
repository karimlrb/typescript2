// tsc --init pour créer le tsconfig.json

const arr = [1,2,3];

const newArr = [...arr, 4,5];

console.log(newArr);

const pNodeList = document.querySelectorAll('p');
// PAs possible de faire un spread avec es5 par exemple
// dans le tsconfig.json on peut compiler en es6 et c'est ok 
// const arrFromNodeList = [...pNodeList];

// Ici dans le js let et const sont traduit en var
let text = "abc";
const strictVar = 10;
// ---------------------------------------
// Si on ne veut pas compiler certains (ici analytics.ts) fichiers ->
// "exclude":["./analytics.ts"]
// De base "./node_modules" est exclu car on veut pas compiler ses fichiers ts

// on met les .ts dans src et on veut compiler que les .ts de src
// Grace à cette ligne on compile que les ts dans src
// "include": ["src"]

// On compile dans src avec "rootDir": "./src",   
// On envoie dans public avec  "outDir": "./public",  
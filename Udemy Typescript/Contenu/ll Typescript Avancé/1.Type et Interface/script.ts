// Intersection 
type Fish = {
    nageoire: number;
    element: "water";
    branchies:true
}
type Shark = {
    poids :number;
    longueur:number;
}
type HammerShark = Fish & Shark;

const shark1:HammerShark = {
    nageoire: 2,
    element:"water",
    branchies:true,
    poids: 800,
    longueur: 4.5
}
console.log(shark1);

// Lier des interfaces
// Les interfaces sont utlisé avec les Classes
// Pour crée une interface d'objet à partir de laquelle on va crée +ieurs class

interface Flower {
    pollen:true;
    type:"vegetal";
}

interface Rose extends Flower{
    color:string;
    thorn:boolean;
}

const redRose: Rose = {
    pollen:true,
    type:"vegetal",
    color:"red",
    thorn:true
}
console.log(redRose);

// Union discriminante

type Japan = {
    lang: "JA";
    food:string[];
}
type Italy = {
    lang: "IT";
    food:string[];
}
type Country = Japan | Italy;

const repAuto = (country:Country) => {
    if (country.lang==="JA") {
       console.log("Japan");     
    } else if (country.lang === "IT") {
        console.log("Italy");
    }
}
const Japanese1 : Country = {
    lang:"JA",
    food:["Noodles", "Ramen"]
}

repAuto(Japanese1);

// Si on connait pas le nombres de propriétés 

interface Group {
    [name:string] : object
}

const chinaTrip = {
    wang : {id:1, name:"wang"},
    wun : {id:2, name:"wun"},
    woyang : {id:3, name:"woyang"}
}

console.log(chinaTrip);

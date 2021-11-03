// L'opérateur !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// container peut être Element|null, ici on garantie qu'il sera jamais null
const container = document.querySelector('.container')!;

// L'opérateur ????????????????????????????????????????

type Job = {
    title: string;
    description?: string;
    salary: number;
}

const employé1: Job = {
    title: "dev Front",
    // description: "Sites vitrines",
    salary : 45
}
//  on lit que si employé1 n'est pas null
console.log(employé1?.title);

// Paramètres optionnel

function message(msg?:string){
    if (msg) {
        console.log(msg);
    } else{
        console.log('Pas de message');       
    }
};
message();

// Operateur ?? 
 
const data=""; // Si data ="" ou data=0 ici on renvoie Hello W
const display = data || "Hello W";
console.log(display);

// Si on veut renvoyer "" ou 0 on doit use ?? à la place du ||

const data1=0; 
const display1 = data1 ?? "Hello W";
console.log(display1);

// Never

function alerUser(msg:string): never{
    throw(msg)
}
alerUser("Fermer la console")
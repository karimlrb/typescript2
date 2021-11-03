// Interface
//  Les interfaces représente toujours des objets mais pas les types
interface Rocket {
    reactors: number;
    vMax : number;
    takeOff : (action: string) => void;
}

// type Rocket2 =  {
//     reactors: number;
//     vMax : number;
//     takeOff : (action: string) => void
// }
//  On peut rajouter des clés aux interfaces mais pas aux types

interface Rocket{
    price:number;
    carburant : number;
}
//  On implémente l'interface à notre classe
class RocketFactory implements Rocket{
    reactors: number;
    vMax : number;
    price:number;
    carburant : number;
    // Attrention pas de fonctions fléchées =>
    constructor(reactors: number,vMax : number, price:number,carburant : number){
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action:string): void{
        console.log(action); 
    }
}

const FalconX = new RocketFactory(12,800,4,75);
console.log(FalconX);
FalconX.takeOff("Décollage Efféctué");
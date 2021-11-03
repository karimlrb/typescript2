interface Country {
    name: string;
    population: number;
    lang: string[] 
}

class Norway implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[],
        public Capital: string
    ) {}
}
const NorwayData = new Norway('Norway', 9, ["Norwegian"], "Oslo")
console.log(NorwayData);


class France implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[]
    ) {}
}
const FranceData = new France('France', 70, ["Français", "Breton","Basque"])
console.log(FranceData);

class Aquitaine extends France {}

const AquitaineData = new Aquitaine("Aquitaine", 4, ["Français", "Basque","Gascon"])
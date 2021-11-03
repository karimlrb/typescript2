// Generics

// Interface Réutilisable

interface City<T> {
    name: string;
    pop:number;
    data : T
}

const London: City<object> = {
    name:"Londres",
    pop:10,
    data : {area : 1572}
}
const Paris: City<object[]> = {
    name:"Londres",
    pop:10,
    data : [{Ldc: false}, {diesel:false}]
}

// Generics function

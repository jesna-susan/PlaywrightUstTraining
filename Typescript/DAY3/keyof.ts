interface Person {
    name: string;
    age: number;
    gender: string;
}

interface Car {
    name: string;
    price: number;
}

interface House {
    address: string;
    size: number;
    price: number;
}

const person: Person = {
    name: "Aaryan",
    age: 30,
    gender: "male"
};

const bmw: Car = {
    name: "m5",
    price: 300000
};

const house: House = {
    address: "123 Main St",
    size: 2500,
    price: 500000
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(getProperty(person, "gender")); 
console.log(getProperty(bmw, "name"));
console.log(getProperty(house, "address")); 

var person = {
    name: "Aaryan",
    age: 30,
    gender: "male"
};
var bmw = {
    name: "m5",
    price: 300000
};
var house = {
    address: "123 Main St",
    size: 2500,
    price: 500000
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(person, "gender")); // Output: "male"
console.log(getProperty(bmw, "name")); // Output: "m5"
console.log(getProperty(house, "address")); // Output: "123 Main St"

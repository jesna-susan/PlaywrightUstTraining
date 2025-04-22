function meoww() {
    var name = "jess";
    console.log(meoww);
}
meoww();
var admin = {
    name: "jesna",
    id: 1
};
//admin is an object and object requires a type that we define through an interface 
console.log(admin);
var UserAccount1 = /** @class */ (function () {
    function UserAccount1(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    }
    return UserAccount1;
}());
function main1() {
    //user is an object of type interface User through a class UserAccount1
    var user = new UserAccount1("s", 2, "Trainer");
    console.log(user.name);
}
main1();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    }
    return UserAccount;
}());
function main() {
    var user = new UserAccount("Aaryan", 1, "Trainer"); // User user = new UserAccount("Aaryan", 1);
    var user2 = new UserAccount("Kirti", 2, "Tester");
    console.log(user.role, user2.role);
}
main();
//if in other file some other user is defined in an interface while compiling compiler checks that too and it causes a conflict
//here it means can take argument as number or an array of numbers
//composing types
function display(num) {
    if (typeof num == 'number') {
        console.log("display"); //checking whether num is int
        return num;
    } //this if loop wont work
    return num;
}
//instance of will check whether an object is an instance of a class, not work for primitive types like numbers.
//instead type of operator is used 
console.log(display(3));
console.log(display([2, 3, 4]));
//Array.isArray(num)    checks whether array or not 

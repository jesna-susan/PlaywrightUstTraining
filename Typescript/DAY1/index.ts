function meoww(){
    let name:string ="jess"
    console.log(meoww);
}
meoww();

interface Admin {
    name: string,
    id:number;
}
const admin: Admin = {
    name: "jesna",
    id:1
}
//admin is an object and object requires a type that we define through an interface 
console.log(admin);

//another method 
//to create a new object of interface we do it through class 

//example of composing types the following line
type roles = "Trainer" | "Developer" | "Tester";
interface User1{
    name:string;
    id:number;
    role:roles;
}
class UserAccount1{
    name:string;
    id:number;
    role:roles;
    
    constructor(name:string,id:number,role:roles){
        this.name=name;
        this.id=id;
        this.role=role;
    }

}
function main1(){
    //user is an object of type interface User through a class UserAccount1
    const user: User1 = new UserAccount1("s",2,"Trainer");
    console.log(user.name);
}
main1();

//another example

interface User {
    name: string;
    id: number; 
    role: roles;
}

class UserAccount {
    name: string; 
    id: number; 
    role: roles;

    constructor(name: string, id: number, role: roles) { 
        this.name = name; 
        this.id = id;
        this.role = role;
    }
}

function main() {
    const user: User = new UserAccount("Aaryan", 1, "Trainer"); // User user = new UserAccount("Aaryan", 1);
    const user2: User = new UserAccount("Kirti", 2, "Tester");
    console.log(user.role, user2.role);
}

main();

//if in other file some other user is defined in an interface while compiling compiler checks that too and it causes a conflict

//here it means can take argument as number or an array of numbers
//composing types
function display(num: number | number[]){
    if(typeof num == 'number'){
        console.log("display") //checking whether num is int
        return num;
    }
    return num;
}
//num instanceof Number  -   this statement wont work
//instanceof will check whether an object is an instance of a class, not work for primitive types like numbers.
//instead type of operator is used 
console.log(display(3));
console.log(display([2,3,4]))

//Array.isArray(num)  -  checks whether array or not 
/*interface meow {
    speak: {
        (s: string): string;
        (n: number): string;
    }
}*/
var Meow = /** @class */ (function () {
    function Meow() {
    }
    Meow.prototype.speak = function (arg) {
        if (typeof (arg) === 'number') {
            return "meow number";
        }
        if (typeof (arg) === 'string') {
            return "meow string";
        }
    };
    return Meow;
}());
var m1 = new Meow();
console.log(m1.speak(10));
console.log(m1.speak("Aaryan"));
/*interface Dog {
    bark: {
        (s: string): string;
        (n: number): string;
    }
}*/
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function (arg) {
        if (typeof (arg) === 'number') {
            return "bark number";
        }
        else if (typeof (arg) === 'string') {
            return "bark string";
        }
    };
    return Dog;
}());
var d1 = new Dog();
console.log(d1.bark(20));
console.log(d1.bark("Buddy"));

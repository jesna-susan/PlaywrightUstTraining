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

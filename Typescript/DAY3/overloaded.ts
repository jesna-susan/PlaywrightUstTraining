/*interface meow {
    speak: {
        (s: string): string;
        (n: number): string;
    }
}*/

class Meow {
    speak(s: string): string;
    speak(n: number): string;
    speak(arg: any): any {
        if(typeof(arg) === 'number') {
            return "meow number"
        } if(typeof(arg) === 'string') {
            return "meow string";
        }
    }
}

let m1 = new Meow();

console.log(m1.speak(10));
console.log(m1.speak("Aaryan"));
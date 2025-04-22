function sum1(...numbers: number[]): number {
    // return numbers.reduce((total, num) => total + num, 0); // take 2 param data, accept
    //processes an array and reduces it to a single value by applying a function to each element of the array, accumulating the result.
    let total = 0;
    for(let num of numbers) {
        total += num;
    }
    return total;
}

const res1 = sum1(1,2,3);
console.log(res1);
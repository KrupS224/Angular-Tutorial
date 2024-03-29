// method 1
function add(num1 : number, num2: number, num3?:number) : number { // num3 is optional
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(`10 + 20 = ${add(10, 20)}`);
console.log(`10 + 20 + 30 = ${add(10, 20, 30)}`);

// method 2
const sub = (num1 : number, num2: number, num3 = 0) : number =>  num1 - num2 - num3;
console.log(`10 - 20 = ${sub(10, 20)}`);
console.log(`10 - 20 - 30 = ${sub(10, 20, 30)}`);

// method 3
const mul = function(num1 : number, num2: number) : number {
    return num1 * num2;
}
console.log(`10 * 20 = ${mul(10, 20)}`);

// method 4
const add_multiple = (...nums: number[]) : number => nums.reduce((acc, val) => acc + val, 0);
console.log(`10 + 20 + 30 + 40 = ${add_multiple(10, 20, 30, 40)}`);
const number = [1, 2, 3, 4];
console.log(`1 + 2 + 3 + 4 = ${add_multiple(...number)}`);


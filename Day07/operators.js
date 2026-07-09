let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

let x = 10;

x += 5;
console.log("\nAfter += :", x);

x -= 2;
console.log("After -= :", x);

x *= 3;
console.log("After *= :", x);

x /= 2;
console.log("After /= :", x);

console.log("\nComparison Operators");

console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a == b :", a == b);
console.log("a === b :", a === b);
console.log("a != b :", a != b);
console.log("a !== b :", a !== b);

console.log("\nLogical Operators");

console.log(a > b && b < 10);
console.log(a < b || b < 10);
console.log(!(a > b));

let count = 5;

console.log("\nIncrement / Decrement");

console.log("Initial:", count);

count++;
console.log("After Increment:", count);

count--;
console.log("After Decrement:", count);

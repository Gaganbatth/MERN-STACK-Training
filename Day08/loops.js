for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("Factorial =", factorial);

let num1 = 1234;
let reverse = 0;

while (num1 > 0) {
  let digit = num1 % 10;
  reverse = reverse * 10 + digit;
  num1 = Math.floor(num1 / 10);
}

console.log("Reversed Number =", reverse);

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

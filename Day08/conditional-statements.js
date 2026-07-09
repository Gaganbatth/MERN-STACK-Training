let num = -5;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let num1 = 8;

if (num1 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let a = 25;
let b = 40;

if (a > b) {
  console.log(a + " is larger");
} else if (b > a) {
  console.log(b + " is larger");
} else {
  console.log("Both numbers are equal");
}

let a1 = 20;
let b1 = 35;
let c1 = 15;

if (a1 >= b1 && a1 >= c1) {
  console.log(a1 + " is largest");
} else if (b1 >= a1 && b1 >= c1) {
  console.log(b1 + " is largest");
} else {
  console.log(c1 + " is largest");
}

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

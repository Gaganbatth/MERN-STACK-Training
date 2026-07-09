function isEven(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

isEven(13);

function findCube(num) {
  return num * num * num;
}

let result = findCube(2);
console.log(result);

let celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

console.log(celsiusToFahrenheit(25));

let LengthOfString = (string) => {
  return string.length;
};

console.log(LengthOfString("Hello World"));

function LastCharacter(string) {
  return string[string.length - 1];
}

console.log(LastCharacter("HelloEveryone"));

function squareroot(num) {
  //   return num ** 0.5;
  return Math.sqrt(num);
}

console.log(squareroot(16));

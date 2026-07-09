let name = "Gagandeep";
let age = 20;
let isStudent = true;
let city;
let marks = null;
let id = 1234567890123456789n;
let symbol = Symbol("student");

let student = {
  name: "Gagandeep",
  age: 20,
  course: "B.Tech CSE",
};

let subjects = ["HTML", "CSS", "JavaScript"];

function greet() {
  return "Welcome to JavaScript";
}

console.log("String:", name);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Undefined:", city);
console.log("Null:", marks);
console.log("BigInt:", id);
console.log("Symbol:", symbol);

console.log("\nObject:", student);
console.log("Array:", subjects);
console.log("Function:", greet());

console.log("\nUsing typeof");

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof marks);
console.log(typeof id);
console.log(typeof symbol);
console.log(typeof student);
console.log(typeof subjects);
console.log(typeof greet);

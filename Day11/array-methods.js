// let array1 = [1, 2, 3, 4];
// let array2 = [6, 7, [8, 9]];
// array1.push(5);
// console.log(array1);

// array1.pop();
// console.log(array1);

// array1.shift();
// console.log(array1);

// array1.unshift(0);
// console.log(array1);

// array1.splice(1, 2);
// console.log(array1);

// array1.sort();
// console.log(array1);

// array1.reverse();
// console.log(array1);

// array1.fill(0);
// console.log(array1);

// array1.splice(1, 3);
// console.log(array1);

// console.log(array1.concat(array2));

// console.log(array2.flat());

// console.log(array1.includes(5));

// console.log(array2.indexOf(7));

// console.log(array2.join("-"));

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [10, 20, 30, 40, 50, 60, 70];
let names = ["rahul", "priya", "simran"];

let result = array1.map((num) => num * 2);
console.log(result);

let result1 = names.map((name) => name.toUpperCase());
console.log(result1);

let sort = array1.filter((num) => num % 2 == 0);
console.log(sort);

let sort1 = array1.filter((num) => num % 2 !== 0);
console.log(sort1);

let g = array2.filter((num) => num > 50);
console.log(g);

let find1 = array1.find((num) => num % 2 === 0);
console.log(find1);

let find2 = array1.findIndex((num) => num === 5);
console.log(find2);

let reduce1 = array2.reduce((total, num) => total * num, 1);
console.log(reduce1);

let largest = array2.reduce((max, num) => {
  return num > max ? num : max;
});
console.log(largest);

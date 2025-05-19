console.log("hello world");

console.log("hello 2");

let colors = ["red", "green"];
console.log(colors);

const sum = 7 + 3;
console.log(sum);

const ave = sum / 2;
console.log(ave);

const name = "Alice"; // global scope

function greet() {
  const greeting = "Hello";

  function inner() {
    const name = "Bob"; // inner scope variable shadows outer one
    console.log(greeting + ", " + name);
  }

  inner();
}

greet(); // Output: Hello, Bob

function printItem(item, index) {
  console.log(index + ": " + item);
}

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(printItem); // <-- Use the exact function name here

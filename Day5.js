const prompt = require("prompt-sync")();

function compareNumbers() {
  const num1 = parseFloat(prompt("Enter the first number: "));
  const num2 = parseFloat(prompt("Enter the second number: "));

  if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);
  } else {
    console.log("Both numbers are equal");
  }
}

function checkAge() {
  const age = parseInt(prompt("Enter your age: "), 10);

  if (age < 18) {
    console.log("You are a minor");
  } else {
    console.log("You are an adult");
  }
}

function divisibleByFive() {
  const number = parseFloat(
    prompt("Enter a number to check if it is divisible by 5: ")
  );

  if (number % 5 === 0) {
    console.log("Divisible by 5");
  } else {
    console.log("Not divisible by 5");
  }
}

function checkEvenOrOdd() {
  const number = parseFloat(
    prompt("Enter a number to check if it is even or odd: ")
  );

  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

function checkPositive() {
  const number = parseFloat(
    prompt("Enter a number to check if it is positive: ")
  );

  if (number > 0) {
    console.log("Positive");
  } else {
    console.log("Not positive");
  }
}

function main() {
  compareNumbers();
  checkAge();
  divisibleByFive();
  checkEvenOrOdd();
  checkPositive();
}

main();

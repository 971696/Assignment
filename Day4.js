var prompt = require("prompt-sync")();

// Function to greet the user by their name
function greetUser() {
  var name = prompt("Enter your name: ");
  console.log("Hello, " + name + "!");
}

// Function to calculate the area of a rectangle
function calculateRectangleArea() {
  var length = parseFloat(prompt("Enter the length of the rectangle: "));
  var width = parseFloat(prompt("Enter the width of the rectangle: "));
  console.log("Area of the rectangle is: " + length * width);
}

// Function to compare two numbers
function compareNumbers() {
  var num1 = parseFloat(prompt("Enter the first number: "));
  var num2 = parseFloat(prompt("Enter the second number: "));
  console.log(num1 === num2 ? "Numbers are equal" : "Numbers are not equal");
}

// Function to check voting eligibility
function checkVotingEligibility() {
  var age = parseInt(prompt("Enter your age: "), 10);
  console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");
}

// Function to evaluate if a user can afford items within a specified budget
function canAfford() {
  var totalCost = parseFloat(prompt("Enter the total cost of items: "));
  var budget = parseFloat(prompt("Enter your budget: "));
  console.log(totalCost <= budget ? "Within budget" : "Over budget");
}

// Function to compare two variables
function compareTwoVariables() {
  var x = 5;
  var y = 7;
  var z = x > y;
  console.log(z);
}

// Function to compare seven numbers
function compareSevenNumbers() {
  var a = parseInt(prompt("Enter value for a: "), 10);
  var b = parseInt(prompt("Enter value for b: "), 10);
  var c = parseInt(prompt("Enter value for c: "), 10);
  var d = parseInt(prompt("Enter value for d: "), 10);
  var e = parseInt(prompt("Enter value for e: "), 10);
  var f = parseInt(prompt("Enter value for f: "), 10);
  var g = parseInt(prompt("Enter value for g: "), 10);

  var sum1 = (a + b) * c;
  var sum2 = d + e + f + g;
  console.log(sum1 > sum2);
}

// Function to calculate the result of an expression
function playWithExpressions() {
  var a = parseInt(prompt("Enter value for a: "), 10);
  var b = parseInt(prompt("Enter value for b: "), 10);
  var c = parseInt(prompt("Enter value for c: "), 10);
  var d = parseInt(prompt("Enter value for d: "), 10);
  var e = parseInt(prompt("Enter value for e: "), 10);

  var result = ((a + b) * c) / d - e;
  console.log(result);
}

// Function to swap the values of two variables
function variableSwap() {
  let x = parseInt(prompt("Enter value for x: "), 10);
  let y = parseInt(prompt("Enter value for y: "), 10);

  x = x + y;
  y = x - y;
  x = x - y;

  console.log("After swap, x: " + x + ", y: " + y);
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
  var celsius = parseFloat(prompt("Enter temperature in Celsius: "));
  var fahrenheit = (celsius * 9) / 5 + 32;
  console.log("Temperature in Fahrenheit: " + fahrenheit);
}

// Function to check if a number is a multiple of 5
function isMultipleOfFive() {
  var num = parseInt(prompt("Enter a number: "), 10);
  console.log(num % 5 === 0);
}

// Function to check if two numbers have the same last digit
function hasSameLastDigit() {
  var num1 = parseInt(prompt("Enter the first number: "), 10);
  var num2 = parseInt(prompt("Enter the second number: "), 10);
  console.log(num1 % 10 === num2 % 10);
}

// Function to check if the sum of two numbers is even
function isSumEven() {
  var num1 = parseInt(prompt("Enter the first number: "), 10);
  var num2 = parseInt(prompt("Enter the second number: "), 10);
  console.log((num1 + num2) % 2 === 0);
}

// Function to check if two characters are equal
function equalCharactersCheck() {
  var char1 = prompt("Enter the first character: ");
  var char2 = prompt("Enter the second character: ");
  console.log(char1 === char2);
}

// Function to check if a number is odd or even
function oddOrEvenCheck() {
  var num = parseInt(prompt("Enter a number: "), 10);
  console.log(num % 2 === 0 ? "Even" : "Odd");
}

// Main function to run all the tasks
function main() {
  greetUser();
  calculateRectangleArea();
  compareNumbers();
  checkVotingEligibility();
  canAfford();
  compareTwoVariables();
  compareSevenNumbers();
  playWithExpressions();
  variableSwap();
  convertCelsiusToFahrenheit();
  isMultipleOfFive();
  hasSameLastDigit();
  isSumEven();
  equalCharactersCheck();
  oddOrEvenCheck();
}

main();

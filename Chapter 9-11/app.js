// ----------Assignment 9-11----------
// Question 1
var city = prompt("Tell Your City Name")
if (city == "karachi") {
    console.log("Welcome to City Of Lights")
} else {
    console.log("You are in Incorrect Place")
}

// Question 2
var gender = prompt("Tell your gender")
if (gender == "male") {
    console.log("Good Morning Sir")
}
else if (gender == "female") {
    console.log("Good Morning Ma'am")
} else {
    console.log("Good Morning");
}

// Question 3
var signal = prompt("What color is the signal now?")
if (signal == "red") {
    console.log("Must Stop");
}
else if (signal == "yellow") {
    console.log("Ready To Move");
} else if (signal == "green") {
    console.log("Move Now")
} else {
    console.log("Incorrect Signal")
}

// Question 4
var fuel = +prompt("Enter the current fuel in litres")
if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("Fuel level is okay");
}

// Question 5
// a
var a = 4;
if (++a === 5) { //  true (pre-increment: 4 → 5)
    console.log("given condition for variable a is true");
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) { //  false (post-increment: compare 82, then b → 83)
    console.log("given condition for variable b is true");
    alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) { //  false (compare 12, then c → 13)
    console.log("condition 1 is true");
    alert("condition 1 is true");
}
if (c === 13) { //  true
    console.log("condition 2 is true");
    alert("condition 2 is true");
}
if (++c < 14) { //  false (pre-increment: 13 → 14, compare 14 < 14)
    console.log("condition 3 is true");
    alert("condition 3 is true");
}
if (c === 14) { //  true
    console.log("condition 4 is true");
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { //  true
    console.log("The cost equals");
    alert("The cost equals");
}

// e
if (true) { //  always true
    console.log("True");
    alert("True");
}
if (false) { //  always false
    console.log("False");
    alert("False");
}

// f
if ("car" < "cat") { //  true ('r' < 't' in ASCII)
    console.log("car is smaller than cat");
    alert("car is smaller than cat");
}

// Question 6
var marks = +prompt("Enter Your Marks:");
var totalMarks = 300;
var percentage = (marks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Output
document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// Question 7
var secretNumber = 7;
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Try again!");
}

// Question 8
var num = +prompt("Enter a number:");
if (num % 3 === 0) {
    console.log(num + " is divisible by 3");
} else {
    console.log(num + " is not divisible by 3");
}

// Question 9
var num = +prompt("Enter a number:");
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// Question 10
var T = +prompt("Enter the temperature:");
if (T > 40) {
    console.log("It is too hot outside.");
} else if (T > 30) {
    console.log("The Weather today is Normal.");
} else if (T > 20) {
    console.log("Today’s Weather is cool.");
} else if (T > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("Please add valid temperature");
}

// Question 11
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
else {
    console.log("Invalid operation!");
}
if (result !== undefined) {
    console.log("Result: " + result);
}
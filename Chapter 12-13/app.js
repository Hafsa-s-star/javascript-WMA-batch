// ---------- Assignment 12-13 ----------
// Question 1
var char = prompt("Enter a single character:");
var code = char.charCodeAt(0);

if (code >= 48 && code <= 57) {
    console.log("Number");
} else if (code >= 65 && code <= 90) {
    console.log("Uppercase Letter");
} else if (code >= 97 && code <= 122) {
    console.log("Lowercase Letter");
} else {
    console.log("Other character");
}

// Question 2
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2) {
    console.log(num1 + " is larger");
} else if (num2 > num1) {
    console.log(num2 + " is larger");
} else {
    console.log("Both numbers are equal");
}

// Question 3
var num = +prompt("Enter a number:");

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// Question 4
var char = prompt("Enter a single character:");

if (char.length === 1) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Please enter exactly one character.");
}

// Question 5
var correctPassword = "Hafsa Bilal"; // a. Store correct password
var userPassword = prompt("Enter your password:"); // b. Ask user for password
// c. Validate
if (!userPassword) {
    console.log("Please enter your password"); // i. No input
} 
else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password"); // ii. Correct
} 
else {
    console.log("Incorrect password"); // Wrong password
}

// Question 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// Question 7
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
console.log("Invalid time entered!")
}
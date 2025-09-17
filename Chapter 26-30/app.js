// -------- Assignment 26-30 ---------
// Question 1
var num = +prompt("Enter a positive integer:");
if (num > 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
} else {
    alert("Please enter a positive number only!");
}

// Question 2
var num = +prompt("Enter a negative floating point number:");
if (num < 0) {
    document.write("Number: " + num + "<br>");
    document.write("Round off value: " + Math.round(num) + "<br>");
    document.write("Floor value: " + Math.floor(num) + "<br>");
    document.write("Ceil value: " + Math.ceil(num) + "<br>");
} else {
    alert("Please enter a negative floating point number only!");
}

// Question 3
var num = +prompt("Enter a number:");
document.write("Number: " + num + "<br>");
document.write("the Absolute value of  " + num + "is" + Math.abs(num) + "<br>");

// Question 4
var dice = Math.floor(Math.random() * 6) + 1;
document.write("random dice value: " + dice + "<br>");

// Question 5
var toss = Math.floor(Math.random() * 2);  // 0 or 1
if (toss === 0) {
    document.write("Random Coin Value: Heads" + "<br>");
} else {
    document.write("Random Coin Value: Tails" + "<br>");
}

// Question 6
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random Number between 1 and 100: " + randomNumber + "<br>");

// Question 7
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
document.write("The weight of user is " + weight + " kilograms" + "<br>");

// Question 8
var secretNumber = +prompt("Enter a number between 1-10")
var myNumber = 8
if (secretNumber === myNumber) {
    alert("Congratulations You Won!")
}else {
    alert("You Lost!")
}
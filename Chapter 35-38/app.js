// ------------- Assignment 35-38 -------------
// Question 1
function currentTime() {
    document.write(new Date() + "<br>")
}
currentTime();

// Question 2
function getName(firstName, lastName, fullName) {
    firstName = prompt("Enter your first name")
    lastName = prompt("Enter your last name")
    fullName = firstName + " " + lastName
    return fullName
}
var correctName = getName();
document.write("Welcome " + correctName + "<br>")

// Question 3
function getSum(num1, num2, num3) {
    num1 = Number(prompt("Enter number 1"))
    num2 = Number(prompt("Enter number 2"))
    num3 = num1 + num2

    return num3
}
var storedSum = getSum();
document.write(storedSum + "<br>")

// Question 4
function calculator(num1, num2, operator, result) {
    num1 = Number(prompt("Enter number 1"))
    num2 = Number(prompt("Enter number 2"))
    operator = prompt("Enter any operator")
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else {
        result = "Invalid operator";
    }
    return result
}
var finalResult = calculator();
document.write("Result: " + finalResult + "<br>");

// Question 5
function square(number, output) {
    number = prompt("Enter a Number")
    output = number * number
    return output
}
var finalOutput = square();
document.write(finalOutput)

// Question 6
function factorial() {
    var n = Number(prompt("Enter a Number"))
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result
}

var factorialOutput = factorial();
document.write(factorialOutput + "<br>")

// Question 7
function showCounting(start, end) {
    var start = Number(prompt("Enter starting number"))
    var end = Number(prompt("Enter ending number"))
    if (start > end) {
        console.log("Start should be less than or equal to end.");
        return
    } else if (isNaN(start) || isNaN(end)) {
        console.log("Please enter valid numbers.");
    }
    for (let i = start; i <= end; i++) {
        document.write(i);
    }
}
var counting = showCounting();

// Question 8
function calculateHypotenuse(base, prep) {
    function calculateSquare(x) {
        return x ** 2
    }
    var base = Number(prompt("Enter the base:"));
    var prep = Number(prompt("Enter the perpendicular:"));
    var hypSquare = calculateSquare(base) + calculateSquare(prep)
    return hypSquare
}
var hypotenuse = calculateHypotenuse()
document.write(hypotenuse)

// Question 9
function calculateArea(width, height) {
    return width * height;
}
var area1 = calculateArea(5, 10); // Direct values
document.write("Area (using values): " + area1);

var w = 7;
var h = 3;
var area2 = calculateArea(w, h); // Using variables
document.write("Area (using variables): " + area2);

// Question 10
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
document.write("Result: " + finalResult);

// Question 5

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
document.write(hypotenuse + "<br>")

// Question 9
function calculateArea(width, height) {
    return width * height;
}
var area1 = calculateArea(5, 10); // Direct values
document.write("Area (using values): " + area1 + " ");

var w = 7;
var h = 3;
var area2 = calculateArea(w, h); // Using variables
document.write("Area (using variables): " + area2 + " ");

// Question 10
function isPalindrome() {
    var userInput = prompt("Enter a word or phrase");
    var str = userInput.toLowerCase().replace(/\s/g, "");
    var reversed = str.split("").reverse().join("");
    if (str === reversed) {
        return userInput + " is a palindrome.";
    } else {
        return userInput + " is not a palindrome.";
    }
}
document.write(isPalindrome());

// Question 11
function capitalizeWords() {
    var sentence = prompt("Enter a sentence");
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

document.write(capitalizeWords());


// Question 12
function findLongestWord() {
    var sentence = prompt("Enter a sentence");
    var words = sentence.split(" ");
    var longestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
document.write("Longest word: " + findLongestWord());

// Question 13
function countLetter() {
    var str = prompt("Enter a string");
    var letter = prompt("Enter a letter to count");
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return "Occurrences of '" + letter + "': " + count;
}
document.write(countLetter());

// Question 14
function calcCircumference(r) {
    var c = 2 * 3.14 * r;
    document.write("The circumference is " + c + "<br>");
}

function calcArea(r) {
    var a = 3.14 * r * r;
    document.write("The area is " + a + "<br>");
}

var radius = prompt("Enter radius of circle");
calcCircumference(radius);
calcArea(radius);
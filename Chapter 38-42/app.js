//  ------------- Assignment 38-42 -------------
// Question 1
function power(a, b) {
    return a ** b;
}
var base = Number(prompt("Enter the base number:"));
var exponent = Number(prompt("Enter the exponent:"));
var result = power(base, exponent);
document.write(base + " raised to the power " + exponent + " is " + result.toFixed(2) + "<br><br>");

// Question 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
var year = Number(prompt("Enter any year:"));
if (isLeapYear(year)) {
    document.write(year + " is a leap year.<br><br>");
} else {
    document.write(year + " is not a leap year.<br><br>");
}

// Question 3
function findS(a, b, c) {
    return (a + b + c) / 2;
}

function findArea(a, b, c) {
    var S = findS(a, b, c);
    var area = (S * (S - a) * (S - b) * (S - c)) ** (1 / 2);
    return area;
}
var a = Number(prompt("Enter side a:"));
var b = Number(prompt("Enter side b:"));
var c = Number(prompt("Enter side c:"));
var area = findArea(a, b, c);
document.write("Area of triangle is " + area.toFixed(2) + "<br><br>");

// Question 4
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3, totalMarks) {
    var obtained = m1 + m2 + m3;
    return (obtained / totalMarks) * 100;
}

function mainFunction() {
    var m1 = Number(prompt("Enter marks of subject 1:"));
    var m2 = Number(prompt("Enter marks of subject 2:"));
    var m3 = Number(prompt("Enter marks of subject 3:"));
    var totalMarks = Number(prompt("Enter total marks of all 3 subjects:"));

    var avg = average(m1, m2, m3);
    var per = percentage(m1, m2, m3, totalMarks);

    document.write("Average marks: " + avg.toFixed(2) + "<br>");
    document.write("Percentage: " + per.toFixed(2) + "%<br><br>");
}

mainFunction();

// Question 5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

var text = prompt("Enter a string:");
var character = prompt("Enter a single character to find:");
var result = customIndexOf(text, character);

if (result !== -1) {
    document.write("Character '" + character + "' found at index " + result + "<br><br>");
} else {
    document.write("Character '" + character + "' not found in the string.<br><br>");
}

// Question 6
function deletingVowels(sentence) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i];
        var isVowel = false;

        for (var j = 0; j < vowels.length; j++) {
            if (ch === vowels[j]) {
                isVowel = true;
                break;
            }
        }
        if (!isVowel) {
            result += ch;
        }
    }

    return result;
}

var user = prompt("Enter a sentence:");
var vowelsDeleted = deletingVowels(user);
document.write("Sentence without vowels: " + vowelsDeleted + "<br><br>");

// Question 7
function countVowelPairs(text) {
    var res = "";
    var vowels = "aeiou";
    for (var i = 0; i < text.length - 1; i++) {
        var a = text[i].toLowerCase();
        var b = text[i + 1].toLowerCase();
        switch (true) {
            case (vowels.indexOf(a) !== -1 && vowels.indexOf(b) !== -1):
                res += a + b + " ";
        }
    }
    document.write("Such occurrences are: " + res + "<br><br>");
}

countVowelPairs(prompt("Enter a line of text:"));

 // Question 8
function meter(km) {
    return km * 1000;
}

function feet(km) {
    return km * 3280.84;
}

function inches(km) {
    return km * 39370.1;
}

function centimeter(km) {
    return km * 100000;
}

var km = Number(prompt("Enter distance between two cities (in km):"));


if (isNaN(km)) {
    document.write("Please enter a valid number for kilometers.");
} else {
    document.write("Distance in meters: " + meter(km).toFixed(2) + "<br>");
    document.write("Distance in feet: " + feet(km).toFixed(2) + "<br>");
    document.write("Distance in inches: " + inches(km).toFixed(2) + "<br>");
    document.write("Distance in centimeters: " + centimeter(km).toFixed(2) + "<br><br>");
}

// Question 9
function calculateOvertime(hoursWorked) {
    var overtimeRate = 12;
    var overtimeHours = 0;
    var overtimePay = 0;

    if (hoursWorked > 40) {
        overtimeHours = hoursWorked - 40;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}

var hours = Number(prompt("Enter total hours worked:"));
var pay = calculateOvertime(hours);

if (pay > 0) {
    document.write("Overtime pay is Rs. " + pay.toFixed(2) + "<br><br>");
} else {
    document.write("No overtime pay. Worked " + hours + " hours only.<br><br>");
}

// Question 10
function calculateNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    var remaining = amount % 100;

    var fifties = Math.floor(remaining / 50);
    remaining = remaining % 50;

    var tens = Math.floor(remaining / 10);

    document.write("You have " + hundreds.toFixed(0) + " hundred notes.<br>");
    document.write(fifties.toFixed(0) + " fifty notes.<br>");
    document.write(tens.toFixed(0) + " ten notes.<br>");
}

var amount = Number(prompt("Enter amount to withdraw:"));
calculateNotes(amount);

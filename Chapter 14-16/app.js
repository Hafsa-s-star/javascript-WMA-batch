// ----------- Assignment 14-16 ----------
// Question 1
var studentNames = [];

// Question 2
var familyMembers = ["Bilal", "Komal", "Mubeen", "Hamdan"]

// Question 3
var age = [42, 35, 12, 6]

// Question 4
var boolean = [true, false]

// Question 5
var mixArray = ["Hafsa", 13, true]

// Question 6
var qualificationsPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("<h2>Qualifications:</h2>");
for (var i = 0; i < qualificationsPakistan.length; i++) {
    document.write((i + 1) + ") " + qualificationsPakistan[i] + "<br>");
}

// Question 7
var studentNames = ["Ayesha", "Iqra", "Marium"];
var studentScores = [400, 350, 450];
var totalMarks = 500;
document.write("<h2>Students Percentages</h2>")
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>" + "<br>");
}

// Question 8
document.write("<h2>Colors Name</h2>")
var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.write("Initial colors: " + colors + "<br>" + "<br>");

var addStart = prompt("Enter a color to add to the beginning:");
colors.unshift(addStart);
document.write("After adding at beginning: " + colors + "<br>"  + "<br>");

var addEnd = prompt("Enter a color to add to the end:");
colors.push(addEnd);
document.write("After adding at end: " + colors + "<br>" + "<br>");

colors.unshift("Purple", "Pink");
document.write("After adding two colors at beginning: " + colors + "<br>" + "<br>");

colors.shift();
document.write("After deleting first color: " + colors + "<br>" + "<br>");

colors.pop();
document.write("After deleting last color: " + colors + "<br>" + "<br>");

var indexAdd = +prompt("At which index do you want to add a color?");
var colorAdd = prompt("Enter the color name to add:");
colors.splice(indexAdd, 0, colorAdd);
document.write("After adding color at index " + indexAdd + ": " + colors + "<br>" + "<br>");

var indexDelete = +prompt("At which index do you want to delete color(s)?");
var deleteCount = +prompt("How many colors do you want to delete?");
colors.splice(indexDelete, deleteCount);
document.write("After deleting " + deleteCount + " colors from index " + indexDelete + ": " + colors + "<br>" + "<br>");

// Question 9
document.write("<h2>Students Scores</h2>")
var scores = [320, 230, 480, 120];
document.write("Scores of Students: " + scores + "<br>" + "<br>");

scores.sort(function(a, b) {
    return a - b;
});

document.write("Ordered Scores of Students: " + scores);

// Question 10
document.write("<h2>City Names</h2>")
var cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities List:" + "<br>")
document.write(cityNames)
var selectedCities = cityNames.slice(2,4);
document.write("<h2>Selected Cities:</h2>")
document.write(selectedCities)

// Question 11
document.write("<h2>String Operation</h2>")
var arr = ["This", " is", " my", " cat"];
document.write("Array: " + arr + "<br>");

var singleString = arr.join("");
document.write("String: " + singleString);

// Question 12
document.write("<h2>Devices</h2>")
var queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");
document.write("Devices:<br>" + queue + "<br><br>");
document.write("Out: " + queue.shift() + "<br>");
document.write("Out: " + queue.shift() + "<br>");
document.write("Out: " + queue.shift() + "<br>");
document.write("Out: " + queue.shift() + "<br>");

// Question 13
document.write("<h2>Devices</h2>")
var stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");
document.write("Devices:<br>" + stack + "<br><br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");

// Question 14
document.write("<h2>Phone Manufacturers</h2>")
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
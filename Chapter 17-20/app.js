// ----------- Assignment 17-20 ------------
// Question 1
var emptyArray = [[], [], [], []]

// Question 2
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write("Matrix: <br>");
for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ")+"<br>");
}

// Question 3
document.write("<h2>Numeric</h2>")
 for (var i = 1; i <= 10; i++) {
   document.write(i + "<br>");
 }

// Question 4
document.write("<h2>Table</h2>" + "<br>")
var multipicationTable = +prompt("Enter a number to show its multipication table") 
var lengthTable = +prompt("Enter length of multipication table")
document.write("Multipication Table of " + multipicationTable + "<br>")
document.write("length: " + lengthTable + "<br>")
for (var i = 1; i <= lengthTable; i++) {
     document.write(multipicationTable + " x " + i + " = " + (multipicationTable * i) + "<br>");
}

// Question 5
var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"]
for (var i = 0; i < fruits.length; i++){
     document.write(fruits[i] + "<br>")
}
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i  + "is " + fruits[i]  + "<br>")
}

// Question 6
 document.write("<h2>Counting</h2>");

for (var i = 1; i <= 15; i++) {
    document.write(i);
    if (i < 15) {
        document.write(", ");
    }
}

document.write("<h2>Reverse Counting</h2>");

for (var i = 15; i >= 1; i--) {
    document.write(i);
    if (i > 1) {
        document.write(", ");
    }
}

document.write("<h2>Even Numbers</h2>");

for (var i = 2; i <= 20; i += 2) {
    document.write(i);
    if (i < 20) {
        document.write(", ");
    }
}

document.write("<h2>Odd Numbers</h2>");

for (var i = 1; i <= 19; i += 2) {
    document.write(i);
    if (i < 19) {
        document.write(", ");
    }
}

document.write("<h2>Series</h2>");

for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k");
    if (i < 20) {
        document.write(", ");
    }
}

// Question 7
var bakery = ["cake" , "apple pie" , "cookies" , "chips" , "patties"]
var userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?")
userInput = userInput.toLowerCase()
var found = false;  

for (var i = 0; i < bakery.length; i++) {
    if (bakery[i] === userInput) {
        console.log(userInput + " is available at index " + i + " in our bakery.");
        found = true;
        break;  
    }
}

if (found === false){
    console.log("We are sorry, " + userInput + " is not available in our bakery.");
}

// Question 8
var numberLargest = [24, 53, 78, 91, 12];
var max = numberLargest[0]

for(var i=0; i< numberLargest.length; i++){
    if(numberLargest[i] > max){
        max = numberLargest[i]
    }
}
console.log("Largest number is: " + max);

// Question 9
var numberSmallest = [24, 53, 78, 91, 12];
var min = numberSmallest[0]

for(var i=0; i< numberSmallest.length; i++){
    if(numberSmallest[i] < min){
        min = numberSmallest[i]
    }
}
console.log("Smallest number is: " + min);

// Question 10
 document.write("<h2>Multiples of 5 (1 to 100)</h2>");

for (var i = 5; i <= 100; i += 5) {
    document.write(i);
    if (i < 100) {   // to avoid comma after last number
        document.write(", ");
    }
}

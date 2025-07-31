// ---------Assignment 1 (Alerts) ---------
// Question 1
alert("Welcome To JS learning")

// Question 2
alert("Error! please enter a valid password.")

// Question 3
alert("Welcome to JS Land... \n Happy Coding!")

// Question 4
alert("Welcome to JS Land...")

// Question 5 is in Console

// Question 6 is in HTML file


// ---------Assignment 2 (Variables for Strings)---------
// Ouestion 1
var userName =
    alert(userName);

// Question 2
var myName = "Hafsa Bilal"
alert(myName);

// Question 3
var message = "Hello World";
alert(message);

// Question 4
var studentName = "Hafsa";
var age = "14 year old";
var course = "Mobile Web and App Development";
alert(studentName);
alert(age);
alert(course);

// Question 5
var food = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(food);

// Question 6
var email = "My Email Address is ";
var emailAddress = "pakistan.hafsa@gmail.com";
alert(email + emailAddress)

// Question 7
var bookDescription = "I am trying to learn form the Book  "
var book = "A Smarter Way to Learn Javascript";
alert(bookDescription + book);

// Question 8
document.write("<br>");
document.write("Yah! I can write HTML content through JavaScript");

// Question 9
var end = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(end);


// ---------Assignment 3 (Variables for Numbers)---------
// Question 1
var myAge = "I am 13 years";

// Question 2
var numberOfVisitingSites = "You have visited this site 14 times";

// Question 3
var birthYear = 2010;
document.write("<br>");
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

// Question 4
var visitorName = "John Doe";
var productTitle = "T-Shirt(s)";
var quantity = "5";
document.write("<br>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing Store.");


// ---------Assignment 4 (Variables Names Legal and Illegal)---------
// Question 1:  
var name, age, country;

// Question 2 
// Legal variable names
var myName;
var _user;
var $price;
var student123;
var user_name;

// Illegal variable names  (Cannot be used) 
// var 123name;       // cannot start with a number
// var my-name;       // hyphens are not allowed
// var var;           // reserved word
// var user name;     // spaces not allowed
// var alert;         // reserved word

// Question 3:  
document.write("<h2>Rules for naming JS variables</h2>");
document.write("<br>");
document.write("Variable names can only contain letters, numbers, $, and _. <br>For example: <strong>$my_1stVariable</strong>");
document.write("<br>");
document.write("Variables must begin with a letter, $, or _. <br>For example: <strong>$name, _name or name</strong>");
document.write("<br>");
document.write("Variable names are case <strong>sensitive</strong>.");
document.write("<br>");
document.write("Variable names should not be JS <strong>keywords</strong>.");


//   ---------Assignment 5 (Math Expressions)---------
// Question 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<h2>Mathmatic Calculations</h2>")
document.write(" Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Question 2
// Subtraction
var subtract = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is: " + subtract + "<br>");

// Multiplication
var multiply = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is: " + multiply + "<br>");

// Division
var divide = num1 / num2;
document.write("Division of " + num1 + " by " + num2 + " is: " + divide + "<br>");

// Modulus
var modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is: " + modulus + "<br>");

// Question 3
document.write("<h2>JS Mathematic Expressions</h2>")
// a.  
var number;

// b.  
document.write("Value after variable declaration is: " + number + "<br>");

// c.  
number = 5;

// d.  
document.write("Initial value: " + number + "<br>");

// e.  
number++;

// f.  
document.write("Value after increment is: " + number + "<br>");

// g.  
number += 7;

// h.  
document.write("Value after addition is: " + number + "<br>");

// i.  
number--;

// j.  
document.write("Value after decrement is: " + number + "<br>");

// k. 
var remainder = number % 3;

// l.  
document.write("The remainder is: " + remainder + "<br>");

//   Question 4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR")

//   Question 5
var number = 4;
document.write("<h2>Table of 4</h2>")
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

//   Question 6
document.write("<h2>Conversion Of Celsius And Fahrenheit</h2>")
// a. 
var celsius = 25;

// b.  
var fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

// c.  
var fahrenheit = 71;

// d.  
var celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");

//   Question 7
// a.  
var priceItem1 = 650;

// b.  
var priceItem2 = 100;

// c.  
var quantityItem1 = 3;

// d.  
var quantityItem2 = 7;

// e.  
var shippingCharges = 100;

// Calculate total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + " PKR<br><br>");
document.write("<strong>Total cost of your order is " + totalCost + " PKR</strong>");

//   Question 8
document.write("<h2>Marks Sheet</h2>")
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%")

//  Question 9
document.write("<h2>Currency in PKR</h2>")
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR: " + totalPKR);

//  Question 10
document.write("<h2>Arithmetic Operation</h2>")
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("Initial number: " + number + "<br>");
document.write("Result after calculation: " + result);

//   Question 11
document.write("<h2>Age Calculator</h2>")
// a.  
var currentYear = 2016;
document.write("Current Year: " + currentYear + "<br>")

// b. 
var birthYear = 1992;
document.write("Birth Year: " + birthYear + "<br>")

// c.  
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("Your Age is " + age1 + "<br>");

//   Question 12
document.write("<h2>The Geometrizer</h2>")
// a.  
var radius = 20;
var pi = 3.142;

// b.  
var circumference = 2 * pi * radius;
document.write("Radius of a Circle is " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");

// c.  
var area = pi * radius * radius;
document.write("The area is " + area);

//   Question 13 
document.write("<h2>The LifeTime Supply Calculator</h2>")
// a.  
var favoriteSnack = "Chocolate Chip Cookies";
document.write("Favourite Snack : Chocolate Chip" + "<br>")

// b.  
var currentAge = 15;
document.write("Current Age: 15" + "<br>")

// c.  
var maxAge = 65;
document.write("Estimated Maximum Age : 65" + "<br>")

// d.  
var amountPerDay = 3;
document.write("Amount of snacks per day : 3" + "<br>")

// e.  
var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amountPerDay;

// Output the result
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
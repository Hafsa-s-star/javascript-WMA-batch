 // --------- Assignment 1 ---------

// Question 1
document.write("<h2>Question 1</h2>");

var num = 10;
document.write("<h2>Result</h2>");
document.write("The value of a is " + num + "<br>");
document.write("...................................." + "<br>");

// ++a  
document.write("The value of ++a is " + (++num) + "<br>");
document.write("Now the value of a is " + num + "<br><br>");

// a++  
document.write("The value of a++ is " + (num++) + "<br>");
document.write("Now the value of a is " + num + "<br><br>");

// --a  
document.write("The value of --a is " + (--num) + "<br>");
document.write("Now the value of a is " + num + "<br><br>");

// a--  
document.write("The value of a-- is " + (num--) + "<br>");
document.write("Now the value of a is " + num + "<br>");

// Question 2
 document.write("<h2>Question 2</h2>");

  var a = 2, b = 1;
  document.write("Initial values:<br>");
  document.write("a = " + a + "<br>");
  document.write("b = " + b + "<br><br>");

  var result = --a - --b + ++b + b--;

  document.write("Step-by-step Explanation:<br><br>");

  // Step 1: --a
  a = 2;
  b = 1;
  document.write("--a => a becomes " + (--a) + "<br>"); // a = 1

  // Step 2: --b
  document.write("--b => b becomes " + (--b) + "<br>"); // b = 0

  // Step 3: ++b
  document.write("++b => b becomes " + (++b) + "<br>"); // b = 1

  // Step 4: b--
  document.write("b-- => value used = " + (b--) + ", then b becomes " + b + "<br><br>"); // use 1, then b = 0

  // Final values
  document.write("Final values:<br>");
  document.write("a = " + a + "<br>");
  document.write("b = " + b + "<br>");
  document.write("result = " + result + "<br>");

//   Question 3
document.write("<h2>Question 3</h2>")
var userName = prompt("Enter your name:");
document.write("Hello, " + userName + "!");

// Question 4
document.write("<h2>Question 4</h2>")
 var number = +prompt("Enter a number to display its multiplication table:") || 5;
 document.write("<h2>Multiplication Table of " + number + "</h2>");

  document.write(number + " x 1 = " + (number * 1) + "<br>");
  document.write(number + " x 2 = " + (number * 2) + "<br>");
  document.write(number + " x 3 = " + (number * 3) + "<br>");
  document.write(number + " x 4 = " + (number * 4) + "<br>");
  document.write(number + " x 5 = " + (number * 5) + "<br>");
  document.write(number + " x 6 = " + (number * 6) + "<br>");
  document.write(number + " x 7 = " + (number * 7) + "<br>");
  document.write(number + " x 8 = " + (number * 8) + "<br>");
  document.write(number + " x 9 = " + (number * 9) + "<br>");
  document.write(number + " x 10 = " + (number * 10) + "<br>");

// Question 5
document.write("<h2>Question 5</h2>")
 // Step a: Take subject names
  var subject1 = prompt("Enter name of Subject 1:");
  var subject2 = prompt("Enter name of Subject 2:");
  var subject3 = prompt("Enter name of Subject 3:");

  // Step b: Total marks for each subject
  var totalMarksPerSubject = 100;

  // Step c & d: Take obtained marks
  var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
  var marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
  var marks3 = +prompt("Enter obtained marks for " + subject3 + ":");

  // Step e: Calculations
  var totalMarks = totalMarksPerSubject * 3;
  var obtainedMarks = marks1 + marks2 + marks3;
  var percentage = (obtainedMarks / totalMarks) * 100;

  // Display result using a table
  document.write("<h2>Student Marksheet</h2>");
  document.write("<table border='1' cellpadding='10'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
  document.write("<tr><th colspan='2'>Total</th><th>" + obtainedMarks + "</th></tr>");
  document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");
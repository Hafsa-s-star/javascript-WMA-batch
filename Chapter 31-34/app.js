// ------------- Assignment 31-34 ------------
// Question 1
var todayDate = new Date();
document.write(todayDate + "<br>");

// Question 2
var monthNow = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonthIndex = monthNow.getMonth();
var currentMonth = months[currentMonthIndex];
document.write("Current Month: " + currentMonth + "<br>");

// Question 3
var dayNow = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDayIndex = dayNow.getDay();
var currentDay = days[currentDayIndex];
document.write("Today is " + currentDay + "<br>");

// Question 4
var today = new Date();
var day = today.getDay();

if (day === 0 || day === 6) {
    document.write("It's Fun day" + "<br>");
} else {
    document.write("It's not Fun day" + "<br>");
}

// Question 5
var now = new Date();
var dayOfMonth = today.getDate();

if (dayOfMonth < 16) {
    document.write("First fifteen days of the month") + "<br>";
} else {
    document.write("Last days of the month" + "<br>");
}

// Question 6
var forever = new Date();
document.write(forever + "<br>")
var millisecondsSinceEpoch = forever.getTime();
document.write("Elapsed milliseconds since January 1, 1970: " + millisecondsSinceEpoch + "<br>")
minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
document.write("Elapsed minutes since January 1, 1970: " + minutesSinceEpoch + "<br>");

// Question 7
var justNow = new Date();
var hours = now.getHours();
if (hours < 12) {
    document.write("Its AM" + "<br>");
} else {
    document.write("Its PM" + "<br>");
}

// Question 8
var laterDate = new Date(2020, 11, 31);
document.write("Later Date: " + laterDate + "<br>");

// Question 9
var ramadanStart = new Date(2015, 5, 18);
var today = new Date();
var diffInMs = today - ramadanStart;
var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
document.write(diffInDays + " days have passed since 1st Ramadan, 2015" + "<br>");

// Question 10
var referenceDate = new Date(1970, 0, 1);
document.write("On Reference date " + referenceDate + "<br>")
var start2015 = new Date(2015, 0, 1);
var diffInMs = start2015 - referenceDate;
var diffInSeconds = diffInMs / 1000;
document.write(diffInSeconds + " seconds had passed since beginning of 2015" + "<br>");

// Question 11
var currentDate = new Date();
document.write("current date: " + currentDate + "<br>")
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("1 hour ago, " + currentDate + "<br>");

// Question 12
var currentDate = new Date();
document.write("Current Date: " + currentDate + "<br>")
var currentYear = currentDate.getFullYear();
currentDate.setFullYear(currentYear - 100);
document.write("100 years back ," + currentDate.toString() + "<br>");

// Question 13
var userAge = prompt("Enter your age:");
userAge = parseInt(userAge);
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
document.write("Your age is: " + userAge + "<br>");
document.write("Your birth year is: " + birthYear) + "<br>";

// Question 14
document.write("<h1>K-Electric Bill</h1>");
var customerName = "ABC Customer";
var today = new Date();
var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var currentMonth = months[today.getMonth()];
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + currentMonth + "</b><br>");
document.write("Number of units: <b>" + numberOfUnits + "</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
document.write("Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>");
document.write("Late payment surcharge: <b>" + latePaymentSurcharge + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmountPayable + "</b>");

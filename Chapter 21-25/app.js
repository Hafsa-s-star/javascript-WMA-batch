// --------------- Assignment 21-25 ------------------
// Question 1
var firstName = prompt("Enter Your First Name")
var lastName = prompt("Enter Your Last Name")
var fullName = firstName + " " + lastName
alert("Welcome " + fullName + "!")

// Question 2
var phoneModel = prompt("Enter Your Favourite Mobile Model")
document.write("My Favourite phone is: " + phoneModel + "<br>")
document.write("Length of string: " + phoneModel.length + "<br>");

// Question 3
var nationality = "Pakistani"
document.write("String: " + nationality + "<br>")
document.write("Index of 'n':  " + nationality.indexOf('n') + '<br>')

// Question 4
var word = "Hello World"
document.write("String: " + word + "<br>")
document.write("Index of 'l':  " + word.lastIndexOf('l') + '<br>')

// Question 5
var country = "Pakistani"
document.write("String: " + country + "<br>")
document.write("Character at index 3:  " + country.charAt('3') + '<br>')

// Question 6
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName.concat(" ", lastName);
alert("Welcome " + fullName);

// Question 7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>");

// Question 8
var message = "Ali and Sami are best friends. They play cricket and football together."
var newMessage = message.replace(/and/g, "&");
document.write(newMessage + "<br>")

// Question 9
var str = "472";
document.write("Value: " + str + "<br>")
document.write("Type: " + typeof str + "<br>")
var num = Number(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");

// Question 10
var userInput = prompt("Enter any random word")
document.write("User Input: " + userInput + "<br>")
document.write("Upper Case" + userInput.toUpperCase() + "<br>")

// Question 11
var user = prompt("Enter any word");
var titleCase = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
document.write("User Input: " + user + "<br>");
document.write("Title Case: " + titleCase + "<br>");

// Question 12
var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + result + "<br>");

// Question 13
var username = prompt("Enter your username");
var isValid = true;
for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}
if (isValid) {
    document.write("Valid Username: " + username + "<br>");
} else {
    alert("Please enter a valid username without @ . , !");
}

// Question 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userOrder = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var order = userOrder.toLowerCase();
if (A.indexOf(order) !== -1) {
    alert(userOrder + " is available at index " + A.indexOf(order) + " in our bakery.");
} else {
    alert("We are sorry. " + userOrder + " is not available in our bakery.");
}

// Question 15
var password = prompt("Enter your password:");
var hasAlphabet = false;
var hasNumber = false;
if (password.length >= 6) {
    var firstChar = password.charCodeAt(0);
    if (!(firstChar >= 48 && firstChar <= 57)) {
        for (var i = 0; i < password.length; i++) {
            var code = password.charCodeAt(i);
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                hasAlphabet = true;
            }
            if (code >= 48 && code <= 57) {
                hasNumber = true;
            }
        }
        if (hasAlphabet && hasNumber) {
            document.write("Valid Password: " + password);
        } else {
            alert("Invalid password! Must contain both letters and numbers.");
        }
    } else {
        alert("Invalid password! It should not start with a number.");
    }
} else {
    alert("Invalid password! It must be at least 6 characters long.");
}

// Question 16
var university = "University of Karachi";
var newUniversity = university.split("");
for (var i = 0; i < newUniversity.length; i++) {
    document.write(newUniversity[i] + "<br>");
}

// Question 17
var userWord = "Pakistan"
var lastChar = userWord.charAt(userWord.length - 1);
document.write("User Input: " + userWord + "<br>");
document.write("Last Character of input: " + lastChar + "<br>");

// Question 18
var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();
var words = lowerText.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");
//  -------------- Assignment 49-52 ----------------
//  Question 1
function submitForm() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var country = document.getElementById('country').value;
    var comments = document.getElementById('comments').value;

    // Gender
    var genderList = document.getElementsByName('gender');
    var gender = "";
    for (var i = 0; i < genderList.length; i++) {
        if (genderList[i].checked) {
            gender = genderList[i].value;
        }
    }


    var result = "Name: " + fName + " " + lName + "<br>" +
        "Email: " + email + "<br>" +
        "Password: " + password + "<br>" +
        "Gender: " + gender + "<br>" +
        "Country: " + country + "<br>" +
        "Comments: " + comments;

    document.getElementById('result').innerHTML = result;


    document.getElementById('fName').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('country').value = "";
    document.getElementById('comments').value = "";
    for (var i = 0; i < genderList.length; i++) {
        genderList[i].checked = false;
    }
}

// Question 2
function expandText() {
    var shortText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    var text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda totam sunt ea eligendi explicabo quibusdam voluptatum repudiandae facere blanditiis quisquam. Tempora asperiores consequatur, ipsam nulla suscipit dolore. Nulla, soluta neque."
    var para = document.getElementById("para")
    var link = document.getElementById("link")

    if (link.innerHTML === "See more") {
        link.innerHTML = "See less"
        para.innerHTML = text
    } else {
        link.innerHTML = "See more"
        para.innerHTML = shortText
    }
    // para.innerHTML = text
}

// Question 3
   
      var editRow = null;

    function addStudent() {
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var grade = document.getElementById("grade").value;

      if (name === "" || age === "" || grade === "") {
        alert("Please fill all fields!");
        return;
      }

      if (editRow == null) {
        var table = document.getElementById("studentTable");
        var newRow = table.insertRow();

        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = age;
        newRow.insertCell(2).innerHTML = grade;
        newRow.insertCell(3).innerHTML =
          "<button onclick='editStudent(this)'>Edit</button> " +
          "<button onclick='deleteStudent(this)'>Delete</button>";
      } else {
        editRow.cells[0].innerHTML = name;
        editRow.cells[1].innerHTML = age;
        editRow.cells[2].innerHTML = grade;
        editRow = null;
      }

      // clear inputs
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("grade").value = "";
    }

    function deleteStudent(btn) {
      var row = btn.parentNode.parentNode;
      row.remove();
    }

    function editStudent(btn) {
      editRow = btn.remove();
      document.getElementById("name").value = editRow.cells[0].innerHTML;
      document.getElementById("age").value = editRow.cells[1].innerHTML;
      document.getElementById("grade").value = editRow.cells[2].innerHTML;
    }
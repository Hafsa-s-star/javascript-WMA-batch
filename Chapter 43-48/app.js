// ----------------------- Assignment 43-48 -------------------------
// Question 1
// _____In html file_____

// Question 2
function showAlert(mobileName) {
      alert("You clicked on " + mobileName);
    }

// Question 3
function deleteRow(btn) {
      btn.closest("tr").remove();
    }

// Question 4
 function changeImage() {
      document.getElementById("mobileImg").src =
        "https://m.media-amazon.com/images/I/81CgtwSII3L._SL1500_.jpg";
    }

    function resetImage() {
      document.getElementById("mobileImg").src =
        "https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg";
    }

// Question 5
 var count = 0;

    function increase() {
      count++;
      document.getElementById("counterValue").innerText = count;
    }

    function decrease() {
      count--;
      document.getElementById("counterValue").innerText = count;
    }
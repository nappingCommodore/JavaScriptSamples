var x = localStorage.getItem("x");

window.onload = function() {  
  var element = document.getElementById("result");
  element.innerHTML = element.innerHTML + localStorage.getItem("x");
};

function validateForm() {
  x = document.forms["myForm"]["fname"].value;
  window.x = x;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  localStorage.setItem("x", x);
}

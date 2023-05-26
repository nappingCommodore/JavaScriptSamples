var boxColor = "blue";

function makeBoxRed() {
    var element = document.querySelector("#box");
    element.style.backgroundColor = "red";
    boxColor = "red";
}

function makeBoxBlue() {
    var element = document.querySelector("#box");
    element.style.backgroundColor = "blue";
    boxColor = "blue";
}

window.onload = function() {
    const heading = window.document.createElement("h1");
    const textNode = window.document.createTextNode("Hello World!");
    heading.appendChild(textNode);
}

function clickListener() {
    if(boxColor == "blue") {
        var element = document.getElementById("colorButton");
        element.innerHTML = "Make Box Blue";
        makeBoxRed();
    } else {
        var element = document.getElementById("colorButton");
        element.innerHTML = "Make Box Red";
        makeBoxBlue();
    }
}

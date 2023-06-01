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
    const textNode = window.document.createTextNode("Hello World!  " + (new Date()).getSeconds());
    heading.appendChild(textNode);
    // window.document.body.appendChild(heading);

    const pelement = window.document.createElement("p");
    const textNodep = window.document.createTextNode("This is a paragraph");
    pelement.appendChild(textNodep)
    heading.appendChild(pelement);
    window.document.body.appendChild(heading);
    var element = document.getElementsByTagName("body");
    console.log(element);

    var element = document.getElementById("colorButton2");
    element.addEventListener("click", clickListener2);
    console.log(window);

    var id = setTimeout(alertSomething, 3000);
    clearTimeout(id);

    var id1 =setInterval(alertSomething, 3000);
    clearInterval(id1);
    // print();
}

var mouseover = function() {
    alert("mouse over");
}

function alertSomething() {
    alert("Hello World!");
}

function clickListener() {
    if(boxColor == "blue") {
        var element = document.getElementById("colorButton");
        element.innerHTML = "Make Box Blue";
        console.log(element.attributes[0].nodeName)
        makeBoxRed();
    } else {
        var element = document.getElementById("colorButton");
        element.innerHTML = "Make Box Red";
        makeBoxBlue();
    }
}

function clickListener2() {
    alert("Button is clicked!");
    var element = document.getElementById("colorButton2");
    element.style.width = "200px";
    element.style.height = "200px";
    element.style.backgroundColor = "green";
}

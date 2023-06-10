"use strict"

function moveButton() {
    var arr = ["You can't click me!", "You can't catch me!", "haha, catch me if you can!"]
    var colorOptions = ["red", "green", "brown", "blue"]
    var button = document.getElementById('button1');
    button.style.position = 'absolute';
    button.style.left = Math.random() * 1000 + 'px';
    button.style.top = Math.random() * 400 + 'px';
    button.innerText = arr[Math.floor(Math.random() * arr.length)];
    button.style.backgroundColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
}


function triggerAlert() {
    var button2 = document.getElementById("button2");
    button2.style.borderColor = "red";
    button2.innerText = "HaHa, Gotcha!! I am the most annoying button";

    var id1 = setInterval(alertMsg, 3000);
    localStorage.setItem("intervalId", id1);
    var button3 = document.getElementById("button3");
    button3.style.display = "block";
    button3.innerText = "Click me to answer that annoying button, I will make it stop.";
    // checkbox.innerHTML = "<p>Click me to answer that annoying button, I will make it stop.</p>";
}

function alertMsg() {
    var msgs = ["haha, I am more annoying then button1", "I am the most annoying button", "I will annoy you forever"]
    alert(msgs[Math.floor(Math.random() * msgs.length)]);
}

function clearIntervalButtonClick() {
    var button3 = document.getElementById("button3");
    button3.innerText = "Answered that annoying button, it won't disturb you anymore";
    var id1 = localStorage.getItem("intervalId");
    console.log(id1)
    clearInterval(id1);
}

function clearValue() {
    var input = document.getElementById("input1");
    sessionStorage.setItem("inputValue", input.value);
    input.value = "";
}

function fillValue() {
    var input = document.getElementById("input1");
    input.value = sessionStorage.getItem("inputValue");
}

function updateValue() {
    var input = document.getElementById("input1");
    sessionStorage.setItem("inputValue", input.value);
}

function clearValuediv4() {
    var input = document.getElementById("input2");
    input.value = "";
}

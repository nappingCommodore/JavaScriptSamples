function callbackFunctionTest(callback) {
    console.log("I am going to call a callback function");
    callback();
}

function callbackFunction() {
    console.log("I am a callback function");
}

callbackFunctionTest(callbackFunction);

setTimeout(function() {
    console.log('I am an anonymous function, I waited 2 seconds');
}, 2000);

setTimeout(() => {
    console.log('I am an arrow function, I waited 3 seconds');
}, 3000);

function normalFunction() {
    console.log('I am a normal function, being passed as callback to another function and waited 4 seconds');
}

setTimeout(normalFunction, 4000);

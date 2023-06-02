function parentFunction() {
    console.log("I am the parent function");
    function firstChildFunction() {
        console.log("I am the first child function");
        function secondChildFunction() {
            console.log("I am the second child function");
        }
        secondChildFunction();
    }
    firstChildFunction();
}

parentFunction();

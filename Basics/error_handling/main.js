
function errorHandling() {
    try {
        throw new Error('This is a custom error');
    } catch (error) {
        console.log(error);
    } finally {
        console.log('This is the finally block');
    }
}

function divideByZeroError() {
    try {
        var a = 10;
        var b = 0;
        if(b == 0) {
            throw new Error('Divide by zero error');
        }
        var c = a/b;
        console.log("c is " + c);
    }
    catch(error) {
        console.log(error);
    }
}


errorHandling();

// divideByZeroError();


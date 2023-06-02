function resMultiplication(a, b) {
    res = a+b;
    return function() {
        return res * a * b;
    }
}

var resVal = resMultiplication(2, 3);
console.log(resVal());


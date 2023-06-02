var add1 = (a,b) => {
    return a + b;
}

var add2 = (a,b) => a + b;

function add3(a,b) {
    return a + b;
}

var add4 = function(a,b) {
    return a + b;
}

console.log("Arrow Function : " + add1(2,3));
console.log("Arrow Function without return statement : " + add2(2,3));
console.log("Normal Function : " + add3(2,3));
console.log("Normal Function with var syntax : " + add4(2,3));

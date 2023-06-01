let name1 = "ABCD";
name1 = 25;


var age = 25;
age = "DEFG"


// const NAME_OF_A_COUNTRY = "INDIA";

// NAME_OF_A_COUNTRY = "INDIA1";

var arr = [1,2];
arr.push(3);

arr.push("ABCDE");

// console.log(arr.indexOf(2));
// console.log(arr.indexOf("ABCDEF"));

// console.log(arr.join());

// arr.splice(0, 2, 5);

// arr.shift();
// arr.shift();

// console.log(arr);

arr.unshift(6, 7, 8, 9, 10);
// console.log(typeof arr)

// var a = 1;
// var b = 2;
// var d = "3";

// var c = a + b + d;

// console.log(arr);

console.log(2 === "2");

function foo(a, b, c) {
    if(!isNaN(a + b + c )) {
        console.log( a + b + c + "Hello World!");
    }
    console.log( "Hello World!");
    var abcd = 1234;
    var cdef = "dffsfsfs";
    return {
        "abcd": abcd,"cdef": cdef
    }
}

var json = foo(1,2,3);
console.log(json.abcd);
console.log(json.cdef);

// console.log(foo(1,2, 3));

var str = "abcdEfghij";
console.log(str.replace("cE", "g"));
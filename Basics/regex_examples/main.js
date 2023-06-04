let pattern = /xyz/;
let mailPattern = /[a-z]+@[a-z]+\.[a-z]+/;
let pattern2 = new RegExp('xyz');

let multiPattern = (/xyz & test/);

let mail = "abc@gmail.com"
let mail1 = "@gmail.com"
let value = 'This is test xyz a test.';

console.log(value.match(multiPattern));

// let result = value.match(pattern);
// let result2 = value.match(pattern2);

// console.log(result);
// console.log(pattern.test(value));

// console.log(result2);
// console.log(pattern2.test(value));

// console.log(value.replace(pattern, 'just'));
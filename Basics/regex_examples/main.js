let pattern = /xyz/;
let pattern2 = new RegExp('xyz');

let value = 'This is xyz a test.';

let result = value.match(pattern);
let result2 = value.match(pattern2);

console.log(result);
console.log(pattern.test(value));

console.log(result2);
console.log(pattern2.test(value));

console.log(value.replace(pattern, 'just'));
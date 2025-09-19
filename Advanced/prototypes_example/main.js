"use strict";
var undefinedVariable = "XYZ";
console.log(undefinedVariable);

function employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Prototype property of the obj is empty right now
console.log(employee.prototype);

// Adding a method to the prototype property of the obj
employee.prototype.fullName = function fullName() {
    return this.firstName + " " + this.lastName;
}

console.log(employee.prototype)
// Prototype property of the obj is not empty anymore
var employee1 = new employee("Peter", "Ally");

console.log("Employee 1 : " + employee1.fullName());

console.log(employee1.__proto__);
console.log(employee.prototype);



var jsonObj = {
    firstName: "John",
    lastName: "Doe"
};

// jsonObj.__proto__ = employee.prototype;

console.log(jsonObj.__proto__);

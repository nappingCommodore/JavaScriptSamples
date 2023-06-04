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

// Prototype property of the obj is not empty anymore
var employee1 = new employee("Peter", "Ally");

console.log("Employee 1 : " + employee1.fullName());

console.log(employee1.__proto__);
console.log(employee.prototype);


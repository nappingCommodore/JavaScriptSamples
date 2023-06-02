// Example for global scoped this
var name = "ABCDEF";

function thisTest() {
    console.log("The name is : " + this.name);
}

thisTest();

// Example for object scoped this or constructor call binding
function employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

var employee1 = new employee("Peter", "Ally");

console.log("Employee 1 : " + employee1.fullName());
console.log("firstName of employee1 : " + employee1.firstName);
console.log("lastName of employee1 : " + employee1.lastName);


// Example for implicit call binding
var employee2 = {
    firstName: "Adam",
    lastName: "Smith",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Employee 2 : " + employee2.fullName());
console.log("firstName of employee2 : " + employee2.firstName);
console.log("lastName of employee2 : " + employee2.lastName);

// Example for explicit call binding

var employee3 = {
    firstName: "John",
    lastName: "Adams"
};

var employee4 = {
    firstName: "James",
    lastName: "Madison",
};


function fullName1(message) {
    return message + " " +this.firstName + " " + this.lastName;
}

// call() method
console.log("Employee 3 : " + fullName1.call(employee3, "Welcome"));
console.log("Employee 4 : " + fullName1.call(employee4, "Hello"));

// apply() method

function fullName2(message1, message2) {
    return message1 + " " + message2 + " " +this.firstName + " " + this.lastName;
}

console.log("Employee 3 : " + fullName2.apply(employee3, ["Welcome", "mate"]));
console.log("Employee 4 : " + fullName2.apply(employee4, ["Hello", "Mr."]));

// bind() method

var fullName3 = fullName1.bind(employee3, "Welcome");
var fullName4 = fullName2.bind(employee4, "Hello", "Mr.");
console.log(fullName3());
console.log(fullName4());

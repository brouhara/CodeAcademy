// Method 2

function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

// Prototype Method Assignment 
person.prototype.nationality = "English";

person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
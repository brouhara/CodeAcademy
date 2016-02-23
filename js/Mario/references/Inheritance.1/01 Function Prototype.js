

function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    
    // Constructor Prototype is assigned a name property pointing to function
    this.name = function() {return this.firstName + " " + this.lastName;};
    
}


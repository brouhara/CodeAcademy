/**
 * Prototype functions 
 *      Shared scope functions 
 *      Linked to the Object Type rather than the Object.
 * 
 */

/**
 * Example of the Function Method Prototype
 */

Function.prototype = {
    arguments: null,
    length: 0,
    call: function () {
        // secret code
    },
    apply: function () {
        // secret code
    }
};

console.log(myObject instanceof Function); // true
console.log(myObject === Function); // false

/**
 * When an instance of an object is created,
 *      __Prototype property is updated
 *      Points to the constructor’s prototype
 * 
 * which, in this case, is Function.
 */

console.log(myObject.__Prototype === Function.prototype); // true

/**
 * If, however, we create a new instance of myObject using the 
 * 
 *  new keyword,
 *       __Prototype will points to myObject.prototype
 * 
 * Because myObject is the constructor of our new instance.
 * 
 * Pointer Vs. Assignment
 */

var myInstance = new myObject('foo');

console.log(myInstance.__Prototype === myObject.prototype); // true
console.log(myInstance.getName()); // foo
 
var mySecondInstance = new myObject('bar');

console.log(mySecondInstance.getName()); // bar
console.log(myInstance.getName()); // foo


var myCanvasWidth = 800;
var myCanvasHeight = 100;

/**
 * Function Expression 
 * 
 * New Keyword
 *      New Prototype Each Time
 *      
 * Because GameObject is a Constructor Function  
 */

// define the GameObject constructor function
var GameObject = function (width, height) {
    this.x = Math.floor((Math.random() * myCanvasWidth) + 1);
    this.y = Math.floor((Math.random() * myCanvasHeight) + 1);
    this.width = width;
    this.height = height;
    return this;
};

/**
 * Reassign Function Expression Prototype Reference
 * 
 * To make the application run faster (and follow best practices)
 * we can (re)define the prototype property of the GameObject;
 * 
 * Every instance of GameObject will then reference the methods within GameObject.prototype
 * as if they were their own methods.
 * 
 */

// (re)define the GameObject prototype object
GameObject.prototype = {
    x: 0,
    y: 0,
    width: 5,
    height: 5,
    draw: function () {
        myCanvasContext.fillRect(this.x, this.y, this.width, this.height);
    }
};

// Loop to Create GameObjects
var x = 100,
    arrayOfGameObjects = [];

do {
    arrayOfGameObjects.push(new GameObject(10, 10));
} while (x--);

/**
 * Prototype Functions are Live Objects
 * 
 * AKA. Shared Pointer Reference
 */

GameObject.prototype.draw = function () {
    myCanvasContext.arc(this.x, this.y, this.width, 0, Math.PI * 2, true);
};


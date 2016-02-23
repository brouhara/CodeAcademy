
/**
 *  When creating a new object/class,
 *      Define Methods in the Objects Prototype
 *          -NOT in the Objects Constructor
 */

// The previous code does not take advantage
// of the benefits of closures and thus could
// instead be formulated:

function MyObject(name, message) {
    
    this.name = name.toString();
    this.message = message.toString();
    
}


/**
 * Removes old Prototype Object and Assigns New Prototype
 */
MyObject.prototype = {
    
    getName: function() {
        return this.name;
    },
    
    getMessage: function() {
        return this.message;
    }
    
};

// Function Constructor Retain Values
MyObject("Name", "Message");

// Function Expression Assignment
var NewObject = new MyObject("Name", "Message");

NewObject.getMessage(); //Returns Message
NewObject.getName();    //Returns Name



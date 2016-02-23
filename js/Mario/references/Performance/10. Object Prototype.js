/**
 * Creates a Named Function Constructor
 * 
 * Function Auto-Executes an Annonymous Function
 *      
 * Annonymous Function Appends MyObject.Prototype
 *      Results Piped to Call();
 */

function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function () {
    this.getName = function () {
        return this.name;
    };
    this.getMessage = function () {
        return this.message;
    };
}).call(MyObject.prototype);  //Substitutes function() Object for MyObject.prototype

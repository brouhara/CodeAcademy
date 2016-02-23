
/**
 * Reason:
 * 
 *      When Constructor Function is called
 *          Methods are reassigned 
 * 
 *      (that is, for every object creation).
 * 
 */

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

// Appends Property getName to MyObject Prototype

MyObject.prototype.getName = function() {
  return this.name;
};

MyObject.prototype.getMessage = function() {
  return this.message;
};


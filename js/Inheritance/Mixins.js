/**
 * 
 * The mixin function would
 *       copy the functions
 *           from the superclass prototype
 *           to the subclass prototype,
 * 
 * the mixin function
 *      needs to be supplied by the user.
 * 
 *  An example of a mixin like function would be jQuery.extend().
 */
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // inherit
mixin(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function() {
  // do a thing
};

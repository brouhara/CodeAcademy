

function Options(values) {
    
    //Instance Values
    this.values = options || {};

}
(function() {
    
    this.Values.getKey = function(value) {
        this.enumerable = false;
        
        return this.Values[value];
    };

    this.Values.getValue = function(key) {
        return Object.keys(this.Values)[key];
    };

    this.Values.typeOf = function(value) {
        return (typeof this.Values.getValue(value));
    };
    
}).call(Options.prototype);

function Distance()

// Constructor Function
function Option(values, initValue, defaultValue) {

    this.
    
    // Define Declarations
    var Current = Values[initValue] || Values[0] || 0;
    var Defaults = Values[defaultValue] || Value;


    this.values = Values;
    this.default = Defaults;

    // Define Descriptors
    this.value = Value;



}
(function() {


}).call(Option.prototype);

var Speed = new Option({
    0: 5,
    1: 10,
    2: 20
}, 0, 0);

console.log(Speed);

var Override = function AType() {
    Type.call(this);
    Override.prototype = Object.create(Type.prototype);
    Override.prototype.constructor = Override;
};

var over = new Override();

console.log(over);

var newType = Type({
    0: 5,
    1: 10,
    2: 20
}, 1);


console.log(newType);
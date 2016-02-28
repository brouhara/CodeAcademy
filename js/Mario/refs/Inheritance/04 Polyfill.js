// Polyfill
//  This polyfill covers the main use case 
//      which is creating a new object
//          for which the prototype has been chosen but, 
//          doesn't take the second argument into account.

if (typeof Object.create != 'function') {

    Object.create = (function () {
        
        var Temp = function () { };

        return function (prototype) {
            
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            
            if (typeof prototype != 'object') {
                throw TypeError('Argument must be an object');
            }
            
            Temp.prototype = prototype;
            
            var result = new Temp();
            Temp.prototype = null;
            
            return result;
        };
    })();
}
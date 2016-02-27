
// Self-Invoking Function,
// Uses the Same Scope/This as Above
// Uses Call to Append Above Type Protocol
( function () {

    // Non-Redefinable Property
    Object.defineProperty( this, 'value', {
        get: function () {
            return this.Value;
        },
        set: function ( value ) {
            this.setValue();
        },
        configurable: true,
        enumerable: true,
        writeable: false
    } );

} ).call( Type.prototype );


( function () {
    this.update = function ( name ) {
        this.name = name;
    };
} ).call( newObject.prototype );

newObject( 'hello' );

/**
 * Factory Pattern
 *
 * Creates a new adjustable vector option.
 *
 *      @param type { Value, Unit, Speed }
 */
var option = function ( Options ) {

    // Overide Prototype Defaults
    var type;
    var defaultValue;

    this.currentValue = [];
    this.lastValue = defaultValue;

}

( function () {
    // Shared prototype properties

    // Defined Option Types
    var speed = new type( [ 5, 10, 20 ], 1 );




    console.log( DefaultTypes.speeds );

    // Create New Types




    types.addType( "speeds", [ 0, 10, 20 ], 0 );


    // Set the Constructor Functions Private Values


    this.type = Object.keys( types ).;


    ( function setInitialValue() {
        update( options[ defaults[ this.type ] ] );
    } )();



    this.getDefault = function () {
        return this.default;
    };

    this.assign = function ( option ) {
        valid( option ): update( validOptions[] )
    }

    function assign( option ) {

        if ( valid( option ) ) {

            return update( validOptions[ option ] );
        } else {
            update( validOptions.defaults );
            return currentValue;
        }

    }

} ).call( option.prototype );

/**
 *  Annoymous Function
 *  Parameters are Passed From Instance Variables Scope
 *  Code is hidden from the user.
 *
 *  Parameters
 *      @param option    : name of option
 *      @param defaults  : defaults options object
 *      @param options   : available options Object
 */
function ( option, defaults, options ) {



    /**
     * Returns the Newly Assigned Value
     *
     * Updates lastValue
     */





    function log( msg ) {
        console.log( msg );
    }

    // Return Function, Called when Option() is Called
    // User Specified Parameters
    return function ( value ) {

        // Externally Visible Code
        if ( typeof value !== 'undefined' ) {
            return {
                current: currentValue,
                new: value,
                result: assign( value )
            };
        }

        return {
            current: currentValue
        };
    };

    // Globally Passed Variables, Not Assignable
} )( option, defaults, options );
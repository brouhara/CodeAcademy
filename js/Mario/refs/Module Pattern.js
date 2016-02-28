
var options = {

    // Valid Options
    values: [0, 10, 20],
    units: { pixels: "px", percent: "%" },
    speeds: { slow: "slow", fast: "fast" },
    defaults: { value: 10, unit: "pixels", speed: "slow" }
};


// Constructor Function
function Vector(Value, Unit, speed) {

    // Define Private Variables
    var accessors = (function (Methods) {
        return {
            value: Methods[0],
            unit: Methods[0],
            speed: methods[0]
        };
    })(Value, Speed, Unit);

    // Pointer reference to options
    var available = options;

    // If valid options ? assign value :  assign default.
    var value = available.values[value] || available.values[0];
    var unit = available.units[Unit] || available.units.pixels;

    // this._speed = available.speeds[speed] || available.speeds.slow;

    // Return an Object
    return this.props;

}

// Create an Object Distance and Assign New Vector Object using Vector Constructor Function
var distance = new Vector();
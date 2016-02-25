





$(document).ready(function () {
    var $list = $('.list');

    // On Keydown
    $(document).keydown(function (key) {

        var $item = $('<p class="item">' + '</p');


        var options = {

            // Valid Options
            values: { small: 5, medium: 10, large: 20 },
            units: { pixels: "px", percent: "%" },
            speeds: { slow: "slow", fast: "fast" }

        };

        // Constructor Function
        function Vector(Value, Unit, Speed) {

            // Define Private Variables

            // Pointer reference to options
            var available = options;

            // Define Local Properties

            // If valid options ? assign value :  assign default.
            this._value = available.values[Value] || available.values[0];
            this._unit = available.units[Unit] || available.units.pixels;
            this._speed = available.speeds[Speed] || available.speeds.slow;


            console.log("Outter Speed: " + Speed);

            // Public Objects

            // No Name Function > Shared Property
            this.defaults = function () {
                return [available.values[0], available.units.pixels, available.speeds[0]];
            };

            Vector.prototype.getValues = function () {
                return [this.value, this.unit, this.speed];
            };

            // Return an Object
            //return { value: this.value, unit: this.unit, speed: this._speed, test: this.test };

        }

        // Create an Object Distance and Assign New Vector Object using Vector Constructor Function
        var distance = new Vector();

        distance.test;
        distance.test();
        distance.test("slow");
        distance.test("meow");

        var distance2 = new Vector(11, "pixels", 'fast');


        // Enumerate Vector Object Distance
        for (var Key in distance) {
            console.log(Key + ":" + distance[Key]);
        }

        // Distance Object
        var Vector2 = {

            _options: options,

            // Distance Values
            value: 0,
            unit: options.units[0],
            speed: options.speeds[0],

            // Set to Defaults
            get defaults() {
                return [options.values[0], options.units[0], options.speeds[0]];
            }

        };

        distance.options();

        distance2(10, "px", "fast");

        // Returns Valid
        distance2.value = 2;

        // Returns Valid
        distance2._unit = "px";


        var dist = new distance(10, "%", "fast");

        // Create Distance Object
        var vector = {
            value: distanceValue,
            unit: distanceUnits,
            speed: distanceSpeeds,

            get function() {
                return this.value & this.unit;
            },

            set function(options) {
                this.value = options.value || distanceDefault.value;
                this.unit = options.unit || distanceDefault.unit;
                this.speed = options.speed || distanceDefault.speed;
            }
        };



        // Set Distance Object
        distance = { value: 20, unit: "px", speed: "fast" };

        // Configure Movement Directions
        var directionOperators = { plus: "-=", minus: "+=" };

        // Create a Direction Object
        var Direction = {
            key: 0,
            name: "",

            _operator: "",
            _distance: distance,

            get operator() {
                return _operator;
            },

            set operator(key) {
                this._operator = directionOperators[key];
            },

            // Return Operator and Distance
            get function() {
                return _operator + distance;
            },

            // Set Direction Variables
            set function(options) {
                this.key = options.key || 0;
                this._operator = directionOperators[options.operator] || directionOperators[0];
            }
        };


        //Create New Directions

        // Object Assignment

        var move = {

            // Variable Bound to Function
            left: new Direction(37, "minus"),
            right: new Direction(38, "plus"),
            up: new Direction(39, "plus"),
            down: new Direction(40, "minus"),

            Moveleft: function () { }
        };

        move.left = ["left", 37, "minus"];

        move.left('left', 37, 'minus');

        move.right();

        function movement() {

            left = function () {
                console.log("moving left");
            };

        }

        movement("10", "px", "left");


        var moveMario = new move();

        move.left();


        // Parse Pressed Key
        switch (parseInt(key.which, 10)) {

            // Left arrow key pressed
            case 37:
                $('img').animate({ left: "-=" + distance }, 'fast');

                break;

            // Up Arrow Pressed
            case 38:
                // Put our code here
                $('img').animate({ up: "+=10px" }, 'fast');
                break;

            // Right Arrow Pressed
            case 39:
                // Put our code here
                $('img').animate({ left: "+=10px" }, 'fast');

                //$item.html('Left: ' +
                break;

            // Down Arrow Pressed
            case 40:
                // Put our code here
                $('img').animate({ down: "-=10px" }, 'fast');
                break;
        }

    });
});
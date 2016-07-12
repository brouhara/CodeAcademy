/**
 * Speed
 * 
 * Anonymous Function: 
 *      Cannot be Directly Accessed
 * 
 * Protected Function:
 *      Cannot be reassigned.
 * 
 * Speed is the initial speed to assign.
 * Options is the available options for speed
 * 
 * @param speed:integer
 * @param available: object
 * 
 */
var speed = ( function (speed, options) {
        // Private Wrapper Function

        var available;
        var defaults;
        var old, current = [];

        function init(speed, available) {
            options = available.speeds;
            defaults = available.defaults.speed;

            current.push(defaults);
        }

        function update(speed) {
            current.push(speed);
            return current[current.length];
        }

        // Assign Speed
        function assign(speed) {
                    
            // Valid Option : Assign new var ? Keep old
            if (typeof options[speed] !== 'undefined') {

                console.log("Assigning Speed: " + speed);
                return update(options[speed]);
            }
            else if (typeof options[current] === 'undefined') {

                console.log("Assigning Default: " + defaults);
                update(defaults);
                return current;
            }

            return current;
        }

        init(speed, available);
                
        // Return Assigned Speed
        return function (speed) { 
                
            // Visible Returned Function
            if (typeof speed !== 'undefined') {
                return { current: current, new: speed, result: assign(speed) };
            }

            return { current: current };
        };

    })(speed, available);
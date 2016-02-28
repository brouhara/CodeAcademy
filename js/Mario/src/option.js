// Constructor Module Pattern
function Options(object) {

	var options = object;
	var keys = [];
	var values = [];

	function setKeys() {
		return (keys = Object.keys(options));
	}

	function setValues() {
		values = [];
		for (var key in keys) {
			values.push(options[keys[key]]);
		}
		return values;
	}

	this.keys = ((typeof options !== 'undefined') ? setKeys() : []);

	this.values = ((typeof options !== 'undefined') ? setValues() : []);

}

(function() {

	Options.prototype = Object.create(Options.prototype);
	Options.prototype.constructor = Options;

	this.isDefined = function(object) {
		return ((typeof object !== 'undefined') ? true : false);
	};

	this.inArray = function(value, object) {
		for (var key in object) {
			if (object[key] === value) {
				return true;
			}
		}
	};

	this.hasValue = function(value) {
		return this.inArray(value, this.values);
	};

	this.hasKey = function(key) {
		return this.inArray(key, this.keys);
	};

	this.getKeyValue = function(key) {
		return this.names[key];
	};

	this.setKeyValue = function(key, value) {
		return (this.options[key] = value);
	};

}).call(Options.prototype);


function Option(options, defaultOption, initialOption) {

	this.options = new Options(options);

	this.default = defaultOption || ((typeof options !== 'undefined') ? Object.keys(options)[0] : undefined); // Key Value For Default Option

	this.selected = initialOption || this.default || undefined; // Key Value From Options

}

(function() {

	Option.prototype = Object.create(Option.prototype);
	Option.prototype.constructor = Option;

	this.reset = function() {
		this.selected = this.default;
		return this.selected;
	};

	this.setOption = function(option, value) {
		if (this.options.hasKey(option)) {
			return this.options.setKey(option, value);
		}
		return false;
	};

	this.select = function(option) {
		if (this.options.hasKey(option)) {
			return (this.selected = option);
		}
		return false;
	};

}).call(Option.prototype);

function Speeds() {

	Option.call(this, {
		'slow': 'slow',
		'fast': 'fast'
	}, 'slow');

	return this;
}

(function() {
	Speeds.prototype = Object.create(Option.prototype);
	Speeds.prototype.constructor = Speeds;

}).call(Speeds.prototype);

function Metrics() {

	// Links Option Prototype of Distance =
	Option.call(this, {
		'pixels': 'px',
		'percent': '%'
	}, 'pixels');

}

(function() {
	Metrics.prototype = Object.create(Option.prototype);
	Metrics.prototype.constructor = Metrics;

}).call(Metrics.prototype);

// Distance Factory Constructor, Inherits Option Properties
function Units() {

	// Createa a new Option
	Option.call(this, {
		'small': 5,
		'medium': 10,
		'large': 20
	}, 'medium');

	this.values = [this.selected];

}

// Closure Expression, Attaches to Distance, Assigns an Instance Shared Prototype for Performance
(function() {

	Units.prototype = Object.create(Option.prototype);
	Units.prototype.constructor = Units;

}).call(Units.prototype);

// Distance Factory Constructor, Inherits Option Properties
function Distance() {

	// Createa a new Option
	this.units = new Units();
	this.metric = new Metrics();

	this.values = [this.units.selected, this.metric.selected];

}

// Closure Expression, Attaches to Distance, Assigns a Shared Prototype for Performance
(function() {

	Distance.prototype = Object.create(Option.prototype);
	Distance.prototype.constructor = Distance;

}).call(Distance.prototype);



// Scalar Value
function Magnitude() {

	Option.call(this, {
		'slow': 'slow',
		'fast': 'fast'
	}, 'slow');

	this.distance = new Distance();
	this.direction = new Direction();
	this.speed = new Speeds();

	return this;

}

(function() {
	Vector.prototype = Object.create(Option.prototype);
	Vector.prototype.constructor = Vector;

}).call(Vector.prototype);

// Distance Module Constructor, Inherits Option Properties
function Direction() {

	// Createa a new Option
	Option.call(this, {
		'left': '-=',
		'right': '+=',
		'up': '-=',
		'down': '+='
	}, 'down');

	this.values = [this.selected, this.metric.selected];

}

// Closure Expression, Attaches to Distance, Assigns an Instance Shared Prototype for Performance
(function() {

	Direction.prototype = Object.create(Option.prototype);
	Direction.prototype.constructor = Direction;

}).call(Direction.prototype);


function Vector() {

	Option.call(this, {
		'slow': 'slow',
		'fast': 'fast'
	}, 'slow');

	this.distance = new Distance();
	this.direction = new Direction();
	this.speed = new Speed();

	return this;

}

(function() {
	Vector.prototype = Object.create(Option.prototype);
	Vector.prototype.constructor = Vector;

}).call(Vector.prototype);

var opt = new Option();
console.log(opt);

var met = new Metric();
console.log(met);

var dist = new Distance();
console.log(dist);

var speedObj = new Speed();
console.log(speedObj);

var vec = new Vector();
console.log(vec);
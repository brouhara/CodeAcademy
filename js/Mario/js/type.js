

var Options  = function (values) {

    //Instance Values
    this.values = values || {};

}
(function () {

    this.Values.getKey = function (value) {
        this.enumerable = false;

        return this.Values[value];
    };

    this.Values.getValue = function (key) {
        return Object.keys(this.Values)[key];
    };

    this.Values.typeOf = function (value) {
        return (typeof this.Values.getValue(value));
    };

}).call(Options.prototype);


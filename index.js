var PI = 3.142;

exports.circle = {};
exports.circle.circumference = function(r){
    return 2 * PI * r;
};
exports.circle.perimeter = exports.circle.circumference;

exports.circle.area = function(r){
    return PI * r * r;
};

exports.square = {};
exports.square.perimeter = function(s){
    return 4 * s;
};
exports.square.area = function(s){
    return s * s;
};

exports.rectangle = require('rectangle');

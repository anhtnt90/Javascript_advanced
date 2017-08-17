//A closure is the combination of a function and the lexical environment within which that function was declared.
var addTo = function(passed) {
    var add = function(inner){
        return passed + inner;
    };

    return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

console.dir(addThree);
console.dir(addFour);
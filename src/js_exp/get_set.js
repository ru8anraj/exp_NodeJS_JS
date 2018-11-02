// this file is to test the getter - setter function of the JS

class Polygon {
    constructor(height, length) {
        this.height = height;
        this.length = length;
    }
}

class Square extends Polygon {
    constructor(x) {
        super(x, x);
    }

    get area() {
        if(isNaN(this.height) || isNaN(this.length)) {
            return "sides are not set";
        } else {
            return this.height * this.length;
        }
    }
    set area(a) {
        this.height = a;
        this.length = a;
    }
    squaring() {
        return this.height*this.length;
    }
}

var sq = new Square(4);
console.log('1 - > ', sq.area);
sq.area = 6
console.log('after setting new side - > ', sq.area); // here getter area acts as a property
console.log('squaring - > ', sq.squaring()); // squaring acts as a method



console.log('Object syntax ------------------------------------------->');


var person = {
    firstName: 'Bottle',
    lastName: 'Manee',
    ageInYears: 23,
    get age() {
        return this.ageInYears;
    },
    set age(years) {
        this.ageInYears = years;
    },
    t: function() {
        return 't';
    }
};

Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(name) {
        var words = name.split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
});

console.log('Before setting fulname - > ', person.fullName);
person.fullName = 'Manee Bhai';
console.log('After setting fulname - > ', person.fullName);

console.log('before setting age - > ', person.age);
person.age = 25;
console.log('after setting age - > ', person.age);
console.log(Math.ceil(10.126))
var x;
console.log(x++)
"abc" == new String("abc")
console.log(Date.now())
var x = "123" + y;
var y = "456";
console.log(x)
function foo () { 
    var x = 0; 
}
console.log(foo.toString());
// function foo (x) {
// }
// foo("first", "second");

// function foo() {
//     this.me = "hello"; 
//    }
//    var x = new foo();
//    console.log(x.me);
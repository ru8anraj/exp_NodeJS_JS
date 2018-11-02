var human = function(){
    name = "";
    age = 0;
};

// adding prototype functions
human.prototype.getName = function(name){
    return this.name = name;
};

// adding another prototype function
human.prototype.getAge = function(age){
    return this.age = age;
};

// inheriting using new keyword
var ruban = new human();
console.log(ruban.getName('Ruban'));
console.log(ruban.getAge(5));

// adding another prototype function 
// to check whether the ruban class has access to the new prototype
human.prototype.c = 6;
console.log(ruban.c);
var person = function(a, b) {
    this.firstName = a;
    this.lastName = b;
};

person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

var ruban = new person('Rubanraj', 'R');

console.log(ruban.getFullName());

person.prototype.getAge = () => {
    return 23;
}

console.log(ruban.getAge());

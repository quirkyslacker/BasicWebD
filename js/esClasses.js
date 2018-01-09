class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    // accessors
    get lastname () {
        return this._name.split(' ')[1];
    }

    set name (val) {
        this._name = val;
    }

    get name () {
        return this._name;
    }

    getFirstName() {
        return this._name.split(' ')[0];
    }

    // Person.prototype.getFirstName = function() {
    //      return this.name.split(' ')[0];
    // }
}

let p = new Person('Darsh Pratap', 19);
console.log(p);
console.log(p.getFirstName());
console.log(p.lastname);
p.name = 'slacker';
console.log(p.name)
console.log(p);

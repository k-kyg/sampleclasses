"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return this.name + ", " + this.age;
    };
    return Person;
}());
var person1 = new Person("太郎", 14);
console.log(person1.toString());
console.log("\u79C1\u306E\u540D\u524D\u306F" + person1.name + "\u3067\u3059\u3002" + person1.age + "\u6B73\u3067\u3059\u3002");

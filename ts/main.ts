interface person{
  name: string;
  age: number;
  toString(): string;
}
class Person implements person{
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  toString() {
    return `${this.name}, ${this.age}`;
  }
}

const person1: Person = new Person("太郎", 14);
console.log(person1.toString());
console.log(`私の名前は${person1.name}です。${person1.age}歳です。`);
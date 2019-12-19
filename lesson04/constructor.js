function Person(name) {
  this.name = name;

  this.greeting = function() {
    console.log("Hello, my name is " + this.name + "!");
  }
}

const andreas = new Person("Andreas");
const bob = new Person("Bob");
const alice = new Person("Alice");

andreas.greeting();
bob.greeting();
alice.greeting();

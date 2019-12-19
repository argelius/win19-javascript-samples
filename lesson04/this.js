
let myObject = {
  name: "Andreas",
  sayHello: function() {
    console.log("Hello " + this.name);
  }
};

// myObject.sayHello();

let myObject2 = {
  name: "Andreas",
  changeName: function(newName) {
    this.name = newName;
  },
  greet: function() {
    console.log("Hello " + this.name);
  }
};

myObject2.greet();
myObject2.changeName("Pelle");
myObject2.greet();

const greet = myObject2.greet;
greet();

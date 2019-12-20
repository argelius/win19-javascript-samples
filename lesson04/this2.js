function sayHello() {
  console.log("Hello " + this.name);
}

const myObject = {
  name: "Andreas",
  sayHello: sayHello,
};

myObject.sayHello();
sayHello.call(myObject);
sayHello.apply(myObject);
const boundSayHello = sayHello.bind(myObject);
boundSayHello();
sayHello.bind(myObject)();

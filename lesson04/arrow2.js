const myObject = {
  name: "Andreas",
  sayHello: function() {
    // this
    const fn = () => {
      // this är samma som utanför
      console.log("Hello " + this.name);
    };

    fn();
  }
};

myObject.sayHello();

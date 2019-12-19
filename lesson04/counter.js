

function Counter() {
  this.count = 0;
}

Counter.prototype.increase = function() {
  this.count += 1;
};

Counter.prototype.log = function() {
  console.log(this.count);
};

const counter = new Counter();

for (let i = 0; i < 10; i += 1) {
  counter.increase();
  counter.log();
}


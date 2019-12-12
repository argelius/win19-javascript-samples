var i;
var sum = 0;

for (i = 1; i <= 1000; i++) {
  if (i % 10 !== 0) {
    sum += i;
  }
}

console.log(sum);

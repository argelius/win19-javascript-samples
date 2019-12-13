function doubleAll(a) {
  return a.map(x => 2 * x);
}

function doubleAll2(a) {
  return a.reduce((acc, curr) => {
    acc.push(2 * curr);
    return acc;
  }, []);
}

console.log(doubleAll([1,2,3,4]))
console.log(doubleAll2([1,2,3,4]))

const ar = [1, 3, 2, 1, 2, 3, 4, 5, 3];

function sum(ar) {
  function reducer(acc, curr) {
    return acc + curr;
  }

  return ar.reduce(reducer, 0);
}

console.log(`The sum is ${sum(ar)}`);

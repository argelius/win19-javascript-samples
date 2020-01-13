function sum(ar) {
  console.log(ar);

  if (ar.length === 1) {
    return ar[0];
  }

  return ar[0] + sum(ar.slice(1));
}

console.log(sum([1, 2, 3, 4, 5]));

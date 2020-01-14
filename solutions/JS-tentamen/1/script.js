/* Implement your solution here */

function sumOld(a) {
  let rv = 0;
  for (let i = 0; i < a.length; i += 1) {
    rv += a[i];
  }
  return rv;
}

function sum(a) {
  return a.reduce((acc, curr) => acc + curr, 0);
}

/* Do not touch code below this line, but make sure that these examples work */
if (sum([1, 2, 3]) !== 6) console.error('Invalid solution');
if (sum([]) !== 0) console.error('Invalid solution');
if (sum([7, 2]) !== 9) console.error('Invalid solution');
if (sum([1, 2, 3, 4, 5, 6, 7, 8, 9]) !== 45) console.error('Invalid solution');

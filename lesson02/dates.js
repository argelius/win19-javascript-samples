/**
 * This code does not solve the general case.
 *
 * As an exercise, try to implement so it correctly
 * handles all months and leap years.
 */

let year = 2019;
let month = 7;
let day = 1;

let ar = [];

function zeroPad(n) {
  if (n < 10) {
    return "0" + n;
  }

  return n.toString();
}

while (!(day === 1 && month === 9)) {
  ar.push(year + "-" + zeroPad(month) + "-" + zeroPad(day));

  day += 1;

  if (day > 31) {
    month += 1;
    day = 1;
  }
}

console.log(ar);

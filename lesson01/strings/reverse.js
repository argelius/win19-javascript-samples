
function reverseString(s) {
  var rv = "";
  var i;

  for (i = 0; i < s.length; i++) {
    rv += s.charAt(s.length - 1 - i);
  }

  return rv;
}

console.log(reverseString("paris"));

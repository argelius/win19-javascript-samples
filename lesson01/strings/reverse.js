function reverseString(str) {
  var rv = "";
  
  var i;
  for (i = 0; i < str.length; i++) {
    rv += str.charAt(str.length - 1 - i);
  }

  return rv;
}

function reverseString2(str) {
  var letters = str.split("");
  // det här är en kommentar
  letters.reverse(); // reverse letters
  return letters.join("");
}

console.log(reverseString2("sirap"));

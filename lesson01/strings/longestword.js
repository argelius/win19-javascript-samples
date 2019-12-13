

function longestWord(sentence) {
  var longest = "";
  var words = sentence.split(" ");

  var i;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

var result = longestWord("aaa a abc");
console.log(result);





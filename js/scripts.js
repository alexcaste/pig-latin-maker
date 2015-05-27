var startVowel = function(input) {
  var check = /(?=[A-Z])^[AEIOU]/ig
  var vowelStart = check.test(input)
  if ( vowelStart === true ) {
    return addAy(input)
  } else {
    return false;
  }
};

var addAy = function(input) {
  return input.concat("ay");
};

var findCon = function(input) {
  var check = /(?=[A-Z])[AEIOU]/ig
  var conNum = input.search(check)
  return conNum
};

var splitWord = function(string, ident) {

  var word = string.split("")
  var toAppend = word.splice(0, ident)
  var leftOver = word.splice(ident-1, Number.MAX_VALUE)
  var newWord = leftOver.join('').concat(toAppend)
  return newWord;
};

// vowels.forEach(word[x]) > -1

// var vowels = ["a","e","i","o","u"]
//
// var message = input.toLowerCase();
//
// var messageArray = message.split("");

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
  return conNum;
};

var splitWord = function(string, ident) {
  var word = string.split("")
  var toAppend = word.splice(0, ident)
  var newWord = word.join('') + toAppend.join('')
  return newWord;
};

var findQyqu = function(word) {
  var q = /[q]/ig
  var y = /[y]/ig
  var qu = /qu/i

  var wordArray = word.split("")
  var quid = word.search(qu)
  var qid = word.search(q)
  var yid = word.search(y)
  var isu = wordArray[qid+1]
  var unum = wordArray.indexOf("u")

  if (quid === 0 || quid === 1) {
    var ident = unum + 1
    var newWord = splitWord(word, ident)
    return addAy(newWord);
  } else if (qid === 0 ) {
    var newWord = splitWord(word, qid)
    return addAy(newWord);
  } else {
    return false
  };

  if (yid === 0) {
    var newWord = splitWord(word, yid)
    return addAy(newWord);
  } else {
    return false
  };
};


var pigLatin = function(word) {
  var check = startVowel(word)
  var lookq = findQyqu(word)

  if (lookq === false) {
    if (check === true) {
      return addAy(word)
    } else {
      var ident = findCon(word)
      var newWord = splitWord(word, ident)
      return addAy(newWord);
    };
  } else {
    return lookq
    };
  };

  var sentences = function(sentence) {
    var newSentence = []
    var sentenceArray = sentence.split(/\W+/)
    for (var i = 0; i < sentenceArray.length; i++) {
      var word = sentenceArray[i]
      newSentence.push(pigLatin(word));
    }
    var output = newSentence.join(" ")
    return output
  };

  $(document).ready(function() {
    $("form#piglatin").submit(function(event) {
    $(".sentence").empty();
      var sentence = $("input#sentence").val();
      var result = sentences(sentence);

      $(".result").text(result);
      $("#result").show();
      event.preventDefault();
    });
  });

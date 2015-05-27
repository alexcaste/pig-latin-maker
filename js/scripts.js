var pigLatin = function(input) {
  var vowels = ["a","e","i","o","u"]
  var message = input.toLowerCase();
  var messagearray = message.split("");
  if (vowels.indexOf(messagearray[0]) != -1) {
    return input.concat("ay");
  } else {
    return false
  };
};

describe('startVowel', function(){
  it("will return true if a word starts with a vowel", function() {
      expect(startVowel("cat")).to.equal(false);
  });
  it("will insert ay to the end of a word that begins ith a vowel", function(){
    expect(startVowel("apple")).to.equal("appleay");
  });
});

describe('addAy', function() {
  it("will add ay to the end of a word", function() {
    expect(addAy("boot")).to.equal("bootay");
  });
});

describe('findCon', function() {
  it("will return the location of the first vowel", function(){
    expect(findCon("slam")).to.equal(2);
  });
});

describe('splitWord', function() {
  it("will split the word at a given number and append all characters before that number to the end of the word", function(){
    expect(splitWord("horse", 1)).to.equal("orseh")
  });
});

describe('pigLatin', function() {
  it("will translates none q or y words inot pig latin", function() {
    expect(pigLatin("horse")).to.equal("orsehay")
  });
});

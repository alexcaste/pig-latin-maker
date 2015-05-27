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
    expect(splitWord("horse", 1)).to.equal("orseh");
  });
});

describe('findQyqu', function() {
  it("will identify q y or qu in a word", function() {
    expect(findQyqu("quail")).to.equal("ailquay");
  });

  it("will identify q y or qu in a word", function() {
    expect(findQyqu("wall")).to.equal(false);
  });
});


describe('pigLatin', function() {
  it("will translate single none q or y words into pig latin", function() {
    expect(pigLatin("horse")).to.equal("orsehay")
  });

  it("will translate single none q or y words into pig latin", function() {
    expect(pigLatin("below")).to.equal("elowbay")
  });

  it("will translate single none q or y words into pig latin", function() {
    expect(pigLatin("yellow")).to.equal("ellowyay")
  });
});

describe('sentences', function() {
  it("will return an array of words when given a sentence", function() {
    expect(sentences("the team of awesome")).to.eql("ethay eamtay ofay awesomeay")
  });
});

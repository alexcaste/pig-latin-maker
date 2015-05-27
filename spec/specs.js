describe('pigLatin', function(){
  it("will return true if a word starts with a vowel", function() {
      expect(pigLatin("cat")).to.equal(false);
  });
  it("will insert ay to the end of a word that begins ith a vowel", function(){
    expect(pigLatin("apple")).to.equal("appleay");
  });
});

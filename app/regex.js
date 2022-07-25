exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let string = /\d/g;
    return string.test(str)
  },

  containsRepeatingLetter: function(str) {
    let dup = (/([a-zA-Z]).*?\1/);
    return dup.test(str)
  },

  endsWithVowel: function(str) {
    let vowel = /[aeiou]$/i;
    return vowel.test(str)
  },

  captureThreeNumbers: function(str) {
    let nums = (/\d{3}/).exec(str);
    return nums ? nums[0] : false;
  },

  matchesPattern: function(str) {
    let pattern = /^\d{3}-\d{3}-\d{4}$/;
    return pattern.test(str)
  },

  isUSD: function(str) {
    let usd =/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return usd.test(str)
  }
};

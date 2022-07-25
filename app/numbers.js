exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 &(num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2)

  },

  convertToBinary: function(num) {
    let bin = parseInt(num).toString(2);
    return bin.length < 8 ? '0' + bin : bin
  },

  multiply: function(a, b) {
    return a * 1000 * b * 1000 / 1000000
  }
};

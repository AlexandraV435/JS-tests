exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let counter = 0;
    let nStr = '';
    let newAmount = amount;
    for (let i = 0; i < str.length; i++) {
      counter++;
      if (str[i] !== str[i+1]) {
        if (counter < amount) {
          amount = counter;
        }
        for (let j = 0; j < amount; j++) {
          nStr += str[i];
        }

        counter = 0;
        amount = newAmount;
      }
    }

    return nStr
  },

  wordWrap: function(str, cols) {
    let splitStr = str.split(' ');
    let nStr = splitStr[0];
    for (let i = 1; i < splitStr.length; i++) {
      if (splitStr[i].length > cols) {
        nStr += '\n' + splitStr[i]
      } else if (nStr.length + splitStr[i].length > cols) {
        nStr += '\n' + splitStr[i]
    } else {
      nStr += ' ' + splitStr[i]
    }
    }

    return nStr
  },

  reverseString: function(str) {
    let splitStr = str.split('');
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join('');

    return joinStr;
  }
};

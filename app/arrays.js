exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i
      }
    }
    return -1
  },

  sum: function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return (arr1.concat(arr2));
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        sum++
      }
    }
    return sum
  },

  duplicates: function(arr) {
    let newarr = [];
    for (let i = 0; i < (arr.length)-1; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          newarr.push(arr[i])
        }
      }
    }
    return Array.from(new Set(newarr))
  },

  square: function(arr) {
    let squares = [];
    for (let i = 0; i < arr.length; i++) {
      squares.push(arr[i] ** 2)
    }
    return squares
  },

  findAllOccurrences: function(arr, target) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        newarr.push(i)
      }
    }
    return newarr
  }
};

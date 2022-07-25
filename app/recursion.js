exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let result = [];

    function listOfAllFiles(fileData) {
      fileData.files.forEach(function (file) {
        if (typeof file == 'string') {
          result.push(file);
        } else {
          listOfAllFiles(file);
        }
      });
    }

    listOfAllFiles(data);

    function findFile(arr, dir) {
      if (!dir) {
        return arr;
      }

      return arr.filter(function (file) {
        return file.includes(dir)
      });
    }

    return findFile(result, dirName)

  },

  permute: function(arr) {
    const resArr = [];
    function permutation(arr, start, end) {
      if (start === end) {
        resArr[resArr.length] = arr.slice();
        return;
      }
      for (let i = start; i < end; i++) {
        let arrStr = arr[start];
        arr[start] = arr[i];
        arr[i] = arrStr;
        permutation(arr, start + 1, end);
        arrStr = arr[i];
        arr[i] = arr[start];
        arr[start] = arrStr;
        }
      }
    permutation(arr, 0, arr.length);
    return resArr;
  },

  fibonacci: function(n) {
    function fib(n) {
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    return fib(n)
  },

  validParentheses: function(n) {
    let res = [];
    pairs(0, 0, '');
    function pairs(l, r, comb) {
      if (comb.length == n * 2) {
        res[res.length] = comb;
        return;
      }

      if (l < n) {
        pairs(l+1, r, `${comb}(`)
      }
      if (r < l) {
        pairs(l, r+1, `${comb})`)
      }
    }
    return res;
  }

};

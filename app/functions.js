exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(a) {
      return str + ', ' + a
    }
  },

  makeClosures: function(arr, fn) {
    let arr_2 = [];

    let func = function(a) {
      return function() {
        return fn(a)
      }
    };

    for (let i = 0; i < arr.length; i++) {
      arr_2.push(func(arr[i]))
    }
    return arr_2;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function() {
    let sum = 0;
    let len = arguments.length;

    for (let i = 0; i < len; i++) {
      sum += arguments[i]
    }
    return sum
  },

  callIt: function(fn) {
    let funcArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(this, funcArgs)
  },

  partialUsingArguments: function(fn) {
    let funcArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      let args = funcArgs.concat(Array.prototype.slice.call(arguments))
      return fn.apply(this, args)
    }
  },

  curryIt: function(fn) {
    function args(fn, args) {
      return fn.apply(this, args);
    }

    function getArgument(a, b) {
      return function (c) {
        a.push(c);

        let allArgs = a.length === b;

        if (allArgs) {
          return args(fn, a);
        }

        return getArgument(a, b);
      };
    }
    return getArgument([], fn.length);
  }
};

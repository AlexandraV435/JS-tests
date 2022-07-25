exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    let mass_prop = [];
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        mass_prop.push(i + ': ' + obj[i])
      }
    }
    return mass_prop;
  }
};

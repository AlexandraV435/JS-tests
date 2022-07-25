exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let time;
    function counter() {
      console.log(start++);
      if (start <= end) {
        time = setTimeout(counter, 100)
      }
    }
    counter()
    return {
      cancel: function() {
        time && clearTimeout(time)
      }
    };
  }
};

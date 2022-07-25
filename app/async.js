exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    let newProm = new Promise(resolve => {
      setTimeout(() => resolve(value))
    })
    return newProm
  },

  manipulateRemoteData: function(url) {
    return fetch(url).
    then(res => res.json()).
    then(data => {
      let newData = [];
      for (let i = 0; i < data.people.length; i++) {
        newData[i] = data.people[i].name
      }

      return (newData.sort());
    })
  }
};

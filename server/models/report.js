var db = require('../db');

module.exports = {
  questionReported: function(params, callback) {
    var queryStr = 'update questions set reported = 1 where id = ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  answerReported: function(params, callback) {
    var queryStr = 'update answers set reported = 1 where id = ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
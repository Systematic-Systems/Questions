var db = require('../db');

module.exports = {
  getAnswers: function(params, callback) {
    var queryStr = 'select * from answers where question_id = ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  postAnswer: function(params, callback) {
    var queryStr = 'insert into answers (question_id, body, date_written, answerer_name, answerer_email) values (?, ?, ?, ?, ?)';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
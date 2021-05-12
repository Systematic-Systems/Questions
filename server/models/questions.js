var db = require('../db');

module.exports = {
  getQuestions: function(params, callback) {
    var queryStr = 'select * from questions where product_id = ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  postQuestion: function(params, callback) {
    var queryStr = 'insert into questions (product_id, body, date_written, asker_name, asker_email) values (?, ?, ?, ?, ?)';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
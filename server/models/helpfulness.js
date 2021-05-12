var db = require('../db');

module.exports = {
  questionHelpfulness: function(params, callback) {
    var queryStr = 'update questions set helpfulness = helpfulness + 1 where id = ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },
  answerHelpfulness: function(params, callback) {
    var queryStr = 'update answers set helpfulness = helpfulness + 1 where id = ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
var models = require('../models');

module.exports = {
  questionsPut: function(req, res) {
    var params = [req.body.question_id];
    models.report.questionReported(params, (err, results) => {
      res.json(results);
    })
  },
  answersPut: function(req, res) {
    var params = [req.body.answer_id];
    models.report.answerReported(params, (err, results) => {
      res.json(results);
    })
  }
}
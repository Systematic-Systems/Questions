var models = require('../models');

module.exports = {
  questionsPut: function(req, res) {
    var params = [req.body.question_id];
    models.helpfulness.questionHelpfulness(params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('Question was marked as helpful')
      }
    })
  },
  answersPut: function(req, res) {
    var params = [req.body.answer_id];
    models.helpfulness.answerHelpfulness(params, (err, results) => {
      console.log('err', err, 'result', results)
      if (err) {
        console.log('hiioiiiiii', err);
      } else {
        res.status(201).send('Answer was marked as helpful')
      }
    })
  }
}
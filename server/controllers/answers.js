var models = require('../models');
var moment = require('moment');

module.exports = {
  get: function(req, res) {
    let question_id = req.params.question_id;
    var params = [question_id];
    models.answers.getAnswers(params, (err, results) => {
      if (results.length < 1) {
        res.send('No answers found for this question.')
      } else {
        res.json(results);
      }
    })
  },
  post: function(req, res) {
    console.log('here', req.body)
    let date = moment(Date.now()).format('YYYY-MM-DD hh:mm:ss');
    let params = [req.body.question_id, req.body.body, date, req.body.answerer_name, req.body.answerer_email];
    models.answers.postAnswer(params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('Answer posted');
      }
    })
  }

}
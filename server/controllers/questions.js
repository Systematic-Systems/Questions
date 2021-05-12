var models = require('../models');
var moment = require('moment');

module.exports = {
  get: function(req, res) {
    let product_id = req.params.product_id;
    let params = [product_id];
    models.questions.getQuestions(params, (err, results) => {
      if (results.length < 1) {
        res.send('There are no questions for this product.')
      } else {
        res.json(results);
      }
    })
  },
  post: function(req, res) {
    let date = moment(Date.now()).format('YYYY-MM-DD hh:mm:ss');
    let params = [req.body.product_id, req.body.body, date, req.body.asker_name, req.body.asker_email];
    models.questions.postQuestion(params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).send('Question posted');
      }
    })
  }
}
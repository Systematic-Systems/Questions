var controller = require('./controllers');
// var questions = require('./controllers/questions')
var router = require('express').Router();

// QUESTIONS //

router.get('/qa/questions/:product_id', controller.questions.get);

router.post('/qa/questions', controller.questions.post);

router.put('/qa/questions/:question_id/helpful', controller.helpfulness.questionsPut);

router.put('/qa/questions/:question_id/report', controller.report.questionsPut);

// ANSWERS //

router.get('/qa/questions/:question_id/answers', controller.answers.get);

router.post('/qa/questions/:question_id/answers', controller.answers.post);

router.put('/qa/answers/:answer_id/helpful', controller.helpfulness.answersPut);

router.put('/qa/answers/:answer_id/report', controller.report.answersPut);

module.exports = router;
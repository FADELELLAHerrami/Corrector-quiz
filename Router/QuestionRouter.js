const express = require('express');

const {AjouteQuestion,ToutLesQuestions,UneQuestionParId} = require('../Controller/questionController');


const routerQuestion = express.Router();

routerQuestion.get('/',ToutLesQuestions);
routerQuestion.post('/', AjouteQuestion);
routerQuestion.get('/:_id',UneQuestionParId);


module.exports = routerQuestion;

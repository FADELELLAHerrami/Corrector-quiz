const express = require('express');

const {AjouteQuestion,ToutLesQuestions,UneQuestionParId,ToutLesQuestionsDunUtilisateur,supprimerUneQuestion,updateQuestion} = require('../Controller/questionController');


const routerQuestion = express.Router();

routerQuestion.get('/getAll',ToutLesQuestions);
routerQuestion.get('/getAll/:user',ToutLesQuestionsDunUtilisateur);
routerQuestion.post('/', AjouteQuestion);
routerQuestion.get('/:_id',UneQuestionParId);
routerQuestion.delete('/:_id',supprimerUneQuestion);
routerQuestion.put('/:_id',updateQuestion);


module.exports = routerQuestion;

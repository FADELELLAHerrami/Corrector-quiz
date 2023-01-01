const express = require('express');

const {AjouteQuiz,ToutLesQuizs,UneQuizParId,ToutLesQuizsDunUtilisateur,supprimerUnQuiz,updateQuiz} = require('../Controller/quizController');


const routerQuiz = express.Router();

routerQuiz.get('/getAll',ToutLesQuizs);
routerQuiz.get('/getAll/:user',ToutLesQuizsDunUtilisateur);
routerQuiz.post('/', AjouteQuiz);
routerQuiz.get('/:_id',UneQuizParId);
routerQuiz.delete('/:_id',supprimerUnQuiz);
routerQuiz.put('/:_id',updateQuiz);


module.exports = routerQuiz;

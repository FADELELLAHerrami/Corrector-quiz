const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeUser = require('./Router/UserRouter');
const routeQuestion = require('./Router/QuestionRouter');
const routerQuiz = require('./Router/QuizRouter');


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Errami:Errami2001@cluster0.obsrglm.mongodb.net/CorrectionQuiz?retryWrites=true&w=majority')
.then(()=>console.log('connected to db '))
.catch(()=>console.log('unconnected to db'));

app.use(bodyParser.json());


app.use('/',routeUser);
app.use('/Question',routeQuestion);
app.use('/Quiz',routerQuiz);
























// GET / : Liste des quizs disponibles
app.get('/', (req, res) => {
  // Récupérez la liste des quizs disponibles ici
    res.json({'message': 'all Books'});
});




app.listen(4000,()=>console.log("the server is listenning"));
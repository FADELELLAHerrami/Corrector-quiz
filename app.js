const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeUser = require('./Router/UserRouter');
const routeQuestion = require('./Router/QuestionRouter');


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Errami:Errami2001@cluster0.obsrglm.mongodb.net/CorrectionQuiz?retryWrites=true&w=majority')
.then(()=>console.log('connected to db '))
.catch(()=>console.log('unconnected to db'));

app.use(bodyParser.json());


app.use('/',routeUser);
app.use('/Question',routeQuestion);
























// GET / : Liste des quizs disponibles
app.get('/', (req, res) => {
  // Récupérez la liste des quizs disponibles ici
    res.json({'message': 'all Books'});
});



















// GET /quiz : Récupérer la liste des quiz auxquels l'utilisateur est invité ou l'utilisateur est l'auteur
app.get('/quiz', (req, res) => {
  // Récupérez la liste des quiz auxquels l'utilisateur est invité ou l'utilisateur est l'auteur ici
  const quizList = [{ id: 1, name: 'Quiz 1' }, { id: 2, name: 'Quiz 2' }];

  res.json(quizList);
});

// POST /quiz : Créer un nouveau quiz
app.post('/quiz', (req, res) => {
  // Récupérez les données du quiz à partir du corps de la demande
  const quiz = req.body;

  // Ajoutez le quiz à votre base de données ici
  const newQuiz = { id: 3, name: 'Quiz 3' };

  res.json(newQuiz);
});

// DELETE /quiz/:id : Modifier un quiz
app.delete('/quiz/:id', (req, res) => {
  // Récupérez l'ID du quiz à partir de l'URL
  const quizId = req.params.id;

  // Récupérez les nouvelles données du quiz à partir du corps de la demande
  const updatedQuiz = req.body;

  // Mettez à jour le quiz dans votre base de données ici

  res.json(updatedQuiz);
});




app.listen(4000,()=>console.log("the server is listenning"));
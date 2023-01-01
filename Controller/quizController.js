const quizModel = require('../models/QuizModel');


//Ajouter une question
const AjouteQuiz = async (req, res) => {
    // Récupérez la liste des questions créées par l'utilisateur ici
    const {name,startDate,endDate,utilisateur,attemptsAllowed,attempts,questions} = req.body;
    console.log({name,startDate,endDate,utilisateur,attemptsAllowed,attempts,questions});
    const newQuiz = await quizModel.create({name,startDate,endDate,utilisateur,attemptsAllowed,attempts,questions});
    res.json(newQuiz);
  };
// Récuperer tout les questions
const ToutLesQuizs = async (req,res)=>{
    const ToutlesQuizs = await quizModel.find();
    res.json(ToutlesQuizs);
}


// Récuperer une questions par id
const UneQuizParId = async (req,res)=>{
    const quizId = req.params;
    const quiz = await quizModel.findById(quizId);
    res.json(quiz);
}



// Récupérer les questions d'un utilisateur
const ToutLesQuizsDunUtilisateur = async (req,res)=>{
    const utilisateur = req.params;
    const ToutlesQuizs = await quizModel.find({ utilisateur: utilisateur.user });
    console.log(ToutlesQuizs);
    res.json(ToutlesQuizs);
}
// suprimmer une question
const supprimerUnQuiz = async (req,res)=>{
    const quizId = req.params;
    const updatedQuiz = await quizModel.findByIdAndDelete(quizId);
    res.json(updatedQuiz);
}
// modifier une question
const updateQuiz = async (req,res)=>{
    const quizId = req.params;
    const {name,startDate,endDate,utilisateur,attemptsAllowed,attempts,questions} = req.body;
    const updatedQuiz = await quizModel.findByIdAndUpdate(quizId,{name,startDate,endDate,utilisateur,attemptsAllowed,attempts,questions});
    res.json(updatedQuiz);
};




module.exports = {
    AjouteQuiz,
    ToutLesQuizs,
    UneQuizParId,
    ToutLesQuizsDunUtilisateur,
    supprimerUnQuiz,
    updateQuiz

  };




const questionModel = require('../models/QuestionModel');


//Ajouter une question
const AjouteQuestion = async (req, res) => {
    // Récupérez la liste des questions créées par l'utilisateur ici
    const {type,difficulty,correctAnswer,incorrectAnswers,utilisateur} = req.body;
    const newQuestion = await questionModel.create({type,difficulty,correctAnswer,incorrectAnswers,utilisateur});
    res.json(newQuestion);
  };
// Récuperer tout les questions
const ToutLesQuestions = async (req,res)=>{
    const ToutlesQuestions = await questionModel.find();
    res.json(ToutlesQuestions);
}


// Récuperer une questions par id
const UneQuestionParId = async (req,res)=>{
    const questionId = req.params;
    const question = await questionModel.findById(questionId);
    res.json(question);
}



// Récupérer les questions d'un utilisateur
const ToutLesQuestionsDunUtilisateur = async (req,res)=>{
    const utilisateur = req.params;
    console.log(utilisateur);
    const ToutlesQuestions = await questionModel.find({ utilisateur: utilisateur.user });
    res.json(ToutlesQuestions);
}
// suprimmer une question
const supprimerUneQuestion = async (req,res)=>{
    const questionId = req.params;
    const updatedQuestion = await questionModel.findByIdAndDelete(questionId);
    res.json(updatedQuestion);
}
// modifier une question
const updateQuestion = async (req,res)=>{
    const questionId = req.params;
    const {type,difficulty,correctAnswer,incorrectAnswers} = req.body;
    const updatedQuestion = await questionModel.findByIdAndUpdate(questionId,{type,difficulty,correctAnswer,incorrectAnswers});
    res.json(updatedQuestion);
};




module.exports = {
    AjouteQuestion,
    ToutLesQuestions,
    UneQuestionParId,
    ToutLesQuestionsDunUtilisateur,
    supprimerUneQuestion,
    updateQuestion

  };




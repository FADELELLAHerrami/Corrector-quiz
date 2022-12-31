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

module.exports = {
    AjouteQuestion,
    ToutLesQuestions,
    UneQuestionParId,
  };




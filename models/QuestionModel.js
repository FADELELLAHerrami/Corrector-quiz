const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['multiple', 'single', 'boolean']
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard']
  },
  correctAnswer: {
    type: String,
    required: true
  },
  incorrectAnswers: {
    type: [String],
    required: true
  },



  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true
  }

  
});



module.exports = mongoose.model('QuestionModel', questionSchema);



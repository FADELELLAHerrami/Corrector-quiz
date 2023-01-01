const mongoose = require('mongoose');


const quizSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    utilisateur: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    attemptsAllowed: {
      type: Number,
      required: true
    },
    attempts: [{
        utilisateur: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        date: Date,
        score: Number
    }],
    questions: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question"
    }]
  });
  module.exports = mongoose.model('Quiz', quizSchema);
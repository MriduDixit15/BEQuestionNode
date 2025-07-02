const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: { type: Map, of: String, required: true },
  isCorrect: { type: Boolean, default: false }
});

const questionSchema = new mongoose.Schema({
  text: { type: Map, of: String, required: true },
  options: { 
    type: [optionSchema], 
    validate: [
      {
        validator: v => v.length === 4,
        message: 'Exactly 4 options are required.'
      },
      {
        validator: v => v.filter(opt => opt.isCorrect).length === 1,
        message: 'Exactly one option must be marked as correct.'
      }
    ]
  }
});

module.exports = mongoose.model('Question', questionSchema);
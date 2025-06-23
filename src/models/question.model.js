const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: { type: Map, of: String, required: true },
  isCorrect: { type: Boolean, default: false }
});

const questionSchema = new mongoose.Schema({
  text: { type: Map, of: String, required: true },
  options: { type: [optionSchema], validate: v => v.length === 4 }
});

module.exports = mongoose.model('Question', questionSchema);
const Question = require('../models/question.model');

// Create Question
exports.createQuestion = async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Questions
exports.getAllQuestions = async (req, res) => {
  const lang = req.query.lang;
  const questions = await Question.find();
  if (lang) {
    // Return only requested language
    const localized = questions.map(q => ({
      _id: q._id,
      text: q.text.get(lang),
      options: q.options.map(o => ({
        text: o.text.get(lang),
        isCorrect: o.isCorrect
      }))
    }));
    return res.json(localized);
  }
  res.json(questions);
};

// Get Question by ID
exports.getQuestionById = async (req, res) => {
  const lang = req.query.lang;
  const q = await Question.findById(req.params.id);
  if (!q) return res.status(404).json({ error: 'Not found' });
  if (lang) {
    return res.json({
      _id: q._id,
      text: q.text.get(lang),
      options: q.options.map(o => ({
        text: o.text.get(lang),
        isCorrect: o.isCorrect
      }))
    });
  }
  res.json(q);
};

// Update Question
exports.updateQuestion = async (req, res) => {
  try {
    const q = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!q) return res.status(404).json({ error: 'Not found' });
    res.json(q);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Question
exports.deleteQuestion = async (req, res) => {
  const q = await Question.findByIdAndDelete(req.params.id);
  if (!q) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Deleted' });
};
const express = require('express');
const router = express.Router();
const controller = require('../controllers/question.controller');

router.post('/', controller.createQuestion);
router.get('/', controller.getAllQuestions);
router.get('/:id', controller.getQuestionById);
router.put('/:id', controller.updateQuestion);
router.delete('/:id', controller.deleteQuestion);

module.exports = router;
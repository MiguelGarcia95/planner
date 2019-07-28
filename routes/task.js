const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const task_controller = require('../controllers/task');

router.get('/', auth.validateToken, task_controller.index);
router.post('/', auth.validateToken, task_controller.create);
router.delete('/', auth.validateToken, task_controller.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const task_controller = require('../controllers/task');

router.get('/', task_controller.index);
router.post('/', task_controller.create);

module.exports = router;
const express = require('express');
const router = express.Router();
const task_controller = require('../controllers/task');

router.get('/:columnId', task_controller.index);
router.post('/:columnId', task_controller.create);


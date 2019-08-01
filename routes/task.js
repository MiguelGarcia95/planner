const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const task_controller = require('../controllers/task');

router.get('/', auth.validateToken, task_controller.index);
router.post('/', auth.validateToken, task_controller.create);
router.delete('/delete', auth.validateToken, task_controller.delete);
router.delete('/deleteColumnTasks', auth.validateToken, task_controller.deleteColumnTasks)
router.delete('/deleteBoardTasks', auth.validateToken, task_controller.deleteBoardTasks)
router.patch('/updateTask', auth.validateToken, task_controller.updateTask);

module.exports = router;
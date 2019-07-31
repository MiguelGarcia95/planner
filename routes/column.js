const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const column_controller = require('../controllers/column');

router.get('/', auth.validateToken, column_controller.index);
router.post('/', auth.validateToken, column_controller.create);
router.delete('/delete', auth.validateToken, column_controller.delete);
router.patch('/updateColumn', auth.validateToken, column_controller.updateColumn);
router.patch('/updateColumnTasks', auth.validateToken, column_controller.updateColumnTasks);
router.patch('/rearrangeColumnTasks', auth.validateToken, column_controller.rearrangeColumnTasks);


module.exports = router;
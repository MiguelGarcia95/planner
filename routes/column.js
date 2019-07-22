const express = require('express');
const router = express.Router();
const column_controller = require('../controllers/column');

router.get('/', column_controller.index);
router.post('/', column_controller.create);
router.patch('/updateColumnTasks', column_controller.updateColumnTasks);
router.patch('/rearrangeColumnTasks', column_controller.rearrangeColumnTasks);


module.exports = router;
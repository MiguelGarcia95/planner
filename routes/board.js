const express = require('express');
const router = express.Router();
const board_controller = require('../controllers/board');

router.get('/', board_controller.index);
router.post('/', board_controller.create);
router.get('/board', board_controller.show);
router.patch('/columnOrder', board_controller.columnOrder);

module.exports = router;  
const express = require('express');
const router = express.Router();
const board_controller = require('../controllers/board');

router.get('/', board_controller.index);
router.post('/', board_controller.create);
router.get('/board', board_controller.show);
router.patch('/updateBoardColumns', board_controller.updateBoardColumns);
router.patch('/rearrangeBoardColumns', board_controller.rearrangeBoardColumns);

module.exports = router;  
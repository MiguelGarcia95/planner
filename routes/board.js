const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const board_controller = require('../controllers/board');

router.get('/', auth.validateToken, board_controller.index);
router.post('/', auth.validateToken, board_controller.create);
router.get('/board', auth.validateToken, board_controller.show);
router.patch('/updateBoardColumns', auth.validateToken, board_controller.updateBoardColumns);
router.patch('/rearrangeBoardColumns', auth.validateToken, board_controller.rearrangeBoardColumns);

module.exports = router;  
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const board_controller = require('../controllers/board');

// const csp = require('helmet-csp');
// const app = express();

// app.use(csp({
//   directives: {
//     defaultSrc: ["'self'", 'https://react-draggable-planner.herokuapp.com/favicon.ico'],
//     scriptSrc: ["'self'", "'unsafe-inline'", 'https://kit.fontawesome.com/5f7fe36d22.js'],
//     styleSrc: ["'self'", "'unsafe-inline'", 'https://kit-free.fontawesome.com'],
//     fontSrc: ['https://kit-free.fontawesome.com'],
//     imgSrc: ["'self'", 'https://react-draggable-planner.herokuapp.com/favicon.ico', 'https:'],
//   }
// }))

router.get('/', auth.validateToken, board_controller.index);
router.post('/', auth.validateToken, board_controller.create);
router.get('/board', auth.validateToken, board_controller.show);
router.delete('/delete', auth.validateToken, board_controller.delete);
router.patch('/updatedBoard', auth.validateToken, board_controller.updatedBoard);
router.patch('/updateBoardColumns', auth.validateToken, board_controller.updateBoardColumns);
router.patch('/rearrangeBoardColumns', auth.validateToken, board_controller.rearrangeBoardColumns);

module.exports = router;  
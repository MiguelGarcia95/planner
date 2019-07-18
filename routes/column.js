const express = require('express');
const router = express.Router();
const column_controller = require('../controllers/column');

router.get('/:boardId', column_controller.index);
router.post('/:boardId', column_controller.create);


const express = require('express');
const router = express.Router();
const column_controller = require('../controllers/column');

router.get('/', column_controller.index);
router.post('/', column_controller.create);

module.exports = router;
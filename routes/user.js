const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');

router.post('/', user_controller.register);
router.post('/login', user_controller.login);
router.post('/logout', user_controller.logout);

module.exports = router;
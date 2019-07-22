const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/auth');

router.post('/', auth_controller.register);
router.post('/login', auth_controller.login);
router.post('/logout', auth_controller.logout);
router.post('/logoutAll', auth_controller.logoutAll);

module.exports = router;
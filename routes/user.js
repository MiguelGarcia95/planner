const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/', user_controller.register);
router.post('/login', user_controller.login);
router.post('/loginWithToken', auth.validateToken, user_controller.loginWithToken)
router.post('/logout', user_controller.logout);

module.exports = router;
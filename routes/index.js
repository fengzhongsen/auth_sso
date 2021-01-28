const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/account');

router.post('/register', AccountController.register);

router.post('/login', AccountController.login);

router.post('/change_pwd', AccountController.changePwd);

module.exports = router;

var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user');

router.get('/', UserController.get);

router.put('/', UserController.update);

router.delete('/', UserController.destroy);

module.exports = router;

var express = require('express');
var router = express.Router();
const user = require('../controllers/userController');

/* GET users listing. */
router.get('/', user.getAllUser);

module.exports = router;

var express = require('express');
var router = express.Router();
const user = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

/* GET users listing. */
router.get('/', user.getAllUser);
router.post('/filter', user.filterUser);
router.post('/signup', [userMiddleware.encryptPwd, user.createUser]);
router.post('/login', user.getLogin)

module.exports = router;

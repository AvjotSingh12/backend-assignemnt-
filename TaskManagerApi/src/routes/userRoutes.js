const express = require('express');
const router = express.Router();
const userControlller = require('../controllers/UserController')


router.post('/registerUser', userControlller.register)

router.post('/loginUser',userControlller.login);

module.exports = router;

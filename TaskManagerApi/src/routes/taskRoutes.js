const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController')


router.post('/add',  taskController.createTask)

router.get('/getUser',taskController.getTasks);

module.exports = router;

const router = require('express').Router();
const taskController = require('../controller/taskController');

router.get('/tasks', taskController.getTasks);
router.post('/create', taskController.createTask);

module.exports = router;

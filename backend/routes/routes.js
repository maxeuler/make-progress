const router = require('express').Router();
const taskController = require('../controller/taskController');
const segmentController = require('../controller/segmentController');
const authController = require('../controller/authController');

router.get('/tasks', taskController.getTasks);
router.get('/task/:id', taskController.getTaskDetails);
router.post('/createTask', taskController.createTask);
router.post('/addSegments', taskController.addSegments);
router.post('/delete', taskController.deleteTask);

router.post('/createSegment', segmentController.createSegment);

router.post('/signup', authController.signup);

module.exports = router;

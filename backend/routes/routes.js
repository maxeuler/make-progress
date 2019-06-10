const router = require('express').Router();
const taskController = require('../controller/taskController');
const segmentController = require('../controller/segmentController');

router.get('/tasks', taskController.getTasks);
router.get('/task/:id', taskController.getTaskDetails);
router.post('/createTask', taskController.createTask);
router.post('/addSegments', taskController.addSegments);

router.post('/createSegment', segmentController.createSegment);

module.exports = router;

const router = require('express').Router();
const taskController = require('../controller/taskController');
const segmentController = require('../controller/segmentController');
const authController = require('../controller/authController');
const { catchErrors } = require('../errorHandler');

router.get('/tasks', catchErrors(taskController.getTasks));
router.get('/task/:id', catchErrors(taskController.getTaskDetails));
router.post('/createTask', catchErrors(taskController.createTask));
router.post('/addSegments', catchErrors(taskController.addSegments));
router.post('/delete', catchErrors(taskController.deleteTask));

router.post('/createSegment', catchErrors(segmentController.createSegment));

router.post('/signup', catchErrors(authController.signup));

module.exports = router;

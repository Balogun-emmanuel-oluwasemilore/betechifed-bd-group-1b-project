const express = require('express');
const router = express.Router();
const validateTask = require('../middleware/validateTask');
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);
router.put('/:id', validateTask, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
const express = require('express');
const router = express.Router();
const validateTask = require('../middleware/validateTask');
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);
router.put('/:id', validateTask, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);


router.delete("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        success: true,
        data: deletedTask[0]
    });

});

module.exports = router;
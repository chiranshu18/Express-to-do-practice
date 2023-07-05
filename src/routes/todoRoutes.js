const express = require('express')
const router = express.Router();
const {
    getAllTasks,
    getActiveTasks,
    getCompletedTasks,
    getTaskById,
    postNewTask,
    updateTask,
    updateTaskField,
    deleteTaskById,
    deleteTasks
} = require('../controllers/todoControllers')

router.route('/').get(getAllTasks)
router.route('/active').get(getActiveTasks)
router.route('/completed').get(getCompletedTasks)
router.route('/:id').get(getTaskById)

router.route('/').post(postNewTask)
router.route('/:id').put(updateTask)
router.route('/:id').patch(updateTaskField)

router.route('/:id').delete(deleteTaskById)
router.route('/').delete(deleteTasks)

module.exports = router
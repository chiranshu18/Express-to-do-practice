const {
    getAllTasksServices,
    getActiveTasksServices,
    getCompletedTasksServices,
    getTaskByIdServices,
    postNewTaskServices,
    updateTaskServices,
    updateTaskFieldsServices,
    deleteTaskByIdServices,
    deleteTasksServices
} = require('../services/todoServices')

const getAllTasks = (req, res) => {
    const allTasks = getAllTasksServices();
    res.send(allTasks);
}
  
const getActiveTasks = (req, res) => {
    const activeTasks = getActiveTasksServices();
    res.send(activeTasks);
}

const getCompletedTasks = (req, res) => {
    const completedTasks = getCompletedTasksServices();
    res.send(completedTasks);
}

const getTaskById = (req, res) => {
    const id  = req.params.id;
    const taskById = getTaskByIdServices(id);
    res.send(taskById);
}

const postNewTask = (req, res) => {
    const data = req.body;;
    postNewTaskServices(data);
    res.send(data);
}

const updateTask = (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const tasks = updateTaskServices(data, id)
    res.send(tasks);
}

const updateTaskField = (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const tasks = updateTaskFieldsServices(data, id)    
    res.send(tasks);
}

const deleteTaskById = (req, res) => {
    const { id } = req.params
    const result = deleteTaskByIdServices(id)
    res.send(result)
}

const deleteTasks = (req, res) => {
    deleteTasksServices()
    res.send("list has been deleted")
}

module.exports = {
    getAllTasks,
    getActiveTasks,
    getCompletedTasks,
    getTaskById,
    postNewTask,
    updateTask,
    updateTaskField,
    deleteTaskById,
    deleteTasks
}
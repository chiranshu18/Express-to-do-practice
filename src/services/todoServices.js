const tasks = []

const getAllTasksServices = () => {
    return tasks
}

const getActiveTasksServices = () => {
    const temp = tasks.filter(obj => obj.isComplete === false);
    if(temp>0){
        return temp;
    }
    else{
        return 'No active tasks';
    }
}

const getCompletedTasksServices = () => {
    const temp = tasks.filter(obj => obj.isComplete === true);
    if(temp.length > 0){
        // res.send(temp)
        return temp
    }
    else{
        return 'No active tasks'
    }
}

const getTaskByIdServices = (id) => {
    const temp = tasks.filter(obj => obj.id === Number(id));
    if(temp.length > 0){
        return temp
    }
    else {
        return 'No such tasks available'
    }
}

const postNewTaskServices = (data) => {
    tasks.push({
        ...data,
        id:tasks.length + 1,
        isComplete: false
    });
}

const updateTaskServices = (data, id) => {
    const index = tasks.findIndex(obj => obj.id === Number(id))
    if (index > -1) { 
        tasks[index] =  { ...tasks[index], ...data } 
        return tasks
    }
    else{ 
        return "Invalid Id"
    }
}

const updateTaskFieldsServices = (data, id) => {
    const index = tasks.findIndex(obj => obj.id === Number(id))
    if (index > -1) { 
        tasks[index] =  { ...tasks[index], ...data } 
        return tasks
    }
    else{ 
        return "Invalid Id"
    }
}

const deleteTaskByIdServices = (id) => {
    const index = tasks.findIndex(obj => obj.id === Number(id));
    if(index > -1){
        tasks.splice(index, 1)
        return `tasks with id= ${id} has been deleted`

    }
    else{
        return ("this object is not available")
    }
}

const deleteTasksServices = () => {
    tasks.length = 0
}

module.exports = {
    getAllTasksServices,
    getActiveTasksServices,
    getCompletedTasksServices,
    getTaskByIdServices,
    postNewTaskServices,
    updateTaskServices,
    updateTaskFieldsServices,
    deleteTaskByIdServices,
    deleteTasksServices
}
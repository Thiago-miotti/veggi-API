const TaskRepository = require("../repository/task.repository");

async function createTask(description, status_id, user_id){
    await TaskRepository.createTask(description, status_id, user_id);
}

async function deleteTask(task_id){
    await TaskRepository.deleteTask(task_id);
}

async function updateTask(task_id, description, status_id){
    await TaskRepository.updateTask(task_id, description, status_id);
}



module.exports = {
    createTask: createTask,
    deleteTask:deleteTask,
    updateTask:updateTask
}
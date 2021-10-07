const TaskService = require('../services/task.service');


async function createTask(req, res){
    const { description, status_id, user_id } = req.body;

    await TaskService.createTask(description, status_id, user_id);

    res.send("Tarefa criada com sucesso !");
}

async function deleteTask(req, res){
    const { task_id } = req.params;

    await TaskService.deleteTask( task_id);

    res.send("Tarefa deletada com sucesso !");
}

async function updateTask(req, res){
    const { task_id,description, status_id } = req.body;

    await TaskService.updateTask( task_id, description, status_id);

    res.send("Tarefa atualizada com sucesso !");
}

module.exports = {
    createTask:createTask,
    deleteTask:deleteTask,
    updateTask:updateTask
}
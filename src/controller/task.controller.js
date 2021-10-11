const TaskService = require("../services/task.service");

async function createTask(req, res, next) {
  try {
    const { description, status_id, user_id } = req.body;

    await TaskService.createTask(description, status_id, user_id);

    res.status(201).send("Tarefa criada com sucesso !");
  } catch (e) {
    next(e);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { task_id } = req.params;

    await TaskService.deleteTask(task_id);

    res.status(200).send("Tarefa deletada com sucesso !");
  } catch (e) {
    next(e);
  }
}

async function updateTask(req, res, next) {
  try {
    const { task_id } = req.params;
    const { user_id, description, status_id } = req.body;

    await TaskService.updateTask(task_id, description, status_id, user_id);

    res.status(200).send("Tarefa atualizada com sucesso !");
  } catch (e) {}
}

module.exports = {
  createTask: createTask,
  deleteTask: deleteTask,
  updateTask: updateTask,
};

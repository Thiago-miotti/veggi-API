const {
  ApplicationError,
  CommonHTTPExceptions,
} = require("@pedromiotti/exerror");

const { CustomExceptions } = require("../utils/exceptions/customExceptions");

const TaskRepository = require("../repository/task.repository");
const UserService = require("./user.service");

async function createTask(description, status_id, user_id) {
  if (!description || !status_id || !user_id)
    throw new ApplicationError(CustomExceptions.MISSING_INFORMATION);

  try {
    let user = await UserService.getUser(user_id);
    console.log(user)
    if (!user) throw new ApplicationError(CustomExceptions.USER_NOT_FOUND);

    await TaskRepository.createTask(description, status_id, user_id);
  } catch (e) {
    throw new ApplicationError(e);
  }
}

async function deleteTask(task_id) {
  if (!task_id) throw new ApplicationError(CommonHTTPExceptions.BAD_REQUEST);

  try {
    await TaskRepository.deleteTask(task_id);
  } catch (e) {
    throw new ApplicationError(e);
  }
}

async function updateTask(task_id, description, status_id, user_id) {
  if (!task_id) throw new ApplicationError(CommonHTTPExceptions.BAD_REQUEST);

  try {
    await TaskRepository.updateTask(task_id, description, status_id, user_id);
  } catch (e) {
    throw new ApplicationError(e);
  }
}

module.exports = {
  createTask: createTask,
  deleteTask: deleteTask,
  updateTask: updateTask,
};

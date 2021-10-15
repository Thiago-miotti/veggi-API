const UserService = require("../services/user.service");

async function listUsers(req, res, next) {
  try {
    const users = await UserService.listUsers();

    res.status(200).send(users);

  } catch (e) {
    next(e);
  }
}

async function createUser(req, res, next) {
  try {
    const { name } = req.body;

    await UserService.createUser(name);

    res.status(201).send("Usuario criado com sucesso !");
  } catch (e) {
    next(e);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { user_id } = req.params;

    await UserService.deleteUser(user_id);

    res.status(200).send("Usuario deletado com sucesso !");
  } catch (e) {
    next(e);
  }
}

async function getUserById(req, res, next) {
  try {
    const { user_id } = req.params;

    const user = await UserService.getUserById(user_id);

    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
}

async function getTasksByUser(req, res, next) {
  try {
    const { user_id } = req.params;

    const tasks = await UserService.getTasksByUser(user_id);

    res.status(200).send(tasks);
    
  } catch (e) {
    next(e);
  }
}

module.exports = {
  listUsers: listUsers,
  createUser: createUser,
  deleteUser: deleteUser,
  getUserById: getUserById,
  getTasksByUser: getTasksByUser,
};

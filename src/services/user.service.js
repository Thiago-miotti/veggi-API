const {
  ApplicationError,
  CommonHTTPExceptions,
} = require("@pedromiotti/exerror");

const { CustomExceptions } = require("../utils/exceptions/customExceptions");

const UserRepository = require("../repository/user.repository");

async function listUsers() {
  let users;

  try {
    users = await UserRepository.listUsers();
  } catch (e) {
    throw new ApplicationError(e);
  }

  return users;
}

async function createUser(name) {
  if (!name) throw new ApplicationError(CustomExceptions.MISSING_INFORMATION);

  try {
    await UserRepository.createUser(name);
  } catch (e) {
    throw new ApplicationError(e);
  }
}

async function deleteUser(user_id) {
  if (!user_id) throw new ApplicationError(CommonHTTPExceptions.BAD_REQUEST);

  try {
    let user = await UserRepository.getUserById(user_id);
    if(user.length === 0) throw new ApplicationError(CustomExceptions.USER_NOT_FOUND);

    await UserRepository.deleteUser(user_id);
  } catch (e) {
    throw new ApplicationError(e);
  }
}

async function getUserById(user_id) {
  let user;

  if (!user_id) throw new ApplicationError(CommonHTTPExceptions.BAD_REQUEST);

  try {
    user = await UserRepository.getUserById(user_id);
  } catch (e) {
    throw new ApplicationError(e);
  }

  return user;
}

async function getTasksByUser(user_id) {
  let tasks;

  if (!user_id) throw new ApplicationError(CommonHTTPExceptions.BAD_REQUEST);

  try {
    tasks = await UserRepository.getTasksByUser(user_id);
  } catch (e) {
    throw new ApplicationError(e);
  }

  return tasks;
}

module.exports = {
  listUsers: listUsers,
  createUser: createUser,
  deleteUser: deleteUser,
  getUserById: getUserById,
  getTasksByUser: getTasksByUser,
};

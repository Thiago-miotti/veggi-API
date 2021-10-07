const UserRepository = require("../repository/user.repository");

async function listUsers(){
    const users = await UserRepository.listUsers();
    return users;
}

async function createUser(name){
    await UserRepository.createUser(name);
}

async function deleteUser(user_id){
    await UserRepository.deleteUser(user_id);
}

module.exports = {
    listUsers: listUsers,
    createUser: createUser,
    deleteUser: deleteUser
}
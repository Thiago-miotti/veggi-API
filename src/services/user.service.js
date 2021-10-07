const UserRepository = require("../repository/user.repository");

async function listUsers(){
    const users = await UserRepository.listUsers();
    return users;
}

async function createUser(name){
    await UserRepository.createUser(name);
}

module.exports = {
    listUsers: listUsers,
    createUser: createUser
}
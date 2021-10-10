const { ApplicationError, CommonHTTPExceptions } = require('@pedromiotti/exerror');

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

async function getUser(user_id){
    const user = await UserRepository.getUser(user_id);
    return user;
}

async function getTasksByUser(user_id){
    let tasks;

    if(!user_id)
            throw new ApplicationError(CommonHTTPExceptions.BAD_REQUEST);

    try{
        tasks = await UserRepository.getTasksByUser(user_id);
    }
    catch(e){
        throw new ApplicationError(e); 
    }

    return tasks;
}

module.exports = {
    listUsers: listUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    getUser: getUser,
    getTasksByUser: getTasksByUser 
}
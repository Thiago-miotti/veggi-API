const UserService = require('../services/user.service');


async function listUsers(req, res, next){
    const users = await UserService.listUsers();
    res.send(users);
}

async function createUser(req, res, next){
    const { name } = req.body;

    await UserService.createUser(name);

    res.send("Usuario criado com sucesso !");
}

async function deleteUser(req, res, next){
    const { user_id } = req.params;

    await UserService.deleteUser(user_id);

    res.send("Usuario deletado com sucesso !");
}

async function getUser(req, res, next){
    const { user_id } = req.params;

    const user = await UserService.getUser(user_id);

    res.send(user);
}

async function getTasksByUser(req, res, next){
    try{
        const { user_id } = req.params;

        const tasks = await UserService.getTasksByUser(user_id);
    
        res.send(tasks);
    }
    catch(e){
        next(e);
    }
    
}



module.exports = {
    listUsers: listUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    getUser: getUser,
    getTasksByUser: getTasksByUser
}
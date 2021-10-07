const UserService = require('../services/user.service');


async function listUsers(req, res){
    const users = await UserService.listUsers();
    res.send(users);
}

async function createUser(req, res){
    const { name } = req.body;

    await UserService.createUser(name);

    res.send("Usuario criado com sucesso !");
}

async function deleteUser(req, res){
    const { user_id } = req.params;

    await UserService.deleteUser(user_id);

    res.send("Usuario deletado com sucesso !");
}

async function getUser(req, res){
    const { user_id } = req.params;

    const user = await UserService.getUser(user_id);
    res.send(user);
}



module.exports = {
    listUsers: listUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    getUser: getUser
}
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


module.exports = {
    listUsers: listUsers,
    createUser: createUser
}
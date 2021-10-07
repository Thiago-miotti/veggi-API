const Sql = require("../infra/sql");

async function listUsers(){
    let users;

    await Sql.conectar(async (sql) => {
        users = await sql.query("SELECT * FROM user");
    })

    return users;
}

async function createUser(name){
    await Sql.conectar(async (sql) => {
       await sql.query("INSERT INTO user (user_name) VALUES(?)", [name]);
    })
}

async function deleteUser(user_id){
    await Sql.conectar(async (sql) => {
       await sql.query("DELETE FROM user WHERE user_id = ?", [parseInt(user_id)]);
    })
}
module.exports = {
    listUsers: listUsers,
    createUser: createUser,
    deleteUser: deleteUser
}
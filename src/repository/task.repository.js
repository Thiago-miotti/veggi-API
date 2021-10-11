const Sql = require("../infra/sql");

async function createTask(description, status_id, user_id) {
  await Sql.conectar(async (sql) => {
    await sql.query(
      "INSERT INTO task (task_description,task_status_id, user_id) VALUES(?, ?, ?)",
      [description, status_id, parseInt(user_id)]
    );
  });
}

async function deleteTask(task_id) {
  await Sql.conectar(async (sql) => {
    await sql.query("DELETE FROM task WHERE task_id = ?", [parseInt(task_id)]);
  });
}

async function updateTask(task_id, description, status_id, user_id) {
  await Sql.conectar(async (sql) => {
    await sql.query(
      "UPDATE task SET task_description = ?, task_status_id = ?, user_id = ? WHERE task_id = ? ",
      [description, status_id, user_id, parseInt(task_id)]
    );
  });
}

module.exports = {
  createTask: createTask,
  deleteTask: deleteTask,
  updateTask: updateTask,
};

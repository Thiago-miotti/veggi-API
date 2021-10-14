const express = require("express");
const router = express.Router();

const TaskControler = require("../controller/task.controller");

router.get("/", async (req, res, next) => {
  await TaskControler.getAllTasks(req, res, next);
});

router.post("/", async (req, res, next) => {
  await TaskControler.createTask(req, res, next);
});

router.delete("/:task_id", async (req, res, next) => {
  await TaskControler.deleteTask(req, res, next);
});

router.put("/:task_id", async (req, res, next) => {
  await TaskControler.updateTask(req, res, next);
});

module.exports = router;

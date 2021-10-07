const express = require('express');
const router = express.Router();

// Controllers
const TaskControler = require('../controller/task.controller');

router.post("/",async (req, res) => {
    await TaskControler.createTask(req, res)
})

router.delete("/:task_id",async (req, res) => {
    await TaskControler.deleteTask(req, res)
});

router.put("/update",async (req, res) => {
    await TaskControler.updateTask(req, res)
});



module.exports = router;
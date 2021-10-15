const express = require("express");
const router = express.Router();

// Controllers
const UserControler = require("../controller/user.controller");

router.get("/", async (req, res, next) => {
  await UserControler.listUsers(req, res, next);
});

router.post("/", async (req, res, next) => {
  await UserControler.createUser(req, res, next);
});

router.delete("/:user_id", async (req, res, next) => {
  await UserControler.deleteUser(req, res, next);
});

router.get("/:user_id", async (req, res, next) => {
  await UserControler.getUserById(req, res, next);
});

router.get("/tasks/:user_id", async (req, res, next) => {
  await UserControler.getTasksByUser(req, res, next);
});

module.exports = router;

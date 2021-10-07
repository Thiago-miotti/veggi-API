const express = require('express');
const router = express.Router();

// Controllers
const UserControler = require('../controller/user.controller');

router.get("/all",async (req, res) => {
    await UserControler.listUsers(req, res)
});

router.post("/create",async (req, res) => {
    await UserControler.createUser(req, res)
});

router.post("/delete",async (req, res) => {
    await UserControler.deleteUser(req, res)
});


module.exports = router;
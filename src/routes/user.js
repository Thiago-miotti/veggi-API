const express = require('express');
const router = express.Router();

// Controllers
const UserControler = require('../controller/user.controller');

router.get("/all",async (req, res) => {
    await UserControler.listUsers(req, res)
});

router.post("/",async (req, res) => {
    await UserControler.createUser(req, res)
});


module.exports = router;
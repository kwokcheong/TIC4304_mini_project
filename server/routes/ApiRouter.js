const express = require("express");
const { showUsers, addUser } = require("../controllers/usersControllers");

const router = express.Router();

// Routes for Users
router.get("/users/show", showUsers);
router.post("/users/add", addUser);

module.exports = router;

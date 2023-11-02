const express = require("express");
const { login, logout, status } = require("../controllers/authController");

const authRouter = express.Router();

// Routes for login
authRouter.post("/login", login);
authRouter.get("/status", status);
authRouter.post("/logout", logout);

module.exports = authRouter;

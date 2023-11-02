const express = require("express");
const {
  showUsers,
  addUser,
  findUser,
  findUserByRawSQL,
} = require("../controllers/usersController");

const userRouter = express.Router();

// const requireAuth = (req, res, next) => {
//   console.log("CHECKING AUTH: " + req.session.user);
//   if (!req.session.user) {
//     return res.status(401).json({ error: "Not authenticated" });
//   }

//   next();
// };

// Routes for Users
userRouter.get("/show", showUsers);
userRouter.post("/add", addUser);
userRouter.get("/search", findUser);
userRouter.get("/dangerouslySearch", findUserByRawSQL);

module.exports = userRouter;

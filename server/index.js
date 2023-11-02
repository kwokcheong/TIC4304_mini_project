const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cookieParser = require("cookie-parser");
const db = require("./models");
const app = express();
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const passport = require("passport");

app.use(express.json());

// CORS middleware is used to configure your API to allow requests from other domains or to restrict access.
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

let sessionStore = new SequelizeStore({
  db: db.sequelize,
});

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
      secure: "auto",
    },
  })
);

sessionStore.sync();

app.use(cookieParser());
// UrlencodedParser is used to parse data coming from HTML form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/session", (req, res) => {
  res.send({ sessionId: req.sessionID, session: req.session });
});

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});

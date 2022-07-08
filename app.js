const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const session = require("express-session");
// const RedisStore = require("connect-redis")(session);

const articleRouter = require("./routes/article");
const userRouter = require("./routes/user");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// const redisClient = require("./db/redis");
// const sessionStore = new RedisStore({
//   client: redisClient
// });

// app.use(session({
//   secret: "WJiol_1576#",
//   cookie: {
//     path: "/",
//     httpOnly: true,
//     maxAge: 24 * 60 * 60 * 1000
//   },
//   store: sessionStore
// }));

app.use("/api/article", articleRouter);
app.use("/api/user", userRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "dev" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

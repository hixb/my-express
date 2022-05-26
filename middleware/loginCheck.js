const { ErrorModle } = require("../model/resModel");

module.exports = (req, res, next) => {
  if (req.session.username) {
    next();
    return;
  }
  res.json(
    new ErrorModle("未登录")
  );
};

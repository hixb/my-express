const express = require("express");
const router = express.Router();
const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

/**
 * 获取文章列表
 */
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  return login(username, password).then(data => {
    if (data.username) {
      // 设置 session
      req.session.username = data.username;
      req.session.realname = data.realname;

      res.json(new SuccessModel("", "success"));
      return;
    }
    res.json(new ErrorModel("登录失败"));
  });
});

router.get("/login-test", (req, res, next) => {
  if (req.session.username) {
    res.json({
      status: 0,
      message: "登录成功"
    });
    return;
  }
  res.json({
    status: 1,
    message: "没有登录"
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { getList, getDetail, newArticle, updateArticle, delArticle } = require("../controller/article");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck");
/**
 * 获取文章列表
 */
router.get("/list", (req, res, next) => {
  let author = req.query.author || "";
  const keyword = req.query.keyword || "";

  if (req.query.isadmin) {
    // 管理员界面
    if (req.session.username == null) {
      // 未登录
      res.json(new ErrorModel("未登录"));
      return;
    }

    // 强制查询自己的文章
    author = req.session.username;
  }

  return getList(author, keyword).then(listData => {
    res.json(new SuccessModel(listData, "success"));
  });
});

/**
 * 获取文章详情
 */
router.get("/detail", (req, res, next) => {
  return getDetail(req.query.id).then(data => {
    res.json(new SuccessModel(data, "success"));
  });
});

/**
 * 新建文章
 */
router.post("/new", loginCheck, (req, res, next) => {
  req.body = req.session.username;
  return newArticle(req.body).then(data => {
    res.json(new SuccessModel(data, "success"));
  });
});

/**
 * 更新文章
 */
router.post("/update", loginCheck, (req, res, next) => {
  return updateArticle(req.query.id, req.body).then(val => {
    res.json(val ? new SuccessModel("", "success") : new ErrorModel("更新失败"));
  });
});

/**
 * 删除文章
 */
router.post("/del", loginCheck, (req, res, next) => {
  const author = req.session.username;
  return delArticle(req.query.id, author).then(val => {
    res.json(val ? new SuccessModel("", "success") : new ErrorModel("删除失败"));
  });
});

module.exports = router;

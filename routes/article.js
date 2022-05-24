const express = require("express");
const router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require("../controller/article");
const { SuccessModel, ErrorModel } = require("../model/resModel");

/**
 * 获取文章列表
 */
router.get("/list", (req, res, next) => {
  const author = req.query.author || "";
  const keyword = req.query.keyword || "";
  return getList(author, keyword).then(listData => {
    res.json(new SuccessModel(listData, "success"));
  });
});

/**
 * 获取文章详情
 */
router.get("/detail", (req, res, next) => {
  res.json({
    status: 0,
    data: "ok",
  });
});

/**
 *
 */
router.get("/detail", (req, res, next) => {
  res.json({
    status: 0,
    data: "ok",
  });
});

module.exports = router;

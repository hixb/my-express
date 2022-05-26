const xss = require("xss");
const { exec, escape } = require("../db/mysql");

/**
 * 获取列表
 * @param author
 * @param keyword
 * @returns {Promise<unknown>}
 */
const getList = (author, keyword) => {
  let sql = "select * from blogs where 1=1 ";
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += "order by createtime desc;";

  return exec(sql);
};

/**
 * 获取文章详情
 * @param id
 * @returns {Promise<unknown>}
 */
const getDetail = (id) => {
  const sql = `select * from blogs where id=${id}`;
  return exec(sql).then(rows => {
    return rows[0];
  });
};

/**
 * 新建文章
 * @param blogData
 * @returns {Promise<{id: *}>}
 */
const newArticle = (blogData = {}) => {
  const title = xss(escape(blogData.title));
  const content = xss(escape(blogData.content));
  const author = blogData.author;
  const createTime = Date.parse(new Date());

  const sql = `
    insert into blogs (title, content, createTime, author) 
    values (${title}, ${content}, '${createTime}', '${author}')
    `;

  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    };
  });
};

/**
 * 更新文章
 * @param id
 * @param blogData
 * @returns {Promise<boolean>}
 */
const updateArticle = (id, blogData = {}) => {
  blogData = escape(blogData);
  const title = blogData.title;
  const content = blogData.content;

  const sql = `
    update blogs set title='${title}', content='${content}' where id=${id}
  `;

  return exec(sql).then(updateData => {
    return updateData.affectedRows > 0;
  });
};

/**
 * 删除文章
 * @param id
 * @param author
 * @returns {Promise<boolean>}
 */
const delArticle = (id, author) => {
  id = escape(id);
  author = escape(author);
  const sql = `delete from blogs where id=${id} and author='${author}';`;
  return exec(sql).then(delData => {
    return delData.affectedRows > 0;
  });
};

module.exports = {
  getList,
  getDetail,
  newArticle,
  updateArticle,
  delArticle
};

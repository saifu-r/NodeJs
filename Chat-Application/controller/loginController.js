function getLogin(req, res, next) {
  res.render("index");
  next();
}

module.exports = {
  getLogin,
};

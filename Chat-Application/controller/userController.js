function getUser(req, res, next) {
    res.render("users");
    next();
  }
  
  module.exports = {
    getUser,
  };
  
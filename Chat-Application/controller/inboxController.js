function getInbox(req, res, next) {
    res.render("inbox");
    next();
  }
  
  module.exports = {
    getInbox,
  };
  
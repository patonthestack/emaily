module.exports = (req, res, next) => {
  if (!req.user) {
    // code HTTP401 is unauthorized user
    return res.status(401).send({ error: "You must log in!" });
  }
  //if everything is good move on
  next();
};

module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    //code HTTP403 is forbidden request
    return res.status(403).send({ error: "Not enough credits!" });
  }
  //if everything is good move on
  next();
};

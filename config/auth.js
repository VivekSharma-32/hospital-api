const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports.checkAuthentication = function (req, res, next) {
  const data = req.headers.authorization;
  const token = data.split(" ")[1];
  const decode = jwt.verify(token, secret);
  if (decode.length <= 0) {
    return res.send("Jwt token expire");
  }
  next();
};

const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).send("Access denied. Token not found.");
  }

  try {
    const verified = jwt.verify(token, "shahidd");
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("Invalid token.");
  }
}

module.exports = verifyToken;

const jwt = require("jsonwebtoken");
const isAdmin = (req, res, next) => {
  try {
    auth(req, res, () => {
      if (req.user.isAdmin === true) {
        next();
      } else {
        return res.status(401).json({ msg: "Admin resources access denied" });
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { isAdmin, auth };

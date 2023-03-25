const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authorization = req.get("Authorization");
  if (!authorization) {
    let error = new Error("not authorized.");
    let response = {
      status: "Un Authorized.",
      msg: error.message,
      error: error,
    };
    return res.status(401).json(response);
  }
  let token = authorization.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesecret101");
  } catch (error) {
    let response = {
      status: "Error",
      msg: error.message,
      error: error,
    };
    return res.status(500).json(response);
  }

  if (!decodedToken) {
    let error = new Error("not authorized.");
    let response = {
      status: "Un Authorized.",
      msg: error.message,
      error: error,
    };
    return res.status(401).json(response);
  }
  next();
};

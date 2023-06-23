const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');

    if (!authHeader) {
      const err = new Error("Not authenticated");
      throw err;
    }

    const token = authHeader.split(" ")[1];

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, "secretkey");
    } catch (error) {
      const err = new Error("Not authenticated");
      throw err;
    }

    if (!decodedToken) {
      const err = new Error("Not Authenticated");
      throw err;
    }

  } catch (error) {
    next(error);
  }
};

module.exports = isAuthenticated;

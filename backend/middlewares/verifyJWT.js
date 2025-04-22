const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "unauthorized - no token" });
  }

  console.log('Token from cookie:', token);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message:` Forbidden: ${err.message} `});

    req.user = decoded;
    next();
  });
};

module.exports = verifyJWT;
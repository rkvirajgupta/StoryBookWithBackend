require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      // jwt.verify(token, "hello", (err,decoded) => {

      if (err) return reject(err);

      return resolve(decoded);
    });
  });
};

const authenticate = async (req, res, next) => {
  // console.log(req.headers.authorization)
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect1" });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect2" });

  const token = req.headers.authorization.trim().split(" ")[1];

  let decoded;
  try {
    decoded = await verifyToken(token);
  } catch (err) {
    // console.log(err);
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect3" });
  }

//   console.log(decoded);

//   req.user = decoded.user;
//   console.log(req);
  return next();
};

module.exports = authenticate;

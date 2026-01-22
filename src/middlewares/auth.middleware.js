// import jwt from "jsonwebtoken";

// const authenticate = (req, res, next) => {
//   // Get Authorization header from the request
//   const authHeader = req.headers.authorization;

//   // If no Authorization header is provided, deny access
//   if (!authHeader) {
//     return res.status(401).json({
//       message: "Token not provided",
//     });
//   }

//   // Expected format: "Bearer <token>"
//   const token = authHeader.split(" ")[1];

//   // If token is missing or malformed, deny access
//   if (!token) {
//     return res.status(401).json({
//       message: "Invalid token format",
//     });
//   }

//   try {
//     // Verify token using the secret key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Attach decoded user data to the request object
//     // so it can be accessed in controllers
//     req.user = decoded;

//     // Continue to the next middleware or controller
//     next();
//   } catch (error) {
//     // Token is invalid or expired
//     return res.status(401).json({
//       message: "Invalid or expired token",
//     });
//   }
// };

// export default authenticate;

import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  let token = null;

  // 1️⃣ Try to get token from Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  // 2️⃣ If not found, try to get token from cookies (EJS / browser)
  if (!token && req.cookies?.token) {
    token = req.cookies.token;
  }

  // 3️⃣ If no token at all → deny access
  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authenticate;
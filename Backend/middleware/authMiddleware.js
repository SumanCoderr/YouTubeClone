import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // console.log("Token" ,token)
    const token = req.headers["authorization"]?.split(" ")[1]; // Assuming token is in the "Authorization: Bearer <token>" header
    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    try { 
      const decoded = jwt.verify(token, "myKey"); // Use the same secret as used during login
      console.log(token)
      req.user = decoded; // Attach user info (id) to the request object
      next();
    } catch (error) {
      console.log(error)
        return res.status(401).json({ message: "Unauthorized" });
    }
};

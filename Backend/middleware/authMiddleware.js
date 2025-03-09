import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Assuming token is in the "Authorization: Bearer <token>" header
console.log("Token" ,token)
    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    try { 
      const decoded = jwt.verify(token, "myKey"); // Use the same secret as used during login
      console.log("hello")
        req.user = decoded; // Attach user info (id) to the request object
        console.log(req.user)
        next();
    } catch (error) {
      console.log(error)
        return res.status(401).json({ message: "Unauthorized" });
    }
};

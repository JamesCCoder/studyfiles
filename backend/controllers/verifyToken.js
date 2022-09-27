import jwt from "jsonwebtoken";

export const auth = (req, res, next) =>{
   const token = req.header("auth-token");
   if(!token) return res.status(401).send("Access Denied");
   const verified = jwt.verify(token, process.env.TOKEN);
   req.user = verified;
   next();
}
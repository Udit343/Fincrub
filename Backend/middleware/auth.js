const jwt=require("jsonwebtoken");
const {newModel}=require("../model/newModel");

module.exports=async function auth(req,res,next){
       try{
        const authHeader=req.headers.authorization || "";
        const token=authHeader.startsWith("Bears")
        ? authHeader.split(" ")[1]
      : null;

       if(!token) return res.status(401).json({ error: "No token provided" });

       const decoded = jwt.verify(token, process.env.JWT_SECRET);
       if (!decoded || !decoded.id) return res.status(401).json({ error: "Invalid token" });
       req.userId = decoded.id;
    const user = await newModel.findById(req.userId).select("-password");
    if (!user) return res.status(401).json({ error: "User not found" });

    req.user = user;
    next();

       }catch (err) {
    console.error("Auth middleware error:", err.message || err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
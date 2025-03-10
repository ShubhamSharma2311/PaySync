const jwt = require('jsonwebtoken');
const JWT_SECRET = require("../config")


 async function authMiddleware (req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            msg : "Invalid Input"
        })
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded =  jwt.verify(token , JWT_SECRET)
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(403).json({
            msg : "there is an issue"
        })
    
    }

}

module.exports = { authMiddleware}
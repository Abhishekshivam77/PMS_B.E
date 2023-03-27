const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.header.authorization
    if(token){
        jwt.verify(token,"evaluation",(err,decoded)=>{
            if(decoded){
                req.body.userId=decode.userId
            }else{
                res.send({"msg":"Login First"})
            }
        })

    } else{
        res.send({"msg":"Login First"})
    }
}

module.exports = {
    auth
};
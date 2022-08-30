const jwt = require("jsonwebtoken")

const mid = function (req, res, next) {
    let token = req.headers["x-auth-token"];
     if (!token) { 
        return res.status(400).send({ msg: "token must be present" }) }
        let decodedToken =jwt.verify(token,"HAKUNAMATATA-NO-WORRIES;)")
    let userloggedIn=decodedToken.userId
    let fetchNmodify=req.params.userId
    if(userloggedIn!=fetchNmodify) {
       return res.status(403).send({ERROR:"user Logged in is not allowed"})
    }else{
        next ()
    }}
  

module.exports={mid}
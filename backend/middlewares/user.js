const jwt = require('jsonwebtoken');

const usermiddleware = (req,res,next)=>{
    const token = req.headers.authorization;
    const word = token.split(" ");
    const finalToken = word[1];
    const verified = jwt.verify(finalToken , "my_secret");
    if(verified.username){
        next()
    }
    else{
        res.status(411).json({
            msg : "Unauthorized access"
        })
    }
}

module.exports = usermiddleware;
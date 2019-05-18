//引入jsonwebtoken
const jwt = require("jsonwebtoken");
//创建token
const createToken = (tokenInfo,secrect)=>{
    return jwt.sign(tokenInfo,secrect,{expiresIn: 60 * 60});
}

//从客户端获取到的cookie值   secret  
const tokenVerify = (token,secret,cb)=>{
    jwt.verify(token, secret,function(err,decoded) {
        cb(err)
        // decoded解密过后的token值
    });
}


module.exports = {
    createToken,
    tokenVerify
}
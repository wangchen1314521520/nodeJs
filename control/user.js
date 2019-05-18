const userModel = require("../model/user")
// 密码的加密   eg常用的加密方式:md5,sha256
//1.引入node的核心模块
const crypto = require("crypto");
//引入jsonwebtoken
// const jwt = require("jsonwebtoken");

const utils = require("../utils/token");
const register = (req,res)=>{
    //获取用户名和密码
    const {username,password} = req.body;
    //查看用户名称是否存在
    userModel.findUser({username},(result)=>{
        if(result){
            res.json({
                state:false,
                info:"用户名已存在"
            })
        }else{
            // 创建sha256算法
            const hash = crypto.createHash('sha256');
            // 需要加密的文件
            hash.update(password);
            
            // 得到加密的文件
            // console.log(hash.digest('hex'));
            // {
            //     username:username,
            //     password:hash.digest('hex')
            // }
            userModel.saveUser({username,password:hash.digest('hex')},()=>{
               res.json({
                    state:true,
                    info:"注册成功"
                });
            })
        }
    })
}


const login = (req,res)=>{
    const {username,password} = req.body;
    //  console.log(password);
    userModel.findUser({username},(result)=>{
       
        if(result){
            // 创建sha256算法
            const hash = crypto.createHash('sha256');
            // 需要加密的文
             hash.update(password);
            // 得到加密的文件
            // console.log(hash.digest('hex'));

            if(result.password == hash.digest('hex')){

                const token  = utils.createToken({user:username},"1901");
                res.cookie("token",token);
                res.cookie("user",username);

                res.json({
                    state:true,
                    info:"登录成功"
                })
            }else{
                res.json({
                    state:false,
                    info:"登录失败，用户名或密码错误"
                })
            }
        }else{
            res.json({
                state:false,
                info:"用户名不存在"
            })
        }
    })

}
module.exports = {
    register,
    login
}
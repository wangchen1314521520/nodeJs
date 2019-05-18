
const path = require("path");
const jobModel = require("../model/job");
const cookie = require("../utils/getCookie");
const JWTToken = require("../utils/token");

const addjob = (req,res)=>{
    // console.log(req.body);//文本信息的获取
    // console.log(req.files);//文件信息的接收
    const {jobName,jobPrice,jobAsk,companyName} = req.body;
    const jobLogo = req.files.jobLogo[0].path;
    const url ="http://127.0.0.1:3000/img/"+path.parse(jobLogo).base;
    // console.log(path);
    // console.log()
    console.log(req.headers.cookie);

    // const token = cookie.getCookie(req,"token");
    // JWTToken.tokenVerify(token,"1901",function(err){
    //     if(err){
    //         res.json({
    //             state:false,
    //             info:"token过期，请重新登录"
    //         })
    //     }else{
    //         jobModel.jobSave({jobName,jobPrice,jobAsk,companyName,jobLogo:url},()=>{
    //         res.json({
    //             state:true,
    //             info:"添加成功" 
    //         })
    //     })  
    //     }
    // })
    jobModel.jobSave({jobName,jobPrice,jobAsk,companyName,jobLogo:url},()=>{
                res.json({
                    state:true,
                    info:"添加成功" 
                })
    });
}
module.exports = {
    addjob
}
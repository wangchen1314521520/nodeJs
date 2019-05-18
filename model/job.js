const mongoose  = require("../db/database").mongoose;


const Job = mongoose.model("job",{
    jobName:String,
    jobPrice:Number,
    jobAsk:String,
    companyName:String,
    jobLogo:String
})

const jobSave = (jobInfo,cb)=>{
    const job = new Job(jobInfo);
    job.save().then(()=>{
        cb();
    })
}


module.exports = {
    jobSave
}
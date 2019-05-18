function AddJob(container){
    this.container = container;
}

AddJob.template = `
        <div class="addJob-body">
            <form id="addForm">
                <div class="form-group">
                    <label for="job_addJob_name">职位名称</label>
                    <input type="text" class="form-control" id="job_addJob_name" placeholder="请输入职位名称">
                </div>
                <div class="form-group">
                    <label for="job_addJob_price">薪资</label>
                    <input type="text" class="form-control" id="job_addJob_price" placeholder="薪资范围">
                </div>
                <div class="form-group">
                    <label for="job_addJob_ask">要求</label>
                    <input type="text" class="form-control" id="job_addJob_ask" placeholder="招聘要求">
                </div>
                <div class="form-group">
                    <label for="company_addJob_name">公司名称</label>
                    <input type="text" class="form-control" id="company_addJob_name" placeholder="请输入公司名称">
                </div>
                <div class="form-group">
                    <label for="logo_addJob">上传公司logo</label>
                    <input type="file" id="logo_addJob" multiple>
                </div>
                <button type="submit" class="btn btn-primary">添加职位</button>
            </form>
        </div>
`;

AddJob.prototype = {
    init:function(){
        this.createPage();
        this.AddJobClick();
    },
    createPage:function(){
        this.divDoms = $("<div></div>");
        this.divDoms.append(AddJob.template);
        this.container.append(this.divDoms);
    },
    AddJobClick:function(){
        this.divDoms.find("#addForm").on("submit",this.handleAddJobCb.bind(this));
    },
    handleAddJobCb(e){
        e.preventDefault();   //阻止默认事件
        var JobName = this.divDoms.find("#job_addJob_name");
        var JobPrice = this.divDoms.find("#job_addJob_price");
        var JobAsk = this.divDoms.find("#job_addJob_ask");
        var companyName = this.divDoms.find("#company_addJob_name");
        var JobLogo = this.divDoms.find("#logo_addJob");

        // 如何使用ajax模拟form表单?
        //使用formData模拟form表单提交
        var formData = new FormData();
        // formData.append("服务端接收的key值","接收的数值");
        formData.append("jobName",JobName.val());
        formData.append("JobPrice",Number(JobPrice.val()));
        formData.append("JobAsk",JobAsk.val());
        formData.append("companyName",companyName.val());
        formData.append("jobLogo",JobLogo[0].files[0]);

        // file图片如何提交 ？
        // formData.append("jobLogo",JobName.val());
        // 只有原生js有
        // console.log(JobLogo[0].files[0])

        $.ajax({
            type:"post",
            url:"/job/addjob",
            data:formData,
            cache:false,  //不通过缓存进行提交
            contentType:false,   //提交格式，阻止默认使用form表单序列化提交  Application/x-www-form-encoded;
            // data提交的方式
            //默认情况下，通过data选项传递的数据，如果只是一个对象，则会处理成一个查询字符串
            //若要发送Dom树信息或其他不希望转换的信息，请设置为false
            processData:false,
            success:this.handleAddSucc.bind(this)
        })
    },
    handleAddSucc(data){
        // console.log(data);
        if(data.state){
            alert("添加成功");
            new Page().renderSwitch(1);
            new Page().tabbarActive(1);
        }
    }

}

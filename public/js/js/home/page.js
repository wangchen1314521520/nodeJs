function Page(){
    this.tabbar = $(".tabbar>ul>li");
    this.addJob = $("#addJob");
    this.jobList = $("#jobList");
    this.content = $(".content>div");
    this.jobHome = $("#jobHome");
}

Page.prototype = {
    init:function(){
        this.tabbarToggle();
    },
    tabbarToggle:function(){
        this.tabbar.on("click",this.handleTabbarCb.bind(this));
    },
    handleTabbarCb(e){
        $(e.target).addClass("active").siblings().removeClass("active");
        var index = $(e.target).index();
        this.renderSwitch(index);
      
    },
    renderSwitch(index){
        switch(index){
            case 0:
                this.renderHome();
                // this.jobHome("<h2>首页</h2>")
                break;
            case 1:
                this.renderList(this.jobList)
                break;
            case 2:
                this.renderAdd(this.addJob);
                break;
        }
    },
    renderHome(){
        this.addJob.html("");
        this.jobList.html("");
        this.jobHome.html("<h2>首页</h2>")
    },
    renderList(container){
        this.addJob.html("");
        this.jobHome.html("");
        new JobList(container).init();
    },
    renderAdd(container){
        console.log("acb")
        this.jobList.html("");
        this.jobHome.html("");
        new AddJob(container).init();
    },
    tabbarActive(index){
       this.tabbar.eq(index).addClass("active").siblings().removeClass("active");
    }
}
new Page().init();
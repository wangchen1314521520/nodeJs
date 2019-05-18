function JobList(container){
    this.container = container;
}

JobList.prototype = {
    init:function(){
        this.createPage();
    },
    createPage:function(){
        this.divDoms = $("<div></div>");
        this.divDoms.append(" <h2>职位列表</h2>")
        this.container.append(this.divDoms);
    }
}


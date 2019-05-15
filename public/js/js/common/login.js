function Login(container){
    this.container = container;
    this.init();
}
// template?
Login.template = `
     <div class="signContent">
            <form id="login-form" class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="sign-login-username" placeholder="请输入用户名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="sign-login-password" placeholder="请输入密码">
                    </div>
                </div>
                <p id="toggle" class="text-primary hasReg">立即注册</p>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" id="signInBtn" class="btn btn-default">登录</button>
                    </div>
                </div>
            </form>
        </div>
`;

Login.prototype = {
    init:function(){
        this.create();
        this.toggleSign();
    },
    create:function(){
        this.container.html("");
        this.divDoms = $("<div></div>");
        this.divDoms.append(Login.template);
        this.container.append(this.divDoms);
    },
     toggleSign:function(){
        this.divDoms.find("#toggle").on("click",this.handdletoggleSignCB.bind(this));
    },
    handdletoggleSignCB(){
        new Page().createContent(false);
    }
}
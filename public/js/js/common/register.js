function Register(container){
    this.container = container;
    this.init();
}
// template?
Register.template = `
      <div class="signContent">
            <form id="register-form" class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="sign-register-username" placeholder="请输入用户名">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="sign-register-password" placeholder="请输入密码">
                    </div>
                </div>
                <p id="toggle" class="text-primary hasReg">已注册，立即登录</p>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" id="signOutBtn" class="btn btn-default">注册</button>
                    </div>
                </div>
            </form>
        </div>
`;


Register.prototype = {
    init:function(){
        this.create();
        this.toggleSign();
        this.registerClick();
    },
    create:function(){
        this.container.html("");
        this.divDoms = $("<div></div>");
        this.divDoms.append(Register.template);
        this.container.append(this.divDoms);
    },
    toggleSign:function(){
        this.divDoms.find("#toggle").on("click",this.handdleToggleSignCB.bind(this));
    },
    handdleToggleSignCB(){
        new Page().createContent(true);
    },
    registerClick:function(){
        this.divDoms.find("#register-form").on("submit",this.handdleRegisterSignCB.bind(this));
    },
    handdleRegisterSignCB(e){
        e.preventDefault();
        var username = this.divDoms.find("#sign-register-username").val();
        var password = this.divDoms.find("#sign-register-password").val();

        console.log(username,password);
    }
}
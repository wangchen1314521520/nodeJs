function UserInfo(){
    this.username = $("#username");
    this.loginout = $("#loginout");
    this.init();
}

UserInfo.prototype = {
    init:function(){
        this.modifyusername();
        this.loginoutClick();
    },
    modifyusername(){
        if(Cookies.get("user")){
            this.username.text(Cookies.get("user"));
        }
    },
    loginoutClick(){
        this.loginout.on("click",this.loginoutCb.bind(this));
    },
    loginoutCb(){
        // 删除token和cookie
        if(confirm("您确定要退出吗？")){
            Cookies.remove("user");
            Cookies.remove("token");
            // location.reload(true)
            if(!Cookies.get("token")){
                location.href = "http://localhost:3000/index.html";
            }
        } 
    }
}

new UserInfo();
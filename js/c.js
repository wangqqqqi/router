var Home=Vue.component("Home",{
    template:`
        <div>
            <Nav></Nav>
            <span>首页</span>
        </div>
`
})
var Nav=Vue.component("Nav",{
    template:`
    <div class="nav">
        <router-link v-for="(item,key) in navData" :to="item.url" :key="key" exact>{{item.title}}</router-link>
        <router-link to="/login" v-if="!islogin">登录</router-link>
       
       <span v-if="islogin" class="info" @click="show">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
    </div>
    `,
    data(){
        return{
            navData:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"info"},
                {title:"文档说明",url:"doc"}
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})
var info=Vue.component("info",{
    template:`
            <div>
                <Nav></Nav>
                <transition name="opacity" mode="out-in">
                    <router-view style="text-align: center"> 
                    
                    </router-view>
                </transition>
            </div>`
})

var list=Vue.component("list",{
    template:`
        <div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <router-link to="/info/list/1" tag="a">
                        <img class="mui-media-object mui-pull-left" src="">
                        <div class="mui-media-body">
                            幸福
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>                        
                    </router-link> 
                </li>
                <li class="mui-table-view-cell mui-media">
                    <router-link to="/info/list/2" tag="a">
                        <img class="mui-media-object mui-pull-left" src="">
                        <div class="mui-media-body">
                            幸福
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>                        
                    </router-link> 
                </li>
                <li class="mui-table-view-cell mui-media" tag="a">
                    <router-link to="/info/list/3">
                        <img class="mui-media-object mui-pull-left" src="">
                        <div class="mui-media-body">
                            幸福
                            <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        </div>                        
                    </router-link> 
                </li>
            </ul>
        </div>
    `
})
var Con=Vue.component("Con",{
    template:`
    <div style="padding-top:44px;position: absolute">
        {{$route.params.id}}
        dfjdfjdkfjdkf
     </div>
    `
})

var doc=Vue.component("doc",{
    template:`
            <div style="height: 100vh">
                <Nav></Nav>
                <div class="parent">
                    <router-view name="left" class="left"></router-view>
                    <router-view name="right" class="right"></router-view>
                </div>
            </div>`,
    beforeRouteEnter(to,from,next){
        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var left=Vue.component("left",{
    template:`
        <div>
            <ul>
                <li>1
                    <ul>
                        <li style="padding: 10px">
                            <router-link to="#one" tag="a">1-1</router-link>
                        </li>
                        <li style="padding: 10px">
                            <router-link to="#two" tag="a">1-2</router-link>
                        </li>                
                    </ul>                
                </li>
                <li>2
                    <ul>
                        <li style="padding: 10px">
                            <router-link to="#three" tag="a">2-1</router-link>
                        </li>
                        <li style="padding: 10px">
                            <router-link to="#four" tag="a">2-2</router-link>
                        </li>                
                    </ul>  
                </li>
            </ul>
        </div>
    `,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop })
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-40 }, 500)
                .onUpdate(function () {
                    document.querySelector(".right").scrollTop= this.tweeningNumber.toFixed(0)
                })
                .start()
            animate()

        }
    }
})
var right=Vue.component("right",{
    template:`
        <div>
            <div id="one">
                one right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
            </div><br>
            <div id="two">
                two right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
            </div><br>
            <div id="three">
                three right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
            </div><br>
            <div id="four">
                four right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
                right right <br>
            </div><br>
        </div>
    `
})
var login=Vue.component("login",{
    template:`
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
        </header>
        <div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
		
			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
			
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div>
    </div>
    `,
    methods:{
        back(){
            router.push("/");
        },
        submit(){
            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }

    }
})
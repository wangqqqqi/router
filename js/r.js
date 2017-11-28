const router = new VueRouter({
//        mode: 'history',
    linkActiveClass:"aa",
    routes :[
        { path: '/', component:Home,name:"abc"},
        // { path: '*', redirect:"/"},
        { path: '/info', component:info,
            children:[
                {path:"",component:list},
                {path:"list/:id",component:Con}
            ]
        },
        { path: '/doc', component:doc,
            children:[
                {path:"",components:{left:left,right:right}}
            ]
        },
        {path:"/login",component:login}
    ]
})
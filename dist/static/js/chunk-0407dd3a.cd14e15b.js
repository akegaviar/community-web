(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0407dd3a"],{"12bc":function(t,s,a){"use strict";var e=a("99d3"),i=a.n(e);i.a},"2b85":function(t,s,a){},"2e6e":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("header-view"),a("div",{staticClass:"reward"},[a("div",{staticClass:"top"},[a("img",{staticClass:"pic",attrs:{src:t.globalImgPath.pic}}),t._m(0)]),a("div",{staticClass:"label"},[a("img",{staticClass:"line",attrs:{src:t.globalImgPath.line}}),a("span",{staticClass:"name"},[t._v("热门赏金任务")]),a("img",{staticClass:"line",attrs:{src:t.globalImgPath.line2}})]),a("div",{staticClass:"flex"},t._l(t.dataList,(function(s,e){return a("div",{key:e,staticClass:"item",on:{click:function(a){return t.toDetail(s.id)}}},[a("div",{staticClass:"title"},[t._v(t._s(s.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"left"},[a("div",{staticClass:"creater"},[t._v("创建人 "+t._s(s.creater))]),a("div",{staticClass:"number"},[t._v(t._s(s.participant)+"人参与")])]),a("div",{staticClass:"price"},[a("span",[t._v("最高")]),a("span",{staticClass:"bonus"},[t._v(t._s(s.bonus)+" ")]),a("span",[t._v(" 积分")])])])])})),0),a("div",{staticClass:"label"},[a("img",{staticClass:"line",attrs:{src:t.globalImgPath.line}}),a("span",{staticClass:"name"},[t._v("赏金任务墙")]),a("img",{staticClass:"line",attrs:{src:t.globalImgPath.line2}})]),a("div",{staticClass:"panel"},[a("div",{staticClass:"statue"},[a("div",{staticClass:"el",class:{selectEl:0==t.statue},on:{click:function(s){return t.clickStatus(-1)}}},[t._v("已公开")]),a("div",{staticClass:"el",class:{selectEl:1==t.statue},on:{click:function(s){return t.clickStatus(1)}}},[t._v("进行中")]),a("div",{staticClass:"el",class:{selectEl:2==t.statue},on:{click:function(s){return t.clickStatus(2)}}},[t._v("已完成")])]),a("div",{staticClass:"table"},[a("div",{staticClass:"sort"},[a("div",{staticClass:"sortItem",on:{click:function(s){return t.sortDeadline()}}},[a("span",[t._v("按时间排序")]),"deadline"!=t.sortBy?a("img",{attrs:{src:t.globalImgPath.sort}}):t._e(),"deadline"==t.sortBy&&"asc"==t.order?a("img",{attrs:{src:t.globalImgPath.sort1}}):t._e(),"deadline"==t.sortBy&&"desc"==t.order?a("img",{attrs:{src:t.globalImgPath.sort2}}):t._e()]),a("div",{staticClass:"sortItem",on:{click:function(s){return t.sortParticipant()}}},[a("span",[t._v("按参与人数排序")]),"participant"!=t.sortBy?a("img",{attrs:{src:t.globalImgPath.sort}}):t._e(),"participant"==t.sortBy&&"asc"==t.order?a("img",{attrs:{src:t.globalImgPath.sort1}}):t._e(),"participant"==t.sortBy&&"desc"==t.order?a("img",{attrs:{src:t.globalImgPath.sort2}}):t._e()])]),a("table",[t._m(1),a("tbody",t._l(t.taskList,(function(s,e){return a("tr",{key:e},[a("td",[a("div",{staticClass:"title"},[t._v(t._s(s.title))])]),a("td",[a("span",{staticClass:"num"},[t._v(t._s(s.bonus))]),a("span",{staticClass:"txt"},[t._v("积分")])]),a("td",[a("div",{staticClass:"status"},[t._v(t._s(s.statusInformation))])]),a("td",[a("div",{staticClass:"act",on:{click:function(a){return t.toDetail(s.id)}}},[t._v("立即查看")])])])})),0)])])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"txt"},[a("div",{staticClass:"title"},[t._v("为每一个通行证找到价值")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("标题")]),a("th",[t._v("奖金")]),a("th",[t._v("状态")]),a("th")])])}],n=a("aa63"),r={components:{headerView:n["a"]},data:function(){return{dataList:[],taskList:[],statue:0,order:"desc",sortBy:"deadline"}},methods:{toCreat:function(){this.$router.push("/manage/createTask")},toDetail:function(t){this.$router.push({path:"/reward/detail",query:{id:t}})},getHoot:function(){var t=this;this.$http.get("/task/hoot").then((function(s){0==s.data.code?t.dataList=s.data.data:t.$Message.error(s.data.message)}))},clickStatus:function(t){this.statue=t,this.getTask()},sortDeadline:function(){this.sortBy="deadline","asc"==this.order?this.order="desc":this.order="asc",this.getTask()},sortParticipant:function(){this.sortBy="participant","asc"==this.order?this.order="desc":this.order="asc",this.getTask()},getTask:function(){var t=this;this.$http.get("/task/page",{params:{type:this.statue,order:this.order,sortBy:this.sortBy}}).then((function(s){0==s.data.code?t.taskList=s.data.data.content:t.$Message.error(s.data.message)}))}},created:function(){this.getHoot(),this.getTask()}},o=r,c=(a("12bc"),a("2877")),l=Object(c["a"])(o,e,i,!1,null,"16b0e1da",null);s["default"]=l.exports},"622e":function(t,s,a){"use strict";var e=a("2b85"),i=a.n(e);i.a},"99d3":function(t,s,a){},aa63:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header",class:{indexHeader:"/"==t.routerPath}},[a("div",{staticClass:"panel"},[a("img",{staticClass:"logo",attrs:{src:t.globalImgPath.logo},on:{click:function(s){return t.toPage("/")}}}),a("div",{staticClass:"menu"},[a("span",{on:{click:function(s){return t.toPage("/")}}},[t._v("首页")]),a("span",{class:{curMenu:-1!=t.routerPath.indexOf("luntan")},on:{click:function(s){return t.toPage("/luntan/moudle")}}},[t._v("论坛")]),a("span",{class:{curMenu:-1!=t.routerPath.indexOf("reward")},on:{click:function(s){return t.toPage("/reward")}}},[t._v("悬赏任务")]),a("span",{class:{curMenu:-1!=t.routerPath.indexOf("skill")},on:{click:function(s){return t.toPage("/skill/list")}}},[t._v("技术文章")]),a("span",{class:{curMenu:-1!=t.routerPath.indexOf("doc")},on:{click:function(s){return t.toPage("/doc/list")}}},[t._v("开发文档")])]),1*t.$store.state.loginStatus?a("div",{staticClass:"avatar",on:{mouseenter:function(s){t.isShowManage=1},mouseleave:function(s){t.isShowManage=0}}},[t.$store.state.headPortrait?a("img",{attrs:{src:t.$store.state.headPortrait},on:{click:function(s){return t.toPage("/personal")}}}):t._e(),t.isShowManage&&t.state?a("div",{staticClass:"manage",on:{click:function(s){return t.toPage("/manage/skillList")}}},[t._v("后台管理")]):t._e()]):t._e(),1*!t.$store.state.loginStatus?a("div",{staticClass:"login"},[a("span",{on:{click:function(s){return t.showLogin()}}},[t._v("登陆")]),a("span",[t._v("|")]),a("span",{on:{click:function(s){return t.showRegister()}}},[t._v("注册")])]):t._e(),1*t.$store.state.loginStatus?a("div",{staticClass:"lang",on:{click:function(s){return t.exitLogin()}}},[a("span",[t._v("退出")])]):t._e()])])},i=[],n={data:function(){return{state:!1,routerPath:"",isShowManage:0}},methods:{showLogin:function(){this.$router.push("/login")},showRegister:function(){this.$router.push("/register")},exitLogin:function(){var t=this;this.$http.delete("/authentications").then((function(s){0==s.data.code?(t.$Message.success("退出登录成功"),window.sessionStorage.setItem("authentication","76fcd84c-818f-4c60-9553-fb91c5969ee9"),t.$http.defaults.headers.common["authentication"]="76fcd84c-818f-4c60-9553-fb91c5969ee9",window.sessionStorage.setItem("headPortrait",""),window.sessionStorage.setItem("loginStatus",0),t.$store.state.loginStatus=0,t.$store.state.headPortrait=""):t.$Message.error(s.data.message)}))},toPage:function(t){this.$router.push(t)},getButton:function(){var t=this;this.$http.get("/integral/button",{params:{id:this.id,type:0}}).then((function(s){0==s.data.code?t.state=s.data.data.state:t.$Message.error(s.data.message)}))}},created:function(){this.$store.state.loginStatus=1*window.sessionStorage.getItem("loginStatus"),this.$store.state.headPortrait=window.sessionStorage.getItem("headPortrait"),this.routerPath=this.$route.path,this.getButton()}},r=n,o=(a("622e"),a("2877")),c=Object(o["a"])(r,e,i,!1,null,"5e9e8fe4",null);s["a"]=c.exports}}]);
//# sourceMappingURL=chunk-0407dd3a.cd14e15b.js.map
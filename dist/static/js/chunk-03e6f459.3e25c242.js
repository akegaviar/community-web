(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03e6f459"],{1089:function(t,a,e){},1148:function(t,a,e){"use strict";var s=e("1089"),i=e.n(s);i.a},"19ee":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.globalImgPath.logo_white},on:{click:function(a){return t.toPage("/")}}})]),e("div",{staticClass:"list"},[e("div",{staticClass:"item"},[e("div",{staticClass:"title"},[e("img",{staticClass:"icon",attrs:{src:t.globalImgPath.menu}}),e("span",{staticClass:"txt"},[t._v("文章管理")]),e("img",{staticClass:"arrow",attrs:{src:t.globalImgPath.manageSelect}})]),e("div",{staticClass:"group"},[e("div",{staticClass:"el",class:{curEl:"skillList"==t.name},on:{click:function(a){return t.toPage("/manage/skillList")}}},[t._v("文章列表")]),e("div",{staticClass:"el",class:{curEl:"newSkill"==t.name},on:{click:function(a){return t.toPage("/manage/newSkill")}}},[t._v("发布文章")])])]),e("div",{staticClass:"item",staticStyle:{"margin-top":"0.5rem"}},[e("div",{staticClass:"title"},[e("img",{staticClass:"icon",attrs:{src:t.globalImgPath.menu}}),e("span",{staticClass:"txt"},[t._v("文档管理")]),e("img",{staticClass:"arrow",attrs:{src:t.globalImgPath.manageSelect}})]),e("div",{staticClass:"group"},[e("div",{staticClass:"el",class:{curEl:"docList"==t.name},on:{click:function(a){return t.toPage("/manage/docList")}}},[t._v("文档列表")]),e("div",{staticClass:"el",class:{curEl:"newDoc"==t.name},on:{click:function(a){return t.toPage("/manage/newDoc")}}},[t._v("发布文档")])])]),e("div",{staticClass:"item",staticStyle:{"margin-top":"0.5rem"}},[e("div",{staticClass:"title"},[e("img",{staticClass:"icon",attrs:{src:t.globalImgPath.menu}}),e("span",{staticClass:"txt"},[t._v("悬赏任务")]),e("img",{staticClass:"arrow",attrs:{src:t.globalImgPath.manageSelect}})]),e("div",{staticClass:"group"},[e("div",{staticClass:"el",class:{curEl:"createTask"==t.name},on:{click:function(a){return t.toPage("/manage/createTask")}}},[t._v("创建任务")]),e("div",{staticClass:"el",class:{curEl:"taskList"==t.name||"issueList"==t.name},on:{click:function(a){return t.toPage("/manage/taskList")}}},[t._v("任务列表")])])])])])},i=[],c={data:function(){return{name:""}},methods:{toPage:function(t){this.$router.push(t)}},created:function(){this.name=this.$route.name}},n=c,r=(e("6f58"),e("2877")),l=Object(r["a"])(n,s,i,!1,null,"b972d192",null);a["a"]=l.exports},"6f58":function(t,a,e){"use strict";var s=e("7f2d"),i=e.n(s);i.a},"7f2d":function(t,a,e){},c050:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"manage"},[e("menu-view"),e("div",{staticClass:"skiiList"},[e("div",{staticClass:"top"},[e("img",{staticClass:"avatar",attrs:{src:t.globalImgPath.avatar}}),e("span",{staticClass:"txt"},[t._v("天选之子")])]),e("div",{staticClass:"name"},[t._v("编辑文章")]),e("div",{staticClass:"content"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"action"},[e("span",{staticClass:"modify",on:{click:function(a){return t.modifyArticle()}}},[t._v("修改")]),e("span",{staticClass:"cancle",on:{click:function(a){return t.cancleData()}}},[t._v("取消")])]),e("div",{staticClass:"title"},[e("span",{staticClass:"require"},[t._v("*")]),e("span",{staticClass:"txt"},[t._v("标题")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editObj.articleTitle,expression:"editObj.articleTitle"}],attrs:{type:"text",placeholder:"请输入文章标题，5-30个汉字之间"},domProps:{value:t.editObj.articleTitle},on:{input:function(a){a.target.composing||t.$set(t.editObj,"articleTitle",a.target.value)}}})]),e("div",{staticClass:"author"},[e("span",{staticClass:"require"},[t._v("*")]),e("span",{staticClass:"txt"},[t._v("作者")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editObj.author,expression:"editObj.author"}],attrs:{type:"text",placeholder:"请输入文章作者"},domProps:{value:t.editObj.author},on:{input:function(a){a.target.composing||t.$set(t.editObj,"author",a.target.value)}}})]),e("div",{staticClass:"author"},[e("span",{staticClass:"require"},[t._v("*")]),e("span",{staticClass:"txt"},[t._v("关键字")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.editObj.keyWord,expression:"editObj.keyWord"}],attrs:{type:"text",placeholder:"请输入关键字 多个用，分割"},domProps:{value:t.editObj.keyWord},on:{input:function(a){a.target.composing||t.$set(t.editObj,"keyWord",a.target.value)}}})]),e("div",{staticClass:"author"},[e("span",{staticClass:"require"},[t._v("*")]),e("span",{staticClass:"txt"},[t._v("图片")]),t.editObj.thumbPath?e("img",{staticClass:"image",attrs:{src:t.editObj.thumbPath},on:{click:function(a){return t.trrigerInput()}}}):t._e(),t.editObj.thumbPath?t._e():e("img",{staticClass:"image",attrs:{src:t.globalImgPath.image},on:{click:function(a){return t.trrigerInput()}}}),e("input",{staticStyle:{visibility:"hidden"},attrs:{type:"file",id:"picture"},on:{change:t.changePic}})]),e("div",{staticClass:"area"},[e("navBar"),e("section",[e("inputer"),e("outputer")],1)],1)])]),e("Modal",{attrs:{title:"取消","ok-text":"是","cancel-text":"否"},on:{"on-ok":t.confirmCancle,"on-cancel":function(a){t.cancleModel=!1}},model:{value:t.cancleModel,callback:function(a){t.cancleModel=a},expression:"cancleModel"}},[e("p",[t._v("确认取消修改？")])])],1)],1)},i=[],c=e("19ee"),n=e("9dca"),r=e("a28e"),l=e("0be4"),o={components:{menuView:c["a"],navBar:n["a"],inputer:r["a"],outputer:l["a"]},data:function(){return{editObj:{id:null,articleTitle:"",author:"",keyWord:"",thumbPath:null},cancleModel:!1}},methods:{trrigerInput:function(){document.getElementById("picture").click()},changePic:function(t){var a=this,e=t.srcElement.files[0],s=new FormData;s.append("file",e),this.$http.post("/file/photo",s).then((function(t){0==t.data.code?a.editObj.thumbPath=t.data.data:a.$Message.error(t.data.message)}))},modifyArticle:function(){var t=this,a=!0;this.editObj.articleTitle?this.editObj.author?this.editObj.keyWord?this.editObj.thumbPath?this.$store.getters.articleMd||(this.$Message.error("请输入内容"),a=!1):(this.$Message.error("请选择图片"),a=!1):(this.$Message.error("请输入关键字"),a=!1):(this.$Message.error("请输入作者"),a=!1):(this.$Message.error("请输入标题"),a=!1),a&&this.$http.post("/article",{id:this.$route.query.id,articleTitle:this.editObj.articleTitle,author:this.editObj.author,keyWord:this.editObj.keyWord,thumbPath:this.editObj.thumbPath,articleContiner:this.$store.getters.articleMd,articleContinerMD:this.$store.getters.articleRaw},{emulateJSON:!0}).then((function(a){0==a.data.code?t.$Message.success(a.data.message):t.$Message.error(a.data.message)}))},getByIdBack:function(){var t=this;this.$http.get("/article/byIdBack",{params:{id:this.$route.query.id}}).then((function(a){0==a.data.code?(t.editObj=a.data.data,t.$store.state.articleList[0].content=a.data.data.articleContinerMD):t.$Message.error(a.data.message)}))},cancleData:function(){this.cancleModel=!0},confirmCancle:function(){this.getByIdBack(),this.cancleModel=!1}},created:function(){this.getByIdBack()}},u=o,d=(e("1148"),e("2877")),m=Object(d["a"])(u,s,i,!1,null,"07c362be",null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-03e6f459.3e25c242.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67dd0b7a"],{"08be":function(t,e,o){},"1a19":function(t,e,o){"use strict";var n=o("b775"),a="article";e["a"]={save:function(t){return Object(n["a"])({url:"/".concat(a,"/save"),method:"post",data:t})},deleteById:function(t){return Object(n["a"])({url:"/".concat(a,"/deleteById/").concat(t),method:"delete"})},update:function(t){return Object(n["a"])({url:"/".concat(a,"/update"),method:"put",data:t})},getByPage:function(t){return Object(n["a"])({url:"/".concat(a,"/getByPage"),method:"post",data:t})},getById:function(t){return Object(n["a"])({url:"/".concat(a,"/get/").concat(t),method:"get"})},getAll:function(){return Object(n["a"])({url:"/".concat(a,"/getAll"),method:"get"})},getList:function(){return Object(n["a"])({url:"/".concat(a,"/getList"),method:"get"})},enable:function(t){return Object(n["a"])({url:"/".concat(a,"/enable/").concat(t),method:"put"})},disable:function(t){return Object(n["a"])({url:"/".concat(a,"/disable/").concat(t),method:"put"})},read:function(t){return Object(n["a"])({url:"/".concat(a,"/read/").concat(t),method:"get"})}}},"1f4c":function(t,e,o){"use strict";var n=o("08be"),a=o.n(n);a.a},"667d":function(t,e,o){"use strict";var n=o("2b0e"),a=o("b2d8"),c=o.n(a);o("64e1"),o("c350");n["default"].use(c.a)},"78c2":function(t,e,o){"use strict";var n=o("bff7"),a=o.n(n);a.a},b34e:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"read-container"},[o("div",{staticClass:"top-image"},[o("img",{attrs:{src:t.article.articleImage}})]),o("div",{staticClass:"article-container"},[o("a-spin",{attrs:{spinning:t.loading}},[o("div",[o("div",{staticClass:"article-title"},[t._v(t._s(t.article.articleTitle))]),o("div",{staticClass:"article-operation"},[o("div",{staticClass:"operation-content"},[t._v(" 阅读 "),o("a-icon",{staticClass:"action-icon",attrs:{type:"eye"}}),o("span",{staticClass:"count-num"},[t._v(" "+t._s(t.article.readCount))]),t._v(" 收藏 "),o("a-icon",{staticClass:"action-icon",attrs:{type:"heart"}}),o("span",{staticClass:"count-num"},[t._v(" "+t._s(t.article.collectionCount))]),t._v(" 点赞 "),o("a-icon",{staticClass:"action-icon",attrs:{type:"like"}}),o("span",{staticClass:"count-num"},[t._v(" "+t._s(t.article.goodCount))])],1)]),o("div",{staticClass:"article-item"},[o("div",{staticClass:"created-time"},[o("a-icon",{staticClass:"meta-icon",attrs:{type:"clock-circle"}}),t._v(t._s(t.article.createdTime)+" ")],1),o("div",{staticClass:"article-meta"},[t.$store.getters.userId===t.article.authorId?o("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.toEdit(t.article.articleId)}}},[o("a-icon",{staticClass:"meta-icon",attrs:{type:"edit"}}),o("span",{staticClass:"do-editer"},[t._v("编辑")])],1):t._e()])]),o("a-layout-content",[o("mavon-editor",{staticStyle:{zIndex:"1"},attrs:{"toolbars-flag":!1,subfield:!1,"default-open":"preview","code-style":"monokai",toolbars:t.markdownOption,ishljs:!0},model:{value:t.article.editContent,callback:function(e){t.$set(t.article,"editContent",e)},expression:"article.editContent"}}),o("div",{staticClass:"article-action"},[o("div",{staticClass:"article-good"},[o("a",{class:t.article.goodArticleFlag?"article-good meta-active":"article-good",attrs:{loading:t.goodLoading,href:"javascript:void(0);"},on:{click:t.saveGood}},[o("a-icon",{attrs:{type:"like"}}),t._v(" 点赞 ")],1)]),o("div",{staticClass:"article-collection"},[o("a",{class:t.article.collectionArticleFlag?"article-collection meta-active":"article-collection",attrs:{loading:t.collectionLoading,href:"javascript:void(0);"},on:{click:t.saveCollection}},[o("a-icon",{attrs:{type:"star"}}),t._v(" 收藏 ")],1)])])],1)],1)])],1),o("div",{staticClass:"buttom-container"},[o("commentList",{attrs:{article:t.article}})],1)])},a=[],c=(o("667d"),o("1a19")),m=o("b775"),s="good",i={save:function(t){return Object(m["a"])({url:"/".concat(s,"/save"),method:"post",data:t})},delete:function(t){return Object(m["a"])({url:"/".concat(s,"/deleteById/").concat(t),method:"delete",data:t})},getByPage:function(t){return Object(m["a"])({url:"/".concat(s,"/getByPage"),method:"post",data:t})}},r="collection",l={save:function(t){return Object(m["a"])({url:"/".concat(r,"/save"),method:"post",data:t})},delete:function(t){return Object(m["a"])({url:"/".concat(r,"/deleteById/").concat(t),method:"delete",data:t})},getByPage:function(t){return Object(m["a"])({url:"/".concat(r,"/getByPage"),method:"post",data:t})}},u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-list-container"},[o("div",{staticClass:"user-comment"},[o("a-textarea",{attrs:{placeholder:"请输入内容，不超过300字",rows:3},model:{value:t.articleCommentContent,callback:function(e){t.articleCommentContent=e},expression:"articleCommentContent"}}),o("div",{staticClass:"comment-button"},[o("a-button",{attrs:{type:"primary",loading:t.commentLoading},on:{click:function(e){return t.saveArticleComment(t.articleCommentContent)}}},[t._v("发表评论")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.countShow,expression:"countShow"}],staticClass:"content-count"},[t._v(" 还能输入 "+t._s(t.commentContentCount)+" 个字符 ")])],1)],1),0!=t.articleCommentPage.list?o("div",{staticClass:"scree-container"},[o("div",{staticClass:"scree-menu"},[o("a-menu",{attrs:{mode:"horizontal"},on:{click:t.changeSort},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[o("a-menu-item",{key:"commentTime"},[t._v("最新")]),o("a-menu-item",{key:"goodCount"},[t._v("点赞最多")]),o("a-menu-item",{key:"commentCount"},[t._v("评论最多")])],1)],1)]):t._e(),0!=t.articleCommentPage.list?o("div",{staticClass:"article-comment-container"},t._l(t.articleCommentPage.list,(function(e){return o("div",{key:e.commentId},[o("a-comment",[o("span",{attrs:{slot:"actions"},slot:"actions"},[o("a-icon",{class:e.goodCommentFlag?"meta-active":"",attrs:{type:"like"},on:{click:function(o){return t.saveGoodArticleComment(e)}}}),t._v(" "+t._s(e.goodCount)+" ")],1),t.$store.getters.userId===e.commentUserId||t.$store.getters.userId===t.article.authorId?o("span",{attrs:{slot:"actions"},slot:"actions"},[o("a-popconfirm",{attrs:{title:"确认删除该条评论?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(o){return t.deleteArticleComment(e)}}},[o("a",{attrs:{href:"#"}},[t._v("删除")])])],1):t._e(),o("span",{key:"comment-nested-reply-to",attrs:{slot:"actions"},on:{click:function(o){return t.doSaveCommentComment(e)}},slot:"actions"},[t._v("回复")]),o("span",{style:{margin:"20px 50px"},attrs:{slot:"actions"},slot:"actions"},[t._v("共"+t._s(e.commentCount)+"条回复 "),t.showCommentComment!=e.commentId&&0!==e.commentCount?o("a",{on:{click:function(o){return t.getCommentCommentList(e.commentId)}}},[t._v("点击查看")]):t._e(),t.showCommentComment===e.commentId?o("a",{on:{click:function(o){return t.hiddenCommentComment(e.commentId)}}},[t._v("收起")]):t._e()]),o("span",{attrs:{slot:"author"},slot:"author"},[t.article.authorName===e.username?o("a-tag",{style:{float:"left"},attrs:{color:"orange"}},[t._v(" 作者 ")]):t._e(),t.$store.getters.userId===e.commentUserId?o("a-tag",{style:{float:"left"},attrs:{color:"blue"}},[t._v(" 我的 ")]):t._e(),o("a",[t._v(t._s(e.username))])],1),o("a-avatar",{attrs:{slot:"avatar",size:32,src:e.header},slot:"avatar"}),o("span",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(e.commentContent)+" ")]),o("a-tooltip",{attrs:{slot:"datetime"},slot:"datetime"},[o("span",[t._v(t._s(e.commentTime))])]),t.showCommentComment===e.commentId?o("div",{staticClass:"comment-comment-list",on:{scroll:function(o){return t.scrollLoadMore(o,e)}}},t._l(t.commentCommentList,(function(n){return o("a-comment",{key:n.commentId},[o("span",{attrs:{slot:"actions"},slot:"actions"},[o("a-icon",{class:n.goodCommentFlag?"meta meta-active":"meta",attrs:{type:"like"},on:{click:function(o){return t.saveGoodCommentComment(n,e)}}}),t._v(" "+t._s(n.commentGood)+" ")],1),o("span",{attrs:{slot:"actions"},on:{click:function(e){return t.deleteCommentComment(n)}},slot:"actions"},[t._v("删除")]),o("span",{attrs:{slot:"actions"},on:{click:function(o){return t.doSaveCommentCommentWithParent(n,e)}},slot:"actions"},[t._v("回复")]),o("span",{attrs:{slot:"author"},slot:"author"},[t.article.authorName===n.username?o("a-tag",{style:{float:"left"},attrs:{color:"orange"}},[t._v(" 作者 ")]):t._e(),t.$store.getters.userId===n.commentUserId?o("a-tag",{style:{float:"left"},attrs:{color:"blue"}},[t._v(" 我的 ")]):t._e(),o("a",[t._v(t._s(n.username))])],1),o("a-avatar",{attrs:{slot:"avatar",src:n.header},slot:"avatar"}),o("span",{attrs:{slot:"content"},slot:"content"},[o("p",[t._v("回复 @"+t._s(n.commentParentUserName))]),t._v(" "+t._s(n.commentContent)+" ")]),o("a-tooltip",{attrs:{slot:"datetime"},slot:"datetime"},[o("span",[t._v(t._s(n.commentTime))])])],1)})),1):t._e(),""!==t.commentParentUser&&e.commentId===t.doCurrentComment?o("div",{staticClass:"user-comment",attrs:{id:"commentCommentContent"}},[o("div",{staticClass:"comment-top"},[o("a-avatar",{attrs:{slot:"avatar",size:72.4,src:t.$store.getters.header},slot:"avatar"}),o("a-textarea",{style:{maxWidth:"90%"},attrs:{placeholder:"回复@"+t.commentParentUser,rows:3},model:{value:t.commentCommentContent,callback:function(e){t.commentCommentContent=e},expression:"commentCommentContent"}})],1),o("div",{staticClass:"comment-button"},[o("a-button",{attrs:{type:"primary",loading:t.commentCommentLoading},on:{click:function(o){return t.saveCommentComment(e.commentId)}}},[t._v("发表评论")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.cCountShow,expression:"cCountShow"}],staticClass:"content-count"},[t._v(" 还能输入 "+t._s(t.commentContentCount)+" 个字符 ")])],1)]):t._e()],1)],1)})),0):t._e(),t.articleCommentPage.list>t.articleCommentPage.pageSize?o("el-pagination",{staticClass:"comment-pagination",attrs:{align:"center","current-page":t.articleCommentPage.currentPage,"page-size":t.articleCommentPage.pageSize,layout:"total, prev, pager, next, jumper",total:t.articleCommentPage.totalCount},on:{"current-change":t.handleCurrentChange}}):t._e()],1)},d=[],g="comment",C={save:function(t){return Object(m["a"])({url:"/".concat(g,"/save"),method:"post",data:t})},deleteById:function(t){return Object(m["a"])({url:"/".concat(g,"/deleteById/").concat(t),method:"delete"})},getByPage:function(t){return Object(m["a"])({url:"/".concat(g,"/getByPage"),method:"post",data:t})}},h={props:{article:{type:Object,default:null}},data:function(){return{userId:this.$store.getters.userId,header:this.$store.getters.header,articleCommentPage:{currentPage:1,pageSize:5,totalCount:0,totalPage:0,params:{commentType:0,commentTarget:this.$route.params.id},sortColumn:"commentTime",sortMethod:"asc",list:[]},commentCommentPage:{currentPage:1,pageSize:10,totalCount:0,totalPage:0,params:{commentType:1,commentTarget:""},sortColumn:"commentTime",sortMethod:"asc",list:[]},commentLoading:!1,commentCommentLoading:!1,current:["commentTime"],comment:{commentContent:"",goodCount:"",commentTarget:"",commentType:0,commentRoot:"",commentParentUser:"",commentParentUserId:""},good:{goodTarget:"",goodType:2},doCurrentComment:"",commentParentUser:"",commentCommentList:[],showCommentComment:"",countShow:!1,cCountShow:!1,articleCommentContent:"",commentCommentContent:"",commentContentCount:300}},watch:{"$store.getters.token":function(){void 0!==this.$store.getters.token&&this.getArticleCommentList()},articleCommentContent:function(t,e){this.articleCommentContent.length>300&&(this.articleCommentContent=this.articleCommentContent.substring(0,300)),this.articleCommentContent.length>0?this.countShow=!0:this.countShow=!1;var o=t?t.length:0,n=e?e.length:0;this.commentContentCount=this.commentContentCount-(o-n)},commentCommentContent:function(t,e){this.commentCommentContent.length>300&&(this.commentCommentContent=this.commentCommentContent.substring(0,300)),this.commentCommentContent.length>0?this.cCountShow=!0:this.cCountShow=!1;var o=t?t.length:0,n=e?e.length:0;this.commentContentCount=this.commentContentCount-(o-n)},$route:function(){this.read(this.$route.params.id)}},created:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){void 0!==e.$store.getters.token&&e.getArticleCommentList()}),1e3)},methods:{getArticleCommentList:function(){var t=this;this.articleCommentPage.list=[],C.getByPage(this.articleCommentPage).then((function(e){console.log(e),t.articleCommentPage=e.data})).catch((function(e){t.$message.error(e.msg)}))},getCommentCommentList:function(t){var e=this;this.commentCommentPage.list=[],this.commentCommentPage.params.commentTarget=t,C.getByPage(this.commentCommentPage).then((function(o){console.log(o),e.commentCommentPage=o.data,e.commentCommentList=o.data.list,e.showCommentComment=t}))},saveArticleComment:function(t){var e=this;this.commentLoading=!0,t.length<=0?(this.$message.error("错误提示: 评论内容不能为空！"),this.commentLoading=!1):(this.comment.commentType=0,this.comment.commentTarget=this.$route.params.id,this.comment.commentRoot=this.$route.params.id,this.comment.commentContent=this.articleCommentContent,this.comment.commentParentUser=null,C.save(this.comment).then((function(t){e.articleCommentContent="",e.commentLoading=!1,e.getArticleCommentList(),e.$message.success(t.msg)})).catch((function(){e.commentLoading=!1})))},saveCommentComment:function(t){var e=this;this.comment.commentRoot=this.$route.params.id,this.comment.commentContent=this.commentCommentContent,this.comment.commentType=1,C.save(this.comment).then((function(o){e.commentCommentContent="",e.commentCommentLoading=!1,e.getCommentCommentList(t),e.$message.success(o.msg)})).catch((function(){e.commentLoading=!1}))},hiddenCommentComment:function(){this.showCommentComment=0},scrollLoadMore:function(){},deleteArticleComment:function(t){var e=this;C.deleteById(t.commentId).then((function(t){e.$message.success(t.msg),e.getArticleCommentList()}))},deleteCommentComment:function(t){var e=this;this.$confirm("是否删除？","操作提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){C.deleteById(t.commentId).then((function(o){e.$message.success(o.msg),e.getCommentCommentList(t.commentTarget)}))}))},saveGoodArticleComment:function(t){var e=this;this.good.goodTarget=t.commentId,this.good.goodType=2,i.save(this.good).then((function(t){e.$message.success(t.msg),e.getArticleCommentList()}))},saveGoodCommentComment:function(t,e){var o=this;this.good.goodTarget=t.commentId,this.good.goodType=2,i.save(this.good).then((function(t){o.$message.success(t.msg),o.getCommentCommentList(e)}))},doSaveCommentComment:function(t){this.comment={},this.doCurrentComment=t.commentId,this.commentParentUser=t.username,this.comment.commentTarget=t.commentId,this.comment.commentParentUserId=t.commentUserId},doSaveCommentCommentWithParent:function(t,e){this.doCurrentComment=e.commentId,this.commentParentUser=t.username,this.comment.commentParentUserId=e.commentUserId,this.comment.commentTarget=e.commentId},changeSort:function(t){this.articleCommentPage.sortColumn=t.key,this.getArticleCommentList(this.articleCommentPage)},handleSizeChange:function(t){this.articleCommentPage.pageSize=t,this.getArticleCommentList(this.articleCommentPage)},handleCurrentChange:function(t){this.articleCommentPage.currentPage=t,this.getArticleCommentList(this.articleCommentPage)}}},v=h,f=(o("1f4c"),o("2877")),p=Object(f["a"])(v,u,d,!1,null,"6bc7cd63",null),_=p.exports,y={components:{CommentList:_},data:function(){return{markdownOption:{},article:{articleId:"",articleAuthor:"",goodArticleFlag:!1,collectionArticleFlag:!1},good:{goodTarget:"",goodType:1},collection:{collectionTarget:"",collectionType:1},loading:!0,commentLoading:!1,goodLoading:!1,collectionLoading:!1}},created:function(){this.read()},methods:{read:function(){var t=this;this.article.articleId=this.$route.params.id,c["a"].read(this.article.articleId).then((function(e){console.log(e),t.article=e.data,t.loading=!1}))},saveGood:function(){var t=this;!1===this.article.goodArticleFlag?(this.good.goodTarget=this.$route.params.id,i.save(this.good).then((function(e){t.article.goodArticleFlag=!0,t.$message.success(e.msg),console.log(e)}))):this.$message.info("操作提示: 您已点赞，请勿重复点赞！")},saveCollection:function(){var t=this;!1===this.article.collectionArticleFlag?(this.collection.collectionTarget=this.$route.params.id,l.save(this.collection).then((function(e){t.article.collectionArticleFlag=!0,t.$message.success(e.msg),console.log(e)}))):this.$message.info("操作提示: 您已收藏，请勿重复收藏！")},goBack:function(){this.$router.go(-1)},toEdit:function(){this.$router.push({path:"/create",query:{id:this.$route.params.id}})}}},b=y,P=(o("78c2"),Object(f["a"])(b,n,a,!1,null,"270a66ca",null));e["default"]=P.exports},bff7:function(t,e,o){}}]);
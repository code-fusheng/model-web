(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adce09fc"],{"0899":function(t,e,i){"use strict";var a=i("5c50"),n=i.n(a);n.a},"0e6d":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"create-container"},[i("a-layout",[i("a-layout-content",{staticClass:"editor-header"},[i("a-input",{staticClass:"editor-input-title",attrs:{placeholder:"请输入标题"},model:{value:t.article.articleTitle,callback:function(e){t.$set(t.article,"articleTitle",e)},expression:"article.articleTitle"}}),i("a-button",{on:{click:t.changeEditor}},[t._v("切换编辑器:当前为"+t._s(t.editorModeName))]),i("a-button",{attrs:{type:"primary"},on:{click:t.openAddDialog}},[t._v(" 发布 ")])],1),i("a-layout-content",[t.editorModeState?i("mavon-editor",{ref:"md",staticStyle:{zIndex:"1"},attrs:{"code-style":"monokai",ishljs:!0},on:{save:t.saveMavon},model:{value:t.markdownContent,callback:function(e){t.markdownContent=e},expression:"markdownContent"}}):i("tinymce",{model:{value:t.tinymceContent,callback:function(e){t.tinymceContent=e},expression:"tinymceContent"}})],1)],1),i("el-dialog",{attrs:{width:"50%",title:"create"===t.stateMode?"创建文章":"编辑文章",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[i("el-form",{ref:"addForm",attrs:{model:t.article,"label-width":"40px",size:"mini"}},[i("el-form-item",{attrs:{label:"分类"}},[i("el-select",{staticStyle:{width:"40%"},attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:function(e){return t.autoSetImage(t.article.articleCategory)}},model:{value:t.article.articleCategory,callback:function(e){t.$set(t.article,"articleCategory",e)},expression:"article.articleCategory"}},t._l(t.categoryList,(function(t){return i("el-option",{key:t.categoryId,attrs:{label:t.categoryName,value:t.categoryId}})})),1)],1),i("el-form-item",{attrs:{label:"封面"}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.uploadSuccess,headers:t.headers}},[t.imageUrl||t.article.articleImage?i("img",{staticClass:"avatar",attrs:{src:"create"===t.stateMode?t.imageUrl:t.article.articleImage}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),i("el-form-item",{attrs:{label:"描述"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.article.articleDesc,callback:function(e){t.$set(t.article,"articleDesc",e)},expression:"article.articleDesc"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"mini",loading:t.addLoading},on:{click:t.saveArticle}},[t._v("确认发布")]),i("el-button",{attrs:{size:"mini"},on:{click:t.closeAddDialog}},[t._v("取消")])],1)],1)],1)],1)},n=[],o=(i("667d"),i("1a19")),c=i("21ef"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])},l=[],s=(i("4160"),i("a9e3"),i("b680"),i("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(" 上传 ")]),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:t.uploadUrl,"list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v(" 点击上传 ")])],1),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(" 取消 ")]),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(" 提交 ")])],1)],1)}),d=[],u=(i("a623"),i("d81d"),i("b64b"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},uploadUrl:"/prod-api/upload/uploadImage",fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(t,e){console.log(t,e);for(var i=e.uid,a=Object.keys(this.listObj),n=0,o=a.length;n<o;n++)if(this.listObj[a[n]].uid===i)return this.listObj[a[n]].url=t.files.file,void(this.listObj[a[n]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=Object.keys(this.listObj),a=0,n=i.length;a<n;a++)if(this.listObj[i[a]].uid===e)return void delete this.listObj[i[a]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,a=t.uid;return this.listObj[a]={},new Promise((function(n,o){var c=new Image;c.src=i.createObjectURL(t),c.onload=function(){e.listObj[a]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},n(!0)}))}}}),h=u,m=(i("ea0a"),i("2877")),g=Object(m["a"])(h,s,d,!1,null,"bc9064a2",null),f=g.exports,b=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],p=b,y=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],v=y,w=i("b85c"),C=[];function k(){return window.tinymce}var j=function(t,e){var i=document.getElementById(t),a=e||function(){};if(!i){var n=document.createElement("script");n.src=t,n.id=t,document.body.appendChild(n),C.push(a);var o="onload"in n?c:r;o(n)}function c(e){e.onload=function(){this.onerror=this.onload=null;var t,i=Object(w["a"])(C);try{for(i.s();!(t=i.n()).done;){var a=t.value;a(null,e)}}catch(n){i.e(n)}finally{i.f()}C=null},e.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+t),e)}}function r(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,i=Object(w["a"])(C);try{for(i.s();!(e=i.n()).done;){var a=e.value;a(null,t)}}catch(n){i.e(n)}finally{i.f()}C=null}}}i&&a&&(k()?a(null,i):C.push(a))},_=j,O="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",I={name:"Tinymce",components:{editorImage:f},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:"100px"},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1}},computed:{language:function(){return"zh_CN"},containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))},language:function(){var t=this;this.destroyTinymce(),this.$nextTick((function(){return t.initTinymce()}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;_(O,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({language:this.language,selector:"#".concat(this.tinymceId),min_height:100,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:v,menubar:this.menubar,plugins:p,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",i.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},S=I,$=(i("0899"),Object(m["a"])(S,r,l,!1,null,"cfdbbdc6",null)),M=$.exports,A=i("5f87"),x={components:{Tinymce:M},data:function(){return{imageUrl:null,uploadUrl:"/prod-api/upload/uploadImage",headers:{Authorization:Object(A["a"])()},stateMode:"",categoryList:this.$store.getters.categoryList,editArticleId:"",article:{articleId:"",articleTitle:"",articleContent:"",editContent:"",articleCategory:"",articleImage:"",editModel:""},markdownContent:"",tinymceContent:"",editorModeState:!0,editorModeName:"MarkDown",addDialog:!1,addLoading:!1}},watch:{editorModeState:function(){}},created:function(){console.log(this.$route.query.id),null===this.$route.query.id||""===this.$route.query.id||void 0===this.$route.query.id?(this.stateMode="create",console.log("create 模式"),this.categoryList=this.$store.getters.categoryList):(this.stateMode="edit",console.log("edit 模式"),this.editArticleId=this.$route.query.id,console.log(this.editArticleId),this.getArticleById())},methods:{getArticleById:function(){var t=this;o["a"].getById(this.editArticleId).then((function(e){t.article=e.data,t.markdownContent=e.data.editContent}))},changeEditor:function(){this.editorModeState=!this.editorModeState,!1===this.editorModeState?this.editorModeName="TinyMce":this.editorModeName="MarkDown"},autoSetImage:function(t){var e=this;console.log(t),c["a"].getById(t).then((function(t){e.imageUrl=t.data.categoryImage,e.article.articleImage=e.imageUrl}))},openAddDialog:function(){""===this.article.articleTitle?this.$message.error("文章标题不能为空！"):""===this.markdownContent&&"MarkDown"===this.editorModeName||""===this.tinymceContent&&"TinyMce"===this.editorModeName?this.$message.error("文章内容不能为空！"):this.addDialog=!0},saveMavon:function(t,e){console.log("this is render"+e),console.log("this is value"+t)},saveArticle:function(){var t=this;""===this.article.articleCategory?this.$message.error("文章类型不能为空！"):(this.addLoading=!0,"MarkDown"===this.editorModeName?(this.article.editContent=this.$refs.md.d_value,this.article.articleContent=this.$refs.md.d_render):this.article.articleContent=this.tinymceContent,this.article.editModel=this.editorModeName,null===this.$route.query.id||""===this.$route.query.id||void 0===this.$route.query.id?o["a"].save(this.article).then((function(e){t.$message.success(e.msg),t.addLoading=!1,t.addDialog=!1,t.closeAddDialog(),t.$router.push({path:"/article"})})):o["a"].update(this.article).then((function(e){t.$message.success(e.msg),t.addLoading=!1,t.addDialog=!1,t.closeAddDialog(),t.$router.push({path:"/article"})})))},closeAddDialog:function(){this.addDialog=!1,this.addLoading=!1},uploadSuccess:function(t,e){this.$message.success(t.msg),this.imageUrl=t.data,this.article.articleImage=t.data}}},L=x,D=(i("980e"),Object(m["a"])(L,a,n,!1,null,"995e9c28",null));e["default"]=D.exports},"1a19":function(t,e,i){"use strict";var a=i("b775"),n="article";e["a"]={save:function(t){return Object(a["a"])({url:"/".concat(n,"/save"),method:"post",data:t})},deleteById:function(t){return Object(a["a"])({url:"/".concat(n,"/deleteById/").concat(t),method:"delete"})},update:function(t){return Object(a["a"])({url:"/".concat(n,"/update"),method:"put",data:t})},getByPage:function(t){return Object(a["a"])({url:"/".concat(n,"/getByPage"),method:"post",data:t})},getById:function(t){return Object(a["a"])({url:"/".concat(n,"/get/").concat(t),method:"get"})},getAll:function(){return Object(a["a"])({url:"/".concat(n,"/getAll"),method:"get"})},getList:function(){return Object(a["a"])({url:"/".concat(n,"/getList"),method:"get"})},enable:function(t){return Object(a["a"])({url:"/".concat(n,"/enable/").concat(t),method:"put"})},disable:function(t){return Object(a["a"])({url:"/".concat(n,"/disable/").concat(t),method:"put"})},read:function(t){return Object(a["a"])({url:"/".concat(n,"/read/").concat(t),method:"get"})},getLastAndNextArticleVo:function(t){return Object(a["a"])({url:"/".concat(n,"/getLastAndNextArticleVo/").concat(t),method:"get"})}}},"21ef":function(t,e,i){"use strict";var a=i("b775"),n="category";e["a"]={save:function(t){return Object(a["a"])({url:"/".concat(n,"/save"),method:"post",data:t})},deleteById:function(t){return Object(a["a"])({url:"/".concat(n,"/deleteById/").concat(t),method:"delete"})},update:function(t){return Object(a["a"])({url:"/".concat(n,"/update"),method:"put",data:t})},getById:function(t){return Object(a["a"])({url:"/".concat(n,"/getById/").concat(t),method:"get"})},getAll:function(){return Object(a["a"])({url:"/".concat(n,"/getAll"),method:"get"})},getList:function(){return Object(a["a"])({url:"/".concat(n,"/getList"),method:"get"})},getByPage:function(t){return Object(a["a"])({url:"/".concat(n,"/getByPage"),method:"post",data:t})},enable:function(t){return Object(a["a"])({url:"/".concat(n,"/enable/").concat(t),method:"put"})},disable:function(t){return Object(a["a"])({url:"/".concat(n,"/disable/").concat(t),method:"put"})}}},"31ec":function(t,e,i){},"5c50":function(t,e,i){},"667d":function(t,e,i){"use strict";var a=i("2b0e"),n=i("b2d8"),o=i.n(n);i("64e1"),i("c350");a["default"].use(o.a)},"980e":function(t,e,i){"use strict";var a=i("b9ab"),n=i.n(a);n.a},b9ab:function(t,e,i){},ea0a:function(t,e,i){"use strict";var a=i("31ec"),n=i.n(a);n.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325b2e6c"],{"0087":function(e,t,n){},"0622":function(e,t,n){"use strict";var s=n("b0f9"),a=n.n(s);a.a},"159b":function(e,t,n){var s=n("da84"),a=n("fdbc"),o=n("17c2"),r=n("9112");for(var i in a){var c=s[i],l=c&&c.prototype;if(l&&l.forEach!==o)try{r(l,"forEach",o)}catch(m){l.forEach=o}}},"162e":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("transition",{attrs:{name:"menu"}},[n("navbar",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"menu-container"})],1),n("div",{staticClass:"main-container"},[n("div",{staticClass:"center-container"},[n("a-config-provider",{attrs:{locale:e.locale}},[n("router-view")],1)],1),n("player",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"music-player"})],1),n("bottom",{staticClass:"buttom-container"}),n("a-back-top")],1)},a=[],o=n("21ef"),r=n("677e"),i=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-container"},[n("div",{staticClass:"nav-logo"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"logo-text"},[e._v("个人论坛 | code-fusheng")])])],1),n("div",{staticClass:"nav-menu-item"},[n("a-menu",{attrs:{mode:"horizontal"}},[n("a-menu-item",{key:"/index"},[n("router-link",{attrs:{to:"/"}},[n("a-icon",{attrs:{type:"home"}}),e._v("首页 ")],1)],1),n("a-menu-item",{key:"/tools"},[n("router-link",{attrs:{to:"/tools"}},[n("a-icon",{attrs:{type:"tool"}}),e._v("工具 ")],1)],1),n("a-menu-item",{key:"/about"},[n("router-link",{attrs:{to:"/about"}},[n("a-icon",{attrs:{type:"question-circle"}}),e._v("关于 ")],1)],1)],1)],1),n("div",{staticClass:"nav-menu-search"},[n("a-input-search",{attrs:{placeholder:"搜索中心"},on:{search:function(t){return e.toSearch(e.content)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e.isLogin?e._e():n("a-divider",{attrs:{type:"vertical"}}),e.isLogin?e._e():n("a",{staticClass:"login-button",attrs:{id:"loginButton"},on:{click:function(t){return e.showLoginModal()}}},[e._v("登录")]),e.isLogin?e._e():n("a-divider",{attrs:{type:"vertical"}}),e.isLogin?n("span",{staticClass:"login-span"},[n("a-badge",{attrs:{count:e.messageCount}},[n("a",{attrs:{href:"/remind"}},[n("a-icon",{style:{color:"#fff",fontSize:"20px"},attrs:{type:"bell"}})],1)]),n("a-divider",{attrs:{type:"vertical"}}),n("a-badge",{attrs:{count:"10"}},[n("a",{attrs:{href:"/chat"}},[n("a-icon",{style:{color:"#fff",fontSize:"20px"},attrs:{type:"message"}})],1)]),n("a-divider",{attrs:{type:"vertical"}})],1):n("a",{staticClass:"login-button",on:{click:function(t){return e.showRegisterModal()}}},[e._v("注册")]),n("a-modal",{attrs:{footer:null},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("login",{attrs:{current:"current"}})],1),e.isLogin?n("div",[n("a-dropdown",{staticClass:"user-dropdown",attrs:{placement:"bottomCenter"}},[n("a-avatar",{staticStyle:{"margin-bottom":"5px",color:"#f56a00",backgroundColor:"#fde3cf"},attrs:{shape:"square",src:this.$store.getters.header}}),n("a-menu",{style:{marginTop:"5px"},attrs:{slot:"overlay"},slot:"overlay"},[n("a-menu-item",[n("a",{attrs:{href:"/userInfo"}},[e._v("个人主页")])]),n("a-menu-item",[n("a",{attrs:{href:"/profile"}},[e._v("账号管理")])]),n("a-menu-item",[n("a",{on:{click:e.logout}},[e._v("退出登录")])]),n("a-menu-item",[1==e.$store.getters.userId?n("a",{attrs:{href:"http://175.24.45.179:10000/",target:"_blank"}},[e._v("后台管理")]):e._e()])],1)],1)],1):e._e()],1)])},l=[],m=(n("99af"),n("4160"),n("b0c0"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-background"},[n("a-spin",{attrs:{spinning:e.spinning}},[n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-title"},[e._v("个人论坛 | code-fusheng")]),n("a-menu",{attrs:{mode:"horizontal"},on:{select:e.changeTab},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[n("a-menu-item",{key:"login",attrs:{id:"loginItem"}},[e._v("登录")]),n("a-menu-item",{key:"register",attrs:{id:"registerItem"}},[e._v("注册")])],1),n("div",{staticClass:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.login,expression:"login"}],staticClass:"login"},[n("a-form",{attrs:{form:e.loginForm},on:{submit:e.loginSubmit}},[n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入账号!"}]}],expression:"[\n                  'username',\n                  { rules: [{ required: true, message: '请输入账号!' }] }\n                ]"}],attrs:{placeholder:"请输入账号"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码!"}]}],expression:"[\n                  'password',\n                  { rules: [{ required: true, message: '请输入密码!' }] }\n                ]"}],attrs:{placeholder:"请输入密码",type:"password"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-button",{attrs:{type:"primary","html-type":"submit",block:""}},[e._v("登录")])],1)],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.register,expression:"register"}],staticClass:"register"},[n("a-form",{attrs:{form:e.registerForm},on:{submit:e.registerSubmit}},[n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入账号!"}]}],expression:"[\n                  'username',\n                  { rules: [{ required: true, message: '请输入账号!' }] }\n                ]"}],attrs:{placeholder:"请输入账号"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码!"}]}],expression:"[\n                  'password',\n                  { rules: [{ required: true, message: '请输入密码!' }] }\n                ]"}],attrs:{placeholder:"请输入密码",type:"password"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),n("a-form-item",[n("a-button",{attrs:{type:"primary","html-type":"submit",block:""}},[e._v("注册")])],1)],1)],1)])],1)])],1)}),u=[],d={data:function(){return{current:["login"],login:!0,spinning:!1,loginForm:this.$form.createForm(this),registerForm:this.$form.createForm(this),register:!1}},methods:{changeTab:function(e){var t=e.key;"login"===t&&(this.login=!0,this.register=!1),"register"===t&&(this.register=!0,this.login=!1)},loginSubmit:function(e){var t=this;e.preventDefault(),this.loginForm.validateFields((function(e,n){e||(t.spinning=!0,t.$store.dispatch("user/login",n).then((function(){t.$router.go(0)})).catch((function(){t.spinning=!1})))}))},registerSubmit:function(e){var t=this;e.preventDefault(),this.registerForm.validateFields((function(e,n){t.spinning=!0,t.$store.dispatch("user/register",n).then((function(){t.$message.success("注册成功！"),t.spinning=!1,document.getElementById("loginItem").click()})).catch((function(e){t.spinning=!1}))}))}}},h=d,g=(n("bffb"),n("2877")),p=Object(g["a"])(h,m,u,!1,null,"472ac919",null),f=p.exports,v=n("b775"),b="message",w={getAll:function(){return Object(v["a"])({url:"/".concat(b,"/getAll"),method:"get"})},getList:function(){return Object(v["a"])({url:"/".concat(b,"/getList"),method:"get"})},getByPage:function(e){return Object(v["a"])({url:"/".concat(b,"/getByPage"),method:"post",data:e})},confirmMessageByIds:function(e){return Object(v["a"])({url:"/".concat(b,"/confirmMessageByIds"),method:"put",data:e})},deleteByIds:function(e){return Object(v["a"])({url:"/".concat(b,"/deleteByIds"),method:"put",data:e})},get:function(e){return Object(v["a"])({url:"/".concat(b,"/get/").concat(e),method:"get"})}},y={components:{Login:f},data:function(){return{collapsed:!0,showNav:!1,content:"",visible:!1,isLogin:void 0!==this.$store.getters.token,userName:"",userIcon:this.$store.getters.header,temp:{},messageList:[],messageCount:0}},watch:{"this.$route.path":function(){console.log(this.$route.path)},"$store.getters.messageCount":function(){this.messageCount=this.$store.getters.messageCount}},created:function(){console.log(this.$route.path),this.name=this.$store.getters.name,this.$store.getters.token&&this.getMessageList()},mounted:function(){"WebSocket"in window?(this.websocket=new WebSocket("ws://175.24.45.179:9999/push/websocket"),this.initWebSocket()):alert("当前浏览器 不支持")},beforeDestroy:function(){this.onbeforeunload()},methods:{changeShowNav:function(){},showLoginModal:function(){this.visible=!0},showRegisterModal:function(){this.visible=!0},logout:function(e){e.preventDefault(),this.$store.dispatch("user/logout").then((function(){location.assign("/")}))},toSearch:function(e){this.$router.push({path:"/search/index",query:{keyword:e}})},initWebSocket:function(){this.websocket.onerror=this.setErrorMessage,this.websocket.onopen=this.setOnopenMessage,this.websocket.onmessage=this.setOnmessageMessage,this.websocket.onclose=this.setOncloseMessage,window.onbeforeunload=this.onbeforeunload},setErrorMessage:function(){console.log("WebSocket连接发生错误   状态码："+this.websocket.readyState)},setOnopenMessage:function(){console.log("WebSocket连接成功    状态码："+this.websocket.readyState)},setOnmessageMessage:function(e){if(console.log("服务端返回："+e.data),this.temp=JSON.parse(e.data),this.temp.receiveUserName===this.$store.getters.name&&(this.messageCount++,this.$store.commit("global/SET_MESSAGE_COUNT",this.messageCount)),this.temp.sendUserName!==this.$store.getters.name)switch(this.temp.messageType){case 1:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 评论了 ").concat(this.temp.receiveUserName," 的文章 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 2:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 回复了 ").concat(this.temp.receiveUserName," 的评论 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 3:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 点赞了 ").concat(this.temp.receiveUserName," 的文章 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 4:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 点赞了 ").concat(this.temp.receiveUserName," 的评论 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 5:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 点赞了 ").concat(this.temp.receiveUserName," 的提问 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 6:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 点赞了 ").concat(this.temp.receiveUserName," 的答复 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 7:break;case 8:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 收藏了 ").concat(this.temp.receiveUserName," 的文章 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 9:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 收藏了 ").concat(this.temp.receiveUserName," 的提问 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 10:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 收藏了 ").concat(this.temp.receiveUserName," 的答复 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 12:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 批阅了 ").concat(this.temp.receiveUserName," 的报告 ").concat(this.temp.messageTargetDesc),type:"success"});break;case 13:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 答复了 ").concat(this.temp.receiveUserName," 的提问 ").concat(this.temp.messageTargetDesc),type:"success"});break;default:this.$message({customClass:"message-model",message:"".concat(this.temp.sendUserName," 评论了 ").concat(this.temp.receiveUserName," 的文章 ").concat(this.temp.messageTargetDesc),type:"success"})}},setOncloseMessage:function(){console.log("WebSocket连接关闭    状态码："+this.websocket.readyState)},onbeforeunload:function(){this.closeWebSocket()},closeWebSocket:function(){this.websocket.close()},getMessageList:function(){var e=this;w.getList().then((function(t){e.messageList=t.data,e.messageList.forEach((function(t){0===t.messageState&&e.messageCount++})),e.$store.commit("global/SET_MESSAGE_COUNT",e.messageCount)}))}}},k=y,S=(n("3f0b"),Object(g["a"])(k,c,l,!1,null,"aeca853c",null)),C=S.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"bottom-text"},[n("div",[n("span",{staticClass:"span-title"},[e._v("个人论坛 | code-fusheng")]),e._v(" | ©2020 | Created by "),n("span",{staticClass:"span-author"},[e._v("code-fusheng")]),n("br"),n("span",{staticClass:"span-demo"},[e._v("湘ICP备20004440号-1")])])])])}],O=(n("0622"),{}),_=Object(g["a"])(O,I,L,!1,null,null,null),N=_.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("aplayer",{attrs:{audio:e.audio,"lrc-type":1}})],1)},M=[],$=(n("96cf"),n("1da1")),E={data:function(){return{page:{currentPage:1,pageSize:5,totalCount:0,totalPage:0,params:{},sortColumn:"createdTime",sortMethod:"desc",list:[]},audio:[{id:1,name:"听妈妈的话",artist:"周杰伦",url:"http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_138243&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3",cover:"http://img1.kuwo.cn/star/starheads/240/42/97/3914752958.jpg",lrc:"[00:11.64]小朋友 你是否有很多问号 \\n[00:14.26]为什么 别人在那看漫画 \\n[00:16.89]我却在学画画 对这钢琴说话 \\n[00:19.37]别人在玩游戏 我却靠在墙壁背我的ABC \\n[00:22.38]我说我要一架大大的飞机 \\n[00:24.91]我却得到一只旧旧螺旋机 \\n[00:27.48]为什么要听妈妈的话 \\n[00:29.79]长大后你就会开始懂得这段话 哼 \\n[00:32.26]长大后我开始明白 \\n[00:35.23]为什么我 跑得比别人快 \\n[00:36.64]飞得比别人高 \\n[00:37.88]将来大家看的都是我画的漫画 \\n[00:40.23]大家唱的都是 我写的歌 \\n[00:42.95]妈妈的辛苦 不让你看见 \\n[00:45.57]温暖的事都在她心里面 \\n[00:48.01]有空就得多摸摸她的手 \\n[00:50.70]把手牵着一起梦游 \\n[00:53.10]听妈妈的话 别让她受伤 \\n[01:03.14]想快快长大 才能保护她 \\n[01:12.93]美丽的白发 幸福中发芽 \\n[01:23.96]天使的魔法 温暖中慈祥 \\n[01:34.43]在你的未来 音乐是你的王牌 \\n[01:36.21]那王牌谈的恋爱 \\n[01:37.68]而我不想把你教坏 \\n[01:39.21]还是听妈妈的话吧 \\n[01:40.52]晚点在恋爱吧 \\n[01:41.96]我知道你未来的路 \\n[01:44.09]干嘛比我更清楚 \\n[01:45.40]你因为太多学习的同学 \\n[01:46.53]在这块写东写西 \\n[01:47.50]但我建议最好听妈妈 \\n[01:49.10]我会用功读书 \\n[01:50.23]用功读书怎么会从我嘴巴说出 \\n[01:52.34]不想你输所以要叫你用功读书 \\n[01:55.47]妈妈挑给你的毛病你要好好的收着 \\n[01:57.56]因为不知道是我要告诉她我还留着 \\n[01:59.91]对了 我会遇到了周润发 \\n[02:02.31]所以你可以跟同学炫耀 \\n[02:03.38]赌神未来是你爸爸 \\n[02:04.47]我找不到你写的情书 \\n[02:06.94]你喜欢的要承认 \\n[02:08.02]因为我会了解你会在操场上牵她 \\n[02:09.40]你会开始喜欢唱流行歌 \\n[02:12.81]因为张学友开始准备唱吻别 \\n[02:15.43]听妈妈的话 别让她受伤 \\n[02:26.22]想快快长大 才能保护她 \\n[02:36.16]美丽的白发 幸福中发芽 \\n[02:46.66]天使的魔法 温暖中慈祥 \\n[02:56.68]听妈妈的话 别让她受伤 \\n[03:07.46]想快快长大 才能保护她 \\n[03:17.27]长大后我开始明白 为什么我 \\n[03:20.81]跑得比别人快 飞得比别人高 \\n[03:22.56]将来大家看的都是我画的漫画 \\n[03:25.52]大家唱的都是我写的歌 \\n[03:28.31]妈妈的辛苦她不让你看见 \\n[03:30.72]温暖的事都在她心里面 \\n[03:33.31]有空就得多摸摸她的手 \\n[03:36.15]把手牵着一起梦游 \\n[03:38.34]听妈妈的话 别让她受伤 \\n[03:48.72]想快快长大 才能保护她 \\n[03:59.10]美丽的白发 幸福中发芽 \\n[04:09.32]天使的魔法 温暖中慈祥"},{id:2,name:"以父之名",artist:"周杰伦",url:"http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_28386348&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3",cover:"https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ce3122aecb8065387beaa315afe6c679/d01373f082025aaff92dd92bfaedab64034f1a36.jpg",lrc:"\\n[00:18.80]以父之名 \\n[00:35.80]周杰伦 \\n[00:52.80]制作人：秋晓之 QQ：285552115 \\n[01:09.80] \\n[01:26.56]微凉的晨露沾湿黑礼服 \\n[01:29.67]石板路有雾父在低诉 \\n[01:32.52]无奈的觉悟只能更残酷 \\n[01:35.33]一切都为了通往圣堂的路 \\n[01:38.02]吹不散的雾隐没了意图 \\n[01:40.67]谁轻柔踱步停住 \\n[01:43.34]还来不及哭穿过的子弹就带走温度 \\n[01:47.15] \\n[01:48.69]我们每个人都有罪 \\n[01:50.44]犯着不同的罪 \\n[01:51.77]我能决定谁对 \\n[01:53.15]谁又该要沉睡 \\n[01:54.53]争论不能解决 \\n[01:55.76]在永无止境的夜 \\n[01:57.35]关掉你的嘴 \\n[01:58.69]唯一的恩惠 \\n[01:59.88]挡在前面的人都有罪 \\n[02:01.18]后悔也无路可退 \\n[02:02.64]以父之名判决 \\n[02:03.96]那感觉没有适合词汇 \\n[02:05.59]就像边笑边掉泪 \\n[02:07.04]凝视着完全的黑 \\n[02:08.42]阻挡悲剧蔓延的悲剧会让我沉醉 \\n[02:10.72]低头亲吻我的左手 \\n[02:12.17]换取被宽恕的承诺 \\n[02:13.50]老旧管风琴在角落 \\n[02:14.93]一直一直一直伴奏 \\n[02:16.25]黑色帘幕被风吹动 \\n[02:17.66]阳光无言地穿透 \\n[02:19.18]洒向那群被我驯服后的 兽 \\n[02:21.88]沉默地喊叫沉默地喊叫 \\n[02:23.55]孤单开始发酵 \\n[02:24.88]不停对着我嘲笑 \\n[02:26.29]回忆逐渐燃烧 \\n[02:27.66]曾经纯真的画面 \\n[02:28.77]残忍地温柔出现 \\n[02:30.21]脆弱时间到 \\n[02:31.33]我们一起来祷告 \\n[02:32.95]仁慈的父我已坠入 \\n[02:35.73]看不见罪的国度 \\n[02:38.77]请原谅我的自负 \\n[02:41.68] \\n[02:43.77]没人能说没人可说 \\n[02:46.59]好难承受 \\n[02:48.67]荣耀的背后刻着一道孤独 \\n[02:52.52] \\n[02:54.66]闭上双眼我又看见 \\n[02:57.67]当年那梦的画面 \\n[03:00.59]天空是蒙蒙的雾 \\n[03:03.56] \\n[03:05.76]父亲牵着我的双手 \\n[03:08.66]轻轻走过 \\n[03:10.67]清晨那安安静静的石板路 \\n[03:14.58] \\n[03:46.34]低头亲吻我的左手 \\n[03:47.88]换取被宽恕的承诺 \\n[03:49.21]老旧管风琴在角落 \\n[03:50.68]一直一直一直伴奏 \\n[03:52.21]黑色帘幕被风吹动 \\n[03:53.55]阳光无言地穿透 \\n[03:54.88]洒向那群被我驯服后的 兽 \\n[03:57.56]沉默地喊叫沉默地喊叫 \\n[03:59.21]孤单开始发酵 \\n[04:00.68]不停对着我嘲笑 \\n[04:01.77]回忆逐渐燃烧 \\n[04:03.33]曾经纯真的画面 \\n[04:04.54]残忍地温柔出现 \\n[04:05.69]脆弱时间到 \\n[04:06.88]我们一起来祷告 \\n[04:08.65]仁慈的父我已坠入 \\n[04:11.90]看不见罪的国度 \\n[04:14.58]请原谅我的自负 \\n[04:17.97] \\n[04:19.88]没人能说没人可说 \\n[04:22.85]好难承受 \\n[04:24.66]荣耀的背后刻着一道孤独 \\n[04:27.67] \\n[04:30.84]仁慈的父我已坠入 \\n[04:36.44]看不见罪的国度 \\n[04:42.07]请原谅我 我的自负 \\n[04:47.36]刻着一道孤独 \\n[04:52.74]仁慈的父我已坠入 \\n[04:55.56]看不见罪的国度 \\n[04:58.28]请原谅我的自负 \\n[05:01.75] \\n[05:03.58]没人能说没人可说 \\n[05:06.49]好难承受 \\n[05:08.66]荣耀的背后刻着一道孤独 \\n[05:12.29] \\n[05:14.32]那斑驳的家徽 我擦拭了一夜(闭上双眼我又看见) \\n[05:17.45]孤独的光辉 我才懂的感觉(当年那梦的画面) \\n[05:20.13]烛光 不 不 停的 摇晃(天空是蒙蒙的雾) \\n[05:22.41]猫头鹰在 窗棂上 对著远方眺望 \\n[05:25.50]通向 大厅的长廊 (父亲牵着我的双手) \\n[05:28.42]一样 说不出的沧桑(轻轻走过)"},{id:3,name:"Wayward One",artist:"Jillian Rae",url:"http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_72217588&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3",cover:"https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300",lrc:"暂无歌词"},{id:4,name:"无悔一生",artist:"Beyond",url:"http://sc1.111ttt.cn/2015/1/06/02/99021925549.mp3",cover:"http://p1.music.126.net/n82_qxlHOmfgL9jILf72lg==/87960930223110.jpg?param=130y130",lrc:"\\n[00:00.00]歌手：Beyond \\n[00:00.00]歌名：无悔这一生 \\n[00:00.00]制作：mp3.5nd.com \\n[00:14.00] 阳光历次消散别去 \\n[00:21.00]无理冲击我心绪 \\n[00:29.00] 前景没法打算怎么 \\n[00:36.00] 谁会偷生远方里 \\n[00:45.00]每次记忆哭笑 \\n[00:49.00]将心意再变改 \\n[00:52.00] 一分一秒 \\n[00:57.00]无意对一切话别 \\n[01:02.00]无意却远走他方 \\n[03:12.00]\\n[02:43.00]\\n[01:06.00] 没有泪光风里劲闯 \\n[03:16.00]\\n[02:47.00]\\n[01:11.00]怀着心中新希望 \\n[03:19.00]\\n[02:51.00]\\n[01:14.00]能冲一次 \\n[03:21.00]\\n[02:52.00]\\n[01:16.00]多一次 \\n[03:23.00]\\n[02:54.00]\\n[01:18.00]不息自强 \\n[03:26.00]\\n[02:57.00]\\n[01:21.00]没有泪光风里劲闯 \\n[03:30.00]\\n[03:01.00]\\n[01:25.00] 重植根于小岛岸 \\n[03:34.00]\\n[03:05.00]\\n[01:29.00] 如天可变风可转 \\n[03:37.00]\\n[03:08.00]\\n[01:32.00]不息自强 \\n[03:40.00]\\n[01:35.00] 这方向 \\n[01:50.00]无奈静听不舍心声 \\n[01:58.00]和我偏偏正呼应 \\n[02:05.00]前方或会一生奔波 \\n[02:12.00]无悔这一生经过 \\n[02:21.00]纵有冷风飘过 \\n[02:25.00]将心绪再痛逼 \\n[02:28.00]紧守不变 \\n[02:34.00]无意对一切话别 \\n[02:37.00]无意再远走他方"},{id:5,name:"7 years",artist:"Lukas",url:"http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_48912894&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3",cover:"http://star.kuwo.cn/star/starheads/180/97/29/1971050202.jpg",lrc:"[00:00.14]7 Years - Lukas Graham \\n[00:01.08] \\n[00:20.50]Once I was seven years old my momma told me \\n[00:25.04]Go make yourself some friends or you'll be lonely \\n[00:28.43]Once I was seven years old \\n[00:31.29] \\n[00:36.80]It was a big big world but we thought we were bigger \\n[00:41.02]Pushing each other to the limits we were learning quicker \\n[00:45.06]By eleven smoking herb and drinking burning liquor \\n[00:49.01]Never rich so we were out to make that steady figure \\n[00:52.48]Once I was eleven years old my daddy told me \\n[00:57.02]Go get yourself a wife or you'll be lonely \\n[01:00.47]Once I was eleven years old \\n[01:02.93] \\n[01:08.91]I always had that dream like my daddy before me \\n[01:12.73]So I started writing songs I started writing stories \\n[01:16.85]Something about the glory just always seemed to bore me \\n[01:20.64]Cause only those I really love will ever really know me \\n[01:24.61]Once I was 20 years old my story got told \\n[01:29.27]Before the morning sun when life was lonely \\n[01:32.48]Once I was 20 years old \\n[01:35.19] \\n[01:35.97]Lukas Graham \\n[01:40.12] \\n[01:40.87]I only see my goals I don't believe in failure \\n[01:44.89]Cause I know the smallest voices they can make it major \\n[01:48.73]I got my boys with me at least those in favor \\n[01:52.81]And if we don't meet before I leave I hope I'll see you later \\n[01:56.51]Once I was 20 years old my story got told \\n[02:00.82]I was writing about everything I saw before me \\n[02:04.44]Once I was 20 years old \\n[02:07.49] \\n[02:12.52]Soon we'll be 30 years old our songs have been sold \\n[02:16.81]We've traveled around the world and we're still rolling \\n[02:20.48]Soon we'll be 30 years old \\n[02:23.22] \\n[02:28.76]I'm still learning about life \\n[02:30.72]My woman brought children for me \\n[02:32.68]So I can sing them all my songs \\n[02:34.62]And I can tell them stories \\n[02:36.72]Most of my boys are with me \\n[02:38.46]Some are still out seeking glory \\n[02:40.71]And some I had to leave behind \\n[02:42.78]My brother I'm still sorry \\n[02:44.52]Soon I'll be 60 years old my daddy got 61 \\n[02:48.93]Remember life and then your life becomes a better one \\n[02:52.71]I made the man so happy when I wrote a letter once \\n[02:56.74]I hope my children come and visit once or twice a month \\n[03:00.37]Soon I'll be 60 years old will I think the world is cold \\n[03:04.70]Or will I have a lot of children who can warm me \\n[03:08.35]Soon I'll be 60 years old \\n[03:11.44] \\n[03:16.52]Soon I'll be 60 years old will I think the world is cold \\n[03:20.80]Or will I have a lot of children who can warm me \\n[03:24.45]Soon I'll be 60 years old \\n[03:27.76] \\n[03:32.43]Once I was seven years old my momma told me \\n[03:36.88]Go make yourself some friends or you'll be lonely \\n[03:40.47]Once I was seven years old \\n[03:43.35] \\n[03:48.40]Once I was seven years old"}]}},created:function(){return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{}},j=E,T=Object(g["a"])(j,x,M,!1,null,null,null),U=T.exports,D=n("5f87"),P={components:{Player:U,Navbar:C,Bottom:N},data:function(){return{locale:i.a,show:!0,Authorization:Object(D["a"])()}},created:function(){var e=this;this.mouseScroll(),this.tocuchMoveEvent(),o["a"].getList().then((function(t){e.$store.commit("global/SET_CATEGORY",t.data)}))},mounted:function(){},methods:{tocuchMoveEvent:function(){var e,t,n,s,a=this;function o(n){var s=n.touches[0];e=s.pageX,t=s.pageY}function r(a){var o=a.touches[0];n=e-o.pageX,s=t-o.pageY}function i(e){s>0&&!0===a.show?(a.show=!1,console.log("上滑距离:"+s+"px")):s<0&&!1===a.show&&(s*=-1,a.show=!0,console.log("下滑距离:"+s+"px")),n>0&&(n=0)}document.addEventListener("touchstart",o,!1),document.addEventListener("touchmove",r,!1),document.addEventListener("touchend",i,!1)},mouseScroll:function(){document.addEventListener&&document.addEventListener("DOMMouseScroll",this.watchScroll,!1),window.onmousewheel=document.onmousewheel=this.watchScroll},initLive2d:function(){null!=this.Authorization&&setTimeout((function(){window.L2Dwidget.init({pluginRootPath:"live2dw/",pluginJsPath:"lib/",pluginModelPath:"live2d-widget-model-shizuku/assets/",tagMode:!1,debug:!1,model:{jsonPath:"../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json"},display:{position:"left",width:240,height:480},mobile:{show:!0},log:!1})}),1e3)},watchScroll:function(e){e=e||window.event,e.wheelDelta?(e.wheelDelta>0&&!1===this.show&&(this.show=!0),e.wheelDelta<0&&!0===this.show&&(this.show=!1)):e.detail&&(e.detail<0&&!1===this.show&&(this.show=!0),e.detail>0&&!0===this.show&&(this.show=!1))}}},B=P,A=(n("800d"),Object(g["a"])(B,s,a,!1,null,"3c8d7a2a",null));t["default"]=A.exports},"17c2":function(e,t,n){"use strict";var s=n("b727").forEach,a=n("a640"),o=n("ae40"),r=a("forEach"),i=o("forEach");e.exports=r&&i?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"21ef":function(e,t,n){"use strict";var s=n("b775"),a="category";t["a"]={save:function(e){return Object(s["a"])({url:"/".concat(a,"/save"),method:"post",data:e})},deleteById:function(e){return Object(s["a"])({url:"/".concat(a,"/deleteById/").concat(e),method:"delete"})},update:function(e){return Object(s["a"])({url:"/".concat(a,"/update"),method:"put",data:e})},getById:function(e){return Object(s["a"])({url:"/".concat(a,"/getById/").concat(e),method:"get"})},getAll:function(){return Object(s["a"])({url:"/".concat(a,"/getAll"),method:"get"})},getList:function(){return Object(s["a"])({url:"/".concat(a,"/getList"),method:"get"})},getByPage:function(e){return Object(s["a"])({url:"/".concat(a,"/getByPage"),method:"post",data:e})},enable:function(e){return Object(s["a"])({url:"/".concat(a,"/enable/").concat(e),method:"put"})},disable:function(e){return Object(s["a"])({url:"/".concat(a,"/disable/").concat(e),method:"put"})}}},"3f0b":function(e,t,n){"use strict";var s=n("ae33"),a=n.n(s);a.a},4160:function(e,t,n){"use strict";var s=n("23e7"),a=n("17c2");s({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"70b3":function(e,t,n){},"800d":function(e,t,n){"use strict";var s=n("70b3"),a=n.n(s);a.a},a640:function(e,t,n){"use strict";var s=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&s((function(){n.call(null,t||function(){throw 1},1)}))}},ae33:function(e,t,n){},ae40:function(e,t,n){var s=n("83ab"),a=n("d039"),o=n("5135"),r=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(o(i,e))return i[e];t||(t={});var n=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,m=o(t,0)?t[0]:c,u=o(t,1)?t[1]:void 0;return i[e]=!!n&&!a((function(){if(l&&!s)return!0;var e={length:-1};l?r(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,m,u)}))}},b0f9:function(e,t,n){},b727:function(e,t,n){var s=n("0366"),a=n("44ad"),o=n("7b0b"),r=n("50c4"),i=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,m=4==e,u=6==e,d=5==e||u;return function(h,g,p,f){for(var v,b,w=o(h),y=a(w),k=s(g,p,3),S=r(y.length),C=0,I=f||i,L=t?I(h,S):n?I(h,0):void 0;S>C;C++)if((d||C in y)&&(v=y[C],b=k(v,C,w),e))if(t)L[C]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:c.call(L,v)}else if(m)return!1;return u?-1:l||m?m:L}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bffb:function(e,t,n){"use strict";var s=n("0087"),a=n.n(s);a.a},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
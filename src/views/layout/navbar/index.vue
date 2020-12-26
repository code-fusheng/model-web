<template>
  <div class="menu-container">
    <div class="nav-logo">
      <!-- <img src="@/assets/img/code-fusheng.jpg" class="logo-img"> -->
      <router-link to="/">
        <span class="logo-text">个人论坛 | code-fusheng</span>
      </router-link>
    </div>
    <div class="nav-menu-item">
      <!-- <a-menu :default-selected-keys="[$route.path]" mode="horizontal"> -->
      <a-menu mode="horizontal">
        <a-menu-item key="/index">
          <router-link to="/">
            <a-icon type="home" />首页
          </router-link>
        </a-menu-item>
        <!-- <a-menu-item key="/article">
          <router-link to="/article">
            <a-icon type="book" />文章
          </router-link>
        </a-menu-item> -->
        <a-menu-item key="/tools">
          <router-link to="/tools">
            <a-icon type="tool" />工具
          </router-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <router-link to="/about">
            <a-icon type="question-circle" />关于
          </router-link>
        </a-menu-item>
      </a-menu>
    </div>

    <div class="nav-menu-search">
      <a-input-search v-model="content" placeholder="搜索中心" @search="toSearch(content)" />
      <!-- 登录注册框 -->
      <a-divider v-if="!isLogin" type="vertical" />
      <a v-if="!isLogin" id="loginButton" class="login-button" @click="showLoginModal()">登录</a>
      <a-divider v-if="!isLogin" type="vertical" />
      <a v-if="!isLogin" class="login-button" @click="showRegisterModal()">注册</a>
      <span v-else class="login-span">
        <a-badge :count="messageCount">
          <a href="/remind">
            <a-icon type="bell" :style="{color:'#fff',fontSize:'20px'}" />
          </a>
        </a-badge>
        <a-divider type="vertical" />
        <a-badge count="10">
          <a href="/chat">
            <a-icon type="message" :style="{color:'#fff',fontSize:'20px'}" />
          </a>
        </a-badge>
        <a-divider type="vertical" />
      </span>
      <a-modal v-model="visible" :footer="null">
        <login current="current" />
      </a-modal>
      <!-- 用户头像信息 -->
      <div v-if="isLogin">
        <a-dropdown placement="bottomCenter" class="user-dropdown">
          <a-avatar
            shape="square"
            :src="this.$store.getters.header"
            style="margin-bottom:5px;color: #f56a00; backgroundColor: #fde3cf"
          />
          <a-menu slot="overlay" :style="{marginTop:'5px'}">
            <a-menu-item>
              <a href="/userInfo">个人主页</a>
            </a-menu-item>
            <a-menu-item>
              <a href="/profile">账号管理</a>
            </a-menu-item>
            <a-menu-item>
              <a @click="logout">退出登录</a>
            </a-menu-item>
            <a-menu-item>
              <a v-if="$store.getters.userId == 1" href="http://175.24.45.179:10000/" target="_blank">后台管理</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Login from '@/views/user/login/index'
import messageApi from '@/api/operation/message'
export default {
  components: {
    Login
  },
  data() {
    return {
      collapsed: true,
      showNav: false,
      content: '',
      visible: false,
      isLogin: this.$store.getters.token !== undefined,
      userName: '',
      userIcon: this.$store.getters.header,
      temp: {},
      messageList: [],
      messageCount: 0 // 消息计数
    }
  },
  watch: {
    'this.$route.path': function() {
      console.log(this.$route.path)
    },
    '$store.getters.messageCount': function() {
      this.messageCount = this.$store.getters.messageCount
    }
  },
  created() {
    console.log(this.$route.path)
    // this.changeShowNav()
    this.name = this.$store.getters.name
    if (this.$store.getters.token) {
      this.getMessageList()
    }
  },
  mounted() {
    // WebSocket
    if ('WebSocket' in window) {
      this.websocket = new WebSocket(process.env.VUE_APP_WEBSOCKET_URL)
      // alert('连接浏览器')
      this.initWebSocket()
    } else {
      alert('当前浏览器 不支持')
    }
  },
  beforeDestroy() {
    this.onbeforeunload()
  },
  methods: {
    changeShowNav() {
      // return setInterval(() => {
      //   this.showNav = !this.showNav
      // }, 5000)
    },
    showLoginModal() {
      this.visible = true
      // document.getElementById('loginItem').click()
    },
    showRegisterModal() {
      this.visible = true
    },
    logout(e) {
      e.preventDefault()
      this.$store.dispatch('user/logout').then(() => {
        location.assign('/')
      })
    },
    toSearch(val) {
      this.$router.push({
        path: '/search/index',
        query: {
          keyword: val
        }
      })
    },
    initWebSocket() {
      // 连接错误
      this.websocket.onerror = this.setErrorMessage

      // 连接成功
      this.websocket.onopen = this.setOnopenMessage

      // 收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage

      // 连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage

      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },
    setErrorMessage() {
      console.log('WebSocket连接发生错误   状态码：' + this.websocket.readyState)
    },
    setOnopenMessage() {
      console.log('WebSocket连接成功    状态码：' + this.websocket.readyState)
    },
    setOnmessageMessage(event) {
      // 根据服务器推送的消息做自己的业务处理
      console.log('服务端返回：' + event.data)
      this.temp = JSON.parse(event.data)
      if (this.temp.receiveUserName === this.$store.getters.name) {
        this.messageCount++
        this.$store.commit('global/SET_MESSAGE_COUNT', this.messageCount)
      }
      if (this.temp.sendUserName !== this.$store.getters.name) {
        switch (this.temp.messageType) {
          case 1:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 评论了 ${this.temp.receiveUserName} 的文章 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 2:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 回复了 ${this.temp.receiveUserName} 的评论 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 3:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 点赞了 ${this.temp.receiveUserName} 的文章 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 4:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 点赞了 ${this.temp.receiveUserName} 的评论 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 5:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 点赞了 ${this.temp.receiveUserName} 的提问 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 6:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 点赞了 ${this.temp.receiveUserName} 的答复 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 7:
            break
          case 8:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 收藏了 ${this.temp.receiveUserName} 的文章 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 9:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 收藏了 ${this.temp.receiveUserName} 的提问 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 10:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 收藏了 ${this.temp.receiveUserName} 的答复 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 12:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 批阅了 ${this.temp.receiveUserName} 的报告 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          case 13:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 答复了 ${this.temp.receiveUserName} 的提问 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
            break
          default:
            this.$message({
              customClass: 'message-model',
              message: `${this.temp.sendUserName} 评论了 ${this.temp.receiveUserName} 的文章 ${this.temp.messageTargetDesc}`,
              type: 'success'
            })
        }
      }
    },
    setOncloseMessage() {
      console.log('WebSocket连接关闭    状态码：' + this.websocket.readyState)
    },
    onbeforeunload() {
      this.closeWebSocket()
    },
    closeWebSocket() {
      this.websocket.close()
    },
    getMessageList() {
      messageApi.getList().then(res => {
        this.messageList = res.data
        this.messageList.forEach(element => {
          if (element.messageState === 0) {
            this.messageCount++
          }
        })
        this.$store.commit('global/SET_MESSAGE_COUNT', this.messageCount)
      })
    }
  }
}
</script>
<style scoped>
/* 滚动条的宽度 */
::-webkit-scrollbar {
    width: 0px;
    height: 1px;
}
/* 滚动条滑块样式 */
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(31, 162, 238);
}

.menu-container {
    width: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 50px;
    padding: 0 20px;
    line-height: 50px;
    /* background-image: linear-gradient(to right,rgba(12, 12, 12, 0.133) 0%, #1e4468 25%, #3366a8 50%, #20386b 75%, #051f2e 100%); */
    /* background-image: linear-gradient(to right,#623AA2 0%,#F97794 100%); */
    /* background-image: linear-gradient(to right,#667682 0%, #79868e 25%, #9fa7a9 50%, #969a9b 75%, #8d9498 100%); */
    /* margin-bottom: 10px; */
    /* border: 1px red solid; */
}

.ant-menu {
  /* background-color: rgba(255, 255, 255, 0) !important; */
  background-color: transparent;
}

.ant-menu-item a {
  color: #ffffff !important;
  font-family: '楷体';
}

.login-button {
  white-space: nowrap;
  font-size: 18px;
  color: white;
  font-family: '楷体';
}

.nav-logo {
    height: 50px;
    /* width: 414px; */
    white-space: nowrap;
    /* display: flex;
    flex-direction: row; */
    align-items: center;
    text-align: center;
    margin: 0 20px;
}

.logo-img {
    width: 40px;
    height: 50px;
    margin-right: 10px;
}

.logo-text {
    cursor: pointer;
    line-height: 50px;
    font-size: 24px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
  }
  @keyframes masked-animation {
    0% {
        background-position: 0  0;
    }
    100% {
        background-position: -100%  0;
    }
  }

.logo-text {
    font-size: 24px;
}

.nav-menu-search {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
    padding-right: 20px;
}

.ant-menu {
    font-size: 16px !important;
}

.ant-menu-horizontal {
    border-bottom: none !important;
}

.login-span {
  width: 100px;
  white-space: nowrap;
  height: 50px;
  line-height: 60px;
  align-content: center;
  align-items: center;
  text-align: center;
  margin: 0 10px;
}

.login {
    color: black;
    margin-left: 20px;
}

.login:hover {
    color: black;
}

.login-header {
    color: black;
    margin-left: 20px;
}

.login-header-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #e5e5e5;
}
.user-dropdown {
    margin-left: 15px;
}
</style>

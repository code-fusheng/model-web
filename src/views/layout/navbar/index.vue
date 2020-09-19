<template>
  <div class="menu-container">
    <div class="nav-logo">
      <!-- <img src="@/assets/img/code-fusheng.jpg" class="logo-img"> -->
      <router-link to="/">
        <span class="logo-text">个人论坛 | code-fusheng</span>
      </router-link>
    </div>
    <div class="nav-menu-item">
      <a-menu :default-selected-keys="[$route.path]" mode="horizontal">
        <a-menu-item key="/index">
          <router-link to="/">
            <a-icon type="home" />首页
          </router-link>
        </a-menu-item>
        <a-menu-item key="/article">
          <router-link to="/article">
            <a-icon type="book" />文章
          </router-link>
        </a-menu-item>
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
      <!-- <a-input-search v-model="content" placeholder="在这里能搜到奇怪的东西" style="width: 200px" @click="toSearch()" /> -->
      <!-- <a-divider type="vertical" /> -->
      <!-- 登录注册框 -->
      <a-divider v-if="!isLogin" type="vertical" />
      <a v-if="!isLogin" id="loginButton" class="login-button" @click="showLoginModal()">登录</a>
      <a-divider v-if="!isLogin" type="vertical" />
      <a v-if="!isLogin" class="login-button" @click="showRegisterModal()">注册</a>
      <span v-else class="login-span">
        <a-badge count="10">
          <a href="/remind">
            <a-icon type="bell" :style="{color:'#000',fontSize:'20px'}" />
          </a>
        </a-badge>
        <a-divider type="vertical" />
        <a-badge count="10">
          <a href="/chat">
            <a-icon type="message" :style="{color:'#000',fontSize:'20px'}" />
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
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Login from '@/views/user/login/index'
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
      messageCount: 0 // 消息计数
    }
  },
  watch: {
    'this.$route.path': function() {
      console.log(this.$route.path)
    }
  },
  created() {
    console.log(this.$route.path)
    // this.changeShowNav()
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
    background-color: rgb(119, 214, 110);
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
    /* background-image: linear-gradient(to right,#623AA2 0%,#F97794 100%); */
    background-image: linear-gradient(to right,#dbd8e2 0%,#5a5a5a 100%);
    /* margin-bottom: 10px; */
    /* border: 1px red solid; */
}

.ant-menu {
  /* background-color: rgba(255, 255, 255, 0) !important; */
  background-color: transparent;
}

.ant-menu-item a {
  color: #ffffff !important;
}

.login-button {
  white-space: nowrap;
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
  line-height: 50px;
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

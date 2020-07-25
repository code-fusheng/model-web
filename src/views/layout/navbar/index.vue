<template>
  <div class="menu-container">
    <div class="nav-logo">
      <!-- <img src="@/assets/img/code-fusheng.jpg" class="logo-img"> -->
      <span class="logo-text">个人论坛 | code-fusheng</span>
    </div>
    <div class="nav-menu-search">
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="index">
          <router-link to="/">
            <a-icon type="mail" />首页
          </router-link>
        </a-menu-item>
        <a-menu-item key="article">
          <router-link to="/article">
            <a-icon type="mail" />文章
          </router-link>
        </a-menu-item>
        <a-menu-item key="about">
          <router-link to="/about">
            <a-icon type="mail" />关于
          </router-link>
        </a-menu-item>
      </a-menu>
      <a-input-search placeholder="在这里能搜到奇怪的东西" style="width: 200px" />
      <a-divider type="vertical" />
      <a v-if="!isLogin" id="loginR" @click="showModal">登录</a>
      <a-divider v-if="!isLogin" type="vertical" />
      <a v-if="!isLogin" href="/register">注册</a>
      <span v-else>
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
        <login-box />
      </span>
      <a-modal v-model="visible" title="登录" :footer="null">
        <login />Or
        <a href="/register">去注册</a>
      </a-modal>
      <!-- 用户头像信息 -->
      <a-dropdown placement="bottomCenter" class="user-dropdown">
        <a-avatar
          shape="square"
          :src="userIcon"
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
    <!-- 登录注册组件 -->
    <!-- <a-model :v-model="visible" title="登录" :footer="null">
      <login />
    </a-model> -->
  </div>
</template>
<script>
import Login from '@/views/login/index'
export default {
  components: {
    Login
  },
  data() {
    return {
      current: ['index'],
      visible: false,
      isLogin: false,
      userName: '',
      userIcon: '',
      messageCount: 0 // 消息计数
    }
  },
  methods: {
    showModal() {
      this.visible = true
    }
  }
}
</script>
<style scoped>
.menu-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    line-height: 60px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 10px;
}

.nav-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.logo-text {
    font-size: 24px;
}

.nav-menu-search {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 40px;
}

.ant-menu {
    font-size: 16px !important;
}

.ant-menu-horizontal {
    border-bottom: none !important;
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

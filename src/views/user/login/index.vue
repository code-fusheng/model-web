<template>
  <div class="login-background">
    <a-spin :spinning="spinning">
      <div class="login-container">
        <div class="login-title">欢迎进入</div>
        <a-menu v-model="current" mode="horizontal" @select="changeTab">
          <a-menu-item key="login">登录</a-menu-item>
          <a-menu-item key="register">注册</a-menu-item>
        </a-menu>
        <div class="content">
          <div v-show="login" class="login">
            <a-form :form="loginForm" @submit="loginSubmit">
              <a-form-item>
                <a-input
                  v-decorator="[
                    'username',
                    { rules: [{ required: true, message: '请输入账号!' }] }
                  ]"
                  placeholder="请输入账号"
                >
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    { rules: [{ required: true, message: '请输入密码!' }] }
                  ]"
                  placeholder="请输入密码"
                  type="password"
                >
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" block>登录</a-button>
              </a-form-item>
            </a-form>
          </div>
          <div v-show="register" class="register">
            <a-form :form="registerForm" @submit="registerSubmit">
              <a-form-item>
                <a-input
                  v-decorator="[
                    'username',
                    { rules: [{ required: true, message: '请输入账号!' }] }
                  ]"
                  placeholder="请输入账号"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    { rules: [{ required: true, message: '请输入密码!' }] }
                  ]"
                  placeholder="请输入密码"
                  type="password"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'nickname',
                    { rules: [{ required: true, message: '请输入昵称!' }] }
                  ]"
                  placeholder="请输入昵称"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'userEmail',
                    { rules: [{ required: true, message: '请输入邮箱!' }] }
                  ]"
                  placeholder="请输入邮箱"
                />
              </a-form-item>
              <a-form-item>
                <a-radio-group v-decorator="['sex']">
                  <a-radio value="1">
                    男
                  </a-radio>
                  <a-radio value="2">
                    女
                  </a-radio>
                </a-radio-group>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" block>注册</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script>
import userApi from '@/api/user/user'
// import md5 from 'js-md5'
export default {
  data() {
    return {
      current: ['login'],
      login: true,
      spinning: false,
      loginForm: this.$form.createForm(this),
      registerForm: this.$form.createForm(this),
      register: false
    }
  },
  methods: {
    changeTab(e) {
      const key = e.key
      if (key === 'login') {
        this.login = true
        this.register = false
      }
      if (key === 'register') {
        this.register = true
        this.login = false
      }
    },
    loginSubmit(e) {
      e.preventDefault()
      // eslint-disable-next-line handle-callback-err
      this.loginForm.validateFields((err, values) => {
        if (!err) {
          this.spinning = true
          this.$store.dispatch('user/login', values).then(() => {
            this.$router.go(0)
          }).catch(() => {
            this.spinning = false
          })
        }
      })
    },
    registerSubmit(e) {
      e.preventDefault()
      // eslint-disable-next-line handle-callback-err
      this.registerForm.validateFields((err, values) => {
        userApi.register(values).then(res => {
          this.$message.info(res.msg)
        })
      })
    }
  }
}
</script>
<style scoped>
.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.ant-menu-item {
  width: 50%;
  text-align: center;
}

.content {
  margin-top: 20px;
}
</style>

<template>
  <div class="main">
    <transition name="menu">
      <navbar v-show="show" class="menu-container" />
    </transition>
    <div class="main-container">
      <div class="center-container">
        <a-config-provider :locale="locale">
          <router-view />
        </a-config-provider>
      </div>
    </div>
    <bottom />
    <a-back-top />
  </div>
</template>
<script>
import categoryApi from '@/api/article/category'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import Navbar from '@/views/layout/navbar/index'
import Bottom from '@/views/layout/bottom/index'
export default {
  components: {
    Navbar,
    Bottom
  },
  data() {
    return {
      locale: zhCN,
      show: true
    }
  },
  created() {
    this.mouseScroll()
    categoryApi.getList().then(res => {
      this.$store.commit('global/SET_CATEGORY', res.data)
    })
  },
  mounted() {
    this.initLive2d()
  },
  methods: {
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      // if (document.addEventListener) { // firefox
      //   document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      // }
      // 滚动滑轮触发scrollFunc方法  //ie 谷歌
      // window.onmousewheel = document.onmousewheel = this.watchScroll
    },
    initLive2d() {
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-shizuku/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json' },
          display: { position: 'left', width: 240, height: 480 },
          mobile: { show: true },
          log: false
        })
      }, 1000)
    },
    watchScroll(e) {
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.wheelDelta < 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) {
          // 当滑轮向上滚动
          this.show = true
        }
        if (e.detail > 0 && this.show === true) {
          // 当滑轮向下滚动
          this.show = false
        }
      }
    }
  }
}
</script>
<style scoped>
.main {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.main-container {
  min-width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: row;
  border: 1px green solid;
}

.center-container {
  margin: auto;
  width: 95%;
  min-height: 1200px;
  padding: 0 10px;
  border: solid 1px blue;
}

.menu-container {
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 60px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.menu-enter-active,
.menu-leave-active {
  transition: all .8s ease;
}
.menu-enter, .menu-leave-to
/* .menu-leave-active for below version 2.1.8 */ {
  transform: translateY(-70px);
  opacity: 0;
}

</style>

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
      <player v-show="false" class="music-player" />
    </div>
    <bottom class="buttom-container" />
    <a-back-top />
  </div>
</template>
<script>
import categoryApi from '@/api/article/category'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import Navbar from '@/views/layout/navbar/index'
import Bottom from '@/views/layout/bottom/index'
import Player from '@/views/common/Aplayer/index'
import { getToken } from '@/utils/auth'
export default {
  components: {
    Player,
    Navbar,
    Bottom
  },
  data() {
    return {
      locale: zhCN,
      show: true,
      Authorization: getToken()
    }
  },
  created() {
    this.mouseScroll()
    this.tocuchMoveEvent()
    categoryApi.getList().then(res => {
      this.$store.commit('global/SET_CATEGORY', res.data)
    })
  },
  mounted() {
    this.initLive2d()
  },
  methods: {
    tocuchMoveEvent() {
      var _this = this
      var startX, startY, x, y
      function touchStart(e) {
        // e.preventDefault()
        var touch = e.touches[0]
        startX = touch.pageX
        startY = touch.pageY
      }
      function touchMove(e) {
        // 滑动
        // e.preventDefault()
        var touch = e.touches[0]
        x = startX - touch.pageX // 滑动的距离 x
        y = startY - touch.pageY // 滑动的距离 y
      }
      function touchEnd(e) {
        // 手指离开屏幕
        // x 左右滑动距离 以及方向 左滑大于 0 右滑小于0
        // y 上下滑动距离 以及方向 上滑 大于0 下滑小于0
        // 判断滑动方向 上下
        if (y > 0 && _this.show === true) {
          _this.show = false
          console.log('上滑距离:' + y + 'px')
        } else if (y < 0 && _this.show === false) {
          y = y * -1
          _this.show = true
          console.log('下滑距离:' + y + 'px')
        }
        if (x > 0) {
          x = 0
        }
        // e.preventDefault()
      }
      document.addEventListener('touchstart', touchStart, false)
      document.addEventListener('touchmove', touchMove, false)
      document.addEventListener('touchend', touchEnd, false)
    },
    mouseScroll() {
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        // firefox
        document.addEventListener('DOMMouseScroll', this.watchScroll, false)
      }
      // 滚动滑轮触发scrollFunc方法 // ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll
      // 移动端页面手指滑动事件
    },
    initLive2d() {
      if (this.Authorization != null) {
        setTimeout(() => {
          window.L2Dwidget.init({
            pluginRootPath: 'live2dw/',
            pluginJsPath: 'lib/',
            pluginModelPath: 'live2d-widget-model-shizuku/assets/',
            tagMode: false,
            debug: false,
            model: {
              jsonPath: '../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json'
            },
            display: { position: 'left', width: 240, height: 480 },
            mobile: { show: true },
            log: false
          })
        }, 1000)
      }
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
  /* min-width: 1200px; */
  height: 100%;
  margin: auto;
}
.main-container {
  /* min-width: 1200px; */
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-image: linear-gradient(to right,rgba(12, 12, 12, 0.133) 0%, #1e4468 25%, #3366a8 50%, #20386b 75%, #051f2e 100%); */
  /* border: 1px green solid; */
}
.center-container {
  margin: auto;
  width: 100%;
  height: 100%;
  /* min-height: 1200px; */
  /* padding: 0 10px; */
  /* border: solid 1px blue; */
}

.menu-container {
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  /* min-width: 1200px; */
  height: 50px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.8s ease;
}
.menu-enter, .menu-leave-to
/* .menu-leave-active for below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}

.buttom-container {
  margin: auto;
  width: 100%;
  height: 100%;
  /* min-width: 1200px; */
}

.music-player {
  position: fixed;
  top: 35%;
  left: 0px;
  max-width: 300px;
  max-height: 250px;
  z-index: 99999;
}
</style>

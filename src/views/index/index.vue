<template>
  <div class="index-container">
    <!-- 主页图层 -->
    <div class="index-carousel-container" :style="'height:' + carouselStyle.height + 'px'">
      <div class="carousel-bg" />
      <div class="center-container">
        <div class="carousel-center-title">生而为人-我很抱歉</div>
        <!-- 动态座右铭 -->
        <div
          v-if="carouselShow"
          class="carousel-center-desc-ch"
        >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div
          v-else
          class="carousel-center-desc-english"
        >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>

        <!-- 中间按钮 -->
        <div class="carousel-center-button-container">
          <div class="read-button">开始阅读</div>
          <div class="link-button">GitHub</div>
        </div>
        图层宽高:{{ carouselStyle }}
      </div>
    </div>
    <!-- 主页内容区 -->
    <div class="index-content-container">
      <!-- 上端推荐文章 -->
      <div class="recom-article-container">上端推荐文章</div>
      <!-- 下端文章列表 -->
      <div class="article-card-list-container">文章卡片列表</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 主页图层动态样式
      carouselStyle: {
        widht: '',
        height: ''
      },
      //
      carouselShow: true
    }
  },
  mounted() {
    this.carouselStyle.height = document.body.clientHeight + 10
    this.carouselStyle.widht = document.body.clientWidth + 10
    window.onresize = () => {
      return (() => {
        this.carouselStyle.height = document.body.clientHeight + 10
        this.carouselStyle.widht = document.body.clientWidth + 10
        console.log('高度' + document.body.clientHeight + '宽度' + document.body.clientWidth)
      })()
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
/* 主页图层 */
.index-carousel-container {
    margin-top: -60px;
    /* height: 1340px; */
    /* height: 100%; */
    min-height: 660px;
    z-index: 1;
    opacity: 1;
    visibility: visible;
    transform: translateX(0px) translateX(0px) translateX(0px) translateZ(0px);
    background-image: linear-gradient(to right, #646366 0%, #caafb5 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 500px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    background-image: url("https://visualhunt.com/photos/1/black-and-white-nature-sailing-ship-ship.jpg?s=l");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.carousel-bg {
    background: rgba(0, 0, 0, 0.2);
    z-index: -99;
    opacity: 1;
    visibility: visible;
    transform: translateX(0px) translateX(0px) translateX(0px) translateZ(0px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.center-container {
    border: 1px solid rgb(247, 243, 243);
    color: #ffffff;
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.carousel-center-title {
    font-size: 40px;
}

/* 中间按钮 */
.carousel-center-button-container {
    width: 65%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.read-button {
    width: 120px;
    height: 45px;
    border: 1px solid #ffffff;
    text-align: center;
    line-height: 45px;
    border-radius: 30px;
    cursor: pointer;
}

.read-button:hover {
    border: 1px solid #f44336;
    background-color: #f44336;
    box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42),
        0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);
    transition: background-color 0.5s;
}

.link-button {
    width: 120px;
    height: 45px;
    border: 1px solid #ffffff;
    text-align: center;
    line-height: 45px;
    border-radius: 30px;
    cursor: pointer;
}

.link-button:hover {
    border: 1px solid #f44336;
    background-color: #f44336;
    box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42),
        0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);
    transition: background-color 0.5s;
}

/* 主页内容区 */
.index-content-container {
    background-color: rgb(232, 232, 233);
    min-height: 1503px;
    margin-top: -10px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 上端推荐文章 */
.recom-article-container {
    width: 80%;
    height: 600px;
    border: 1px solid blue;
    background-color: blue;
}

/* 下端文章卡片列表 */
.article-card-list-container {
    width: 80%;
    height: 1120px;
    max-height: 1120px;
    border: 1px solid green;
    background-color: green;
}
</style>

<template>
  <div class="index-container">
    <!-- 主页图层 -->
    <div class="index-carousel-container" :style="'height:' + carouselStyle.height + 'px'">
      <div class="carousel-bg"></div>
      <div class="center-container">
        <div class="carousel-center-title1">Hello World ! code-fusheng</div>
        <!-- <div class="carousel-center-title2">人生一世 何只百年 非我不知餍足</div> -->
        <spoltLight />
        <!-- 动态座右铭 -->
        <!-- <div
          v-if="carouselShow"
          class="carousel-center-desc-ch"
        >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div
          v-else
          class="carousel-center-desc-english"
        >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </div> -->
        <!-- 中间按钮 -->
        <div class="carousel-center-button-container">
          <a class="read-button" href="#recom-article">
            <a-icon class="button-icon" type="down-circle" />
            开始阅读
          </a>
          <a class="link-button" href="https://github.com/code-fusheng">
            <a-icon class="button-icon" type="link" />
            GitHub
          </a>
        </div>
        <div class="carousel-center-icon-container">
          <a-tooltip placement="top">
            <template slot="title">
              <span>Tel : 15115726712</span>
            </template>
            <a href="tel:15115726712"><a-icon class="item-icon" type="phone" /></a>
          </a-tooltip>
          <a-tooltip placement="top">
            <template slot="title">
              <span>Email : 2561035977@qq.com</span>
            </template>
            <a href="mailto:2561035977@qq.com"><a-icon class="item-icon" type="mail" /></a>
          </a-tooltip>
          <a-tooltip placement="top">
            <template slot="title">
              <span>访问我的GitHub</span>
            </template>
            <a href="https://github.com/code-fusheng"><a-icon class="item-icon" type="github" /></a>
          </a-tooltip>
          <a-tooltip placement="top">
            <template slot="title">
              <span>QQ : 2561035977</span>
            </template>
            <a href="https://qm.qq.com/cgi-bin/qm/qr?k=XYX9hWIo2kC1OlOacqrOMi3uDoPLVwK5&noverify=0"><a-icon class="item-icon" type="qq" /></a>
          </a-tooltip>
          <a-tooltip placement="top">
            <template slot="title">
              <span>微信 : 15115726712</span>
            </template>
            <a-icon class="item-icon" type="wechat" />
          </a-tooltip>
        </div>
        <!-- 图层宽高:{{ carouselStyle }} -->
      </div>
    </div>
    <!-- 主页内容区 -->
    <div class="index-content-container">
      <!-- 上端推荐文章 -->
      <div id="recom-article" class="recom-container">
        <div class="my-dream-container">
          <div class="dream-top">
            <div class="dream-icon"><a-icon type="cloud" /></div>
            <div class="dream-label">浮生若梦</div>
          </div>
          <div class="dream-content">{{ myDream }}</div>
        </div>
        <div class="my-recom-container">
          <div class="recom-top">
            <div class="recom-icon"><a-icon type="like" /></div>
            <div class="recom-label">推荐文章</div>
          </div>
          <div
            class="recom-article-container"
            :style="{
              backgroundImage: 'url(' + recomArticle.articleImage + ')',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }"
          >
            <div class="recom-article-card">
              <div class="article-card-body">
                <!-- <div class="recom-article-category">{{ recomArticle.categoryName }}</div> -->
                <div class="recom-article-title">
                  {{ recomArticle.articleTitle }}
                </div>
                <div class="recom-article-desc">
                  {{ recomArticle.articleDesc }}
                </div>
                <router-link :to="'articleRead/' + recomArticle.articleId">
                  <div class="read-more">
                    <a-icon class="read-more-icon" type="eye" />
                    阅读更多
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 下端文章列表 -->
      <div class="article-card-container">
        <div class="article-card-list-container">
          <div v-for="item in articleList" :key="item.articleId" class="article-card-item">
            <!-- 文章卡片容器 图片+说明 -->
            <div class="card-container">
              <router-link
                class="article-card-image"
                :style="{
                  backgroundImage: 'url(' + item.articleImage + ')',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat'
                }"
                :to="'articleRead/' + item.articleId"
              >
                <div class="article-card-title">{{ item.articleTitle }}</div>
              </router-link>
              <div class="article-card-info">
                <router-link :to="'articleRead/' + item.articleId">
                  <div class="article-desc-container">
                    <div class="article-desc">
                      {{ item.articleDesc }}
                    </div>
                  </div>
                </router-link>
                <div class="article-meta-container">
                  <div class="article-createdTime">
                    <a-icon class="meta-icon" type="clock-circle" />
                    {{ item.createdTime }}
                  </div>
                  <div class="article-category">
                    <a-icon class="meta-icon" type="tags" />
                    {{ item.categoryName }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-if="noMore = true" class="load-more" :loading="loadingMore"><a-icon class="load-more-icon" type="close" />到底了</div> -->
        </div>
      </div>
      <div class="load-more-item">
        <div v-if="noMore != true" :loading="loadingMore" class="load-more streamer-sun-button" @click="loadMore()">
          <a-icon class="load-more-icon" type="arrow-down" />
          加载更多
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleApi from '@/api/article/article'
export default {
  data() {
    return {
      showSingle: true,
      // 主页图层动态样式
      carouselStyle: {
        widht: '',
        height: ''
      },
      myDream: '世间繁华 何止三千 独我索然无味 人生一世 何只百年 非我不知餍足',
      myDream1: '不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。',
      carouselShow: true,
      recomArticle: {
        articleId: null,
        articleTitle: '',
        articleDesc: '',
        articleImage: '',
        categoryName: ''
      },
      //
      articleList: [],
      // 分页查询对象
      page: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 0,
        totalPage: 0,
        params: {},
        sortColumn: 'createdTime',
        sortMethod: 'asc',
        list: []
      },
      loadingMore: false,
      noMore: false
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
  created() {
    // this.changeShowSingle()
    this.getRecomArticle()
    this.getArticleList()
  },
  methods: {
    changeShowSingle() {
      return setInterval(() => {
        this.showSingle = !this.showSingle
      }, 5000)
    },
    // 获取推荐文章
    getRecomArticle() {
      const page = JSON.parse(JSON.stringify(this.page))
      page.pageSize = 1
      page.currentPage = 1
      page.sortColumn = 'updateTime'
      page.sortMethod = 'desc'
      articleApi.getByPage(page).then(res => {
        console.log(this.page)
        this.recomArticle = res.data.list[0]
        console.log(this.recomArticle)
      })
    },
    //
    getArticleList() {
      this.page.pageSize = 12
      this.page.sortColumn = 'createdTime'
      this.page.sortMethod = 'asc'
      articleApi.getByPage(this.page).then(res => {
        this.articleList = res.data.list
        console.log(this.articleList)
      })
    },
    loadMore() {
      if (this.noMore === false) {
        this.loadingMore = true
        this.page.currentPage += 1
        this.page.pageSize = 12
        articleApi.getByPage(this.page).then(res => {
          if (res.data.list.length < this.page.pageSize) {
            this.$message.warning('当前是最后一页了!')
            this.noMore = true
          }
          const dataList = res.data.list
          dataList.forEach(item => {
            this.articleList.push(item)
          })
          this.loadingMore = false
        })
      }
    }
  }
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
  /* background-image: linear-gradient(to right, #646366 0%, #caafb5 100%); */
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  /* background-image: url("https://visualhunt.com/photos/1/black-and-white-nature-sailing-ship-ship.jpg?s=l"); */
  background-image: url('../../assets/img/bgi-7-plus.jpg');
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
  /* border: 1px solid rgb(247, 243, 243); */
  color: #ffffff;
  width: 600px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.carousel-center-title1 {
  position: relative;
  font-family: 'STXingkai';
  color: #333333;
  font-size: 30px;
  cursor: pointer;
}
.carousel-center-title2 {
  position: relative;
  font-family: 'STXingkai';
  color: #333333;
  font-size: 30px;
  cursor: pointer;
}

.carousel-center-title1::after {
  content: 'Hello World ! code-fusheng';
  position: absolute;
  top: 0;
  left: 0;
  /* 文字透明色 */
  color: transparent;
  background-image: linear-gradient(to right, #c23616, #192a56, #00d2d3, yellow, #6d214f, #2e86de, #4cd137, #e84118);
  /* 背景绘制区域 值:text 代表设置了文字的镂空效果 前提必须是文字为透明色 */
  background-clip: text;
  /* 谷歌浏览器的私有属性 */
  -webkit-background-clip: text;
  /* 利用裁剪来创建爱你元素的可显示区域
    circle 表示创建了圆形;
    100px 表示圆形的直径;
    0%和50%表示圆形的圆心;
    圆形的直径和圆形的圆心利用 at 关键字隔开
    */
  clip-path: circle(30px at 0% 50%);
  /* 动画 名称 时长 无限循环 */
  animation: move1 5s infinite;
}

.carousel-center-title2::after {
  content: '人生一世 何只百年 非我不知餍足';
  position: absolute;
  top: 0;
  left: 0;
  /* 文字透明色 */
  color: transparent;
  background-image: linear-gradient(to left, #c23616, #192a56, #00d2d3, yellow, #6d214f, #2e86de, #4cd137, #e84118);
  /* 背景绘制区域 值:text 代表设置了文字的镂空效果 前提必须是文字为透明色 */
  background-clip: text;
  /* 谷歌浏览器的私有属性 */
  -webkit-background-clip: text;
  /* 利用裁剪来创建爱你元素的可显示区域
    circle 表示创建了圆形;
    100px 表示圆形的直径;
    0%和50%表示圆形的圆心;
    圆形的直径和圆形的圆心利用 at 关键字隔开
    */
  clip-path: circle(30px at 0% 50%);
  /* 动画 名称 时长 无限循环 */
  animation: move2 5s infinite;
}

/* 设置移动效果 */
@keyframes move1 {
  0% {
    clip-path: circle(30px at 0% 50%);
  }
  50% {
    clip-path: circle(30px at 100% 50%);
  }
  100% {
    clip-path: circle(30px at 0% 50%);
  }
}

@keyframes move2 {
  0% {
    clip-path: circle(30px at 100% 50%);
  }
  50% {
    clip-path: circle(30px at 0% 50%);
  }
  100% {
    clip-path: circle(30px at 100% 50%);
  }
}

/* 中间按钮 */
.carousel-center-button-container {
  /* margin-top: 15px; */
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.button-icon {
  margin-right: 5px;
}

.read-button {
  margin-right: 2px;
  width: 120px;
  height: 45px;
  border: 1px solid #ffffff;
  text-align: center;
  line-height: 45px;
  border-radius: 30px;
  cursor: pointer;
  color: #ffffff;
}

.read-button:hover {
  border: 1px solid #133751;
  background-color: #133751;
  box-shadow: 0 14px 26px -12px rgba(23, 75, 172, 0.42), 0 4px 23px 0 rgba(52, 95, 173, 0.12), 0 8px 10px -5px rgba(63, 110, 163, 0.2);
  transition: background-color 0.5s;
  transition: border 0.2s;
}

.link-button {
  margin-left: 2px;
  width: 120px;
  height: 45px;
  border: 1px solid #ffffff;
  text-align: center;
  line-height: 45px;
  border-radius: 30px;
  cursor: pointer;
  color: #ffffff;
}

.link-button:hover {
  border: 1px solid #133751;
  background-color: #133751;
  box-shadow: 0 14px 26px -12px rgba(23, 75, 172, 0.42), 0 4px 23px 0 rgba(52, 95, 173, 0.12), 0 8px 10px -5px rgba(63, 110, 163, 0.2);
  transition: background-color 0.5s;
  transition: border 0.2s;
}

.carousel-center-icon-container {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}

.item-icon {
  font-size: 24px;
  cursor: pointer;
  margin: 0 20px;
  color: #ffffff;
}

.item-icon:hover {
  color: rgb(30, 84, 201);
  transition: color 0.2s;
}

/* 主页内容区 */
.index-content-container {
  background-color: rgb(232, 232, 233);
  min-height: 1080px;
  margin-top: -10px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 上端推荐文章开始 */
.recom-container {
  width: 94%;
  max-width: 1125px;
  height: 700px;
  /* margin-bottom: 10px; */
  border: 1px solid white;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin-top: 15px;
}

.my-dream-container {
  margin-top: 60px;
  width: 63%;
  height: 30%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.dream-top {
  height: 45px;
  font-size: 30px;
  line-height: 45px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.dream-icon {
  font-size: 30px;
  margin-right: 10px;
  line-height: 45px;
}

.dream-content {
  /* text-indent: 2em; */
  width: 100%;
  height: 93px;
  font-size: 16px;
  color: #a5a5a5;
  text-align: center;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出部分省略号 */
  text-overflow: ellipsis;
}

.my-recom-container {
  /* border: 1px solid green; */
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  margin-bottom: 60px;
}

.recom-top {
  height: 45px;
  font-size: 30px;
  line-height: 45px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.recom-icon {
  font-size: 30px;
  margin-right: 10px;
  line-height: 45px;
}

.recom-article-container {
  /* filter:grayscale(80%); */
  margin-top: 10px;
  width: 90%;
  height: 300px;
  border: 1px solid rgba(180, 170, 170, 0.178);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.article-card-body {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.recom-article-category {
  height: 21px;
  font-size: 16px;
  line-height: 21px;
}

.recom-article-title {
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
}

.recom-article-desc {
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出部分省略号 */
  text-overflow: ellipsis;
  height: 80px;
  width: 80%;
  font-size: 18px;
  line-height: 40px;
  color: #a5a5a5;
}

.read-more {
  width: 120px;
  height: 45px;
  cursor: pointer;
  margin: 0 20px;
  color: #ffffff;
  line-height: 45px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  border: 1px solid #f44336;
  background-color: #f44336;
}

.read-more-icon {
  margin-right: 5px;
}

/* 上端推荐文章结束 */

/* 下端文章卡片列表 */

.load-more-icon {
  margin-right: 5px;
}

.load-more-item {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  margin-bottom: 20px;
  cursor: pointer;
}

.streamer-sun-button {
  position: relative;
  width: 120px;
  height: 45px;
  line-height: 45px;
  text-transform: uppercase;
  text-align: center;
  /* 文本下划线 */
  text-decoration: none;
  /* font-size: 24px; */
  color: #ffffff;
  border-radius: 50px;
  background-image: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
  /* 背景渐变色大小 - 宽度 */
  background-size: 400%;
  z-index: 1;
}

/* 发光效果 */
.streamer-sun-button::before {
  content: '';
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  border-radius: 50px;
  background-image: linear-gradient(to right, #03a9f4, #f441a5, #ffeb3b, #09a8f4);
  background-size: 400%;
  z-index: -1;
  /* 设置模糊度 */
  filter: blur(20px);
}

/* 流光动画 */
.streamer-sun-button:hover {
  animation: streamersun 8s infinite;
}

.streamer-sun-button:hover::before {
  animation: streamersun 8s infinite;
}

@keyframes streamersun {
  100% {
    /* 背景位置 */
    background-position: -400%, 0;
  }
}

.article-card-container {
  width: 94%;
  max-width: 1125px;
  display: flex;
  justify-content: center;
  /* min-height: 100vh; */
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
  /* background: linear-gradient(45deg,#24006b,#f42f8c) */
}

.article-card-list-container {
  width: 1125px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  /* display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
    grid-gap: 15px; */
  margin: 0 auto;
  transform-style: preserve-3d;
}

.article-card-item {
  position: relative;
  width: 30%;
  min-width: 350px;
  height: 245px;
  margin: 10px 5px;
  background: #fff;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  transition: transform 1s;
  -moz-transition: transform 1s; /* Firefox 4 */
  -webkit-transition: transform 1s; /* Safari and Chrome */
  -o-transition: transform 1s; /* Opera */
}

.article-card-item:hover {
  transform: scale(1.05, 1.05);
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.article-card-image {
  position: relative;
  height: 175px;
  width: 100%;
  /* min-width: 350px; */
  /* border: 1px solid black; */
  border-radius: 10px;
}

.article-card-title {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 24px;
  font-size: 15px;
  color: #ffffff;
}

.article-card-info {
  height: 70px;
  width: 100%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.article-desc-container {
  /* border: 1px solid red; */
  height: 40px;
}

.article-desc {
  width: 350px;
  text-align: left;
  line-height: 40px;
  white-space: nowrap;
  /* 超出隐藏 */
  overflow: hidden;
  /* 超出部分省略号 */
  text-overflow: ellipsis;
  text-indent: 1em;
  color: black;
}

.article-meta-container {
  padding: 0 10px;
  /* border: 1px solid blue; */
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.article-createdTime {
  color: rgb(13, 138, 19);
}

.article-category {
  color: #f40;
}

.meta-icon {
  margin-right: 5px;
  margin-left: 5px;
}
</style>

<template>
  <div class="index-container">
    <!-- 主页图层 -->
    <div class="index-carousel-container" :style="'height:' + carouselStyle.height + 'px'">
      <div class="carousel-bg" />
      <div class="center-container">
        <div class="carousel-center-title">生而为人-我很抱歉</div>
        <!-- 动态座右铭 -->
        <!-- <div
          v-if="carouselShow"
          class="carousel-center-desc-ch"
        >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div
          v-else
          class="carousel-center-desc-english"
        >XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div> -->

        <!-- 中间按钮 -->
        <div class="carousel-center-button-container">
          <a class="read-button" href="#recom-article"><a-icon class="button-icon" type="down-circle" />开始阅读</a>
          <a class="link-button" href="https://github.com/code-fusheng"><a-icon class="button-icon" type="right-circle" />GitHub</a>
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
            <div class="dream-label">我的梦想</div>
          </div>
          <div class="dream-content">{{ myDream }}</div>
        </div>
        <div class="my-recom-container">
          <div class="recom-top">
            <div class="recom-icon"><a-icon type="like" /></div>
            <div class="recom-label">推荐文章</div>
          </div>
          <div class="recom-article-container" :style="{backgroundImage: 'url(' + recomArticle.articleImage + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}">
            <div class="recom-article-card">
              <div class="article-card-body">
                <div class="recom-article-category">{{ recomArticle.categoryName }}</div>
                <div class="recom-article-title">{{ recomArticle.articleTitle }}</div>
                <div class="recom-article-desc">{{ recomArticle.articleDesc }}</div>
                <div class="read-more"><a-icon class="read-more-icon" type="eye" />阅读更多</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 下端文章列表 -->
      <div class="article-card-list-container">文章卡片列表</div>
    </div>
  </div>
</template>

<script>
import articleApi from '@/api/article/article'
export default {
  components: {},
  data() {
    return {
      // 主页图层动态样式
      carouselStyle: {
        widht: '',
        height: ''
      },
      myDream: '不是每个人都应该像我这样去建造一座水晶大教堂，但是每个人都应该拥有自己的梦想，设计自己的梦想，追求自己的梦想，实现自己的梦想。梦想是生命的灵魂，是心灵的灯塔，是引导人走向成功的信仰。有了崇高的梦想，只要矢志不渝地追求，梦想就会成为现实，奋斗就会变成壮举，生命就会创造奇迹。——罗伯·舒乐',
      //
      carouselShow: true,
      recomArticle: {
        articleId: null,
        articleTitle: '',
        articleDesc: '',
        articleImage: '',
        categoryName: ''
      },
      // 分页查询对象
      page: {
        currentPage: 1,
        pageSize: 1,
        totalCount: 0,
        totalPage: 0,
        params: {},
        sortColumn: 'updateTime',
        sortMethod: 'desc',
        list: []
      }
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
    this.getRecomArticle()
  },
  methods: {
    getRecomArticle() {
      articleApi.getByPage(this.page).then(res => {
        this.recomArticle = res.data.list[0]
        console.log(this.recomArticle)
      })
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
    /* border: 1px solid rgb(247, 243, 243); */
    color: #ffffff;
    width: 600px;
    height: 30%;
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
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.button-icon {
  margin-right: 5px;
}

.read-button {
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
    border: 1px solid #f44336;
    background-color: #f44336;
    box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42),
        0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);
    transition: background-color 0.5s;
    transition: border 0.2s;
}

.link-button {
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
    border: 1px solid #f44336;
    background-color: #f44336;
    box-shadow: 0 14px 26px -12px rgba(233, 30, 99, 0.42),
        0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2);
    transition: background-color 0.5s;
    transition: border 0.2s;
}

.carousel-center-icon-container {
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
    min-height: 1503px;
    margin-top: -10px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 上端推荐文章开始 */
.recom-container {
    width: 80%;
    max-width: 1125px;
    height: 700px;
    margin-bottom: 10px;
    border: 1px solid white;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
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
  width: 100%;
  height: 90px;
  font-size: 16px;
  color: #A5A5A5;
  text-align: center;
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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  color: rgba(0, 0, 0, .87);
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1),
              0 5px 15px rgba(0, 0, 0, .07);
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
  height: 80px;
  font-size: 18px;
  line-height: 80px;
  color: #A5A5A5;
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
.article-card-list-container {
    width: 80%;
    height: 1120px;
    max-height: 1120px;
    border: 1px solid green;
    background-color: green;
}
</style>

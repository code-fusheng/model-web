<template>
  <div class="search-container">
    <div class="search-icon">
      <p class="font-icon">code-fusheng | 个人论坛</p>
    </div>
    <a-input-search v-model="keyword" size="large" class="search-box" placeholder="搜索中心" enter-button style="width: 520px " @search="doSearch(keyword)" />
    <!-- 条件列 -->
    <div class="scree-menu">
      <a-menu v-model="current" mode="horizontal" :style="{ backgroundColor: 'black', color: 'white', border: 'none' }" @click="changeParams">
        <a-menu-item key="question">提问</a-menu-item>
        <a-menu-item key="answer">答复</a-menu-item>
        <a-menu-item key="article">文章</a-menu-item>
        <a-menu-item key="notic">通知</a-menu-item>
        <a-menu-item key="othor">其他</a-menu-item>
      </a-menu>
    </div>
    <div class="search-content">
      <div class="card-list">
        <a-spin :spinning="loading" style="min-height: 300px">
          <div class="spin-content">
            <div v-if="current + '' == 'article'">
              <!-- 文章卡片 -->
              <article-card :page="searchPage" @doSearch="doSearch" />
            </div>
            <a-button v-if="noMore === false && searchPage.list.length >= searchPage.pageSize" style="width: 100%" :loading="searchLoading" @click="searchMore()">
              加载更多
            </a-button>
            <a-button v-else-if="noMore === true || searchPage.list.length < 10" style="width: 100%" :loading="searchLoading">
              到底了
            </a-button>
          </div>
        </a-spin>
      </div>
    </div>
  </div>
</template>

<script>
import searchApi from '@/api/search/search'
import ArticleCard from '@/views/search/article-card'
export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      cardBodyStyle: {
        padding: '18px'
      },
      noMore: false,
      searchLoading: false,
      loading: false,
      current: ['article'],
      keyword: this.$route.query.keyword,
      searchPage: {
        keyword: 'Java',
        pageNo: 1,
        pageSize: 10,
        params: 'articleTitle',
        keyFields: ['articleTitle', 'articleDesc'],
        index: 'model_article_index',
        list: []
      }
    }
  },
  created() {
    console.log('关键字：' + this.keyword)
    // this.baseSearch(this.searchPage)
    this.doSearch(this.searchPage)
  },
  methods: {
    doSearch() {
      this.searchPage.keyword = this.keyword
      this.loading = true
      searchApi.searchHighlightWithFields(this.searchPage).then(res => {
        this.searchPage = res.data
        this.loading = false
        console.log(res)
      })
    },
    searchMore() {
      this.searchLoading = true
      this.searchPage.pageNo += 1
      searchApi.searchHighlightWithFields(this.searchPage).then(res => {
        if (res.data.list.length < this.searchPage.pageSize) {
          this.$message.warning('当前是最后一页了!')
          this.noMore = true
        }
        const dataList = res.data.list
        dataList.forEach(item => {
          console.log(item.articleId)
          this.searchPage.list.push(item)
        })
        // this.searchPage.list.concat(res.data.list)
        // this.searchPage.list.push(res.data.list)
        this.searchLoading = false
        console.log(res)
        console.log(this.searchPage.list)
        const testList = this.searchPage.list
        testList.forEach(item => {
          console.log(item.articleId)
        })
      })
    },
    // 改变搜索对象
    changeParams(e) {
      // 重置当前起始页
      this.searchPage.pageNo = 1
      this.current = [e.key]
      console.log('' + this.current)
      if (this.current + '' === 'article') {
        console.log('执行了文章搜索')
        this.searchPage.index = 'model_article_index'
        this.searchPage.keyFields = ['articleTitle', 'articleDesc']
        this.doSearch(this.searchPage)
      }
    }
  }
}
</script>

<style scoped>
/* 滚动条的宽度 */
::-webkit-scrollbar {
  width: 0px;
}
/* 滚动条滑块样式 */
::-webkit-scrollbar-thumb {
  background-color: rgb(226, 243, 247) !important;
}
.search-container {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* 1.居中对齐 以(水平)中轴为参照对齐 【子元素垂直居中】 */
  align-items: center;
  /* 线性渐变 */
  /* background-image: linear-gradient(to right,#e8f1f1,#d2dde7); */
  /* background: url(../../assets/img/cool-background.png) no-repeat; */
  background-size: 100% 100%;
  background-position: center;
}
.search-icon {
  width: 800px;
  height: 100px;
  text-align: center; /*元素内容水平居中*/
}
.font-icon {
  line-height: 100px;
  font-size: 52px;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  background-image: -webkit-linear-gradient(left, blue, #66ffff 10%, #cc00ff 20%, #cc00cc 30%, #ccccff 40%, #00ffff 50%, #ccccff 60%, #cc00cc 70%, #cc00ff 80%, #66ffff 90%, blue 100%);
  -webkit-text-fill-color: transparent; /* 将字体设置成透明色 */
  -webkit-background-clip: text; /* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 4s linear infinite;
}
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.search-box {
  width: 520px;
  height: 50px;
}
.scree-menu {
  text-align: center; /*元素内容水平居中*/
  width: 80%;
  border-radius: 3px;
}
.search-content {
  display: flex;
  width: 80%;
  min-height: 690px;
  max-height: 990px;
  overflow: auto;
  justify-content: center;
  margin-bottom: 10px;
}
.span-content {
  height: 100%;
  width: 100%;
  background-color: white;
  min-height: 600px;
}
.card-list {
  width: 100%;
  height: 100%;
}
</style>

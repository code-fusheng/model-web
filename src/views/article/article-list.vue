<template>
  <div>
    <!-- 筛选栏容器 -->
    <div class="scree-container">
      <!-- 分类标签 -->
      <div class="type-text">
        <span v-if="category!=null">分类 : <a-tag color="green">
          {{ category.categoryName }}
        </a-tag></span>
      </div>
      <!-- 条件列 -->
      <div class="scree-menu">
        <a-menu v-model="current" mode="horizontal" @click="changeSort">
          <a-menu-item key="createdTime">最新</a-menu-item>
          <a-menu-item key="goodCount">点赞最多</a-menu-item>
          <a-menu-item key="commentCount">评论最多</a-menu-item>
          <a-menu-item key="readCount">阅读最多</a-menu-item>
          <a-menu-item key="collectionCount">收藏最多</a-menu-item>
        </a-menu>
      </div>
    </div>
    <!-- 文案列表容器 -->
    <a-spin :spinning="loading">
      <div class="article-list-container" @scroll="scrollLoadMore($event)">
        <div class="spin-content">
          <!-- 文章卡片 -->
          <a-card v-for="item in page.list" :key="item.articleId" :body-style="articleBodyStyle" class="article-card">
            <div class="article-main">
              <div v-if="item.articleImage" class="article-image">
                <img :src="item.articleImage" class="article-cover">
              </div>
              <router-link :to="'articleRead/'+item.articleId" :class="item.articleImage ? 'image-article' : 'article-container'">
                <!-- 文章标题 -->
                <div class="article-title">{{ item.articleTitle }}</div>
                <div class="article-desc">{{ item.articleDesc }}</div>
                <div class="article-bottom">
                  <div class="author-container">
                    <div class="author-header">
                      <img class="author-img" :src="item.header" alt="">
                    </div>
                    <div class="article-author">作者：{{ item.authorName }}</div>
                  </div>
                  <!-- 文章标签 -->
                  <div class="article-meta">
                    <div class="created-time">{{ item.createdTime }}</div>
                    <div class="article-other">
                      <a-icon :class=" item.readArticleFlag ? 'action-icon meta-active' : 'action-icon'" type="eye" /><span class="count-num"> {{ item.readCount }}</span>
                      <a-icon :class=" item.commentArticleFlag ? 'action-icon meta-active' : 'action-icon'" type="message" /><span class="count-num"> {{ item.commentCount }}</span>
                      <a-icon :class=" item.goodArticleFlag ? 'action-icon meta-active' : 'action-icon'" type="like" /><span class="count-num"> {{ item.goodCount }}</span>
                      <a-icon :class=" item.collectionArticleFlag ? 'action-icon meta-active' : 'action-icon'" type="star" /><span class="count-num"> {{ item.collectionCount }}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </a-card>
        </div>
      </div>
    </a-spin>
    <a-button v-if="page.list.length != 0 && page.list.length === page.totalCount" style="width: 100%" :loading="loadingMore">
      到底了
    </a-button>
    <a-button v-else-if="page.list.length < page.totalCount && page.list.length != 0 && noMore != true" style="width: 100%" :loading="loadingMore" @click="loadMore()">
      加载更多
    </a-button>
  </div>
</template>

<script>
import articleApi from '@/api/article/article'
export default {
  data() {
    return {
      category: {},
      isGood: false, // 判断是否已经点赞
      isCollection: false, // 判断是否已经收藏
      current: ['createdTime'],
      articleBodyStyle: {
        padding: '18px'
      },
      page: {
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
        params: {},
        sortColumn: 'createdTime',
        sortMethod: 'desc',
        list: []
      },
      loading: false,
      loadingMore: false,
      noMore: false,
      pageShow: false
    }
  },
  created() {
    this.getByPage()
    this.$bus.$on('changeCategory', val => {
      this.category = val
    })
  },
  methods: {
    getByPage() {
      this.loading = true
      this.page.list = []
      articleApi.getByPage(this.page).then(res => {
        console.log(res)
        this.page = res.data
        this.loading = false
      })
    },
    scrollLoadMore(e) {
      // !this.moreLoading 没有在加载状态，触发加载更多时，把this.moreLoading置未true
      // !this.noMore 没有更多的状态为false，当我们取到的数据长度小于1页的数量时，就没有更多了数据了，把 this.noMore置为true，这样就不会触发无意义的加载更多了
      if (e.srcElement.scrollTop + e.srcElement.offsetHeight > e.srcElement.scrollHeight - 100 && !this.loadingMore && !this.noMore) {
        this.loadMore()
      }
    },
    loadMore() {
      if (this.noMore === false) {
        this.loadingMore = true
        this.page.currentPage += 1
        this.page.pageSize = 10
        articleApi.getByPage(this.page).then(res => {
          if (res.data.list.length < this.page.pageSize) {
            this.$message.warning('当前是最后一页了!')
            this.noMore = true
          }
          const dataList = res.data.list
          dataList.forEach(item => {
            this.page.list.push(item)
          })
          this.loadingMore = false
        })
      }
    },
    // 条件排序 e 和 val 都行
    changeSort(e) {
      this.page.sortColumn = e.key
      if (this.page.list.length >= 30) {
        this.page.pageSize = 10
      } else {
        this.page.pageSize = this.page.list.length
      }
      this.page.currentPage = 1
      this.getByPage(this.page)
    }
  },
  watch: {
    category: function() {
      this.noMore = false
      this.page.currentPage = 1
      this.page.params.articleCategory = this.category.categoryId
      this.getByPage(this.page)
    }
  }
}
</script>

<style scoped>

/* 滚动条的宽度 */
::-webkit-scrollbar {
    width: 0px;
    height: 5px;
}
/* 滚动条滑块样式 */
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(154, 158, 155);
}

  .scree-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 50px;
    background-color:white;
    border: 1px solid #e8e8e8;
  }
  .span-content {
    max-height: 1200px;
    height: 1200px;
    overflow: auto;
  }
  .type-text {
    margin-left: 15px;
    font-size: 16px;
  }
  .ant-menu-horizontal {
    border-bottom: none !important;
  }
  .ant-menu {
    background: none !important;
  }
  .article-list-container {
    max-height: 1250px;
    min-height: 150px;
    /* overflow: auto; */
  }
  .article-main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .article-container {
    width: 100%;
    /* min-height: 300px; */
  }
  .action-icon :hover {
    color: #349edf;
  }
  .article-title {
    align-self: start;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
  }
  .article-title :hover {
    color: red;
  }
  .article-desc {
    max-width: 490px;
    align-self: start;
    margin-bottom: 10px;
    font-size: 14px;
    color: #9c9ea8;
    line-height: 22px;
    /* max-height: 90px; */
    /* 超出隐藏 */
    white-space: nowrap;
    overflow: hidden;
    /* 超出部分省略号 */
    text-overflow: ellipsis;
  }
  .article-bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .article-meta {
    font-size: 12px;
    color: #9c9ea8;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .article-image {
    width: 230px;
    height:110px;
    margin-right: 20px;
  }
  .article-cover {
    min-width: 210px;
    height:110px;
    border-radius: 5px;
  }
  .author-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .image-article {
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .author-img {
    width: 36px;
    height: 36px;
    margin-right: 15px;
    border-radius: 50%;
  }
  .article-author {
    font-size: 16px;
  }
  .article-other i{
    margin-left: 10px;
  }
  .pagination {
    margin-top: 25px;
  }
  .article-card {
    margin-bottom: 1px;
    border-radius: 5px;
  }
  .meta-active {
    /* 标识当前是否已点赞，是否已收藏 */
    color: red;
  }
  .meta-active:hover {
    color: blue !important;
  }

</style>


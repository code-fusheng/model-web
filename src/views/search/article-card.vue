<template>
  <div>
    <a-card v-for="item in page.list" :key="item.articleId" :body-style="cardBodyStyle" class="article-card">
      <div class="article-main">
        <div v-if="item.articleImage" class="article-image">
          <img :src="item.articleImage" class="article-cover" />
        </div>
        <!-- <router-link :to="'articleRead/'+item.articleId" append :class="item.articleImage ? 'image-article' : 'article-container'"> -->
        <router-link :to="{ path: '/articleRead/' + item.articleId }" append :class="item.articleImage ? 'image-article' : 'article-container'">
          <!-- 文章标题 -->
          <div class="article-title" v-html="item.articleTitle"></div>
          <div class="article-desc" v-html="item.articleDesc"></div>
          <div class="article-bottom">
            <div class="author-container">
              <div class="author-header">
                <img class="author-img" :src="item.header" alt="" />
              </div>
              <div class="article-author">作者：{{ item.authorName }}</div>
            </div>
            <!-- 文章标签 -->
            <div class="article-meta">
              <div class="created-time">{{ item.createdTime }}</div>
              <div class="article-other">
                <a-icon class="action-icon" type="eye" />
                <span class="count-num">{{ item.readCount }}</span>
                <a-icon class="action-icon" type="heart" />
                <span class="count-num">{{ item.collectionCount }}</span>
                <a-icon class="action-icon" type="like" />
                <span class="count-num">{{ item.goodCount }}</span>
                <a-icon class="action-icon" type="message" />
                <span class="count-num">{{ item.commentCount }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </a-card>
  </div>
</template>

<script>
// import searchApi from '@/api/search/search'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  directives: { infiniteScroll },
  props: {
    page: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      cardBodyStyle: {
        padding: '18px'
      },
      searchPage: {
        keyword: '',
        pageNo: 1,
        pageSize: 10,
        params: 'articleTitle',
        index: 'model_article_index',
        list: []
      },
      data: [],
      loading: false,
      busy: false
    }
  },
  created() {
    this.data = this.page.list
    this.searchPage.pageNo = this.page.pageNo
  }
}
</script>

<style scoped>
.article-main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.article-container {
  width: 80%;
  min-height: 100px;
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
  width: 100%;
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
  height: 110px;
  margin-right: 20px;
}
.article-cover {
  width: 100%;
  height: 110px;
  border-radius: 5px;
}
.author-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.image-article {
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.article-container {
  width: 100%;
  min-height: 110px;
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
.article-other i {
  margin-left: 10px;
}
.pagination {
  margin-top: 20px;
}
.article-card {
  margin-bottom: 1px;
  border-radius: 5px;
}
</style>

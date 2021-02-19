<template>
  <div class="article-container">
    <!-- 左侧容器 - 放文章分类 -->
    <div class="left-container">
      <categoryList />
    </div>
    <!-- 中间容器 - 文章卡片 -->
    <div class="center-container">
      <articleList />
    </div>
    <!-- 右侧容器 - 放推荐与广告 -->
    <div class="right-container">
      <router-link to="/create">
        <a-button type="primary" class="write-article" style="width: 100%"><a-icon type="edit" />创作中心</a-button>
      </router-link>
      <recomList />
    </div>
  </div>
</template>

<script>
import CategoryList from '@/views/article/category-list'
import ArticleList from '@/views/article/article-list'
import RecomList from '@/views/article/recom-list'
export default {
  components: {
    CategoryList,
    ArticleList,
    RecomList
  },
  methods: {
    toCreate() {
      this.$router.push({
        path: '/create/index'
      })
    }
  }
}
</script>

<style scoped>

  /* 主体容器 */
  .article-container {
    display: flex;
    flex-direction: row;
    max-height: 1600px;
    width: 85%;
    max-width: 1334px;
    /* 左右自适应 */
    margin: auto;
    margin-top: 10px;
    /* margin-bottom: 20px; */
    /* border: 1px solid red; */
    /* background-color: white; */
  }
  .left-container {
    width: 8%;
    height: 1333px;
    margin-right: 3px;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
  }
  .center-container {
    width: 65%;
    /* border: 1px solid #9c9ea8; */
    /* background-color: blue; */
    /* 上 右 下 左 */
    /* padding: 0 5px 5px 5px; */
    margin: 0 3px 0 3px;
    /* background-color: white; */
  }
  .right-container  {
    width: 26%;
    height: 1333px;
    /* border: 1px solid #9c9ea8; */
    /* background-color: white; */
    margin-left: 3px;
  }
</style>

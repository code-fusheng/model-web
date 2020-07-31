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
  }
}
</script>

<style scoped>
  /* 主体容器 */
  .article-container {
    display: flex;
    flex-direction: row;
    max-height: 1600px;
    /* width: 90%; */
    max-width: 1312px;
    /* 左右自适应 */
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid red;
    /* background-color: white; */
  }
  .left-container {
    width: 100px;
    height: 1333px;
    margin-right: 3px;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .center-container {
    width: 850px;
    /* border: 1px solid #9c9ea8; */
    /* background-color: blue; */
    /* 上 右 下 左 */
    /* padding: 0 5px 5px 5px; */
    margin: 0 3px 0 3px;
    background-color: white;
  }
  .right-container  {
    width: 350px;
    height: 1333px;
    /* border: 1px solid #9c9ea8; */
    background-color: white;
    margin-left: 3px;
  }
</style>

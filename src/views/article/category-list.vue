<template>
  <div class="category-container">
    <a-spin :spinning="loading" :style="{height: '800px'}">
      <!-- 分类列表 -->
      <ul class="category-list">
        <li><div href="#" class="category-tag top-category-tag" @click="revocer">分类</div></li>
        <li v-for="item in categoryList" :key="item.categoryId">
          <a href="#" class="category-tag" @click="changeCategory(item)">{{ item.categoryName }}</a>
        </li>
      </ul>
    </a-spin>
  </div>
</template>

<script>
import categoryApi from '@/api/article/category'
export default {
  data() {
    return {
      category: '',
      categoryList: {},
      loading: false
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    //  前台查询可用分类列表
    getCategoryList() {
      this.loading = true
      categoryApi.getList().then(res => {
        this.$store.commit('global/SET_CATEGORY', res.data)
        this.categoryList = res.data
        console.log(res.data)
        this.loading = false
      })
    },
    // 切换分类
    changeCategory(val) {
      this.category = val
      this.$bus.$emit('changeCategory', this.category)
    },
    // 重置
    revocer() {
      this.category = {}
      this.$bus.$emit('changeCategory', this.category)
    }
  }
}
</script>

<style scoped>
  .category-list {
    max-height: 1333px;
    overflow: auto;
    list-style: none;
    width: 100px;
    padding: 0;
  }
  .category-tag {
    width: 100%;
    height: 32px;
    font-size: 14px;
    background-color: white;
    color: white;
    text-align: center;
    line-height: 32px;
    /* margin-bottom: 2px; */
  }
  .top-category-tag {
    /* position: fixed; */
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(255,46,47);
    font-size: 16px;
    letter-spacing: 0.2em;
  }
  .category-list a{
    display: block;
    width: 100px;
    height: 32px;
    font-size: 14px;
    text-align: center;
    line-height: 32px;
    color: rgb(112,105,89);
    /* margin-top: 5px; */
  }
  .category-list a:hover {
    background-color:rgb(255,46,47);
    color: #fff;
  }
</style>

<template>
  <!-- 文章阅读主体容器 -->
  <div class="read-container">
    <!-- <a-button class="go-back top-action" @click="goBack()">返回</a-button> -->
    <!-- 图片区域 -->
    <div class="top-image">
      <img :src="article.articleImage">
    </div>
    <!-- 中间区域,放置文章 -->
    <div class="article-container">
      <a-spin :spinning="loading">
        <div>
          <div class="article-title">{{ article.articleTitle }}</div>
          <div class="article-operation">
            <div class="operation-content">
              阅读 <a-icon class="action-icon" type="eye" /><span class="count-num"> {{ article.readCount }}</span>
              收藏 <a-icon class="action-icon" type="heart" /><span class="count-num"> {{ article.collectionCount }}</span>
              点赞 <a-icon class="action-icon" type="like" /><span class="count-num"> {{ article.goodCount }}</span>
            </div>
          </div>
          <div class="article-item">
            <div class="created-time">
              <a-icon class="meta-icon" type="clock-circle" />{{ article.createdTime }}
            </div>
            <div class="article-meta">
              <a v-if="$store.getters.userId === article.authorId" href="javascript:void(0);" @click="toEdit(article.articleId)"><a-icon class="meta-icon" type="edit" /><span class="do-editer">编辑</span></a>
            </div>
          </div>
          <a-layout-content>
            <mavon-editor
              v-model="article.editContent"
              :toolbars-flag="false"
              :subfield="false"
              default-open="preview"
              code-style="monokai"
              :toolbars="markdownOption"
              :ishljs="true"
              style="zIndex: 1"
            />
            <!-- <div class="article-content" v-html="article.articleContent" /> -->
            <!-- 文章操作 -->
            <div class="article-action">
              <div class="article-good">
                <a :loading="goodLoading" href="javascript:void(0);" :class="article.goodArticleFlag ? 'article-good meta-active' : 'article-good'" @click="saveGood">
                  <a-icon type="like" /> 点赞
                </a>
              </div>
              <div class="article-collection">
                <a :loading="collectionLoading" href="javascript:void(0);" :class="article.collectionArticleFlag ? 'article-collection meta-active' : 'article-collection'" @click="saveCollection">
                  <a-icon type="star" /> 收藏
                </a>
              </div>
            </div>
          </a-layout-content>
        </div>
      </a-spin>
    </div>
    <!-- 底部区域，放置评论 -->
    <div class="buttom-container">
      <commentList :article="article" />
    </div>
  </div>
</template>

<script>
import '@/config/mavon-editor.js'
import articleApi from '@/api/article/article'
import goodApi from '@/api/operation/good'
import collectionApi from '@/api/operation/collection'
import CommentList from '@/views/article/comment-list'
export default {
  components: {
    CommentList
  },
  data() {
    return {
      markdownOption: {

      },
      article: {
        articleId: '',
        articleAuthor: '',
        goodArticleFlag: false,
        collectionArticleFlag: false
      },
      good: {
        goodTarget: '',
        goodType: 1
      },
      collection: {
        collectionTarget: '',
        collectionType: 1
      },
      loading: true,
      commentLoading: false,
      goodLoading: false,
      collectionLoading: false
    }
  },
  created() {
    this.read()
  },
  methods: {
    read() {
      this.article.articleId = this.$route.params.id
      articleApi.read(this.article.articleId).then(res => {
        console.log(res)
        this.article = res.data
        this.loading = false
      })
    },
    saveGood() {
      if (this.article.goodArticleFlag === false) {
        this.good.goodTarget = this.$route.params.id
        goodApi.save(this.good).then(res => {
          this.article.goodArticleFlag = true
          this.$message.success(res.msg)
          console.log(res)
        })
      } else {
        this.$message.info('操作提示: 您已点赞，请勿重复点赞！')
      }
    },
    saveCollection() {
      if (this.article.collectionArticleFlag === false) {
        this.collection.collectionTarget = this.$route.params.id
        collectionApi.save(this.collection).then(res => {
          this.article.collectionArticleFlag = true
          this.$message.success(res.msg)
          console.log(res)
        })
      } else {
        this.$message.info('操作提示: 您已收藏，请勿重复收藏！')
      }
    },
    goBack() {
      this.$router.go(-1)
      // this.$router.push({
      //   path: '/article'
      // })
    },
    toEdit() {
      this.$router.push({ path: '/create', query: { id: this.$route.params.id }})
    }
  }
}
</script>

<style scoped>
  .top-image {
    width: 100%;
    max-width: 1200px;
    height: 80%;
  }
  .count-num {
    color: #349edf;
    margin-right: 5px;
  }
  .action-icon :hover {
    color: #349edf;
  }
  .read-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 3.居中对齐 【子元素水平居中】 */
    justify-content: center;
    width: 100%;
    /* border: 1px solid red; */
    /* 左右自适应 */
    margin: auto;
    /* margin-top: 10px; */
    /* margin-bottom: 10px; */
  }
  .article-container {
    /* overflow:hidden; */
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    background-color: white;
    /* border: 1px solid yellow; */
    background: #fff;
    /* padding: 0px 25px 20px 25px; */
  }
  .article-content {
    margin-top: 10px;
    /* max-height: 500px; */
    min-height: 500px;
    overflow: auto;
  }
  .article-content img {
    vertical-align: middle;
    border-style: none;
    width: 700px;
  }
  .article-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: 70px;
  }
  .article-operation {
    display: flex;
    align-items: center;
    align-content: center;
  }
  .operation-content {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .created-time {
    line-height: 50px;
    white-space: nowrap;
    font-size: 12px;
    color: rgb(13, 138, 19);
  }
  .article-item {
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-bottom: 10px; */
    margin-top: 25px;
  }
  .article-meta {
    white-space: nowrap;
  }

  .meta-icon {
    margin-right: 5px;
    margin-left: 5px;
  }

  .article-action {
    display: flex;
    flex-direction: row;
    width: 300px;
    min-height: 200px;
    line-height: 200px;
    margin: auto;
    justify-content: space-evenly;
    font-size: 24px;
  }
  .meta-active {
    /* 标识当前是否已点赞，是否已收藏 */
    color: red;
  }
  .meta-active:hover {
    /* 标识当前是否已点赞，是否已收藏 */
    color: red !important;
  }
  .do-article {
    width: 100%;
    height: 40px;
    /* border: 1px solid blue; */
    line-height: 40px;
    background-color: #ca0c16;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
  /* 输入文本域 */
  .ant-input {
    border-radius: 0px !important;
  }
  .buttom-container {
    width: 100%;
    max-width: 1200px;
  }
  /* 滚动条的宽度 */
  ::-webkit-scrollbar {
    width: 2px;
    height: 10px;
  }
  /* 滚动条滑块样式 */
  ::-webkit-scrollbar-thumb {
    background-color: rgb(121, 216, 240);
    border-radius: 3px;
  }

</style>

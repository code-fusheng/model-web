<template>
  <div class="comment-list-container">
    <div class="user-comment">
      <a-textarea v-model="articleCommentContent" placeholder="请输入内容，不超过300字" :rows="3" />
      <div class="comment-button">
        <a-button type="primary" :loading="commentLoading" @click="saveArticleComment(articleCommentContent)">发表评论</a-button>
        <div v-show="countShow" class="content-count">
          还能输入 {{ commentContentCount }} 个字符
        </div>
      </div>
    </div>
    <!-- 评论列表组件 -->
    <!-- 筛选栏容器 -->
    <div class="scree-container">
      <!-- 条件列 -->
      <div class="scree-menu">
        <a-menu v-model="current" mode="horizontal" @click="changeSort">
          <a-menu-item key="commentTime">最新</a-menu-item>
          <a-menu-item key="goodCount">点赞最多</a-menu-item>
          <a-menu-item key="commentCount">评论最多</a-menu-item>
        </a-menu>
      </div>
    </div>
    <!-- 评论列表容器 -->
    <div class="comment-list-container">
      <div v-for="item in articleCommentPage.list" :key="item.commentId">
        <a-comment>
          <span slot="actions">
            <a-icon
              type="like"
              :class=" item.goodCommentFlag ? 'meta-active' : ''"
              @click="saveGoodForComment(item.commentId)"
            /> {{ item.goodCount }}
          </span>
          <span v-if="(userId === item.commentUserId) || (userId === article.authorId)" slot="actions" @click="deleteComment(item)">删除</span>
          <span slot="actions" key="comment-nested-reply-to" @click="doSaveCommentComment(item)">回复</span>
          <span slot="actions" :style="{ margin:'20px 50px'}">共{{ item.commentCount }}条回复
            <a v-if=" (showCommentComment != item.commentId) && (item.commentCount !== 0) " @click="getCommentChildList(item.commentId)">点击查看</a>
            <a v-if="showCommentComment === item.commentId" @click="hiddenCommentChildList(item.commentId)">收起</a>
          </span>
          <span slot="author">
            <a-tag v-if=" article.articleAuthor === item.commentUser " :style="{ float:'left'}" color="orange">
              作者
            </a-tag>
            <a>{{ item.username }}</a>
          </span>
          <a-avatar
            slot="avatar"
            :size="32"
            :src="item.header"
          />
          <span slot="content">
            {{ item.commentContent }}
          </span>
          <a-tooltip slot="datetime">
            <span>{{ item.commentTime }}</span>
          </a-tooltip>
        </a-comment>
      </div>
    </div>
    <!-- 一级评论分页 -->
    <el-pagination
      align="center"
      class="comment-pagination"
      :current-page="articleCommentPage.currentPage"
      :page-size="articleCommentPage.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="articleCommentPage.totalCount"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import commentApi from '@/api/article/comment.js'
export default {
  props: {
    article: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      userId: this.$store.getters.userId,
      header: this.$store.getters.header,
      articleCommentPage: {
        currentPage: 1,
        pageSize: 5,
        totalCount: 0,
        totalPage: 0,
        params: {
          commentTarget: this.$route.params.id
        },
        sortColumn: 'commentTime',
        sortMethod: 'desc',
        list: []
      },
      commentCommentPage: {
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
        params: {
          commentTarget: ''
        },
        sortColumn: 'commentTime',
        sortMethod: 'desc',
        list: []
      },
      commentLoading: false,
      current: ['commentTime'],
      comment: {
        commentContent: '',
        commentTarget: '',
        commentType: 1,
        commentRoot: '',
        commentParentUser: ''
      },
      showCommentComment: true, // 控制二级评论的显示
      countShow: false, // 控制是否显示字符个数提示
      articleCommentContent: '', // 文章评论文本内容
      commentCommentContent: '', // 评论评论文本内容
      commentContentCount: 300 // 显示还能输入的字符数量
    }
  },
  watch: {
    'articleCommentContent': function(newVal, oldVal) {
      if (this.articleCommentContent.length > 300) {
        this.articleCommentContent = this.articleCommentContent.substring(0, 300)
      }
      if (this.articleCommentContent.length > 0) {
        this.countShow = true
      } else {
        this.countShow = false
      }
      const newValLength = newVal ? newVal.length : 0
      const oldValLength = oldVal ? oldVal.length : 0
      this.commentContentCount = this.commentContentCount - (newValLength - oldValLength)
    },
    'commentCommentContent': function(newVal, oldVal) {
      if (this.commentCommentContent.length > 300) {
        this.commentCommentContent = this.commentCommentContent.substring(0, 300)
      }
      if (this.commentCommentContent.length > 0) {
        this.childCountShow = true
      } else {
        this.childCountShow = false
      }
      const newValLength = newVal ? newVal.length : 0
      const oldValLength = oldVal ? oldVal.length : 0
      this.commentContentCount = this.commentContentCount - (newValLength - oldValLength)
    },
    '$route': function() {
      this.read(this.$route.params.id)
    }
  },
  created() {
    this.getArticleCommentList()
  },
  methods: {
    // 文章评论列表
    getArticleCommentList() {
      commentApi.getByPage(this.articleCommentPage).then(res => {
        console.log(res)
        this.articleCommentPage = res.data
      })
    },
    // 评论的评论列表
    getCommentCommentList() {
      commentApi.getByPage(this.commentCommentPage).then(res => {
        console.log(res)
        this.commentCommentPage = res.data
      })
    },
    // 评论文章
    saveArticleComment(val) {
      this.commentLoading = true
      if (val.length <= 0) {
        this.$message.error('错误提示: 评论内容不能为空！')
        this.commentLoading = false
      } else {
        this.comment.commentType = 0
        this.comment.commentTarget = this.$route.params.id
        this.comment.commentRoot = this.$route.params.id
        this.comment.commentContent = this.articleCommentContent
        this.comment.commentParentUser = null
        commentApi.save(this.comment).then(res => {
          this.commentCommentPage = false
          this.getArticleCommentList()
          this.$message.success(res.msg)
          this.saveArticleComment = ''
          this.commentLoading = false
        })
      }
    },
    // 删除评论
    deleteComment() {},
    // 跳转评论的评论
    doSaveCommentComment() {},
    // 改变排序
    changeSort(e) {
      this.articleCommentPage.sortColumn = e.key
      this.getArticleCommentList(this.articleCommentPage)
    },
    // 每页大小改变 参数 value 为每页大小(pageSize)
    handleSizeChange(val) {
      this.articleCommentPage.pageSize = val
      // 重新请求,刷新页面
      this.getArticleCommentList(this.articleCommentPage)
    },
    // 当前页跳转 参数 value 当前页(currentPage)
    handleCurrentChange(val) {
      this.articleCommentPage.currentPage = val
      this.getArticleCommentList(this.articleCommentPage)
    }
  }
}
</script>

<style scoped>
    .do-comment-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
    /* border: 1px solid blueviolet; */
    margin-top: 5px;
  }
  .user-comment {
    background-color: #fff;
  }
  .comment-top {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
  }
  .comment-button {
    margin: 15px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .content-count {
    margin-right: 15px;
  }
  .ant-divider-horizontal {
    margin: 2px 0 5px 0 !important;
  }
  .scree-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 50px;
    background-color:white;
    border: 1px solid #e8e8e8;
  }
  .comment-list-container {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    background-color: #fff;
  }
  .comment-show {
    background-color: #fff !important;
  }
  .comment-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .comment-container {
    width: 530px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .comment-user {
    font-weight: bold;
  }
  .comment-time {
    font-size: 12px;
    color: #9c9ea8;
  }
  .comment-good {
    width: 60px;
  }
  .comment-comment {
    width: 120px;
  }
  .author-img {
    width: 60px;
    height: 60px;
    border: 5px solid #e5e5e5;
    border-radius: 50%;
    margin-top: 5px;
  }
  .comment-pagination {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>

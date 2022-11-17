<template>
  <div class="comment-list-container">
    <div class="user-comment">
      <a-textarea v-model="articleCommentContent" placeholder="请输入内容，不超过300字" :rows="3" />
      <div class="comment-button">
        <a-button type="primary" :loading="commentLoading" @click="saveArticleComment(articleCommentContent)">发表评论</a-button>
        <div v-show="countShow" class="content-count">还能输入 {{ commentContentCount }} 个字符</div>
      </div>
    </div>
    <!-- 评论列表组件 -->
    <!-- 筛选栏容器 -->
    <div v-if="articleCommentPage.list != 0" class="scree-container">
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
    <div v-if="articleCommentPage.list != 0" class="article-comment-container">
      <div v-for="item in articleCommentPage.list" :key="item.commentId">
        <a-comment>
          <span slot="actions">
            <!-- 点赞图标 -->
            <a-icon type="like" :class="item.goodCommentFlag ? 'meta-active' : ''" @click="saveGoodArticleComment(item)" />
            {{ item.goodCount }}
          </span>
          <span v-if="$store.getters.userId === item.commentUserId || $store.getters.userId === article.authorId" slot="actions">
            <a-popconfirm title="确认删除该条评论?" ok-text="确认" cancel-text="取消" @confirm="deleteArticleComment(item)">
              <a href="#">删除</a>
            </a-popconfirm>
          </span>
          <span slot="actions" key="comment-nested-reply-to" @click="doSaveCommentComment(item)">回复</span>
          <span slot="actions" :style="{ margin: '20px 50px' }">
            共{{ item.commentCount }}条回复
            <a v-if="showCommentComment != item.commentId && item.commentCount !== 0" @click="getCommentCommentList(item.commentId)">点击查看</a>
            <a v-if="showCommentComment === item.commentId" @click="hiddenCommentComment(item.commentId)">收起</a>
          </span>
          <span slot="author">
            <a-tag v-if="article.authorName === item.username" :style="{ float: 'left' }" color="orange">
              作者
            </a-tag>
            <a-tag v-if="$store.getters.userId === item.commentUserId" :style="{ float: 'left' }" color="blue">
              我的
            </a-tag>
            <a>{{ item.username }}</a>
          </span>
          <a-avatar slot="avatar" :size="32" :src="item.header" />
          <span slot="content">
            {{ item.commentContent }}
          </span>
          <a-tooltip slot="datetime">
            <span>{{ item.commentTime }}</span>
          </a-tooltip>
          <!-- 二级评论 -->
          <div v-if="showCommentComment === item.commentId" class="comment-comment-list" @scroll="scrollLoadMore($event, item)">
            <a-comment v-for="item1 in commentCommentList" :key="item1.commentId">
              <span slot="actions">
                <a-icon type="like" :class="item1.goodCommentFlag ? 'meta meta-active' : 'meta'" @click="saveGoodCommentComment(item1, item)" />
                {{ item1.commentGood }}
              </span>
              <span slot="actions" @click="deleteCommentComment(item1)">删除</span>
              <span slot="actions" @click="doSaveCommentCommentWithParent(item1, item)">回复</span>
              <span slot="author">
                <a-tag v-if="article.authorName === item1.username" :style="{ float: 'left' }" color="orange">
                  作者
                </a-tag>
                <a-tag v-if="$store.getters.userId === item1.commentUserId" :style="{ float: 'left' }" color="blue">
                  我的
                </a-tag>
                <a>{{ item1.username }}</a>
              </span>
              <a-avatar slot="avatar" :src="item1.header" />
              <span slot="content">
                <p>回复 @{{ item1.commentParentUserName }}</p>
                {{ item1.commentContent }}
              </span>
              <a-tooltip slot="datetime">
                <span>{{ item1.commentTime }}</span>
              </a-tooltip>
            </a-comment>
          </div>
          <!-- 二级评论 -->
          <div v-if="commentParentUser !== '' && item.commentId === doCurrentComment" id="commentCommentContent" class="user-comment">
            <div class="comment-top">
              <a-avatar slot="avatar" :size="72.4" :src="$store.getters.header" />
              <a-textarea v-model="commentCommentContent" :placeholder="'回复@' + commentParentUser" :rows="3" :style="{ maxWidth: '90%' }" />
            </div>
            <div class="comment-button">
              <a-button type="primary" :loading="commentCommentLoading" @click="saveCommentComment(item.commentId)">发表评论</a-button>
              <div v-show="cCountShow" class="content-count">还能输入 {{ commentContentCount }} 个字符</div>
            </div>
          </div>
        </a-comment>
      </div>
    </div>
    <!-- 一级评论分页 -->
    <el-pagination
      v-if="articleCommentPage.list > articleCommentPage.pageSize"
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
import commentApi from '@/api/operation/comment.js'
import goodApi from '@/api/operation/good.js'
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
          commentType: 0,
          commentTarget: this.$route.params.id
        },
        sortColumn: 'commentTime',
        sortMethod: 'asc',
        list: []
      },
      commentCommentPage: {
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
        params: {
          commentType: 1,
          commentTarget: ''
        },
        sortColumn: 'commentTime',
        sortMethod: 'asc',
        list: []
      },
      commentLoading: false,
      commentCommentLoading: false,
      current: ['commentTime'],
      comment: {
        commentContent: '',
        goodCount: '',
        commentTarget: '',
        commentType: 0,
        commentRoot: '',
        commentParentUser: '',
        commentParentUserId: ''
      },
      good: {
        goodTarget: '',
        goodType: 2
      },
      doCurrentComment: '',
      commentParentUser: '',
      commentCommentList: [],
      showCommentComment: '', // 控制二级评论的显示
      countShow: false, // 控制是否显示字符个数提示
      cCountShow: false,
      articleCommentContent: '', // 文章评论文本内容
      commentCommentContent: '', // 评论评论文本内容
      commentContentCount: 300 // 显示还能输入的字符数量
    }
  },
  watch: {
    '$store.getters.token': function() {
      if (this.$store.getters.token !== undefined) {
        this.getArticleCommentList()
      }
    },
    articleCommentContent: function(newVal, oldVal) {
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
    commentCommentContent: function(newVal, oldVal) {
      if (this.commentCommentContent.length > 300) {
        this.commentCommentContent = this.commentCommentContent.substring(0, 300)
      }
      if (this.commentCommentContent.length > 0) {
        this.cCountShow = true
      } else {
        this.cCountShow = false
      }
      const newValLength = newVal ? newVal.length : 0
      const oldValLength = oldVal ? oldVal.length : 0
      this.commentContentCount = this.commentContentCount - (newValLength - oldValLength)
    }
    // '$route': function() {
    //   this.read(this.$route.params.id)
    // }
  },
  created() {
    var _this = this
    var time
    // 创建定时器
    clearTimeout(time)
    time = setTimeout(function() {
      // 延迟加载处理的方法
      if (_this.$store.getters.token !== undefined) {
        _this.getArticleCommentList()
      }
    }, 1000)
  },
  methods: {
    // 文章评论列表
    getArticleCommentList() {
      this.articleCommentPage.list = []
      commentApi
        .getByPage(this.articleCommentPage)
        .then(res => {
          console.log(res)
          this.articleCommentPage = res.data
        })
        .catch(res => {
          this.$message.error(res.msg)
        })
    },
    // 评论的评论列表
    getCommentCommentList(val) {
      this.commentCommentPage.list = []
      this.commentCommentPage.params.commentTarget = val
      commentApi.getByPage(this.commentCommentPage).then(res => {
        console.log(res)
        this.commentCommentPage = res.data
        this.commentCommentList = res.data.list
        this.showCommentComment = val
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
        commentApi
          .save(this.comment)
          .then(res => {
            this.articleCommentContent = ''
            this.commentLoading = false
            this.getArticleCommentList()
            this.$message.success(res.msg)
          })
          .catch(() => {
            this.commentLoading = false
          })
      }
    },
    // 评论评论
    saveCommentComment(val) {
      this.comment.commentRoot = this.$route.params.id
      this.comment.commentContent = this.commentCommentContent
      this.comment.commentType = 1
      commentApi
        .save(this.comment)
        .then(res => {
          this.commentCommentContent = ''
          this.commentCommentLoading = false
          this.getCommentCommentList(val)
          this.$message.success(res.msg)
        })
        .catch(() => {
          this.commentLoading = false
        })
    },
    hiddenCommentComment() {
      this.showCommentComment = 0
    },
    scrollLoadMore() {},
    // 删除文章的评论
    deleteArticleComment(val) {
      commentApi.deleteById(val.commentId).then(res => {
        this.$message.success(res.msg)
        this.getArticleCommentList()
      })
    },
    // 删除评论的评论
    deleteCommentComment(val) {
      this.$confirm('是否删除？', '操作提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        commentApi.deleteById(val.commentId).then(res => {
          this.$message.success(res.msg)
          this.getCommentCommentList(val.commentTarget)
        })
      })
    },
    // 点赞文章的评论
    saveGoodArticleComment(val) {
      this.good.goodTarget = val.commentId
      this.good.goodType = 2
      goodApi.save(this.good).then(res => {
        this.$message.success(res.msg)
        this.getArticleCommentList()
      })
    },
    // 点赞评论的评论
    saveGoodCommentComment(cval, pval) {
      this.good.goodTarget = cval.commentId
      this.good.goodType = 2
      goodApi.save(this.good).then(res => {
        this.$message.success(res.msg)
        this.getCommentCommentList(pval)
      })
    },
    // 跳转评论的评论
    doSaveCommentComment(val) {
      this.comment = {}
      this.doCurrentComment = val.commentId
      this.commentParentUser = val.username
      this.comment.commentTarget = val.commentId
      this.comment.commentParentUserId = val.commentUserId
    },
    // 参数 val1 为评论的评论 参数 val 为文章的评论
    doSaveCommentCommentWithParent(val1, val) {
      this.doCurrentComment = val.commentId
      this.commentParentUser = val1.username
      this.comment.commentParentUserId = val.commentUserId
      this.comment.commentTarget = val.commentId
    },
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
.comment-list-container {
  min-height: 135px;
  height: 100%;
}
.do-comment-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  /* border: 1px solid blueviolet; */
  margin-top: 5px;
}
.user-comment {
  height: 100%;
  min-height: 135px;
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
  margin-bottom: 15px;
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
  background-color: white;
  border: 1px solid #e8e8e8;
}
.article-comment-container {
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
.meta-active {
  /* 标识当前是否已点赞，是否已收藏 */
  color: red;
}
.meta:hover {
  color: blue !important;
}
</style>

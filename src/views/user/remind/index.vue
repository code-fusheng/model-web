<template>
  <div class="user-message-container">
    <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }" />
    <a-tabs default-active-key="goodmessage" tab-position="left" :style="'height:' + carouselStyle.height + 'px'" @prevClick="callback" @nextClick="callback">
      <a-tab-pane key="publicmessage">
        <span slot="tab">公告</span>
        <public-message />
      </a-tab-pane>
      <a-tab-pane key="readmessage">
        <span slot="tab">批阅</span>
        <read-message />
      </a-tab-pane>
      <a-tab-pane key="commentmessage">
        <span slot="tab">评论</span>
        <comment-message />
      </a-tab-pane>
      <a-tab-pane key="goodmessage">
        <span slot="tab">点赞</span>
        <good-message />
      </a-tab-pane>
      <a-tab-pane key="answermessage">
        <span slot="tab">答复</span>
        <answer-message />
      </a-tab-pane>
      <a-tab-pane key="collectionmessage">
        <span slot="tab">收藏</span>
        <collection-message />
      </a-tab-pane>
      <a-tab-pane key="privatemessage">
        <span slot="tab">私信</span>
        <private-message />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import PublicMessage from '@/views/user/remind/public-message'
import ReadMessage from '@/views/user/remind/read-message'
import CommentMessage from '@/views/user/remind/comment-message'
import GoodMessage from '@/views/user/remind/good-message'
import AnswerMessage from '@/views/user/remind/answer-message'
import CollectionMessage from '@/views/user/remind/collection-message'
import PrivateMessage from '@/views/user/remind/private-message'
export default {
  components: {
    PublicMessage,
    ReadMessage,
    CommentMessage,
    GoodMessage,
    AnswerMessage,
    CollectionMessage,
    PrivateMessage
  },
  data() {
    return {
      carouselStyle: {
        widht: '',
        height: ''
      },
      mode: 'top'
    }
  },
  mounted() {
    this.carouselStyle.height = document.body.clientHeight - 60
    this.carouselStyle.widht = document.body.clientWidth - 60
    window.onresize = () => {
      return (() => {
        this.carouselStyle.height = document.body.clientHeight - 60
        this.carouselStyle.widht = document.body.clientWidth - 60
        console.log('高度' + document.body.clientHeight + '宽度' + document.body.clientWidth)
      })()
    }
  },
  methods: {
    callback(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.user-message-container {
  width: 80%;
  height: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  margin: auto;
  background-color: #f0f2f5;
}
</style>

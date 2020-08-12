<template>
  <div class="create-container">
    <a-layout>
      <a-layout-content class="editor-header">
        <a-input v-model="article.articleTitle" class="editor-input-title" placeholder="请输入标题" />
        <a-button @click="changeEditor">切换编辑器:当前为{{ editorModeName }}</a-button>
        <a-button type="primary" @click="openAddDialog">
          发布
        </a-button>
      </a-layout-content>
      <a-layout-content>
        <mavon-editor
          v-if="editorModeState"
          ref="md"
          v-model="markdownContent"
          code-style="monokai"
          :ishljs="true"
          style="zIndex: 1"
          @save="saveMavon"
        />
        <tinymce v-else v-model="tinymceContent" />
      </a-layout-content>
    </a-layout>

    <el-dialog width="50%" title="创作文章" :visible.sync="addDialog">
      <el-form ref="addForm" :model="article" label-width="40px" size="mini">
        <el-form-item label="分类">
          <el-select v-model="article.articleCategory" clearable filterable placeholder="请选择" style="width: 40%" @change="autoSetImage(article.articleCategory)">
            <el-option
              v-for="category in categoryList"
              :key="category.categoryId"
              :label="category.categoryName"
              :value="category.categoryId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :headers="headers"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="article.articleDesc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" :loading="addLoading" @click="saveArticle">确认发布</el-button>
          <el-button size="mini" @click="closeAddDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import '@/config/mavon-editor.js'
import articleApi from '@/api/article/article'
import categoryApi from '@/api/article/category'
import Tinymce from '@/views/common/Tinymce/index'
import { getToken } from '@/utils/auth'
export default {
  // 注册组件
  components: {
    Tinymce
  },
  data() {
    return {
      imageUrl: null, // 上传图片回显
      uploadUrl: process.env.VUE_APP_UPLOAD_URL_IMAGE, // 上传图片路径
      headers: { // 上传文件的请求头
        Authorization: getToken()
      },
      categoryList: this.$store.getters.categoryList,
      article: {
        articleTitle: '',
        articleContent: '',
        articleCategory: '',
        articleImage: '',
        editModel: ''
      },
      markdownContent: '',
      tinymceContent: '',
      editorModeState: true,
      editorModeName: 'MarkDown',
      addDialog: false,
      addLoading: false
    }
  },
  watch: {
    'editorModeState': function() {

    }
  },
  created() {
    this.categoryList = this.$store.getters.categoryList
    console.log(this.categoryList)
  },
  methods: {
    changeEditor() {
      this.editorModeState = !this.editorModeState
      if (this.editorModeState === false) {
        this.editorModeName = 'TinyMce'
      } else {
        this.editorModeName = 'MarkDown'
      }
    },
    // 文章创作时，选择分类会自动填充对应分类的文章封面
    autoSetImage(val) {
      console.log(val)
      categoryApi.getById(val).then(res => {
        this.imageUrl = res.data.categoryImage
        this.article.articleImage = this.imageUrl
      })
    },
    openAddDialog() {
      if (this.article.articleTitle === '') {
        this.$message.error('文章标题不能为空！')
      } else if (this.markdownContent === '' && this.editorModeName === 'MarkDown') {
        this.$message.error('文章内容不能为空！')
      } else if (this.tinymceContent === '' && this.editorModeName === 'TinyMce') {
        this.$message.error('文章内容不能为空！')
      } else {
        this.addDialog = true
      }
    },
    saveMavon(value, render) {
      console.log('this is render' + render)
      console.log('this is value' + value)
    },
    saveArticle() {
      if (this.article.articleCategory === '') {
        this.$message.error('文章类型不能为空！')
      } else {
        this.addLoading = true
        if (this.editorModeName === 'MarkDown') {
          this.article.articleContent = this.$refs.md.d_render
        } else {
          this.article.articleContent = this.tinymceContent
        }
        this.article.editModel = this.editorModeName
        articleApi.save(this.article).then(res => {
          this.$message.success(res.msg)
          this.addLoading = false
          this.addDialog = false
          this.closeAddDialog()
          this.$router.push({
            path: '/article'
          })
        })
      }
    },
    closeAddDialog() {
      // 关闭添加弹窗
      this.addDialog = false
      this.addLoading = false
      this.article = {}
    },
    uploadSuccess(res, file) {
      this.$message.success(res.msg)
      this.imageUrl = res.data
      this.article.articleImage = res.data
    }
  }
}
</script>

<style scope>
    #tinymce {
      min-height: 1312px;
    }
    .ant-tabs-bar {
        margin: 0;
    }
    .v-note-wrapper {
        min-height: 1312px !important;
    }
    .mce-edit-area {
        min-height: 1312px !important;
    }
    .mce-edit-area iframe {
      min-height: 1312px;
    }
    .editor-top-action{
        display: flex;
        flex-direction: row;
    }
    .editor-header{
        width: 100%;
        height: 59px;
        background-color: #ffffff;
        margin-bottom: 5px;
    }
    .editor-input-title {
        height: 100%;
        width: 900px;
        margin-right: 10px;
        border: none;
        outline: none;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 300px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 300px;
    height: 150px;
    display: block;
  }
</style>


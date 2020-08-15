<template>
  <a-layout>
    <a-layout-content :style="{margin:'55px 15%'}">
      <div class="model-index-banner-title">个人论坛 | code-fusheng</div>
      <div class="model-index-banner-text">浮生若梦</div>
    </a-layout-content>
    <a-layout-content :style="{margin:'0 15%',width:'70%',height:'330px',minWidth:'1100px'}">
      <div :style="{float:'left',width:'23%',height:'330px',minWidth:'230px'}">
        <a-carousel arrows autoplay>
          <div><img :style="{height:'330px',width: '100%' }" src="http://175.24.9.127:8888/group1/M00/00/00/rxgJf17tqPOAFD_pAAKj-AouHM4682.jpg"></div>
          <div><img :style="{height:'330px',width: '100%' }" src="http://175.24.9.127:8888/group1/M00/00/00/rxgJf17tqReAYxHaAAKR2JqUeyU085.jpg"></div>
          <div><img :style="{height:'330px',width: '100%' }" src="http://175.24.9.127:8888/group1/M00/00/00/rxgJf17tqTSAVJM9AAMfXSYnxs8728.jpg"></div>
          <div><img :style="{height:'330px',width: '100%' }" src="http://175.24.9.127:8888/group1/M00/00/00/rxgJf17tqVCAcz9YAAL8e7Q89tM517.jpg"></div>
        </a-carousel>
      </div>
      <div class="paddle-operator-gird-item" :style="{width:'100%',height:'330px'}">
        <router-link :to="{path:'/report'}">
          <a-card :style="{margin:'0px 0px 10px 10px',float:'left',width:'24.5%',height:'160px',minWidth:'230px'}" hoverable>
            <div class="model-index-icon-text-card-item-title">写报告</div>
            <div class="model-operator-gird-item-extra">立即前往 <a-icon type="right" /></div>
          </a-card>
        </router-link>
        <router-link :to="{path:'/article'}">
          <a-card :style="{margin:'0px 0px 10px 10px',float:'left',width:'24.5%',height:'160px',minWidth:'230px'}" hoverable>
            <p class="model-index-icon-text-card-item-title">看文章</p>
            <div class="model-operator-gird-item-extra">立即前往 <a-icon type="right" /></div>
          </a-card>
        </router-link>
        <router-link :to="{path:'/answer'}">
          <a-card :style="{margin:'0px 0px 10px 10px',float:'left',width:'24.5%',height:'160px',minWidth:'230px'}" hoverable>
            <p class="model-index-icon-text-card-item-title">提问题</p>
            <div class="model-operator-gird-item-extra">立即前往 <a-icon type="right" /></div>
          </a-card>
        </router-link>
        <router-link :to="{path:'/tasknotice'}">
          <a-card :style="{margin:'0px 0px 10px 10px',float:'left',width:'24.5%',height:'160px',minWidth:'230px'}" hoverable>
            <p class="model-index-icon-text-card-item-title">读通知</p>
            <div class="model-operator-gird-item-extra">立即前往 <a-icon type="right" /></div>
          </a-card>
        </router-link>
        <router-link :to="{path:'/statistics'}">
          <a-card :style="{margin:'0px 0px 10px 10px',float:'left',width:'24.5%',height:'160px',minWidth:'230px'}" hoverable>
            <p class="model-index-icon-text-card-item-title">数据统计</p>
            <div class="model-operator-gird-item-extra">立即前往 <a-icon type="right" /></div>
          </a-card>
        </router-link>
        <router-link :to="{path:'/userInfo'}">
          <a-card :style="{margin:'0px 0px 10px 10px',float:'left',width:'24.5%',height:'160px',minWidth:'230px'}" hoverable>
            <p class="model-index-icon-text-card-item-title">个人中心</p>
            <div class="model-operator-gird-item-extra">立即前往 <a-icon type="right" /></div>
          </a-card>
        </router-link>
      </div>
    </a-layout-content>
    <a-layout-content :style="{margin:'25px 15%'}">
      <div class="model-index-banner-title">社区交流</div>
      <div class="model-index-banner-text">讨论交流，技术分享，有问题找组织</div>
    </a-layout-content>
    <a-layout-content :style="{margin:'0 15%',width:'70%',height:'160px',minWidth:'1100px'}">
      <div :style="{width:'100%',height:'330px'}">
        <a-card :style="{margin:'0px 5px 10px 0px',float:'left',width:'24%',height:'160px',minWidth:'230px'}" hoverable>
          <div :style="{margin:'25px 0px'}">
            <div :style="{float:'left'}">
              <div class="model-index-icon-text-card-item-title">项目GitHub</div>
              <a class="model-index-icon-text-card-item-text" target="_blank" href="https://github.com/code-fusheng/model">立即访问！</a>
            </div>
            <a-icon type="github" :style="{ fontSize: '50px', color: 'black'}" />
          </div>
        </a-card>
        <a-card :style="{margin:'0px 5px 10px 5px',float:'left',width:'24%',height:'160px',minWidth:'230px'}" hoverable>
          <div :style="{margin:'25px 0px'}">
            <div :style="{float:'left'}">
              <div class="model-index-icon-text-card-item-title">项目Gitee</div>
              <a class="model-index-icon-text-card-item-text" target="_blank" href="https://github.com/code-fusheng/model">立即访问！</a>
            </div>
            <img :style="{height:'50px',width: '50px' }" src="https://ai.bdstatic.com/file/B4220CD9991547E58FBD0D5BC77264B0">
          </div>
        </a-card>
        <a-card :style="{margin:'0px 5px 10px 5px',float:'left',width:'24%',height:'160px',minWidth:'230px'}" hoverable>
          <div :style="{margin:'25px 0px'}">
            <div :style="{float:'left'}">
              <div class="model-index-icon-text-card-item-title">电话Phone</div>
              <a class="model-index-icon-text-card-item-text" href="tel:15973607118">立即联系！</a>
            </div>
            <a-icon type="message" :style="{ fontSize: '50px', color: 'black'}" />
          </div>
        </a-card>
        <a-card :style="{margin:'0px 0px 10px 5px',float:'left',width:'24%',height:'160px',minWidth:'230px'}" hoverable>
          <div :style="{margin:'25px 0px'}">
            <div :style="{float:'left'}">
              <div class="model-index-icon-text-card-item-title">官方QQ</div>
              <a class="model-index-icon-text-card-item-text" href="https://qm.qq.com/cgi-bin/qm/qr?k=XYX9hWIo2kC1OlOacqrOMi3uDoPLVwK5&noverify=0">立即添加！</a>
            </div>
            <a-icon type="qq" :style="{ fontSize: '50px', color: '#059AF5'}" />
          </div>
        </a-card>
      </div>
    </a-layout-content>
  </a-layout>

</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      // recommendVideoTop: [],
      recommendVideoBottom: []
    }
  },
  created() {
  },
  methods: {
    more() {
      this.$router.push('/tilltill/1')
    }
  }
}
</script>
<style scoped>
  /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 330px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .custom-slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #fff;
        background-color: rgba(31, 45, 61, 0.11);
        opacity: 0.3;
    }
    .ant-carousel >>> .custom-slick-arrow:before {
        display: none;
    }
    .ant-carousel >>> .custom-slick-arrow:hover {
        opacity: 0.5;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }

  .model-index-banner-title {
    color: #000;
    font-size: 42px;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 60px;
  }
  .model-index-banner-text {
    color: #000;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: .5px;
    line-height: 60px;
  }
  .model-index-icon-text-card-item-title {
    color: #1f2024;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 28px;
    margin-right: 42px;
  }
  .model-index-icon-text-card-item-text {
    color: #666;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 1.5;
    margin-top: 5px;
    margin-right: 42px;
  }
  .model-operator-gird-item-video:hover .model-operator-gird-item-extra {
    opacity: 0;
  }
  .model-operator-gird-item:hover .model-operator-gird-item-extra {
    color: #2932e1;
  }
  .model-operator-gird-item-extra {
    bottom: 0;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: 22px;
    padding: 10px 25px 15px;
    position: absolute;
    right: 0;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
  }
</style>

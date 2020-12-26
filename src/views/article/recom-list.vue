<template>
  <div class="recom-container">
    <!-- 走马灯 -->
    <div class="cneter-carousel">
      <a-card title="最新公告" :head-style="headStyle" :body-style="adStyle">
        <a-carousel autoplay effect="fade">
          <div>
            <img src="http://img.fusheng.xyz/clms-news-3.jpg" class="carousel-img">
          </div>
          <div>
            <img src="http://img.fusheng.xyz/clms-news-2.jpg" class="carousel-img">
          </div>
          <div>
            <img src="http://img.fusheng.xyz/clms-news-1.jpg" class="carousel-img">
          </div>
          <div>
            <img src="http://img.fusheng.xyz/clms-search-back.jpg" class="carousel-img">
          </div>
        </a-carousel>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headStyle: {
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '15px',
        borderLeft: '5px solid #409eff'
      },
      adStyle: {
        padding: '10px'
      },
      recomStyle: {
        padding: '5px',
        maxHeight: '560px'
      }
    }
  }
}
</script>

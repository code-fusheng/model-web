<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: ''
    }
  }
  // watch: {
  //   'this.$route.path': function() {
  //     this.key = this.$route.path + Math.random()
  //   }
  // }
}
</script>

<style>
.main {
  /* background-image: linear-gradient(to right, rgb(13, 35, 77) 0%, #1d3d5b 25%, #4e8088 50%, #6c8d92 75%, #0d4e73 100%); */
  /* background-image: url('assets/img/bgi-7-plus.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  background-image: url('assets/img/bgi-7-plus.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
img {
  margin: auto;
  width: 100%;
}
/* 滚动条的宽度 */
::-webkit-scrollbar {
  width: 5px;
  height: 2px;
}
/* 滚动条滑块样式 */
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgb(9, 46, 68);
}
</style>

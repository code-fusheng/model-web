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
    background-color: rgb(119, 214, 110);
}
</style>

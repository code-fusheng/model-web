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
  background-image: linear-gradient(to right, rgb(13, 35, 77) 0%, #1e4468 25%, #3366a8 50%, #20386b 75%, #051f2e 100%);
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
  background-color: rgb(31, 162, 238);
}
</style>

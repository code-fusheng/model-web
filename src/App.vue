<template>
  <div class="main">
    <router-view />
  </div>
</template>
<style>
img {
    margin: auto;
    width: 100%;
}
/* 滚动条的宽度 */
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
/* 滚动条滑块样式 */
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(154, 158, 155);
}
</style>

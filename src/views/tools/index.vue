<template>
  <div>
    <!-- 工具容器 -->
    <div class="tools-container">
      <div class="card-container">
        <div class="card-item">
          <router-link to="/create">
            <a-button class="tool-write-article"><a-icon type="edit" />创作中心</a-button>
          </router-link>
        </div>
        <div class="card-item">
          <router-link to="/htc-test">
            <a-button class="tool-write-article"><a-icon type="edit" />HTC-测试</a-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tools-container {
  min-height: 660px;
  margin: auto;
  width: 90%;
  margin-top: 20px;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card-item {
  height: 150px;
  width: 20%;
}

.tool-write-article {
  width: 100%;
  height: 100%;
}
</style>

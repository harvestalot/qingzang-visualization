<template>
  <div class="Menu">
    <router-link to="/">首页</router-link>  |
    <router-link to="/demo">地图demo</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
.Menu{
  margin: 50px auto;
  text-align: center;
}
</style>

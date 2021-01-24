<template>
  <div class="Integral">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Integral',
};
</script>

<style lang="scss" scoped>
.Integral {
  width: 100%;
  height: calc(100% - 60px);
}
</style>

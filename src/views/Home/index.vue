<template>
  <div class="Home">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  name: 'Home',
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.Home {
  height: 100vh;
}
</style>

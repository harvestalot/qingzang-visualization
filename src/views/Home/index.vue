<template>
  <div class="Home">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.Home {
  height: 100vh;
}
</style>

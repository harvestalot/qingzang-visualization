<template>
  <div class="Layout">
    <Header v-if="headerVisual" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Layout',
  components: {
    Header,
  },
  computed: {
    headerVisual() {
      let visual = true;
      if (this.$attrs.visual === '') {
        visual = true;
      } else if (!this.$attrs.visual) {
        visual = false;
      }
      return visual;
    },
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  height: 100vh;
}
</style>

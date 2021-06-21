<template>
  <iframe class="PopulationMove" :src="src" frameborder="0" />
</template>

<script>
export default {
  name: 'PopulationMove',
  data() {
    return {};
  },
  computed: {
    src() {
      return this.$route.meta.url;
    },
  },
};
</script>

<style lang="scss">
.PopulationMove {
  width: 100%;
  height: 100%;
}
</style>

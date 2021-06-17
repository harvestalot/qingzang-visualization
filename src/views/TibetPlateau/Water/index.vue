<template>
  <div class="Water">
    <Map ref="childMap" />
  </div>
</template>

<script>
import Map from './Map.vue';

export default {
  name: 'Water',
  components: {
    Map,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$refs.childMap.initChart();
    },
  },
};
</script>

<style lang="scss" scoped>
.Water {
  height: 100%;
  position: relative;
}
</style>

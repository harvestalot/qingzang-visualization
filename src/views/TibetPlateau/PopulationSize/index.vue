<template>
  <div class="PopulationSize">
    <!-- <Map /> -->
    <StatisticalGraph />
  </div>
</template>

<script>
import Map from './Map.vue';
import StatisticalGraph from './StatisticalGraph.vue';

export default {
  name: 'PopulationSize',
  components: {
    Map,
    StatisticalGraph,
  },
};
</script>

<style lang="scss" scoped>
.PopulationSize {
  height: 100%;
}
</style>

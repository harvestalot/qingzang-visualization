<template>
  <div class="PopulationSize">
    <Map />
  </div>
</template>

<script>
import Map from './Map.vue';

export default {
  name: 'PopulationSize',
  components: {
    Map,
  },
};
</script>

<style lang="scss" scoped>
.PopulationSize {
  height: 100%;
}
</style>

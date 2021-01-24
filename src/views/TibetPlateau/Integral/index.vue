<template>
  <div class="TibetPlateau">
    <div class="TibetPlateau-top">
      <div class="TibetPlateau-top-left">
        <Population ref="childPopulation" />
        <Economy ref="childEconomy" />
        <UrbanLand ref="childUrbanLand" />
      </div>
      <div class="TibetPlateau-top-map"></div>
      <div class="TibetPlateau-top-right">
        <Water ref="childWater" />
        <Forest ref="childForest" />
        <VegetationIndex ref="childVegetationIndex" />
      </div>
    </div>
    <div class="TibetPlateau-bottom">
      <UrbanizationIndex ref="childUrbanizationIndex" />
    </div>
  </div>
</template>

<script>
import Economy from './Economy.vue';
import Population from './Population.vue';
import UrbanLand from './UrbanLand.vue';
import Water from './Water.vue';
import Forest from './Forest.vue';
import VegetationIndex from './VegetationIndex.vue';
import UrbanizationIndex from './UrbanizationIndex.vue';

export default {
  name: 'TibetPlateau',
  components: {
    Population,
    Economy,
    UrbanLand,
    Water,
    Forest,
    VegetationIndex,
    UrbanizationIndex,
  },
  watch: {
    '$store.state.currentYear': {
      immediate: true,
      handler(year) {
        this.$nextTick(() => {
          this.init(year);
        });
      },
    },
  },
  methods: {
    init(year) {
      this.$refs.childPopulation.initChart(year);
      this.$refs.childEconomy.initChart(year);
      this.$refs.childUrbanLand.initChart(year);
      this.$refs.childWater.initChart(year);
      this.$refs.childForest.initChart(year);
      this.$refs.childVegetationIndex.initChart(year);
      this.$refs.childUrbanizationIndex.initChart(year);
    },
  },
};
</script>
<style lang="scss" scoped>
.TibetPlateau {
  width: 100%;
  height: 100%;
  &-top {
    height: 75%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    &-left,
    &-right {
      width: 25%;
      height: 100%;
      .echarts-container:not(:first-child) {
        margin-top: 2%;
      }
    }
    &-map {
      width: 50%;
      height: 100%;
    }
  }
  &-bottom {
    height: 25%;
    .UrbanizationIndex {
      width: 100%;
      height: 100%;
      padding: $pd_10 $pd_10;
      background-color: $content;
    }
  }
}
</style>

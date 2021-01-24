<template>
  <div class="Integral">
    <div class="Integral-top">
      <div class="Integral-top-left">
        <Population ref="childPopulation" />
        <Economy ref="childEconomy" />
        <UrbanLand ref="childUrbanLand" />
      </div>
      <div class="Integral-top-map"></div>
      <div class="Integral-top-right">
        <Water ref="childWater" />
        <Forest ref="childForest" />
        <VegetationIndex ref="childVegetationIndex" />
      </div>
    </div>
    <div class="Integral-bottom">
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
  name: 'Integral',
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
.Integral {
  width: 100%;
  height: calc(100% - 60px);
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

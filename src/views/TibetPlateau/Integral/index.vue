<template>
  <div class="TibetPlateau">
    <div class="TibetPlateau-top">
      <div class="TibetPlateau-top-left">
        <Population ref="childPopulation" />
        <Economy ref="childEconomy" />
        <UrbanLand ref="childUrbanLand" />
      </div>
      <div class="TibetPlateau-top-map">
        <Map />
      </div>
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
import yearWatch from '@/mixins/YearWatch';
import Economy from './Economy.vue';
import Population from './Population.vue';
import UrbanLand from './UrbanLand.vue';
import Map from './Map.vue';
import Water from './Water.vue';
import Forest from './Forest.vue';
import VegetationIndex from './VegetationIndex.vue';
import UrbanizationIndex from './UrbanizationIndex.vue';

export default {
  name: 'TibetPlateau',
  mixins: [yearWatch],
  components: {
    Population,
    Economy,
    UrbanLand,
    Map,
    Water,
    Forest,
    VegetationIndex,
    UrbanizationIndex,
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
        margin-top: 12px;
      }
    }
    &-map {
      width: 50%;
      // height: 100%;
      padding: 0 12px 6px 12px;
      // margin: 0 10px 12px 10px;
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

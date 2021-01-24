<template>
  <div class="echarts-container Water">
    <LiquidfillPie
      :year="year"
      :title="title"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import LiquidfillPie from '@/components/LiquidfillPie.vue';
import $data from '@/assets/mockData/water_data';

export default {
  name: 'Water',
  components: {
    LiquidfillPie,
  },
  data() {
    return {
      year: 0,
      title: '水资源',
      seriesData: {},
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.seriesData = $data[0][year];
    },
  },
};
</script>

<style lang="scss" scoped>
.Water {
}
</style>

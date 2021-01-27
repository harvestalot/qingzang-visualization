<template>
  <div class="echarts-container Forest">
    <PictorialBar
      :colorIndex="1"
      :year="year"
      :title="title"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import PictorialBar from '@/components/PictorialBar.vue';
import $data from '@/assets/mockData/forest_data';

export default {
  name: 'Forest',
  components: {
    PictorialBar,
  },
  data() {
    return {
      year: 0,
      title: '森林',
      axisData: [],
      seriesData: [],
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.axisData = $data[1].city_name;
      this.seriesData = $data[1].forest_data[year];
    },
  },
};
</script>

<style lang="scss" scoped>
.Forest {
}
</style>

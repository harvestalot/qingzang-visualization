<template>
  <div class="echarts-container Economy">
    <PictorialBar
      :colorIndex="0"
      :year="year"
      :title="title"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import PictorialBar from '@/components/PictorialBar.vue';
import $data from '@/assets/mockData/economy_data';

export default {
  name: 'Economy',
  components: {
    PictorialBar,
  },
  data() {
    return {
      year: 0,
      title: '经济',
      axisData: [],
      seriesData: [],
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.axisData = $data[2].city_name;
      this.seriesData = $data[2].economy_data[year];
    },
  },
};
</script>

<style lang="scss" scoped>
.Economy {
}
</style>

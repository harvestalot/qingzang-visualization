<template>
  <div class="echarts-container UrbanizationIndex">
    <LineTimeline
      :year="year"
      :legend="legend"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import LineTimeline from '@/components/LineTimeline.vue';
import $data from '@/assets/mockData/urbanization_data';

export default {
  name: 'UrbanizationIndex',
  components: {
    LineTimeline,
  },
  data() {
    return {
      year: 0,
      legend: ['城镇指数', '生态指数'],
      axisData: [],
      seriesData: [],
    };
  },
  methods: {
    initChart(year) {
      const { years } = this.$store.state;
      const index = years.indexOf(year);
      this.year = year;
      this.axisData = years;
      this.seriesData = [
        $data[2].urbanization_data.slice(0, index + 1),
        $data[2].ecological_data.slice(0, index + 1),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.UrbanizationIndex {
}
</style>

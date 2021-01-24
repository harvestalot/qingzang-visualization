<template>
  <div class="echarts-container Population">
    <Bar
      :year="year"
      :title="title"
      :axisData="axisData"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import Bar from '@/components/Bar.vue';
import $data from '@/assets/mockData/population_data';

export default {
  name: 'Population',
  components: {
    Bar,
  },
  data() {
    return {
      year: 0,
      title: '人口',
      axisData: [],
      seriesData: [],
    };
  },
  methods: {
    initChart(year) {
      this.year = year;
      this.axisData = $data[3].city_name;
      this.seriesData = $data[3].population_data[year];
    },
  },
};
</script>

<style lang="scss" scoped>
.Population {
}
</style>

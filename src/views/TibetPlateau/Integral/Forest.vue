<template>
  <div class="echarts-container Forest">
    <Pie
      :radius="true"
      :year="year"
      :title="title"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import Pie from '@/components/Pie.vue';
import $data from '@/assets/mockData/forest_data';

export default {
  name: 'Forest',
  components: {
    Pie,
  },
  data() {
    return {
      year: 0,
      title: '森林',
      seriesData: [],
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
.Forest {
}
</style>

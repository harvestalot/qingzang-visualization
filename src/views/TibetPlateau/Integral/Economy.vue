<template>
  <div class="echarts-container Economy">
    <Pie
      :year="year"
      :title="title"
      :seriesData="seriesData"
    />
  </div>
</template>

<script>
import Pie from '@/components/Pie.vue';
import $data from '@/assets/mockData/economy_data';

export default {
  name: 'Economy',
  components: {
    Pie,
  },
  data() {
    return {
      year: 0,
      title: '经济',
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
.Economy {
}
</style>

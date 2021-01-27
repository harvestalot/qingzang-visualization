const yearWatch = {
  watch: {
    '$store.state.currentYear': {
      immediate: true,
      handler(year) {
        console.log(year);
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
export default yearWatch;

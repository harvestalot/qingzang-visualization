<template>
  <div class="DistrictIntegrity">
  </div>
</template>

<script>
export default {
  name: 'DistrictIntegrity',
};
</script>

<style lang="scss" scoped>
.DistrictIntegrity {
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

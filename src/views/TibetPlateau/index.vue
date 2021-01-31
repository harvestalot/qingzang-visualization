<template>
  <div class="Integral">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Integral',
  created() {},
  mounted() {
    this.initData();
  },
  methods: {
    ...mapActions('mapData', ['set_qz_boundary', 'set_qz_city']),
    initData() {
      this.set_qz_boundary();
      this.set_qz_city();
    },
  },
};
</script>

<style lang="scss" scoped>
.Integral {
  width: 100%;
  height: calc(100% - 60px);
}
</style>

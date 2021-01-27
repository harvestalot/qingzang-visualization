<template>
  <div class="Demo">
    <TimerShaft
      :times="times"
      :futureTimes="futureTimes"
    />
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import TimerShaft from '@/components/TimerShaft.vue';

export default {
  name: 'Demo',
  components: {
    TimerShaft,
  },
  data() {
    return {
      map: null,
      shadeLayer: null,
      times: [2000, 2005, 2009, 2012, 2018, 2020],
      futureTimes: [2025, 2030],
    };
  },
  mounted() {
    // this.initMap();
    this.$axios.get('/mockData/population_data.json').then((res) => {
      console.log(res);
    });
  },
  methods: {
    initMap() {
      this.$AMapLoader
        .load({
          key: 'b73fb6ec5455d81889ebc9abe077c0bd',
          version: '1.4.15',
          plugins: [],
          AMapUI: {
            version: '1.1',
            plugins: [],
          },
          Loca: {
            version: '1.3.2',
          },
        })
        .then((AMap) => {
          this.map = new AMap.Map('mapContainer', {
            resizeEnable: true,
            zoom: 5,
            center: [105.82675, 39.026228],
            mapStyle: 'amap://styles/a9434e6a60ea785788bca67352ffa70e',
            layers: [],
          });
          console.log(this.map.getBounds());
          this.map.on('click', (ev) => {
            console.log(ev);
            this.loadShadeLayer('河南省');
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    loadShadeLayer(name) {
      const { map, shadeLayer } = this;
      if (shadeLayer) map.remove(shadeLayer);
      this.$AMapLoader
        .load({
          plugins: ['AMap.DistrictSearch'],
        })
        .then((AMap) => {
          new AMap.DistrictSearch({
            extensions: 'all',
            subdistrict: 0,
          }).search(name, (status, result) => {
            // 外多边形坐标数组和内多边形坐标数组
            const outer = [
              new AMap.LngLat(-360, 90, true),
              new AMap.LngLat(-360, -90, true),
              new AMap.LngLat(360, -90, true),
              new AMap.LngLat(360, 90, true),
            ];
            const holes = result.districtList[0].boundaries;
            const pathArray = [outer].concat(holes);
            this.shadeLayer = new AMap.Polygon({
              path: pathArray,
              strokeColor: '#4762fe',
              strokeWeight: 3,
              fillColor: '#000',
              fillOpacity: 0.8,
            });
            // map.setFitView([this.shadeLayer]);
            this.shadeLayer.setPath(pathArray);
            map.setMapStyle('amap://styles/a9434e6a60ea785788bca67352ffa70e');
            map.add(this.shadeLayer);
            map.setZoomAndCenter(7, [113.82675, 34.026228]);
            this.shadeLayer.on('click', () => {
              map.remove(this.shadeLayer);
              map.setZoomAndCenter(5, [105.82675, 39.026228]);
            });
          });
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.Demo {
  width: 100%;
  height: 100%;
  .amap-container {
    width: 100%;
    height: 100%;
  }
}
</style>

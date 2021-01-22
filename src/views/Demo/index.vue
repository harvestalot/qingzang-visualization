<template>
  <div class="Demo">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      map: null,
      shadeLayer: null,
    };
  },
  mounted() {
    this.initMap();
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
            zoom: 4,
            mapStyle: 'amap://styles/4ab81766c3532896d5b265289c82cbc6',
            // mapStyle: 'amap://styles/a9434e6a60ea785788bca67352ffa70e',
          });
          this.map.on('click', (ev) => {
            console.log(ev);
            this.loadShadeLayer('南阳市');
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

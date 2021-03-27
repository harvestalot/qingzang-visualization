<template>
  <div class="Map">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
import $lsBoundaryData from '@/assets/mockData/ls_boundary_data.json';
import $lxBoundaryData from '@/assets/mockData/lx_boundary_data.json';
import $bjBoundaryData from '@/assets/mockData/bj_boundary_data.json';

export default {
  name: 'Map',
  data() {
    return {
      amap: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      AMapLoader.load({
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
          const imageLayer = new AMap.ImageLayer({
            url: '/qingzang.png',
            bounds: new AMap.Bounds([70.572, 18.179], [106.198, 46.236]),
            zooms: [5, 20],
          });
          this.amap = new AMap.Map('mapContainer', {
            resizeEnable: true,
            center: [89.33719, 32.942384],
            zoom: 5,
            zooms: [5, 20],
            mapStyle: 'amap://styles/dark',
            // mapStyle: 'amap://styles/a9434e6a60ea785788bca67352ffa70e',
            // layers: [imageLayer],
          });
          this.amap.add(imageLayer);
          this.loadAreaPolygon();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    loadAreaPolygon() {
      const _this = this;
      AMapLoader.load({
        key: 'b73fb6ec5455d81889ebc9abe077c0bd',
      }).then((AMap) => {
        const areaPolygon = new AMap.GeoJSON({
          geoJSON: {
            type: 'FeatureCollection',
            features: [$lsBoundaryData, $lxBoundaryData, $bjBoundaryData],
          },
          getPolygon(geojson, lnglats) {
            let fillColor = '#FF6C0E';
            const areaName = geojson.properties.name || '边境城市带';
            let lnglat = [85.518308, 28.774484];
            switch (areaName) {
              case '拉萨都市圈':
                fillColor = '#FF0E96';
                lnglat = [91.14728, 30.925737];
                break;
              case '兰西城市群':
                fillColor = '#FFE33A';
                lnglat = [101.797949, 37.05859];
                break;
              default:
                fillColor = '#FF6C0E';
                lnglat = [85.018308, 28.774484];
                break;
            }
            _this.areaName(areaName, lnglat);
            return new AMap.Polygon({
              path: lnglats,
              fillOpacity: 0.7,
              strokeColor: '#0cb204',
              fillColor,
            });
          },
        });
        areaPolygon.setMap(this.amap);
      });
    },
    areaName(name, lnglat) {
      AMapLoader.load({
        key: 'b73fb6ec5455d81889ebc9abe077c0bd',
      }).then((AMap) => {
        const text = new AMap.Text({
          text: name,
          anchor: 'center', // 设置文本标记锚点
          // draggable: true,
          cursor: 'pointer',
          // angle: 10,
          style: {
            padding: '5px 20px',
            'border-radius': '4px',
            'background-color': 'rgba(0,0,0,.5)',
            border: '1px solid rgba(0,0,0,.5)',
            'text-align': 'center',
            'font-size': '18px',
            'font-weight': '700',
            'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
          },
          position: lnglat,
        });
        text.setMap(this.amap);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Map {
  width: 100%;
  height: 100%;
  .amap-container {
    width: 100%;
    height: 100%;
  }
}
</style>

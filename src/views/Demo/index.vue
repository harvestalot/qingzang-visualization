<template>
  <div class="Demo">
    <div id="mapContainer"></div>
    <!-- <div
      ref="mapGraph"
      class="Demo-container"
    ></div> -->
    <!-- <AntMap /> -->
    <!-- <EchartGraph /> -->
  </div>
</template>

<script>
import $echartsOptions from '@/utils/echarts';
import $xian from './xian.json';
import $xianyang from './xianyang.json';
import $xuexiao from './xuexiao.json';

require('echarts/lib/chart/map');
require('echarts/lib/component/geo');

export default {
  name: 'Demo',
  components: {},
  data() {
    return {
      map: null,
      shadeLayer: null,
      imgurl: require('@/assets/images/qingzang.jpg'), // '@/assets/images/qingzang.jpg',
    };
  },
  mounted() {
    // this.initChart();
    this.initMap();
    // this.$axios.get('/mockData/population_data.json').then((res) => {
    //   console.log(res);
    // });
    // const ws = new WebSocket('ws://localhost:8080/');

    // ws.onmessage = function (event) {
    //   console.log(event.data);
    // };
  },
  methods: {
    initChart() {
      this.mapView = $echartsOptions.echarts.init(this.$refs.mapGraph);
      $echartsOptions.echarts.registerMap('XIAN-BOUNDARY', {
        type: 'FeatureCollection',
        features: $xian.concat($xianyang),
      });
      // $echartsOptions.echarts.registerMap('XUEXIAO-BOUNDARY', $xuexiao);
      this.initChartOptions();
    },
    initChartOptions() {
      this.option = {
        title: {
          text: '西安咸阳',
          left: 20,
          top: 20,
          textStyle: {
            fontSize: 20,
            color: '#fff',
          },
        },
        geo: {
          // show: false,
          map: 'XIAN-BOUNDARY',
          // center: [89.0887, 33.1168],
          // layoutCenter: ['47%', '51%'],
          // layoutSize: '124%',
          roam: true,
          zlevel: 1,
          label: {
            normal: {
              color: '#fff',
            },
            emphasis: {
              color: '#fff',
            },
          },
          itemStyle: {
            normal: {
              borderColor: '#389BB7',
              areaColor: '#000',
              borderWidth: 2,
            },
            emphasis: {
              areaColor: '#000',
              borderColor: '#8DF965',
              borderWidth: 2,
            },
          },
          // regions: [
          //   {
          //     name: '财经学校',
          //     selected: true,
          //     emphasis: {
          //       label: {
          //         show: false,
          //       },
          //       itemStyle: {
          //         areaColor: '#389BB7',
          //         borderColor: '#41FC86',
          //         borderWidth: 2,
          //       },
          //     },
          //   },
          //   {
          //     name: '康杜村',
          //     selected: true,
          //     emphasis: {
          //       label: {
          //         show: false,
          //       },
          //       itemStyle: {
          //         areaColor: '#389BB7',
          //         borderColor: '#41FC86',
          //         borderWidth: 2,
          //       },
          //     },
          //   },
          // ],
        },
        series: [
          {
            type: 'map',
            map: 'XIAN-BOUNDARY',
            roam: true,
            geoIndex: 0,
            // center: [90.5887, 33.2368],
            // layoutCenter: ['50%', '50%'],
            // layoutSize: '100%',
            zlevel: 2,
            data: [
              {
                name: '雁塔区',
                value: 1,
                selected: true,
                emphasis: {
                  itemStyle: {
                    areaColor: 'red',
                    borderColor: '#41FC86',
                    borderWidth: 2,
                  },
                },
              },
              {
                name: '康杜村',
                value: 1,
              },
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
              },
              emphasis: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#389BB7',
                areaColor: '#000',
                borderWidth: 2,
              },
              emphasis: {
                areaColor: '#389BB7',
                borderColor: '#8DF965',
                borderWidth: 2,
              },
            },
          },
          {
            type: 'map',
            map: 'XUEXIAO-BOUNDARY',
            geoIndex: 0,
            // center: [90.5887, 33.2368],
            layoutCenter: ['50%', '50%'],
            layoutSize: '10%',
            zlevel: 10,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                },
              },
              emphasis: {
                textStyle: {
                  color: '#fff',
                },
              },
            },
            itemStyle: {
              normal: {
                areaColor: '#389BB7',
                borderColor: '#8DF965',
                borderWidth: 2,
              },
              emphasis: {
                areaColor: '#389BB7',
                borderColor: '#8DF965',
                borderWidth: 2,
              },
            },
          },
        ],
      };
      this.mapView.setOption(this.option, true);
    },
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
          const imageLayer = new AMap.ImageLayer({
            url: this.imgurl,
            bounds: new AMap.Bounds([72.072, 19.679], [106.198, 46.236]),
            zooms: [5, 20],
          });
          this.map = new AMap.Map('mapContainer', {
            resizeEnable: true,
            center: [89.33719, 38.942384],
            zoom: 5,
            // mapStyle: 'amap://styles/a9434e6a60ea785788bca67352ffa70e',
            // layers: [imageLayer],
          });
          this.map.add(imageLayer);
          // this.loadLoca();
          // console.log(this.map.getBounds());
          // this.map.on('click', (ev) => {
          //   console.log(ev);
          //   this.loadShadeLayer('河南省');
          // });
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
    loadLoca() {
      // this.$AMapLoader.load().then(() => {
      const layer = new Loca.DistrictLayer({
        map: this.map,
      });
      layer.setOptions({
        style: {
          // 行政区 adcode
          adcode: 100000,
          // 热力聚合模式，count 为点数量加和
          mode: 'count', // 聚合模式，可选值: sum(值求和)、max(最大值)、min(最小值)、mean(平均值)、median(中位数)、count(个数)
          // 颜色范围
          color: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
          text: {
            content: '文字', // 文字内容
            direction: 'center', // 文字方位
            offset: [10, -10], // 偏移大小
            fontSize: 16, // 文字大小
            fillColor: '#E67E22', // 文字颜色
            strokeColor: 'rgba(255,255,255,0.85)', // 文字描边颜色
            strokeWidth: 1, // 文字描边宽度
          },
        },
      });

      // 渲染
      layer.render();
      console.log(layer);
      layer.on('click', (ev) => {
        const { feature } = ev;
        const { adcode } = feature.subFeature.properties;
        layer.goto(adcode);
      });
      // });
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
  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>

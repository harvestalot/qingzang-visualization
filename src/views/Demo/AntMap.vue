<template>
  <div
    id="map"
    class="AntMap"
  >
  </div>
</template>

<script>
import { Scene, PolygonLayer } from '@antv/l7';
// import { DrillDownLayer } from '@antv/l7-district';
import { GaodeMap } from '@antv/l7-maps';
import $xuexiao from './xuexiao.json';

const colors = ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'];
export default {
  name: 'AntMap',
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // const scene = new Scene({
      //   id: 'map',
      //   map: new Mapbox({
      //     center: [116.2825, 39.9],
      //     pitch: 0,
      //     style: 'blank',
      //     zoom: 3,
      //     minZoom: 3,
      //     maxZoom: 10,
      //   }),
      // });

      const scene = new Scene({
        id: 'map',
        map: new GaodeMap({
          pitch: 0,
          style: 'light',
          center: [116.368652, 39.93866],
          zoom: 10.07,
        }),
      });
      scene.on('loaded', () => {
        const layer = new PolygonLayer({})
          .source($xuexiao)
          .color(['#1A4397'])
          .shape('fill')
          .active(true)
          .style({
            opacity: 1,
          });
        scene.addLayer(layer);
      });
      // scene.on('loaded', () => {
      //   const layer = new ImageLayer({});
      //   layer.source(
      //     'https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*8SUaRr7bxNsAAAAAAAAAAABkARQnAQ',
      //     {
      //       parser: {
      //         type: 'image',
      //         extent: [73.262, 24.288, 104.824, 39.988],
      //         width: 1660,
      //         height: 1000,
      //       },
      //     }
      //   );
      //   scene.addLayer(layer);
      // });
      // scene.on('loaded', () => {
      //   new DrillDownLayer(scene, {
      //     data: [],
      //     viewStart: 'Country',
      //     viewEnd: 'Province',
      //     fill: {
      //       color: {
      //         field: 'NAME_CHN',
      //         values: colors,
      //       },
      //     },
      //     popup: {
      //       enable: true,
      //       Html: (props) => `<span>${props.NAME_CHN}</span>`,
      //     },
      //   });
      // });
      console.log(scene);
    },
  },
};
</script>

<style lang="scss" scoped>
.AntMap {
  width: 100%;
  height: 100%;
}
</style>

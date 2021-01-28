import elementResizeDetector from 'element-resize-detector';

const echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/pictorialBar');

require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/axisPointer');

const echartsOptions = {
  echarts,
  color: [
    '#EA9F04',
    '#8DF965',
    '#d66349',
    '#41FC86',
    '#f0993c',
    '#a57ec0',
    '#579dcb',
    '#5cba89',
    '#7758b0',
    '#A900E6',
    '#FF0000',
    '#0084A8',
    '#FFFF00',
    '#730000',
    '#FFAA00',
    '#FF73DF',
    '#FF7F7F',
    '#00A884',
    '#005CE6',
    '#73DFFF',
  ],
  title: {
    top: 0,
    left: 0,
    textStyle: {
      fontSize: 14,
      color: '#fff',
    },
  },
  grid: {
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  legend: {
    icon: 'circle',
    top: 10,
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
    borderRadius: 10,
    textStyle: {
      color: '#fff',
      fontSize: 12,
    },
  },
  axis: {
    nameTextStyle: {
      fontSize: '14',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#666',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.7)',
      },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#ddd',
      },
    },
    axisTick: {
      show: false,
    },
  },
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'shadow',
    // },
    confine: true,
    appendToBody: true,
  },
  linearGradientColor(option) {
    const { orientation, areaColor } = option;
    const type = orientation || 'top';
    const colors = [
      { start: 'rgba(234,159,4, 0.9)', end: 'rgba(234,159,4, 0.1)' },
      { start: '#3f07ff', end: '#3fbbff' },
    ];
    return {
      type: 'linear',
      x: type === 'right' ? 1 : 0,
      x1: type === 'bottom' ? 1 : 0,
      y: type === 'left' ? 1 : 0,
      y1: type === 'top' ? 1 : 0,
      colorStops: [
        {
          offset: 0,
          color: areaColor ? colors[areaColor].start : colors[0].start,
        },
        {
          offset: 1,
          color: areaColor ? colors[areaColor].end : colors[0].end,
        },
      ],
    };
  },
  onresize(elem) {
    elementResizeDetector().listenTo(elem, () => {
      echarts.init(elem).resize();
    });
  },
};

export default echartsOptions;

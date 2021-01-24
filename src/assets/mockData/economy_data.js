// 经济
const economyData = [
  // 青藏地区数据
  {
    2000: [
      { name: '西宁', value: '73.16' },
      { name: '海东', value: '49.24' },
      { name: '海北', value: '10.01' },
      { name: '海南', value: '13.43' },
      { name: '黄南', value: '12.17' },
      { name: '果洛', value: '4.42' },
      { name: '玉树', value: '5.96' },
      { name: '海西', value: '40.87' },
      { name: '拉萨', value: '33.47' },
      { name: '昌都', value: '14.51' },
      { name: '山南', value: '8.39' },
      { name: '日喀则', value: '19.93' },
      { name: '那曲', value: '8.82' },
      { name: '阿里', value: '2.73' },
      { name: '林芝', value: '9.38' },
    ],
    2001: [
      { name: '西宁', value: '104.49' },
      { name: '海东', value: '43.95' },
      { name: '海北', value: '12.25' },
      { name: '海南', value: '16' },
      { name: '黄南', value: '14.1' },
      { name: '果洛', value: '5.42' },
      { name: '玉树', value: '7.74' },
      { name: '海西', value: '61.5' },
      { name: '拉萨', value: '47.17' },
      { name: '昌都', value: '18.07' },
      { name: '山南', value: '11.08' },
      { name: '日喀则', value: '25.24' },
      { name: '那曲', value: '11.54' },
      { name: '阿里', value: '3.89' },
      { name: '林芝', value: '12.95' },
    ],
    2002: [
      { name: '西宁', value: '121.4' },
      { name: '海东', value: '50.1' },
      { name: '海北', value: '14' },
      { name: '海南', value: '18.2' },
      { name: '黄南', value: '15.6' },
      { name: '果洛', value: '6' },
      { name: '玉树', value: '8.9' },
      { name: '海西', value: '70' },
      { name: '拉萨', value: '55.1' },
      { name: '昌都', value: '21' },
      { name: '山南', value: '13' },
      { name: '日喀则', value: '29' },
      { name: '那曲', value: '13.8' },
      { name: '阿里', value: '4.6' },
      { name: '林芝', value: '15.9' },
    ],
    2003: [
      { name: '西宁', value: '144.8' },
      { name: '海东', value: '57.3' },
      { name: '海北', value: '16.1' },
      { name: '海南', value: '16.4' },
      { name: '黄南', value: '20.4' },
      { name: '果洛', value: '6.7' },
      { name: '玉树', value: '9.7' },
      { name: '海西', value: '83' },
      { name: '拉萨', value: '64.3' },
      { name: '昌都', value: '24.7' },
      { name: '山南', value: '15.8' },
      { name: '日喀则', value: '34.4' },
      { name: '那曲', value: '16.2' },
      { name: '阿里', value: '5.4' },
      { name: '林芝', value: '19' },
    ],
    2004: [
      { name: '西宁', value: '174.7' },
      { name: '海东', value: '66.8' },
      { name: '海北', value: '18.3' },
      { name: '海南', value: '23.7' },
      { name: '黄南', value: '19.7' },
      { name: '果洛', value: '7.2' },
      { name: '玉树', value: '13.7' },
      { name: '海西', value: '100.3' },
      { name: '拉萨', value: '75.2' },
      { name: '昌都', value: '28.2' },
      { name: '山南', value: '19.1' },
      { name: '日喀则', value: '40.8' },
      { name: '那曲', value: '19.3' },
      { name: '阿里', value: '6.3' },
      { name: '林芝', value: '22.8' },
    ],
    2005: [
      { name: '西宁', value: '237.6' },
      { name: '海东', value: '74.2' },
      { name: '海北', value: '20.4' },
      { name: '海南', value: '22.7' },
      { name: '黄南', value: '29.1' },
      { name: '果洛', value: '7.9' },
      { name: '玉树', value: '13.9' },
      { name: '海西', value: '134.3' },
      { name: '拉萨', value: '86.8' },
      { name: '昌都', value: '32.5' },
      { name: '山南', value: '24.5' },
      { name: '日喀则', value: '44.1' },
      { name: '那曲', value: '28.7' },
      { name: '阿里', value: '9.6' },
      { name: '林芝', value: '24.5' },
    ],
    2006: [
      { name: '西宁', value: '281.6' },
      { name: '海东', value: '84.7' },
      { name: '海北', value: '23.5' },
      { name: '海南', value: '23.4' },
      { name: '黄南', value: '32.8' },
      { name: '果洛', value: '8.7' },
      { name: '玉树', value: '15.5' },
      { name: '海西', value: '170' },
      { name: '拉萨', value: '102.4' },
      { name: '昌都', value: '37.4' },
      { name: '山南', value: '28.7' },
      { name: '日喀则', value: '50.5' },
      { name: '那曲', value: '32.7' },
      { name: '阿里', value: '11.3' },
      { name: '林芝', value: '27.5' },
    ],
    2007: [
      { name: '西宁', value: '342.5' },
      { name: '海东', value: '102.1' },
      { name: '海北', value: '28.6' },
      { name: '海南', value: '28' },
      { name: '黄南', value: '40.9' },
      { name: '果洛', value: '10.1' },
      { name: '玉树', value: '17.8' },
      { name: '海西', value: '201.7' },
      { name: '拉萨', value: '121.9' },
      { name: '昌都', value: '44.4' },
      { name: '山南', value: '33.2' },
      { name: '日喀则', value: '58.9' },
      { name: '那曲', value: '37.2' },
      { name: '阿里', value: '13.4' },
      { name: '林芝', value: '33.8' },
    ],
    2008: [
      { name: '西宁', value: '342.5' },
      { name: '海东', value: '102.1' },
      { name: '海北', value: '28.6' },
      { name: '海南', value: '28' },
      { name: '黄南', value: '40.9' },
      { name: '果洛', value: '10.1' },
      { name: '玉树', value: '17.8' },
      { name: '海西', value: '201.7' },
      { name: '拉萨', value: '121.9' },
      { name: '昌都', value: '44.4' },
      { name: '山南', value: '33.2' },
      { name: '日喀则', value: '58.9' },
      { name: '那曲', value: '37.2' },
      { name: '阿里', value: '13.4' },
      { name: '林芝', value: '33.8' },
    ],
    2009: [
      { name: '西宁', value: '422.19' },
      { name: '海东', value: '122.36' },
      { name: '海北', value: '38.19' },
      { name: '海南', value: '33.95' },
      { name: '黄南', value: '51.6' },
      { name: '果洛', value: '12.66' },
      { name: '玉树', value: '24.51' },
      { name: '海西', value: '273.11' },
      { name: '拉萨', value: '142.05' },
      { name: '昌都', value: '51.37' },
      { name: '山南', value: '39.89' },
      { name: '日喀则', value: '67.27' },
      { name: '那曲', value: '42.19' },
      { name: '阿里', value: '15.13' },
      { name: '林芝', value: '38.99' },
    ],
    2010: [
      { name: '西宁', value: '501.07' },
      { name: '海东', value: '135.67' },
      { name: '海北', value: '42.63' },
      { name: '海南', value: '34.64' },
      { name: '黄南', value: '58.72' },
      { name: '果洛', value: '15.05' },
      { name: '玉树', value: '25.48' },
      { name: '海西', value: '291.78' },
      { name: '拉萨', value: '154.27' },
      { name: '昌都', value: '57.9' },
      { name: '山南', value: '45.48' },
      { name: '日喀则', value: '75.51' },
      { name: '那曲', value: '45.11' },
      { name: '阿里', value: '16.34' },
      { name: '林芝', value: '45.77' },
    ],
    2011: [
      { name: '西宁', value: '628.28' },
      { name: '海东', value: '173.31' },
      { name: '海北', value: '54.53' },
      { name: '海南', value: '43.68' },
      { name: '黄南', value: '69.89' },
      { name: '果洛', value: '20.43' },
      { name: '玉树', value: '31.86' },
      { name: '海西', value: '365.49' },
      { name: '拉萨', value: '178.91' },
      { name: '昌都', value: '67.07' },
      { name: '山南', value: '53.05' },
      { name: '日喀则', value: '86.4' },
      { name: '那曲', value: '51.15' },
      { name: '阿里', value: '18.48' },
      { name: '林芝', value: '53.69' },
    ],
    2012: [
      { name: '西宁', value: '770.7' },
      { name: '海东', value: '219.37' },
      { name: '海北', value: '77.89' },
      { name: '海南', value: '48.4' },
      { name: '黄南', value: '82.65' },
      { name: '果洛', value: '26.14' },
      { name: '玉树', value: '40.2' },
      { name: '海西', value: '481.4' },
      { name: '拉萨', value: '222.09' },
      { name: '昌都', value: '75.4' },
      { name: '山南', value: '63.37' },
      { name: '日喀则', value: '103.91' },
      { name: '那曲', value: '58.03' },
      { name: '阿里', value: '21.3' },
      { name: '林芝', value: '61.35' },
    ],
    2013: [
      { name: '西宁', value: '851.09' },
      { name: '海东', value: '274.13' },
      { name: '海北', value: '95.97' },
      { name: '海南', value: '58.11' },
      { name: '黄南', value: '104.35' },
      { name: '果洛', value: '30.54' },
      { name: '玉树', value: '47.17' },
      { name: '海西', value: '570.33' },
      { name: '拉萨', value: '260.04' },
      { name: '昌都', value: '89.75' },
      { name: '山南', value: '73.07' },
      { name: '日喀则', value: '115.24' },
      { name: '那曲', value: '65.16' },
      { name: '阿里', value: '25.63' },
      { name: '林芝', value: '72.39' },
    ],
    2014: [
      { name: '西宁', value: '978.5' },
      { name: '海东', value: '337' },
      { name: '海北', value: '112.3' },
      { name: '海南', value: '66.5' },
      { name: '黄南', value: '117.1' },
      { name: '果洛', value: '32.1' },
      { name: '玉树', value: '54.7' },
      { name: '海西', value: '609.7' },
      { name: '拉萨', value: '304.9' },
      { name: '昌都', value: '104.5' },
      { name: '山南', value: '86.6' },
      { name: '日喀则', value: '128.6' },
      { name: '那曲', value: '72.9' },
      { name: '阿里', value: '28.9' },
      { name: '林芝', value: '81.8' },
    ],
    2015: [
      { name: '西宁', value: '1043.2' },
      { name: '海东', value: '357.6' },
      { name: '海北', value: '119.6' },
      { name: '海南', value: '70.3' },
      { name: '黄南', value: '124.6' },
      { name: '果洛', value: '34.1' },
      { name: '玉树', value: '58.2' },
      { name: '海西', value: '650.3' },
      { name: '拉萨', value: '324.3' },
      { name: '昌都', value: '110.9' },
      { name: '山南', value: '92.2' },
      { name: '日喀则', value: '136.4' },
      { name: '那曲', value: '77.5' },
      { name: '阿里', value: '30.8' },
      { name: '林芝', value: '87' },
    ],
  },
  // 拉萨都市圈
  {
    city_name: ['城关区', '堆龙德庆区', '达孜区', '林周县', '当雄县', '尼木县', '曲水县', '墨竹工卡县', '桑珠孜区', '江孜县',
      '仁布县', '白朗县', '乃东区', '贡嘎县', '扎囊县'],
    economy_data:
                {
                  2000: [{
                    name: '城关区',
                    value: '24.36',
                  }, {
                    name: '堆龙德庆区',
                    value: '1.7326',
                  }, {
                    name: '达孜区',
                    value: '0.8382',
                  }, {
                    name: '林周县',
                    value: '2.0291',
                  }, {
                    name: '当雄县',
                    value: '1.6715',
                  }, {
                    name: '尼木县',
                    value: '0.8707',
                  }, {
                    name: '曲水县',
                    value: '0.8641',
                  }, {
                    name: '墨竹工卡县',
                    value: '1.1065',
                  }, {
                    name: '桑珠孜区',
                    value: '3.5314',
                  }, {
                    name: '江孜县',
                    value: '2.7165',
                  }, {
                    name: '仁布县',
                    value: '0.5914',
                  }, {
                    name: '白朗县',
                    value: '1.0893',
                  }, {
                    name: '乃东区',
                    value: '0.4379',
                  }, {
                    name: '贡嘎县',
                    value: '1.3111',
                  }, {
                    name: '扎囊县',
                    value: '0.7195',
                  }],
                  2001: [{
                    name: '城关区',
                    value: '33.032',
                  }, {
                    name: '堆龙德庆区',
                    value: '2.62934',
                  }, {
                    name: '达孜区',
                    value: '1.24438',
                  }, {
                    name: '林周县',
                    value: '2.35619',
                  }, {
                    name: '当雄县',
                    value: '2.11435',
                  }, {
                    name: '尼木县',
                    value: '1.07863',
                  }, {
                    name: '曲水县',
                    value: '1.23469',
                  }, {
                    name: '墨竹工卡县',
                    value: '1.86285',
                  }, {
                    name: '桑珠孜区',
                    value: '6.08026',
                  }, {
                    name: '江孜县',
                    value: '3.41385',
                  }, {
                    name: '仁布县',
                    value: '0.71026',
                  }, {
                    name: '白朗县',
                    value: '1.41737',
                  }, {
                    name: '乃东区',
                    value: '2.59511',
                  }, {
                    name: '贡嘎县',
                    value: '1.64799',
                  }, {
                    name: '扎囊县',
                    value: '0.92655',
                  }],
                  2002: [{
                    name: '城关区',
                    value: '41.704',
                  }, {
                    name: '堆龙德庆区',
                    value: '3.52608',
                  }, {
                    name: '达孜区',
                    value: '1.65056',
                  }, {
                    name: '林周县',
                    value: '2.68328',
                  }, {
                    name: '当雄县',
                    value: '2.5572',
                  }, {
                    name: '尼木县',
                    value: '1.28656',
                  }, {
                    name: '曲水县',
                    value: '1.60528',
                  }, {
                    name: '墨竹工卡县',
                    value: '2.6192',
                  }, {
                    name: '桑珠孜区',
                    value: '8.62912',
                  }, {
                    name: '江孜县',
                    value: '4.1112',
                  }, {
                    name: '仁布县',
                    value: '0.82912',
                  }, {
                    name: '白朗县',
                    value: '1.74544',
                  }, {
                    name: '乃东区',
                    value: '4.75232',
                  }, {
                    name: '贡嘎县',
                    value: '1.98488',
                  }, {
                    name: '扎囊县',
                    value: '1.1336',
                  }],
                  2003: [{
                    name: '城关区',
                    value: '50.376',
                  }, {
                    name: '堆龙德庆区',
                    value: '4.42282',
                  }, {
                    name: '达孜区',
                    value: '2.05674',
                  }, {
                    name: '林周县',
                    value: '3.01037',
                  }, {
                    name: '当雄县',
                    value: '3.00005',
                  }, {
                    name: '尼木县',
                    value: '1.49449',
                  }, {
                    name: '曲水县',
                    value: '1.97587',
                  }, {
                    name: '墨竹工卡县',
                    value: '3.37555',
                  }, {
                    name: '桑珠孜区',
                    value: '11.17798',
                  }, {
                    name: '江孜县',
                    value: '4.80855',
                  }, {
                    name: '仁布县',
                    value: '0.94798',
                  }, {
                    name: '白朗县',
                    value: '2.07351',
                  }, {
                    name: '乃东区',
                    value: '6.90953',
                  }, {
                    name: '贡嘎县',
                    value: '2.32177',
                  }, {
                    name: '扎囊县',
                    value: '1.34065',
                  }],
                  2004: [{
                    name: '城关区',
                    value: '59.048',
                  }, {
                    name: '堆龙德庆区',
                    value: '5.31956',
                  }, {
                    name: '达孜区',
                    value: '2.46292',
                  }, {
                    name: '林周县',
                    value: '3.33746',
                  }, {
                    name: '当雄县',
                    value: '3.4429',
                  }, {
                    name: '尼木县',
                    value: '1.70242',
                  }, {
                    name: '曲水县',
                    value: '2.34646',
                  }, {
                    name: '墨竹工卡县',
                    value: '4.1319',
                  }, {
                    name: '桑珠孜区',
                    value: '13.72684',
                  }, {
                    name: '江孜县',
                    value: '5.5059',
                  }, {
                    name: '仁布县',
                    value: '1.06684',
                  }, {
                    name: '白朗县',
                    value: '2.40158',
                  }, {
                    name: '乃东区',
                    value: '9.06674',
                  }, {
                    name: '贡嘎县',
                    value: '2.65866',
                  }, {
                    name: '扎囊县',
                    value: '1.5477',
                  }],
                  2005: [{
                    name: '城关区',
                    value: '67.72',
                  }, {
                    name: '堆龙德庆区',
                    value: '6.2163',
                  }, {
                    name: '达孜区',
                    value: '2.8691',
                  }, {
                    name: '林周县',
                    value: '3.66455',
                  }, {
                    name: '当雄县',
                    value: '3.88575',
                  }, {
                    name: '尼木县',
                    value: '1.91035',
                  }, {
                    name: '曲水县',
                    value: '2.71705',
                  }, {
                    name: '墨竹工卡县',
                    value: '4.88825',
                  }, {
                    name: '桑珠孜区',
                    value: '16.2757',
                  }, {
                    name: '江孜县',
                    value: '6.20325',
                  }, {
                    name: '仁布县',
                    value: '1.1857',
                  }, {
                    name: '白朗县',
                    value: '2.72965',
                  }, {
                    name: '乃东区',
                    value: '11.22395',
                  }, {
                    name: '贡嘎县',
                    value: '2.99555',
                  }, {
                    name: '扎囊县',
                    value: '1.75475',
                  }],
                  2006: [{
                    name: '城关区',
                    value: '76.392',
                  }, {
                    name: '堆龙德庆区',
                    value: '7.11304',
                  }, {
                    name: '达孜区',
                    value: '3.27528',
                  }, {
                    name: '林周县',
                    value: '3.99164',
                  }, {
                    name: '当雄县',
                    value: '4.3286',
                  }, {
                    name: '尼木县',
                    value: '2.11828',
                  }, {
                    name: '曲水县',
                    value: '3.08764',
                  }, {
                    name: '墨竹工卡县',
                    value: '5.6446',
                  }, {
                    name: '桑珠孜区',
                    value: '18.82456',
                  }, {
                    name: '江孜县',
                    value: '6.9006',
                  }, {
                    name: '仁布县',
                    value: '1.30456',
                  }, {
                    name: '白朗县',
                    value: '3.05772',
                  }, {
                    name: '乃东区',
                    value: '13.38116',
                  }, {
                    name: '贡嘎县',
                    value: '3.33244',
                  }, {
                    name: '扎囊县',
                    value: '1.9618',
                  }],
                  2007: [{
                    name: '城关区',
                    value: '85.064',
                  }, {
                    name: '堆龙德庆区',
                    value: '8.00978',
                  }, {
                    name: '达孜区',
                    value: '3.68146',
                  }, {
                    name: '林周县',
                    value: '4.31873',
                  }, {
                    name: '当雄县',
                    value: '4.77145',
                  }, {
                    name: '尼木县',
                    value: '2.32621',
                  }, {
                    name: '曲水县',
                    value: '3.45823',
                  }, {
                    name: '墨竹工卡县',
                    value: '6.40095',
                  }, {
                    name: '桑珠孜区',
                    value: '21.37342',
                  }, {
                    name: '江孜县',
                    value: '7.59795',
                  }, {
                    name: '仁布县',
                    value: '1.42342',
                  }, {
                    name: '白朗县',
                    value: '3.38579',
                  }, {
                    name: '乃东区',
                    value: '15.53837',
                  }, {
                    name: '贡嘎县',
                    value: '3.66933',
                  }, {
                    name: '扎囊县',
                    value: '2.16885',
                  }],
                  2008: [{
                    name: '城关区',
                    value: '93.736',
                  }, {
                    name: '堆龙德庆区',
                    value: '8.90652',
                  }, {
                    name: '达孜区',
                    value: '4.08764',
                  }, {
                    name: '林周县',
                    value: '4.64582',
                  }, {
                    name: '当雄县',
                    value: '5.2143',
                  }, {
                    name: '尼木县',
                    value: '2.53414',
                  }, {
                    name: '曲水县',
                    value: '3.82882',
                  }, {
                    name: '墨竹工卡县',
                    value: '7.1573',
                  }, {
                    name: '桑珠孜区',
                    value: '23.92228',
                  }, {
                    name: '江孜县',
                    value: '8.2953',
                  }, {
                    name: '仁布县',
                    value: '1.54228',
                  }, {
                    name: '白朗县',
                    value: '3.71386',
                  }, {
                    name: '乃东区',
                    value: '17.69558',
                  }, {
                    name: '贡嘎县',
                    value: '4.00622',
                  }, {
                    name: '扎囊县',
                    value: '2.3759',
                  }],
                  2009: [{
                    name: '城关区',
                    value: '102.408',
                  }, {
                    name: '堆龙德庆区',
                    value: '9.80326',
                  }, {
                    name: '达孜区',
                    value: '4.49382',
                  }, {
                    name: '林周县',
                    value: '4.97291',
                  }, {
                    name: '当雄县',
                    value: '5.65715',
                  }, {
                    name: '尼木县',
                    value: '2.74207',
                  }, {
                    name: '曲水县',
                    value: '4.19941',
                  }, {
                    name: '墨竹工卡县',
                    value: '7.91365',
                  }, {
                    name: '桑珠孜区',
                    value: '26.47114',
                  }, {
                    name: '江孜县',
                    value: '8.99265',
                  }, {
                    name: '仁布县',
                    value: '1.66114',
                  }, {
                    name: '白朗县',
                    value: '4.04193',
                  }, {
                    name: '乃东区',
                    value: '19.85279',
                  }, {
                    name: '贡嘎县',
                    value: '4.34311',
                  }, {
                    name: '扎囊县',
                    value: '2.58295',
                  }],
                  2010: [{
                    name: '城关区',
                    value: '111.08',
                  }, {
                    name: '堆龙德庆区',
                    value: '10.7',
                  }, {
                    name: '达孜区',
                    value: '4.9',
                  }, {
                    name: '林周县',
                    value: '5.3',
                  }, {
                    name: '当雄县',
                    value: '6.1',
                  }, {
                    name: '尼木县',
                    value: '2.95',
                  }, {
                    name: '曲水县',
                    value: '4.57',
                  }, {
                    name: '墨竹工卡县',
                    value: '8.67',
                  }, {
                    name: '桑珠孜区',
                    value: '29.02',
                  }, {
                    name: '江孜县',
                    value: '9.69',
                  }, {
                    name: '仁布县',
                    value: '1.78',
                  }, {
                    name: '白朗县',
                    value: '4.37',
                  }, {
                    name: '乃东区',
                    value: '22.01',
                  }, {
                    name: '贡嘎县',
                    value: '4.68',
                  }, {
                    name: '扎囊县',
                    value: '2.79',
                  }],
                  2011: [{
                    name: '城关区',
                  }, {
                    name: '堆龙德庆区',
                  }, {
                    name: '达孜区',
                  }, {
                    name: '林周县',
                  }, {
                    name: '当雄县',
                  }, {
                    name: '尼木县',
                  }, {
                    name: '曲水县',
                  }, {
                    name: '墨竹工卡县',
                  }, {
                    name: '桑珠孜区',
                  }, {
                    name: '江孜县',
                  }, {
                    name: '仁布县',
                  }, {
                    name: '白朗县',
                  }, {
                    name: '乃东区',
                  }, {
                    name: '贡嘎县',
                  }, {
                    name: '扎囊县',
                  }],
                  2012: [{
                    name: '城关区',
                  }, {
                    name: '堆龙德庆区',
                  }, {
                    name: '达孜区',
                  }, {
                    name: '林周县',
                  }, {
                    name: '当雄县',
                  }, {
                    name: '尼木县',
                  }, {
                    name: '曲水县',
                  }, {
                    name: '墨竹工卡县',
                  }, {
                    name: '桑珠孜区',
                  }, {
                    name: '江孜县',
                  }, {
                    name: '仁布县',
                  }, {
                    name: '白朗县',
                  }, {
                    name: '乃东区',
                  }, {
                    name: '贡嘎县',
                  }, {
                    name: '扎囊县',
                  }],
                  2013: [{
                    name: '城关区',
                    value: '208.2320 ',
                  }, {
                    name: '堆龙德庆区',
                    value: '21.96',
                  }, {
                    name: '达孜区',
                    value: '9.04',
                  }, {
                    name: '林周县',
                    value: '12.6',
                  }, {
                    name: '当雄县',
                    value: '9.1',
                  }, {
                    name: '尼木县',
                    value: '5.15',
                  }, {
                    name: '曲水县',
                    value: '8.2',
                  }, {
                    name: '墨竹工卡县',
                    value: '18.89',
                  }, {
                    name: '桑珠孜区',
                    value: '46.1016',
                  }, {
                    name: '江孜县',
                    value: '13.0977',
                  }, {
                    name: '仁布县',
                    value: '3.077',
                  }, {
                    name: '白朗县',
                    value: '6.1039',
                  }, {
                    name: '乃东区',
                    value: '29.5387',
                  }, {
                    name: '贡嘎县',
                    value: '7.2614',
                  }, {
                    name: '扎囊县',
                    value: '4.674',
                  }],
                  2014: [{
                    name: '城关区',
                    value: '240.6160 ',
                  }, {
                    name: '堆龙德庆区',
                    value: '27.3595',
                  }, {
                    name: '达孜区',
                    value: '10.6691',
                  }, {
                    name: '林周县',
                    value: '14.04',
                  }, {
                    name: '当雄县',
                    value: '10.88',
                  }, {
                    name: '尼木县',
                    value: '5.96',
                  }, {
                    name: '曲水县',
                    value: '10.291',
                  }, {
                    name: '墨竹工卡县',
                    value: '21.0115',
                  }, {
                    name: '桑珠孜区',
                    value: '51.9847',
                  }, {
                    name: '江孜县',
                    value: '14.8491',
                  }, {
                    name: '仁布县',
                    value: '3.6973',
                  }, {
                    name: '白朗县',
                    value: '6.9954',
                  }, {
                    name: '乃东区',
                    value: '33.8993',
                  }, {
                    name: '贡嘎县',
                    value: '9.1392',
                  }, {
                    name: '扎囊县',
                    value: '5.6084',
                  }],
                  2015: [{
                    name: '城关区',
                    value: '273',
                  }, {
                    name: '堆龙德庆区',
                    value: '21.98',
                  }, {
                    name: '达孜区',
                    value: '14.05',
                  }, {
                    name: '林周县',
                    value: '15.18',
                  }, {
                    name: '当雄县',
                    value: '12.86',
                  }, {
                    name: '尼木县',
                    value: '6.32',
                  }, {
                    name: '曲水县',
                    value: '11.36',
                  }, {
                    name: '墨竹工卡县',
                    value: '21.89',
                  }, {
                    name: '桑珠孜区',
                    value: '57.31',
                  }, {
                    name: '江孜县',
                    value: '17.08',
                  }, {
                    name: '仁布县',
                    value: '4.49',
                  }, {
                    name: '白朗县',
                    value: '7.77',
                  }, {
                    name: '乃东区',
                    value: '43.21',
                  }, {
                    name: '贡嘎县',
                    value: '11.1',
                  }, {
                    name: '扎囊县',
                    value: '5.67',
                  }],
                },
  },
  // 兰西城市群
  {
    city_name: ['城关区', '七里河区', '西固区', '安宁区', '红古区', '永登县', '皋兰县', '榆中县',
      '白银区', '平川区', '靖远县', '景泰县', '安定区', '陇西县', '渭源县', '临洮县', '临夏市',
      '永靖县', '东乡族自治', '积石山保安', '城东区', '城中区', '城西区', '城北区', '大通回族土',
      '湟中县', '湟源县', '乐都区', '平安区', '民和回族土', '互助土族自', '化隆回族自', '循化撒拉族',
      '海晏县', '同仁县', '尖扎县', '共和县', '贵德县', '贵南县'],
    economy_data:
            {
              2000: [{
                name: '城关区',
                value: '120.65 ',
              }, {
                name: '七里河区',
                value: '43.92 ',
              }, {
                name: '西固区',
                value: '74.47 ',
              }, {
                name: '安宁区',
                value: '12.07 ',
              }, {
                name: '红古区',
                value: '15.48 ',
              }, {
                name: '永登县',
                value: '23.47 ',
              }, {
                name: '皋兰县',
                value: '7.17 ',
              }, {
                name: '榆中县',
                value: '8.15 ',
              }, {
                name: '白银区',
                value: '37.29 ',
              }, {
                name: '平川区',
                value: '13.92 ',
              }, {
                name: '靖远县',
                value: '10.46 ',
              }, {
                name: '景泰县',
                value: '7.84 ',
              }, {
                name: '安定区',
                value: '4.18 ',
              }, {
                name: '陇西县',
                value: '7.39 ',
              }, {
                name: '渭源县',
                value: '3.98 ',
              }, {
                name: '临洮县',
                value: '8.48 ',
              }, {
                name: '临夏市',
                value: '5.76 ',
              }, {
                name: '永靖县',
                value: '2.77 ',
              }, {
                name: '东乡族自治',
                value: '1.74 ',
              }, {
                name: '积石山保安',
                value: '1.79 ',
              }, {
                name: '城东区',
                value: '12.27 ',
              }, {
                name: '城中区',
                value: '14.09 ',
              }, {
                name: '城西区',
                value: '18.47 ',
              }, {
                name: '城北区',
                value: '17.79 ',
              }, {
                name: '大通回族土',
                value: '18.46 ',
              }, {
                name: '湟中县',
                value: '8.83 ',
              }, {
                name: '湟源县',
                value: '2.62 ',
              }, {
                name: '乐都区',
                value: '4.54 ',
              }, {
                name: '平安区',
                value: '2.54 ',
              }, {
                name: '民和回族土',
                value: '8.40 ',
              }, {
                name: '互助土族自',
                value: '10.64 ',
              }, {
                name: '化隆回族自',
                value: '3.74 ',
              }, {
                name: '循化撒拉族',
                value: '2.85 ',
              }, {
                name: '海晏县',
                value: '2.57 ',
              }, {
                name: '同仁县',
                value: '3.25 ',
              }, {
                name: '尖扎县',
                value: '6.69 ',
              }, {
                name: '共和县',
                value: '7.78 ',
              }, {
                name: '贵德县',
                value: '1.81 ',
              }, {
                name: '贵南县',
                value: '1.93 ',
              }],
              2001: [{
                name: '城关区',
                value: '137.56 ',
              }, {
                name: '七里河区',
                value: '50.07 ',
              }, {
                name: '西固区',
                value: '87.96 ',
              }, {
                name: '安宁区',
                value: '13.36 ',
              }, {
                name: '红古区',
                value: '17.47 ',
              }, {
                name: '永登县',
                value: '30.26 ',
              }, {
                name: '皋兰县',
                value: '9.82 ',
              }, {
                name: '榆中县',
                value: '13.33 ',
              }, {
                name: '白银区',
                value: '40.65 ',
              }, {
                name: '平川区',
                value: '14.50 ',
              }, {
                name: '靖远县',
                value: '14.26 ',
              }, {
                name: '景泰县',
                value: '11.54 ',
              }, {
                name: '安定区',
                value: '4.18 ',
              }, {
                name: '陇西县',
                value: '10.89 ',
              }, {
                name: '渭源县',
                value: '5.45 ',
              }, {
                name: '临洮县',
                value: '11.60 ',
              }, {
                name: '临夏市',
                value: '8.73 ',
              }, {
                name: '永靖县',
                value: '4.95 ',
              }, {
                name: '东乡族自治',
                value: '2.59 ',
              }, {
                name: '积石山保安',
                value: '2.57 ',
              }, {
                name: '城东区',
                value: '14.33 ',
              }, {
                name: '城中区',
                value: '16.03 ',
              }, {
                name: '城西区',
                value: '21.54 ',
              }, {
                name: '城北区',
                value: '21.14 ',
              }, {
                name: '大通回族土',
                value: '25.44 ',
              }, {
                name: '湟中县',
                value: '20.46 ',
              }, {
                name: '湟源县',
                value: '4.05 ',
              }, {
                name: '乐都区',
                value: '5.09 ',
              }, {
                name: '平安区',
                value: '2.90 ',
              }, {
                name: '民和回族土',
                value: '11.69 ',
              }, {
                name: '互助土族自',
                value: '16.41 ',
              }, {
                name: '化隆回族自',
                value: '6.97 ',
              }, {
                name: '循化撒拉族',
                value: '4.19 ',
              }, {
                name: '海晏县',
                value: '5.25 ',
              }, {
                name: '同仁县',
                value: '4.60 ',
              }, {
                name: '尖扎县',
                value: '7.87 ',
              }, {
                name: '共和县',
                value: '10.30 ',
              }, {
                name: '贵德县',
                value: '3.98 ',
              }, {
                name: '贵南县',
                value: '2.86 ',
              }],
              2002: [{
                name: '城关区',
                value: '152.46 ',
              }, {
                name: '七里河区',
                value: '54.69 ',
              }, {
                name: '西固区',
                value: '94.08 ',
              }, {
                name: '安宁区',
                value: '14.81 ',
              }, {
                name: '红古区',
                value: '19.69 ',
              }, {
                name: '永登县',
                value: '37.04 ',
              }, {
                name: '皋兰县',
                value: '12.48 ',
              }, {
                name: '榆中县',
                value: '18.50 ',
              }, {
                name: '白银区',
                value: '44.90 ',
              }, {
                name: '平川区',
                value: '16.71 ',
              }, {
                name: '靖远县',
                value: '18.06 ',
              }, {
                name: '景泰县',
                value: '15.25 ',
              }, {
                name: '安定区',
                value: '8.36 ',
              }, {
                name: '陇西县',
                value: '14.39 ',
              }, {
                name: '渭源县',
                value: '6.92 ',
              }, {
                name: '临洮县',
                value: '14.72 ',
              }, {
                name: '临夏市',
                value: '11.69 ',
              }, {
                name: '永靖县',
                value: '7.12 ',
              }, {
                name: '东乡族自治',
                value: '3.43 ',
              }, {
                name: '积石山保安',
                value: '3.36 ',
              }, {
                name: '城东区',
                value: '16.38 ',
              }, {
                name: '城中区',
                value: '18.63 ',
              }, {
                name: '城西区',
                value: '25.02 ',
              }, {
                name: '城北区',
                value: '22.26 ',
              }, {
                name: '大通回族土',
                value: '32.41 ',
              }, {
                name: '湟中县',
                value: '32.10 ',
              }, {
                name: '湟源县',
                value: '5.48 ',
              }, {
                name: '乐都区',
                value: '9.71 ',
              }, {
                name: '平安区',
                value: '6.96 ',
              }, {
                name: '民和回族土',
                value: '14.98 ',
              }, {
                name: '互助土族自',
                value: '22.18 ',
              }, {
                name: '化隆回族自',
                value: '10.20 ',
              }, {
                name: '循化撒拉族',
                value: '5.54 ',
              }, {
                name: '海晏县',
                value: '7.93 ',
              }, {
                name: '同仁县',
                value: '5.94 ',
              }, {
                name: '尖扎县',
                value: '9.04 ',
              }, {
                name: '共和县',
                value: '12.81 ',
              }, {
                name: '贵德县',
                value: '6.14 ',
              }, {
                name: '贵南县',
                value: '3.78 ',
              }],
              2003: [{
                name: '城关区',
                value: '170.98 ',
              }, {
                name: '七里河区',
                value: '61.62 ',
              }, {
                name: '西固区',
                value: '108.29 ',
              }, {
                name: '安宁区',
                value: '17.23 ',
              }, {
                name: '红古区',
                value: '22.60 ',
              }, {
                name: '永登县',
                value: '43.83 ',
              }, {
                name: '皋兰县',
                value: '15.13 ',
              }, {
                name: '榆中县',
                value: '23.68 ',
              }, {
                name: '白银区',
                value: '48.74 ',
              }, {
                name: '平川区',
                value: '20.02 ',
              }, {
                name: '靖远县',
                value: '21.86 ',
              }, {
                name: '景泰县',
                value: '18.95 ',
              }, {
                name: '安定区',
                value: '12.54 ',
              }, {
                name: '陇西县',
                value: '17.89 ',
              }, {
                name: '渭源县',
                value: '8.39 ',
              }, {
                name: '临洮县',
                value: '17.84 ',
              }, {
                name: '临夏市',
                value: '14.66 ',
              }, {
                name: '永靖县',
                value: '9.30 ',
              }, {
                name: '东乡族自治',
                value: '4.28 ',
              }, {
                name: '积石山保安',
                value: '4.14 ',
              }, {
                name: '城东区',
                value: '21.65 ',
              }, {
                name: '城中区',
                value: '30.25 ',
              }, {
                name: '城西区',
                value: '20.09 ',
              }, {
                name: '城北区',
                value: '23.25 ',
              }, {
                name: '大通回族土',
                value: '39.39 ',
              }, {
                name: '湟中县',
                value: '43.74 ',
              }, {
                name: '湟源县',
                value: '6.91 ',
              }, {
                name: '乐都区',
                value: '11.16 ',
              }, {
                name: '平安区',
                value: '8.04 ',
              }, {
                name: '民和回族土',
                value: '18.27 ',
              }, {
                name: '互助土族自',
                value: '27.95 ',
              }, {
                name: '化隆回族自',
                value: '13.43 ',
              }, {
                name: '循化撒拉族',
                value: '6.88 ',
              }, {
                name: '海晏县',
                value: '10.61 ',
              }, {
                name: '同仁县',
                value: '7.28 ',
              }, {
                name: '尖扎县',
                value: '10.21 ',
              }, {
                name: '共和县',
                value: '15.33 ',
              }, {
                name: '贵德县',
                value: '8.31 ',
              }, {
                name: '贵南县',
                value: '4.70 ',
              }],
              2004: [{
                name: '城关区',
                value: '191.48 ',
              }, {
                name: '七里河区',
                value: '73.65 ',
              }, {
                name: '西固区',
                value: '133.51 ',
              }, {
                name: '安宁区',
                value: '20.17 ',
              }, {
                name: '红古区',
                value: '25.79 ',
              }, {
                name: '永登县',
                value: '50.61 ',
              }, {
                name: '皋兰县',
                value: '17.78 ',
              }, {
                name: '榆中县',
                value: '28.85 ',
              }, {
                name: '白银区',
                value: '59.12 ',
              }, {
                name: '平川区',
                value: '23.13 ',
              }, {
                name: '靖远县',
                value: '25.66 ',
              }, {
                name: '景泰县',
                value: '22.66 ',
              }, {
                name: '安定区',
                value: '16.72 ',
              }, {
                name: '陇西县',
                value: '21.39 ',
              }, {
                name: '渭源县',
                value: '9.86 ',
              }, {
                name: '临洮县',
                value: '20.96 ',
              }, {
                name: '临夏市',
                value: '17.63 ',
              }, {
                name: '永靖县',
                value: '11.48 ',
              }, {
                name: '东乡族自治',
                value: '5.12 ',
              }, {
                name: '积石山保安',
                value: '4.92 ',
              }, {
                name: '城东区',
                value: '22.53 ',
              }, {
                name: '城中区',
                value: '24.80 ',
              }, {
                name: '城西区',
                value: '34.64 ',
              }, {
                name: '城北区',
                value: '29.94 ',
              }, {
                name: '大通回族土',
                value: '46.37 ',
              }, {
                name: '湟中县',
                value: '55.37 ',
              }, {
                name: '湟源县',
                value: '8.34 ',
              }, {
                name: '乐都区',
                value: '12.56 ',
              }, {
                name: '平安区',
                value: '9.16 ',
              }, {
                name: '民和回族土',
                value: '21.56 ',
              }, {
                name: '互助土族自',
                value: '33.73 ',
              }, {
                name: '化隆回族自',
                value: '16.66 ',
              }, {
                name: '循化撒拉族',
                value: '8.23 ',
              }, {
                name: '海晏县',
                value: '13.28 ',
              }, {
                name: '同仁县',
                value: '8.63 ',
              }, {
                name: '尖扎县',
                value: '11.38 ',
              }, {
                name: '共和县',
                value: '17.84 ',
              }, {
                name: '贵德县',
                value: '10.48 ',
              }, {
                name: '贵南县',
                value: '5.62 ',
              }],
              2005: [{
                name: '城关区',
                value: '200.73 ',
              }, {
                name: '七里河区',
                value: '97.17 ',
              }, {
                name: '西固区',
                value: '151.11 ',
              }, {
                name: '安宁区',
                value: '24.56 ',
              }, {
                name: '红古区',
                value: '29.47 ',
              }, {
                name: '永登县',
                value: '57.40 ',
              }, {
                name: '皋兰县',
                value: '20.43 ',
              }, {
                name: '榆中县',
                value: '34.03 ',
              }, {
                name: '白银区',
                value: '69.12 ',
              }, {
                name: '平川区',
                value: '25.40 ',
              }, {
                name: '靖远县',
                value: '29.46 ',
              }, {
                name: '景泰县',
                value: '26.36 ',
              }, {
                name: '安定区',
                value: '20.90 ',
              }, {
                name: '陇西县',
                value: '24.89 ',
              }, {
                name: '渭源县',
                value: '11.32 ',
              }, {
                name: '临洮县',
                value: '24.08 ',
              }, {
                name: '临夏市',
                value: '20.59 ',
              }, {
                name: '永靖县',
                value: '13.65 ',
              }, {
                name: '东乡族自治',
                value: '5.97 ',
              }, {
                name: '积石山保安',
                value: '5.70 ',
              }, {
                name: '城东区',
                value: '31.09 ',
              }, {
                name: '城中区',
                value: '36.98 ',
              }, {
                name: '城西区',
                value: '49.36 ',
              }, {
                name: '城北区',
                value: '47.17 ',
              }, {
                name: '大通回族土',
                value: '53.34 ',
              }, {
                name: '湟中县',
                value: '67.01 ',
              }, {
                name: '湟源县',
                value: '9.77 ',
              }, {
                name: '乐都区',
                value: '14.14 ',
              }, {
                name: '平安区',
                value: '11.31 ',
              }, {
                name: '民和回族土',
                value: '24.85 ',
              }, {
                name: '互助土族自',
                value: '39.50 ',
              }, {
                name: '化隆回族自',
                value: '19.89 ',
              }, {
                name: '循化撒拉族',
                value: '9.57 ',
              }, {
                name: '海晏县',
                value: '15.96 ',
              }, {
                name: '同仁县',
                value: '9.97 ',
              }, {
                name: '尖扎县',
                value: '12.56 ',
              }, {
                name: '共和县',
                value: '20.35 ',
              }, {
                name: '贵德县',
                value: '12.65 ',
              }, {
                name: '贵南县',
                value: '6.54 ',
              }],
              2006: [{
                name: '城关区',
                value: '226.69 ',
              }, {
                name: '七里河区',
                value: '109.84 ',
              }, {
                name: '西固区',
                value: '174.55 ',
              }, {
                name: '安宁区',
                value: '29.06 ',
              }, {
                name: '红古区',
                value: '33.25 ',
              }, {
                name: '永登县',
                value: '64.19 ',
              }, {
                name: '皋兰县',
                value: '23.09 ',
              }, {
                name: '榆中县',
                value: '39.20 ',
              }, {
                name: '白银区',
                value: '89.48 ',
              }, {
                name: '平川区',
                value: '26.67 ',
              }, {
                name: '靖远县',
                value: '33.27 ',
              }, {
                name: '景泰县',
                value: '30.07 ',
              }, {
                name: '安定区',
                value: '25.09 ',
              }, {
                name: '陇西县',
                value: '28.40 ',
              }, {
                name: '渭源县',
                value: '12.79 ',
              }, {
                name: '临洮县',
                value: '27.20 ',
              }, {
                name: '临夏市',
                value: '23.56 ',
              }, {
                name: '永靖县',
                value: '15.83 ',
              }, {
                name: '东乡族自治',
                value: '6.81 ',
              }, {
                name: '积石山保安',
                value: '6.48 ',
              }, {
                name: '城东区',
                value: '35.91 ',
              }, {
                name: '城中区',
                value: '41.77 ',
              }, {
                name: '城西区',
                value: '54.47 ',
              }, {
                name: '城北区',
                value: '56.31 ',
              }, {
                name: '大通回族土',
                value: '60.32 ',
              }, {
                name: '湟中县',
                value: '78.64 ',
              }, {
                name: '湟源县',
                value: '11.20 ',
              }, {
                name: '乐都区',
                value: '16.37 ',
              }, {
                name: '平安区',
                value: '13.23 ',
              }, {
                name: '民和回族土',
                value: '28.14 ',
              }, {
                name: '互助土族自',
                value: '45.27 ',
              }, {
                name: '化隆回族自',
                value: '23.12 ',
              }, {
                name: '循化撒拉族',
                value: '10.91 ',
              }, {
                name: '海晏县',
                value: '18.64 ',
              }, {
                name: '同仁县',
                value: '11.31 ',
              }, {
                name: '尖扎县',
                value: '13.73 ',
              }, {
                name: '共和县',
                value: '22.87 ',
              }, {
                name: '贵德县',
                value: '14.81 ',
              }, {
                name: '贵南县',
                value: '7.47 ',
              }],
              2007: [{
                name: '城关区',
                value: '262.00 ',
              }, {
                name: '七里河区',
                value: '132.38 ',
              }, {
                name: '西固区',
                value: '157.63 ',
              }, {
                name: '安宁区',
                value: '35.81 ',
              }, {
                name: '红古区',
                value: '40.71 ',
              }, {
                name: '永登县',
                value: '70.97 ',
              }, {
                name: '皋兰县',
                value: '25.74 ',
              }, {
                name: '榆中县',
                value: '44.38 ',
              }, {
                name: '白银区',
                value: '100.61 ',
              }, {
                name: '平川区',
                value: '36.35 ',
              }, {
                name: '靖远县',
                value: '37.07 ',
              }, {
                name: '景泰县',
                value: '33.77 ',
              }, {
                name: '安定区',
                value: '29.27 ',
              }, {
                name: '陇西县',
                value: '31.90 ',
              }, {
                name: '渭源县',
                value: '14.26 ',
              }, {
                name: '临洮县',
                value: '30.32 ',
              }, {
                name: '临夏市',
                value: '26.52 ',
              }, {
                name: '永靖县',
                value: '18.00 ',
              }, {
                name: '东乡族自治',
                value: '7.65 ',
              }, {
                name: '积石山保安',
                value: '7.26 ',
              }, {
                name: '城东区',
                value: '44.62 ',
              }, {
                name: '城中区',
                value: '46.08 ',
              }, {
                name: '城西区',
                value: '63.35 ',
              }, {
                name: '城北区',
                value: '76.27 ',
              }, {
                name: '大通回族土',
                value: '67.30 ',
              }, {
                name: '湟中县',
                value: '90.28 ',
              }, {
                name: '湟源县',
                value: '12.63 ',
              }, {
                name: '乐都区',
                value: '19.99 ',
              }, {
                name: '平安区',
                value: '15.92 ',
              }, {
                name: '民和回族土',
                value: '31.43 ',
              }, {
                name: '互助土族自',
                value: '51.05 ',
              }, {
                name: '化隆回族自',
                value: '26.36 ',
              }, {
                name: '循化撒拉族',
                value: '12.26 ',
              }, {
                name: '海晏县',
                value: '21.32 ',
              }, {
                name: '同仁县',
                value: '12.66 ',
              }, {
                name: '尖扎县',
                value: '14.90 ',
              }, {
                name: '共和县',
                value: '25.38 ',
              }, {
                name: '贵德县',
                value: '16.98 ',
              }, {
                name: '贵南县',
                value: '8.39 ',
              }],
              2008: [{
                name: '城关区',
                value: '296.51 ',
              }, {
                name: '七里河区',
                value: '151.92 ',
              }, {
                name: '西固区',
                value: '179.10 ',
              }, {
                name: '安宁区',
                value: '50.01 ',
              }, {
                name: '红古区',
                value: '48.94 ',
              }, {
                name: '永登县',
                value: '77.76 ',
              }, {
                name: '皋兰县',
                value: '28.39 ',
              }, {
                name: '榆中县',
                value: '49.55 ',
              }, {
                name: '白银区',
                value: '115.93 ',
              }, {
                name: '平川区',
                value: '46.39 ',
              }, {
                name: '靖远县',
                value: '40.87 ',
              }, {
                name: '景泰县',
                value: '37.48 ',
              }, {
                name: '安定区',
                value: '33.45 ',
              }, {
                name: '陇西县',
                value: '35.40 ',
              }, {
                name: '渭源县',
                value: '15.73 ',
              }, {
                name: '临洮县',
                value: '33.44 ',
              }, {
                name: '临夏市',
                value: '29.49 ',
              }, {
                name: '永靖县',
                value: '20.18 ',
              }, {
                name: '东乡族自治',
                value: '8.50 ',
              }, {
                name: '积石山保安',
                value: '8.04 ',
              }, {
                name: '城东区',
                value: '58.59 ',
              }, {
                name: '城中区',
                value: '59.28 ',
              }, {
                name: '城西区',
                value: '74.03 ',
              }, {
                name: '城北区',
                value: '97.61 ',
              }, {
                name: '大通回族土',
                value: '74.27 ',
              }, {
                name: '湟中县',
                value: '101.91 ',
              }, {
                name: '湟源县',
                value: '14.06 ',
              }, {
                name: '乐都区',
                value: '24.23 ',
              }, {
                name: '平安区',
                value: '19.27 ',
              }, {
                name: '民和回族土',
                value: '34.72 ',
              }, {
                name: '互助土族自',
                value: '56.82 ',
              }, {
                name: '化隆回族自',
                value: '29.59 ',
              }, {
                name: '循化撒拉族',
                value: '13.60 ',
              }, {
                name: '海晏县',
                value: '24.00 ',
              }, {
                name: '同仁县',
                value: '14.00 ',
              }, {
                name: '尖扎县',
                value: '16.07 ',
              }, {
                name: '共和县',
                value: '27.90 ',
              }, {
                name: '贵德县',
                value: '19.15 ',
              }, {
                name: '贵南县',
                value: '9.31 ',
              }],
              2009: [{
                name: '城关区',
                value: '329.13 ',
              }, {
                name: '七里河区',
                value: '182.78 ',
              }, {
                name: '西固区',
                value: '178.02 ',
              }, {
                name: '安宁区',
                value: '59.54 ',
              }, {
                name: '红古区',
                value: '55.42 ',
              }, {
                name: '永登县',
                value: '84.54 ',
              }, {
                name: '皋兰县',
                value: '31.05 ',
              }, {
                name: '榆中县',
                value: '54.73 ',
              }, {
                name: '白银区',
                value: '127.95 ',
              }, {
                name: '平川区',
                value: '47.93 ',
              }, {
                name: '靖远县',
                value: '44.67 ',
              }, {
                name: '景泰县',
                value: '41.18 ',
              }, {
                name: '安定区',
                value: '37.63 ',
              }, {
                name: '陇西县',
                value: '38.90 ',
              }, {
                name: '渭源县',
                value: '17.20 ',
              }, {
                name: '临洮县',
                value: '36.56 ',
              }, {
                name: '临夏市',
                value: '32.46 ',
              }, {
                name: '永靖县',
                value: '22.35 ',
              }, {
                name: '东乡族自治',
                value: '9.34 ',
              }, {
                name: '积石山保安',
                value: '8.82 ',
              }, {
                name: '城东区',
                value: '85.06 ',
              }, {
                name: '城中区',
                value: '72.15 ',
              }, {
                name: '城西区',
                value: '94.28 ',
              }, {
                name: '城北区',
                value: '103.46 ',
              }, {
                name: '大通回族土',
                value: '81.25 ',
              }, {
                name: '湟中县',
                value: '113.55 ',
              }, {
                name: '湟源县',
                value: '15.49 ',
              }, {
                name: '乐都区',
                value: '27.35 ',
              }, {
                name: '平安区',
                value: '21.03 ',
              }, {
                name: '民和回族土',
                value: '38.01 ',
              }, {
                name: '互助土族自',
                value: '62.59 ',
              }, {
                name: '化隆回族自',
                value: '32.82 ',
              }, {
                name: '循化撒拉族',
                value: '14.95 ',
              }, {
                name: '海晏县',
                value: '26.68 ',
              }, {
                name: '同仁县',
                value: '15.34 ',
              }, {
                name: '尖扎县',
                value: '17.25 ',
              }, {
                name: '共和县',
                value: '30.41 ',
              }, {
                name: '贵德县',
                value: '21.31 ',
              }, {
                name: '贵南县',
                value: '10.23 ',
              }],
              2010: [{
                name: '城关区',
                value: '376.88 ',
              }, {
                name: '七里河区',
                value: '205.57 ',
              }, {
                name: '西固区',
                value: '213.49 ',
              }, {
                name: '安宁区',
                value: '70.95 ',
              }, {
                name: '红古区',
                value: '64.74 ',
              }, {
                name: '永登县',
                value: '91.33 ',
              }, {
                name: '皋兰县',
                value: '33.70 ',
              }, {
                name: '榆中县',
                value: '59.90 ',
              }, {
                name: '白银区',
                value: '148.12 ',
              }, {
                name: '平川区',
                value: '56.46 ',
              }, {
                name: '靖远县',
                value: '48.47 ',
              }, {
                name: '景泰县',
                value: '44.89 ',
              }, {
                name: '安定区',
                value: '41.81 ',
              }, {
                name: '陇西县',
                value: '42.40 ',
              }, {
                name: '渭源县',
                value: '18.67 ',
              }, {
                name: '临洮县',
                value: '39.68 ',
              }, {
                name: '临夏市',
                value: '35.42 ',
              }, {
                name: '永靖县',
                value: '24.53 ',
              }, {
                name: '东乡族自治',
                value: '10.19 ',
              }, {
                name: '积石山保安',
                value: '9.61 ',
              }, {
                name: '城东区',
                value: '106.26 ',
              }, {
                name: '城中区',
                value: '90.48 ',
              }, {
                name: '城西区',
                value: '113.40 ',
              }, {
                name: '城北区',
                value: '130.27 ',
              }, {
                name: '大通回族土',
                value: '88.23 ',
              }, {
                name: '湟中县',
                value: '125.19 ',
              }, {
                name: '湟源县',
                value: '16.92 ',
              }, {
                name: '乐都区',
                value: '35.31 ',
              }, {
                name: '平安区',
                value: '25.70 ',
              }, {
                name: '民和回族土',
                value: '41.30 ',
              }, {
                name: '互助土族自',
                value: '68.36 ',
              }, {
                name: '化隆回族自',
                value: '36.05 ',
              }, {
                name: '循化撒拉族',
                value: '16.29 ',
              }, {
                name: '海晏县',
                value: '29.36 ',
              }, {
                name: '同仁县',
                value: '16.69 ',
              }, {
                name: '尖扎县',
                value: '18.42 ',
              }, {
                name: '共和县',
                value: '32.93 ',
              }, {
                name: '贵德县',
                value: '23.48 ',
              }, {
                name: '贵南县',
                value: '11.15 ',
              }],
              2011: [{
                name: '城关区',
                value: '450.57 ',
              }, {
                name: '七里河区',
                value: '244.42 ',
              }, {
                name: '西固区',
                value: '256.00 ',
              }, {
                name: '安宁区',
                value: '88.16 ',
              }, {
                name: '红古区',
                value: '80.33 ',
              }, {
                name: '永登县',
                value: '98.12 ',
              }, {
                name: '皋兰县',
                value: '36.35 ',
              }, {
                name: '榆中县',
                value: '65.08 ',
              }, {
                name: '白银区',
                value: '180.29 ',
              }, {
                name: '平川区',
                value: '65.18 ',
              }, {
                name: '靖远县',
                value: '52.27 ',
              }, {
                name: '景泰县',
                value: '48.59 ',
              }, {
                name: '安定区',
                value: '45.99 ',
              }, {
                name: '陇西县',
                value: '45.90 ',
              }, {
                name: '渭源县',
                value: '20.14 ',
              }, {
                name: '临洮县',
                value: '42.80 ',
              }, {
                name: '临夏市',
                value: '38.39 ',
              }, {
                name: '永靖县',
                value: '26.70 ',
              }, {
                name: '东乡族自治',
                value: '11.03 ',
              }, {
                name: '积石山保安',
                value: '10.39 ',
              }, {
                name: '城东区',
                value: '129.55 ',
              }, {
                name: '城中区',
                value: '108.43 ',
              }, {
                name: '城西区',
                value: '135.58 ',
              }, {
                name: '城北区',
                value: '159.07 ',
              }, {
                name: '大通回族土',
                value: '95.20 ',
              }, {
                name: '湟中县',
                value: '136.82 ',
              }, {
                name: '湟源县',
                value: '18.35 ',
              }, {
                name: '乐都区',
                value: '47.36 ',
              }, {
                name: '平安区',
                value: '33.53 ',
              }, {
                name: '民和回族土',
                value: '44.59 ',
              }, {
                name: '互助土族自',
                value: '74.14 ',
              }, {
                name: '化隆回族自',
                value: '39.28 ',
              }, {
                name: '循化撒拉族',
                value: '17.64 ',
              }, {
                name: '海晏县',
                value: '32.03 ',
              }, {
                name: '同仁县',
                value: '18.03 ',
              }, {
                name: '尖扎县',
                value: '19.59 ',
              }, {
                name: '共和县',
                value: '35.44 ',
              }, {
                name: '贵德县',
                value: '25.65 ',
              }, {
                name: '贵南县',
                value: '12.08 ',
              }],
              2012: [{
                name: '城关区',
                value: '525.20 ',
              }, {
                name: '七里河区',
                value: '319.11 ',
              }, {
                name: '西固区',
                value: '315.12 ',
              }, {
                name: '安宁区',
                value: '94.59 ',
              }, {
                name: '红古区',
                value: '89.53 ',
              }, {
                name: '永登县',
                value: '104.90 ',
              }, {
                name: '皋兰县',
                value: '39.00 ',
              }, {
                name: '榆中县',
                value: '70.25 ',
              }, {
                name: '白银区',
                value: '211.90 ',
              }, {
                name: '平川区',
                value: '73.79 ',
              }, {
                name: '靖远县',
                value: '56.07 ',
              }, {
                name: '景泰县',
                value: '52.30 ',
              }, {
                name: '安定区',
                value: '50.17 ',
              }, {
                name: '陇西县',
                value: '49.40 ',
              }, {
                name: '渭源县',
                value: '21.61 ',
              }, {
                name: '临洮县',
                value: '45.92 ',
              }, {
                name: '临夏市',
                value: '41.35 ',
              }, {
                name: '永靖县',
                value: '28.88 ',
              }, {
                name: '东乡族自治',
                value: '11.88 ',
              }, {
                name: '积石山保安',
                value: '11.17 ',
              }, {
                name: '城东区',
                value: '141.04 ',
              }, {
                name: '城中区',
                value: '127.76 ',
              }, {
                name: '城西区',
                value: '156.40 ',
              }, {
                name: '城北区',
                value: '167.70 ',
              }, {
                name: '大通回族土',
                value: '102.18 ',
              }, {
                name: '湟中县',
                value: '148.46 ',
              }, {
                name: '湟源县',
                value: '19.78 ',
              }, {
                name: '乐都区',
                value: '55.01 ',
              }, {
                name: '平安区',
                value: '41.18 ',
              }, {
                name: '民和回族土',
                value: '47.88 ',
              }, {
                name: '互助土族自',
                value: '79.91 ',
              }, {
                name: '化隆回族自',
                value: '42.51 ',
              }, {
                name: '循化撒拉族',
                value: '18.98 ',
              }, {
                name: '海晏县',
                value: '34.71 ',
              }, {
                name: '同仁县',
                value: '19.37 ',
              }, {
                name: '尖扎县',
                value: '20.77 ',
              }, {
                name: '共和县',
                value: '37.95 ',
              }, {
                name: '贵德县',
                value: '27.82 ',
              }, {
                name: '贵南县',
                value: '13.00 ',
              }],
              2013: [{
                name: '城关区',
                value: '605.74 ',
              }, {
                name: '七里河区',
                value: '340.11 ',
              }, {
                name: '西固区',
                value: '314.85 ',
              }, {
                name: '安宁区',
                value: '130.44 ',
              }, {
                name: '红古区',
                value: '101.66 ',
              }, {
                name: '永登县',
                value: '111.69 ',
              }, {
                name: '皋兰县',
                value: '41.66 ',
              }, {
                name: '榆中县',
                value: '75.43 ',
              }, {
                name: '白银区',
                value: '223.33 ',
              }, {
                name: '平川区',
                value: '71.62 ',
              }, {
                name: '靖远县',
                value: '59.87 ',
              }, {
                name: '景泰县',
                value: '56.00 ',
              }, {
                name: '安定区',
                value: '54.35 ',
              }, {
                name: '陇西县',
                value: '52.90 ',
              }, {
                name: '渭源县',
                value: '23.07 ',
              }, {
                name: '临洮县',
                value: '49.04 ',
              }, {
                name: '临夏市',
                value: '44.32 ',
              }, {
                name: '永靖县',
                value: '31.06 ',
              }, {
                name: '东乡族自治',
                value: '12.72 ',
              }, {
                name: '积石山保安',
                value: '11.95 ',
              }, {
                name: '城东区',
                value: '166.52 ',
              }, {
                name: '城中区',
                value: '150.34 ',
              }, {
                name: '城西区',
                value: '178.03 ',
              }, {
                name: '城北区',
                value: '193.18 ',
              }, {
                name: '大通回族土',
                value: '109.16 ',
              }, {
                name: '湟中县',
                value: '160.09 ',
              }, {
                name: '湟源县',
                value: '21.21 ',
              }, {
                name: '乐都区',
                value: '51.17 ',
              }, {
                name: '平安区',
                value: '68.09 ',
              }, {
                name: '民和回族土',
                value: '51.17 ',
              }, {
                name: '互助土族自',
                value: '85.68 ',
              }, {
                name: '化隆回族自',
                value: '45.74 ',
              }, {
                name: '循化撒拉族',
                value: '20.33 ',
              }, {
                name: '海晏县',
                value: '37.39 ',
              }, {
                name: '同仁县',
                value: '20.72 ',
              }, {
                name: '尖扎县',
                value: '21.94 ',
              }, {
                name: '共和县',
                value: '40.47 ',
              }, {
                name: '贵德县',
                value: '29.98 ',
              }, {
                name: '贵南县',
                value: '13.92 ',
              }],
              2014: [{
                name: '城关区',
                value: '705.72 ',
              }, {
                name: '七里河区',
                value: '384.90 ',
              }, {
                name: '西固区',
                value: '311.90 ',
              }, {
                name: '安宁区',
                value: '144.33 ',
              }, {
                name: '红古区',
                value: '107.17 ',
              }, {
                name: '永登县',
                value: '103.70 ',
              }, {
                name: '皋兰县',
                value: '44.28 ',
              }, {
                name: '榆中县',
                value: '97.16 ',
              }, {
                name: '白银区',
                value: '197.77 ',
              }, {
                name: '平川区',
                value: '75.18 ',
              }, {
                name: '靖远县',
                value: '63.42 ',
              }, {
                name: '景泰县',
                value: '54.52 ',
              }, {
                name: '安定区',
                value: '65.78 ',
              }, {
                name: '陇西县',
                value: '57.60 ',
              }, {
                name: '渭源县',
                value: '26.35 ',
              }, {
                name: '临洮县',
                value: '56.51 ',
              }, {
                name: '临夏市',
                value: '56.80 ',
              }, {
                name: '永靖县',
                value: '36.19 ',
              }, {
                name: '东乡族自治',
                value: '15.09 ',
              }, {
                name: '积石山保安',
                value: '13.91 ',
              }, {
                name: '城东区',
                value: '189.87 ',
              }, {
                name: '城中区',
                value: '180.81 ',
              }, {
                name: '城西区',
                value: '210.42 ',
              }, {
                name: '城北区',
                value: '193.99 ',
              }, {
                name: '大通回族土',
                value: '105.98 ',
              }, {
                name: '湟中县',
                value: '160.89 ',
              }, {
                name: '湟源县',
                value: '23.83 ',
              }, {
                name: '乐都区',
                value: '60.57 ',
              }, {
                name: '平安区',
                value: '73.39 ',
              }, {
                name: '民和回族土',
                value: '60.57 ',
              }, {
                name: '互助土族自',
                value: '96.62 ',
              }, {
                name: '化隆回族自',
                value: '48.12 ',
              }, {
                name: '循化撒拉族',
                value: '24.32 ',
              }, {
                name: '海晏县',
                value: '24.02 ',
              }, {
                name: '同仁县',
                value: '22.03 ',
              }, {
                name: '尖扎县',
                value: '18.66 ',
              }, {
                name: '共和县',
                value: '48.53 ',
              }, {
                name: '贵德县',
                value: '28.77 ',
              }, {
                name: '贵南县',
                value: '14.03 ',
              }],
              2015: [{
                name: '城关区',
                value: '775.19 ',
              }, {
                name: '七里河区',
                value: '403.60 ',
              }, {
                name: '西固区',
                value: '297.81 ',
              }, {
                name: '安宁区',
                value: '155.15 ',
              }, {
                name: '红古区',
                value: '109.80 ',
              }, {
                name: '永登县',
                value: '96.56 ',
              }, {
                name: '皋兰县',
                value: '45.20 ',
              }, {
                name: '榆中县',
                value: '88.16 ',
              }, {
                name: '白银区',
                value: '191.79 ',
              }, {
                name: '平川区',
                value: '72.29 ',
              }, {
                name: '靖远县',
                value: '63.39 ',
              }, {
                name: '景泰县',
                value: '50.37 ',
              }, {
                name: '安定区',
                value: '70.21 ',
              }, {
                name: '陇西县',
                value: '57.44 ',
              }, {
                name: '渭源县',
                value: '27.62 ',
              }, {
                name: '临洮县',
                value: '58.91 ',
              }, {
                name: '临夏市',
                value: '61.43 ',
              }, {
                name: '永靖县',
                value: '35.62 ',
              }, {
                name: '东乡族自治',
                value: '16.27 ',
              }, {
                name: '积石山保安',
                value: '13.31 ',
              }, {
                name: '城东区',
                value: '222.30 ',
              }, {
                name: '城中区',
                value: '200.20 ',
              }, {
                name: '城西区',
                value: '236.14 ',
              }, {
                name: '城北区',
                value: '200.62 ',
              }, {
                name: '大通回族土',
                value: '97.84 ',
              }, {
                name: '湟中县',
                value: '150.70 ',
              }, {
                name: '湟源县',
                value: '23.84 ',
              }, {
                name: '乐都区',
                value: '85.27 ',
              }, {
                name: '平安区',
                value: '68.16 ',
              }, {
                name: '民和回族土',
                value: '62.54 ',
              }, {
                name: '互助土族自',
                value: '98.09 ',
              }, {
                name: '化隆回族自',
                value: '50.78 ',
              }, {
                name: '循化撒拉族',
                value: '26.57 ',
              }, {
                name: '海晏县',
                value: '22.25 ',
              }, {
                name: '同仁县',
                value: '25.27 ',
              }, {
                name: '尖扎县',
                value: '20.74 ',
              }, {
                name: '共和县',
                value: '60.80 ',
              }, {
                name: '贵德县',
                value: '29.36 ',
              }, {
                name: '贵南县',
                value: '14.60 ',
              }],
            },
  },
  // 边境城市带
  {
    city_name: ['康马县', '定结县', '岗巴县', '定日县', '仲巴县', '亚东县', '吉隆县', '聂拉木县', '萨嘎县', '普兰县',
      '札达县', '噶尔县', '日土县', '米林县', '墨脱县', '察隅县', '朗县', '洛扎县', '隆子县', '错那县', '浪卡子县'],
    economy_data:
            {
              2000: [{
                name: '康马县',
                value: '0.4492',
              }, {
                name: '定结县',
                value: '0.482',
              }, {
                name: '岗巴县',
                value: '0.329',
              }, {
                name: '定日县',
                value: '0.94070 ',
              }, {
                name: '仲巴县',
                value: '0.60370 ',
              }, {
                name: '亚东县',
                value: '0.68130 ',
              }, {
                name: '吉隆县',
                value: '0.48410 ',
              }, {
                name: '聂拉木县',
                value: '0.69380 ',
              }, {
                name: '萨嘎县',
                value: '0.38620 ',
              }, {
                name: '普兰县',
                value: '0.32470 ',
              }, {
                name: '札达县',
                value: '0.32490 ',
              }, {
                name: '噶尔县',
                value: '0.30380 ',
              }, {
                name: '日土县',
                value: '0.49300 ',
              }, {
                name: '米林县',
                value: '0.35970 ',
              }, {
                name: '墨脱县',
                value: '0.33710 ',
              }, {
                name: '察隅县',
                value: '0.85720 ',
              }, {
                name: '朗县',
                value: '0.57370 ',
              }, {
                name: '洛扎县',
                value: '0.16390 ',
              }, {
                name: '隆子县',
                value: '0.37080 ',
              }, {
                name: '错那县',
                value: '0.03560 ',
              }, {
                name: '浪卡子县',
                value: '0.3813',
              }],
              2001: [{
                name: '康马县',
                value: '0.61501',
              }, {
                name: '定结县',
                value: '0.61443',
              }, {
                name: '岗巴县',
                value: '0.43404',
              }, {
                name: '定日县',
                value: '1.34457 ',
              }, {
                name: '仲巴县',
                value: '0.92913 ',
              }, {
                name: '亚东县',
                value: '0.98709 ',
              }, {
                name: '吉隆县',
                value: '0.74566 ',
              }, {
                name: '聂拉木县',
                value: '0.97921 ',
              }, {
                name: '萨嘎县',
                value: '0.58125 ',
              }, {
                name: '普兰县',
                value: '0.45765 ',
              }, {
                name: '札达县',
                value: '0.44753 ',
              }, {
                name: '噶尔县',
                value: '0.45105 ',
              }, {
                name: '日土县',
                value: '0.64339 ',
              }, {
                name: '米林县',
                value: '1.10172 ',
              }, {
                name: '墨脱县',
                value: '0.59196 ',
              }, {
                name: '察隅县',
                value: '1.23405 ',
              }, {
                name: '朗县',
                value: '0.87012 ',
              }, {
                name: '洛扎县',
                value: '0.37791 ',
              }, {
                name: '隆子县',
                value: '0.83443 ',
              }, {
                name: '错那县',
                value: '0.29277 ',
              }, {
                name: '浪卡子县',
                value: '0.57632',
              }],
              2002: [{
                name: '康马县',
                value: '0.78082',
              }, {
                name: '定结县',
                value: '0.74686',
              }, {
                name: '岗巴县',
                value: '0.53908',
              }, {
                name: '定日县',
                value: '1.74843 ',
              }, {
                name: '仲巴县',
                value: '1.25457 ',
              }, {
                name: '亚东县',
                value: '1.29287 ',
              }, {
                name: '吉隆县',
                value: '1.00722 ',
              }, {
                name: '聂拉木县',
                value: '1.26461 ',
              }, {
                name: '萨嘎县',
                value: '0.77629 ',
              }, {
                name: '普兰县',
                value: '0.59059 ',
              }, {
                name: '札达县',
                value: '0.57017 ',
              }, {
                name: '噶尔县',
                value: '0.59831 ',
              }, {
                name: '日土县',
                value: '0.79379 ',
              }, {
                name: '米林县',
                value: '1.84374 ',
              }, {
                name: '墨脱县',
                value: '0.84682 ',
              }, {
                name: '察隅县',
                value: '1.61091 ',
              }, {
                name: '朗县',
                value: '1.16654 ',
              }, {
                name: '洛扎县',
                value: '0.59193 ',
              }, {
                name: '隆子县',
                value: '1.29805 ',
              }, {
                name: '错那县',
                value: '0.54993 ',
              }, {
                name: '浪卡子县',
                value: '0.77134',
              }],
              2003: [{
                name: '康马县',
                value: '0.94663',
              }, {
                name: '定结县',
                value: '0.87929',
              }, {
                name: '岗巴县',
                value: '0.64412',
              }, {
                name: '定日县',
                value: '2.15230 ',
              }, {
                name: '仲巴县',
                value: '1.58000 ',
              }, {
                name: '亚东县',
                value: '1.59866 ',
              }, {
                name: '吉隆县',
                value: '1.26878 ',
              }, {
                name: '聂拉木县',
                value: '1.55002 ',
              }, {
                name: '萨嘎县',
                value: '0.97134 ',
              }, {
                name: '普兰县',
                value: '0.72354 ',
              }, {
                name: '札达县',
                value: '0.69280 ',
              }, {
                name: '噶尔县',
                value: '0.74556 ',
              }, {
                name: '日土县',
                value: '0.94418 ',
              }, {
                name: '米林县',
                value: '2.58576 ',
              }, {
                name: '墨脱县',
                value: '1.10168 ',
              }, {
                name: '察隅县',
                value: '1.98776 ',
              }, {
                name: '朗县',
                value: '1.46296 ',
              }, {
                name: '洛扎县',
                value: '0.80594 ',
              }, {
                name: '隆子县',
                value: '1.76168 ',
              }, {
                name: '错那县',
                value: '0.80710 ',
              }, {
                name: '浪卡子县',
                value: '0.96636',
              }],
              2004: [{
                name: '康马县',
                value: '1.11244',
              }, {
                name: '定结县',
                value: '1.01172',
              }, {
                name: '岗巴县',
                value: '0.74916',
              }, {
                name: '定日县',
                value: '2.55617 ',
              }, {
                name: '仲巴县',
                value: '1.90543 ',
              }, {
                name: '亚东县',
                value: '1.90445 ',
              }, {
                name: '吉隆县',
                value: '1.53034 ',
              }, {
                name: '聂拉木县',
                value: '1.83543 ',
              }, {
                name: '萨嘎县',
                value: '1.16639 ',
              }, {
                name: '普兰县',
                value: '0.85649 ',
              }, {
                name: '札达县',
                value: '0.81543 ',
              }, {
                name: '噶尔县',
                value: '0.89281 ',
              }, {
                name: '日土县',
                value: '1.09457 ',
              }, {
                name: '米林县',
                value: '3.32778 ',
              }, {
                name: '墨脱县',
                value: '1.35654 ',
              }, {
                name: '察隅县',
                value: '2.36461 ',
              }, {
                name: '朗县',
                value: '1.75938 ',
              }, {
                name: '洛扎县',
                value: '1.01995 ',
              }, {
                name: '隆子县',
                value: '2.22531 ',
              }, {
                name: '错那县',
                value: '1.06427 ',
              }, {
                name: '浪卡子县',
                value: '1.16138',
              }],
              2005: [{
                name: '康马县',
                value: '1.27825',
              }, {
                name: '定结县',
                value: '1.14415',
              }, {
                name: '岗巴县',
                value: '0.8542',
              }, {
                name: '定日县',
                value: '2.96003 ',
              }, {
                name: '仲巴县',
                value: '2.23087 ',
              }, {
                name: '亚东县',
                value: '2.21023 ',
              }, {
                name: '吉隆县',
                value: '1.79190 ',
              }, {
                name: '聂拉木县',
                value: '2.12083 ',
              }, {
                name: '萨嘎县',
                value: '1.36143 ',
              }, {
                name: '普兰县',
                value: '0.98943 ',
              }, {
                name: '札达县',
                value: '0.93807 ',
              }, {
                name: '噶尔县',
                value: '1.04007 ',
              }, {
                name: '日土县',
                value: '1.24497 ',
              }, {
                name: '米林县',
                value: '4.06980 ',
              }, {
                name: '墨脱县',
                value: '1.61140 ',
              }, {
                name: '察隅县',
                value: '2.74147 ',
              }, {
                name: '朗县',
                value: '2.05580 ',
              }, {
                name: '洛扎县',
                value: '1.23397 ',
              }, {
                name: '隆子县',
                value: '2.68893 ',
              }, {
                name: '错那县',
                value: '1.32143 ',
              }, {
                name: '浪卡子县',
                value: '1.3564',
              }],
              2006: [{
                name: '康马县',
                value: '1.44406',
              }, {
                name: '定结县',
                value: '1.27658',
              }, {
                name: '岗巴县',
                value: '0.95924',
              }, {
                name: '定日县',
                value: '3.36390 ',
              }, {
                name: '仲巴县',
                value: '2.55630 ',
              }, {
                name: '亚东县',
                value: '2.51602 ',
              }, {
                name: '吉隆县',
                value: '2.05346 ',
              }, {
                name: '聂拉木县',
                value: '2.40624 ',
              }, {
                name: '萨嘎县',
                value: '1.55648 ',
              }, {
                name: '普兰县',
                value: '1.12238 ',
              }, {
                name: '札达县',
                value: '1.06070 ',
              }, {
                name: '噶尔县',
                value: '1.18732 ',
              }, {
                name: '日土县',
                value: '1.39536 ',
              }, {
                name: '米林县',
                value: '4.81182 ',
              }, {
                name: '墨脱县',
                value: '1.86626 ',
              }, {
                name: '察隅县',
                value: '3.11832 ',
              }, {
                name: '朗县',
                value: '2.35222 ',
              }, {
                name: '洛扎县',
                value: '1.44798 ',
              }, {
                name: '隆子县',
                value: '3.15256 ',
              }, {
                name: '错那县',
                value: '1.57860 ',
              }, {
                name: '浪卡子县',
                value: '1.55142',
              }],
              2007: [{
                name: '康马县',
                value: '1.60987',
              }, {
                name: '定结县',
                value: '1.40901',
              }, {
                name: '岗巴县',
                value: '1.06428',
              }, {
                name: '定日县',
                value: '3.76777 ',
              }, {
                name: '仲巴县',
                value: '2.88173 ',
              }, {
                name: '亚东县',
                value: '2.82181 ',
              }, {
                name: '吉隆县',
                value: '2.31502 ',
              }, {
                name: '聂拉木县',
                value: '2.69165 ',
              }, {
                name: '萨嘎县',
                value: '1.75153 ',
              }, {
                name: '普兰县',
                value: '1.25533 ',
              }, {
                name: '札达县',
                value: '1.18333 ',
              }, {
                name: '噶尔县',
                value: '1.33457 ',
              }, {
                name: '日土县',
                value: '1.54575 ',
              }, {
                name: '米林县',
                value: '5.55384 ',
              }, {
                name: '墨脱县',
                value: '2.12112 ',
              }, {
                name: '察隅县',
                value: '3.49517 ',
              }, {
                name: '朗县',
                value: '2.64864 ',
              }, {
                name: '洛扎县',
                value: '1.66199 ',
              }, {
                name: '隆子县',
                value: '3.61619 ',
              }, {
                name: '错那县',
                value: '1.83577 ',
              }, {
                name: '浪卡子县',
                value: '1.74644',
              }],
              2008: [{
                name: '康马县',
                value: '1.77568',
              }, {
                name: '定结县',
                value: '1.54144',
              }, {
                name: '岗巴县',
                value: '1.16932',
              }, {
                name: '定日县',
                value: '4.17163 ',
              }, {
                name: '仲巴县',
                value: '3.20717 ',
              }, {
                name: '亚东县',
                value: '3.12759 ',
              }, {
                name: '吉隆县',
                value: '2.57658 ',
              }, {
                name: '聂拉木县',
                value: '2.97705 ',
              }, {
                name: '萨嘎县',
                value: '1.94657 ',
              }, {
                name: '普兰县',
                value: '1.38827 ',
              }, {
                name: '札达县',
                value: '1.30597 ',
              }, {
                name: '噶尔县',
                value: '1.48183 ',
              }, {
                name: '日土县',
                value: '1.69615 ',
              }, {
                name: '米林县',
                value: '6.29586 ',
              }, {
                name: '墨脱县',
                value: '2.37598 ',
              }, {
                name: '察隅县',
                value: '3.87203 ',
              }, {
                name: '朗县',
                value: '2.94506 ',
              }, {
                name: '洛扎县',
                value: '1.87601 ',
              }, {
                name: '隆子县',
                value: '4.07981 ',
              }, {
                name: '错那县',
                value: '2.09293 ',
              }, {
                name: '浪卡子县',
                value: '1.94146',
              }],
              2009: [{
                name: '康马县',
                value: '1.94149',
              }, {
                name: '定结县',
                value: '1.67387',
              }, {
                name: '岗巴县',
                value: '1.27436',
              }, {
                name: '定日县',
                value: '4.57550 ',
              }, {
                name: '仲巴县',
                value: '3.53260 ',
              }, {
                name: '亚东县',
                value: '3.43338 ',
              }, {
                name: '吉隆县',
                value: '2.83814 ',
              }, {
                name: '聂拉木县',
                value: '3.26246 ',
              }, {
                name: '萨嘎县',
                value: '2.14162 ',
              }, {
                name: '普兰县',
                value: '1.52122 ',
              }, {
                name: '札达县',
                value: '1.42860 ',
              }, {
                name: '噶尔县',
                value: '1.62908 ',
              }, {
                name: '日土县',
                value: '1.84654 ',
              }, {
                name: '米林县',
                value: '7.03788 ',
              }, {
                name: '墨脱县',
                value: '2.63084 ',
              }, {
                name: '察隅县',
                value: '4.24888 ',
              }, {
                name: '朗县',
                value: '3.24148 ',
              }, {
                name: '洛扎县',
                value: '2.09002 ',
              }, {
                name: '隆子县',
                value: '4.54344 ',
              }, {
                name: '错那县',
                value: '2.35010 ',
              }, {
                name: '浪卡子县',
                value: '2.13648',
              }],
              2010: [{
                name: '康马县',
                value: '2.1073',
              }, {
                name: '定结县',
                value: '1.8063',
              }, {
                name: '岗巴县',
                value: '1.3794',
              }, {
                name: '定日县',
                value: '4.97937 ',
              }, {
                name: '仲巴县',
                value: '3.85803 ',
              }, {
                name: '亚东县',
                value: '3.73917 ',
              }, {
                name: '吉隆县',
                value: '3.09970 ',
              }, {
                name: '聂拉木县',
                value: '3.54787 ',
              }, {
                name: '萨嘎县',
                value: '2.33667 ',
              }, {
                name: '普兰县',
                value: '1.65417 ',
              }, {
                name: '札达县',
                value: '1.55123 ',
              }, {
                name: '噶尔县',
                value: '1.77633 ',
              }, {
                name: '日土县',
                value: '1.99693 ',
              }, {
                name: '米林县',
                value: '7.77990 ',
              }, {
                name: '墨脱县',
                value: '2.88570 ',
              }, {
                name: '察隅县',
                value: '4.62573 ',
              }, {
                name: '朗县',
                value: '3.53790 ',
              }, {
                name: '洛扎县',
                value: '2.30403 ',
              }, {
                name: '隆子县',
                value: '5.00707 ',
              }, {
                name: '错那县',
                value: '2.60727 ',
              }, {
                name: '浪卡子县',
                value: '2.3315',
              }],
              2011: [{
                name: '康马县',
              }, {
                name: '定结县',
              }, {
                name: '岗巴县',
              }, {
                name: '定日县',
              }, {
                name: '仲巴县',
              }, {
                name: '亚东县',
              }, {
                name: '吉隆县',
              }, {
                name: '聂拉木县',
              }, {
                name: '萨嘎县',
              }, {
                name: '普兰县',
              }, {
                name: '札达县',
              }, {
                name: '噶尔县',
              }, {
                name: '日土县',
              }, {
                name: '米林县',
              }, {
                name: '墨脱县',
              }, {
                name: '察隅县',
              }, {
                name: '朗县',
              }, {
                name: '洛扎县',
              }, {
                name: '隆子县',
              }, {
                name: '错那县',
              }, {
                name: '浪卡子县',
              }],
              2012: [{
                name: '康马县',
                value: '2.6852 ',
              }, {
                name: '定结县',
                value: '2.2027 ',
              }, {
                name: '岗巴县',
                value: '1.7887 ',
              }, {
                name: '定日县',
                value: '5.78710 ',
              }, {
                name: '仲巴县',
                value: '4.50890 ',
              }, {
                name: '亚东县',
                value: '4.35074 ',
              }, {
                name: '吉隆县',
                value: '3.62282 ',
              }, {
                name: '聂拉木县',
                value: '4.11868 ',
              }, {
                name: '萨嘎县',
                value: '2.72676 ',
              }, {
                name: '普兰县',
                value: '1.92006 ',
              }, {
                name: '札达县',
                value: '1.79650 ',
              }, {
                name: '噶尔县',
                value: '2.07084 ',
              }, {
                name: '日土县',
                value: '2.29772 ',
              }, {
                name: '米林县',
                value: '9.26394 ',
              }, {
                name: '墨脱县',
                value: '3.39542 ',
              }, {
                name: '察隅县',
                value: '5.37944 ',
              }, {
                name: '朗县',
                value: '4.13074 ',
              }, {
                name: '洛扎县',
                value: '2.73206 ',
              }, {
                name: '隆子县',
                value: '5.93432 ',
              }, {
                name: '错那县',
                value: '3.12160 ',
              }, {
                name: '浪卡子县',
                value: '3.2290 ',
              }],
              2013: [{
                name: '康马县',
                value: '2.9742',
              }, {
                name: '定结县',
                value: '2.4009',
              }, {
                name: '岗巴县',
                value: '1.9934',
              }, {
                name: '定日县',
                value: '6.19097 ',
              }, {
                name: '仲巴县',
                value: '4.83433 ',
              }, {
                name: '亚东县',
                value: '4.65653 ',
              }, {
                name: '吉隆县',
                value: '3.88438 ',
              }, {
                name: '聂拉木县',
                value: '4.40409 ',
              }, {
                name: '萨嘎县',
                value: '2.92181 ',
              }, {
                name: '普兰县',
                value: '2.05301 ',
              }, {
                name: '札达县',
                value: '1.91913 ',
              }, {
                name: '噶尔县',
                value: '2.21809 ',
              }, {
                name: '日土县',
                value: '2.44811 ',
              }, {
                name: '米林县',
                value: '10.00596 ',
              }, {
                name: '墨脱县',
                value: '3.65028 ',
              }, {
                name: '察隅县',
                value: '5.75629 ',
              }, {
                name: '朗县',
                value: '4.42716 ',
              }, {
                name: '洛扎县',
                value: '2.94607 ',
              }, {
                name: '隆子县',
                value: '6.39795 ',
              }, {
                name: '错那县',
                value: '3.37877 ',
              }, {
                name: '浪卡子县',
                value: '3.6778',
              }],
              2014: [{
                name: '康马县',
                value: '1.8951',
              }, {
                name: '定结县',
                value: '2.7276',
              }, {
                name: '岗巴县',
                value: '2.4406',
              }, {
                name: '定日县',
                value: '6.59483 ',
              }, {
                name: '仲巴县',
                value: '5.15977 ',
              }, {
                name: '亚东县',
                value: '4.96231 ',
              }, {
                name: '吉隆县',
                value: '4.14594 ',
              }, {
                name: '聂拉木县',
                value: '4.68949 ',
              }, {
                name: '萨嘎县',
                value: '3.11685 ',
              }, {
                name: '普兰县',
                value: '2.18595 ',
              }, {
                name: '札达县',
                value: '2.04177 ',
              }, {
                name: '噶尔县',
                value: '2.36535 ',
              }, {
                name: '日土县',
                value: '2.59851 ',
              }, {
                name: '米林县',
                value: '10.74798 ',
              }, {
                name: '墨脱县',
                value: '3.90514 ',
              }, {
                name: '察隅县',
                value: '6.13315 ',
              }, {
                name: '朗县',
                value: '4.72358 ',
              }, {
                name: '洛扎县',
                value: '3.16009 ',
              }, {
                name: '隆子县',
                value: '6.86157 ',
              }, {
                name: '错那县',
                value: '3.63593 ',
              }, {
                name: '浪卡子县',
                value: '4.2656',
              }],
              2015: [{
                name: '康马县',
                value: '3.8799',
              }, {
                name: '定结县',
                value: '3.1581',
              }, {
                name: '岗巴县',
                value: '3.2757',
              }, {
                name: '定日县',
                value: '6.99870 ',
              }, {
                name: '仲巴县',
                value: '5.48520 ',
              }, {
                name: '亚东县',
                value: '5.26810 ',
              }, {
                name: '吉隆县',
                value: '4.40750 ',
              }, {
                name: '聂拉木县',
                value: '4.97490 ',
              }, {
                name: '萨嘎县',
                value: '3.31190 ',
              }, {
                name: '普兰县',
                value: '2.31890 ',
              }, {
                name: '札达县',
                value: '2.16440 ',
              }, {
                name: '噶尔县',
                value: '2.51260 ',
              }, {
                name: '日土县',
                value: '2.74890 ',
              }, {
                name: '米林县',
                value: '11.49000 ',
              }, {
                name: '墨脱县',
                value: '4.16000 ',
              }, {
                name: '察隅县',
                value: '6.51000 ',
              }, {
                name: '朗县',
                value: '5.02000 ',
              }, {
                name: '洛扎县',
                value: '3.37410 ',
              }, {
                name: '隆子县',
                value: '7.32520 ',
              }, {
                name: '错那县',
                value: '3.89310 ',
              }, {
                name: '浪卡子县',
                value: '4.6764',
              }],
            },
  },
];

export default economyData;

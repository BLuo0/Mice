export function getBarChart() {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 2500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],           // 文本，默认为数值文本
      calculable: true,
      inRange: {
        color: ['#e0ffff', '#006edd']
      },
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'iphone',
        type: 'map',
        mapType: 'china',
        roam: true,
        zoom: 1.1, //缩放比例
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: '北京', value: Math.round(Math.random() * 1000) },
          { name: '天津', value: Math.round(Math.random() * 1000) },
          { name: '上海', value: Math.round(Math.random() * 1000) },
          { name: '重庆', value: Math.round(Math.random() * 1000) },
          { name: '河北', value: Math.round(Math.random() * 1000) },
          { name: '河南', value: Math.round(Math.random() * 1000) },
          { name: '云南', value: Math.round(Math.random() * 1000) },
          { name: '辽宁', value: Math.round(Math.random() * 1000) },
          { name: '黑龙江', value: Math.round(Math.random() * 1000) },
          { name: '湖南', value: Math.round(Math.random() * 1000) },
          { name: '安徽', value: Math.round(Math.random() * 1000) },
          { name: '山东', value: Math.round(Math.random() * 1000) },
          { name: '新疆', value: Math.round(Math.random() * 1000) },
          { name: '江苏', value: Math.round(Math.random() * 1000) },
          { name: '浙江', value: Math.round(Math.random() * 1000) },
          { name: '江西', value: Math.round(Math.random() * 1000) },
          { name: '湖北', value: Math.round(Math.random() * 1000) },
          { name: '广西', value: Math.round(Math.random() * 1000) },
          { name: '甘肃', value: Math.round(Math.random() * 1000) },
          { name: '山西', value: Math.round(Math.random() * 1000) },
          { name: '内蒙古', value: Math.round(Math.random() * 1000) },
          { name: '陕西', value: Math.round(Math.random() * 1000) },
          { name: '吉林', value: Math.round(Math.random() * 1000) },
          { name: '福建', value: Math.round(Math.random() * 1000) },
          { name: '贵州', value: Math.round(Math.random() * 1000) },
          { name: '广东', value: Math.round(Math.random() * 1000) },
          { name: '青海', value: Math.round(Math.random() * 1000) },
          { name: '西藏', value: Math.round(Math.random() * 1000) },
          { name: '四川', value: Math.round(Math.random() * 1000) },
          { name: '宁夏', value: Math.round(Math.random() * 1000) },
          { name: '海南', value: Math.round(Math.random() * 1000) },
          { name: '台湾', value: Math.round(Math.random() * 1000) },
          { name: '香港', value: Math.round(Math.random() * 1000) },
          { name: '澳门', value: Math.round(Math.random() * 1000) }
        ]
      }
    ]
  };
  return option;
}

export function getLineChart() {
  //option
  const option = {
    backgroundColor: '#fff',
    title: {
      text: "订单量（个）",
      left: "18px",
      top: "0",
      textStyle: {
        color: "#999",
        fontSize: 12,
        fontWeight: '400'
      }
    },
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        },
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    grid: {
      left: '25',
      right: '25',
      bottom: '24',
      top: '75',
      containLabel: true
    },
    legend: {
      data: ['订单总笔数', '钱包笔数', '借呗笔数'],
      orient: 'horizontal',
      icon: "rect",
      show: true,
      left: 20,
      top: 25,
    },
    xAxis: {
      type: 'category',
      data: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      // max: max_value>=100? max_value + 100: max_value+10,
      // max: max_value > 100 ? max_value * 2 : max_value + 10,
      // interval: 10,
      // nameLocation: "center",
      axisLabel: {
        color: '#999',
        textStyle: {
          fontSize: 12
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#F3F4F4'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
    },
    series: [{
      name: '订单总笔数',
      type: 'line',
      smooth: true,
      data: [13, 1, 4, 44, 45, 322, 76]
    },
    {
      name: '钱包笔数',
      type: 'line',
      smooth: true,
      data: [13, 54, 34, 344, 35, 53]
    },
    {
      name: '借呗笔数',
      type: 'line',
      smooth: true,
      data: [13, 2, 2, 32, 123, 23, 136]
    }
    ]
  }
  return option;
}

/* export function getPieChart() {
  //option
  const option = {
    color: ['#3AA1FF', '#36CBCB', '#4ECB73', '#FBD338'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    series: [{
      name: '消费能力',
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['50%', '55%'],
      avoidLabelOverlap: true,
      itemStyle: {
        normal: {
          borderColor: '#FFFFFF',
          borderWidth: 2
        }
      },
      label: {
        normal: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        name: 'a',
        value: '20'
      }, {
        name: 'b',
        value: '40'
      }, {
        name: 'c',
        value: '10'
      }, {
        name: 'd',
        value: '10'
      }]
    }]
  };
  return option;
} */
/* export function getLineChart() {
  const option = {
    tooltip: {
      position: 'top',
      textStyle: {
        fontSize: 18
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [{
      type: "wordCloud",
      // 网格大小，各项之间间距
      gridSize: 20,
      // 形状 circle 圆，cardioid  心， diamond 菱形，
      // triangle-forward 、triangle 三角，star五角星
      shape: 'circle',
      // 字体大小范围
      sizeRange: [12, 50],
      // 文字旋转角度范围
      rotationRange: [0, 90],
      // 旋转步值
      rotationStep: 90,
      // 自定义图形
      // maskImage: maskImage,
      left: 'center',
      top: 'center',
      right: null,
      bottom: null,
      // 画布宽
      width: '100%',
      // 画布高
      height: '100%',
      // 是否渲染超出画布的文字
      drawOutOfBound: false,
      textStyle: {
        normal: {
          color: function () {
            return 'rgb(' + [
              Math.round(Math.random() * 200 + 55),
              Math.round(Math.random() * 200 + 55),
              Math.round(Math.random() * 200 + 55)
            ].join(',') + ')';
          }
        },
        //  emphasis: {
        //    shadowBlur: 10,//字体阴影背景
        //    shadowColor: '#2ac'
        //  }
      },
      data: [
        { name: "雨伞", value: 30 },
        { name: "晴天", value: 128 },
        { name: "电话", value: 24 },
        { name: "手机", value: 23 },
        { name: "下雨", value: 22 },
        { name: "暴雨", value: 21 },
        { name: "多云", value: 20 },
        { name: "雨衣", value: 29 },
        { name: "屋檐", value: 98 },
        { name: "大风", value: 27 },
        { name: "台风", value: 26 },
        { name: "下雪", value: 25 },
        { name: "打雷", value: 24 },
        { name: "小雨", value: 30 },
        { name: "中雨", value: 18 },
        { name: "大雨", value: 14 },
        { name: "雷阵雨", value: 13 },
        { name: "下雪", value: 12 },
        { name: "小雪", value: 11 },
        { name: "中雪", value: 10 },
        { name: "大雪", value: 9 },
        { name: "暴雪", value: 8 },
        { name: "东风", value: 7 },
        { name: "南风", value: 6 },
        { name: "西北风", value: 5 },
        { name: "北风", value: 4 },
        { name: "闪电", value: 3 }
      ]
    }]
  }
  return option;

}  */

export default {
    fiveColor: {
        title: {
            text: '数量/个',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#fff'
            }
        },
        // legend: {
        //     orient: 'horizontal',
        //     name: ['黑色', '红色'],
        //     textStyle:{
        //         text:'22',
        //         fontWeight: 'bolder',
        //         color: '#fff'
        //     }
        // },
        xAxis: {
            type: 'category',
            data: ['黑色', '红色', '橙色', '黄色', '绿色'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 14      //更改坐标轴文字大小
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff' //更改坐标轴颜色
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                    fontSize: 14      //更改坐标轴文字大小
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff' //更改坐标轴颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(15, 91, 125, 0.2)'
                }
            },
            axisTick: {
                show: false
            },
            //y轴的间隔
            interval:20, 
        },
        series: [

            {
                name: '红色',
                barWidth: '40',
                data: [
                    {
                        name: '黑色',
                        value: 6,
                        itemStyle: {
                            color: '#000',
                        },
                    }, {
                        name: '红色',
                        value: 12,
                        itemStyle: {
                            width: 50,
                            color: '#ff0000'
                        }
                    }, {
                        name: '橙色',
                        value: 23,
                        itemStyle: {
                            color: '#ff9900'
                        }
                    }, {
                        name: '黄色',
                        value: 34,
                        itemStyle: {
                            color: '#ffff00'
                        }
                    }, {
                        name: '绿色',
                        value: 24,
                        itemStyle: {
                            color: '#00ff00'
                        }
                    }],
                type: 'bar'
            }
        ]
    },
    panel: {
        series: [
            {
                type: 'gauge',
                axisLine: {
                    lineStyle: {
                        width: 20,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'auto',
                    distance: 40,
                    fontSize: 20
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value} km/h',
                    color: 'auto'
                },
                data: [{
                    value: 70
                }]
            }
        ]
    }
}
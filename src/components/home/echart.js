
export default {
    fiveColor: {
        title:{
            text:'数量/个',
            textStyle:{
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#fff'
            }
        },
        legend: {
            show: true,
            orient: 'horizontal',
            data: ['黑色', '红色', '橙色', '黄色', '绿色'],
            x: 'center',
            y: 'top'
        },
        xAxis: {
            type: 'category',
            data: ['黑色', '红色', '橙色', '黄色', '绿色']
        },
        yAxis: {
            type: 'value',
            nameTextStyle:{
                color: '#fff'
            }
        },
        series: [
            {
                barWidth: '40',
                data: [
                    {
                        value: 26,
                        itemStyle: {
                            color: '#000',
                        },
                    }, {
                        value: 36,
                        itemStyle: {
                            width: 50,
                            color: '#ff0000'
                        }
                    }, {
                        value: 125,
                        itemStyle: {
                            color: '#ff9900'
                        }
                    }, {
                        value: 139,
                        itemStyle: {
                            color: '#ffff00'
                        }
                    }, {
                        value: 180,
                        itemStyle: {
                            color: '#00ff00'
                        }
                    }],
                type: 'bar'
            }
        ]
    },
    colorShow: {
        title: {
            text: '五色图',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['绿色', '黄色', '红色', '橙色', '灰色']
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['绿色', '黄色', '红色', '橙色', '灰色']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '人数',
                type: 'bar',
                data: [
                    {
                        name: '绿色', value: 182.2
                    },
                    {
                        name: '黄色', value: 182.2
                    }, {
                        name: '红色', value: 182.2
                    }, {
                        name: '橙色', value: 18
                    }, {
                        name: '灰色', value: 182
                    },
                ],
                // markPoint: {
                //     data: [
                //         {
                //             name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18
                //         }
                //     ]
                // },
                itemStyle: {
                    normal: {
                        color: function (params) {
                            let colorList = [
                                "#eb6100",
                                "#f39800",
                                "#fff100",
                                "#8fc31f",
                                "#22ac3",
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                }
            }
        ],
        // timeline: {
        //     data: ['绿色', '黄色', '红色', '橙色', '灰色'],
        //     // label: {
        //     //     formatter: function (s) {
        //     //         return s.slice(0, 4);
        //     //     }
        //     // },
        //     autoPlay: true,
        //     playInterval: 1000
        // },
    },
    line: {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: { show: true },
        //         dataView: { show: true, readOnly: false },
        //         magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        //         restore: { show: true },
        //         saveAsImage: { show: true }
        //     }
        // },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
}
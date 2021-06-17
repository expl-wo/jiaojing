export default (ctx) => {
    return {
        tableHeadConfig: [
            {
                type: "selection",
                renderHeader: (h) => {
                    return h('checkbox');
                },
                algin: 'center',
                width: 60,
                render: (h) => {
                    return h('checkbox', {
                        style: {
                            width: '20px',
                            height: '20px'
                        }
                    })
                }
            },
            {
                title: "姓名",
                key: "name",
                algin: 'center',
                width: 150
            },
            {
                title: "身份证号码",
                key: "age",
                width: 180
            },
            {
                title: "联系方式",
                key: "address",
                width: 180
            },
            {
                title: "骑手状态",
                key: "address",
            },
            {
                title: "骑手类型",
                key: "address",
            },
            {
                title: "平台名称",
                key: "address",
                width: 250
            },
            {
                title: "码类型",
                key: "address",
            },
            {
                title: "宣教时间",
                key: "address",
            },
            {
                title: "操作",
                key: "address",
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                // size: 'small'
                            },
                            style: {
                                marginRight: '15px'
                            },
                            on: {
                                click: () => {
                                    ctx.showEducation(params.row)
                                }
                            }
                        }, '宣教'),
                        h('Button', {
                            props: {
                                type: 'primary',
                                // size: 'small'
                            },
                            on: {
                                click: () => {
                                    ctx.showDetail(params.row)
                                }
                            }
                        }, '查看详情')
                    ]);
                }
            }
        ],
        tableDataList: [
            {
                name: "John Brown",
                age: 4128032032321222,
                address: "18212122657",
                date: "2016-10-03",
            },
            {
                name: "Jim Green",
                age: 24,
                address: "London No. 1 Lake Park",
                date: "2016-10-01",
            },
            {
                name: "Joe Black",
                age: 30,
                address: "Sydney No. 1 Lake Park",
                date: "2016-10-02",
            },
            {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }, {
                name: "Jon Snow",
                age: 26,
                address: "Ottawa No. 2 Lake Park",
                date: "2016-10-04",
            }
        ]
    }
}
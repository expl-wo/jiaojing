export default (ctx) => {
    return {
        tableHeadConfig: [
            {
                type: "selection",
                renderHeader: (h) => {
                    return h('checkbox');
                },
                algin: 'center',
                tooltip: true,
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
                width: 150,
                tooltip: true,
            },
            {
                title: "身份证号码",
                key: "cardNumber",
                width: 180,
                tooltip: true,
            },
            {
                title: "联系方式",
                key: "phoneNum",
                width: 180,
                tooltip: true,
            },
            {
                title: "骑手状态",
                key: "personStatus",
                tooltip: true,
            },
            {
                title: "骑手类型",
                key: "personType",
                tooltip: true,
            },
            {
                title: "平台名称",
                key: "platformName",
                width: 250,
                tooltip: true,
            },
            {
                title: "码类型",
                key: "codeType",
                width:100,
                render: (h, params) => {
                    let src = '';
                    if(params.index%2 === 0){
                        src = require('@/assets/img/u199.png');
                    }else{
                        src = require('@/assets/img/u194.png')
                    }
                    return h('div', [
                        h('img', {
                            attrs: {
                                src:src,
                            },
                            style: {
                                width: '40px',
                                height:'40px',
                            },
                        }),
                    ])
                }
            },
            // {
            //     title: "宣教时间",
            //     key: "eduTime",
            //     tooltip: true,
            // },
            {
                title: "操作",
                key: "address",
                render: (h, params) => {
                    return h('div', [
                        // h('Button', {
                        //     props: {
                        //         type: 'primary',
                        //         // size: 'small'
                        //     },
                        //     style: {
                        //         marginRight: '15px'
                        //     },
                        //     on: {
                        //         click: () => {
                        //             ctx.showEducation(params.row)
                        //         }
                        //     }
                        // }, '宣教'),
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
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },
            {
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            },{
                name: "张珊",
                sex:'男',
                cardNumber:'4128032032321222',
                phoneNum:'18212122657',
                personStatus:'在岗',
                personType:'直签',
                platformName:'达达快送',
                codeSrc:'@/assets/img',
                eduTime: "2021-06-18",
            }
        ]
    }
}
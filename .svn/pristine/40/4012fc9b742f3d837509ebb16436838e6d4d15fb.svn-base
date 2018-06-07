module.exports = function () {
    // var faker = require("faker");
    // faker.locale = "zh_CN";
    // var _ = require("lodash");
    var Mock = require('mockjs');
    var Random = Mock.Random;
    return {
        banner:{
            "success": true,
            "msg": "操作成功",
            "reload": false,
            "obj": [{
                "id": 2,
                "delFlag": 0,
                "isNewRecord": false,
                "name": "首页雨伞图",
                "pic": "/banner/20180402/20180402181906_818.jpg",
                "location": "index",
                "url": "http://www.163.com",
                "orderNum": 2,
                "startTime": "2018-04-01 18:19:21",
                "endTime": "2018-04-05 18:19:25"
            }, {
                "id": 1,
                "delFlag": 0,
                "isNewRecord": false,
                "name": "11",
                "pic": "/banner/20180402/20180402173738_458.jpg",
                "location": "index",
                "url": "http://www.baidu.com",
                "orderNum": 1,
                "startTime": "2018-04-01 17:28:40",
                "endTime": "2018-04-26 17:28:43"
            }]
        },
        ads: [{
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }, {
            url: '../static/images/ban1.png'
        }],
        proList: Mock.mock({
            count: 5,
            title:/新品首发|人气推荐/,
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|10-20': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 11,
                'imageUrl|+1': '@image("200x200")',
                'label1|+1': /满99-10|/,
                'label2|+1': /券|/,
                'label3|+1': /特价|/,
                'proTitle': '@ctitle(13, 28)',
                'price|60-900': 1,
                'marketPrice|65-988': 1
            }]
        }),
        proDetail: Mock.mock({
            'id': 111,
            'imageList|2-5': [{
                'pic': '/banner/20180402/20180402173738_458.jpg'
            }],
            'label1': /满99-10|/,
            'label2': /券|/,
            'label3': /特价|/,
            'proTitle': '@ctitle(13, 28)',
            'price|60-900': 1,
            'marketPrice|65-988': 1,
            'detailImg': [{
                'pic': '/banner/20180402/20180402173738_458.jpg'
             }, {
                'pic': '/banner/20180402/20180402181906_818.jpg',
             }],
             'desTitle': '@ctitle(5, 8)',
             'desText': '@ctitle(25,60)'
           
        }),
        cartList: Mock.mock({
            'status': '1',
            'result|3-6': [{
                'proID|+1': 1,
                'proImg': "@image('200x200')",
                'proName|+1': '@ctitle(13, 28)',
                'proNum|1-5': 1,
                'proPrice|60-900': 1,
                'marketPrice|65-988': 1,
                'check': false
            }]
        }),
        editCart: {},
        addCart: {}, 
        delCart: {},
        editCheckAll: {},
        address: {
            'resultList': [{
            "id":12345011,
            "province": "广东省",
            "city": "广州市",
            "district": "天河区",
            "detailaddress":"天府路107号",
            "mobile":"13681711251",
            "username":"黄先生",
            "isdefault":1
        },{
            "id":12345012,
            "province": "广东省",
            "city": "深圳市",
            "district": "南山区",
            "detailaddress":"塘朗地铁站",
            "mobile":"13681711252",
            "username":"王先生",
            "isdefault":0
        },{
            "id":12345013,
            "province": "广东省",
            "city": "梅州市",
            "district": "大埔县城",
            "detailaddress":"碧桂园12栋",
            "mobile":"13681711253",
            "username":"李先生",
            "isdefault":0
        }]
        } ,
        // address: Mock.mock({
        //     'result|3': [{
        //         'proID|+1': 1,
        //         'name|+1': Random.name(),
        //         'mobile|+1': /^(13[0-9]|15[0-9]|18[0,5-9]|14[5|7])\d{8}$/,
        //         'province': Random.province(),
        //         'city': Random.city(),
        //         'region': Random.region(),
        //         'address_detail': Random.ctitle(13, 28),
        //         'check|1-2': true
        //     }]
        // }),
        delAddress: {},
        addAddress: {},
        updateAddress: {},
        delAddress: {},
        defaultAddress:{},
        sortList: [{
            value: '全部分类',
            type: 2000,
            count: 3232
        }, {
            value: '车友必备',
            type: 2001,
            count: 312
        },{
            value: '数码控',
            type: 2002,
            count: 745
        },{
            value: '运动达人',
            type: 2003,
            count: 123
        },{
            value: '智慧萌娃',
            type: 2004,
            count: 864
        }]
    } 
  }

    
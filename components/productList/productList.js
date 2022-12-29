// components/productList/productList.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Object,
            value: {}
        },
        pagenum: {
            type: Number,
            value: 1
        },
        pagesize: {
            type: Number,
            value: 10
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goodsDetall(e) {
            let goodsId = e.currentTarget.dataset.goodsid
            wx.navigateTo({
                url: '../goods_detail/goods_detail?goodsid=' + goodsId,
            })
            // console.log(e);
        },
    }
})
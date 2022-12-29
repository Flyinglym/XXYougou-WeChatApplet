import {
    request
} from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: {},
        // collection: wx.getStorageSync('collection') || [],
        collectionFlag: false
    },
    // 数据请求
    async rader(id) {
        let res = await request({
            url: `goods/detail?goods_id=${id}`,
        })
        this.setData({
            list: res.message
        })
    },
    // 图片预览
    preview() {
        wx.previewImage({
            urls: this.data.list.pics.map(res => res.pics_mid_url),
        })
    },
    // 收藏
    collectionItem() {
        let collection = wx.getStorageSync('collection') || []
        let obj = {
            id: this.data.list.goods_id,
            img: this.data.list.goods_big_logo,
            title: this.data.list.goods_name,
            price: this.data.list.goods_price,
        }
        // let collection = this.data.collection
        if (collection.length !== 0) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i].id == obj.id) {
                    console.log(`删除第${i}位`);
                    collection.splice(i, 1)
                    wx.setStorage({
                        key: "collection",
                        data: collection
                    })
                    return
                }
            }
        }
        let a = collection.push(obj)
        console.log(a);
        console.log(collection);
        wx.setStorage({
            key: "collection",
            data: collection
        })
    },
    addShopping() {
        let item = wx.getStorageSync('shoppingCart') || []
        let obj = {
            id: this.data.list.goods_id,
            name: this.data.list.goods_name,
            img: this.data.list.goods_big_logo,
            price: this.data.list.goods_price
        }
        for (let i = 0; i < item.length; i++) {
            if (item[i].id == obj.id) {
                wx.showToast({
                    title: '商品重复',
                    icon: 'error'
                })
                return
            }
        }

        console.log(this.data.list);
        item.push(obj)
        wx.setStorageSync('shoppingCart', item)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

        this.rader(options.goodsid)
        // console.log(options.goodsid);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
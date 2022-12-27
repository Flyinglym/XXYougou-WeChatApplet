import {
    request
} from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: true,
        ndicatorActiveColor: "#ffffff",
        swiperList: [],
        catitemList: [],
        floorList: []
    },

    async reader() {
        // 轮播图
        let swiperdata = await request({
            url: "home/swiperdata",
            method: "get",
            dataType: "json"
        })
        // 导航
        let catitems = await request({
            url: "home/catitems",
            method: "get",
            dataType: "json"
        })
        // 楼层
        let floordata = await request({
            url: "home/floordata",
            method: "get",
            dataType: "json"
        })

        // console.log(floordata);
        this.setData({
            swiperList: swiperdata.message,
            catitemList: catitems.message,
            floorList: floordata.message
        })
        // console.log(swiperRes);
    },
    jump(e) {
        let url = e.currentTarget.dataset.url
        url = url.split("main").join("category")
        wx.switchTab({
            url
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.reader()
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
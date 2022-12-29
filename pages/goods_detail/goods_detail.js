import {
    request
} from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: {}
    },

    async rader(id) {
        let res = await request({
            url: `goods/detail?goods_id=${id}`,
        })
        this.setData({
            list: res.message
        })
        console.log(res.message);
    },
    preview(e) {
        let imgUrl = e.currentTarget.dataset.imgurl;
        console.log(e);
        wx.previewImage({
            urls: this.data.list.pics.map(res => res.pics_mid_url),
        })
        // wx.previewMedia({
        //     sources: [imgUrl],
        // })
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
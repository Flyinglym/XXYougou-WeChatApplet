import {
    request
} from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options: "",
        pagenum: 1,
        pagesize: 10,
        list: {}
    },

    async reader(id) {
        let pagenum = this.data.pagenum
        let pagesize = this.data.pagesize
        let res = await request({
            url: `goods/search?cid=${id}&pagenum=${pagenum}&pagesize=${pagesize}`,
            method: "get",
            dataType: "json"
        })
        // console.log(res.message);
        let list = res.message.goods
        if (list.length == 0) {
            console.log(1);
            wx.showToast({
                title: '全部加载完毕',
            })
            return
        }
        if (res.message.pagenum > 1) {
            let goods = this.data.list
            // console.log(list);
            // console.log(goods);
            list = goods.concat(list)
            // res.message.goods.push(goods)
        }
        this.setData({
            list
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.reader(options.id)
        this.setData({
            options: options.id
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log("刷新");
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    async onReachBottom() {
        let id = this.data.options
        let pagenum = this.data.pagenum
        let pagesize = this.data.pagesize
        this.setData({
            pagenum: pagenum + 1,
            pagesizeL: pagesize + 10
        })
        this.reader(id)
        // console.log(this.data.options.id);
    },
})
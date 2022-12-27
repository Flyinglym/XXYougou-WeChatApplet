export const request = (params) => {
	wx.showToast({
	  title: '加载中...',
	})
	return new Promise((resolve, reject) => {
		let baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/"
		wx.request({
			...params,
			url: baseUrl + params.url,
			success(res){
				resolve(res.data)
			},
			fail(err){
				reject(res)
			},
			complete(){
				wx.hideToast()
			}
			
		})
	})
}
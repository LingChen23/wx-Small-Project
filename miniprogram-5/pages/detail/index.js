// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载 --获取到产品详情的来获取对应的详情数据
   */
  onLoad(options) {
    console.log(options, '获取到参数')
    wx.request({
      url: 'http://121.89.205.189:3000/api/pro/detail/' + options.id,
      method: "GET",
      success: res => {
        console.log(res, '商品的详情数据')
        this.setData({
          info: res.data.data
        })
        // 怎么个方法去设置title 设置导航条的标题
        wx.setNavigationBarTitle({
          title: res.data.data.proname,
        })
      }
    })
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
Page({

  /**
   * 页面的初始数据
   * 设置了一个变量 
   */
  data: {
    n:10,
    til:'hello1',
    dog: {
      color:red,
      name:小白,
      age:9
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = ['a', 'b', 'c']
    let res = arr.filter((item, i) => {
      // console.log(item, i)
      return i >= 1 //1>2
    })
    console.log(res, '结果')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
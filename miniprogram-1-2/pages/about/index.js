// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      n: 10,
      til:'Hello',
      dog:{
        color:'红色',
        age: 3,
        name:"小白"
      },
      navs :['新闻', 'hao123', '地图']
  },
  add(){
    //console.log("函数执行了")
    //修改数据
    //console.log(this.data.navs, 'navas')
    //结构赋值
    this.setData({
        navs: [...this.data.navs,'工']
    })
  },

  del(e){
    console.log(e,'e')
    let index = e.currentTarget.dataset.index
    this.setData({
        navs: this.data.navs.filter((item, i) => i != index)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = ['a', 'b', 'c']
    //let result = [...arr, '工大1']
    //console.log(result, 'aaa')

    let res =  arr.filter((item,i)=>{
      return i>1
    })
    console.log(res,'结果')
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
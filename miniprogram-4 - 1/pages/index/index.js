Page({

  /**
   * 页面的初始数据
   * 设置了一个变量 
   */
  data: {
    n: 10,
    til: 'hello1',
    dog: {
      color: '红色',
      age: 3,
      name: "小白"
    },

    navs:['新闻','hao123','地图']
  },
//执行函数
  add(){
    //console.log("函数执行了")
    //修改数据
    //console.log(this.data.navs,'navs')
    //结构赋值
    this.setData({
      navs: ['工大' + Date.now,...this.data.navs]
    })
  },

  del(e){
    //事件对象e
    //console.log(e,'e')
    let index = e.currentTarget.dataset.index
    this.setData({
      navs: this.data.navs.filter((item,i)=>i != index)
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = [1, 2, 3, '工大']
    let result = [...arr,'工大1']
    console.log(result, 'aaa')

    //数组的删除
    let arr1 = ['a', 'b', 'c']
    let res = arr1.filter((item,i)=>{
      //console.log(item,i)\
      return i != 1
    })  
    console.log(res,'结果')

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
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
    value: "",
    navs: ['新闻', 'hao123', '地图'],
    list: [{
        id: 1,
        text: "aaaa"
      },
      {
        id: 2,
        text: "333"
      }
    ],
  },
  addList(e) {
    console.log(e, 'e')
    // 只读属性 没有更改的权限
    let value = e.detail.value;
    this.setData({
      list: [...this.data.list, {
        id: Date.now(),
        text: value
      }],
      value: ""
    })

    // e.detail.value = ''
  },
  delList(e) {
    let id = e.currentTarget.dataset.id
    // console.log(id,'id')
    this.setData({
      list: this.data.list.filter((item, i) => {
        return item.id !== id
      })
    })
  },
  //执行函数
  add() {
    this.setData({
      navs: ['工大', ...this.data.navs]
    })
  },
  //删除
  del(e) {
    //filter 
    // e事件对象
    console.log(e, 'e')
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
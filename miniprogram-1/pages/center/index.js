// pages/center/index.js
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
    value:"",
    navs:['新闻','hao123','地图'],
    list:[
      {
        id:1,
        text:"aaaa"
      },
      {
        id:2,
        text:"bbb"
      }
    ],
  },

  delList(e){
    let id = e.currentTarget.dataset.id
    console.log(id,'id')
    this.setData({
      list:this.data.list.filter((item,i)=>{
        return item.id !== id
      })
    })
  },

  addList(e){
    console.log(e,'e')
    let value = e.detail.value
    this.setData({
      list:[...this.data.list,{
        id:Date.now(),
        text:value
      }],
      value: ""
    })

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
    let a = 10;
    let b = 22;
    let res = a>b ? 'aaa' : 'bbb'
    console.log(res)
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
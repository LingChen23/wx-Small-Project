
Page({

  /**
   * 页面的初始数据
   * 设置了一个变量 
   */
  data: {

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

    navs:[{name:'腾讯视频', icon:'../../imagines/腾讯视频.png'},
    {name:'芒果TV', icon:'../../imagines/芒果tv.png'},
    {name:'更多', icon:'../../imagines/更多.png'}],
    customData: [
      {name:'必应搜索', icon:'../../imagines/risk.png'},
      {name:'抖音', icon:'../../imagines/抖音.png'},
      {name:'京东', icon:'../../imagines/支付,京东.png'},
      {name:'爱奇艺', icon:'../../imagines/电视.png'},
      {name:'爱淘宝', icon:'../../imagines/淘宝.png'},
      {name:'梦游页游', icon:'../../imagines/网页游戏.png'},
      {name:'4366游戏', icon:'../../imagines/元_互动游戏.png'}, 
      {name:'神魔之道', icon:'../../imagines/道.png'}, 
      {name: '携程旅行',icon:'../../imagines/携程.png'}, 
      {name: '唯品会',icon:'../../imagines/唯品会.png'}, 
      {name: '天猫', icon:'../../imagines/天猫.png'}, 
      {name: 'BOSS直聘', icon:'../../imagines/BOSS直聘.png'}, 
      {name: '9377页游', icon:'../../imagines/游戏，游戏机.png'}, 
       ], // 自定义数据列表
    customDataIndex: 0, // 自定义数据的当前索引
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
    const { navs, customData, customDataIndex } = this.data;
    if (customDataIndex < customData.length) {
      navs.unshift(customData[customDataIndex]); // 将当前索引的自定义数据添加到数组的开头
      this.setData({ 
        navs,
        customDataIndex: customDataIndex + 1 // 更新自定义数据的当前索引
      });
    } else {
      console.log('所有自定义数据都已添加');
    }
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
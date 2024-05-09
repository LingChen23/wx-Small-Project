// pages/login/index.js
const admins = [{
    id: 1,
    username: "lisi",
    password: "123456",
    nickname: "李四1",
    age: 20,
    tel: 17729930454,
    sex:"男",
    avatar:"https://img0.baidu.com/it/u=530540642,263790536&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
  },
  {
    id: 2,
    username: "zs",
    password: "123456",
    nickname: "张三ll",
    age: 20,
    tel: 17729340454,
    sex:"男",
    avatar:"https://inews.gtimg.com/news_bt/OIPr9G8LrCpP4K3cdWrmvalN2p2YWWB3URkibvS38awOEAA/641",
  }

]
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  formSubmit(e){
    console.log(e)
    //账号密码
    let value = e.detail.value

    //可以用过滤
    let result = admins.filter(item=>{
      return item.username === value.username && item.password === value.password
    })

    console.log(result,'a')

    if(result.length > 0){
      wx.showToast({
        title: '登陆成功',
        icon: "success",
        success:()=>{
          //跳转去首页
          setTimeout(()=>{
            wx.switchTab({
              url: '/pages/index/index',
            })
          }, 1500)
          //将用户信息存储，其他页面会用到
          wx.setStorageSync('user', result[0])
          
        }
      })
    }
    else{
      wx.showToast({
        title: '用户名或密码错误',
        icon: "error"
      })
    }
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
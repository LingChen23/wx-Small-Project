Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    safeTop: 0,
    bannerList: [],
    menuList: [{
        img: "https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg",
        title: "京东超市1",
      },
      {
        img: "https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg",
        title: "京东数码1",
      },
      {
        img: "https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png!q70.jpg",
        title: "京东百货1",
      },
      {
        img: " https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png!q70.jpg",
        title: "京东生鲜1",
      },
      {
        img: "https://m15.360buyimg.com/mobilecms/jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg",
        title: "京东超市2",
      },
      {
        img: "https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg",
        title: "京东数码2",
      },
      {
        img: "https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png!q70.jpg",
        title: "京东百货2",
      },
      {
        img: " https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png!q70.jpg",
        title: "京东生鲜2",
      },
    ],
    shopList: []
  },
  getbannerList(){
    wx.request({
      url: 'http://121.89.205.189:3000/api/banner/list',
      method: "GET",
      success: res => {
        console.log(res,'轮播你欧')

        //将没有图片的过滤掉
        //item.img='123'
        this.setData({
          bannerList: res.data.data.filter(item => item)
        })
      },
    })
  },
  //商品列表数据
  getShopList(){
    wx.request({
      url: 'http://121.89.205.189:3000/api/pro/list',
      method: "GET",
      data: {
        count: this.data.page,//页数 this.data.page
        limitNum: 10//每页条目书
      },
      success: res => {
        console.log(res,'商品列表')
        this.setData({
          shopList: [...this.data.shopList,...res.data.data]
        })
      }
    })
  },
  setPage(e){
    let {
      page
    } = e.currentTarget.dataset
    console.log(page,'page')
    this.setData({
      page: page
    })
    this.getShopList()
  },
  onLoad: function(options) {
    //调用一下函数
    this.getbannerList()
    this.getShopList()
    //获取安全距离
    let res = wx.getSystemInfoSync()
    // console.log(res,'aa')
    // console.log(res.safeArea.top,'aa')
    this.setData({
      safeTop: res.safeArea.top
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.hideShareMenu()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
  onReachBottom:function() {
    //滚动到底部执行
    console.log("执行onReachBottom")
    this.setData({
      page: this.data.page + 1
    })
    setTimeout(()=>{
      this.getShopList()
    },2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})

// //添加数据
// let arr = [1,2,3,4];
//[...this.data.arr,...arr]

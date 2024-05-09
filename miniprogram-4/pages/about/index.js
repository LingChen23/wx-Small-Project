// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  changeI(e){
    let i = e.currentTarget.dataset.i
    this.setData({
      i
    })
    console.log( this.data.shops[i].content)
  },
  data: {
    i:0,
     shops:[
       {
         type:"水果",
         content:[
           {
             name:"苹果",
             price:5,
             count:10,
             img:"http://t13.baidu.com/it/u=647809440,3543699576&fm=224&app=112&f=JPEG?w=500&h=500"
           },
           {
            name:"橘子",
            price:4,
            count:20,
            img:"https://img0.baidu.com/it/u=3205757642,1855071080&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
          },
          {
            name:"榴莲",
            price:35,
            count:10,
            img:"https://img2.baidu.com/it/u=3898863472,595205762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          }
         ]
       },
       {
        type:"蔬菜",
        content:[
          {
            name:"豆角",
            price:5,
            count:10,
            img:"https://img1.baidu.com/it/u=3690171994,2439538064&fm=253&fmt=auto&app=120&f=JPEG?w=608&h=456"
          },
          {
           name:"土豆",
           price:4,
           count:40,
           img:"https://img1.baidu.com/it/u=2736885101,3390853042&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
         },
         {
           name:"辣椒",
           price:5,
           count:15,
           img:"https://img2.baidu.com/it/u=3866002617,2863956939&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
         }
        ]
       },
       {
        type:"饮料",
        content:[
          {
            name:"雪碧",
            price:3,
            count:10,
            img:"https://img1.baidu.com/it/u=1546041163,46178202&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=400"
          },
          {
           name:"可乐",
           price:3,
           count:40,
           img:"https://img1.baidu.com/it/u=3904031828,1281441654&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=329"
         },
         {
           name:"美年达",
           price:3,
           count:15,
           img:"https://img2.baidu.com/it/u=3866002617,2863956939&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
         }
        ]
       }
     ]
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
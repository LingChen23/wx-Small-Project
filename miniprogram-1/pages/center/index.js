// pages/center/index.js
Page({

  /**
   * 页面的初始数据
   * 设置了一个变量 
   */
  data: {
    value: '', // 用于存储输入框中的值
    editIndex: null, // 用于存储正在编辑的留言的索引
    editText: '', // 用于存储正在编辑的留言的文本
    list:[
      {
        id:1,
        text:"Docker容器和虚拟机的区别"
      },
      {
        id:2,
        text:"Git本控制，分支和合并的概念"
      }
    ],
  },

  // 添加新留言
  addList() {
    let { value, list } = this.data;
    this.setData({
      list: [...list, {
        id: Date.now(),
        text: value
      }],
      value: ''
    });
  },

   // 当用户在输入框中输入时，更新 value 的值
   handleInput(e) {
    this.setData({
      value: e.detail.value
    });
  },

  // 当用户点击留言本身时，准备修改留言
  prepareModifyMessage(e) {
    let id = Number(e.currentTarget.dataset.id); // 将 id 转换为数字
    let item = this.data.list.find(item => item.id === id);

    if (item) {
      this.setData({
        editIndex: id,
        value: item.text
      });
    }
  },

  // 删除留言
  delList(e) {
    let id = Number(e.currentTarget.dataset.id); // 将 id 转换为数字
    let list = this.data.list.filter(item => item.id !== id);

    this.setData({
      list
    });
  },

  // 当用户按下回车键时，根据 editIndex 的值判断是添加新留言还是修改现有留言
  confirmInput() {
    let { value, list, editIndex } = this.data;

    if (editIndex !== null) { // 修改现有留言
      let index = list.findIndex(item => item.id === editIndex);
      if (index !== -1) {
        list[index].text = value;
        this.setData({
          list,
          editIndex: null,
          value: ''
        });
      }
    } else { // 添加新留言
      this.setData({
        list: [...list, {
          id: Date.now(),
          text: value
        }],
        value: ''
      });
    }
},

// 当用户点击按钮时，删除所有留言
clearAllMessages() {
  this.setData({
    list: []
  });
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
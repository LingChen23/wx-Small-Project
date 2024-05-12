
Page({

  /**
   * 页面的初始数据
   * 设置了一个变量 
   */
  data: {
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
 // 当用户在搜索框中输入时，更新 searchValue 的值
 handleSearchInput(e) {
  this.setData({
    searchValue: e.detail.value
  });
},

// 搜索函数
search() {
  let { list, searchValue } = this.data;
  let filteredList = list.filter(item => item.text.includes(searchValue));
  this.setData({
    list: filteredList
  });
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
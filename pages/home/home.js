import * as echarts from '../../ec-canvas/echarts';

const app = getApp();
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['20%', '40%'],
      data: [{
        value: 27890,
        name: '今日收款'
      }, {
        value: 19801,
        name: '今日销售'
      }, {
        value: 16789,
        name: '今日利润'
      }]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    charts: [{
      id: 'sale',
      name: '销售统计'
    },{
      id: 'order',
      name: '订单管理'
    }, {
      id: 'store',
      name: '库存管理'
    }, {
      id: 'hotproduct',
      name: '热销品'
    }, {
      id: 'commission',
      name: '提成统计'
    }], 
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  open: function (e) {
    wx.navigateTo({
      url: '../' + e.target.dataset.chart.id + '/' +e.target.dataset.chart.id
    });
  }
})
const sliderWidth = 96;

Page({
  mixins: [require("../../mixin/common")],
  data: {
    array1: ["全部门店", "浑南店", "和平店", "沈河店"],
    value1: 0,
    value2: 0,
    value3: 0,
    tableHeader: [
      {
        prop: "productname",
        width: 210,
        label: "商品名称",
        color: "#55C355",
      },
      {
        prop: "price",
        width: 180,
        label: "销售金额",
      },
      {
        prop: "count",
        width: 180,
        label: "销售数量",
      },
      {
        prop: "ratio",
        width: 180,
        label: "销售占比",
      },
    ],
    stripe: true,
    border: true,
    outBorder: true,
    row: [
      {
        id: 1,
        productname: "999感冒灵",
        price: "38",
        count: "2000",
        ratio: "83%",
      },
      {
        id: 2,
        productname: "蒲地蓝口服液",
        price: "45",
        count: "1500",
        ratio: "80%",
      },
      {
        id: 3,
        productname: "江中健胃消食片",
        price: "10.8",
        count: "1300",
        ratio: "75%",
      },
      {
        id: 4,
        productname: "美林布洛芬混悬液",
        price: "34.5",
        count: "800",
        ratio: "60%",
      },
      {
        id: 5,
        productname: "红霉素软膏",
        price: "34.5",
        count: "500",
        ratio: "59%",
      },
      {
        id: 6,
        productname: "医用口罩",
        price: "18",
        count: "1600",
        ratio: "85%",
      },
      {
        id: 7,
        productname: "奈敏维滴眼液",
        price: "36",
        count: "300",
        ratio: "50%",
      },
      {
        id: 8,
        productname: "二甲双胍片",
        price: "48",
        count: "680",
        ratio: "65%",
      },
      {
        id: 9,
        productname: "牛黄解毒片",
        price: "10",
        count: "400",
        ratio: "55%",
      },
    ],
    tabs: ["日", "周", "月", "自定义"],
    selected: 0,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  bindPicker1Change(e) {
    this.setData({
      value1: e.detail.value,
    });
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          sliderLeft:
            (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset:
            (res.windowWidth / that.data.tabs.length) * that.data.activeIndex,
        });
      },
    });
  },
  //tab框
  selected: function (e) {
    console.log(e);
    let that = this;
    let index = e.currentTarget.dataset.index;
    console.log(index);
    if (index == 0) {
      that.setData({
        selected: 0,
      });
    } else if (index == 1) {
      that.setData({
        selected: 1,
      });
    } else if (index == 2) {
      that.setData({
        selected: 2,
      });
    } else {
      that.setData({
        selected: 3,
      });
    }
  },
});
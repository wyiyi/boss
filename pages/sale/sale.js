const sliderWidth = 96;

Page({
  mixins: [require('../../mixin/common')],
  data: {
    array1: ['全部门店', '浑南店', '和平店', '沈河店'],
    value1: 0,
    value2: 0,
    value3: 0,
    tableHeader: [
      {
        prop: 'datetime',
        width: 150,
        label: '日期',
        color: '#55C355'
      },
      {
        prop: 'sign_in',
        width: 152,
        label: '上班时间'
      },
      {
        prop: 'sign_out',
        width: 152,
        label: '下班时间'
      },
      {
        prop: 'work_hour',
        width: 110,
        label: '工时'
      },
      {
        prop: 'statusText',
        width: 110,
        label: '状态'
      }
    ],
    stripe: true,
    border: true,
    outBorder: true,
    row: [
      {
          "id": 1,
          "status": '正常',
          "datetime": "04-01",
          "sign_in_time": '09:30:00',
          "sign_out_time": '18:30:00',
          "work_hour": 8,
      }, {
          "id": 2,
          "status": '迟到',
          "datetime": "04-02",
          "sign_in_time": '10:30:00',
          "sign_out_time": '18:30:00',
          "work_hour": 7,
      }, {
          "id": 29,
          "status": '正常',
          "datetime": "04-03",
          "sign_in_time": '09:30:00',
          "sign_out_time": '18:30:00',
          "work_hour": 8,
      }, {
          "id": 318,
          "status": '休息日',
          "datetime": "04-04",
          "sign_in_time": '',
          "sign_out_time": '',
          "work_hour": '',
      }, {
          "id": 319,
          "status": '正常',
          "datetime": "04-05",
          "sign_in_time": '09:30:00',
          "sign_out_time": '18:30:00',
          "work_hour": 8,
      }
    ],
    tabs: ['选项一', '选项二', '选项三'],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  bindPicker1Change(e) {
    this.setData({
      value1: e.detail.value,
    });
  },
  onLoad() {
    debugger
    const that = this;
    wx.getSystemInfo({
      success(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
        });
      },
    });
  },
  tabClick(e) {
    debugger
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
    });
  },
});
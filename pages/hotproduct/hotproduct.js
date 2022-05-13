Page({
  mixins: [require('../../mixin/common')],
  
  data: {
    inputShowed: false,
    inputVal: '',
    tableHeader: [
      {
        prop: 'productname',
        width: 250,
        label: '商品名称',
        color: '#55C355'
      },
      {
        prop: 'salecount',
        width: 250,
        label: '销量',
        color: '#55C355'
      },
      {
        prop: 'productprice',
        width: 250,
        label: '单价',
        color: '#55C355'
      }
    ],
    stripe: false,
    border: false,
    outBorder: true,
    row: [
      {
          "id": 1,
          "productname": '999感冒灵',
          "salecount": "2000",
          "productprice": '38'
      }, {
        "id": 2,
        "productname": '蒲地蓝口服液',
        "salecount": "1500",
        "productprice": '45'
        
       }, {
        "id": 3,
        "productname": '江中健胃消食片',
        "salecount": "1300",
        "productprice": '10.8'
      }, {
        "id": 4,
        "productname": '美林布洛芬混悬液',
        "salecount": "800",
        "productprice": '34.5'
      }
    ],
    msg: '暂无数据'
  },
  showInput() {
    this.setData({
      inputShowed: true,
    });
  },
  hideInput() {
    this.setData({
      inputVal: '',
      inputShowed: false,
    });
  },
  clearInput() {
    this.setData({
      inputVal: '',
    });
  },
  inputTyping(e) {
    this.setData({
      inputVal: e.detail.value,
    });
  },
  onRowClick: function(e) {
    console.log('e: ', e)
  }
})
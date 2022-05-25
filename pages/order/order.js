Page({
  mixins: [require('../../mixin/common')],
  viewCopyTextClick: function(){
    var _this = this
    wx.setClipboardData({
      data: _this.data.viewCopyMsg,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  }

});

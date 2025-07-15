// 配置API地址
const API_BASE_URL = 'http://localhost:8081';

Page({
  data: {
    studentId: '',
    studentInfo: null,
    showNoData: false,
    loading: false,
    firstSearch: true  // 添加标记，用于区分首次搜索
  },

  // 输入框内容变化处理
  onInputChange(e) {
    this.setData({
      studentId: e.detail.value
    });
  },

  // 查询按钮点击处理
  searchStudent() {
    const studentId = this.data.studentId.trim();
    
    if (!studentId) {
      wx.showToast({
        title: '请输入学号',
        icon: 'none'
      });
      return;
    }

    // 如果已经在加载中，防止重复请求
    if (this.data.loading) {
      return;
    }

    this.setData({ 
      loading: true,
      firstSearch: false  // 标记非首次搜索
    });

    wx.request({
      url: `${API_BASE_URL}/api/students/${studentId}`,
      method: 'GET',
      success: (res) => {
        if (res.data.code === 200 && res.data.data) {
          // 先清除旧数据，然后通过setTimeout设置新数据，避免闪烁
          this.setData({
            studentInfo: null,
            showNoData: false
          }, () => {
            setTimeout(() => {
              this.setData({
                studentInfo: res.data.data
              });
            }, 100);
          });
        } else {
          this.setData({
            studentInfo: null,
            showNoData: true
          });
        }
      },
      fail: (err) => {
        console.error('请求失败：', err);
        wx.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
        this.setData({
          studentInfo: null,
          showNoData: false
        });
      },
      complete: () => {
        this.setData({ loading: false });
      }
    });
  },

  // 页面加载
  onLoad() {
    // 检查网络状态
    wx.getNetworkType({
      success: (res) => {
        if (res.networkType === 'none') {
          wx.showToast({
            title: '请检查网络连接',
            icon: 'none'
          });
        }
      }
    });
  }
}); 
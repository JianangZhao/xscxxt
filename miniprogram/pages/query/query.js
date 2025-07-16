// pages/query/query.js
const API_BASE_URL = 'http://localhost:8081';

Page({
  data: {
    studentInfo: null,
    loading: false,
    showResult: false
  },

  // 表单提交
  submitForm(e) {
    const studentId = e.detail.value.studentId;
    if (!studentId) {
      wx.showToast({
        title: '请输入学号',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true, showResult: false });

    // 发送请求到后端
    wx.request({
      url: `${API_BASE_URL}/api/students/${studentId}`,
      method: 'GET',
      success: (res) => {
        if (res.data.code === 200) {
          this.setData({
            studentInfo: res.data.data,
            showResult: true
          });
        } else {
          wx.showToast({
            title: res.data.message || '查询失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('请求失败：', err);
        wx.showToast({
          title: '网络错误，请稍后重试',
          icon: 'none'
        });
      },
      complete: () => {
        this.setData({ loading: false });
      }
    });
  },

  // 重置表单
  resetForm() {
    this.setData({
      studentInfo: null,
      showResult: false
    });
  }
});
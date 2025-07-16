// pages/add/add.js
const API_BASE_URL = 'http://localhost:8081';

Page({
  data: {
    loading: false,
    formData: {
      studentId: '',
      name: '',
      gender: '男',
      major: '',
      className: '',
      phone: '',
      email: ''
    }
  },

  // 表单提交
  submitForm(e) {
    const formData = e.detail.value;
    
    // 表单验证
    if (!this.validateForm(formData)) {
      return;
    }

    this.setData({ loading: true });

    // 发送请求到后端
    wx.request({
      url: `${API_BASE_URL}/api/students`,
      method: 'POST',
      data: formData,
      success: (res) => {
        if (res.data.code === 200) {
          wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              // 延迟1秒后重新加载页面
              setTimeout(() => {
                // 重置表单
                this.resetForm();
              }, 1000);
            }
          });
        } else {
          wx.showToast({
            title: res.data.message || '添加失败',
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

  // 表单验证
  validateForm(data) {
    if (!data.studentId) {
      wx.showToast({
        title: '请输入学号',
        icon: 'none'
      });
      return false;
    }
    if (!data.name) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      });
      return false;
    }
    if (!data.major) {
      wx.showToast({
        title: '请输入专业',
        icon: 'none'
      });
      return false;
    }
    if (!data.className) {
      wx.showToast({
        title: '请输入班级',
        icon: 'none'
      });
      return false;
    }
    if (data.phone && !/^1\d{10}$/.test(data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      });
      return false;
    }
    if (data.email && !/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(data.email)) {
      wx.showToast({
        title: '请输入正确的邮箱',
        icon: 'none'
      });
      return false;
    }
    return true;
  },

  // 重置表单
  resetForm() {
    this.setData({
      formData: {
        studentId: '',
        name: '',
        gender: '男',
        major: '',
        className: '',
        phone: '',
        email: ''
      },
      loading: false
    });
  },

  // 页面加载
  onLoad() {
    this.resetForm();
  }
});
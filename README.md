# 学生信息查询系统

基于Spring Boot和微信小程序的学生信息管理系统，提供学生信息的查询和添加功能。

## 功能特性

- 学生信息查询
- 学生信息添加
- 表单验证
- 统一响应格式
- 全局异常处理
- 多环境配置
- 日志记录

## 技术栈

### 后端技术栈

- Spring Boot 2.x
- Spring Data JPA
- MySQL
- Lombok
- SLF4J + Logback
- Maven

### 前端技术栈

- 微信小程序
- WXML
- WXSS
- JavaScript

## 系统架构

```
smdc/
├── backend/                # 后端项目
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/     # Java源代码
│   │   │   └── resources/ # 配置文件
│   │   └── test/         # 测试代码
│   └── pom.xml           # Maven配置
│
└── miniprogram/          # 微信小程序
    ├── pages/           # 页面文件
    │   ├── index/      # 查询页面
    │   └── add/        # 添加页面
    ├── app.js          # 小程序入口
    └── app.json        # 小程序配置

```

## 快速开始

### 后端部署

1. 配置数据库
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

2. 启动应用
```bash
mvn spring-boot:run
```

### 小程序部署

1. 在微信开发者工具中导入项目
2. 修改项目配置（appid等）
3. 编译运行

## API文档

### 学生信息查询

```
GET /api/students
GET /api/students/{id}
```

### 添加学生信息

```
POST /api/students
```

请求体示例：
```json
{
  "studentId": "2024001",
  "name": "张三",
  "gender": "男"
}
```

## 环境要求

- JDK 8+
- Maven 3.6+
- MySQL 5.7+
- 微信开发者工具

## 开发环境配置

### 后端开发环境

1. 克隆项目
```bash
git clone https://github.com/your-repo/smdc.git
```

2. 导入IDE（推荐使用IntelliJ IDEA）

3. 配置application-dev.properties
```properties
server.port=8081
spring.profiles.active=dev
```

### 小程序开发环境

1. 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 导入项目目录下的miniprogram文件夹
3. 配置开发者appid

## 项目特性

- RESTful API设计
- 统一响应格式
- 全局异常处理
- 多环境配置（dev/prod）
- 日志记录
- 表单验证
- 状态管理优化

## 注意事项

1. 确保后端服务器端口（8081）未被占用
2. 小程序开发时需要有合法的appid
3. 注意配置文件中的敏感信息（如数据库密码）不要提交到版本控制系统

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交代码
4. 发起 Pull Request

## 许可证

[MIT License](LICENSE) 
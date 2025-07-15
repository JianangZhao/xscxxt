# 学生信息查询系统

这是一个基于Spring Boot + 微信小程序的学生信息查询系统，支持通过学号查询学生的详细信息。

## 项目结构

```
smdc/
├── backend/                # 后端项目
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/smdc/
│   │   │   │       ├── common/         # 公共组件
│   │   │   │       ├── controller/     # 控制器
│   │   │   │       ├── entity/         # 实体类
│   │   │   │       ├── repository/     # 数据访问层
│   │   │   │       └── service/        # 业务逻辑层
│   │   │   └── resources/
│   │   │       ├── application.properties      # 主配置文件
│   │   │       ├── application-dev.properties  # 开发环境配置
│   │   │       └── application-prod.properties # 生产环境配置
│   └── pom.xml           # Maven配置文件
│
└── miniprogram/          # 微信小程序
    ├── pages/
    │   └── index/       # 主页面
    ├── app.json         # 小程序配置
    └── project.config.json # 项目配置
```

## 技术栈

### 后端
- Spring Boot 2.7.0
- Spring Data JPA
- MySQL 8.0
- Lombok
- Springdoc OpenAPI

### 前端
- 微信小程序原生开发

## 快速开始

### 1. 数据库配置
1. 创建MySQL数据库：
```sql
CREATE DATABASE student_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. 执行初始化SQL脚本：
```sql
-- 见 init.sql 文件
```

### 2. 后端配置
1. 修改数据库配置（application-dev.properties）：
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

2. 运行Spring Boot应用：
```bash
mvn spring-boot:run
```

3. 访问API文档：
- 开发环境：http://localhost:8080/swagger-ui.html

### 3. 微信小程序配置
1. 在微信开发者工具中导入项目
2. 修改project.config.json中的appid
3. 修改index.js中的API_BASE_URL为你的后端服务地址
4. 开发环境可关闭域名校验

## API接口

### 查询学生信息
- 请求方式：GET
- 接口地址：/api/students/{studentId}
- 参数说明：
  - studentId: 学号（路径参数）
- 返回格式：
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "studentId": "2021001",
        "name": "张三",
        "gender": "男",
        "major": "计算机科学",
        "className": "计算机2班",
        "phone": "13800138001",
        "email": "zhangsan@example.com"
    }
}
```

## 部署说明

### 后端部署
1. 打包：
```bash
mvn clean package
```

2. 运行：
```bash
java -jar target/smdc-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
```

### 小程序发布
1. 在微信开发者工具中上传代码
2. 在小程序管理后台提交审核
3. 发布上线

## 注意事项
1. 生产环境必须使用HTTPS
2. 需要在小程序管理后台配置服务器域名
3. 生产环境应该限制CORS的域名范围
4. 建议添加接口访问频率限制
5. 数据库密码应该使用环境变量或配置中心管理

## 开发团队
- 后端开发：[您的名字]
- 前端开发：[您的名字]

## 版本历史
- v1.0.0 (2024-01-xx)
  - 实现基本的学生信息查询功能
  - 支持微信小程序查询界面
  - 添加API文档
  - 配置开发和生产环境 
-- 创建数据库
CREATE DATABASE IF NOT EXISTS student_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE student_db;

-- 创建学生表
CREATE TABLE IF NOT EXISTS students (
    student_id VARCHAR(20) PRIMARY KEY COMMENT '学号',
    name VARCHAR(50) NOT NULL COMMENT '姓名',
    gender VARCHAR(10) COMMENT '性别',
    major VARCHAR(50) COMMENT '专业',
    class_name VARCHAR(50) COMMENT '班级',
    phone VARCHAR(20) COMMENT '联系电话',
    email VARCHAR(100) COMMENT '邮箱',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    INDEX idx_name (name) COMMENT '姓名索引',
    INDEX idx_major (major) COMMENT '专业索引',
    INDEX idx_class (class_name) COMMENT '班级索引'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='学生信息表';

-- 插入测试数据
INSERT INTO students (student_id, name, gender, major, class_name, phone, email) 
VALUES 
('2021001', '张三', '男', '计算机科学', '计算机2班', '13800138001', 'zhangsan@example.com'),
('2021002', '李四', '女', '软件工程', '软件1班', '13800138002', 'lisi@example.com'),
('2021003', '王五', '男', '人工智能', 'AI1班', '13800138003', 'wangwu@example.com'),
('2021004', '赵六', '女', '数据科学', '数据1班', '13800138004', 'zhaoliu@example.com'),
('2021005', '孙七', '男', '计算机科学', '计算机1班', '13800138005', 'sunqi@example.com');

-- 创建用户并授权（根据实际情况修改用户名和密码）
-- CREATE USER 'student_app'@'localhost' IDENTIFIED BY 'your_password';
-- GRANT ALL PRIVILEGES ON student_db.* TO 'student_app'@'localhost';
-- FLUSH PRIVILEGES;

-- 查看表结构
DESCRIBE students;

-- 查看测试数据
SELECT * FROM students; 
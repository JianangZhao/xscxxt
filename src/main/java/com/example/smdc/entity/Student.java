package com.example.smdc.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "students")
public class Student {
    @Id
    @Column(length = 20)
    private String studentId;  // 学号
    
    @Column(nullable = false, length = 50)
    private String name;      // 姓名
    
    @Column(length = 10)
    private String gender;    // 性别
    
    @Column(length = 50)
    private String major;     // 专业
    
    @Column(length = 50)
    private String className; // 班级
    
    @Column(length = 20)
    private String phone;     // 联系电话
    
    @Column(length = 100)
    private String email;     // 邮箱
} 
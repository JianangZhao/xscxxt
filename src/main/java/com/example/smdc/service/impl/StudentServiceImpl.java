package com.example.smdc.service.impl;

import com.example.smdc.entity.Student;
import com.example.smdc.repository.StudentRepository;
import com.example.smdc.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Slf4j
@Service
public class StudentServiceImpl implements StudentService {
    
    private final StudentRepository studentRepository;
    
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    
    @Override
    public Student getStudentByStudentId(String studentId) {
        if (!StringUtils.hasText(studentId)) {
            log.error("学号不能为空");
            throw new IllegalArgumentException("学号不能为空");
        }
        
        log.info("查询学号为 {} 的学生信息", studentId);
        Student student = studentRepository.findByStudentId(studentId);
        
        if (student == null) {
            log.warn("未找到学号为 {} 的学生信息", studentId);
        } else {
            log.debug("查询到学生信息: {}", student);
        }
        
        return student;
    }

    @Override
    public Student createStudent(Student student) {
        // 参数验证
        if (student == null) {
            log.error("学生信息不能为空");
            throw new IllegalArgumentException("学生信息不能为空");
        }
        if (!StringUtils.hasText(student.getStudentId())) {
            log.error("学号不能为空");
            throw new IllegalArgumentException("学号不能为空");
        }
        if (!StringUtils.hasText(student.getName())) {
            log.error("姓名不能为空");
            throw new IllegalArgumentException("姓名不能为空");
        }

        log.info("创建新学生信息: {}", student);
        return studentRepository.save(student);
    }
} 
package com.example.smdc.repository;

import com.example.smdc.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
    // 根据学号查询学生信息
    Student findByStudentId(String studentId);
} 
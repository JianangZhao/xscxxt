package com.example.smdc.controller;

import com.example.smdc.common.Result;
import com.example.smdc.entity.Student;
import com.example.smdc.service.StudentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(name = "学生信息管理", description = "学生信息查询相关接口")
@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*")
public class StudentController {
    
    private final StudentService studentService;
    
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    
    @Operation(summary = "查询学生信息", description = "根据学号查询学生详细信息")
    @GetMapping("/{studentId}")
    public Result<Student> getStudentInfo(
            @Parameter(description = "学号", required = true, example = "2021001")
            @PathVariable String studentId) {
        Student student = studentService.getStudentByStudentId(studentId);
        if (student == null) {
            return Result.error(404, "未找到该学生信息");
        }
        return Result.success(student);
    }

    @Operation(summary = "添加学生信息", description = "添加新的学生信息")
    @PostMapping
    public Result<Student> createStudent(@RequestBody Student student) {
        // 检查学号是否已存在
        if (studentService.getStudentByStudentId(student.getStudentId()) != null) {
            return Result.error(400, "该学号已存在");
        }
        
        Student savedStudent = studentService.createStudent(student);
        return Result.success(savedStudent);
    }
} 
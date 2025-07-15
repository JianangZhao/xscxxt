package com.example.smdc.common;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public Result<String> handleException(Exception e) {
        return Result.error(500, "服务器内部错误：" + e.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public Result<String> handleIllegalArgumentException(IllegalArgumentException e) {
        return Result.error(400, "请求参数错误：" + e.getMessage());
    }
} 
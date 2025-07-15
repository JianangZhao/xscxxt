package com.example.smdc.common;

import lombok.Data;

@Data
public class Result<T> {
    private Integer code;     // 状态码
    private String message;   // 提示信息
    private T data;          // 数据

    public static <T> Result<T> success(T data) {
        Result<T> result = new Result<>();
        result.setCode(200);
        result.setMessage("success");
        result.setData(data);
        return result;
    }

    public static <T> Result<T> error(Integer code, String message) {
        Result<T> result = new Result<>();
        result.setCode(code);
        result.setMessage(message);
        return result;
    }
} 
package com.mafu.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by liuqq on 2015/5/8.
 */
@Controller
@RequestMapping("/student")
public class StudentController {

    @RequestMapping(value="/getAll",method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> getStudents() {
        Map<String, Object> data = new HashMap<>();
        data.put("data", "123123");
        return data;
    }
}

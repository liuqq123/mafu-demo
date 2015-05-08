package com.mafu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

/**
 * @author liuqq
 * @date 2015/5/8
 */
@Controller
@RequestMapping("/mafu/student")
public class StudentController {
    static class Student {
        private String id;
        private String name;
        private int age;

        public Student(String id, String name, int age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }

    private static List<Student> students = Arrays.asList(new Student[]{
            new Student("1", "张三", 23),
            new Student("2", "李四", 22)
    });

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> getAllStudents() {
        Map<String, Object> results = new HashMap<>();
        results.put("data", students);
        return results;
    }

    @RequestMapping(value="{id}",method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> getStudentById(@PathVariable String id) {
        Map<String, Object> results = new HashMap<>();



        results.put("data", students);
        return results;
    }
}

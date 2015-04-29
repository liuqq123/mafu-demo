package com.mafu.objExample;

/**
 * Created by liuqq on 2015/4/29.
 */
public class TestObject {

    public static void main(String[] args) {
        int a = 2;
        int b = 3;

        boolean compareAAndB = a == b;

        String strA = "hello";
        String strB = "hello";

        boolean compareStrAAndStrB = strA == strB;

        System.out.println(compareAAndB);
        System.out.println(compareStrAAndStrB);
    }
}

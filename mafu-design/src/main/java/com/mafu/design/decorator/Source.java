package com.mafu.design.decorator;

/**
 * Created by liuqq on 2015/4/17.
 */
public class Source implements Sourceable {
    @Override
    public void method1() {
        System.out.println("decorator: this is method1");
    }
}

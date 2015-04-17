package com.mafu.design.decorator;

/**
 * Created by liuqq on 2015/4/17.
 */
public class Decorator implements Sourceable {

    private Sourceable source;

    public Decorator(Sourceable source) {
        this.source = source;
    }

    @Override
    public void method1() {
        System.out.println("before method1");
        source.method1();
        System.out.println("after method2");
    }
}

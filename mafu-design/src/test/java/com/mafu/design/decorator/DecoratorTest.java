package com.mafu.design.decorator;

import org.junit.Test;

import static org.junit.Assert.*;

public class DecoratorTest {

    @Test
    public void test() {
        Sourceable source = new Source();
        Sourceable sourceable = new Decorator(source);

        sourceable.method1();
    }

}
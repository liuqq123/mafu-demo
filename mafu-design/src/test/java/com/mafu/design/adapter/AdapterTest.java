package com.mafu.design.adapter;

import org.junit.Test;

import static org.junit.Assert.*;

public class AdapterTest {

    @Test
    public void testMethod2() throws Exception {
        Targetable adapter = new Adapter();
        adapter.method1();
        adapter.method2();
    }

    @Test
    public void testWrapper() throws Exception {
        Sourceable sourceable = new SourceSub1();
        sourceable.method1();
        sourceable.method2();
        System.out.println("===============================================");
        Sourceable sourceable2 = new SourceSub2();
        sourceable2.method1();
        sourceable2.method2();
    }
}
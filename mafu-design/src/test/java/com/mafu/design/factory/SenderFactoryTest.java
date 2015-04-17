package com.mafu.design.factory;

import org.junit.Test;

import static org.junit.Assert.*;

public class SenderFactoryTest {

    @Test
    public void testProduceMailSender() throws Exception {
//      SenderFactory.produceMailSender().send();

        Provider provider = new SendMailFactory();
        provider.produce().send();
    }

    @Test
    public void testProduceSmsSender() throws Exception {
        SenderFactory.produceSmsSender().send();
    }
}
package com.mafu.design.factory;

/**
 * Created by liuqq on 2015/4/17.
 */
public class SmsSender implements Sender{

    @Override
    public void send() {
        System.out.println("this is sms sender");
    }
}

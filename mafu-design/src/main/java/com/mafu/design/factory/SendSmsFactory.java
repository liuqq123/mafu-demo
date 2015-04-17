package com.mafu.design.factory;

/**
 * Created by liuqq on 2015/4/17.
 */
public class SendSmsFactory implements Provider {
    @Override
    public Sender produce() {
        return new SmsSender();
    }
}

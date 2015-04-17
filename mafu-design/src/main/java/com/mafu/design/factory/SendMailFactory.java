package com.mafu.design.factory;

/**
 * Created by liuqq on 2015/4/17.
 */
public class SendMailFactory implements Provider {
    @Override
    public Sender produce() {
        return new MailSender();
    }
}

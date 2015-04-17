package com.mafu.design.prototype;

/**
 * 原型
 */
public class Prototype implements Cloneable {

    public Prototype clone() throws CloneNotSupportedException {
        Prototype prototype = (Prototype) super.clone();
        return prototype;
    }
}

package com.mafu.objExample;

import java.util.Random;

/**
 * Created by liuqq on 2015/4/24.
 */
public class Player {
    int number;
    String name;
    Player(String name) {
        this.name = name;
    }

    void guess() {
        number = (int) (Math.random() * 10);
        System.out.println(this.name + "猜" + number);
    }
}

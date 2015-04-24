package com.mafu.objExample;

/**
 * Created by liuqq on 2015/4/24.
 */
public class GuessGame {
    Player p1;
    Player p2;
    Player p3;


    public void startGame() {
        p1 = new Player("张三");
        p2 = new Player("王五");
        p3 = new Player("李四");

        int numberTarget = (int) (Math.random() * 10);
        int num = 1;
        while (true) {
            System.out.println("第" + num + "轮开始");
            System.out.println("谜底答案是: " + numberTarget);

            p1.guess();
            p2.guess();
            p3.guess();


            int p1Number = p1.number;
            int p2Number = p2.number;
            int p3Number = p3.number;

            if (p1Number == numberTarget || p2Number == numberTarget || p3Number == numberTarget) {
                System.out.println("game over");
                break;
            }
            num++;
        }

    }
}

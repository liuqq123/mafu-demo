/**
 * Created by liuqq on 2015/5/15.
 */
(function () {
    /******************************
     * 对象通过引用来传递
     ******************************/
    //a,b,c 都引用一个不同的空对象
    var a = {}, b = {}, c = {};
    a.name = 'zhangsan';
    //console.log(b);
    //a,b,c 都引用同一个空对象
    var a1 = b1 = c1 = {};
    a1.name = 'zhangsan';
    //console.log(b1);

    var helper = function () {
        //console.log(this);
    };
    helper();


    /************************************
     * 构造函数
     ************************************/
    var Student = function (name) {
        this.name = name;
    };
    Student.prototype.sayHello = function () {
        console.log('hello,' + this.name);
    };

    var xiaoming = new Student('xiaoming');
    xiaoming.sayHello();
    var zhangsan = new Student('zhangsan');
    zhangsan.sayHello();

    /************************************
     * Apply 调用模式
     ************************************/

    var add = function (a, b) {
        return a + b;
    };

    var array = [1, 2];

    var sum = add.apply(null, array);
    console.log(sum);

    var wangwu = {
        name: 'wangwu'
    };

    Student.prototype.sayHello.apply(wangwu);

    var getElement = {
        move: function () {
            console.log('move');
            return this;
        },
        color: function () {
            console.log('color');
            return this;
        }
    };

    getElement.color().move();


})();
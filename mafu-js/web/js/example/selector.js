/**
 * Created by liuqq on 2015/4/21.
 */
/**************************************************************************
 * jquery选择器
 * Selector选择器就是"一个表示特殊语意的字符串"
 *************************************************************************/

/**************************************************************************
 * jQuery选择器按照功能主要分为"选择"和"过滤". 并且是配合使用的. 可以同时使用组合成一个选择器字符串.
 * 主要的区别是"过滤"作用的选择器是指定条件从前面匹配的内容中筛选,
 * "过滤"选择器也可以单独使用, 表示从全部"*"中筛选
 *************************************************************************/

/**************************************************************************
 * 基础选择器
 * 1. #id     id选择器            $('#testDiv')选择id为testDiv的元素
 * 2. element 根据元素名称选择      $('a')选择所有a标签
 * 3. .class  样式选择器
 * 4. *       选择所有
 *************************************************************************/
var idSelector = $('#testDiv');
var classSelector = $('.box');
var tagSelector = $('a');
//console.log(idSelector);
//console.log(classSelector);
//console.log(tagSelector);


/**************************************************************************
 * 层次选择器
 *************************************************************************/
//获取id为divBox下面所有的span元素
var spanList = $('#divBox span');
//console.log(spanList);

//parent > child 选择parent的直接子节点child. child必须包含在parent中并且父类是parent元素.
var childSpan = $('#divBox>span');
//console.log(childSpan);

//prev+next  prev和next是两个同级别的元素. 选中在prev元素后面的next元素. $("#hibiscus+img")选在id为hibiscus元素后面的img对象.
var prevNextA = $('#divBox+a');
//console.log(prevNextA);

//prev ~ siblings 选择prev后面的根据siblings过滤的元素 注:siblings是过滤器
//获取id为divBox后面带有titlt的元素
var prevNextB = $('#divBox~[title]');
//console.log(prevNextB);

/**************************************************************************
 * 基本过滤器
 * ************************************************************************
 * :first 匹配找到的第一个元素
 * :last 匹配找到的最后一个元素
 * :not(selector) 去除所有与给定选择器匹配的元素
 * :even 匹配所有索引为偶数的元素，从0开始计数
 * :odd 匹配所有索引为奇数的元素，从0开始计数
 * :eq(index) 匹配一个给定索引值得元素,index从0开始
 * :gt(index) 匹配大于指定索引的元素
 * :lt(index) 匹配小于指定索引的元素
 * :header 选择所有h1,h2,h3一类的header标签.
 * :animated 匹配所有正在执行动画效果的元素
 * ************************************************************************
 * 内容过滤器
 * ************************************************************************
 * :contains(text) 匹配包含给定文本的元素
 * :empty 匹配所有不包含子元素或者文本的空元素
 * :has(selector) 匹配含有选择器所匹配的元素的元素
 * :parent 匹配含有子元素或者文本的元素
 * ***********************************************************************
 * 可见性过滤器
 * :hidden 匹配所有隐藏的元素
 * :visible 匹配所有可见的元素
 *
 * ***********************************************************************
 * 属性过滤器
 * [attribute] 匹配包含给定属性的元素 查找所有包含id属性的div元素：$('div[id]')
 * [attribute=value] 匹配给定的属性是某个特定值的元素 查找所有name值为txt的input元素：$('input[name="txt"]');
 * [attribute!=value] 匹配给定的属性是不包含某个特定值的元素
 * [attribute^=value] 匹配给定的属性是以某些值开始的元素
 * [attribute$=value] 匹配给定的属性是以某些值结尾的元素
 * [attribute*=value] 匹配给定的属性是以包含某些值的元素
 *************************************************************************/
// :first 匹配找到的第一个元素
var firstSpan = $('#divBox span:first');
//console.log(firstSpan);
//
var lastSpan = $('#divBox span:last');
//console.log(lastSpan);
//:not(selector) 去除所有与给定选择器匹配的元素
//:even 匹配所有索引为偶数的元素，从0开始计数
//给偶数行添加背景色
var osTr = $('tr :even');
osTr.addClass('bg');

//取#divBox div中第二个span
var spanEqTwo = $('#divBox span:eq(1)');


var a = $('input[name="txtName"]');

var b = $('input[name!="txtName"]');
//console.log(b);
var c = $('input[name^="txt"]');
var d = $('input[name$="Text"]');
//console.log(d);
/***********************************************************************
 * 表单选择器
 * :input 匹配所有 input, textarea, select 和 button 元素
 * :text 匹配所有文本框
 * :password 匹配所有密码框
 * :radio 匹配所有单选按钮
 * :checkbox 匹配所有复选框
 * :submit 匹配所有提交按钮
 * :image 匹配所有图像域
 * :reset 匹配所有重置按钮
 * :button 匹配所有按钮
 * :file 匹配所有文件域
 ***********************************************************************/
(function () {
    var a = $(':input');
    var buttons = $(':button');
    var submits = $(':submit');

    //console.log(submits);
})();
/***********************************************************************
 * 表单过滤器
 * :enabled 匹配所有可用元素 查找所有可用的input元素: $("input:enabled")
 * :disabled 匹配所有不可用元素 查找所有不可用的input元素: $("input:disabled")
 * :checked 匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option) 查找所有选中的复选框元素: $("input:checked")
 * :selected 匹配所有选中的option元素 查找所有选中的选项元素: $("select option:selected")
 ***********************************************************************/


$(function () {
    /*var array = [0, 1, 2, 3];
    $.each(array, function (item) {
        if (item === 2) {
            return false;
        }
        console.log(item);
    });*/

    var spanSize = $('input').size();
    console.log(spanSize);
});




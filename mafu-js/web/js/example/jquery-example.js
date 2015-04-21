/**
 * Created by liuqq on 2015/4/21.
 */

$('#btnShow').bind('click', function (event) {
    $('#divMsg').show();
});

$('#btnHide').bind('click', function (event) {
    $('#divMsg').hide();
});

$('#btnChange').bind('click', function (event) {
    $('#divMsg').html('Hello World,too!');
});

/***********************************************
 * Dom元素和jquery包装集
 ***********************************************/
var domTarget = document.getElementById('divMsg');//DOM元素
var jqTarget = $('#divMsg');
//将DOM元素转换成jquery包装集
var element = $(domTarget);
//将包装集转换成DOM
var convertElement = jqTarget[0];
/************************************************
 *jQuery包装集的某些遍历方法,比如each()中, 可以传递遍历函数, 在遍历函数中的this也DOM元素
 ************************************************/
$('#divEach').each(function () {
    console.log(this);
});
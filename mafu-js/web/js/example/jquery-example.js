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

console.log($('#divMsg'));
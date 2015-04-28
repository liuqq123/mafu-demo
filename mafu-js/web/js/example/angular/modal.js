/**
 * Created by liuqq on 2015/4/27.
 */
angular.module('ModalModule',['ui.bootstrap.modal']).controller('ModalCtrl', function ($scope,$modal) {
    $scope.showModal = function () {
        /**
         * $modal.open 参数详解

         templateUrl：模态窗口的地址
         template：用于显示html标签
         scope：一个作用域为模态的内容使用（事实上，$modal会创建一个当前作用域的子作用域）默认为$rootScope
         controller：为$modal指定的控制器，初始化$scope，该控制器可用$modalInstance注入
         resolve：定义一个成员并将他传递给$modal指定的控制器，相当于routes的一个reslove属性，如果需要传递一个objec对象，需要使用angular.copy()
         backdrop：控制背景，允许的值：true（默认），false（无背景），“static” - 背景是存在的，但点击模态窗口之外时，模态窗口不关闭
         keyboard：当按下Esc时，模态对话框是否关闭，默认为ture
         windowClass：指定一个class并被添加到模态窗口中

         open方法返回一个模态实例，该实例有如下属性
         close(result)：关闭模态窗口并传递一个结果
         dismiss(reason)：撤销模态方法并传递一个原因
         result：一个契约，当模态窗口被关闭或撤销时传递
         opened：一个契约，当模态窗口打开并且加载完内容时传递的变量
         */
        var modalPiecesInstance = $modal.open({
            templateUrl: window.ctx + "/html/demo/modal-tmp.html",
            controller: 'ModalTmpDemoController',
            size: 'lg',//'lg' or 'sm'
            width: '1000px',
            resolve: {
                textValue: function () {
                    return $scope.textValue;
                }
            },
            backdrop: 'true'
        });
        modalPiecesInstance.result.then(function (result) {
            alert('接收到子页面的参数：'+result);
        });
        modalPiecesInstance.opened.then(function () {
            console.log('打开');
        });
    };
});
/**
 *
 * @author liuqq
 * @date 2015/5/7
 */
define(['angular', 'frame/http/Resource'], function (angular) {
    return angular.module('IndexModule', ['cargo.http.Resource']).controller('IndexController', function ($scope, Resource) {
        var Users = Resource(window.basePath + '/user/test/:id',{id:'@id'});

        //$scope.user = {};

        //Users.save($scope.user);


        //$scope.userList = Users.get();




    });
});

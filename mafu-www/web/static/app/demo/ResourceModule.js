/**
 *
 * @author liuqq
 * @date 2015/5/7
 */
define(['angular', 'frame/http/Resource'], function (angular) {
    return angular.module('ResourceModule', ['cargo.http.Resource']).controller('ResourceController', function ($scope, Resource) {
        var Users = Resource(window.basePath + '/user/:id',{id:'@id'});

        /*Users.get({id:'123'},function (data) {
            console.log(data);
        });*/

        /*Users.delete({id:'123'},function (data) {
            console.log(data);
        });*/

        var user = {
            uid:'123456'
        };

        Users.save(user,function (data) {
            console.log(data);
        });
    });
});

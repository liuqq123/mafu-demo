/**
 *
 * @author liuqq
 * @date 2015/5/7
 */
define(['angular', 'angular-resource'], function (angular) {
    return angular.module('cargo.http.Resource', ['ngResource']).factory('Resource', function ($resource) {
        return function (url, params, methods) {

            var defaults = {
                update: {method: 'put'},
                create: {method: 'post'}
            }, resource;

            methods = angular.extend(defaults, methods);

            resource = $resource(url, params, methods);

            resource.prototype.$save = function () {
                if (!this.id) {
                    return this.$create();
                }
                else {
                    return this.$update();
                }
            };

            return resource;
        }
    });
});
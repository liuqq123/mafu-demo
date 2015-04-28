/**
 * Created by Jeng on 2014/5/30
 * Description:
 * Remark:  模块中依赖template文件夹中的模板html，需要对源码的templateUrl进行修改，指定正确的template文件夹路径
 *      ngBootstrapTemplatePath = "resources/js/lib/ng-bootstrap/";
 */

    window.ngBootstrapTemplatePath = "/bower_components/ui-bootstrap/";
    angular.module("NgBootstrapModule",['ui.bootstrap.modal']);
    /**
     * angular.module('ui.bootstrap.transition');
     * angular.module('ui.bootstrap.modal');
     * modal.js源码修改点
     * 1.添加ng-bootstrap-template模板路径，
     * 2.添加dialog宽度配置width
     *      1)添加模板宽度 ng-style="{'width': width }"
     *      2)添加modal.js属性width配置
     */

/**
 *
 * @author liuqq
 * @date 2015/5/7
 */
define(['require'], function (require) {
    var scripts = document.getElementsByTagName('script'),
        i = scripts.length - 1,
        moduleNames = [],
        script, bootstrapModules, len, path, moduleName;

    function evalObject(script) {
        return Function('return ' + script + '')();
    }

    function isArray(source) {
        return Object.prototype.toString.call(source) === '[object Array]';
    }

    while (i >= 0 && !bootstrapModules) {
        script = scripts[i];
        bootstrapModules = script.getAttribute('data-bootstrap-modules');
        i--;
    }
    if (!bootstrapModules) {
        throw new Error('DynamicModuleLoader require a script block defined \'data-bootstrap-modules\' attribute,  it\'s a string or array of module names.');
    }
    bootstrapModules = evalObject(bootstrapModules);
    if (typeof bootstrapModules === 'string') {
        bootstrapModules = [bootstrapModules];
    }
    if (isArray(bootstrapModules)) {
        for (i = 0, len = bootstrapModules.length; i < len; i++) {
            path = bootstrapModules[i];
            moduleName = path.substring(path.lastIndexOf('/') + 1);
            if (!!moduleName) {
                moduleNames.push(moduleName);
            }
        }
        if (moduleNames.length === bootstrapModules.length) {
            require(['angular'].concat(bootstrapModules), function (angular) {
                /*dir.mockData = {
                 'dir': 'mock'
                 };*/
                angular.bootstrap(document, moduleNames);
            });
            return;
        }
    }
    throw new Error('动态启动失败，请检查模块名称是否正确.');
});
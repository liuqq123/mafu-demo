require.config({
    baseUrl: window.ctx + '/static/app',
    paths: {
        'jquery': window.ctx + '/static/lib/jquery/jquery',
        'angular': window.ctx + '/static/lib/angular/angular',
        'angular-resource': window.ctx + '/static/lib/angular/angular-resource'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-resource': {
            deps: ['angular']
        }
    },
    urlArgs: 'v=' + (new Date()).getTime(),
    deps: ['loader']
});

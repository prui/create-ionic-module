(function() {
    'use strict';

    angular.module('BaseRouter', [])
        .config(BaseRouter);


    function BaseRouter($stateProvider, USER_ROLES, $urlRouterProvider) {
        'ngInject';
        $stateProvider
            .state('app.Base', {
                url: "/base",
                views: {
                    'menuContent': {
                        templateUrl: 'Base/Base.html',
                        controller: 'BaseCtrl',
                        controllerAs: 'vm'
                    }
                },
                allowAnonymous: false,
                authorizedRoles: [USER_ROLES.all]
            });
    }
}());

angular.module("main.module", ['app.controllers', 'app.services', 'app.directives', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            })
            .when("/order_console", {
                templateUrl: "templates/order_management_page.html",
                controller: 'OrderManagementCtrl'
            });
    });

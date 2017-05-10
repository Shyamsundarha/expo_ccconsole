angular.module("app.controllers", [])
    .controller("MainCtrl", ['RestServices', '$location', 'CacheManagerService', '$route',
        function(RestServices, $location, CacheManagerService, $route) {
            RestServices.getEmployeeDetails().then(
                function(empDetails) {
                    CacheManagerService.setData("merchantId", empDetails.data.merchant_id);
                    CacheManagerService.setData("appId", empDetails.data.app_id);
                    $location.path("/order_console");
                    $route.reload();
                },
                function(error) {
                    $location.path("/login");
                });
        }
    ]);

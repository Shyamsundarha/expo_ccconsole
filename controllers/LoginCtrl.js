angular.module("app.controllers")
    .controller('LoginCtrl', ['$scope', 'RestServices', '$location',
        'CacheManagerService', 'ConstServices',
        function($scope, RestServices, $location, CacheManagerService,
            ConstServices) {
            $scope.employee = {};
            $scope.employee.email;
            $scope.employee.password;
            $scope.onLogin = function() {
                RestServices.login($scope.employee).then(function(
                        response) {
                        console.log(response);
                        CacheManagerService.setData("merchantId",
                            response.data.merchant_id.$oid);
                        CacheManagerService.setData("appId",
                            response.data
                            .app_id);
                        $location.path("/order_console")
                    },
                    function(error) {
                        alert("Login unsuccessfull");
                    })
            };
        }


    ]);

angular.module("app.controllers")
    .controller("OrderManagementCtrl", ['$controller', '$scope',
        'CacheManagerService',
        function($controller, $scope, CacheManagerService) {
            $controller('OrderSummaryCtrl', { $scope: $scope });
            $controller('CatalogCtrl', { $scope: $scope });
            $controller('CategoryDetailsCtrl', { $scope: $scope });
            $controller('BookAppointmentCtrl', { $scope: $scope });
            $controller('HeaderBarCtrl', { $scope: $scope });
        }
    ])

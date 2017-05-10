angular.module('app.controllers')
    .controller('CategoryDetailsCtrl', ['$scope', 'RestServices', 'CacheManagerService',


        function($scope, RestServices, CacheManagerService) {

            $scope.clicked = 0;
            $scope.clickMe = function() {
                if ($scope.clicked == 0) $scope.clicked = 1;
                else
                    $scope.clicked = 0;
            };
        }
    ]);

angular.module('app.controllers')
    .controller('HeaderBarCtrl', ['$scope', '$window', '$location',
        'RestServices', 'CacheManagerService',
        function($scope, $window, $location, RestServices,
            CacheManagerService) {

            $scope.logoutBtn = function() {
                RestServices.logout().then(function(response) {
                    CacheManagerService.clearCache();
                    /* $window.location.reload();*/
                    $location.path("/login");
                }, function(error) {
                    alert("Login unsuccessfull");
                });

            }
        }
    ])

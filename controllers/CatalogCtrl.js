angular.module('app.controllers')
    .controller('CatalogCtrl', ['$scope', 'RestServices', 'CacheManagerService',
        function($scope, RestServices, CacheManagerService) {
            $scope.catalog = {};

            function loadCatalog() {
                var params = {};
                params.merchantId = CacheManagerService.getData("merchantId");
                if (!params.merchantId || null == params.merchantId) {
                    return;
                } else {
                    RestServices.getCatalog(params).then(
                        function(categories) {
                            $scope.mainCategories = categories.data

                        },
                        function(error) {
                            alert("categorydetails_error_response");
                        });
                }

                $scope.onCategoryItemClick = function(selectedItem) {

                    $scope.category = selectedItem
                }
            }

            loadCatalog();
        }
    ]);

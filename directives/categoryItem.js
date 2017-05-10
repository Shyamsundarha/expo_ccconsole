angular.module("app.directives", [])
    .directive('categoryItem', function() {
            return {
                scope: {
                    data: '=',
                    click: '&'
                },
                templateUrl: "templates/category_item.html",
                controller: 'categoryDetailsCtrl'
                link: function(scope, element, attrs) {
                    $(element).on('click', function(e) {
                        scope.click();
                    });
                });
        }
    }
    /*  $scope.clickMe = function() {
            $scope.clicked = 0;
            if ($scope.clicked == 0) $scope.clicked = 1;
            else
                $scope.clicked = 0;
        };
*/
});

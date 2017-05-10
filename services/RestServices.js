angular.module("app.services")
    .factory("RestServices", ['ConstServices', '$http', function(
        ConstServices, $http) {
        function login(params) {
            return $http.post(ConstServices.host +
                "/employees/sign_in.json", { "employee": params });
        }

        function logout() {
            return $http.delete(ConstServices.host +
                "/employees/sign_out.json");
        }

        function getCatalog(params) {
            return $http.get(ConstServices.host +
                "/catalog.json?merchant_id=" + params.merchantId
                /*+
                               "&type=services&filter=full_catalog"*/
            );
        }

        function getCategoryDetails(params) {
            return $http.get(ConstServices.host +
                "/catalog.json?merchant_id=" + params.merchantId);
        }

        function searchCustomer(params) {

        }

        function getEmployeeDetails() {
            return $http.get(ConstServices.host + "/employee.json");
        }

        return {
            login: login,
            getCatalog: getCatalog,
            getCategoryDetails: getCategoryDetails,
            searchCustomer: searchCustomer,
            getEmployeeDetails: getEmployeeDetails,
            logout: logout
        }
    }])

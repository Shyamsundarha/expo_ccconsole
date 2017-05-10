angular.module("app.services")
    .factory("CacheManagerService", [function() {
        var cacheData = {};

        function getData(key) {

            return cacheData[key];
        }

        function setData(key, value) {
            cacheData[key] = value;

        }

        function clearData(key) {
            delete cacheData[key];
        }

        function clearCache() {
            cacheData = {};
        }
        return {
            getData: getData,
            setData: setData,
            clearData: clearData,
            clearCache: clearCache
        }
    }])



/*function getData(key) {
            console.log("getData() key=" + key);
            console.log("value=");
            console.log(cacheData[key]);
            return cacheData[key];
        }

        function setData(key, value) {
            cacheData[key] = value;
            console.log("cacheData=");
            console.log(cacheData);
        }*/

(function () {
    'use strict';

    angular
        .module('gladys')
        .factory('netatmoService', netatmoService);

    netatmoService.$inject = ['$http','$q'];

    function netatmoService($http, $q) {

        return {
            setMode: setMode
        }

        function request(method, url, data){
            var deferred = $q.defer();

            $http({method: method, url: url, data: data})
            .success(function(data, status, headers, config){
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config){
                if(status === 400){
                  deferred.reject(data);
                }
            });

            return deferred.promise;

        }

        function setMode(params) {
            return request('POST', '/module/netatmo/'+params.mode, params);
        }
    }
})();
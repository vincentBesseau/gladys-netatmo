(function () {
    'use strict';

    angular
    .module('gladys')
    .controller('netatmoCtrl', netatmoCtrl);

    netatmoCtrl.$inject = ['netatmoService', 'deviceService', 'paramService', '$scope', '$q', 'moment'];

    function netatmoCtrl(netatmoService, deviceService, paramService, $scope, $q, moment){

        var vm = this;

        vm.showManual = false
        vm.showButton = false
        vm.thermostat = {}

        vm.modes = [
            {
            "idMode": 0,
            "name": "program"
            }, 
            {
            "idMode": 1,
            "name": "away"
            }, 
            {
            "idMode": 2,
            "name": "hg"
            }, 
            {
            "idMode": 3,
            "name": "manual"
            }, 
            {
            "idMode": 4,
            "name": "max"
            }, 
            {
            "idMode": 5,
            "name": "off"
            }
        ];

        deviceService.get()
        .then(function(devices) {
            devices = devices.data;
            var dev;
            for(var i = 0; i < devices.length; i++) {
                if(devices[i].service === 'netatmo') {
                    dev = devices[i].id;
                }
            }
            return dev;
        })
        // Get device types for netatmo device
        .then(function(device) {
            return deviceService.getDeviceTypesDevice(device);
        })
        .then(function(deviceTypes) {
            for(var i = 0; i < deviceTypes.data.length; i++) {
              if(deviceTypes.data[i].type === 'Température') {
                var temperature = deviceTypes.data[i].id;
              }
              if(deviceTypes.data[i].type === 'Consigne') {
                var consigne = deviceTypes.data[i].id;
              }
              if(deviceTypes.data[i].type === 'Mode') {
                var mode = deviceTypes.data[i].id;
              }
            }
            
            deviceService.getStates(temperature)
            .then(function(temperature) {
                // Get temperature value
                vm.thermostat.temperature = temperature.data[0].value;
            })

            deviceService.getStates(consigne)
            .then(function(consigne) {
                // Get consigne value
                vm.thermostat.consigne = consigne.data[0].value;
            })

            deviceService.getStates(mode)
            .then(function(mode) {
                vm.modes.forEach(function(modes) {
                    if(modes.idMode === mode.data[0].value) {
                        vm.thermostat.mode = modes.name
                    }
                })
          })
        })

        $scope.submit = function() {
            var params = {
                'mode': $scope.modeselected.name,
                'endTime': null,
                'state': $scope.manualTemp
            }

            netatmoService.setMode(params)
            vm.thermostat.mode = $scope.modeselected.name
        }

        $scope.changedMod = function() {
            if ($scope.modeselected.idMode == 3) {
                vm.showManual = true
            } else {
                vm.showManual = false
            }
            vm.showButton = true
        }
    }
})();
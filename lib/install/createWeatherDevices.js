const Promise = require('bluebird');

module.exports = function createWeatherDevices(deviceInfo){

	var newDevice = {
		device: {
		name: 'Weather',
		protocol: 'wifi',
		service: 'netatmo',
		identifier: deviceInfo._id
		},
        types: [{
            name: deviceInfo.modules[0].module_name,
            type: 'Batterie',
            identifier: deviceInfo.modules[0]._id,
            tag: 'pile',
            unit: '%',
            sensor: true,
            min: 0,
            max: 100,
            value: deviceInfo.modules[0].battery_percent
        },
        {
            name: deviceInfo.modules[0].module_name,
            type: 'Température',
            identifier: deviceInfo.modules[0]._id,
            tag: 'temperature',
            unit: '°C',
            sensor: true,
            min: 0,
            max: 50,
            value: deviceInfo.modules[0].measured.temperature
        },
        {
            name: deviceInfo.modules[0].module_name,
            type: 'Humidité',
            identifier: deviceInfo.modules[0]._id,
            tag: 'Humidité',
            unit: '%',
            sensor: true,
            min: 0,
            max: 100,
            value: deviceInfo.modules[0].measured.setpoint_temp
        }]
    };

    return gladys.device.create(newDevice);

}
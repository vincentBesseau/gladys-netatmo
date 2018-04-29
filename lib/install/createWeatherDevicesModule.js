const Promise = require('bluebird');

module.exports = function createWeatherDevicesModule(deviceInfo){

	var newDevice = {
		device: {
		name: 'WeatherModule',
		protocol: 'wifi',
		service: 'netatmo',
		identifier: deviceInfo._id
		},
        types: [{
            name: 'Batterie',
            type: 'Batterie',
            identifier: 'Batterie',
            tag: 'pile',
            unit: '%',
            sensor: true,
            min: 0,
            max: 100,
            value: deviceInfo.modules[0].battery_percent
        },
        {
            name: 'Température',
            type: 'Température',
            identifier: 'Température',
            tag: 'temperature',
            unit: '°C',
            sensor: true,
            min: 0,
            max: 50,
            value: deviceInfo.modules[0].measured.temperature
        },
        {
            name: 'Humidité',
            type: 'Humidité',
            identifier: 'Humidité',
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
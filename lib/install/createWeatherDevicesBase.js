const Promise = require('bluebird');

module.exports = function createWeatherDevicesBase(deviceInfo){

	var newDevice = {
		device: {
		name: 'WeatherBase',
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
        },
        {
            name: 'co2',
            type: 'co2',
            identifier: 'co2',
            tag: 'co2',
            unit: 'ppm',
            sensor: true,
            min: 0,
            max: 5000
        },
        {
            name: 'Pressure',
            type: 'Pressure',
            identifier: 'Pressure',
            tag: 'Pressure',
            unit: 'mb',
            sensor: true,
            min: 260,
            max: 1160
        },
        {
            name: 'Noise',
            type: 'noise',
            identifier: 'noise',
            tag: 'noise',
            unit: 'dB',
            sensor: true,
            min: 35,
            max: 110
        }]
    };

    return gladys.device.create(newDevice);

}
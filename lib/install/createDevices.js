const Promise = require('bluebird');

module.exports = function createDevice(deviceInfo){

	var newDevice = {
		device: {
		name: 'Netatmo',
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
            max: 30,
            value: deviceInfo.modules[0].measured.temperature
        },
        {
            name: deviceInfo.modules[0].module_name,
            type: 'Consigne',
            identifier: deviceInfo.modules[0]._id,
            tag: 'consigne',
            unit: '°C',
            sensor: true,
            min: 0,
            max: 30,
            value: deviceInfo.modules[0].measured.setpoint_temp
        },
        {
            name: deviceInfo.modules[0].module_name,
            type: 'Mode',
            identifier: deviceInfo.modules[0]._id,
            tag: 'Mode',
            unit: '',
            sensor: true,
            min: 0,
            max: 5,
            value: deviceInfo.modules[0].setpoint.setpoint_mode
        }]
    };

    return gladys.device.create(newDevice);

}